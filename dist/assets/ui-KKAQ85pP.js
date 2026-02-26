import{r as It,R as Ft}from"./charts-C580dW7D.js";function qt(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ke={exports:{}},ne={},ge={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Vt(){if(je)return _;je=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function m(c){return c===null||typeof c!="object"?null:(c=v&&c[v]||c["@@iterator"],typeof c=="function"?c:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,f={};function k(c,d,w){this.props=c,this.context=d,this.refs=f,this.updater=w||g}k.prototype.isReactComponent={},k.prototype.setState=function(c,d){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,d,"setState")},k.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function b(){}b.prototype=k.prototype;function E(c,d,w){this.props=c,this.context=d,this.refs=f,this.updater=w||g}var C=E.prototype=new b;C.constructor=E,R(C,k.prototype),C.isPureReactComponent=!0;var N=Array.isArray,A=Object.prototype.hasOwnProperty,L={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function q(c,d,w){var P,S={},$=null,T=null;if(d!=null)for(P in d.ref!==void 0&&(T=d.ref),d.key!==void 0&&($=""+d.key),d)A.call(d,P)&&!M.hasOwnProperty(P)&&(S[P]=d[P]);var D=arguments.length-2;if(D===1)S.children=w;else if(1<D){for(var O=Array(D),I=0;I<D;I++)O[I]=arguments[I+2];S.children=O}if(c&&c.defaultProps)for(P in D=c.defaultProps,D)S[P]===void 0&&(S[P]=D[P]);return{$$typeof:e,type:c,key:$,ref:T,props:S,_owner:L.current}}function U(c,d){return{$$typeof:e,type:c.type,key:d,ref:c.ref,props:c.props,_owner:c._owner}}function W(c){return typeof c=="object"&&c!==null&&c.$$typeof===e}function X(c){var d={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(w){return d[w]})}var te=/\/+/g;function me(c,d){return typeof c=="object"&&c!==null&&c.key!=null?X(""+c.key):d.toString(36)}function re(c,d,w,P,S){var $=typeof c;($==="undefined"||$==="boolean")&&(c=null);var T=!1;if(c===null)T=!0;else switch($){case"string":case"number":T=!0;break;case"object":switch(c.$$typeof){case e:case t:T=!0}}if(T)return T=c,S=S(T),c=P===""?"."+me(T,0):P,N(S)?(w="",c!=null&&(w=c.replace(te,"$&/")+"/"),re(S,d,w,"",function(I){return I})):S!=null&&(W(S)&&(S=U(S,w+(!S.key||T&&T.key===S.key?"":(""+S.key).replace(te,"$&/")+"/")+c)),d.push(S)),1;if(T=0,P=P===""?".":P+":",N(c))for(var D=0;D<c.length;D++){$=c[D];var O=P+me($,D);T+=re($,d,w,O,S)}else if(O=m(c),typeof O=="function")for(c=O.call(c),D=0;!($=c.next()).done;)$=$.value,O=P+me($,D++),T+=re($,d,w,O,S);else if($==="object")throw d=String(c),Error("Objects are not valid as a React child (found: "+(d==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":d)+"). If you meant to render a collection of children, use an array instead.");return T}function oe(c,d,w){if(c==null)return c;var P=[],S=0;return re(c,P,"","",function($){return d.call(w,$,S++)}),P}function Lt(c){if(c._status===-1){var d=c._result;d=d(),d.then(function(w){(c._status===0||c._status===-1)&&(c._status=1,c._result=w)},function(w){(c._status===0||c._status===-1)&&(c._status=2,c._result=w)}),c._status===-1&&(c._status=0,c._result=d)}if(c._status===1)return c._result.default;throw c._result}var j={current:null},ae={transition:null},jt={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:ae,ReactCurrentOwner:L};function Le(){throw Error("act(...) is not supported in production builds of React.")}return _.Children={map:oe,forEach:function(c,d,w){oe(c,function(){d.apply(this,arguments)},w)},count:function(c){var d=0;return oe(c,function(){d++}),d},toArray:function(c){return oe(c,function(d){return d})||[]},only:function(c){if(!W(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},_.Component=k,_.Fragment=n,_.Profiler=o,_.PureComponent=E,_.StrictMode=r,_.Suspense=h,_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jt,_.act=Le,_.cloneElement=function(c,d,w){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var P=R({},c.props),S=c.key,$=c.ref,T=c._owner;if(d!=null){if(d.ref!==void 0&&($=d.ref,T=L.current),d.key!==void 0&&(S=""+d.key),c.type&&c.type.defaultProps)var D=c.type.defaultProps;for(O in d)A.call(d,O)&&!M.hasOwnProperty(O)&&(P[O]=d[O]===void 0&&D!==void 0?D[O]:d[O])}var O=arguments.length-2;if(O===1)P.children=w;else if(1<O){D=Array(O);for(var I=0;I<O;I++)D[I]=arguments[I+2];P.children=D}return{$$typeof:e,type:c.type,key:S,ref:$,props:P,_owner:T}},_.createContext=function(c){return c={$$typeof:u,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:a,_context:c},c.Consumer=c},_.createElement=q,_.createFactory=function(c){var d=q.bind(null,c);return d.type=c,d},_.createRef=function(){return{current:null}},_.forwardRef=function(c){return{$$typeof:s,render:c}},_.isValidElement=W,_.lazy=function(c){return{$$typeof:p,_payload:{_status:-1,_result:c},_init:Lt}},_.memo=function(c,d){return{$$typeof:y,type:c,compare:d===void 0?null:d}},_.startTransition=function(c){var d=ae.transition;ae.transition={};try{c()}finally{ae.transition=d}},_.unstable_act=Le,_.useCallback=function(c,d){return j.current.useCallback(c,d)},_.useContext=function(c){return j.current.useContext(c)},_.useDebugValue=function(){},_.useDeferredValue=function(c){return j.current.useDeferredValue(c)},_.useEffect=function(c,d){return j.current.useEffect(c,d)},_.useId=function(){return j.current.useId()},_.useImperativeHandle=function(c,d,w){return j.current.useImperativeHandle(c,d,w)},_.useInsertionEffect=function(c,d){return j.current.useInsertionEffect(c,d)},_.useLayoutEffect=function(c,d){return j.current.useLayoutEffect(c,d)},_.useMemo=function(c,d){return j.current.useMemo(c,d)},_.useReducer=function(c,d,w){return j.current.useReducer(c,d,w)},_.useRef=function(c){return j.current.useRef(c)},_.useState=function(c){return j.current.useState(c)},_.useSyncExternalStore=function(c,d,w){return j.current.useSyncExternalStore(c,d,w)},_.useTransition=function(){return j.current.useTransition()},_.version="18.3.1",_}var Ie;function tt(){return Ie||(Ie=1,ge.exports=Vt()),ge.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe;function Wt(){if(Fe)return ne;Fe=1;var e=tt(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(s,h,y){var p,v={},m=null,g=null;y!==void 0&&(m=""+y),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(g=h.ref);for(p in h)r.call(h,p)&&!a.hasOwnProperty(p)&&(v[p]=h[p]);if(s&&s.defaultProps)for(p in h=s.defaultProps,h)v[p]===void 0&&(v[p]=h[p]);return{$$typeof:t,type:s,key:m,ref:g,props:v,_owner:o.current}}return ne.Fragment=n,ne.jsx=u,ne.jsxs=u,ne}var qe;function Ut(){return qe||(qe=1,ke.exports=Wt()),ke.exports}var x=Ut(),i=tt();const Bt=zt(i),Ht=qt({__proto__:null,default:Bt},[i]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gt=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),ze=e=>{const t=Gt(e);return t.charAt(0).toUpperCase()+t.slice(1)},nt=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...s},h)=>i.createElement("svg",{ref:h,...Kt,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:nt("lucide",o),...s},[...u.map(([y,p])=>i.createElement(y,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,t)=>{const n=i.forwardRef(({className:r,...o},a)=>i.createElement(Xt,{ref:a,iconNode:t,className:nt(`lucide-${Zt(ze(e))}`,`lucide-${e}`,r),...o}));return n.displayName=ze(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],va=l("activity",Yt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]],ma=l("anchor",Jt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ka=l("arrow-left",Qt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ga=l("arrow-right",en);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],_a=l("ban",tn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],xa=l("bell",nn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],ba=l("binary",rn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Ma=l("box",on);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],wa=l("brain-circuit",an);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Ea=l("building-2",cn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Ca=l("calculator",sn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Na=l("calendar",un);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Sa=l("chart-column",ln);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],Ra=l("chart-line",dn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pa=l("check",fn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Aa=l("chevron-down",yn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Oa=l("chevron-left",hn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$a=l("chevron-right",pn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Da=l("chevron-up",vn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ta=l("circle-alert",mn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],La=l("circle-check-big",kn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ja=l("circle-check",gn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ia=l("circle-x",_n);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fa=l("circle",xn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],qa=l("clock",bn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],za=l("coins",Mn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Va=l("copy",wn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Wa=l("cpu",En);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Ua=l("database",Cn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Ba=l("dollar-sign",Nn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Ha=l("download",Sn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Za=l("ellipsis",Rn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Ga=l("eye-off",Pn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ka=l("eye",An);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]],Xa=l("factory",On);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Ya=l("file-check",$n);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]],Ja=l("file-question",Dn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Qa=l("file-spreadsheet",Tn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ec=l("file-text",Ln);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],tc=l("funnel",jn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],nc=l("globe",In);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],rc=l("grip-vertical",Fn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],oc=l("image-plus",qn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ac=l("info",zn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],cc=l("layers",Vn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ic=l("layout-dashboard",Wn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],sc=l("layout-template",Un);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],uc=l("list-checks",Bn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],lc=l("loader-circle",Hn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],dc=l("lock",Zn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],fc=l("log-in",Gn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],yc=l("log-out",Kn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],hc=l("mail",Xn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],pc=l("map-pin",Yn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],vc=l("maximize",Jn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],mc=l("package",Qn);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],kc=l("pen-line",er);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],gc=l("percent",tr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],_c=l("phone",nr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xc=l("plus",rr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],bc=l("refresh-ccw",or);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Mc=l("refresh-cw",ar);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],wc=l("rotate-ccw",cr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],Ec=l("ruler",ir);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Cc=l("save",sr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Nc=l("scale",ur);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],Sc=l("scissors",lr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Rc=l("search",dr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Pc=l("send",fr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Ac=l("server",yr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Oc=l("settings-2",hr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$c=l("settings",pr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Dc=l("shield-alert",vr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Tc=l("shield-check",mr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Lc=l("shield",kr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],jc=l("sliders-vertical",gr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ic=l("sparkles",_r);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Fc=l("square-check-big",xr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],qc=l("tag",br);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],zc=l("target",Mr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Vc=l("terminal",wr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Wc=l("trash-2",Er);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],Uc=l("trending-down",Cr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Bc=l("trending-up",Nr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Hc=l("triangle-alert",Sr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Zc=l("trophy",Rr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],Gc=l("undo",Pr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Kc=l("upload",Ar);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Xc=l("user-minus",Or);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Yc=l("user-plus",$r);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Jc=l("user",Dr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Qc=l("users",Tr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ei=l("x",Lr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ti=l("zap-off",jr);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ni=l("zap",Ir);function Ve(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function rt(...e){return t=>{let n=!1;const r=e.map(o=>{const a=Ve(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():Ve(e[o],null)}}}}function K(...e){return i.useCallback(rt(...e),e)}var Ae=i.forwardRef((e,t)=>{const{children:n,...r}=e,o=i.Children.toArray(n),a=o.find(qr);if(a){const u=a.props.children,s=o.map(h=>h===a?i.Children.count(u)>1?i.Children.only(null):i.isValidElement(u)?u.props.children:null:h);return x.jsx(Se,{...r,ref:t,children:i.isValidElement(u)?i.cloneElement(u,void 0,s):null})}return x.jsx(Se,{...r,ref:t,children:n})});Ae.displayName="Slot";var Se=i.forwardRef((e,t)=>{const{children:n,...r}=e;if(i.isValidElement(n)){const o=Vr(n),a=zr(r,n.props);return n.type!==i.Fragment&&(a.ref=t?rt(t,o):o),i.cloneElement(n,a)}return i.Children.count(n)>1?i.Children.only(null):null});Se.displayName="SlotClone";var Fr=({children:e})=>x.jsx(x.Fragment,{children:e});function qr(e){return i.isValidElement(e)&&e.type===Fr}function zr(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...s)=>{a(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function Vr(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function H(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Wr(e,t){const n=i.createContext(t),r=a=>{const{children:u,...s}=a,h=i.useMemo(()=>s,Object.values(s));return x.jsx(n.Provider,{value:h,children:u})};r.displayName=e+"Provider";function o(a){const u=i.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[r,o]}function Ur(e,t=[]){let n=[];function r(a,u){const s=i.createContext(u),h=n.length;n=[...n,u];const y=v=>{var b;const{scope:m,children:g,...R}=v,f=((b=m==null?void 0:m[e])==null?void 0:b[h])||s,k=i.useMemo(()=>R,Object.values(R));return x.jsx(f.Provider,{value:k,children:g})};y.displayName=a+"Provider";function p(v,m){var f;const g=((f=m==null?void 0:m[e])==null?void 0:f[h])||s,R=i.useContext(g);if(R)return R;if(u!==void 0)return u;throw new Error(`\`${v}\` must be used within \`${a}\``)}return[y,p]}const o=()=>{const a=n.map(u=>i.createContext(u));return function(s){const h=(s==null?void 0:s[e])||a;return i.useMemo(()=>({[`__scope${e}`]:{...s,[e]:h}}),[s,h])}};return o.scopeName=e,[r,Br(o,...t)]}function Br(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const u=r.reduce((s,{useScope:h,scopeName:y})=>{const v=h(a)[`__scope${y}`];return{...s,...v}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}function Z(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Hr({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Zr({defaultProp:t,onChange:n}),a=e!==void 0,u=a?e:r,s=Z(n),h=i.useCallback(y=>{if(a){const v=typeof y=="function"?y(e):y;v!==e&&s(v)}else o(y)},[a,e,o,s]);return[u,h]}function Zr({defaultProp:e,onChange:t}){const n=i.useState(e),[r]=n,o=i.useRef(r),a=Z(t);return i.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}var Gr=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],V=Gr.reduce((e,t)=>{const n=i.forwardRef((r,o)=>{const{asChild:a,...u}=r,s=a?Ae:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(s,{...u,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Kr(e,t){e&&It.flushSync(()=>e.dispatchEvent(t))}function Xr(e,t=globalThis==null?void 0:globalThis.document){const n=Z(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Yr="DismissableLayer",Re="dismissableLayer.update",Jr="dismissableLayer.pointerDownOutside",Qr="dismissableLayer.focusOutside",We,ot=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),at=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:u,onDismiss:s,...h}=e,y=i.useContext(ot),[p,v]=i.useState(null),m=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=i.useState({}),R=K(t,M=>v(M)),f=Array.from(y.layers),[k]=[...y.layersWithOutsidePointerEventsDisabled].slice(-1),b=f.indexOf(k),E=p?f.indexOf(p):-1,C=y.layersWithOutsidePointerEventsDisabled.size>0,N=E>=b,A=no(M=>{const q=M.target,U=[...y.branches].some(W=>W.contains(q));!N||U||(o==null||o(M),u==null||u(M),M.defaultPrevented||s==null||s())},m),L=ro(M=>{const q=M.target;[...y.branches].some(W=>W.contains(q))||(a==null||a(M),u==null||u(M),M.defaultPrevented||s==null||s())},m);return Xr(M=>{E===y.layers.size-1&&(r==null||r(M),!M.defaultPrevented&&s&&(M.preventDefault(),s()))},m),i.useEffect(()=>{if(p)return n&&(y.layersWithOutsidePointerEventsDisabled.size===0&&(We=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),y.layersWithOutsidePointerEventsDisabled.add(p)),y.layers.add(p),Ue(),()=>{n&&y.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=We)}},[p,m,n,y]),i.useEffect(()=>()=>{p&&(y.layers.delete(p),y.layersWithOutsidePointerEventsDisabled.delete(p),Ue())},[p,y]),i.useEffect(()=>{const M=()=>g({});return document.addEventListener(Re,M),()=>document.removeEventListener(Re,M)},[]),x.jsx(V.div,{...h,ref:R,style:{pointerEvents:C?N?"auto":"none":void 0,...e.style},onFocusCapture:H(e.onFocusCapture,L.onFocusCapture),onBlurCapture:H(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:H(e.onPointerDownCapture,A.onPointerDownCapture)})});at.displayName=Yr;var eo="DismissableLayerBranch",to=i.forwardRef((e,t)=>{const n=i.useContext(ot),r=i.useRef(null),o=K(t,r);return i.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),x.jsx(V.div,{...e,ref:o})});to.displayName=eo;function no(e,t=globalThis==null?void 0:globalThis.document){const n=Z(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let h=function(){ct(Jr,n,y,{discrete:!0})};const y={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=h,t.addEventListener("click",o.current,{once:!0})):h()}else t.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function ro(e,t=globalThis==null?void 0:globalThis.document){const n=Z(e),r=i.useRef(!1);return i.useEffect(()=>{const o=a=>{a.target&&!r.current&&ct(Qr,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Ue(){const e=new CustomEvent(Re);document.dispatchEvent(e)}function ct(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Kr(o,a):o.dispatchEvent(a)}var _e=0;function oo(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Be()),document.body.insertAdjacentElement("beforeend",e[1]??Be()),_e++,()=>{_e===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),_e--}},[])}function Be(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var xe="focusScope.autoFocusOnMount",be="focusScope.autoFocusOnUnmount",He={bubbles:!1,cancelable:!0},ao="FocusScope",it=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[s,h]=i.useState(null),y=Z(o),p=Z(a),v=i.useRef(null),m=K(t,f=>h(f)),g=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let f=function(C){if(g.paused||!s)return;const N=C.target;s.contains(N)?v.current=N:B(v.current,{select:!0})},k=function(C){if(g.paused||!s)return;const N=C.relatedTarget;N!==null&&(s.contains(N)||B(v.current,{select:!0}))},b=function(C){if(document.activeElement===document.body)for(const A of C)A.removedNodes.length>0&&B(s)};document.addEventListener("focusin",f),document.addEventListener("focusout",k);const E=new MutationObserver(b);return s&&E.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",k),E.disconnect()}}},[r,s,g.paused]),i.useEffect(()=>{if(s){Ge.add(g);const f=document.activeElement;if(!s.contains(f)){const b=new CustomEvent(xe,He);s.addEventListener(xe,y),s.dispatchEvent(b),b.defaultPrevented||(co(fo(st(s)),{select:!0}),document.activeElement===f&&B(s))}return()=>{s.removeEventListener(xe,y),setTimeout(()=>{const b=new CustomEvent(be,He);s.addEventListener(be,p),s.dispatchEvent(b),b.defaultPrevented||B(f??document.body,{select:!0}),s.removeEventListener(be,p),Ge.remove(g)},0)}}},[s,y,p,g]);const R=i.useCallback(f=>{if(!n&&!r||g.paused)return;const k=f.key==="Tab"&&!f.altKey&&!f.ctrlKey&&!f.metaKey,b=document.activeElement;if(k&&b){const E=f.currentTarget,[C,N]=io(E);C&&N?!f.shiftKey&&b===N?(f.preventDefault(),n&&B(C,{select:!0})):f.shiftKey&&b===C&&(f.preventDefault(),n&&B(N,{select:!0})):b===E&&f.preventDefault()}},[n,r,g.paused]);return x.jsx(V.div,{tabIndex:-1,...u,ref:m,onKeyDown:R})});it.displayName=ao;function co(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(B(r,{select:t}),document.activeElement!==n)return}function io(e){const t=st(e),n=Ze(t,e),r=Ze(t.reverse(),e);return[n,r]}function st(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ze(e,t){for(const n of e)if(!so(n,{upTo:t}))return n}function so(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function uo(e){return e instanceof HTMLInputElement&&"select"in e}function B(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&uo(e)&&t&&e.select()}}var Ge=lo();function lo(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Ke(e,t),e.unshift(t)},remove(t){var n;e=Ke(e,t),(n=e[0])==null||n.resume()}}}function Ke(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function fo(e){return e.filter(t=>t.tagName!=="A")}var ye=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},yo=Ht.useId||(()=>{}),ho=0;function Me(e){const[t,n]=i.useState(yo());return ye(()=>{n(r=>r??String(ho++))},[e]),e||(t?`radix-${t}`:"")}var po="Portal",ut=i.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[o,a]=i.useState(!1);ye(()=>a(!0),[]);const u=n||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return u?Ft.createPortal(x.jsx(V.div,{...r,ref:t}),u):null});ut.displayName=po;function vo(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var pe=e=>{const{present:t,children:n}=e,r=mo(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),a=K(r.ref,ko(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:a}):null};pe.displayName="Presence";function mo(e){const[t,n]=i.useState(),r=i.useRef({}),o=i.useRef(e),a=i.useRef("none"),u=e?"mounted":"unmounted",[s,h]=vo(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const y=ce(r.current);a.current=s==="mounted"?y:"none"},[s]),ye(()=>{const y=r.current,p=o.current;if(p!==e){const m=a.current,g=ce(y);e?h("MOUNT"):g==="none"||(y==null?void 0:y.display)==="none"?h("UNMOUNT"):h(p&&m!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,h]),ye(()=>{if(t){let y;const p=t.ownerDocument.defaultView??window,v=g=>{const f=ce(r.current).includes(g.animationName);if(g.target===t&&f&&(h("ANIMATION_END"),!o.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",y=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},m=g=>{g.target===t&&(a.current=ce(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",v),t.addEventListener("animationend",v),()=>{p.clearTimeout(y),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",v),t.removeEventListener("animationend",v)}}else h("ANIMATION_END")},[t,h]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:i.useCallback(y=>{y&&(r.current=getComputedStyle(y)),n(y)},[])}}function ce(e){return(e==null?void 0:e.animationName)||"none"}function ko(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var go=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Y=new WeakMap,ie=new WeakMap,se={},we=0,lt=function(e){return e&&(e.host||lt(e.parentNode))},_o=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=lt(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},xo=function(e,t,n,r){var o=_o(t,Array.isArray(e)?e:[e]);se[n]||(se[n]=new WeakMap);var a=se[n],u=[],s=new Set,h=new Set(o),y=function(v){!v||s.has(v)||(s.add(v),y(v.parentNode))};o.forEach(y);var p=function(v){!v||h.has(v)||Array.prototype.forEach.call(v.children,function(m){if(s.has(m))p(m);else try{var g=m.getAttribute(r),R=g!==null&&g!=="false",f=(Y.get(m)||0)+1,k=(a.get(m)||0)+1;Y.set(m,f),a.set(m,k),u.push(m),f===1&&R&&ie.set(m,!0),k===1&&m.setAttribute(n,"true"),R||m.setAttribute(r,"true")}catch(b){console.error("aria-hidden: cannot operate on ",m,b)}})};return p(t),s.clear(),we++,function(){u.forEach(function(v){var m=Y.get(v)-1,g=a.get(v)-1;Y.set(v,m),a.set(v,g),m||(ie.has(v)||v.removeAttribute(r),ie.delete(v)),g||v.removeAttribute(n)}),we--,we||(Y=new WeakMap,Y=new WeakMap,ie=new WeakMap,se={})}},bo=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=go(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),xo(r,o,n,"aria-hidden")):function(){return null}},z=function(){return z=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},z.apply(this,arguments)};function dt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var de="right-scroll-bar-position",fe="width-before-scroll-bar",wo="with-scroll-bars-hidden",Eo="--removed-body-scroll-bar-size";function Ee(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Co(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var No=typeof window<"u"?i.useLayoutEffect:i.useEffect,Xe=new WeakMap;function So(e,t){var n=Co(null,function(r){return e.forEach(function(o){return Ee(o,r)})});return No(function(){var r=Xe.get(n);if(r){var o=new Set(r),a=new Set(e),u=n.current;o.forEach(function(s){a.has(s)||Ee(s,null)}),a.forEach(function(s){o.has(s)||Ee(s,u)})}Xe.set(n,e)},[e]),n}function Ro(e){return e}function Po(e,t){t===void 0&&(t=Ro);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var u=t(a,r);return n.push(u),function(){n=n.filter(function(s){return s!==u})}},assignSyncMedium:function(a){for(r=!0;n.length;){var u=n;n=[],u.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var u=[];if(n.length){var s=n;n=[],s.forEach(a),u=n}var h=function(){var p=u;u=[],p.forEach(a)},y=function(){return Promise.resolve().then(h)};y(),n={push:function(p){u.push(p),y()},filter:function(p){return u=u.filter(p),n}}}};return o}function Ao(e){e===void 0&&(e={});var t=Po(null);return t.options=z({async:!0,ssr:!1},e),t}var ft=function(e){var t=e.sideCar,n=dt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,z({},n))};ft.isSideCarExport=!0;function Oo(e,t){return e.useMedium(t),ft}var yt=Ao(),Ce=function(){},ve=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:Ce,onWheelCapture:Ce,onTouchMoveCapture:Ce}),o=r[0],a=r[1],u=e.forwardProps,s=e.children,h=e.className,y=e.removeScrollBar,p=e.enabled,v=e.shards,m=e.sideCar,g=e.noRelative,R=e.noIsolation,f=e.inert,k=e.allowPinchZoom,b=e.as,E=b===void 0?"div":b,C=e.gapMode,N=dt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=m,L=So([n,t]),M=z(z({},N),o);return i.createElement(i.Fragment,null,p&&i.createElement(A,{sideCar:yt,removeScrollBar:y,shards:v,noRelative:g,noIsolation:R,inert:f,setCallbacks:a,allowPinchZoom:!!k,lockRef:n,gapMode:C}),u?i.cloneElement(i.Children.only(s),z(z({},M),{ref:L})):i.createElement(E,z({},M,{className:h,ref:L}),s))});ve.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ve.classNames={fullWidth:fe,zeroRight:de};var $o=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Do(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=$o();return t&&e.setAttribute("nonce",t),e}function To(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Lo(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var jo=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Do())&&(To(t,n),Lo(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Io=function(){var e=jo();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ht=function(){var e=Io(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Fo={left:0,top:0,right:0,gap:0},Ne=function(e){return parseInt(e||"",10)||0},qo=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Ne(n),Ne(r),Ne(o)]},zo=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Fo;var t=qo(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Vo=ht(),ee="data-scroll-locked",Wo=function(e,t,n,r){var o=e.left,a=e.top,u=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(wo,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(ee,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(de,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(fe,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(de," .").concat(de,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(fe," .").concat(fe,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(ee,`] {
    `).concat(Eo,": ").concat(s,`px;
  }
`)},Ye=function(){var e=parseInt(document.body.getAttribute(ee)||"0",10);return isFinite(e)?e:0},Uo=function(){i.useEffect(function(){return document.body.setAttribute(ee,(Ye()+1).toString()),function(){var e=Ye()-1;e<=0?document.body.removeAttribute(ee):document.body.setAttribute(ee,e.toString())}},[])},Bo=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Uo();var a=i.useMemo(function(){return zo(o)},[o]);return i.createElement(Vo,{styles:Wo(a,!t,o,n?"":"!important")})},Pe=!1;if(typeof window<"u")try{var ue=Object.defineProperty({},"passive",{get:function(){return Pe=!0,!0}});window.addEventListener("test",ue,ue),window.removeEventListener("test",ue,ue)}catch{Pe=!1}var J=Pe?{passive:!1}:!1,Ho=function(e){return e.tagName==="TEXTAREA"},pt=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ho(e)&&n[t]==="visible")},Zo=function(e){return pt(e,"overflowY")},Go=function(e){return pt(e,"overflowX")},Je=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=vt(e,r);if(o){var a=mt(e,r),u=a[1],s=a[2];if(u>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Ko=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Xo=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},vt=function(e,t){return e==="v"?Zo(t):Go(t)},mt=function(e,t){return e==="v"?Ko(t):Xo(t)},Yo=function(e,t){return e==="h"&&t==="rtl"?-1:1},Jo=function(e,t,n,r,o){var a=Yo(e,window.getComputedStyle(t).direction),u=a*r,s=n.target,h=t.contains(s),y=!1,p=u>0,v=0,m=0;do{if(!s)break;var g=mt(e,s),R=g[0],f=g[1],k=g[2],b=f-k-a*R;(R||b)&&vt(e,s)&&(v+=b,m+=R);var E=s.parentNode;s=E&&E.nodeType===Node.DOCUMENT_FRAGMENT_NODE?E.host:E}while(!h&&s!==document.body||h&&(t.contains(s)||t===s));return(p&&Math.abs(v)<1||!p&&Math.abs(m)<1)&&(y=!0),y},le=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Qe=function(e){return[e.deltaX,e.deltaY]},et=function(e){return e&&"current"in e?e.current:e},Qo=function(e,t){return e[0]===t[0]&&e[1]===t[1]},ea=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ta=0,Q=[];function na(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(ta++)[0],a=i.useState(ht)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var f=Mo([e.lockRef.current],(e.shards||[]).map(et),!0).filter(Boolean);return f.forEach(function(k){return k.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),f.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=i.useCallback(function(f,k){if("touches"in f&&f.touches.length===2||f.type==="wheel"&&f.ctrlKey)return!u.current.allowPinchZoom;var b=le(f),E=n.current,C="deltaX"in f?f.deltaX:E[0]-b[0],N="deltaY"in f?f.deltaY:E[1]-b[1],A,L=f.target,M=Math.abs(C)>Math.abs(N)?"h":"v";if("touches"in f&&M==="h"&&L.type==="range")return!1;var q=window.getSelection(),U=q&&q.anchorNode,W=U?U===L||U.contains(L):!1;if(W)return!1;var X=Je(M,L);if(!X)return!0;if(X?A=M:(A=M==="v"?"h":"v",X=Je(M,L)),!X)return!1;if(!r.current&&"changedTouches"in f&&(C||N)&&(r.current=A),!A)return!0;var te=r.current||A;return Jo(te,k,f,te==="h"?C:N)},[]),h=i.useCallback(function(f){var k=f;if(!(!Q.length||Q[Q.length-1]!==a)){var b="deltaY"in k?Qe(k):le(k),E=t.current.filter(function(A){return A.name===k.type&&(A.target===k.target||k.target===A.shadowParent)&&Qo(A.delta,b)})[0];if(E&&E.should){k.cancelable&&k.preventDefault();return}if(!E){var C=(u.current.shards||[]).map(et).filter(Boolean).filter(function(A){return A.contains(k.target)}),N=C.length>0?s(k,C[0]):!u.current.noIsolation;N&&k.cancelable&&k.preventDefault()}}},[]),y=i.useCallback(function(f,k,b,E){var C={name:f,delta:k,target:b,should:E,shadowParent:ra(b)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(N){return N!==C})},1)},[]),p=i.useCallback(function(f){n.current=le(f),r.current=void 0},[]),v=i.useCallback(function(f){y(f.type,Qe(f),f.target,s(f,e.lockRef.current))},[]),m=i.useCallback(function(f){y(f.type,le(f),f.target,s(f,e.lockRef.current))},[]);i.useEffect(function(){return Q.push(a),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:m}),document.addEventListener("wheel",h,J),document.addEventListener("touchmove",h,J),document.addEventListener("touchstart",p,J),function(){Q=Q.filter(function(f){return f!==a}),document.removeEventListener("wheel",h,J),document.removeEventListener("touchmove",h,J),document.removeEventListener("touchstart",p,J)}},[]);var g=e.removeScrollBar,R=e.inert;return i.createElement(i.Fragment,null,R?i.createElement(a,{styles:ea(o)}):null,g?i.createElement(Bo,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function ra(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const oa=Oo(yt,na);var kt=i.forwardRef(function(e,t){return i.createElement(ve,z({},e,{ref:t,sideCar:oa}))});kt.classNames=ve.classNames;var Oe="Dialog",[gt]=Ur(Oe),[aa,F]=gt(Oe),_t=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,s=i.useRef(null),h=i.useRef(null),[y=!1,p]=Hr({prop:r,defaultProp:o,onChange:a});return x.jsx(aa,{scope:t,triggerRef:s,contentRef:h,contentId:Me(),titleId:Me(),descriptionId:Me(),open:y,onOpenChange:p,onOpenToggle:i.useCallback(()=>p(v=>!v),[p]),modal:u,children:n})};_t.displayName=Oe;var xt="DialogTrigger",bt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=F(xt,n),a=K(t,o.triggerRef);return x.jsx(V.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Te(o.open),...r,ref:a,onClick:H(e.onClick,o.onOpenToggle)})});bt.displayName=xt;var $e="DialogPortal",[ca,Mt]=gt($e,{forceMount:void 0}),wt=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=F($e,t);return x.jsx(ca,{scope:t,forceMount:n,children:i.Children.map(r,u=>x.jsx(pe,{present:n||a.open,children:x.jsx(ut,{asChild:!0,container:o,children:u})}))})};wt.displayName=$e;var he="DialogOverlay",Et=i.forwardRef((e,t)=>{const n=Mt(he,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=F(he,e.__scopeDialog);return a.modal?x.jsx(pe,{present:r||a.open,children:x.jsx(ia,{...o,ref:t})}):null});Et.displayName=he;var ia=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=F(he,n);return x.jsx(kt,{as:Ae,allowPinchZoom:!0,shards:[o.contentRef],children:x.jsx(V.div,{"data-state":Te(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),G="DialogContent",Ct=i.forwardRef((e,t)=>{const n=Mt(G,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=F(G,e.__scopeDialog);return x.jsx(pe,{present:r||a.open,children:a.modal?x.jsx(sa,{...o,ref:t}):x.jsx(ua,{...o,ref:t})})});Ct.displayName=G;var sa=i.forwardRef((e,t)=>{const n=F(G,e.__scopeDialog),r=i.useRef(null),o=K(t,n.contentRef,r);return i.useEffect(()=>{const a=r.current;if(a)return bo(a)},[]),x.jsx(Nt,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:H(e.onCloseAutoFocus,a=>{var u;a.preventDefault(),(u=n.triggerRef.current)==null||u.focus()}),onPointerDownOutside:H(e.onPointerDownOutside,a=>{const u=a.detail.originalEvent,s=u.button===0&&u.ctrlKey===!0;(u.button===2||s)&&a.preventDefault()}),onFocusOutside:H(e.onFocusOutside,a=>a.preventDefault())})}),ua=i.forwardRef((e,t)=>{const n=F(G,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return x.jsx(Nt,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var u,s;(u=e.onCloseAutoFocus)==null||u.call(e,a),a.defaultPrevented||(r.current||(s=n.triggerRef.current)==null||s.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var h,y;(h=e.onInteractOutside)==null||h.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const u=a.target;((y=n.triggerRef.current)==null?void 0:y.contains(u))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),Nt=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,s=F(G,n),h=i.useRef(null),y=K(t,h);return oo(),x.jsxs(x.Fragment,{children:[x.jsx(it,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:x.jsx(at,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":Te(s.open),...u,ref:y,onDismiss:()=>s.onOpenChange(!1)})}),x.jsxs(x.Fragment,{children:[x.jsx(la,{titleId:s.titleId}),x.jsx(fa,{contentRef:h,descriptionId:s.descriptionId})]})]})}),De="DialogTitle",St=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=F(De,n);return x.jsx(V.h2,{id:o.titleId,...r,ref:t})});St.displayName=De;var Rt="DialogDescription",Pt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=F(Rt,n);return x.jsx(V.p,{id:o.descriptionId,...r,ref:t})});Pt.displayName=Rt;var At="DialogClose",Ot=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=F(At,n);return x.jsx(V.button,{type:"button",...r,ref:t,onClick:H(e.onClick,()=>o.onOpenChange(!1))})});Ot.displayName=At;function Te(e){return e?"open":"closed"}var $t="DialogTitleWarning",[ri,Dt]=Wr($t,{contentName:G,titleName:De,docsSlug:"dialog"}),la=({titleId:e})=>{const t=Dt($t),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},da="DialogDescriptionWarning",fa=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Dt(da).contentName}}.`;return i.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},oi=_t,ai=bt,ci=wt,ii=Et,si=Ct,ui=St,li=Pt,di=Ot,ya="Label",Tt=i.forwardRef((e,t)=>x.jsx(V.label,{...e,ref:t,onMouseDown:n=>{var o;n.target.closest("button, input, select, textarea")||((o=e.onMouseDown)==null||o.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Tt.displayName=ya;var fi=Tt;export{si as $,ga as A,Ma as B,$a as C,K as D,V as E,ec as F,ye as G,Z as H,Me as I,H as J,Hr as K,ic as L,pe as M,ut as N,bo as O,mc as P,Kr as Q,Bt as R,Ae as S,zc as T,oo as U,kt as V,it as W,at as X,rt as Y,ni as Z,oi as _,i as a,qc as a$,di as a0,ei as a1,ui as a2,li as a3,ai as a4,ci as a5,ii as a6,fi as a7,Va as a8,La as a9,Yc as aA,Xc as aB,tc as aC,Ja as aD,fc as aE,Mc as aF,_c as aG,pc as aH,Ya as aI,oc as aJ,Ec as aK,Zc as aL,wc as aM,za as aN,gc as aO,Uc as aP,Sc as aQ,Kc as aR,va as aS,jc as aT,sc as aU,Tc as aV,Wa as aW,Ua as aX,ba as aY,Nc as aZ,vc as a_,Ia as aa,Gc as ab,Pc as ac,Cc as ad,Wc as ae,Dc as af,Aa as ag,Pa as ah,Da as ai,Ha as aj,Qa as ak,Ta as al,bc as am,ac as an,rc as ao,Oc as ap,Rc as aq,Za as ar,Ka as as,kc as at,Ba as au,Qc as av,Jc as aw,_a as ax,Na as ay,ti as az,Ht as b,qa as b0,ka as b1,wa as b2,Xa as b3,ma as b4,hc as b5,Ga as b6,Ac as b7,dc as b8,nc as b9,Vc as ba,pa as c,Fa as d,cc as e,uc as f,zt as g,Sa as h,Fc as i,x as j,Ea as k,Lc as l,Ra as m,$c as n,Oa as o,Ic as p,yc as q,tt as r,Ca as s,ja as t,Bc as u,lc as v,xc as w,Hc as x,xa as y,Ur as z};
