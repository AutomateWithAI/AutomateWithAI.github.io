(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function vp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sc={exports:{}},_o={},xc={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),yp=Symbol.for("react.portal"),gp=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Sp=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),Pp=Symbol.for("react.memo"),Rp=Symbol.for("react.lazy"),Bu=Symbol.iterator;function Lp(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var Ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kc=Object.assign,Cc={};function fr(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||Ec}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=fr.prototype;function Pa(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||Ec}var Ra=Pa.prototype=new Pc;Ra.constructor=Pa;kc(Ra,fr.prototype);Ra.isPureReactComponent=!0;var Vu=Array.isArray,Rc=Object.prototype.hasOwnProperty,La={current:null},Lc={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Rc.call(t,r)&&!Lc.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:al,type:e,key:o,ref:i,props:l,_owner:La.current}}function Np(e,t){return{$$typeof:al,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===al}function _p(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wu=/\/+/g;function qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_p(""+e.key):t.toString(36)}function Ul(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case al:case yp:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+qo(i,0):r,Vu(l)?(n="",e!=null&&(n=e.replace(Wu,"$&/")+"/"),Ul(l,t,n,"",function(s){return s})):l!=null&&(Na(l)&&(l=Np(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Wu,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Vu(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+qo(o,a);i+=Ul(o,t,n,u,l)}else if(u=Lp(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+qo(o,a++),i+=Ul(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function xl(e,t,n){if(e==null)return e;var r=[],l=0;return Ul(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Hl={transition:null},Mp={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:La};function _c(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:xl,forEach:function(e,t,n){xl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xl(e,function(){t++}),t},toArray:function(e){return xl(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=fr;K.Fragment=gp;K.Profiler=Sp;K.PureComponent=Pa;K.StrictMode=wp;K.Suspense=Cp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;K.act=_c;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kc({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=La.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Rc.call(t,u)&&!Lc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:al,type:e.type,key:l,ref:o,props:r,_owner:i}};K.createContext=function(e){return e={$$typeof:Ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xp,_context:e},e.Consumer=e};K.createElement=Nc;K.createFactory=function(e){var t=Nc.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:kp,render:e}};K.isValidElement=Na;K.lazy=function(e){return{$$typeof:Rp,_payload:{_status:-1,_result:e},_init:Tp}};K.memo=function(e,t){return{$$typeof:Pp,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Hl.transition;Hl.transition={};try{e()}finally{Hl.transition=t}};K.unstable_act=_c;K.useCallback=function(e,t){return ze.current.useCallback(e,t)};K.useContext=function(e){return ze.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};K.useEffect=function(e,t){return ze.current.useEffect(e,t)};K.useId=function(){return ze.current.useId()};K.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return ze.current.useMemo(e,t)};K.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};K.useRef=function(e){return ze.current.useRef(e)};K.useState=function(e){return ze.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return ze.current.useTransition()};K.version="18.3.1";xc.exports=K;var S=xc.exports;const Tc=vp(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=S,zp=Symbol.for("react.element"),Fp=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,Ip=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jp={key:!0,ref:!0,__self:!0,__source:!0};function Mc(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Op.call(t,r)&&!jp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zp,type:e,key:o,ref:i,props:l,_owner:Ip.current}}_o.Fragment=Fp;_o.jsx=Mc;_o.jsxs=Mc;Sc.exports=_o;var V=Sc.exports,Ni={createRoot:function(e){return{render:function(t){ReactDOM.render(t,e)}}}},Dc={exports:{}},Ke={},zc={exports:{}},Fc={};/**;
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,$){var H=D.length;D.push($);e:for(;0<H;){var J=H-1>>>1,G=D[J];if(0<l(G,$))D[J]=$,D[H]=G,H=J;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var $=D[0],H=D.pop();if(H!==$){D[0]=H;e:for(var J=0,G=D.length,Ge=G>>>1;J<Ge;){var Ze=2*(J+1)-1,lt=D[Ze],Ct=Ze+1,Fn=D[Ct];if(0>l(lt,H))Ct<G&&0>l(Fn,lt)?(D[J]=Fn,D[Ct]=H,J=Ct):(D[J]=lt,D[Ze]=H,J=Ze);else if(Ct<G&&0>l(Fn,H))D[J]=Fn,D[Ct]=H,J=Ct;else break e}}return $}function l(D,$){var H=D.sortIndex-$.sortIndex;return H!==0?H:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],s=[],d=1,y=null,p=3,g=!1,E=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(D){for(var $=n(s);$!==null;){if($.callback===null)r(s);else if($.startTime<=D)r(s),$.sortIndex=$.expirationTime,t(u,$);else break;$=n(s)}}function C(D){if(k=!1,h(D),!E)if(n(u)!==null)E=!0,At(m);else{var $=n(s);$!==null&&kt(C,$.startTime-D)}}function m(D,$){E=!1,k&&(k=!1,c(N),N=-1),g=!0;var H=p;try{for(h($),y=n(u);y!==null&&(!(y.expirationTime>$)||D&&!re());){var J=y.callback;if(typeof J=="function"){y.callback=null,p=y.priorityLevel;var G=J(y.expirationTime<=$);$=e.unstable_now(),typeof G=="function"?y.callback=G:y===n(u)&&r(u),h($)}else r(u);y=n(u)}if(y!==null)var Ge=!0;else{var Ze=n(s);Ze!==null&&kt(C,Ze.startTime-$),Ge=!1}return Ge}finally{y=null,p=H,g=!1}}var R=!1,T=null,N=-1,U=5,j=-1;function re(){return!(e.unstable_now()-j<U)}function Xe(){if(T!==null){var D=e.unstable_now();j=D;var $=!0;try{$=T(!0,D)}finally{$?Ue():(R=!1,T=null)}}else R=!1}var Ue;if(typeof f=="function")Ue=function(){f(Xe)};else if(typeof MessageChannel<"u"){var dn=new MessageChannel,de=dn.port2;dn.port1.onmessage=Xe,Ue=function(){de.postMessage(null)}}else Ue=function(){_(Xe,0)};function At(D){T=D,R||(R=!0,Ue())}function kt(D,$){N=_(function(){D(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){E||g||(E=!0,At(m))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var H=p;p=$;try{return D()}finally{p=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=p;p=D;try{return $()}finally{p=H}},e.unstable_scheduleCallback=function(D,$,H){var J=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?J+H:J):H=J,D){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=H+G,D={id:d++,callback:$,priorityLevel:D,startTime:H,expirationTime:G,sortIndex:-1},H>J?(D.sortIndex=H,t(s,D),n(u)===null&&D===n(s)&&(k?(c(N),N=-1):k=!0,kt(C,H-J))):(D.sortIndex=G,t(u,D),E||g||(E=!0,At(m))),D},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(D){var $=p;return function(){var H=p;p=$;try{return D.apply(this,arguments)}finally{p=H}}}})(Fc);zc.exports=Fc;var Ap=zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=S,Qe=Ap;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,Vr={};function Tn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_i=Object.prototype.hasOwnProperty,Up=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},Ku={};function Hp(e){return _i.call(Ku,e)?!0:_i.call(Qu,e)?!1:Up.test(e)?Ku[e]=!0:(Qu[e]=!0,!1)}function Bp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vp(e,t,n,r){if(t===null||typeof t>"u"||Bp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var _a=/[\-:]([a-z])/g;function Ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_a,Ta);Ce[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_a,Ta);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_a,Ta);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,t,n,r){var l=Ce.hasOwnProperty(t)?Ce[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vp(t,n,l,r)&&(n=null),r||l===null?Hp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),Ti=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),jc=Symbol.for("react.context"),za=Symbol.for("react.forward_ref"),Mi=Symbol.for("react.suspense"),Di=Symbol.for("react.suspense_list"),Fa=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Ac=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,bo;function _r(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||""}return`
`+bo+e}var ei=!1;function ti(e,t){if(!e||ei)return"";// ... (previous code continues)

ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var l=s.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}

// Icon components from Lucide React
const Et=(e,t)=>{const n=S.forwardRef(({className:r,...l},o)=>S.createElement("svg",{ref:o,width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:`lucide ${r||""}`,...l},...t.map(([i,a])=>S.createElement(i,a))));return n.displayName=`${e}`,n};

const Bot=Et("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);

const Brain=Et("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);

const ExternalLink=Et("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);

const Heart=Et("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);

const MessageSquare=Et("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);

const Search=Et("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);

const Sparkles=Et("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);

const Star=Et("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);

const Target=Et("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);

const Zap=Et("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);

// AI Platforms data
const aiPlatforms=[{id:"chatgpt",name:"ChatGPT",url:"https://chatgpt.com/",description:"OpenAI's conversational AI assistant - Most popular globally",icon:MessageSquare,color:"from-emerald-600 to-emerald-800",bgColor:"bg-emerald-900/20",borderColor:"border-emerald-600/30",category:"Conversational"},{id:"gemini",name:"Gemini",url:"https://gemini.google.com/",description:"Google's multimodal AI model with 42M+ users",icon:Sparkles,color:"from-blue-600 to-blue-800",bgColor:"bg-blue-900/20",borderColor:"border-blue-600/30",category:"Multimodal"},{id:"claude",name:"Claude AI",url:"https://claude.ai/",description:"Anthropic's helpful AI assistant - High quality responses",icon:Brain,color:"from-orange-600 to-red-700",bgColor:"bg-orange-900/20",borderColor:"border-orange-600/30",category:"Conversational"},{id:"perplexity",name:"Perplexity AI",url:"https://www.perplexity.ai/",description:"AI-powered search with 22M+ active users",icon:Search,color:"from-blue-500 to-cyan-600",bgColor:"bg-blue-900/20",borderColor:"border-blue-600/30",category:"Search"},{id:"grok",name:"Grok",url:"https://grok.com/",description:"xAI's cutting-edge AI - Top App Store performer",icon:Zap,color:"from-gray-600 to-gray-800",bgColor:"bg-gray-900/20",borderColor:"border-gray-600/30",category:"Conversational"},{id:"meta",name:"Meta AI",url:"https://www.meta.ai/",description:"Meta's AI assistant integrated across platforms",icon:Bot,color:"from-blue-600 to-indigo-700",bgColor:"bg-blue-900/20",borderColor:"border-blue-600/30",category:"Conversational"},{id:"huggingface",name:"Hugging Face",url:"https://huggingface.co/chat",description:"Open-source AI community platform",icon:Heart,color:"from-yellow-500 to-orange-600",bgColor:"bg-yellow-900/20",borderColor:"border-yellow-600/30",category:"Open Source"},{id:"mistral",name:"Mistral AI",url:"https://chat.mistral.ai/",description:"European AI excellence - Privacy-focused",icon:Zap,color:"from-orange-600 to-red-700",bgColor:"bg-orange-900/20",borderColor:"border-orange-600/30",category:"Conversational"},{id:"qwen",name:"Qwen",url:"https://chat.qwen.ai/",description:"Alibaba's multilingual AI model",icon:Star,color:"from-purple-600 to-violet-700",bgColor:"bg-purple-900/20",borderColor:"border-purple-600/30",category:"Multilingual"}];

const categories=["All","Conversational","Search","Multimodal","Open Source","Multilingual"];

// SEO utility functions
function updateMetaTags(searchTerm, selectedCategory) {
  // Update page title based on search/filter
  let title = "AI Portal - Gateway to Leading AI Platforms | ChatGPT, Claude, Gemini & More";
  if (searchTerm) {
    title = `Search: ${searchTerm} | AI Portal - AI Platform Directory`;
  } else if (selectedCategory !== "All") {
    title = `${selectedCategory} AI Platforms | AI Portal - AI Directory`;
  }
  document.title = title;

  // Update meta description
  let description = "Discover and access the world's top AI platforms including ChatGPT, Claude AI, Google Gemini, Perplexity AI, and more. Your central hub for artificial intelligence tools and services.";
  if (selectedCategory !== "All") {
    description = `Explore ${selectedCategory.toLowerCase()} AI platforms and tools. ${description}`;
  }
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  
  if (ogTitle) ogTitle.setAttribute('content', title);
  if (ogDescription) ogDescription.setAttribute('content', description);
  if (twitterTitle) twitterTitle.setAttribute('content', title);
  if (twitterDescription) twitterDescription.setAttribute('content', description);
}

// Analytics tracking function
function trackPlatformClick(platform) {
  // Add analytics tracking here if needed
  if (typeof gtag !== 'undefined') {
    gtag('event', 'platform_click', {
      'event_category': 'AI Platform',
      'event_label': platform.name,
      'value': 1
    });
  }
}

// Main App component with SEO improvements
function App(){
  const [searchTerm, setSearchTerm] = S.useState("");
  const [selectedCategory, setSelectedCategory] = S.useState("All");
  const [hoveredCard, setHoveredCard] = S.useState(null);

  // SEO useEffect for dynamic meta tag updates
  S.useEffect(() => {
    updateMetaTags(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory]);

  // Filter platforms based on search and category
  const filteredPlatforms = aiPlatforms.filter(platform => {
    const matchesSearch = platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         platform.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || platform.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePlatformClick = (platform) => {
    trackPlatformClick(platform);
    window.open(platform.url, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e, platform) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlatformClick(platform);
    }
  };

  return V.jsxs("div", {
    className: "min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white",
    children: [
      // Background effects
      V.jsxs("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [
          V.jsx("div", {
            className: "absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          }),
          V.jsx("div", {
            className: "absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          }),
          V.jsx("div", {
            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"
          })
        ]
      }),
      
      // Main content
      V.jsxs("div", {
        className: "relative z-10 container mx-auto px-6 py-8 max-w-6xl",
        children: [
          // Header section with semantic HTML
          V.jsx("header", {
            children: V.jsxs("div", {
              className: "text-center mb-12",
              children: [
                V.jsxs("div", {
                  className: "inline-flex items-center gap-3 mb-6",
                  children: [
                    V.jsx("div", {
                      className: "p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl",
                      children: V.jsx(Target, { className: "w-8 h-8" })
                    }),
                    V.jsx("h1", {
                      className: "text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent",
                      children: "AI Portal"
                    })
                  ]
                }),
                V.jsx("p", {
                  className: "text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed",
                  children: "Your gateway to the world's leading AI platforms. Discover, explore, and connect with cutting-edge artificial intelligence tools."
                })
              ]
            })
          }),

          // Main content area
          V.jsx("main", {
            children: V.jsxs("div", {
              children: [
                // Search and filter navigation
                V.jsx("nav", {
                  className: "mb-8 space-y-6",
                  role: "search",
                  "aria-label": "AI platform search and filters",
                  children: V.jsxs("div", {
                    children: [
                      // Search input
                      V.jsxs("div", {
                        className: "relative max-w-md mx-auto",
                        children: [
                          V.jsx(Search, {
                            className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                          }),
                          V.jsx("input", {
                            type: "text",
                            placeholder: "Search AI services...",
                            value: searchTerm,
                            onChange: (e) => setSearchTerm(e.target.value),
                            className: "w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300",
                            "aria-label": "Search AI platforms"
                          })
                        ]
                      }),
                      
                      // Category filters
                      V.jsx("div", {
                        className: "flex flex-wrap justify-center gap-2",
                        role: "tablist",
                        "aria-label": "AI platform categories",
                        children: categories.map(category => 
                          V.jsx("button", {
                            onClick: () => setSelectedCategory(category),
                            className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                              selectedCategory === category
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
                            }`,
                            role: "tab",
                            "aria-selected": selectedCategory === category,
                            "aria-controls": "platforms-grid",
                            children: category
                          }, category)
                        )
                      })
                    ]
                  })
                }),

                // Platforms grid
                V.jsx("section", {
                  id: "platforms-grid",
                  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                  children: filteredPlatforms.map(platform => {
                    const IconComponent = platform.icon;
                    return V.jsx("article", {
                      onClick: () => handlePlatformClick(platform),
                      onMouseEnter: () => setHoveredCard(platform.id),
                      onMouseLeave: () => setHoveredCard(null),
                      className: `${platform.bgColor} ${platform.borderColor} border backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group relative overflow-hidden`,
                      role: "button",
                      tabIndex: 0,
                      "aria-label": `Open ${platform.name} - ${platform.description}`,
                      onKeyDown: (e) => handleKeyDown(e, platform),
                      children: [
                        V.jsx("div", {
                          className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        }),
                        V.jsxs("div", {
                          className: "relative z-10",
                          children: [
                            V.jsx("div", {
                              className: `w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`,
                              children: V.jsx(IconComponent, { className: "w-8 h-8 text-white" })
                            }),
                            V.jsx("h2", {
                              className: "text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300",
                              children: platform.name
                            }),
                            V.jsx("p", {
                              className: "text-gray-300 text-sm mb-4 leading-relaxed",
                              children: platform.description
                            }),
                            V.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                V.jsx("span", {
                                  className: "px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-200",
                                  children: platform.category
                                }),
                                V.jsx(ExternalLink, {
                                  className: `w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-all duration-300 ${hoveredCard === platform.id ? 'translate-x-1 -translate-y-1' : ''}`
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }, platform.id);
                  })
                }),

                // No results message
                filteredPlatforms.length === 0 && V.jsx("section", {
                  className: "text-center py-12",
                  children: V.jsxs("div", {
                    children: [
                      V.jsx("div", {
                        className: "text-6xl mb-4",
                        children: "🤖"
                      }),
                      V.jsx("h2", {
                        className: "text-2xl font-bold text-gray-300 mb-2",
                        children: "No AI services found"
                      }),
                      V.jsx("p", {
                        className: "text-gray-400",
                        children: "Try adjusting your search or filter criteria"
                      })
                    ]
                  })
                })
              ]
            })
          }),

          // Footer
          V.jsx("footer", {
            className: "text-center pt-12 border-t border-gray-800",
            children: V.jsxs("div", {
              children: [
                V.jsxs("div", {
                  className: "flex items-center justify-center gap-2 text-gray-400 text-sm",
                  children: [
                    V.jsx(Sparkles, { className: "w-4 h-4" }),
                    V.jsx("span", {
                      children: "AI Portal – Empowering the future with artificial intelligence"
                    }),
                    V.jsx(Sparkles, { className: "w-4 h-4" })
                  ]
                }),
                V.jsx("p", {
                  className: "text-gray-500 text-xs mt-2",
                  children: "© 2025 AI Portal. Connecting humans with AI innovation."
                })
              ]
            })
          })
        ]
      })
    ]
  });
}

// Router and app initialization (React Router code remains the same)
const routes = [{
  caseSensitive: false,
  path: "/",
  element: Tc.createElement(App)
}];

function Layout({ children }) {
  return V.jsx(V.Fragment, { children: children });
}

const router = (() => {
  // Router initialization code (keeping existing router setup)
  return {
    routes: routes.map(e => ({
      ...e,
      element: V.jsx(Layout, { children: e.element })
    }))
  };
})();

// Initialize the app
const root = document.getElementById("root");
if (root && typeof ReactDOM !== 'undefined') {
  ReactDOM.render(React.createElement(App), root);
} else if (root) {
  root.innerHTML = '<div style="padding:20px;color:red;">ReactDOM not loaded</div>';
}