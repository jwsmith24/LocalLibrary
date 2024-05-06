(()=>{"use strict";var n={83:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(354),r=t.n(o),A=t(314),i=t.n(A),a=t(417),s=t.n(a),c=new URL(t(623),t.b),l=new URL(t(304),t.b),p=new URL(t(349),t.b),d=new URL(t(342),t.b),u=i()(r()),g=s()(c),E=s()(l),C=s()(p),m=s()(d);u.push([n.id,`@font-face {\n  font-family: 'Roboto';\n  src: url(${g});\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Roboto', sans-serif;\n}\n\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n    8. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/**************************************************/\nul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.reel {\n  display: flex;\n}\n\n.reel img {\n  width: 100%;\n  height: auto;\n}\n\n.frame {\n  position: relative;\n  width: 50%;\n  overflow: hidden;\n}\n\n.navigation {\n  margin: 10px;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nmain {\n  margin: 24px;\n  display: grid;\n  gap: 48px;\n  justify-content: center;\n  justify-items: center;\n}\n\n.circles {\n  text-align: center;\n}\n\n.circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #ccc;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\n.active {\n  background-color: #333;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n\n  gap: 15px;\n}\n\n.main {\n  grid-column: 1/4;\n  grid-row: 1/3;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 4rem 1fr;\n  gap: 15px;\n}\n\ndialog button {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  box-shadow: 0 0 5px rgb(83, 165, 180);\n  color: black;\n  font-weight: bold;\n  background-color: rgb(232, 244, 245);\n  cursor: pointer;\n}\n\n.drop-menu {\n  position: absolute;\n  width: 150px;\n  z-index: 10;\n  background-color: white;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.486);\n  visibility: hidden;\n}\n\n.menu-opts > li {\n  border: 1px solid black;\n\n  padding: 6px;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.menu-opts > li:hover {\n  background-color: rgb(83, 165, 180);\n  cursor: pointer;\n}\n\n.drop-icon {\n  position: relative;\n}\n\n.toolbar {\n  border: 1px solid rgba(0, 0, 0, 0.199);\n  background-color: rgba(60, 182, 204, 0.507);\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.shelf {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  grid-template-rows: repeat(auto-fill, 250px);\n  grid-auto-flow: row;\n  row-gap: 50px;\n  column-gap: 18px;\n  margin: 5px;\n}\n\n.book {\n  position: relative;\n  border: 0.5px solid transparent;\n  box-shadow: 0 0 10px rgb(60, 162, 180);\n  border-radius: 10px;\n  padding: 30px;\n  cursor: pointer;\n\n  width: 150px;\n  height: 250px;\n}\n\n.remove {\n  position: absolute;\n  border-radius: 50px;\n  width: 18px;\n  height: 18px;\n  background-image: url(${E});\n  opacity: 0.3;\n  overflow: hidden;\n  bottom: -30px;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n.remove:hover {\n  background-image: url(${E});\n  background-color: transparent;\n  opacity: 0.7;\n}\n\n.title {\n  font-weight: bolder;\n  font-size: 1.3rem;\n}\n\n.pageCount {\n  font-weight: lighter;\n  font-style: italic;\n  font-size: 0.8rem;\n  margin-top: 40px;\n}\n\n.bookPopup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1.5px solid black;\n  border-radius: 10px;\n}\n\n::backdrop {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.75;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(autofit, 1fr);\n  justify-content: center;\n  justify-items: start;\n  align-items: center;\n  gap: 8px;\n  padding: 10px;\n}\n\n#msg {\n  justify-self: center;\n  font-size: 1.5rem;\n  margin-bottom: 3px;\n}\n\n.buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n\n/* Read checkbox */\n\n.check {\n  position: relative;\n}\n\n.check::after {\n  position: absolute;\n  content: '';\n  background-image: url(${C});\n  background-size: cover;\n  width: 24px;\n  height: 24px;\n\n  right: 10px;\n  bottom: 10px;\n}\n\n.check.complete::after {\n  background-image: url(${m});\n}\n\n.complete {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.8;\n}\n\nform > p > *:focus {\n  box-shadow: 0 0 5px rgb(60, 162, 180);\n}\n`,"",{version:3,sources:["webpack://./style.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,4CAAsC;EACtC,mBAAmB;EACnB,kBAAkB;AACpB;AACA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;;AAEA;;GAEG;AACH;EACE,SAAS;AACX;;AAEA;;;;GAIG;;AAEH;EACE,gBAAgB;EAChB,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,iCAAiC;AACnC;;AAEA;;GAEG;AACH;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;GAEG;AACH;;;;EAIE,aAAa;AACf;;AAEA;;GAEG;AACH;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;GAEG;AACH;;EAEE,kBAAkB;AACpB;;AAEA,mDAAmD;AACnD;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;;EAEvB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,aAAa;;EAEb,aAAa;EACb,0BAA0B;EAC1B,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,qCAAqC;EACrC,YAAY;EACZ,iBAAiB;EACjB,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,gDAAgD;EAChD,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;;EAEvB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;EACtC,2CAA2C;EAC3C,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,8CAA8C;EAC9C,4CAA4C;EAC5C,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,sCAAsC;EACtC,mBAAmB;EACnB,aAAa;EACb,eAAe;;EAEf,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,yDAA8C;EAC9C,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,0BAA0B;AAC5B;;AAEA;EACE,yDAA8C;EAC9C,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE;;;;;;GAMC;EACD,aAAa;AACf;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,wCAAwC;EACxC,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,kBAAkB;;AAElB;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,yDAA8C;EAC9C,sBAAsB;EACtB,WAAW;EACX,YAAY;;EAEZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yDAA4C;AAC9C;;AAEA;EACE;;;;;;GAMC;EACD,YAAY;AACd;;AAEA;EACE,qCAAqC;AACvC",sourcesContent:["@font-face {\n  font-family: 'Roboto';\n  src: url(resources/Roboto-Regular.ttf);\n  font-weight: normal;\n  font-style: normal;\n}\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  width: 100vw;\n  height: 100vh;\n  font-family: 'Roboto', sans-serif;\n}\n\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n    8. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/**************************************************/\nul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.reel {\n  display: flex;\n}\n\n.reel img {\n  width: 100%;\n  height: auto;\n}\n\n.frame {\n  position: relative;\n  width: 50%;\n  overflow: hidden;\n}\n\n.navigation {\n  margin: 10px;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nmain {\n  margin: 24px;\n  display: grid;\n  gap: 48px;\n  justify-content: center;\n  justify-items: center;\n}\n\n.circles {\n  text-align: center;\n}\n\n.circle {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #ccc;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\n.active {\n  background-color: #333;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n\n  gap: 15px;\n}\n\n.main {\n  grid-column: 1/4;\n  grid-row: 1/3;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 4rem 1fr;\n  gap: 15px;\n}\n\ndialog button {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  box-shadow: 0 0 5px rgb(83, 165, 180);\n  color: black;\n  font-weight: bold;\n  background-color: rgb(232, 244, 245);\n  cursor: pointer;\n}\n\n.drop-menu {\n  position: absolute;\n  width: 150px;\n  z-index: 10;\n  background-color: white;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.486);\n  visibility: hidden;\n}\n\n.menu-opts > li {\n  border: 1px solid black;\n\n  padding: 6px;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.menu-opts > li:hover {\n  background-color: rgb(83, 165, 180);\n  cursor: pointer;\n}\n\n.drop-icon {\n  position: relative;\n}\n\n.toolbar {\n  border: 1px solid rgba(0, 0, 0, 0.199);\n  background-color: rgba(60, 182, 204, 0.507);\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.shelf {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  grid-template-rows: repeat(auto-fill, 250px);\n  grid-auto-flow: row;\n  row-gap: 50px;\n  column-gap: 18px;\n  margin: 5px;\n}\n\n.book {\n  position: relative;\n  border: 0.5px solid transparent;\n  box-shadow: 0 0 10px rgb(60, 162, 180);\n  border-radius: 10px;\n  padding: 30px;\n  cursor: pointer;\n\n  width: 150px;\n  height: 250px;\n}\n\n.remove {\n  position: absolute;\n  border-radius: 50px;\n  width: 18px;\n  height: 18px;\n  background-image: url(resources/x-mark-16.png);\n  opacity: 0.3;\n  overflow: hidden;\n  bottom: -30px;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n.remove:hover {\n  background-image: url(resources/x-mark-16.png);\n  background-color: transparent;\n  opacity: 0.7;\n}\n\n.title {\n  font-weight: bolder;\n  font-size: 1.3rem;\n}\n\n.pageCount {\n  font-weight: lighter;\n  font-style: italic;\n  font-size: 0.8rem;\n  margin-top: 40px;\n}\n\n.bookPopup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1.5px solid black;\n  border-radius: 10px;\n}\n\n::backdrop {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.75;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(autofit, 1fr);\n  justify-content: center;\n  justify-items: start;\n  align-items: center;\n  gap: 8px;\n  padding: 10px;\n}\n\n#msg {\n  justify-self: center;\n  font-size: 1.5rem;\n  margin-bottom: 3px;\n}\n\n.buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n\n/* Read checkbox */\n\n.check {\n  position: relative;\n}\n\n.check::after {\n  position: absolute;\n  content: '';\n  background-image: url(resources/unchecked.svg);\n  background-size: cover;\n  width: 24px;\n  height: 24px;\n\n  right: 10px;\n  bottom: 10px;\n}\n\n.check.complete::after {\n  background-image: url(resources/checked.svg);\n}\n\n.complete {\n  background-image: linear-gradient(\n    45deg,\n    magenta,\n    rebeccapurple,\n    dodgerblue,\n    green\n  );\n  opacity: 0.8;\n}\n\nform > p > *:focus {\n  box-shadow: 0 0 5px rgb(60, 162, 180);\n}\n"],sourceRoot:""}]);const f=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),A="/*# ".concat(r," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},385:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var A={},i=[],a=0;a<n.length;a++){var s=n[a],c=o.base?s[0]+o.base:s[0],l=A[c]||0,p="".concat(c," ").concat(l);A[c]=l+1;var d=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var g=r(u,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var A=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=t(A[i]);e[a].references--}for(var s=o(n,r),c=0;c<A.length;c++){var l=t(A[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}A=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},623:(n,e,t)=>{n.exports=t.p+"68cdbb03049084502e4d.ttf"},342:(n,e,t)=>{n.exports=t.p+"c1c2058c8f4bfb8d9491.svg"},994:(n,e,t)=>{n.exports=t.p+"98b0e5aa4e51dd5c328b.jpg"},597:(n,e,t)=>{n.exports=t.p+"175b3633e8bffe3f0c1d.jpg"},432:(n,e,t)=>{n.exports=t.p+"57a9c5e83d26af155d5a.jpg"},435:(n,e,t)=>{n.exports=t.p+"c8dbb25dd1ef5cc43095.jpg"},187:(n,e,t)=>{n.exports=t.p+"197d1e7c6c6b4a24ab54.png"},349:(n,e,t)=>{n.exports=t.p+"d6a769e2b0bde3e917ad.svg"},304:(n,e,t)=>{n.exports=t.p+"16c276e7e2788b17c319.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var A=e[o]={id:o,exports:{}};return n[o](A,A.exports,t),A.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),A=t(659),i=t.n(A),a=t(56),s=t.n(a),c=t(540),l=t.n(c),p=t(113),d=t.n(p),u=t(83),g={};g.styleTagTransform=d(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(u.A,g),u.A&&u.A.locals&&u.A.locals;var E=t(385),C=t.n(E),m=new URL(t(187),t.b),f=new URL(t(994),t.b),b=new URL(t(597),t.b),B=new URL(t(432),t.b),h=new URL(t(435),t.b);function x(){const n=document.querySelector(".drop-menu");n.classList.contains("visible")&&n.classList.remove("visible")}C()(m),C()(f),C()(b),C()(B),C()(h);console.log("hi future home page");const v=[];v.push({id:"home",href:"index.html"}),v.push({id:"shelf",href:"library.html"}),v.push({id:"about",href:"https://github.com/jwsmith24?tab=repositories"}),console.log("Options: "),console.log(v),(n=>{const e=document.getElementById("drop-icon");e.addEventListener("click",(()=>{x()})),e.addEventListener("mouseover",(()=>{!function(){const n=document.querySelector(".drop-menu");n.classList.contains("visible")||n.classList.add("visible")}()})),e.addEventListener("mouseout",(()=>{x()})),n.forEach((n=>{var e,t;e=n.id,t=n.href,console.log("Linking button with id: "+e),document.getElementById(e).addEventListener("click",(()=>{window.location.href=t}))}))})(v),document.addEventListener("DOMContentLoaded",(()=>(()=>{const n=document.querySelector(".reel"),e=document.getElementById("next-btn"),t=document.getElementById("prev-btn");let o=0;const r=5e3;let A;function i(e){for(let e of n.children)e.style.display="none";n.children[e].style.display="block"}function a(){console.log("updating circles");const e=document.querySelector(".circles");e.innerHTML="";for(let t=0;t<n.children.length;t++){console.log(t);let n=document.createElement("span");n.classList.add("circle"),t===o&&n.classList.add("active"),n.addEventListener("click",(()=>{o=t,a(),i(t),clearInterval(A),s()})),e.appendChild(n)}}function s(){A=setInterval((()=>{c()}),r)}function c(){o=o===n.children.length-1?0:o+1,a(),i(o)}e.addEventListener("click",(()=>{c()})),t.addEventListener("click",(()=>{o=0===o?n.children.length-1:o-1,a(),i(o)})),a(),i(o),s()})()))})()})();
//# sourceMappingURL=index.bundle.js.map