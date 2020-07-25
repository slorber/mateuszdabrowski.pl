(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(83)),i=(a(89),a(90),a(84)),o={id:"js-map-filter-find-reduce",title:"Map, Filter, Find, Reduce"},l={unversionedId:"js/js-map-filter-find-reduce",id:"js/js-map-filter-find-reduce",isDocsHomePage:!1,title:"Map, Filter, Find, Reduce",description:"Map, Filter, Find, Reduce",source:"@site/docs/js/js-map-filter-find-reduce.mdx",permalink:"/docs/js/js-map-filter-find-reduce",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/js/js-map-filter-find-reduce.mdx",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1595617835},u=[{value:"Map, Filter, Find, Reduce",id:"map-filter-find-reduce",children:[{value:"Map",id:"map",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Find",id:"find",children:[]},{value:"Reduce",id:"reduce",children:[]}]}],s={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.a,{content:"For, While and forEach meet Filter, Map, Find and Reduce",mdxType:"LeadText"}),Object(c.b)("h2",{id:"map-filter-find-reduce"},"Map, Filter, Find, Reduce"),Object(c.b)("h3",{id:"map"},"Map"),Object(c.b)("p",null,"Map takes a data, applies a function to each element of the data and spits out modified data."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const result = array.map(callbackFunction);\n")),Object(c.b)("p",null,"Map returns an array of the same length but with the modification applied by callbackFunction."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="Example - toProperCase"',title:'"Example',"-":!0,'toProperCase"':!0}),"['mateusz', 'sara'].map(name => `${name[0].toUpperCase()}${name.slice(1)}`);\n")),Object(c.b)("h3",{id:"filter"},"Filter"),Object(c.b)("p",null,"Filter takes data, applies a boolean returning function to each element of the data and spits out filtered down data."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const result = array.filter(callbackFunction);\n")),Object(c.b)("h3",{id:"find"},"Find"),Object(c.b)("p",null,"Find takes data, applies a boolean returning function to each element of the data and spits out first results that matches."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const result = array.find(callbackFunction);\n")),Object(c.b)("h3",{id:"reduce"},"Reduce"),Object(c.b)("p",null,"Reduce takes data, applies a reducer function to each element of the data and spits out single output value."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const result = array.reduce(callbackFunction);\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="Example - Sum"',title:'"Example',"-":!0,'Sum"':!0}),"[1, 2, 3, 4, 5].reduce((accumulator, value) => accumulator + value, 0); // Returns 15; 0 is second optional argument that sets the starting point for accumulating and is useful to safeguard against empty arrays\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="Example - Avg"',title:'"Example',"-":!0,'Avg"':!0}),"[1, 2, 3, 4, 5].reduce((accumulator, value) => accumulator + value, 0) / [1, 2, 3, 4, 5].length;\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="Example - objects array reducer"',title:'"Example',"-":!0,objects:!0,array:!0,'reducer"':!0}),"const\xa0inventory\xa0=\xa0[\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0type:\xa0'shirt',\xa0price:\xa04000\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0type:\xa0'pants',\xa0price:\xa04532\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0type:\xa0'socks',\xa0price:\xa0234\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0type:\xa0'shirt',\xa0price:\xa02343\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0type:\xa0'pants',\xa0price:\xa02343\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0type:\xa0'socks',\xa0price:\xa0542\xa0},\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0type:\xa0'pants',\xa0price:\xa0123\xa0},\n]\n\nconst inventoryCount = inventory.reduce((accumulator, item) => {\n    accumulator[item.type] = accumulator[item.type] + 1 || 1\n    return accumulator\n}, {}); // Starting with empty object instead with 0\n\nconst inventoryPrice = inventory.reduce((accumulator, item) => accumulator + item.price, 0);\n")))}p.isMDXComponent=!0},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return a?r.a.createElement(b,o(o({ref:t},u),{},{components:a})):r.a.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<c;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),c=a(48),i=a.n(c);const o=({content:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{id:i.a.leadText},e))},85:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},86:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},87:function(e,t,a){"use strict";var n=a(0),r=a(86);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},89:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(87),i=a(85),o=a(49),l=a.n(o);const u=37,s=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:p,groupId:d}=e,{tabGroupChoices:m,setTabGroupChoices:b}=Object(c.a)(),[f,j]=Object(n.useState)(o);if(null!=d){const e=m[d];null!=e&&e!==f&&p.some(t=>t.value===e)&&j(e)}const y=e=>{j(e),null!=d&&b(d,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case s:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===f)[0]))}},90:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);