"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[51],{767:function(e,t,a){a.d(t,{Z:function(){return n}});const n={toLower:{toLower:!0}}},7101:function(e,t,a){a.d(t,{o:function(){return l}});var n=a(6540),r=a(7639);const l=e=>{let{}=e;return n.createElement("div",{className:"ml-24 -mb-24 mt-36 w-fit"},n.createElement(r.i,{toBack:!0},"< 이전 페이지로"))}},5958:function(e,t,a){a.d(t,{$:function(){return r}});var n=a(6540);const r=e=>{let{className:t="",ratio:a,src:r,...l}=e;return n.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:a?100*a+"%":void 0}},!!r&&n.createElement("img",Object.assign({className:`peer ${a?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity data-[loaded=false]:absolute data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:r},l,{onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),n.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-alt animate-pulse peer-data-[loaded=true]:hidden"}))}},425:function(e,t,a){a.d(t,{D:function(){return r}});var n=a(6540);const r=e=>{let{children:t}=e;return n.createElement("h1",{className:"px-24 mt-48 mb-24 text-36-700"},t)}},4860:function(e,t,a){a.d(t,{G:function(){return l}});var n=a(6540),r=a(2444);const l=e=>{let{title:t,location:a}=e;const l=(0,r.Q)(),o=`${t?`${t} | `:""}${l.title}`,c=`${l.siteUrl}${a.pathname||""}`;return n.createElement(n.Fragment,null,n.createElement("title",null,o),n.createElement("meta",{property:"og:locale",content:"ko_KR"}),n.createElement("meta",{property:"og:site_name",content:l.title}),n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"og:title",content:o}),n.createElement("meta",{property:"og:description",content:l.description}),n.createElement("meta",{property:"og:url",content:c}))}},7366:function(e,t,a){a.d(t,{R:function(){return s}});var n=a(9179),r=a(6540),l=a(767),o=a(9790),c=a(6229);const s=e=>{let{tag:t}=e;return r.createElement(n.P.div,{whileHover:{scale:1.15},transition:{type:"spring",damping:20,stiffness:1500}},r.createElement("button",{className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>{e.preventDefault(),e.stopPropagation(),c.t.push(o.J.tag(t),{state:l.Z.toLower})}},t))}},4462:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return E}});var n=a(6540),r=a(4860),l=a(5958);const o=e=>{let{html:t}=e;return n.createElement("div",{className:"flex flex-col gap-24 px-24 pb-48 md text-20-400",dangerouslySetInnerHTML:{__html:t}})};var c=a(7101),s=a(425),i=a(7366);const m=e=>{let{title:t,date:a,tags:r,timeToRead:l}=e;return n.createElement("header",null,n.createElement(c.o,null),n.createElement(s.D,null,t),n.createElement("div",{className:"pl-24 -mt-24 mb-36"},n.createElement("div",{className:"text-18-400 text-text-alt"},`${a} · ${l} min read`),n.createElement("div",{className:"flex gap-12 mt-12"},r.map((e=>n.createElement(i.R,{key:e,tag:e}))))))};var d=a(3826);const u=e=>{let{}=e;const t=(0,n.useRef)(null),a=(0,d.hJ)();return(0,n.useEffect)((()=>{const e={repo:"hanse-kim/hanse-kim.github.io",repoId:"R_kgDOMrV8_w",category:"Announcements",categoryId:"DIC_kwDOMrV8_84CiQDw",mapping:"url",strict:"0",reactionsEnabled:"0",emitMetadata:"0",inputPosition:"bottom",theme:a?"dark":"light",lang:"ko"},t=document.createElement("script");return t.src="https://giscus.app/client.js",t.crossOrigin="anonymous",t.async=!0,Object.entries(e).map((e=>{let[a,n]=e;return t.dataset[a]=n})),document.head.appendChild(t),()=>{t.remove()}}),[]),n.createElement("section",{className:"px-24"},n.createElement("div",{className:"giscus",ref:t}))},p=e=>{let{}=e;return n.createElement(n.Fragment,null,n.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7803939437590519",crossOrigin:"anonymous"}),n.createElement("ins",{className:"adsbygoogle mb-48",style:{display:"block"},"data-ad-client":"ca-pub-7803939437590519","data-ad-slot":"4608593416","data-ad-format":"auto","data-full-width-responsive":"true"}),n.createElement("script",{dangerouslySetInnerHTML:{__html:"(adsbygoogle = window.adsbygoogle || []).push({});"}}))},g=e=>{var t;let{post:a}=e;return n.createElement("article",null,n.createElement(m,Object.assign({},a.frontmatter,{timeToRead:a.timeToRead})),a.frontmatter.thumbnail&&n.createElement(l.$,{className:"border border-solid mb-36 - 1 border-border",src:null===(t=a.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL,alt:a.frontmatter.title,ratio:9/21}),n.createElement(o,{html:a.html}),n.createElement(p,null),n.createElement(u,null))},f=e=>n.createElement(r.G,Object.assign({title:e.data.markdownRemark.frontmatter.title},e));var E=e=>{let{data:t}=e;return n.createElement(g,{post:t.markdownRemark})}}}]);
//# sourceMappingURL=component---src-templates-{post}-tsx-content-file-path-null-cb6ba5b23471b5aa3fd0.js.map