(()=>{"use strict";var n={83:(n,e,t)=>{t.d(e,{A:()=>b});var o=t(354),r=t.n(o),A=t(314),i=t.n(A),a=t(417),s=t.n(a),d=new URL(t(623),t.b),c=new URL(t(304),t.b),l=new URL(t(349),t.b),p=new URL(t(342),t.b),u=i()(r()),g=s()(d),m=s()(c),E=s()(l),C=s()(p);u.push([n.id,`@font-face {\n  font-family: 'Roboto';\n  src: url(${g});\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Roboto', sans-serif;\n}\n\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n    8. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/**************************************************/\nul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.reel {\n  position: absolute;\n  margin: 100px;\n  display: grid;\n  grid-template-columns: 100%;\n\n  justify-content: center;\n}\n\n.frame {\n  position: relative;\n  display: grid;\n\n  justify-content: center;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n\n  gap: 15px;\n}\n\n.main {\n  grid-column: 1/4;\n  grid-row: 1/3;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 4rem 1fr;\n  gap: 15px;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  box-shadow: 0 0 5px rgb(83, 165, 180);\n  color: black;\n  font-weight: bold;\n  background-color: rgb(232, 244, 245);\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: rgb(165, 151, 168);\n}\n\n.drop-menu {\n  position: absolute;\n  width: 150px;\n  z-index: 10;\n  background-color: white;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.486);\n  visibility: hidden;\n}\n\n.menu-opts > li {\n  border: 1px solid black;\n\n  padding: 6px;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.menu-opts > li:hover {\n  background-color: rgb(83, 165, 180);\n  cursor: pointer;\n}\n\n.drop-icon {\n  position: relative;\n}\n\n.toolbar {\n  border: 1px solid rgba(0, 0, 0, 0.199);\n  background-color: rgba(60, 182, 204, 0.507);\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.shelf {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  grid-template-rows: repeat(auto-fill, 250px);\n  grid-auto-flow: row;\n  row-gap: 50px;\n  column-gap: 18px;\n  margin: 5px;\n}\n\n.book {\n  position: relative;\n  border: 0.5px solid transparent;\n  box-shadow: 0 0 10px rgb(60, 162, 180);\n  border-radius: 10px;\n  padding: 30px;\n  cursor: pointer;\n\n  width: 150px;\n  height: 250px;\n}\n\n.remove {\n  position: absolute;\n  border-radius: 50px;\n  width: 18px;\n  height: 18px;\n  background-image: url(${m});\n  opacity: 0.3;\n  overflow: hidden;\n  bottom: -30px;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n.remove:hover {\n  background-image: url(${m});\n  background-color: transparent;\n  opacity: 0.7;\n}\n\n.title {\n  font-weight: bolder;\n  font-size: 1.3rem;\n}\n\n.pageCount {\n  font-weight: lighter;\n  font-style: italic;\n  font-size: 0.8rem;\n  margin-top: 40px;\n}\n\n.bookPopup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1.5px solid black;\n  border-radius: 10px;\n}\n\n::backdrop {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.75;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(autofit, 1fr);\n  justify-content: center;\n  justify-items: start;\n  align-items: center;\n  gap: 8px;\n  padding: 10px;\n}\n\n#msg {\n  justify-self: center;\n  font-size: 1.5rem;\n  margin-bottom: 3px;\n}\n\n.buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n\n/* Read checkbox */\n\n.check {\n  position: relative;\n}\n\n.check::after {\n  position: absolute;\n  content: '';\n  background-image: url(${E});\n  background-size: cover;\n  width: 24px;\n  height: 24px;\n\n  right: 10px;\n  bottom: 10px;\n}\n\n.check.complete::after {\n  background-image: url(${C});\n}\n\n.complete {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.8;\n}\n\n:focus {\n  outline: none;\n  border: 1px solid transparent;\n  box-shadow: 0 0 20px rgb(60, 162, 180);\n}\n\nform > p > *:focus {\n  box-shadow: 0 0 5px rgb(60, 162, 180);\n}\n\n.buttons:focus {\n  box-shadow: 0 0 5px rgb(60, 162, 180);\n}\n`,"",{version:3,sources:["webpack://./style.css"],names:[],mappings:"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",sourcesContent:["@font-face {\n  font-family: 'Roboto';\n  src: url(resources/Roboto-Regular.ttf);\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Roboto', sans-serif;\n}\n\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n    8. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/**************************************************/\nul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.reel {\n  position: absolute;\n  margin: 100px;\n  display: grid;\n  grid-template-columns: 100%;\n\n  justify-content: center;\n}\n\n.frame {\n  position: relative;\n  display: grid;\n\n  justify-content: center;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n\n  gap: 15px;\n}\n\n.main {\n  grid-column: 1/4;\n  grid-row: 1/3;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 4rem 1fr;\n  gap: 15px;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  box-shadow: 0 0 5px rgb(83, 165, 180);\n  color: black;\n  font-weight: bold;\n  background-color: rgb(232, 244, 245);\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: rgb(165, 151, 168);\n}\n\n.drop-menu {\n  position: absolute;\n  width: 150px;\n  z-index: 10;\n  background-color: white;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.486);\n  visibility: hidden;\n}\n\n.menu-opts > li {\n  border: 1px solid black;\n\n  padding: 6px;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.menu-opts > li:hover {\n  background-color: rgb(83, 165, 180);\n  cursor: pointer;\n}\n\n.drop-icon {\n  position: relative;\n}\n\n.toolbar {\n  border: 1px solid rgba(0, 0, 0, 0.199);\n  background-color: rgba(60, 182, 204, 0.507);\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.shelf {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  grid-template-rows: repeat(auto-fill, 250px);\n  grid-auto-flow: row;\n  row-gap: 50px;\n  column-gap: 18px;\n  margin: 5px;\n}\n\n.book {\n  position: relative;\n  border: 0.5px solid transparent;\n  box-shadow: 0 0 10px rgb(60, 162, 180);\n  border-radius: 10px;\n  padding: 30px;\n  cursor: pointer;\n\n  width: 150px;\n  height: 250px;\n}\n\n.remove {\n  position: absolute;\n  border-radius: 50px;\n  width: 18px;\n  height: 18px;\n  background-image: url(resources/x-mark-16.png);\n  opacity: 0.3;\n  overflow: hidden;\n  bottom: -30px;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n.remove:hover {\n  background-image: url(resources/x-mark-16.png);\n  background-color: transparent;\n  opacity: 0.7;\n}\n\n.title {\n  font-weight: bolder;\n  font-size: 1.3rem;\n}\n\n.pageCount {\n  font-weight: lighter;\n  font-style: italic;\n  font-size: 0.8rem;\n  margin-top: 40px;\n}\n\n.bookPopup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1.5px solid black;\n  border-radius: 10px;\n}\n\n::backdrop {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.75;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(autofit, 1fr);\n  justify-content: center;\n  justify-items: start;\n  align-items: center;\n  gap: 8px;\n  padding: 10px;\n}\n\n#msg {\n  justify-self: center;\n  font-size: 1.5rem;\n  margin-bottom: 3px;\n}\n\n.buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n\n/* Read checkbox */\n\n.check {\n  position: relative;\n}\n\n.check::after {\n  position: absolute;\n  content: '';\n  background-image: url(resources/unchecked.svg);\n  background-size: cover;\n  width: 24px;\n  height: 24px;\n\n  right: 10px;\n  bottom: 10px;\n}\n\n.check.complete::after {\n  background-image: url(resources/checked.svg);\n}\n\n.complete {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.8;\n}\n\n:focus {\n  outline: none;\n  border: 1px solid transparent;\n  box-shadow: 0 0 20px rgb(60, 162, 180);\n}\n\nform > p > *:focus {\n  box-shadow: 0 0 5px rgb(60, 162, 180);\n}\n\n.buttons:focus {\n  box-shadow: 0 0 5px rgb(60, 162, 180);\n}\n"],sourceRoot:""}]);const b=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&i[c[0]]||(void 0!==A&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=A),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),A="/*# ".concat(r," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var A={},i=[],a=0;a<n.length;a++){var s=n[a],d=o.base?s[0]+o.base:s[0],c=A[d]||0,l="".concat(d," ").concat(c);A[d]=c+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var g=r(u,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var A=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=t(A[i]);e[a].references--}for(var s=o(n,r),d=0;d<A.length;d++){var c=t(A[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}A=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},623:(n,e,t)=>{n.exports=t.p+"68cdbb03049084502e4d.ttf"},342:(n,e,t)=>{n.exports=t.p+"c1c2058c8f4bfb8d9491.svg"},349:(n,e,t)=>{n.exports=t.p+"d6a769e2b0bde3e917ad.svg"},304:(n,e,t)=>{n.exports=t.p+"16c276e7e2788b17c319.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var A=e[o]={id:o,exports:{}};return n[o](A,A.exports,t),A.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{function n(n,e){let t=document.createElement("div");t.classList.add("book"),t.classList.add("check"),t.id=n.bookID,t.tabIndex=0;let o=document.createElement("p");o.classList.add("title"),o.textContent=n.title;let r=document.createElement("p");r.classList.add("author"),r.textContent=n.author;let A=document.createElement("p");A.classList.add("pageCount"),A.textContent=n.pages;let i=document.createElement("button");i.classList.add("remove"),i.id=n.bookID,i.addEventListener("click",(n=>{S(n.target.id)})),n.hasRead&&t.classList.add("complete"),t.addEventListener("click",(n=>{let e=n.currentTarget;e.classList.contains("complete")?e.classList.remove("complete"):n.currentTarget.classList.add("complete")})),t.appendChild(i),t.appendChild(o),t.appendChild(r),t.appendChild(A),e.appendChild(t)}t.d(o,{QK:()=>L,$Q:()=>j,Lq:()=>S});class e{constructor(n,e,t,o){this.title=n,this.author=e,this.pages=t,this.hasRead=o,this.bookID=this.assignID()}readBook(){return this.hasRead?`You've already read ${this.title} ID: ${this.bookID}`:(this.hasRead=!0,j(),`You've finished ${this.title} ID: ${this.bookID}`)}assignID(){return L.length}toggleComplete(){this.hasRead=!this.hasRead}}function r(){const n=document.querySelector(".drop-menu");n.classList.contains("visible")&&n.classList.remove("visible")}var A=t(72),i=t.n(A),a=t(825),s=t.n(a),d=t(659),c=t.n(d),l=t(56),p=t.n(l),u=t(540),g=t.n(u),m=t(113),E=t.n(m),C=t(83),b={};b.styleTagTransform=E(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=g(),i()(C.A,b),C.A&&C.A.locals&&C.A.locals;const f=document.querySelector(".addBook"),h=document.querySelector(".bookPopup"),B=document.getElementById("submit"),x=document.getElementById("cancel"),v=document.getElementById("title"),y=document.getElementById("author"),k=document.getElementById("pages"),w=document.getElementById("read"),I=document.getElementById("bookshelf"),L=[],R=[];function D(){v.value="",y.value="",k.value=1,w.checked=!1}function j(){I.innerHTML="";for(let e=0;e<L.length;e++){const t=L[e];t.bookID=e,n(t,I)}}function S(n){L.splice(n,1),j()}R.push({id:"home",href:"index.html"}),R.push({id:"shelf",href:"library.html"}),R.push({id:"about",href:"https://github.com/jwsmith24?tab=repositories"}),console.log("Options: "),console.log(R),(n=>{const e=document.getElementById("drop-icon");e.addEventListener("click",(()=>{r()})),e.addEventListener("mouseover",(()=>{!function(){const n=document.querySelector(".drop-menu");n.classList.contains("visible")||n.classList.add("visible")}()})),e.addEventListener("mouseout",(()=>{r()})),n.forEach((n=>{var e,t;e=n.id,t=n.href,console.log("Linking button with id: "+e),document.getElementById(e).addEventListener("click",(()=>{window.location.href=t}))}))})(R),document.addEventListener("DOMContentLoaded",(()=>{L.push(new e("The Poppy War","RF Kuang",452,!0)),L.push(new e("The Dragon Republic","RF Kuang",618,!1,1)),L.push(new e("The Burning God","RF Kuang",705,!1,2)),j()})),f.addEventListener("click",(()=>{h.showModal()})),x.addEventListener("click",(()=>{D(),h.close()})),B.addEventListener("click",(n=>{n.preventDefault(),function(){let n=!!w.checked;var t;(t=new e(v.value,y.value,k.value,n)).assignID(),L.push(t),console.log(`${t.title} added to the library! ID: ${t.bookID}`),t.title,t.bookID,j()}(),h.close(),D()})),L.forEach((n=>{console.log(n.readBook())}))})()})();
//# sourceMappingURL=library.bundle.js.map