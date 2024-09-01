"use strict";var f=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var s=f(function(j,o){
var y=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-positive-zero/dist');function k(e,i,u){var t,n,a,r;if(e<=0)return NaN;if(e===1||u===0)return i[0];for(u<0?n=(1-e)*u:n=0,r=0;r<e&&(a=i[n],a!==a);r++)n+=u;if(r===e)return NaN;for(t=a,r+=1,r;r<e;r++)n+=u,a=i[n],!y(a)&&(a>t||a===t&&b(a))&&(t=a);return t}o.exports=k
});var q=f(function(w,c){
var l=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-assert-is-positive-zero/dist');function Z(e,i,u,t){var n,a,r,v;if(e<=0)return NaN;if(e===1||u===0)return i[t];for(a=t,v=0;v<e&&(r=i[a],r!==r);v++)a+=u;if(v===e)return NaN;for(n=r,v+=1,v;v<e;v++)a+=u,r=i[a],!l(r)&&(r>n||r===n&&P(r))&&(n=r);return n}c.exports=Z
});var p=f(function(z,m){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=s(),R=q();O(x,"ndarray",R);m.exports=x
});var g=p();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
