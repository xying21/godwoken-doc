(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(96),s=a(98),o=a(55),c=a.n(o);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},103:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(o){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),s};e.exports=n,e.exports.default=n},104:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},106:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),s=a(98),o=a(96),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:c};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var s=n?{display:"inline-block"}:{},o=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(o))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,s=u({},y(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s})),m(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),s=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,s=0,o=[],c=[o];s>-1;){for(;(l=n[s]++)<r[s];){var i=void 0,m=t[s],u=a[s][l];if("string"==typeof u?(m=s>0?m:["plain"],i=u):(m=g(m,u.type),u.alias&&(m=g(m,u.alias)),i=u.content),"string"==typeof i){var h=i.split(p),y=h.length;o.push({types:m,content:h[0]});for(var f=1;f<y;f++)d(o),c.push(o=[]),o.push({types:m,content:h[f]})}else s++,t.push(m),a.push(i),n.push(0),r.push(i.length)}s--,t.pop(),a.pop(),n.pop(),r.pop()}return d(o),c}(void 0!==s?this.tokenize(t,n,s,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),b=a(103),v=a.n(b),k=a(104),E=a.n(k),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(108),O=a(97);var T=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),a=e.theme||N,n=e.darkTheme||a;return t?n:a},x=a(56),w=a.n(x);const _=/{([\d,-]+)}/,P=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},$=/(?:title=")(.*)(?:")/;var C=({children:e,className:t,metastring:a})=>{const{prism:s}=Object(O.useThemeConfig)(),[c,m]=Object(r.useState)(!1),[u,p]=Object(r.useState)(!1);Object(r.useEffect)((()=>{p(!0)}),[]);const d=Object(r.useRef)(null);let g=[],h="";const y=T(),b=Array.isArray(e)?e.join(""):e;if(a&&_.test(a)){const e=a.match(_)[1];g=E()(e).filter((e=>e>0))}a&&$.test(a)&&(h=a.match($)[1]);let k=t&&t.replace(/language-/,"");!k&&s.defaultLanguage&&(k=s.defaultLanguage);let N=b.replace(/\n$/,"");if(0===g.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}})(k),a=b.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const l=r+1,s=a[r].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}a.splice(r,1)}else r+=1}g=E()(e),N=a.join("\n")}const j=()=>{v()(N),m(!0),setTimeout((()=>m(!1)),2e3)};return l.a.createElement(f,Object(n.a)({},i,{key:String(u),theme:y,code:N,language:k}),(({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:s})=>l.a.createElement(l.a.Fragment,null,h&&l.a.createElement("div",{style:t,className:w.a.codeBlockTitle},h),l.a.createElement("div",{className:w.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(o.a)(e,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:h})},l.a.createElement("div",{className:w.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return g.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t}))))))})))),l.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(w.a.copyButton),onClick:j},c?"Copied":"Copy")))))},L=(a(57),a(58)),B=a.n(L);var I=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(O.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",{[B.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},S=a(59),D=a.n(S);const A={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(C,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(s.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:D.a.mdxCodeBlock},e)),h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")};t.a=A},110:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(96),s=a(99),o=a(24),c=a(98),i=a(106),m=a(100),u=a(60),p=a.n(u);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:u,isBlogPostPage:g=!1}=e,{date:h,permalink:y,tags:f,readingTime:b}=n,{author:v,title:k,image:E,keywords:N}=a,j=a.author_url||a.authorURL,O=a.author_title||a.authorTitle,T=a.author_image_url||a.authorImageURL,x=Object(m.a)(E,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:x}),E&&r.a.createElement("meta",{name:"twitter:image",content:x}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${k}`})),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",t=h.substring(0,10).split("-"),a=t[0],n=d[parseInt(t[1],10)-1],s=parseInt(t[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},g?k:r.a.createElement(c.a,{to:y},k)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:p.a.blogPostDate},n," ",s,", ",a," ",b&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},T&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:j,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:T,alt:v})),r.a.createElement("div",{className:"avatar__intro"},v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:j,target:"_blank",rel:"noreferrer noopener"},v)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(s.a,{components:i.a},t)),(f.length>0||u)&&r.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),f.map((({label:e,permalink:t})=>r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},e)))),u&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:n.permalink,"aria-label":`Read more about ${k}`},r.a.createElement("strong",null,"Read More"))))))}},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(105),s=a(110),o=a(98),c=a(102);t.default=function(e){const{metadata:t,items:a,sidebar:n}=e,{allTagsPath:i,name:m,count:u}=t;return r.a.createElement(l.a,{title:`Posts tagged "${m}"`,description:`Blog | Tagged "${m}"`,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,u," ",function(e,t){return e>1?`${t}s`:t}(u,"post"),' tagged with "',m,'"'),r.a.createElement(o.a,{href:i},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);