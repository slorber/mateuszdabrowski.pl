(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(83)),i=(n(89),n(90),n(84)),l={id:"ssjs-loops",title:"Loops"},s={unversionedId:"ssjs/ssjs-loops",id:"ssjs/ssjs-loops",isDocsHomePage:!1,title:"Loops",description:"Working with arrays and objects is one of the selling points of SSJS vs AMPScript. And the primary way to utilize those structures is to loop over them. While SSJS doesn't have all the magic of the modern JavaScript, it still has much more to offer than single FOR available in AMPScript.",source:"@site/docs/ssjs/ssjs-loops.mdx",permalink:"/docs/ssjs/ssjs-loops",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-loops.mdx",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1595758909,sidebar:"snippets",previous:{title:"Docs & Snippets",permalink:"/docs/"},next:{title:"Debugging & Error Handling",permalink:"/docs/ssjs/debugging-ssjs"}},c=[{value:"For Loops",id:"for-loops",children:[{value:"For",id:"for",children:[]},{value:"For in",id:"for-in",children:[]}]},{value:"While Loops",id:"while-loops",children:[{value:"While",id:"while",children:[]},{value:"Do While",id:"do-while",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{content:"Let's dive into limited looping options of the SSJS.",mdxType:"LeadText"}),Object(r.b)("p",null,"Working with arrays and objects is one of the selling points of SSJS vs AMPScript. And the primary way to utilize those structures is to loop over them. While SSJS doesn't have all the magic of the modern JavaScript, it still has much more to offer than single ",Object(r.b)("inlineCode",{parentName:"p"},"FOR")," available in AMPScript."),Object(r.b)("h2",{id:"for-loops"},"For Loops"),Object(r.b)("h3",{id:"for"},"For"),Object(r.b)("p",null,"The classic ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop might be a bit long to write, but it has a lot of excellent properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Works with ",Object(r.b)("inlineCode",{parentName:"li"},"break")," and ",Object(r.b)("inlineCode",{parentName:"li"},"continue")," statements for better looping control."),Object(r.b)("li",{parentName:"ul"},"Both initial and increment expressions can do multiple things (examples available below)."),Object(r.b)("li",{parentName:"ul"},"Condition is not limited to iterable length (although it is the most popular way)."),Object(r.b)("li",{parentName:"ul"},"Fast across various scenarios.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Example of for loop iterating over an array"',"{1}":!0,title:'"Example',of:!0,for:!0,loop:!0,iterating:!0,over:!0,an:!0,'array"':!0}),"for (var i = 0; i < array.length; i++) {\n    Write(i)                            // Returns the current iteration\n    Write(array[i] + '<br/><br/>');     // Returns the value of current element\n}\n")),Object(r.b)("p",null,"Let's break the script down to five steps each ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Execute initial expression (",Object(r.b)("inlineCode",{parentName:"li"},"var i = 0")," in the above example)."),Object(r.b)("li",{parentName:"ol"},"Evaluate the condition (",Object(r.b)("inlineCode",{parentName:"li"},"i < array.length"),"). If it is false - the loop terminates. If true:"),Object(r.b)("li",{parentName:"ol"},"The statement within the loop is executed (",Object(r.b)("inlineCode",{parentName:"li"},"Write(array[i])"),")."),Object(r.b)("li",{parentName:"ol"},"Finally, the increment expression will evaluate (",Object(r.b)("inlineCode",{parentName:"li"},"i++"),")."),Object(r.b)("li",{parentName:"ol"},"The loop goes back to step 2 until it is false.")),Object(r.b)("p",null,"To optimize speed, cache the length used for condition. By assigning it to a variable in initial expression, the loop won't have to calculate the length on each iteration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Initial expression assigns array.length to a variable to cache it"',"{1}":!0,title:'"Initial',expression:!0,assigns:!0,"array.length":!0,to:!0,a:!0,variable:!0,cache:!0,'it"':!0}),"for (var i = 0, range = array.length; i < range; i++) {\n    Write(i)                            // Returns the current iteration\n    Write(array[i] + '<br/><br/>');     // Returns the value of current element\n}\n")),Object(r.b)("p",null,"You can get more logic within the ",Object(r.b)("inlineCode",{parentName:"p"},"for")," declaration to, for example, have a cleaner statement within the loop:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Provide itemValue variable instead of just current iteration"',"{1}":!0,title:'"Provide',itemValue:!0,variable:!0,instead:!0,of:!0,just:!0,current:!0,'iteration"':!0}),"for (var i = 0, itemValue = array[i], range = array.length; i < range; i++, itemValue = array[i]) {\n    Write(itemValue + '<br/><br/>');    // Returns the value of current element\n}\n")),Object(r.b)("p",null,"As ES6 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/js/js-loops#for-of"}),"for...of")," loop is not available in SSJS, you will use this one in most scenarios."),Object(r.b)("h3",{id:"for-in"},"For in"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"for...in")," loop in modern JavaScript is used nearly exclusively for debugging. It is because it loops not only over standard values but also over object prototype methods and properties."),Object(r.b)("p",null,"In SSJS however, the ES6 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/js/js-loops#for-of"}),"for...of")," loop is not available. ",Object(r.b)("inlineCode",{parentName:"p"},"Object.keys()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Object.entries()")," also does not exist. This makes the ",Object(r.b)("inlineCode",{parentName:"p"},"for...in")," the only solution for iterating over objects."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"for (var key in object) {\n    Write(key + '<br/><br/>');          // Returns string name of the current key\n}\n")),Object(r.b)("p",null,"In simple scripts created in SSJS you shouldn't have issues with the prototype methods and properties, however, if you encounter any issues (or want to code defensively), use ",Object(r.b)("inlineCode",{parentName:"p"},"hasOwnProperty")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{2}","{2}":!0}),"for (var key in object) {\n    if (object.hasOwnProperty(key) && key != '_type') {\n        Write(key + '<br/><br/>');\n    }\n}\n")),Object(r.b)("p",null,"Remember to use ",Object(r.b)("inlineCode",{parentName:"p"},"for...in")," only for looping over objects. For any other scenario classic ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop is both safer and more powerful."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you ever use ",Object(r.b)("inlineCode",{parentName:"p"},"for...in")," loop for an array, remember that the loop-counter variable will return a string instead of a number. For example ",Object(r.b)("inlineCode",{parentName:"p"},"'0'")," for first array item instead of ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"while-loops"},"While Loops"),Object(r.b)("h3",{id:"while"},"While"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"while")," loop executes its statement as long as the condition evaluates to true."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2} title="Infinite while loop"',"{2}":!0,title:'"Infinite',while:!0,'loop"':!0}),"var run = true\nwhile (run === true) {\n    Write('To the infinity and beyond!');\n}\n")),Object(r.b)("p",null,"To break out of ",Object(r.b)("inlineCode",{parentName:"p"},"while")," loop, there must be logic within it that will change the condition to false (or a ",Object(r.b)("inlineCode",{parentName:"p"},"break")," statement):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),"var run = true;\nvar i = 0;\nwhile (run === true) {\n    Write('To the infinity and beyond!');\n    i++;\n    if (i > 10) {\n        run = false;\n    }\n}\n")),Object(r.b)("p",null,"or just:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="This loop has the same outcome as the one above"',"{3}":!0,title:'"This',loop:!0,has:!0,the:!0,same:!0,outcome:!0,as:!0,one:!0,'above"':!0}),"var run = true;\nvar i = 0;\nwhile (i <= 10) {\n    Write('To the infinity and beyond!');\n    i++;\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"while")," loop is the best option for iterating over ",Object(r.b)("strong",{parentName:"p"},"big")," arrays."),Object(r.b)("h3",{id:"do-while"},"Do While"),Object(r.b)("p",null,"Same as ",Object(r.b)("inlineCode",{parentName:"p"},"while"),", but the code runs once before evaluating the condition."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1,3}","{1,3}":!0}),"do {\n    Write('Running!');\n} while (run === true)\n")),Object(r.b)("p",null,"Perfect when you need to run an API call, check whether there are more pages of outcomes and act accordingly."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"JavaScript support labels for loops. It allows you to name each loop for even better control with both ",Object(r.b)("inlineCode",{parentName:"p"},"continue")," and ",Object(r.b)("inlineCode",{parentName:"p"},"break")," statements."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1,8} title="Labelled loop example using a nested for loops"',"{1,8}":!0,title:'"Labelled',loop:!0,example:!0,using:!0,a:!0,nested:!0,for:!0,'loops"':!0}),"MainLoopLabel:\nfor (var i = 0; i < array.length; i++) {\n    // Logic\n    SecondaryLoopLabel:\n    for (var j = 0; j < array[i].length; j++) {\n        // Logic\n        if (array[i][j] === 'important') {\n            break MainLoopLabel;\n        };\n    };\n};\n")),Object(r.b)("p",{parentName:"div"},"As you can see, in the first line we added a label for the first ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop. Then, in the statement within the second ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop, we used ",Object(r.b)("inlineCode",{parentName:"p"},"break")," followed by the label. Once executed, it will break both for loops, even if there were still iterations in the main one. The same approach works with the ",Object(r.b)("inlineCode",{parentName:"p"},"continue")," statement."))))}p.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),r=n(48),i=n.n(r);const l=({content:e})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{id:i.a.leadText},e))},85:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},86:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},87:function(e,t,n){"use strict";var a=n(0),o=n(86);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},89:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(87),i=n(85),l=n(49),s=n.n(l);const c=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:u}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(r.a)(),[h,j]=Object(a.useState)(l);if(null!=u){const e=d[u];null!=e&&e!==h&&p.some(t=>t.value===e)&&j(e)}const f=e=>{j(e),null!=u&&m(u,e)},O=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},90:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);