"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[504],{767:function(t,e,n){n.d(e,{Z:function(){return a}});const a={toLower:{toLower:!0}}},425:function(t,e,n){n.d(e,{D:function(){return r}});var a=n(6540);const r=t=>{let{children:e}=t;return a.createElement("h1",{className:"px-24 mt-48 mb-24 text-36-700"},e)}},4860:function(t,e,n){n.d(e,{G:function(){return o}});var a=n(6540),r=n(2444);const o=t=>{let{title:e,location:n}=t;const o=(0,r.Q)(),l=`${e?`${e} | `:""}${o.title}`,c=`${o.siteUrl}${n.pathname||""}`;return a.createElement(a.Fragment,null,a.createElement("html",{lang:"ko"}),a.createElement("title",null,l),a.createElement("meta",{property:"og:locale",content:"ko_KR"}),a.createElement("meta",{property:"og:site_name",content:o.title}),a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:l}),a.createElement("meta",{property:"og:description",content:o.description}),a.createElement("meta",{property:"og:url",content:c}))}},4294:function(t,e,n){n.r(e),n.d(e,{Head:function(){return p},default:function(){return d}});var a=n(6540),r=n(4860),o=n(425),l=n(2599),c=n(4794),u=n(767),m=n(9790);const s=t=>{let{tags:e}=t;const{minCount:n,maxCount:r}=(0,a.useMemo)((()=>{let t=Number.MAX_SAFE_INTEGER,n=0;return e.forEach((e=>{t=Math.min(t,e.totalCount),n=Math.max(n,e.totalCount)})),{minCount:t,maxCount:n}}),[]);return a.createElement("section",{className:"px-24 flex flex-wrap justify-center items-center gap-18",style:{fontSize:"16px"}},e.toSorted(((t,e)=>e.totalCount-t.totalCount)).map((t=>{return a.createElement(l.P.div,{key:t.value,whileHover:{scale:1.05}},a.createElement(c.Link,{to:m.J.tag(t.value),className:"text-18-400 underline underline-offset-[0.2em] drop-shadow-transparent transition-shadow desktop:hover:drop-shadow-text",style:{fontSize:(e=t.totalCount,(e-n)/(r-n)+1+"em")},state:u.Z.toLower},`${t.value} (${t.totalCount})`));var e})))},i=t=>{let{tags:e}=t;return a.createElement(a.Fragment,null,a.createElement(o.D,null,"Tags"),a.createElement(s,{tags:e}))},p=t=>a.createElement(r.G,Object.assign({title:"Tags"},t));var d=t=>{let{data:e}=t;return a.createElement(i,{tags:e.tagsGroup.tags})}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-91877e9da319fd2622d8.js.map