(()=>{"use strict";var e,t,n,r,a,o,i,s,l,c,d,u,p,f,m={151:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Indie+Flower&family=Permanent+Marker&display=swap);"]),i.push([e.id,"*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html,body{font-size:62.5%;box-sizing:border-box;background:#000;color:#fff}.navStyle{height:10rem;box-shadow:rgba(99,99,99,.2) 0px 2px 8px 0px;display:flex;position:relative}.navStyle .navContent{height:100%;width:80%}@media(min-width: 320px)and (max-width: 700px){.navStyle .navContent{width:100%}}.navStyle .navContent ul{height:100%;display:flex;justify-content:space-between;align-items:center}.navStyle .navContent ul :first-child{margin:0 1rem;font-size:4rem;font-family:Indie Flower,monospace,sans-serif}.navStyle .navContent ul .listContent{display:flex;place-items:center}@media(min-width: 320px)and (max-width: 700px){.navStyle .navContent ul .listContent{display:none}}.navStyle .navContent ul .listContent li{cursor:pointer;list-style:none;font-size:2rem;font-family:Indie Flower,monospace,sans-serif}.navStyle .navContent ul .listContent i{cursor:pointer;font-size:2rem}.navStyle .hamburger{width:20%;justify-content:flex-end;align-items:center}@media(min-width: 320px)and (max-width: 700px){.navStyle .hamburger{display:flex}}.navStyle .hamburger .burger{height:5rem;width:10rem;display:none;place-items:center}@media(min-width: 320px)and (max-width: 700px){.navStyle .hamburger .burger{display:grid}}.navStyle .hamburger .burger span{height:1.5px;width:4rem;border:solid;background:#fff;transition:all ease-in-out .8s;transform-origin:2px 3px}.navStyle .hamburger .burger span:not(:first-child):not(:last-child){margin-top:-10px;transition:all ease-in-out .9s}.navStyle .hamburger .burger span:last-child{margin-top:-14px}.navStyle .mobileMenu{opacity:0;background:#f0f8ff;position:absolute;width:100%;top:100%;display:grid;grid-template-columns:repeat(2, 1fr);flex-direction:column}.navStyle .mobileMenu .listContent{height:100%;display:flex;justify-content:center;align-items:center}.navStyle .mobileMenu .listContent li{margin:0 .5rem;color:#000;cursor:pointer;list-style:none;font-size:2rem;font-family:Indie Flower,monospace,sans-serif}.navStyle .mobileMenu .listContent i{cursor:pointer;margin:0 .5rem;color:#000;font-size:2rem}.open #one{transform:rotate(45deg)}.open #two{display:none}.open #three{transform:rotate(-45deg);margin-top:0}@keyframes fadeIn{0%{height:0;opacity:0}100%{height:50rem;opacity:1}}.fadeIn{animation:fadeIn .7s ease-in-out .2s forwards}@keyframes fadeOut{0%{height:50rem;opacity:1}100%{height:0;opacity:0}}.fadeOut{animation:fadeOut .7s ease-in-out forwards}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var l=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function v(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return m[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=v(379),t=v.n(e),n=v(795),r=v.n(n),a=v(569),o=v.n(a),i=v(565),s=v.n(i),l=v(216),c=v.n(l),d=v(589),u=v.n(d),p=v(151),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector(".hamburger").addEventListener("click",(()=>{const e=document.querySelector(".mobileMenu"),t=document.querySelector(".burger");t.classList.contains("open")?(t.classList.remove("open"),e.classList.add("fadeOut"),e.classList.remove("fadeIn")):(t.classList.add("open"),e.classList.add("fadeIn"),e.classList.remove("fadeOut"))}))})();