var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const l=document.querySelector(".form");let i=null,s=null,u=null;function a(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.addEventListener("submit",(e=>{e.preventDefault(),e.target.tagName;const{elements:{delay:t,step:o,amount:n}}=e.currentTarget;i=Number(t.value),s=Number(o.value),u=Number(n.value);for(let e=1;e<=u;e++)a(e,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`),r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`),r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),i+=s;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.f3cf5bd5.js.map
