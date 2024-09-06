"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[51],{767:function(e,t,a){a.d(t,{Z:function(){return r}});const r={toLower:{toLower:!0}}},9790:function(e,t,a){a.d(t,{J:function(){return c}});const r=/\p{Lu}/gu,n=/-\p{Ll}/gu,o=(e,t=!0)=>{const a=e.replace(r,(e=>`-${e.toLowerCase()}`));return t?a:a.startsWith("-")?a.slice(1):void 0};o.reverse=e=>e.replace(n,(e=>e.slice(1).toUpperCase()));var l=o;const c={blog:"/blog/",about:"/about/",tags:"/tags/",tag:e=>`/tags/${l(e,!1)}/`}},4674:function(e,t,a){a.d(t,{t:function(){return n}});var r=a(4794);let n=function(){function e(){}return e.push=function(e,t){return void 0===t&&(t={}),(0,r.navigate)(e,{...t})},e.replace=function(e,t){return void 0===t&&(t={}),(0,r.navigate)(e,{replace:!0,...t})},e.back=function(){return(0,r.navigate)(-1)},e}()},2378:function(e,t,a){a.d(t,{o:function(){return i}});var r=a(6540),n=a(4794),o=a(4674),l=a(7606);const c=e=>{let{children:t,to:a,toBack:c,isActive:i}=e;const{pageProps:s}=(0,l.N)(),u="cursor-pointer w-fit text-18-300-footer drop-shadow-transparent transition-shadow disabled:cursor-default desktop:hover:drop-shadow-text desktop:hover:text-text data-[active=true]:drop-shadow-text data-[active=true]:text-text after:block after:w-full after:h-[1px] after:bg-text after:scale-x-0 desktop:hover:after:scale-x-100 after:transition-transform after:data-[active=true]:scale-x-100";return c?r.createElement("button",{className:u,onClick:o.t.back},t):r.createElement(n.Link,{className:u,to:`${a}`,"data-active":i},t)},i=e=>{let{}=e;return r.createElement("div",{className:"ml-24 -mb-24 mt-36 w-fit"},r.createElement(c,{toBack:!0},"< 이전 페이지로"))}},5958:function(e,t,a){a.d(t,{$:function(){return n}});var r=a(6540);const n=e=>{let{className:t="",ratio:a,src:n,...o}=e;return r.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:a?100*a+"%":void 0}},!!n&&r.createElement("img",Object.assign({className:`peer ${a?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity data-[loaded=false]:absolute data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:n},o,{onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),r.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-footer animate-pulse peer-data-[loaded=true]:hidden"}))}},425:function(e,t,a){a.d(t,{D:function(){return n}});var r=a(6540);const n=e=>{let{children:t}=e;return r.createElement("h1",{className:"px-24 mt-48 mb-24 text-36-700"},t)}},4860:function(e,t,a){a.d(t,{G:function(){return o}});var r=a(6540),n=a(2444);const o=e=>{let{title:t,location:a}=e;const o=(0,n.Q)(),l=`${t?`${t} | `:""}${o.title}`,c=`${o.siteUrl}${a.pathname||""}`;return r.createElement(r.Fragment,null,r.createElement("html",{lang:"ko"}),r.createElement("title",null,l),r.createElement("meta",{property:"og:locale",content:"ko_KR"}),r.createElement("meta",{property:"og:site_name",content:o.title}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:o.description}),r.createElement("meta",{property:"og:url",content:c}))}},7366:function(e,t,a){a.d(t,{R:function(){return i}});var r=a(9179),n=a(6540),o=a(767),l=a(9790),c=a(4674);const i=e=>{let{tag:t}=e;return n.createElement(r.P.div,{whileHover:{scale:1.15},transition:{type:"spring",damping:20,stiffness:1500}},n.createElement("button",{className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>{e.preventDefault(),e.stopPropagation(),c.t.push(l.J.tag(t),{state:o.Z.toLower})}},t))}},7294:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return p}});var r=a(6540),n=a(4860),o=a(5958),l=a(2378),c=a(425),i=a(7366);const s=e=>{let{title:t,date:a,tags:n,timeToRead:o}=e;return r.createElement("header",null,r.createElement(l.o,null),r.createElement(c.D,null,t),r.createElement("div",{className:"pl-24 -mt-24 mb-36"},r.createElement("div",{className:"text-18-400 text-text-footer"},`${a} · ${o} min read`),r.createElement("div",{className:"flex gap-12 mt-12"},n.map((e=>r.createElement(i.R,{key:e,tag:e}))))))},u=e=>{let{html:t}=e;return r.createElement("div",{className:"flex flex-col gap-24 px-24 pb-48 md text-20-400",dangerouslySetInnerHTML:{__html:t}})},m=e=>{var t;let{post:a}=e;return r.createElement("article",null,r.createElement(s,Object.assign({},a.frontmatter,{timeToRead:a.timeToRead})),a.frontmatter.thumbnail&&r.createElement(o.$,{className:"border border-solid mb-36 - 1 border-border",src:null===(t=a.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL,alt:a.frontmatter.title,ratio:9/21}),r.createElement(u,{html:a.html}))},d=e=>r.createElement(n.G,Object.assign({title:e.data.markdownRemark.frontmatter.title},e));var p=e=>{let{data:t}=e;return r.createElement(m,{post:t.markdownRemark})}}}]);
//# sourceMappingURL=component---src-templates-{post}-tsx-content-file-path-null-eac418c2723c8d7ac6c1.js.map