"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[51],{767:function(e,t,n){n.d(t,{Z:function(){return a}});const a={toLower:{toLower:!0}}},6229:function(e,t,n){n.d(t,{t:function(){return r}});var a=n(4794);let r=function(){function e(){}return e.push=function(e,t){return void 0===t&&(t={}),(0,a.navigate)(e,{...t})},e.replace=function(e,t){return void 0===t&&(t={}),(0,a.navigate)(e,{replace:!0,...t})},e.back=function(){return(0,a.navigate)(-1)},e}()},7101:function(e,t,n){n.d(t,{o:function(){return o}});var a=n(6540),r=n(6229),l=n(4083);const o=e=>{let{label:t="이전 페이지로"}=e;return a.createElement("div",{className:"ml-24 -mb-24 mt-36 w-fit"},a.createElement(l.i,{onClick:r.t.back},`< ${t}`))}},5958:function(e,t,n){n.d(t,{$:function(){return r}});var a=n(6540);const r=e=>{let{className:t="",ratio:n,src:r,...l}=e;return a.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:n?100*n+"%":void 0}},!!r&&a.createElement("img",Object.assign({className:`peer ${n?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity duration-500 data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:r},l,{"data-loaded":!1,onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),a.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-alt animate-pulse peer-data-[loaded=true]:hidden"}))}},425:function(e,t,n){n.d(t,{D:function(){return r}});var a=n(6540);const r=e=>{let{children:t}=e;return a.createElement("h1",{className:"px-24 mt-48 mb-24 text-36-700"},t)}},4860:function(e,t,n){n.d(t,{G:function(){return l}});var a=n(6540),r=n(2444);const l=e=>{let{title:t,location:n}=e;const l=(0,r.Q)(),o=`${t?`${t} | `:""}${l.title}`,c=`${l.siteUrl}${n.pathname||""}`;return a.createElement(a.Fragment,null,a.createElement("title",null,o),a.createElement("meta",{property:"og:locale",content:"ko_KR"}),a.createElement("meta",{property:"og:site_name",content:l.title}),a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:l.description}),a.createElement("meta",{property:"og:url",content:c}))}},6704:function(e,t,n){n.d(t,{Q:function(){return i}});var a=n(8868),r=n(6540),l=n(767),o=n(7014),c=n(6229);const i=e=>{let{tag:t}=e;return r.createElement(a.m.div,{whileHover:{scale:1.15},transition:{type:"spring",damping:20,stiffness:1500}},r.createElement("button",{className:"px-8 pt-3 pb-4 transition-colors rounded-4 bg-border text-main text-14-400 desktop:hover:text-bg desktop:hover:bg-main",onClick:e=>{e.preventDefault(),e.stopPropagation(),c.t.push(o.J.tag(t),{state:l.Z.toLower})}},t))}},1283:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var a=n(6540),r=n(4860);const l=e=>{let{}=e;return a.createElement(a.Fragment,null,a.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7803939437590519",crossOrigin:"anonymous"}),a.createElement("ins",{className:"adsbygoogle mb-48",style:{display:"block"},"data-ad-client":"ca-pub-7803939437590519","data-ad-slot":"4608593416","data-ad-format":"auto","data-full-width-responsive":"true"}),a.createElement("script",{dangerouslySetInnerHTML:{__html:"(adsbygoogle = window.adsbygoogle || []).push({});"}}))};var o=n(3826);const c=e=>{let{}=e;const t=(0,a.useRef)(null),n=(0,o.hJ)();return(0,a.useEffect)((()=>{const e={repo:"hanse-kim/hanse-kim.github.io",repoId:"R_kgDOMrV8_w",category:"Announcements",categoryId:"DIC_kwDOMrV8_84CiQDw",mapping:"url",strict:"0",reactionsEnabled:"0",emitMetadata:"0",inputPosition:"bottom",theme:n?"dark":"light",lang:"ko"},t=document.createElement("script");return t.src="https://giscus.app/client.js",t.crossOrigin="anonymous",t.async=!0,Object.entries(e).map((e=>{let[n,a]=e;return t.dataset[n]=a})),document.head.appendChild(t),()=>{t.remove()}}),[]),a.createElement("section",{className:"px-24"},a.createElement("div",{className:"giscus",ref:t}))},i=e=>{let{html:t}=e;return a.createElement("div",{className:"flex flex-col gap-24 px-24 pb-48 md text-20-400",dangerouslySetInnerHTML:{__html:t}})};var s=n(7101),m=n(425),u=n(6704);const d=e=>{let{title:t,date:n,tags:r,timeToRead:l}=e;return a.createElement("header",null,a.createElement(s.o,null),a.createElement(m.D,null,t),a.createElement("div",{className:"pl-24 -mt-24 mb-36"},a.createElement("div",{className:"text-18-400 text-text-alt"},`${n} · ${l} min read`),a.createElement("div",{className:"flex gap-12 mt-12"},r.map((e=>a.createElement(u.Q,{key:e,tag:e}))))))};var p=n(5958);const g=e=>{let{imageSrc:t,imageAlt:n}=e;return t?a.createElement(p.$,{className:"border border-solid mb-36 - 1 border-border",src:t,alt:n,ratio:9/21}):null},f=e=>{var t;let{post:n}=e;return a.createElement("article",null,a.createElement(d,Object.assign({},n.frontmatter,{timeToRead:n.timeToRead})),a.createElement(g,{imageSrc:null===(t=n.frontmatter.thumbnail)||void 0===t?void 0:t.publicURL,imageAlt:n.frontmatter.title}),a.createElement(i,{html:n.html}),a.createElement(l,null),a.createElement(c,null))},E=e=>a.createElement(r.G,Object.assign({title:e.data.markdownRemark.frontmatter.title},e));var b=e=>{let{data:t}=e;return a.createElement(f,{post:t.markdownRemark})}}}]);
//# sourceMappingURL=component---src-templates-{post}-tsx-content-file-path-null-623a2222658b3ff3e138.js.map