!function(n){"function"==typeof define&&define.amd?define(n):n()}(function(){"use strict";function a(n,e,t,r,o,c,i){try{var u=n[c](i),a=u.value}catch(n){return void t(n)}u.done?e(a):Promise.resolve(a).then(r,o)}function t(){return new Promise(function(e,t){try{setTimeout(function(){var n=function(o){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable}))),e.forEach(function(n){var e,t,r;e=o,r=c[t=n],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return o}({},{a:1},{b:2});e(n)},1e3)}catch(n){t(n)}})}function n(){return(n=function(u){return function(){var n=this,i=arguments;return new Promise(function(e,t){var r=u.apply(n,i);function o(n){a(r,e,t,o,c,"next",n)}function c(n){a(r,e,t,o,c,"throw",n)}o(void 0)})}}(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e=n.sent,console.log(e);case 4:case"end":return n.stop()}},n)}))).apply(this,arguments)}console.log([].concat([1,2,3],[4,5,6,8,9,10,11])),function(){n.apply(this,arguments)}()});
