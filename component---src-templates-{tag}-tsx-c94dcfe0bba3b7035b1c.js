"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[322],{767:function(e,t,a){a.d(t,{Z:function(){return r}});const r={toLower:{toLower:!0}}},4674:function(e,t,a){a.d(t,{t:function(){return n}});var r=a(4794);let n=function(){function e(){}return e.push=function(e,t){return void 0===t&&(t={}),(0,r.navigate)(e,{...t})},e.replace=function(e,t){return void 0===t&&(t={}),(0,r.navigate)(e,{replace:!0,...t})},e.back=function(){return(0,r.navigate)(-1)},e}()},2378:function(e,t,a){a.d(t,{o:function(){return c}});var r=a(6540),n=a(4794),o=a(4674),l=a(7606);const s=e=>{let{children:t,to:a,toBack:s,isActive:c}=e;const{pageProps:i}=(0,l.N)(),d="cursor-pointer w-fit text-18-300-footer drop-shadow-transparent transition-shadow disabled:cursor-default desktop:hover:drop-shadow-text desktop:hover:text-text data-[active=true]:drop-shadow-text data-[active=true]:text-text after:block after:w-full after:h-[1px] after:bg-text after:scale-x-0 desktop:hover:after:scale-x-100 after:transition-transform after:data-[active=true]:scale-x-100";return s?r.createElement("button",{className:d,onClick:o.t.back},t):r.createElement(n.Link,{className:d,to:`${a}`,"data-active":c},t)},c=e=>{let{}=e;return r.createElement("div",{className:"ml-24 -mb-24 mt-36 w-fit"},r.createElement(s,{toBack:!0},"< 이전 페이지로"))}},5958:function(e,t,a){a.d(t,{$:function(){return n}});var r=a(6540);const n=e=>{let{className:t="",ratio:a,src:n,...o}=e;return r.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:a?100*a+"%":void 0}},!!n&&r.createElement("img",Object.assign({className:`peer ${a?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity data-[loaded=false]:absolute data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:n},o,{onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),r.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-footer animate-pulse peer-data-[loaded=true]:hidden"}))}},425:function(e,t,a){a.d(t,{D:function(){return n}});var r=a(6540);const n=e=>{let{children:t}=e;return r.createElement("h1",{className:"px-24 mt-48 mb-24 text-36-700"},t)}},4860:function(e,t,a){a.d(t,{G:function(){return o}});var r=a(6540),n=a(2444);const o=e=>{let{title:t,location:a}=e;const o=(0,n.Q)(),l=`${t?`${t} | `:""}${o.title}`,s=`${o.siteUrl}${a.pathname||""}`;return r.createElement(r.Fragment,null,r.createElement("html",{lang:"ko"}),r.createElement("title",null,l),r.createElement("meta",{property:"og:locale",content:"ko_KR"}),r.createElement("meta",{property:"og:site_name",content:o.title}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:o.description}),r.createElement("meta",{property:"og:url",content:s}))}},7366:function(e,t,a){a.d(t,{R:function(){return c}});var r=a(9179),n=a(6540),o=a(767),l=a(9790),s=a(4674);const c=e=>{let{tag:t}=e;return n.createElement(r.P.div,{whileHover:{scale:1.15},transition:{type:"spring",damping:20,stiffness:1500}},n.createElement("button",{className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>{e.preventDefault(),e.stopPropagation(),s.t.push(l.J.tag(t),{state:o.Z.toLower})}},t))}},6120:function(e,t,a){a.d(t,{A:function(){return i}});var r=a(6540),n=a(4794),o=a(767),l=a(5958),s=a(7366);const c=r.memo((e=>{var t,a;let{post:c,onHover:i,onBlur:d}=e;return r.createElement(n.Link,{to:c.fields.slug||"",onMouseEnter:()=>i(c.fields.slug),onMouseLeave:()=>d(c.fields.slug),"data-id":c.fields.slug,state:o.Z.toLower},r.createElement("div",{className:"px-20 py-32 overflow-hidden group rounded-16 bg-bg outline outline-transparent outline-1 desktop:hover:outline-blur desktop:hover:drop-shadow-post tablet:outline-border"},(null===(t=c.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL)&&r.createElement(l.$,{src:null===(a=c.frontmatter.thumbnail)||void 0===a?void 0:a.publicURL,alt:c.frontmatter.title,className:"border-solid rounded-8 border-1 border-border mb-18"}),r.createElement("h2",{className:"break-all text-28-700 line-clamp-2"},c.frontmatter.title),r.createElement("div",{className:"mt-8 text-text-quote"},`${c.frontmatter.date} · ${c.timeToRead} min read`),r.createElement("div",{className:"flex gap-12 mt-12"},c.frontmatter.tags.map((e=>r.createElement(s.R,{key:e,tag:e})))),r.createElement("p",{className:"w-full mt-16 text-text-footer text-18-300 line-clamp-2 break-all"},c.excerpt)))})),i=e=>{let{posts:t}=e;const{0:a,1:n}=(0,r.useState)(null),o=(0,r.useCallback)((()=>{n(null)}),[]);return r.createElement(r.Fragment,null,r.createElement("style",{dangerouslySetInnerHTML:{__html:`#post-list a>div {opacity: 1; transform: translateY(0px) scale(1); transition: all 0.25s;} @media (min-width:1081px) {#post-list:hover a:not([data-id="${a}"])>div {opacity: 0.4; transform: translateY(12px) scale(0.98);}}`}}),r.createElement("section",{id:"post-list",className:"grid grid-cols-3 p-24 desktop:gap-8 gap-x-20 gap-y-32 tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-stretch"},t.map((e=>r.createElement(c,{key:e.fields.slug,post:e,onHover:n,onBlur:o})))))}},7876:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var r=a(6540),n=a(2378),o=a(425),l=a(4860),s=a(6120);const c=e=>r.createElement(l.G,Object.assign({title:`태그: ${e.pageContext.tag}`},e));t.default=e=>{let{pageContext:t,data:a}=e;const{tag:l}=t,{edges:c}=a.allMarkdownRemark;return r.createElement(r.Fragment,null,r.createElement(n.o,null),r.createElement(o.D,null,"Tag: ",l),r.createElement(s.A,{posts:c.map((e=>{let{node:t}=e;return t}))}))}}}]);
//# sourceMappingURL=component---src-templates-{tag}-tsx-c94dcfe0bba3b7035b1c.js.map