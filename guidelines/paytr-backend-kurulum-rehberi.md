# B2B Production Intelligence Dashboard - PayTR Backend Entegrasyon Rehberi

Bu döküman, projenizde yer alan `Upgrade.tsx` ekranındaki PayTR ödeme adımının arka planını (Backend) hızlıca ayağa kaldırmanız için hazırlanmıştır. Geliştirme sürecinin güvenliği için ödeme işlemleri mutlaka sunucu (Firebase Cloud Functions veya NodeJS vs.) tarafında yapılmalıdır. 

Frontend tarafı zaten **PayTR iFrame yapısına** eksiksiz uyumlu hale getirilmiştir.

---

## 1. Sistemin Çalışma Mantığı ve Pro Plan Tanımlanması

Aklınızdaki en önemli soruyu yanıtlayalım: **"Ödeme alındığında direkt olarak üyelere pro plan tanımlanacak mı?"** 

**Evet, tam otomatik çalışacak.** Bunun için teknik işleyiş şu 3 aşamadan geçer:

1. **Token Alma (Kullanıcı 1. Adımı):** Kullanıcı "Seç ve Yükselt" dediğinde frontend, sizin arka planınızdaki bir endpoint'e (örn: `/createPayTRToken`) cüzdan, isim, fiyat vb. yollar. Arka plan PayTR'ye istek atıp sana bir `paytr_token` ile döner. Front end bu tokenı gördüğünde iFrame i çıkartır. Kullanıcı kart bilgilerini iFrame içine, PayTR ye girer.
2. **Ödemenin Çekilmesi:** PayTR parayı çeker veya çektiremezse kart limitiniz yok vs yazar. Eğer çekerse **sizin arka planınıza daha önce bildirdiğiniz "Webhook/Bildirim URL'sine" bir POST atar**. "İşlem başarılı, şu OID'li siparişim tamam" der.
3. **Firestore Güncellemesi (Otomatik Tanımlama):** Senin "Webhook/Bildirim" dinleyen arka plan fonksiyonun bu haberi aldığı gibi gelen Hash şifresini doğrular. Her şey doğruysa, Firestore veritabanına bağlanır ve kullanıcının belgesindeki `usage.plan` değerini `pro_individual` veya `pro_corporate` yapar, `usage.planEndDate` ini de aldığı ay süresince uzatır. Frontend'deki Firebase `onSnapshot` listeri (AuthContext.tsx içindeki) bu güncellemeyi saniyesinde yakalar, sayfayı yenilemeden konfetileri patlatır ve özellikleri açar!

---

## 2. Firebase Cloud Functions (veya Node.js) İçin Örnek Kodlar

Eğer Firebase Cloud Functions (veya herhangi bir express sunucu) kullanıyorsanız projenizin `functions` dizininde aşağıdaki iki ana API ucunu açmanız gerekir.

### A. createPayTRToken Endpoint'i (Kullanıcının iFrame'i açmasını sağlar)

```typescript
const functions = require("firebase-functions");
const crypto = require("crypto");
const fetch = require("node-fetch"); // Gerekirse ekleyin

exports.createPayTRToken = functions.https.onRequest(async (req, res) => {
    // CORS ayarlarını ekleyin
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") return res.status(204).send("");

    try {
        const { userId, accountType, period } = req.body;
        
        // Fiyatlandırma ve veritabanı (Firestore) kontrollerini burda yapın.
        // Güvenlik açısından fiyat her zaman BACKEND'de hesaplanıp PayTR'ye atılmalı.
        // Örn period: 6, accountType: individual -> fiyatı frontend yerine siz hesaplarsınız.
        const calculatedPrice = 6960 * 100; // Örn 6960 TL = 696000 kuruş olarak hesaplanmalı

        const merchant_id = "PAYTR_MERCHANT_ID";
        const merchant_key = "PAYTR_MERCHANT_KEY";
        const merchant_salt = "PAYTR_MERCHANT_SALT";
        
        const no_installment = 0; // Taksit imkanı
        const max_installment = 0; // Taksit sınırı
        const currency = "TL";
        const test_mode = 1; // Başlangıçta 1, canlıda 0 yapılır
        
        // Sipariş ID benzersiz olmalı (UID + TIMESTAMP)
        const merchant_oid = `${userId}_${Date.now()}`; 
        const user_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        // PayTR'nin veriyi doğrulaması için gerekli "Hash" algoritması parçası
        const user_basket = Buffer.from(JSON.stringify([
            ["Ulgen One Pro", calculatedPrice.toString(), 1]
        ])).toString("base64");
        
        // Çok önemli hash şifrelemesi kısmı:
        const hashStr = merchant_id + user_ip + merchant_oid + "email@email.com" + calculatedPrice + user_basket + no_installment + max_installment + currency + test_mode;
        const paytr_token = crypto.createHmac('sha256', merchant_key).update(hashStr + merchant_salt).digest('base64');
        
        // PAYTR API'YE ISTEK ATTIGIMIZ YER
        const paytrResponse = await fetch('https://www.paytr.com/odeme/api/get-token', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                merchant_id,
                user_ip,
                merchant_oid,
                email: "customer@email.com",
                payment_amount: calculatedPrice,
                paytr_token,
                user_basket,
                debug_on: 1,
                no_installment,
                max_installment,
                user_name: "Uye Adi",
                user_address: "Adres",
                user_phone: "05555555",
                merchant_ok_url: "https://yourdomain.com/payment-success",
                merchant_fail_url: "https://yourdomain.com/payment-fail",
                timeout_limit: "30",
                currency,
                test_mode
            })
        });

        const data = await paytrResponse.json();
        
        if(data.status === 'success') {
            res.json({ paytr_token: data.token });
        } else {
            console.error("PayTR Token Error", data.reason);
            res.status(500).json({ error: "Token alınamadı" });
        }

    } catch (err) {
        console.error(err);
        res.status(500).send("Sunucu hatası");
    }
});
```

### B. Webhook Endpoint'i (PayTR parayı aldığında haber verdiği uç)

Bu uç veritabanı (Firestore) update'ini yapacak tek yetkili yer olmalıdır. Kullanıcı sayfayı yenilese de format atsa da çalışır.

```typescript
const admin = require('firebase-admin');

// admin.initializeApp(); // uygulamanızda zaten vardır

exports.paytrWebhook = functions.https.onRequest(async (req, res) => {
    try {
        const { merchant_oid, status, total_amount, hash } = req.body;
        
        const merchant_key = "PAYTR_MERCHANT_KEY";
        const merchant_salt = "PAYTR_MERCHANT_SALT";
        
        // Hash kontrolü (Bunu PayTR mi yolladı başkası mı)
        const generateHash = crypto.createHmac('sha256', merchant_key).update(merchant_oid + merchant_salt + status + total_amount).digest('base64');
        
        if (hash !== generateHash) {
            return res.status(403).send("PAYTR notification failed: bad hash");
        }
        
        if (status === 'success') {
            // SİPARİŞ BAŞARILI
            
            // OID parselle: `userId_timestamp_period` tarzı yapmışsanız
            const userId = merchant_oid.split('_')[0];
            
            const userRef = admin.firestore().doc(`users/${userId}`);
            // Seçilen paketin süresine göre tarih belirlenir (1ay, 6ay, 1yıl)
            const newEndDate = new Date();
            newEndDate.setMonth(newEndDate.getMonth() + 12); // Örn yıllık plan

            await userRef.update({
               'usage.plan': 'pro_individual', // veya hesap type a göre
               'usage.planEndDate': newEndDate,
               'updatedAt': admin.firestore.FieldValue.serverTimestamp()
            });

            // OK döndür ki PayTR tekrar tekrar denemesin
            return res.status(200).send("OK");
        } else {
            // ÖDEME BAŞARISIZ
            console.log("PAYTR odeme basarisiz oid:", merchant_oid);
            return res.status(200).send("OK");
        }
    } catch (error) {
        return res.status(500).send("Sunucu hatasi");
    }
});
```

Bu temel setup ile PayTR tamamen devrededir! Geliştirmeye geçeceğiniz zaman bu Node.js/Cloud Function yapısını kullanabilirsiniz. Frontend kodlarınız ise güncel olarak hazır. Sırada incelememizi istediğiniz bir ekran var mıdır?
