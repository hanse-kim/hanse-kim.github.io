"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[322],{767:function(e,t,a){a.d(t,{Z:function(){return r}});const r={toLower:{toLower:!0}}},425:function(e,t,a){a.d(t,{D:function(){return n}});var r=a(6540);const n=e=>{let{children:t}=e;return r.createElement("h1",{className:"px-24 my-48 text-36-700"},t)}},4860:function(e,t,a){a.d(t,{G:function(){return l}});var r=a(6540),n=a(2444);const l=e=>{let{title:t,location:a}=e;const l=(0,n.Q)(),o=`${t?`${t} | `:""}${l.title}`,s=`${l.siteUrl}${a.pathname||""}`;return r.createElement(r.Fragment,null,r.createElement("html",{lang:"ko"}),r.createElement("title",null,o),r.createElement("meta",{property:"og:locale",content:"ko_KR"}),r.createElement("meta",{property:"og:site_name",content:l.title}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:l.description}),r.createElement("meta",{property:"og:url",content:s}))}},7070:function(e,t,a){a.d(t,{A:function(){return m}});var r=a(6540),n=a(4794),l=a(767);const o=e=>{let{className:t="",ratio:a,src:n,...l}=e;return r.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:a?100*a+"%":void 0}},!!n&&r.createElement("img",Object.assign({className:`peer ${a?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity data-[loaded=false]:absolute data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:n},l,{onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),r.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-footer animate-pulse peer-data-[loaded=true]:hidden"}))};var s=a(9790);const i=e=>{let{tag:t}=e;return r.createElement(n.Link,{to:s.J.tag(t),className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>e.stopPropagation(),state:l.Z.toLower},t)},c=r.memo((e=>{var t,a;let{post:s,onHover:c,onBlur:m}=e;return r.createElement(n.Link,{to:s.fields.slug||"",onMouseEnter:()=>c(s.fields.slug),onMouseLeave:()=>m(s.fields.slug),"data-id":s.fields.slug,state:l.Z.toLower},r.createElement("div",{className:"px-20 py-32 overflow-hidden transition-all group rounded-16 bg-bg outline outline-transparent outline-1 desktop:hover:outline-blur desktop:hover:drop-shadow-post tablet:outline-border"},(null===(t=s.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL)&&r.createElement(o,{src:null===(a=s.frontmatter.thumbnail)||void 0===a?void 0:a.publicURL,alt:s.frontmatter.title,className:"border-solid rounded-8 border-1 border-border mb-18"}),r.createElement("h2",{className:"break-all text-32-700 line-clamp-2"},s.frontmatter.title),r.createElement("div",{className:"flex gap-12 mt-12"},s.frontmatter.tags.map((e=>r.createElement(i,{key:e,tag:e})))),r.createElement("p",{className:"w-full mt-16 text-text-footer text-18-300 line-clamp-2"},s.excerpt)))})),m=e=>{let{posts:t}=e;const{0:a,1:n}=(0,r.useState)(null),l=(0,r.useCallback)((()=>{n(null)}),[]);return r.createElement(r.Fragment,null,r.createElement("style",null,`#post-list a>div {opacity: 1; transform: translateY(0px) scale(1); transition: opacity 0.4s, transform 0.4s;} @media (min-width:1081px) {#post-list:hover a:not([data-id="${a}"])>div {opacity: 0.4; transform: translateY(12px) scale(0.98);}}`),r.createElement("section",{id:"post-list",className:"grid grid-cols-3 p-24 gap-x-20 gap-y-32 tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-stretch"},t.map((e=>r.createElement(c,{key:e.fields.slug,post:e,onHover:n,onBlur:l})))))}},9229:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c},default:function(){return m}});var r=a(6540),n=a(7639);const l=e=>{let{}=e;return r.createElement("div",{className:"ml-24 -mb-24 mt-36 w-fit"},r.createElement(n.i,{toBack:!0},"< 이전 페이지로"))};var o=a(425),s=a(4860),i=a(7070);const c=e=>r.createElement(s.G,Object.assign({title:`태그: ${e.pageContext.tag}`},e));var m=e=>{let{pageContext:t,data:a}=e;const{tag:n}=t,{edges:s}=a.allMarkdownRemark;return r.createElement(r.Fragment,null,r.createElement(l,null),r.createElement(o.D,null,"Tag: ",n),r.createElement(i.A,{posts:s.map((e=>{let{node:t}=e;return t}))}))}}}]);
//# sourceMappingURL=component---src-templates-{tag}-tsx-b1058a68e51aab9763bc.js.map