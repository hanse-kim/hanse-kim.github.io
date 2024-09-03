"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[663],{767:function(e,t,n){n.d(t,{Z:function(){return r}});const r={toLower:{toLower:!0}}},5958:function(e,t,n){n.d(t,{$:function(){return a}});var r=n(6540);const a=e=>{let{className:t="",ratio:n,src:a,...l}=e;return r.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:n?100*n+"%":void 0}},!!a&&r.createElement("img",Object.assign({className:`peer ${n?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity data-[loaded=false]:absolute data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:a},l,{onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),r.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-footer animate-pulse peer-data-[loaded=true]:hidden"}))}},425:function(e,t,n){n.d(t,{D:function(){return a}});var r=n(6540);const a=e=>{let{children:t}=e;return r.createElement("h1",{className:"px-24 my-48 text-36-700"},t)}},4860:function(e,t,n){n.d(t,{G:function(){return l}});var r=n(6540),a=n(2444);const l=e=>{let{title:t,location:n}=e;const l=(0,a.Q)(),o=`${t?`${t} | `:""}${l.title}`,s=`${l.siteUrl}${n.pathname||""}`;return r.createElement(r.Fragment,null,r.createElement("html",{lang:"ko"}),r.createElement("title",null,o),r.createElement("meta",{property:"og:locale",content:"ko_KR"}),r.createElement("meta",{property:"og:site_name",content:l.title}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:l.description}),r.createElement("meta",{property:"og:url",content:s}))}},7366:function(e,t,n){n.d(t,{R:function(){return i}});var r=n(4851),a=n(6540),l=n(767),o=n(9790),s=n(4674);const i=e=>{let{tag:t}=e;return a.createElement(r.P.div,{whileHover:{scale:1.15},transition:{type:"spring",damping:20,stiffness:1500}},a.createElement("button",{className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>{e.preventDefault(),e.stopPropagation(),s.t.push(o.J.tag(t),{state:l.Z.toLower})}},t))}},6120:function(e,t,n){n.d(t,{A:function(){return c}});var r=n(6540),a=n(4794),l=n(767),o=n(5958),s=n(7366);const i=r.memo((e=>{var t,n;let{post:i,onHover:c,onBlur:m}=e;return r.createElement(a.Link,{to:i.fields.slug||"",onMouseEnter:()=>c(i.fields.slug),onMouseLeave:()=>m(i.fields.slug),"data-id":i.fields.slug,state:l.Z.toLower},r.createElement("div",{className:"px-20 py-32 overflow-hidden group rounded-16 bg-bg outline outline-transparent outline-1 desktop:hover:outline-blur desktop:hover:drop-shadow-post tablet:outline-border"},(null===(t=i.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL)&&r.createElement(o.$,{src:null===(n=i.frontmatter.thumbnail)||void 0===n?void 0:n.publicURL,alt:i.frontmatter.title,className:"border-solid rounded-8 border-1 border-border mb-18"}),r.createElement("h2",{className:"break-all text-32-700 line-clamp-2"},i.frontmatter.title),r.createElement("div",{className:"mt-8 text-text-quote"},`${i.frontmatter.date} · ${i.timeToRead} min read`),r.createElement("div",{className:"flex gap-12 mt-12"},i.frontmatter.tags.map((e=>r.createElement(s.R,{key:e,tag:e})))),r.createElement("p",{className:"w-full mt-16 text-text-footer text-18-300 line-clamp-2"},i.excerpt)))})),c=e=>{let{posts:t}=e;const{0:n,1:a}=(0,r.useState)(null),l=(0,r.useCallback)((()=>{a(null)}),[]);return r.createElement(r.Fragment,null,r.createElement("style",null,`#post-list a>div {opacity: 1; transform: translateY(0px) scale(1); transition: all 0.25s;} @media (min-width:1081px) {#post-list:hover a:not([data-id="${n}"])>div {opacity: 0.4; transform: translateY(12px) scale(0.98);}}`),r.createElement("section",{id:"post-list",className:"grid grid-cols-3 p-24 gap-x-20 gap-y-32 tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-stretch"},t.map((e=>r.createElement(i,{key:e.fields.slug,post:e,onHover:a,onBlur:l})))))}},5512:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i},default:function(){return c}});var r=n(6540),a=n(4860),l=n(425),o=n(6120);const s=e=>{let{posts:t}=e;return r.createElement(r.Fragment,null,r.createElement(l.D,null,`Blog (${t.length} posts)`),r.createElement(o.A,{posts:t}))},i=e=>r.createElement(a.G,e);var c=e=>{let{data:t}=e;return r.createElement(s,{posts:[]})}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-101a02fa71ea7e2055a5.js.map