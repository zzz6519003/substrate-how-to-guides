/*! For license information please see 1.4e4c85f0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=t.DocsPreferredVersionContextProvider=t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=t.usePluralForm=t.useTitleFormatter=t.isSamePath=t.isDocsPluginEnabled=t.DEFAULT_SEARCH_TAG=t.docVersionSearchTag=t.parseCodeBlockTitle=t.useAlternatePageUtils=t.listStorageKeys=t.createStorageSlot=t.useThemeConfig=void 0;var n=r(204);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(205);Object.defineProperty(t,"createStorageSlot",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"listStorageKeys",{enumerable:!0,get:function(){return o.listStorageKeys}});var i=r(257);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return i.useAlternatePageUtils}});var a=r(258);Object.defineProperty(t,"parseCodeBlockTitle",{enumerable:!0,get:function(){return a.parseCodeBlockTitle}});var u=r(259);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return u.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return u.DEFAULT_SEARCH_TAG}});var c=r(206);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return c.isDocsPluginEnabled}});var s=r(263);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return s.isSamePath}});var l=r(264);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=r(265);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return f.usePluralForm}});var d=r(266);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return d.useDocsPreferredVersionByPluginId}});var v=r(207);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return v.DocsPreferredVersionContextProvider}});var p=r(269);Object.defineProperty(t,"ThemeClassNames",{enumerable:!0,get:function(){return p.ThemeClassNames}})},171:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}r.r(t),t.default=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},172:function(e,t,r){"use strict";var n=r(21).default,o=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.translate=function(e,t){var r,n=e.message,o=e.id,i=null!==(r=c({message:n,id:o}))&&void 0!==r?r:n;return(0,a.interpolate)(i,t)},t.default=function(e){var t,r=e.children,n=e.id,o=e.values,u=null!==(t=c({message:r,id:n}))&&void 0!==t?t:r;return i.default.createElement(a.default,{values:o},u)};var i=o(r(0)),a=n(r(203)),u=o(r(36));function c(e){var t,r=e.id,n=e.message;return null!==(t=u.default[null!=r?r:n])&&void 0!==t?t:n}},176:function(e,t,r){"use strict";try{e.exports=r(260)}catch(o){var n={};e.exports={useAllDocsData:function(){return n},useActivePluginAndVersion:function(){}}}},177:function(e,t,r){"use strict";var n=r(21).default,o=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(8)),a=n(r(0)),u=r(13),c=o(r(190)),s=o(r(11)),l=r(280),f=r(179);var d=function(e){var t,r,n,o=e.isNavLink,d=e.to,v=e.href,p=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,m=void 0===y||y,b=(0,i.default)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),P=(0,f.useBaseUrlUtils)().withBaseUrl,w=(0,l.useLinksCollector)(),_=d||v,D=(0,c.default)(_),O=null==_?void 0:_.replace("pathname://",""),j=void 0!==O?(r=O,m&&function(e){return e.startsWith("/")}(r)?P(r):r):void 0,E=(0,a.useRef)(!1),x=o?u.NavLink:u.Link,S=s.default.canUseIntersectionObserver;(0,a.useEffect)((function(){return!S&&D&&null!=j&&window.docusaurus.prefetch(j),function(){S&&n&&n.disconnect()}}),[j,S,D]);var A=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,L=!j||!D||A;return j&&D&&!A&&!g&&w.collectLink(j),L?a.default.createElement("a",Object.assign({href:j},_&&!D&&{target:"_blank",rel:"noopener noreferrer"},b)):a.default.createElement(x,Object.assign({},b,{onMouseEnter:function(){E.current||null==j||(window.docusaurus.preload(j),E.current=!0)},innerRef:function(e){var t,r;S&&e&&D&&(t=e,r=function(){null!=j&&window.docusaurus.prefetch(j)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),r())}))}))).observe(t))},to:j||""},o&&{isActive:h,activeClassName:p}))};t.default=d},179:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useBaseUrlUtils=a,t.default=function(e,t){void 0===t&&(t={});return(0,a().withBaseUrl)(e,t)};var o=n(r(31)),i=r(190);function a(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.hasProtocol)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(n,r,e,t)}}}},182:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return i})),r.d(t,"__rest",(function(){return a})),r.d(t,"__decorate",(function(){return u})),r.d(t,"__param",(function(){return c})),r.d(t,"__metadata",(function(){return s})),r.d(t,"__awaiter",(function(){return l})),r.d(t,"__generator",(function(){return f})),r.d(t,"__createBinding",(function(){return d})),r.d(t,"__exportStar",(function(){return v})),r.d(t,"__values",(function(){return p})),r.d(t,"__read",(function(){return h})),r.d(t,"__spread",(function(){return g})),r.d(t,"__spreadArrays",(function(){return y})),r.d(t,"__spreadArray",(function(){return m})),r.d(t,"__await",(function(){return b})),r.d(t,"__asyncGenerator",(function(){return P})),r.d(t,"__asyncDelegator",(function(){return w})),r.d(t,"__asyncValues",(function(){return _})),r.d(t,"__makeTemplateObject",(function(){return D})),r.d(t,"__importStar",(function(){return j})),r.d(t,"__importDefault",(function(){return E})),r.d(t,"__classPrivateFieldGet",(function(){return x})),r.d(t,"__classPrivateFieldSet",(function(){return S}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function u(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function u(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function y(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}function m(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function P(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,s):l(i[0][2],r)}catch(n){l(i[0][3],n)}var r}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return O(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function x(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function S(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},183:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(0),i=n(r(228));var a=function(){var e=(0,o.useContext)(i.default);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e};t.default=a},190:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hasProtocol=n,t.default=function(e){return void 0!==e&&!n(e)}},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(236);function o(e,t){if(e){if("string"==typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},203:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.interpolate=u,t.default=function(e){var t=e.children,r=e.values;return u(t,r)};var o=n(r(0)),i=/{\w+}/g,a="{}";function u(e,t){var r=[],n=e.replace(i,(function(e){var n=e.substr(1,e.length-2),i=null==t?void 0:t[n];if(void 0!==i){var u=o.default.isValidElement(i)?i:String(i);return r.push(u),a}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?n.split(a).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):n.split(a).reduce((function(e,t,n){return[].concat(e,[o.default.createElement(o.default.Fragment,{key:n},t,r[n])])}),[])}},204:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var n=r(182).__importDefault(r(31));t.useThemeConfig=function(){return n.default().siteConfig.themeConfig}},205:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;var n="localStorage";function o(e){if(void 0===e&&(e=n),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(r){return t=r,i||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),i=!0),null}var t}var i=!1;var a={get:function(){return null},set:function(){},del:function(){}};t.createStorageSlot=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var r=o(null==t?void 0:t.persistence);return null===r?a:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}},t.listStorageKeys=function(e){void 0===e&&(e=n);var t=o(e);if(!t)return[];for(var r=[],i=0;i<t.length;i+=1){var a=t.key(i);null!==a&&r.push(a)}return r}},206:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=r(176);t.isDocsPluginEnabled=!!n.useAllDocsData},207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var n=r(182),o=n.__importStar(r(0)),i=r(204),a=r(206),u=r(176),c=n.__importDefault(r(267));function s(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=c.default.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(c.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function l(){var e=u.useAllDocsData(),t=i.useThemeConfig().docs.versionPersistence,r=o.useMemo((function(){return Object.keys(e)}),[e]),n=o.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),a=n[0],l=n[1];return o.useEffect((function(){l(s({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[a,o.useMemo((function(){return{savePreferredVersion:function(e,r){c.default.save(e,t,r),l((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[l])]}var f=o.createContext(null);function d(e){var t=e.children,r=l();return o.default.createElement(f.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return a.isDocsPluginEnabled?o.default.createElement(d,null,t):o.default.createElement(o.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},211:function(e,t,r){e.exports=r(271)},212:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,c,"next",e)}function c(e){n(a,o,i,u,c,"throw",e)}u(void 0)}))}}r.r(t),r.d(t,"default",(function(){return o}))},228:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)).default.createContext(void 0);t.default=o},236:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},237:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.title,r=e.description,n=e.keywords,c=e.image,s=(0,a.useThemeConfig)().image,l=(0,a.useTitleFormatter)(t),f=(0,u.default)(c||s,{absolute:!0});return o.default.createElement(i.default,null,o.default.createElement("title",null,l),o.default.createElement("meta",{property:"og:title",content:l}),r&&o.default.createElement("meta",{name:"description",content:r}),r&&o.default.createElement("meta",{property:"og:description",content:r}),n&&o.default.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&o.default.createElement("meta",{property:"og:image",content:f}),f&&o.default.createElement("meta",{name:"twitter:image",content:f}),f&&o.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))};var o=n(r(0)),i=n(r(33)),a=r(170),u=n(r(179))},257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var n=r(182).__importDefault(r(31)),o=r(32);t.useAlternatePageUtils=function(){var e=n.default(),t=e.siteConfig,r=t.baseUrl,i=t.url,a=e.i18n,u=a.defaultLocale,c=a.currentLocale,s=o.useLocation().pathname,l=c===u?r:r.replace("/"+c+"/","/"),f=s.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?i:"")+function(e){return e===u?""+l:""+l+e+"/"}(t)+f}}}},258:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;var n=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(n))||void 0===t?void 0:t[2])&&void 0!==r?r:""}},259:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},260:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(32),o=r(261),i=r(262);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")};t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),o=n.useLocation().pathname;return i.getActivePlugin(r,o,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),o=n.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:i.getActiveVersion(r.pluginData,o)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return i.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return i.getActiveVersion(r,o)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return i.getActiveDocContext(r,o)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return i.getDocVersionSuggestions(r,o)}},261:function(e,t,r){"use strict";var n=r(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,t.useAllPluginInstancesData=a,t.usePluginData=function(e,t){void 0===t&&(t="default");var r=a(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r};var o=n(r(31));function i(){var e=(0,o.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}},262:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(32);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,i,a=t.getActiveVersion(e,r),u=null==a?void 0:a.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(o=u.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),i=o.activeVersion!==n;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:i?n:void 0}}},263:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)}},264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var n=r(182).__importDefault(r(31));t.useTitleFormatter=function(e){var t=n.default().siteConfig,r=void 0===t?{}:t,o=r.title,i=r.titleDelimiter,a=void 0===i?"|":i;return e&&e.trim().length?e.trim()+" "+a+" "+o:o}},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var n=r(182),o=r(0),i=n.__importDefault(r(31)),a=["zero","one","two","few","many","other"];function u(e){return a.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:u(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=i.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),c;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:u(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),c}var t,r}),[e])}t.usePluralForm=function(){var e=s();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),i=r.pluralForms.indexOf(o);return n[Math.min(i,n.length-1)]}(r,t,e)}}}},266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=r(0),o=r(207),i=r(176),a=r(268);t.useDocsPreferredVersion=function(e){void 0===e&&(e=a.DEFAULT_PLUGIN_ID);var t=i.useDocsData(e),r=o.useDocsPreferredVersionContext(),u=r[0],c=r[1],s=u[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:n.useCallback((function(t){c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){var e=i.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}},267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(205),o=function(e){return"docs-preferred-version-"+e},i={save:function(e,t,r){n.createStorageSlot(o(e),{persistence:t}).set(r)},read:function(e,t){return n.createStorageSlot(o(e),{persistence:t}).get()},clear:function(e,t){n.createStorageSlot(o(e),{persistence:t}).del()}};t.default=i},268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_PLUGIN_ID=void 0;t.DEFAULT_PLUGIN_ID="default"},269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},271:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(C){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(e,t,r){var n=f;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",v="executing",p="completed",h={};function g(){}function y(){}function m(){}var b={};b[i]=function(){return this};var P=Object.getPrototypeOf,w=P&&P(P(A([])));w&&w!==r&&n.call(w,i)&&(b=w);var _=m.prototype=g.prototype=Object.create(b);function D(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,a,u){var c=l(e[o],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function A(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:L}}function L(){return{value:t,done:!0}}return y.prototype=_.constructor=m,m.constructor=y,y.displayName=c(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,u,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},D(O.prototype),O.prototype[a]=function(){return this},e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},D(_),c(_,u,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},280:function(e,t,r){"use strict";var n=r(21).default;Object.defineProperty(t,"__esModule",{value:!0}),t.ProvideLinksCollector=t.useLinksCollector=t.createStatefulLinksCollector=void 0;var o=n(r(0));t.createStatefulLinksCollector=function(){var e=new Set;return{collectLink:function(t){e.add(t)},getCollectedLinks:function(){return[].concat(e)}}};var i=(0,o.createContext)({collectLink:function(){}});t.useLinksCollector=function(){return(0,o.useContext)(i)};t.ProvideLinksCollector=function(e){var t=e.children,r=e.linksCollector;return o.default.createElement(i.Provider,{value:r},t)}}}]);