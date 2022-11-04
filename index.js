// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e};var l=e;function c(e){return e!=e}var _=Number.POSITIVE_INFINITY;function p(e){return 0===e&&1/e===_}function d(e,r,t){var n,o,a,i;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(o=t<0?(1-e)*t:0,i=0;i<e&&(a=r[o])!=a;i++)o+=t;if(i===e)return NaN;for(n=a,i+=1;i<e;i++)c(a=r[o+=t])||(a>n||a===n&&p(a))&&(n=a);return n}return l(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(a=n,u=0;u<e&&(i=r[a])!=i;u++)a+=t;if(u===e)return NaN;for(o=i,u+=1;u<e;u++)c(i=r[a+=t])||(i>o||i===o&&p(i))&&(o=i);return o}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanmax=r();
//# sourceMappingURL=index.js.map
