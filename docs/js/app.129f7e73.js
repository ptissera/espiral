(function(t){function e(e){for(var r,u,a=e[0],i=e[1],l=e[2],s=0,p=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&p.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b75":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"buttons-container"},o=["disabled"],u=["disabled"],a={class:"matrix-container"};function i(t,e,n,i,l,f){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",c,[Object(r["d"])("button",{onClick:e[0]||(e[0]=function(){return i.start&&i.start.apply(i,arguments)})},"Once"),Object(r["d"])("button",{onClick:e[1]||(e[1]=function(){return i.infinite&&i.infinite.apply(i,arguments)}),disabled:i.interval},"Start",8,o),Object(r["d"])("button",{onClick:e[2]||(e[2]=function(){return i.stop&&i.stop.apply(i,arguments)}),disabled:!i.interval},"Stop",8,u)]),Object(r["d"])("div",a,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(i.matrix,(function(t,e){return Object(r["f"])(),Object(r["c"])("div",{class:"row",key:"row-".concat(e)},[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(t,(function(t,e){return Object(r["f"])(),Object(r["c"])("div",{class:Object(r["e"])(["item",{mark:t,"no-mark":!t}]),key:"col-".concat(e)},Object(r["i"])(t),3)})),128))])})),128))])],64)}var l=n("1da1"),f=(n("96cf"),n("d3b7"),n("4795"),n("a630"),n("3ca3"),{name:"App",setup:function(){var t=function(t){return new Promise((function(e){return setTimeout(e,t)}))},e=Object(r["g"])(null),n=21,c=Object(r["g"])(Array.from({length:n},(function(t){return Array.from({length:n+20},(function(t){return!0}))}))),o=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,o,u,a,i,l,f,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=1,r=0,o=c.value.length,u=0,a=c.value[0].length,i=0,l=c.value.length*c.value[0].length,f=0,s=-1;case 9:if(!(i<l)){e.next=20;break}return i++,1===n&&(s+1<a?s++:(r++,n=2)),2===n&&(f+1<o?f++:(a--,n=3)),3===n&&(s>u?s--:(o--,n=4)),4===n&&(f>r?f--:(s++,u++,n=1)),e.next=17,t(10);case 17:c.value[f][s]=!c.value[f][s],e.next=9;break;case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){e.value=setInterval(o,1200)},a=function(){clearInterval(e.value),e.value=null};return{start:o,matrix:c,interval:e,infinite:u,stop:a}}}),s=(n("88c2"),n("d959")),p=n.n(s);const b=p()(f,[["render",i]]);var d=b;Object(r["b"])(d).mount("#app")},"88c2":function(t,e,n){"use strict";n("3b75")}});
//# sourceMappingURL=app.129f7e73.js.map