(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{306:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return u.default.createElement("div",null,u.default.createElement(v.default,{component:"fieldset",mb:3,borderColor:"transparent"},u.default.createElement(m.default,{component:"legend"},"Was this guide useful?"),u.default.createElement(d.default,{name:"customized-icons",defaultValue:2,getLabelText:function(e){return p[e].label},IconContainerComponent:E})))};var n=l(a(8)),u=l(a(0)),r=l(a(1)),d=l(a(345)),f=l(a(307)),o=l(a(308)),c=l(a(309)),i=l(a(310)),s=l(a(311)),m=l(a(346)),v=l(a(344)),p={1:{icon:u.default.createElement(f.default,null),label:"Very Dissatisfied"},2:{icon:u.default.createElement(o.default,null),label:"Dissatisfied"},3:{icon:u.default.createElement(c.default,null),label:"Neutral"},4:{icon:u.default.createElement(i.default,null),label:"Satisfied"},5:{icon:u.default.createElement(s.default,null),label:"Very Satisfied"}};function E(e){var t=e.value,a=(0,n.default)(e,["value"]);return u.default.createElement("span",a,p[t].icon)}E.propTypes={value:r.default.number.isRequired}},312:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){switch(e.content.frontMatter.theme){case"twocol":return n.default.createElement(r.default,e);case"codeview":return n.default.createElement(d.default,e);default:return n.default.createElement(u.default,e)}};var n=l(a(0)),u=l(a(203)),r=l(a(318)),d=l(a(319))},318:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.content.frontMatter.hide_table_of_contents=!0,n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:r.default.row},n.default.createElement("div",{className:r.default.column},n.default.createElement(u.default,e)),n.default.createElement("div",{className:r.default.column},n.default.createElement("div",null,"Second Col"))))};var n=l(a(0)),u=l(a(203)),r=l(a(130))},319:function(e,t,a){"use strict";var l=a(20).default,n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.content.frontMatter.code,a=(0,d.useState)("Loading..."),l=a[0],n=a[1],s=(0,d.useRef)(!0),m=(0,i.default)(t);function v(){return(v=(0,r.default)(u.default.mark((function e(){var t,a;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return t=e.sent,e.next=5,t.text();case 5:if(a=e.sent,s.current){e.next=8;break}return e.abrupt("return",null);case 8:n(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){return t?function(){v.apply(this,arguments)}():n("No `code` front matter specified."),function(){return s.current=!1}}),[]),e.content.frontMatter.hide_table_of_contents=!0,d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:o.default.row},d.default.createElement("div",{className:[o.default.column,o.default.doc].join(" ")},d.default.createElement(f.default,e)),d.default.createElement("div",{className:[o.default.column,o.default.editor].join(" ")},d.default.createElement(c.default,{value:l}))))};var u=n(a(219)),r=n(a(220)),d=l(a(0)),f=n(a(203)),o=n(a(131)),c=n(a(320)),i=n(a(187));a(321)},320:function(e,t,a){"use strict";var l=a(20).default,n=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(3)),r=l(a(0)),d=n(a(191)),f=n(a(11)),o=(0,r.lazy)((function(){return Promise.all([a.e(0),a.e(45)]).then(a.bind(null,343))})),c={minimap:{enabled:!1},fontSize:"13px",wordWrap:"off",scrollBeyondLastLine:!1,smoothScrolling:!0,fontFamily:"Menlo, Monaco, Consolas, 'Courier New', monospace",scrollbar:{alwaysConsumeMouseWheel:!1}};var i=function(e){var t=(0,d.default)().isDarkTheme,a=(0,r.useRef)(null),l=(0,r.useCallback)((function(t){a.current=t,e.editorDidMount&&e.editorDidMount()}));return f.default.canUseDOM?r.default.createElement(r.Suspense,{fallback:r.default.createElement("h1",null,"Loading...")},r.default.createElement(o,(0,u.default)({},e,{options:Object.assign({},c,e.options),editorDidMount:l,theme:t?"vs-dark":"vs-light"}))):r.default.createElement("h1",null,"Monaco Editor Unsupported with Server Side Rendering")};t.default=i},40:function(e,t,a){"use strict";var l=a(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.default,e),n.default.createElement(u.default,null))};var n=l(a(0)),u=l(a(306)),r=l(a(312))}}]);