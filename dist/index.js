!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("element-form-create",[],t):"object"==typeof exports?exports["element-form-create"]=t():e["element-form-create"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t,r){"use strict";var n=r(1);r.n(n).a},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,"\n.form-create-full .el-form-item .el-select,\n.form-create-full .el-form-item .el-cascader,\n.form-create-full .el-form-item .el-date-editor,\n.form-create-full .el-form-item .el-autocomplete {\n\twidth: 100%;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),c=function(e,t){return t?t.querySelector(e):document.querySelector(e)},s=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=c.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,f=[],p=r(7);function m(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(g(n.parts[a],t))}else{var c=[];for(a=0;a<n.parts.length;a++)c.push(g(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:c}}}}function d(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function h(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),f.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,r);r.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function g(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;r=l||(l=v(t)),n=E.bind(null,r,a,!1),o=E.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),n=w.bind(null,r,t),o=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(t),n=S.bind(null,r),o=function(){b(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=d(e,t);return m(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(c=i[a.id]).refs--,n.push(c)}e&&m(d(e,t),t);for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var O,j=(O=[],function(e,t){return O[e]=t,O.filter(Boolean).join("\n")});function E(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=j(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function S(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function w(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=p(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(2),a=r.n(i),c=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(e){return"[object Number]"===Object.prototype.toString.call(e)},l=function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},u=function(e){return"[object Object]"===Object.prototype.toString.call(e)},f=function(e){return"[object Function]"===Object.prototype.toString.call(e)},p=function(e){return e&&void 0!==e.constructor&&void 0!==e.tag},m=function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null==t||"object"!==a()(t))return t;if("object"===a()(t)&&"Object"!==t.constructor.name)return t;var n=Array.isArray(t)?[]:{};return Object.keys(t).forEach((function(r){return n[r]=e(t[r])})),r?Object.freeze(n):n},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return f(e)?e(t):e||r};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){return u(e)&&e.name&&/^El[A-Za-z]+$/.test(e.name)};function y(e,t,r){var n,o=(e.$ELEMENTJSONFORM||{renameProps:{name:"prop"}}).renameProps,i=(n=t.node,c(n)&&/^el-[a-z\-]+$/.test(n)||v(t.node)||((t.node||{}).props||{}).hasOwnProperty("value"));if(["key","ref","slot","class","style"].forEach((function(e){t[e]&&(r[o[e]||e]=t[e])})),i&&t.name&&!0!==t.multiple&&(r.model={expression:t.name,value:e.form[t.name],callback:function(r){e.form[t.name]=r,e.$emit("input",e.form),e.$forceUpdate()}}),e.$ELEMENTJSONFORM.showDefaultPlaceholder&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;v(e)&&(e.props||{}).hasOwnProperty("placeholder")&&(t.placeholder="请".concat("blur"===n?"输入":"选择").concat(r));c(e)&&o.indexOf(e)>-1&&(t.placeholder="请".concat("blur"===n?"输入":"选择").concat(r))}(t.node,r.attrs,t.label,t.trigger,e.$ELEMENTJSONFORM.defaultPlaceholderNode||[]),t.props=d(t.props,{form:m(e.form,!0),name:t.name},{}),r.attrs=b(b({},r.attrs),t.props),u(t.methods)){var a=function(n){t.methods.hasOwnProperty(n)&&"input"!==n&&(r.on[n]=function(r){return t.methods[n]({form:e.form,name:t.name,value:r})})};for(var s in t.methods)a(s)}}var g=function e(t,r){var n=this;if(p(r))return r;if(f(r.render))return r.render(t,{form:this.form,name:r.name});var o,i=null,a=r.node||"div",u={attrs:{},on:{}};return y(this,r,u),o=r.children,(c(o)||s(o)||l(o)||null==o)&&(i=r.children||this.form[r.name]||null),f(r.children)&&(r.children=d(r.children,{form:m(this.form,!0),name:r.name},[])),Array.isArray(r.children)&&(i=r.children.map((function(r){return e.call(n,t,r)}))),t(a,u,i)};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t){var r,n=[],o=t.label||"",i=t.message,a=t.trigger,u=t.validate;return l(u.required)&&n.push({trigger:a,required:u.required,message:i.required||"请".concat("blur"===a?"输入":"选择").concat(o)}),c(u.type)&&n.push({trigger:a,type:u.type,message:i.type||"".concat(o,"格式错误")}),r=u.pattern,"[object RegExp]"===Object.prototype.toString.call(r)&&n.push({trigger:a,pattern:u.pattern,message:i.pattern||"".concat(o,"格式错误")}),s(u.min)&&!s(u.max)&&n.push({trigger:a,min:u.min,message:i.min||"请输入".concat(u.min,"字以上的").concat(o)}),!s(u.min)&&s(u.max)&&n.push({trigger:a,max:u.max,message:i.max||"请输入".concat(u.min,"字以内的").concat(o)}),s(u.min)&&s(u.max)&&n.push({trigger:a,min:u.min,max:u.max,message:i.range||"请输入长度在".concat(u.min,"-").concat(u.max,"字的").concat(o)}),f(u.validator)&&n.push({trigger:a,validator:function(t,r,n){return u.validator({form:m(e.form,!0),rule:t,value:r,callback:n})}}),n}function S(e,t){var r=this,n=[],o={attrs:{}},i=(this.$ELEMENTJSONFORM||{formItem:"el-form-item"}).formItem;return function(e,t,r){var n=t.itemOptions||{},o=(e.$ELEMENTJSONFORM||{class:"staticClass"}).renameProps;t.label=d(t.label,{form:m(e.form,!0),name:t.name},""),t.message=d(t.message,{form:m(e.form,!0),name:t.name},{}),t.validate=d(t.validate,{form:m(e.form,!0),name:t.name},{}),t.trigger=t.validate.trigger||"blur",["key","ref","slot","class","style"].forEach((function(e){n[e]&&(r[o[e]||e]=n[e])})),["label","name"].forEach((function(e){t[e]&&(r.attrs[o[e]||e]=t[e])})),t.name&&(r.attrs.rules=E(e,t)),t.itemProps=d(t.itemProps,{form:m(e.form,!0),name:t.name},{}),r.attrs=j(j({},r.attrs),t.itemProps)}(this,t,o),!0===t.itemMultiple&&t.children.forEach((function(t){return n.push(S.call(r,e,t))})),!0===t.multiple&&t.children.forEach((function(t){return n.push(g.call(r,e,t))})),t.itemMultiple||t.multiple||n.push(g.call(this,e,t)),e(i,o,n)}var w=function(e,t){return!1===d(t.isShow,{form:m(self.form,!0),name:t.name},!0)?null:p(t)?t:f(t.itemRender)?t.itemRender(e,{form:this.form,name:t.name}):S.call(this,e,t)};var x=function(e){var t=[],r=this.mode,n=this.$slots,o=(this.$ELEMENTJSONFORM||{formItem:"el-form-item"}).formItem,i=(this.$ELEMENTJSONFORM||{formButton:"el-button"}).formButton;return n.default&&(t=n.default||[]),n.default||(t.push(e(i,function(e){var t={},r=e.form,n=e.mode;return t.attrs={type:"primary",loading:e.loading,disabled:e.disabled,icon:"search"===n?e.searchIcon:e.submitIcon},t.on={click:function(){e.$refs.form.validate((function(t){t&&e.$emit("submit",m(r))}))}},t}(this),"search"===r?this.searchText:this.submitText)),this.showResetButton&&t.push(e(i,function(e){var t={};return t.attrs={type:"default",icon:e.resetIcon,disabled:e.loading||e.disabled},t.on={click:function(){e.$refs.form.resetFields(),e.$emit("reset")}},t}(this),this.resetText)),n.button&&n.button.forEach((function(e){return t.push(e)}))),e(o,{staticClass:"form-create-button"},t)};var P=function(e){var t=this,r=this.mode,n=(this.$ELEMENTJSONFORM||{form:"el-form"}).form,o=(this.$ELEMENTJSONFORM||{fullWidth:!0}).fullWidth,i=(this.schema||[]).map((function(r){return w.call(t,e,r)})),a={ref:"form",staticClass:"form-create"};return o&&(a.staticClass+=" form-create-full"),function(e,t){e.form;var r=e.mode,n=e.options||{};t.attrs=Object.assign({model:e.form,inline:"search"===r,size:(e.$ELEMENTJSONFORM||{size:"small"}).size,labelSuffix:(e.$ELEMENTJSONFORM||{labelSuffix:":"}).labelSuffix,labelWidth:"search"===r?"":(e.$ELEMENTJSONFORM||{labelWidth:"100px"}).labelWidth},n),t.on={input:function(e){return null},validate:function(t){return e.$emit("validate",t)}}}(this,a),"preview"!==r&&i.push(x.call(this,e)),e(n,a,i)};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(){var e={},t=this.schema,r=m(this.value);!function e(t,r,n){for(var o=null,i={string:"",number:null,boolean:!1,array:[],object:{}},a=0,s=n.length;a<s;a++)o=n[a],c(o.name)&&""!==o.name&&(t[o.name]=o.value||r[o.name]||i[(o.validate||{}).type]),Array.isArray(o.children)&&o.children.length>0&&e(t,r,o.children)}(e,r,t),e=N(N({},r),e),this.form=e,this.$emit("input",e)}var $={name:"FormCreate",data:function(){return{form:{}}},props:{value:{type:Object,default:function(){return{}}},schema:{type:Array,default:function(){return[]}},mode:{type:String,default:"submit",validator:function(e){return-1!==["submit","search","preview"].indexOf(e)}},options:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!0},submitText:{type:String,default:"确定"},submitIcon:{type:String,default:"el-icon-finished"},resetText:{type:String,default:"重置"},resetIcon:{type:String,default:"el-icon-refresh-right"},showResetButton:{type:Boolean,default:!0},searchText:{type:String,default:"搜索"},searchIcon:{type:String,default:"el-icon-search"}},created:function(){R.call(this)},watch:{schema:{handler:function(){R.call(this)},deep:!0}},methods:{submit:function(e){var t=m(this.form),r=this.$refs.form.validate;return f(e)?r((function(r){return!!r&&e(t)})):new Promise((function(e,n){return r((function(r,o){return r?e(t):n(o)}))}))},reset:function(){this.$refs.form.resetFields()},get:function(e){var t=this.form,r={};return c(e)&&(r[e]=t[e]),Array.isArray(e)&&e.forEach((function(e){return r[e]=t[e]})),r},set:function(e,t){var r=m(this.form);c(e)&&(r[e]=t),Array.isArray(e)&&e.forEach((function(e){return r[e.key]=e.value})),u(e)&&Object.keys(e).forEach((function(t){return r[t]=e[t]})),this.form=r,this.$emit("input",r)},ref:function(e){return this.$refs[e]}},render:function(e){return P.call(this,e)}};r(3);var T=function(e,t,r,n,o,i,a,c){var s,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=s):o&&(s=c?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(l.functional){l._injectStyles=s;var u=l.render;l.render=function(e,t){return s.call(t),u(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:l}}($,void 0,void 0,!1,null,null,null);T.options.__file="form/index.vue";var L=T.exports;t.default={version:"1.0.0",Form:L,install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.prototype.$ELEMENTJSONFORM={form:t.form||"el-form",formItem:t.formItem||"el-form-item",formButton:t.formButton||"el-button",size:t.size||"small",fullWidth:!1!==t.fullWidth,labelSuffix:t.labelSuffix||":",labelWidth:t.labelWidth||"100px",showDefaultPlaceholder:!1!==t.showDefaultPlaceholder,renameProps:Object.assign(t.renameProps||{class:"staticClass"},{name:"prop"}),defaultPlaceholderNode:t.defaultPlaceholderNode||["el-input","el-autocomplete","el-select","el-cascader","el-time-select","el-time-picker","el-date-picker"]},e.component(L.name,L)}}}])}));
//# sourceMappingURL=index.js.map