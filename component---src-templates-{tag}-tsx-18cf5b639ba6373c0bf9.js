"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[322],{767:function(e,t,n){n.d(t,{Z:function(){return a}});const a={toLower:{toLower:!0}}},7101:function(e,t,n){n.d(t,{o:function(){return l}});var a=n(6540),r=n(7639);const l=e=>{let{}=e;return a.createElement("div",{className:"ml-24 -mb-24 mt-36 w-fit"},a.createElement(r.i,{toBack:!0},"< 이전 페이지로"))}},5958:function(e,t,n){n.d(t,{$:function(){return r}});var a=n(6540);const r=e=>{let{className:t="",ratio:n,src:r,...l}=e;return a.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:n?100*n+"%":void 0}},!!r&&a.createElement("img",Object.assign({className:`peer ${n?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity data-[loaded=false]:absolute data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:r},l,{onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),a.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-footer animate-pulse peer-data-[loaded=true]:hidden"}))}},425:function(e,t,n){n.d(t,{D:function(){return r}});var a=n(6540);const r=e=>{let{children:t}=e;return a.createElement("h1",{className:"px-24 mt-48 mb-24 text-36-700"},t)}},4860:function(e,t,n){n.d(t,{G:function(){return l}});var a=n(6540),r=n(2444);const l=e=>{let{title:t,location:n}=e;const l=(0,r.Q)(),o=`${t?`${t} | `:""}${l.title}`,s=`${l.siteUrl}${n.pathname||""}`;return a.createElement(a.Fragment,null,a.createElement("html",{lang:"ko"}),a.createElement("title",null,o),a.createElement("meta",{property:"og:locale",content:"ko_KR"}),a.createElement("meta",{property:"og:site_name",content:l.title}),a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:l.description}),a.createElement("meta",{property:"og:url",content:s}))}},7366:function(e,t,n){n.d(t,{R:function(){return i}});var a=n(9179),r=n(6540),l=n(767),o=n(9790),s=n(4674);const i=e=>{let{tag:t}=e;return r.createElement(a.P.div,{whileHover:{scale:1.15},transition:{type:"spring",damping:20,stiffness:1500}},r.createElement("button",{className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>{e.preventDefault(),e.stopPropagation(),s.t.push(o.J.tag(t),{state:l.Z.toLower})}},t))}},6120:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(6540),r=n(4794),l=n(767),o=n(5958),s=n(7366);const i=a.memo((e=>{var t,n;let{post:i,onHover:c,onBlur:m}=e;return a.createElement(r.Link,{to:i.fields.slug||"",onMouseEnter:()=>c(i.fields.slug),onMouseLeave:()=>m(i.fields.slug),"data-id":i.fields.slug,state:l.Z.toLower},a.createElement("div",{className:"px-20 py-32 overflow-hidden group rounded-16 bg-bg outline outline-transparent outline-1 desktop:hover:outline-blur desktop:hover:drop-shadow-post tablet:outline-border"},(null===(t=i.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL)&&a.createElement(o.$,{src:null===(n=i.frontmatter.thumbnail)||void 0===n?void 0:n.publicURL,alt:i.frontmatter.title,className:"border-solid rounded-8 border-1 border-border mb-18"}),a.createElement("h2",{className:"break-all text-32-700 line-clamp-2"},i.frontmatter.title),a.createElement("div",{className:"mt-8 text-text-quote"},`${i.frontmatter.date} · ${i.timeToRead} min read`),a.createElement("div",{className:"flex gap-12 mt-12"},i.frontmatter.tags.map((e=>a.createElement(s.R,{key:e,tag:e})))),a.createElement("p",{className:"w-full mt-16 text-text-footer text-18-300 line-clamp-2"},i.excerpt)))})),c=e=>{let{posts:t}=e;const{0:n,1:r}=(0,a.useState)(null),l=(0,a.useCallback)((()=>{r(null)}),[]);return a.createElement(a.Fragment,null,a.createElement("style",{dangerouslySetInnerHTML:{__html:`#post-list a>div {opacity: 1; transform: translateY(0px) scale(1); transition: all 0.25s;} @media (min-width:1081px) {#post-list:hover a:not([data-id="${n}"])>div {opacity: 0.4; transform: translateY(12px) scale(0.98);}}`}}),a.createElement("section",{id:"post-list",className:"grid grid-cols-3 p-24 gap-x-20 gap-y-32 tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-stretch"},t.map((e=>a.createElement(i,{key:e.fields.slug,post:e,onHover:r,onBlur:l})))))}},7876:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i}});var a=n(6540),r=n(7101),l=n(425),o=n(4860),s=n(6120);const i=e=>a.createElement(o.G,Object.assign({title:`태그: ${e.pageContext.tag}`},e));t.default=e=>{let{pageContext:t,data:n}=e;const{tag:o}=t,{edges:i}=n.allMarkdownRemark;return a.createElement(a.Fragment,null,a.createElement(r.o,null),a.createElement(l.D,null,"Tag: ",o),a.createElement(s.A,{posts:i.map((e=>{let{node:t}=e;return t}))}))}}}]);
//# sourceMappingURL=component---src-templates-{tag}-tsx-18cf5b639ba6373c0bf9.js.map