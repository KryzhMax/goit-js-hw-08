!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector(".feedback-form"),r={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return v.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function y(e){return c=e,f=setTimeout(O,t),s?m(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=b();if(T(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?m(e):(r=i=void 0,u)}function S(){var e=b(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return y(l);if(d)return f=setTimeout(O,t),m(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,h(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},S.flush=function(){return void 0===f?u:w(b())},S}function h(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=f.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):u.test(e)?NaN:+e}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return h(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var T="feedback-form-state",O={email:"",message:""};!function(e){var t=JSON.parse(localStorage.getItem(e));if(!t)return;for(var r in t)n.elements[r].value=t[r]}(T),n.addEventListener("input",r((function(e){O[e.target.name]=e.target.value.trim(),localStorage.setItem(T,JSON.stringify(O))}),500)),n.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,i=t.message,o={email:r.value,message:i.value};if(!o.email||!o.message)return alert("fill the form");n.reset(),localStorage.removeItem(T),console.log("This is form: ",o)}))}();
//# sourceMappingURL=03-feedback.3646b71c.js.map
