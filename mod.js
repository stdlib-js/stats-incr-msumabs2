// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=p.call(i,b,"$1e"),i=p.call(i,y,"e"),i=p.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=p.call(i,f,"e+0$1"),i=p.call(i,g,"e-0$1"),r.alternate&&(i=p.call(i,d,"$1."),i=p.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===u.call(r.specifier)?u.call(i):s.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,i,a,o,l,s,u,p,f,g,d,h;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,u=0;u<r.length;u++)if(i=r[u],"string"==typeof i)l+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,S(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),l+=i.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,i,n;for(t=[],n=0,i=x.exec(r);i;)(e=r.slice(n,x.lastIndex-i[0].length)).length&&t.push(e),t.push(F(i)),n=x.lastIndex,i=x.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return j.apply(null,e)}var A=Object.prototype,N=A.toString,O=A.__defineGetter__,V=A.__defineSetter__,P=A.__lookupGetter__,$=A.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(r,e)||$.call(r,e)?(i=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function R(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var Y=W()?function(r){var e,t,i,n,a;if(null==r)return L.call(r);t=r[X],a=X,e=null!=(n=r)&&M.call(n,a);try{r[X]=void 0}catch(e){return L.call(r)}return i=L.call(r),e?r[X]=t:delete r[X],i}:function(r){return L.call(r)},z=Number,B=z.prototype.toString;var D=W();function J(r){return"object"==typeof r&&(r instanceof z||(D?function(r){try{return B.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function q(r){return G(r)||J(r)}R(q,"isPrimitive",G),R(q,"isObject",J);var H=Number.POSITIVE_INFINITY,K=z.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<H&&r>K&&Q(e=r)===e;var e}function er(r){return G(r)&&rr(r)}function tr(r){return J(r)&&rr(r.valueOf())}function ir(r){return er(r)||tr(r)}function nr(r){return er(r)&&r>0}function ar(r){return tr(r)&&r.valueOf()>0}function or(r){return nr(r)||ar(r)}function cr(r){return r!=r}R(ir,"isPrimitive",er),R(ir,"isObject",tr),R(or,"isPrimitive",nr),R(or,"isObject",ar);var lr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var ur="function"==typeof Float64Array?Float64Array:void 0;var pr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};function fr(r){var e;if(!nr(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1JD8B",r));return e=function(r){var e,t,i,n;if(!nr(r))throw new TypeError(T("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new pr(r),t=0,n=-1,i=0,function(a){var o;if(0===arguments.length)return 0===i?null:t;if(n=(n+1)%r,cr(a))i=r,t=NaN;else if(i<r)i+=1,t+=a;else if(cr(e[n])){for(i=1,t=a,o=0;o<r;o++)if(o!==n){if(cr(e[o])){i=r,t=NaN;break}i+=1,t+=e[o]}}else!1===cr(t)&&(t+=a-e[n]);return e[n]=a,t}}(r),function(r){if(0===arguments.length)return e();return e(r*r)}}export{fr as default};
//# sourceMappingURL=mod.js.map
