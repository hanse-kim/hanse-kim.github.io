"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[663],{767:function(e,t,n){n.d(t,{Z:function(){return r}});const r={toLower:{toLower:!0}}},6229:function(e,t,n){n.d(t,{t:function(){return a}});var r=n(4794);let a=function(){function e(){}return e.push=function(e,t){return void 0===t&&(t={}),(0,r.navigate)(e,{...t})},e.replace=function(e,t){return void 0===t&&(t={}),(0,r.navigate)(e,{replace:!0,...t})},e.back=function(){return(0,r.navigate)(-1)},e}()},5958:function(e,t,n){n.d(t,{$:function(){return a}});var r=n(6540);const a=e=>{let{className:t="",ratio:n,src:a,...o}=e;return r.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:n?100*n+"%":void 0}},!!a&&r.createElement("img",Object.assign({className:`peer ${n?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity duration-500 data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:a},o,{"data-loaded":!1,onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),r.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-alt animate-pulse peer-data-[loaded=true]:hidden"}))}},425:function(e,t,n){n.d(t,{D:function(){return a}});var r=n(6540);const a=e=>{let{children:t}=e;return r.createElement("h1",{className:"px-24 mt-48 mb-24 text-36-700"},t)}},4860:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(6540),a=n(2444);const o=e=>{let{title:t,location:n}=e;const o=(0,a.Q)(),l=`${t?`${t} | `:""}${o.title}`,i=`${o.siteUrl}${n.pathname||""}`;return r.createElement(r.Fragment,null,r.createElement("title",null,l),r.createElement("meta",{property:"og:locale",content:"ko_KR"}),r.createElement("meta",{property:"og:site_name",content:o.title}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:o.description}),r.createElement("meta",{property:"og:url",content:i}))}},6704:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(8868),a=n(6540),o=n(767),l=n(7014),i=n(6229);const s=e=>{let{tag:t}=e;return a.createElement(r.m.div,{whileHover:{scale:1.15},transition:{type:"spring",damping:20,stiffness:1500}},a.createElement("button",{className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>{e.preventDefault(),e.stopPropagation(),i.t.push(l.J.tag(t),{state:o.Z.toLower})}},t))}},4885:function(e,t,n){n.d(t,{A:function(){return u}});var r=n(6540),a=n(4794),o=n(767),l=n(7014),i=n(5958),s=n(6704);const c=r.memo((e=>{var t,n;let{post:c}=e;return r.createElement(a.Link,{to:l.J.blogPost(c.fields.slug),state:o.Z.toLower},r.createElement("div",{className:"px-20 py-32 overflow-hidden group rounded-16 bg-bg outline outline-transparent outline-1 desktop:hover:outline-bg-alt desktop:hover:drop-shadow-post tablet:outline-border hover:!opacity-100 hover:!scale-100 desktop:group-hover/post-list:opacity-40 desktop:group-hover/post-list:scale-95 transition-all duration-[250ms]"},(null===(t=c.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL)&&r.createElement(i.$,{src:null===(n=c.frontmatter.thumbnail)||void 0===n?void 0:n.publicURL,alt:c.frontmatter.title,className:"border-solid rounded-8 border-1 border-border mb-18"}),r.createElement("h2",{className:"break-all text-28-700 line-clamp-2"},c.frontmatter.title),r.createElement("div",{className:"mt-8 text-text-muted"},`${c.frontmatter.date} · ${c.timeToRead} min read`),r.createElement("div",{className:"flex gap-12 mt-12"},c.frontmatter.tags.map((e=>r.createElement(s.Q,{key:e,tag:e})))),r.createElement("p",{className:"w-full mt-16 text-text-alt text-18-300 line-clamp-2 break-all"},c.excerpt)))})),u=e=>{let{posts:t}=e;return r.createElement("section",{className:"grid grid-cols-3 p-24 desktop:gap-8 gap-x-20 gap-y-32 tablet:grid-cols-2 mobile:flex mobile:flex-col mobile:items-stretch group/post-list"},t.map((e=>r.createElement(c,{key:e.fields.slug,post:e}))))}},9579:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s},default:function(){return c}});var r=n(6540),a=n(4860),o=n(425),l=n(4885);const i=e=>{let{posts:t}=e;return r.createElement(r.Fragment,null,r.createElement(o.D,null,`Blog (${t.length} posts)`),r.createElement(l.A,{posts:t}))},s=e=>r.createElement(a.G,Object.assign({title:"Blog"},e));var c=e=>{let{data:t}=e;return r.createElement(i,{posts:t.allMarkdownRemark.nodes})}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-94ecd886dc259d1c441d.js.map