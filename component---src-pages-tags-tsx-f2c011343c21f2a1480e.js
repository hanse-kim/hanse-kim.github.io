"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[504],{767:function(e,t,n){n.d(t,{Z:function(){return a}});const a={toLower:{toLower:!0}}},425:function(e,t,n){n.d(t,{D:function(){return r}});var a=n(6540);const r=e=>{let{children:t}=e;return a.createElement("h1",{className:"px-[24px] mt-[48px] mb-[24px]"},t)}},4860:function(e,t,n){n.d(t,{G:function(){return o}});var a=n(6540),r=n(2444);const o=e=>{let{title:t,location:n}=e;const o=(0,r.Q)(),l=`${t?`${t} | `:""}${o.title}`,c=`${o.siteUrl}${n.pathname||""}`;return a.createElement(a.Fragment,null,a.createElement("html",{lang:"ko"}),a.createElement("title",null,l),a.createElement("meta",{property:"og:locale",content:"ko_KR"}),a.createElement("meta",{property:"og:site_name",content:o.title}),a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:l}),a.createElement("meta",{property:"og:description",content:o.description}),a.createElement("meta",{property:"og:url",content:c}))}},4294:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return d}});var a=n(6540),r=n(4860),o=n(425),l=n(9179),c=n(4794),u=n(767),m=n(9790);const s=e=>{let{tags:t}=e;const{minCount:n,maxCount:r}=(0,a.useMemo)((()=>{let e=Number.MAX_SAFE_INTEGER,n=0;return t.forEach((t=>{e=Math.min(e,t.totalCount),n=Math.max(n,t.totalCount)})),{minCount:e,maxCount:n}}),[]);return a.createElement("section",{className:"px-24 flex flex-wrap justify-center items-center gap-18",style:{fontSize:"16px"}},t.toSorted(((e,t)=>t.totalCount-e.totalCount)).map((e=>{return a.createElement(l.P.div,{key:e.value,whileHover:{scale:1.05}},a.createElement(c.Link,{to:m.J.tag(e.value),className:"text-18-400 underline underline-offset-[0.2em] drop-shadow-transparent transition-shadow desktop:hover:drop-shadow-text",style:{fontSize:(t=e.totalCount,(t-n)/(r-n)+1+"em")},state:u.Z.toLower},`${e.value} (${e.totalCount})`));var t})))},i=e=>{let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement(o.D,null,"Tags"),a.createElement(s,{tags:t}))},p=e=>a.createElement(r.G,Object.assign({title:"Tags"},e));var d=e=>{let{data:t}=e;return a.createElement(i,{tags:t.tagsGroup.tags})}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-f2c011343c21f2a1480e.js.map