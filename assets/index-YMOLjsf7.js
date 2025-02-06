(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const j of d.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&s(j)}).observe(document,{childList:!0,subtree:!0});function o(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=o(l);fetch(l.href,d)}})();function fe(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var W={exports:{}},k={},F={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X;function de(){if(X)return u;X=1;var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),j=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator;function E(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,U={};function S(e,t,a){this.props=e,this.context=t,this.refs=U,this.updater=a||R}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function V(){}V.prototype=S.prototype;function M(e,t,a){this.props=e,this.context=t,this.refs=U,this.updater=a||R}var T=M.prototype=new V;T.constructor=M,A(T,S.prototype),T.isPureReactComponent=!0;var J=Array.isArray,H=Object.prototype.hasOwnProperty,D={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function K(e,t,a){var f,c={},h=null,y=null;if(t!=null)for(f in t.ref!==void 0&&(y=t.ref),t.key!==void 0&&(h=""+t.key),t)H.call(t,f)&&!G.hasOwnProperty(f)&&(c[f]=t[f]);var m=arguments.length-2;if(m===1)c.children=a;else if(1<m){for(var p=Array(m),g=0;g<m;g++)p[g]=arguments[g+2];c.children=p}if(e&&e.defaultProps)for(f in m=e.defaultProps,m)c[f]===void 0&&(c[f]=m[f]);return{$$typeof:r,type:e,key:h,ref:y,props:c,_owner:D.current}}function se(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function q(e){return typeof e=="object"&&e!==null&&e.$$typeof===r}function ae(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Y=/\/+/g;function B(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ae(""+e.key):t.toString(36)}function C(e,t,a,f,c){var h=typeof e;(h==="undefined"||h==="boolean")&&(e=null);var y=!1;if(e===null)y=!0;else switch(h){case"string":case"number":y=!0;break;case"object":switch(e.$$typeof){case r:case n:y=!0}}if(y)return y=e,c=c(y),e=f===""?"."+B(y,0):f,J(c)?(a="",e!=null&&(a=e.replace(Y,"$&/")+"/"),C(c,t,a,"",function(g){return g})):c!=null&&(q(c)&&(c=se(c,a+(!c.key||y&&y.key===c.key?"":(""+c.key).replace(Y,"$&/")+"/")+e)),t.push(c)),1;if(y=0,f=f===""?".":f+":",J(e))for(var m=0;m<e.length;m++){h=e[m];var p=f+B(h,m);y+=C(h,t,a,p,c)}else if(p=E(e),typeof p=="function")for(e=p.call(e),m=0;!(h=e.next()).done;)h=h.value,p=f+B(h,m++),y+=C(h,t,a,p,c);else if(h==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return y}function N(e,t,a){if(e==null)return e;var f=[],c=0;return C(e,f,"","",function(h){return t.call(a,h,c++)}),f}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var x={current:null},z={transition:null},ce={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:z,ReactCurrentOwner:D};function Q(){throw Error("act(...) is not supported in production builds of React.")}return u.Children={map:N,forEach:function(e,t,a){N(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(t){return t})||[]},only:function(e){if(!q(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},u.Component=S,u.Fragment=o,u.Profiler=l,u.PureComponent=M,u.StrictMode=s,u.Suspense=v,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,u.act=Q,u.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var f=A({},e.props),c=e.key,h=e.ref,y=e._owner;if(t!=null){if(t.ref!==void 0&&(h=t.ref,y=D.current),t.key!==void 0&&(c=""+t.key),e.type&&e.type.defaultProps)var m=e.type.defaultProps;for(p in t)H.call(t,p)&&!G.hasOwnProperty(p)&&(f[p]=t[p]===void 0&&m!==void 0?m[p]:t[p])}var p=arguments.length-2;if(p===1)f.children=a;else if(1<p){m=Array(p);for(var g=0;g<p;g++)m[g]=arguments[g+2];f.children=m}return{$$typeof:r,type:e.type,key:c,ref:h,props:f,_owner:y}},u.createContext=function(e){return e={$$typeof:j,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:d,_context:e},e.Consumer=e},u.createElement=K,u.createFactory=function(e){var t=K.bind(null,e);return t.type=e,t},u.createRef=function(){return{current:null}},u.forwardRef=function(e){return{$$typeof:_,render:e}},u.isValidElement=q,u.lazy=function(e){return{$$typeof:b,_payload:{_status:-1,_result:e},_init:le}},u.memo=function(e,t){return{$$typeof:P,type:e,compare:t===void 0?null:t}},u.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},u.unstable_act=Q,u.useCallback=function(e,t){return x.current.useCallback(e,t)},u.useContext=function(e){return x.current.useContext(e)},u.useDebugValue=function(){},u.useDeferredValue=function(e){return x.current.useDeferredValue(e)},u.useEffect=function(e,t){return x.current.useEffect(e,t)},u.useId=function(){return x.current.useId()},u.useImperativeHandle=function(e,t,a){return x.current.useImperativeHandle(e,t,a)},u.useInsertionEffect=function(e,t){return x.current.useInsertionEffect(e,t)},u.useLayoutEffect=function(e,t){return x.current.useLayoutEffect(e,t)},u.useMemo=function(e,t){return x.current.useMemo(e,t)},u.useReducer=function(e,t,a){return x.current.useReducer(e,t,a)},u.useRef=function(e){return x.current.useRef(e)},u.useState=function(e){return x.current.useState(e)},u.useSyncExternalStore=function(e,t,a){return x.current.useSyncExternalStore(e,t,a)},u.useTransition=function(){return x.current.useTransition()},u.version="18.3.1",u}var Z;function oe(){return Z||(Z=1,F.exports=de()),F.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function pe(){if(ee)return k;ee=1;var r=oe(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function j(_,v,P){var b,w={},E=null,R=null;P!==void 0&&(E=""+P),v.key!==void 0&&(E=""+v.key),v.ref!==void 0&&(R=v.ref);for(b in v)s.call(v,b)&&!d.hasOwnProperty(b)&&(w[b]=v[b]);if(_&&_.defaultProps)for(b in v=_.defaultProps,v)w[b]===void 0&&(w[b]=v[b]);return{$$typeof:n,type:_,key:E,ref:R,props:w,_owner:l.current}}return k.Fragment=o,k.jsx=j,k.jsxs=j,k}var te;function he(){return te||(te=1,W.exports=pe()),W.exports}var i=he();function me(){return i.jsx("nav",{class:"fixed left-0 bottom-0 w-full h-10",children:i.jsxs("ul",{class:"flex justify-center items-center mx-auto ",children:[i.jsxs("a",{class:"relative group mx-1 px-2 border ",children:[i.jsx("span",{class:"z-10 relative group-hover:text-white transition-transform duration-500",children:"Home"}),i.jsx("span",{class:"z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"})]}),i.jsxs("a",{class:"relative group mx-1 px-2 border ",children:[i.jsx("span",{class:"z-10 relative group-hover:text-white transition-transform duration-500",children:"Work"}),i.jsx("span",{class:"z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"})]}),i.jsxs("a",{class:"relative group mx-1 px-2 border ",children:[i.jsx("span",{class:"z-10 relative group-hover:text-white transition-transform duration-500",children:"Education"}),i.jsx("span",{class:"z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"})]}),i.jsxs("a",{class:"relative group mx-1 px-2 border ",children:[i.jsx("span",{class:"z-10 relative group-hover:text-white transition-transform duration-500",children:"Skills"}),i.jsx("span",{class:"z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"})]}),i.jsxs("a",{class:"relative group mx-1 px-2 border ",children:[i.jsx("span",{class:"z-10 relative group-hover:text-white transition-transform duration-500",children:"Projects"}),i.jsx("span",{class:"z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"})]})]})})}var ye=oe();const O=fe(ye);var ie={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},re=O.createContext&&O.createContext(ie),ve=["attr","size","title"];function xe(r,n){if(r==null)return{};var o=be(r,n),s,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);for(l=0;l<d.length;l++)s=d[l],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(o[s]=r[s])}return o}function be(r,n){if(r==null)return{};var o={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(n.indexOf(s)>=0)continue;o[s]=r[s]}return o}function $(){return $=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},$.apply(this,arguments)}function ne(r,n){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),o.push.apply(o,s)}return o}function L(r){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?ne(Object(o),!0).forEach(function(s){ge(r,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ne(Object(o)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(o,s))})}return r}function ge(r,n,o){return n=je(n),n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r}function je(r){var n=_e(r,"string");return typeof n=="symbol"?n:n+""}function _e(r,n){if(typeof r!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var s=o.call(r,n);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function ue(r){return r&&r.map((n,o)=>O.createElement(n.tag,L({key:o},n.attr),ue(n.child)))}function I(r){return n=>O.createElement(we,$({attr:L({},r.attr)},n),ue(r.child))}function we(r){var n=o=>{var{attr:s,size:l,title:d}=r,j=xe(r,ve),_=l||o.size||"1em",v;return o.className&&(v=o.className),r.className&&(v=(v?v+" ":"")+r.className),O.createElement("svg",$({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,j,{className:v,style:L(L({color:r.color||o.color},o.style),r.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),d&&O.createElement("title",null,d),r.children)};return re!==void 0?O.createElement(re.Consumer,null,o=>n(o)):n(ie)}function Oe(r){return I({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"},child:[]}]})(r)}function Se(r){return I({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 11v5"},child:[]},{tag:"path",attr:{d:"M8 8v.01"},child:[]},{tag:"path",attr:{d:"M12 16v-5"},child:[]},{tag:"path",attr:{d:"M16 16v-3a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"},child:[]}]})(r)}function Ee(r){return I({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"},child:[]}]})(r)}function Re(r){return I({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"},child:[]},{tag:"path",attr:{d:"M3 7l9 6l9 -6"},child:[]}]})(r)}const ke=()=>i.jsx("section",{class:"",children:i.jsxs("div",{className:"flex-col justify-between w-9xl bottom-100 left-0 absolute mx-5",children:[i.jsxs("ul",{class:"flex justify-between items-center w-80 h-10 ml-5 mb-5",children:[i.jsx("li",{className:"text-5xl hover:text-zinc-300 hover:transition-transform duration-500",children:i.jsx("a",{href:"#",children:i.jsx(Ee,{})})}),i.jsxs("li",{className:"text-5xl text-3xl hover:text-zinc-300 hover:transition-transform duration-500",children:[i.jsxs("a",{href:"#",children:[" ",i.jsx(Oe,{})]})," "]}),i.jsxs("li",{className:"text-5xl text-3xl hover:text-zinc-300 hover:transition-transform duration-500",children:[i.jsxs("a",{href:"#",children:[" ",i.jsx(Se,{})]})," "]}),i.jsxs("li",{className:"text-5xl text-3xl hover:text-zinc-300 hover:transition-transform duration-500",children:[i.jsx("a",{href:"#",children:i.jsx(Re,{})})," "]})]}),i.jsx("h1",{class:"text-9xl ml-5 font-sora",children:"Tischenko Dmitriy"}),i.jsx("h2",{class:"text-4xl text-zinc-400 ml-10 mb-10",children:"Web-Developer"}),i.jsx("p",{class:"text-2xl ml-10 w-xl",children:"My name is Dmitry, I am an actively developing web applications. I have 3 completed projects and many different developments in my portfolio. I am going on developing more and more all the time."})]})});function Pe(){return i.jsx(i.Fragment,{children:i.jsxs("main",{className:"overlay",children:[i.jsx(me,{}),i.jsx(ke,{})]})})}createRoot(document.getElementById("root")).render(i.jsx(StrictMode,{children:i.jsx(Pe,{})}));
