if(!self.define){let e,i={};const d=(d,n)=>(d=new URL(d+".js",n).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const c=e=>d(e,a),o={module:{uri:a},exports:s,require:c};i[a]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"883.bundle.js",revision:"4050aebdd3907f7bceaaf1fd3819cc93"},{url:"app.webmanifest",revision:"5f4a4ffd42d0b02f77f3f424f0ca0fa7"},{url:"app~49ea73a0.bundle.js",revision:"6442b54447749666f003701d9aed948b"},{url:"app~77c95601.bundle.js",revision:"1d65cba23e2ad7131ae96752500c2e49"},{url:"app~ca0940c6.bundle.js",revision:"401ecdc64306d5cbaba14abadb4e6137"},{url:"app~d1658f4b.bundle.js",revision:"9ba9166b95560864429923fedf434460"},{url:"app~e4317507.bundle.js",revision:"63902efefbe4fd9682e6764beeef1310"},{url:"data/favorite-restaurant-idb.js",revision:"f983a7a71c8dfd7bff4af9098597455b"},{url:"data/restaurant-source.js",revision:"da5a8662476753f886633a2dede79508"},{url:"favicon.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"images/heros/hero-large.jpg",revision:"0db76ac524f1f284fa90d90abe5540e6"},{url:"images/heros/hero-small.jpg",revision:"0254f655f480d1a1b29c9849ebdcbae6"},{url:"images/heros/hero.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"7fc7c5b62088c04dc089d6b8568a5aac"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
