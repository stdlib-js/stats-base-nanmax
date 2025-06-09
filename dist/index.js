"use strict";var c=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var x=c(function(C,q){
var k=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-positive-zero/dist');function P(a,i,n,s){var u,t,v,e,r,o;if(u=i.data,t=i.accessors[0],a===1||n===0)return t(u,s);for(e=s,o=0;o<a&&(r=t(u,e),r!==r);o++)e+=n;if(o===a)return NaN;for(v=r,o+=1,o;o<a;o++)e+=n,r=t(u,e),!k(r)&&(r>v||r===v&&l(r))&&(v=r);return v}q.exports=P
});var f=c(function(D,m){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),O=x();function R(a,i,n,s){var u,t,v,e,r;if(a<=0)return NaN;if(v=j(i),v.accessorProtocol)return O(a,v,n,s);if(a===1||n===0)return i[s];for(t=s,r=0;r<a&&(e=i[t],e!==e);r++)t+=n;if(r===a)return NaN;for(u=e,r+=1,r;r<a;r++)t+=n,e=i[t],!Z(e)&&(e>u||e===u&&g(e))&&(u=e);return u}m.exports=R
});var b=c(function(E,y){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=f();function w(a,i,n){return h(a,i,n,d(a,n))}y.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),A=f();z(p,"ndarray",A);module.exports=p;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
