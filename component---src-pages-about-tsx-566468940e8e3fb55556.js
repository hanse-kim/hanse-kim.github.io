"use strict";(self.webpackChunkhanse_kim_dev=self.webpackChunkhanse_kim_dev||[]).push([[970],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,s=/^[\p{Lu}](?![\p{Lu}])/gu,c=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,r=new RegExp("^"+i.source),n=new RegExp(i.source+c.source,"gu"),l=new RegExp("\\d+"+c.source,"gu"),d=(e,c)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(c={pascalCase:!1,preserveConsecutiveUppercase:!1,...c},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===c.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(c.locale),d=!1===c.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(c.locale);if(1===e.length)return c.pascalCase?d(e):i(e);return e!==i(e)&&(e=((e,s,c)=>{let i=!1,r=!1,n=!1;for(let l=0;l<e.length;l++){const d=e[l];i&&t.test(d)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,n=r,r=!0,l++):r&&n&&a.test(d)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),n=r,r=!1,i=!0):(i=s(d)===d&&c(d)!==d,n=r,r=c(d)===d&&s(d)!==d)}return e})(e,i,d)),e=e.replace(r,""),e=c.preserveConsecutiveUppercase?((e,t)=>(s.lastIndex=0,e.replace(s,(e=>t(e)))))(e,i):i(e),c.pascalCase&&(e=d(e.charAt(0))+e.slice(1)),((e,t)=>(n.lastIndex=0,l.lastIndex=0,e.replace(n,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,d)};e.exports=d,e.exports.default=d},2532:function(e,t,a){a.d(t,{L:function(){return u},M:function(){return E},P:function(){return x},S:function(){return W},_:function(){return n},a:function(){return r},b:function(){return o},g:function(){return b},h:function(){return l}});var s=a(6540),c=(a(2729),a(5556)),i=a.n(c);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,s,c={},i=Object.keys(e);for(s=0;s<i.length;s++)t.indexOf(a=i[s])>=0||(c[a]=e[a]);return c}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function d(e,t,a){const s={};let c="gatsby-image-wrapper";return"fixed"===a?(s.width=e,s.height=t):"constrained"===a&&(c="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:c,"data-gatsby-image-wrapper":"",style:s}}function o(e,t,a,s,c){return void 0===c&&(c={}),r({},a,{loading:s,shouldLoad:e,"data-main-image":"",style:r({},c,{opacity:t?1:0})})}function b(e,t,a,s,c,i,n,l){const d={};i&&(d.backgroundColor=i,"fixed"===a?(d.width=s,d.height=c,d.backgroundColor=i,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),n&&(d.objectFit=n),l&&(d.objectPosition=l);const o=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return o}const p=["children"],f=function(e){let{layout:t,width:a,height:c}=e;return"fullWidth"===t?s.createElement("div",{"aria-hidden":!0,style:{paddingTop:c/a*100+"%"}}):"constrained"===t?s.createElement("div",{style:{maxWidth:a,display:"block"}},s.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${c}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},u=function(e){let{children:t}=e,a=n(e,p);return s.createElement(s.Fragment,null,s.createElement(f,r({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:c,alt:i="",shouldLoad:l}=e,d=n(e,m);return s.createElement("img",r({},d,{decoding:"async",loading:c,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},h=function(e){let{fallback:t,sources:a=[],shouldLoad:c=!0}=e,i=n(e,g);const l=i.sizes||(null==t?void 0:t.sizes),d=s.createElement(w,r({},i,t,{sizes:l,shouldLoad:c}));return a.length?s.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return s.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:l})})),d):d};var v;w.propTypes={src:c.string.isRequired,alt:c.string.isRequired,sizes:c.string,srcSet:c.string,shouldLoad:c.bool},h.displayName="Picture",h.propTypes={alt:c.string.isRequired,shouldLoad:c.bool,fallback:c.exact({src:c.string.isRequired,srcSet:c.string,sizes:c.string}),sources:c.arrayOf(c.oneOfType([c.exact({media:c.string.isRequired,type:c.string,sizes:c.string,srcSet:c.string.isRequired}),c.exact({media:c.string,type:c.string.isRequired,sizes:c.string,srcSet:c.string.isRequired})]))};const y=["fallback"],x=function(e){let{fallback:t}=e,a=n(e,y);return t?s.createElement(h,r({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):s.createElement("div",r({},a))};x.displayName="Placeholder",x.propTypes={fallback:c.string,sources:null==(v=h.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const E=function(e){return s.createElement(s.Fragment,null,s.createElement(h,r({},e)),s.createElement("noscript",null,s.createElement(h,r({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=h.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],N=e=>e.replace(/\n/g,""),z=function(e,t,a){for(var s=arguments.length,c=new Array(s>3?s-3:0),r=3;r<s;r++)c[r-3]=arguments[r];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(c)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:i().object.isRequired,alt:z},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],O=new Set;let L,R;const T=function(e){let{as:t="div",image:c,style:i,backgroundColor:o,className:b,class:p,onStartLoad:f,onLoad:u,onError:m}=e,g=n(e,j);const{width:w,height:h,layout:v}=c,y=d(w,h,v),{style:x,className:E}=y,k=n(y,_),S=(0,s.useRef)(),N=(0,s.useMemo)((()=>JSON.stringify(c.images)),[c.images]);p&&(b=p);const z=function(e,t,a){let s="";return"fullWidth"===e&&(s=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(s=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),s}(v,w,h);return(0,s.useEffect)((()=>{L||(L=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==f||f({wasCached:!0}),null==u||u({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==u||u({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(N);if(R&&O.has(N))return;let t,s;return L.then((e=>{let{renderImageToString:a,swapPlaceholderImage:n}=e;S.current&&(S.current.innerHTML=a(r({isLoading:!0,isLoaded:O.has(N),image:c},g)),O.has(N)||(t=requestAnimationFrame((()=>{S.current&&(s=n(S.current,N,O,i,f,u,m))}))))})),()=>{t&&cancelAnimationFrame(t),s&&s()}}),[c]),(0,s.useLayoutEffect)((()=>{O.has(N)&&R&&(S.current.innerHTML=R(r({isLoading:O.has(N),isLoaded:O.has(N),image:c},g)),null==f||f({wasCached:!0}),null==u||u({wasCached:!0}))}),[c]),(0,s.createElement)(t,r({},k,{style:r({},x,i,{backgroundColor:o}),className:`${E}${b?` ${b}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:z},suppressHydrationWarning:!0}))},$=(0,s.memo)((function(e){return e.image?(0,s.createElement)(T,e):null}));$.propTypes=C,$.displayName="GatsbyImage";const I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(e){return function(t){let{src:a,__imageData:c,__error:i}=t,l=n(t,I);return i&&console.warn(i),c?s.createElement(e,r({image:c},l)):(console.warn("Image not loaded",a),null)}}const P=D((function(e){let{as:t="div",className:a,class:c,style:i,image:l,loading:p="lazy",imgClassName:f,imgStyle:m,backgroundColor:g,objectFit:w,objectPosition:h}=e,v=n(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;c&&(a=c),m=r({objectFit:w,objectPosition:h,backgroundColor:g},m);const{width:y,height:z,layout:C,images:j,placeholder:_,backgroundColor:O}=l,L=d(y,z,C),{style:R,className:T}=L,$=n(L,S),I={fallback:void 0,sources:[]};return j.fallback&&(I.fallback=r({},j.fallback,{srcSet:j.fallback.srcSet?N(j.fallback.srcSet):void 0})),j.sources&&(I.sources=j.sources.map((e=>r({},e,{srcSet:N(e.srcSet)})))),s.createElement(t,r({},$,{style:r({},R,i,{backgroundColor:g}),className:`${T}${a?` ${a}`:""}`}),s.createElement(u,{layout:C,width:y,height:z},s.createElement(x,r({},b(_,!1,C,y,z,O,w,h))),s.createElement(E,r({"data-gatsby-image-ssr":"",className:f},v,o("eager"===p,!1,I,p,m)))))})),A=function(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(s)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},J=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:z,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!J.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=F;const W=D($);W.displayName="StaticImage",W.propTypes=F},6229:function(e,t,a){a.d(t,{t:function(){return c}});var s=a(4794);let c=function(){function e(){}return e.push=function(e,t){return void 0===t&&(t={}),(0,s.navigate)(e,{...t})},e.replace=function(e,t){return void 0===t&&(t={}),(0,s.navigate)(e,{replace:!0,...t})},e.back=function(){return(0,s.navigate)(-1)},e}()},7101:function(e,t,a){a.d(t,{o:function(){return r}});var s=a(6540),c=a(6229),i=a(4083);const r=e=>{let{label:t="이전 페이지로"}=e;return s.createElement("div",{className:"ml-24 -mb-24 mt-36 w-fit"},s.createElement(i.i,{onClick:c.t.back},`< ${t}`))}},5958:function(e,t,a){a.d(t,{$:function(){return c}});var s=a(6540);const c=e=>{let{className:t="",ratio:a,src:c,...i}=e;return s.createElement("div",{className:`relative w-full h-full flex overflow-hidden ${t}`,style:{paddingBottom:a?100*a+"%":void 0}},!!c&&s.createElement("img",Object.assign({className:`peer ${a?"absolute inset-0 h-full w-full":"w-full"} object-cover opacity-100 transition-opacity duration-500 data-[loaded=false]:pointer-events-none data-[loaded=false]:opacity-0`,src:c},i,{"data-loaded":!1,onLoad:e=>{e.currentTarget.dataset.loaded="true"},onError:e=>{e.currentTarget.dataset.error="true"}})),s.createElement("div",{className:"flex flex-shrink-0 absolute inset-0 bg-bg-alt animate-pulse peer-data-[loaded=true]:hidden"}))}},4860:function(e,t,a){a.d(t,{G:function(){return i}});var s=a(6540),c=a(2444);const i=e=>{let{title:t,location:a}=e;const i=(0,c.Q)(),r=`${t?`${t} | `:""}${i.title}`,n=`${i.siteUrl}${a.pathname||""}`;return s.createElement(s.Fragment,null,s.createElement("title",null,r),s.createElement("meta",{property:"og:locale",content:"ko_KR"}),s.createElement("meta",{property:"og:site_name",content:i.title}),s.createElement("meta",{property:"og:type",content:"article"}),s.createElement("meta",{property:"og:title",content:r}),s.createElement("meta",{property:"og:description",content:i.description}),s.createElement("meta",{property:"og:url",content:n}))}},6717:function(e,t,a){a.d(t,{s:function(){return c}});var s=a(6540);const c=e=>{let{html:t}=e;return s.createElement("div",{className:"flex flex-col gap-24 px-24 pb-48 md text-20-400",dangerouslySetInnerHTML:{__html:t}})}},1081:function(e,t,a){a.r(t),a.d(t,{Head:function(){return P},default:function(){return A}});var s=a(6540),c=a(4860);const i=(0,a(1621).vt)((e=>{const t={isLoading:!0,isError:!1,data:void 0};return(async()=>{try{const a=await async function(){const e="https://api.github.com/users/hanse-kim",t=await fetch(e),a=await t.json();return a}();e({...t,isLoading:!1,data:a})}catch(a){e({...t,isLoading:!1,isError:!0})}})(),t}));var r=a(5958);const n=e=>{let{avatarUrl:t,alt:a}=e;return s.createElement("div",{className:"w-180 h-180 border-solid rounded-full border-4 border-border overflow-hidden"},s.createElement(r.$,{className:"object-cover",src:t,alt:a}))};var l=a(5659);const d=e=>{let{label:t,url:a,iconName:c}=e;return s.createElement("a",{className:"flex items-center gap-4",href:a,target:"_blank"},s.createElement(l.I,{size:20,iconName:c,color:"muted"}),s.createElement("span",{className:"text-text-muted text-16-500"},t))},o={title:"Hi, I'm Hanse 🐻",links:[{url:"mailto:hansekim.dev@gmail.com",label:"Email",iconName:"mail"},{url:"https://github.com/hanse-kim",label:"Github",iconName:"github"}],descriptions:["3년차 프론트엔드 개발자 김한슬입니다.","스타트업에 근무하며 3개의 핵심 프로젝트 런칭에 크게 기여하고, 소통을 통해 팀 생산성을 향상시킨 경험이 있습니다."]},b=e=>{let{}=e;return s.createElement("section",{className:"flex flex-col gap-24 tablet:items-center"},s.createElement("div",{className:"flex flex-col items-start gap-8 tablet:items-center"},s.createElement("h2",{className:"text-28-700"},o.title),s.createElement("div",{className:"flex gap-18"},o.links.map(((e,t)=>s.createElement(d,Object.assign({key:t},e)))))),s.createElement("div",{className:"text-18-400 hyphens-auto flex flex-col gap-4",lang:"en"},o.descriptions.map(((e,t)=>s.createElement("p",{key:t},e)))))},p=e=>{var t,a;let{}=e;const c=i((e=>e));return s.createElement("div",{className:"flex items-center justify-center gap-24 mx-auto tablet:gap-12 tablet:flex-col tablet:items-center"},s.createElement(n,{avatarUrl:null===(t=c.data)||void 0===t?void 0:t.avatar_url,alt:null===(a=c.data)||void 0===a?void 0:a.name}),s.createElement(b,null))};var f=a(6229),u=a(7606),m=a(4794);const g=e=>{let{children:t,title:a,subtitle:c}=e;return s.createElement("section",null,s.createElement("h2",{className:"text-32-500 text-center border-solid border-b-1 border-border"},a),s.createElement("p",{className:"text-16-500 text-center mt-4"},c),s.createElement("div",{className:"py-36"},t))};var w=a(2532);const h={harmony:s.createElement(w.S,{src:"./harmony.webp",alt:"harmony",layout:"constrained",width:640,__imageData:a(8248)}),orderhop:s.createElement(w.S,{src:"./orderhop.webp",alt:"orderhop",layout:"constrained",width:640,__imageData:a(4289)}),uzzim:s.createElement(w.S,{src:"./uzzim.webp",alt:"uzzim",layout:"constrained",width:640,__imageData:a(4308)})};var v=a(4083);const y=e=>{let{id:t,title:a,subtitle:c,description:i,image:r,isReverse:n}=e;return s.createElement("div",{className:"flex items-center justify-center gap-24 tablet:!flex-col tablet:gap-16 data-[reverse=true]:flex-row-reverse","data-reverse":n},s.createElement("div",{className:"shrink-0 max-w-[480px]"},r),s.createElement("div",null,s.createElement("h3",{className:"text-28-700"},a),s.createElement("p",{className:"mt-4 text-18-40"},'"',i,'"'),s.createElement("p",{className:"mb-12 text-16-400 text-text-muted"},c),s.createElement(v.i,{to:`?pop=${t}`},"View Details ->")))};var x=a(8602),E=a(9179),k=a(961),S=a(7101),N=a(6717),z=a(4074);const C=e=>{let{isOpen:t,onClose:a,html:c=""}=e;const{isMounted:i}=(0,z.a)();return(0,s.useEffect)((()=>{document.documentElement.style.overflow=t?"hidden":"auto"}),[t]),i?(0,k.createPortal)(s.createElement(x.N,null,t&&s.createElement(s.Fragment,null,s.createElement(E.P.div,{onClick:a,className:"bg-[black] bg-opacity-40 fixed inset-0 z-40",initial:"exit",animate:"enter",exit:"exit",variants:{exit:{opacity:0},enter:{opacity:1}}}),s.createElement(E.P.section,{className:"bg-bg w-full max-w-[640px] py-36 fixed right-0 top-0 bottom-0 z-50 drop-shadow-drawer",initial:"exit",animate:"enter",exit:"exit",variants:{exit:{opacity:0,translateX:"100%"},enter:{opacity:1,translateX:"0"}},transition:{ease:"easeOut",duration:.25}},s.createElement(S.o,{label:"돌아가기"}),s.createElement(N.s,{html:c})))),document.body):null},j=e=>{let{}=e;const{projects:t}=(()=>{const{allMarkdownRemark:e}=(0,m.useStaticQuery)("4111888854");return{projects:e.nodes}})(),{pageProps:a}=(0,u.N)(),c=new URLSearchParams(a.location.search).get("pop")||"",i=t.find((e=>e.fields.name===c)),r=!!i;return s.createElement(g,{title:"Works",subtitle:"on FreeD Soft (2022.07 - Present)"},s.createElement("div",{className:"flex flex-col items-stretch gap-56"},t.map(((e,t)=>s.createElement(y,Object.assign({key:t},e.frontmatter,{image:h[e.fields.name],id:e.fields.name}))))),s.createElement(C,{isOpen:r,onClose:f.t.back,html:null==i?void 0:i.html}))},_={aws:s.createElement(w.S,{src:"./aws.svg",alt:"aws",width:28,layout:"constrained",__imageData:a(9878)}),azure:s.createElement(w.S,{src:"./azure.svg",alt:"azure",width:28,layout:"constrained",__imageData:a(943)}),emotion:s.createElement(w.S,{src:"./emotion.webp",alt:"emotion",width:28,layout:"constrained",__imageData:a(3221)}),figma:s.createElement(w.S,{src:"./figma.svg",alt:"figma",height:28,layout:"constrained",__imageData:a(6592)}),gatsby:s.createElement(w.S,{src:"./gatsby.svg",alt:"gatsby",width:28,layout:"constrained",__imageData:a(9418)}),github:s.createElement(w.S,{src:"./github.svg",alt:"github",width:28,layout:"constrained",__imageData:a(8948)}),nextjs:s.createElement(w.S,{src:"./nextjs.svg",alt:"nextjs",width:28,layout:"constrained",__imageData:a(1200)}),react:s.createElement(w.S,{src:"./react.svg",alt:"react",width:28,layout:"constrained",__imageData:a(5581)}),svelte:s.createElement(w.S,{src:"./svelte.svg",alt:"svelte",height:28,layout:"constrained",__imageData:a(8606)}),tailwindcss:s.createElement(w.S,{src:"./tailwindcss.svg",alt:"tailwindcss",width:28,layout:"constrained",__imageData:a(7185)}),tanstack:s.createElement(w.S,{src:"./tanstack.webp",alt:"tanstack",width:28,layout:"constrained",__imageData:a(8025)}),typescript:s.createElement(w.S,{src:"./typescript.svg",alt:"typescript",width:28,layout:"constrained",__imageData:a(1180)}),javascript:s.createElement(w.S,{src:"./javascript.svg",alt:"javascript",width:28,layout:"constrained",__imageData:a(847)}),vscode:s.createElement(w.S,{src:"./vscode.svg",alt:"vscode",width:28,layout:"constrained",__imageData:a(2746)})},O=[0,0],L=e=>{let{value:t}=e;const a=t.split(/(\*\*[^*]+\*\*|\*[^*]+\*|~~[^~]+~~)/g);return s.createElement(s.Fragment,null,a.map(((e,t)=>e.startsWith("**")&&e.endsWith("**")?s.createElement("b",{key:t,className:"font-bold text-currentColor"},e.slice(2,-2)):e.startsWith("*")&&e.endsWith("*")?s.createElement("i",{key:t,className:"italic text-currentColor"},e.slice(1,-1)):e.startsWith("~~")&&e.endsWith("~~")?s.createElement("s",{key:t,className:"line-through text-currentColor"},e.slice(2,-2)):e)))},R=e=>{let{label:t,logo:a,descriptions:c}=e;const{0:i,1:r}=(0,s.useState)(!1),n=(()=>{const e=(0,s.useRef)(null),{0:t,1:a}=(0,s.useState)(O);return{assignRef:t=>{if(!t||e.current)return;e.current=t;const s=t.getBoundingClientRect();a([s.width,s.height])},size:t,isAssigned:t!==O}})(),l=["Next.js"].includes(t);return s.createElement("button",{className:"flex flex-col max-w-full border-solid select-none bg-text rounded-8 shrink-0 group dark:bg-bg border-1 border-text dark:border-text-muted h-fit",onClick:()=>r((e=>!e)),"data-open":i},s.createElement("div",{className:"flex items-center gap-12 px-16 py-8"},s.createElement("div",{className:"w-28 max-h-28 flex items-center shrink-0 grayscale brightness-125 data-[invert=true]:invert desktop:group-hover:invert-0 desktop:group-hover:brightness-100 desktop:group-hover:grayscale-0 group-data-[open=true]:invert-0 group-data-[open=true]:brightness-100 group-data-[open=true]:grayscale-0 transition-all","data-invert":l},a),s.createElement("p",{className:"text-18-400 text-bg dark:text-text text-nowrap"},t)),s.createElement("div",{className:"-mx-1 transition-all duration-300 ease-in",style:{width:i?n.size[0]:0,height:i?n.size[1]:0}},s.createElement("ul",{ref:n.assignRef,className:"pb-16 px-16 group-data-[open=false]:absolute group-data-[open=false]:opacity-0 group-data-[open=false]:pointer-events-none transition-opacity text-left duration-500 group-data-[open=false]:duration-0 list-disc w-full max-w-[calc(calc(min(100vw,67.5rem)-3rem-1em)/2)] mobile:max-w-[calc(100vw-3rem)]"},c.map(((e,t)=>s.createElement("li",{key:t,className:"mt-8 ml-24 text-bg dark:text-text text-18-400"},s.createElement(L,{value:e})))))))},T=e=>{let{title:t,skills:a}=e;return s.createElement("div",{className:""},s.createElement("h3",{className:"text-20-700"},t),s.createElement("div",{className:"flex flex-wrap gap-y-8 gap-x-12 mt-8 relative"},a.map(((e,t)=>s.createElement(R,Object.assign({key:t},e))))))},$={Language:[{label:"JavaScript",logo:_.javascript,descriptions:["DOM 조작, 비동기 처리, 이벤트 처리와 같은 자바스크립트 기본 기능에 대해 이해하고 이를 활용할 수 있습니다.","destructuring, spread/rest 연산자, 화살표 함수 등 ES6 문법에 익숙하며 효율적인 코드 작성이 가능합니다.","map, filter, reduce와 같은 고차 함수를 능숙하게 다룰 수 있습니다."]},{label:"TypeScript",logo:_.typescript,descriptions:["견고한 타입 시스템을 바탕으로 백엔드 스키마에 따라 적절한 도메인 기반 타입을 작성할 수 있습니다.","generic type을 활용하여 **유연하고 재사용 가능**한 타입 및 React component를 개발할 수 있습니다.","타입 가드를 통해 런타임 에러를 방지하고 type-safety한 로직을 작성할 수 있습니다."]}],"Framework & Library":[{label:"React",logo:_.react,descriptions:["useMemo, useCallback, useRef 등의 hook과 memo, forwardRef 등의 API를 적절하게 사용하여 최적화된 React App을 개발할 수 있습니다.","Context API, createPortal API, HOC, compound component 등 고급 기능이나 패턴을 필요하에 따라 적절하게 활용할 수 있습니다.","react-hook-form과 zod를 활용하여 견고한 form validation을 구성한 경험이 있습니다."]},{label:"Next.js",logo:_.nextjs,descriptions:["getServerSideProps를 활용해 상품 페이지별로 동적인 OG meta tag를 삽입하여 SEO를 최적화하고, 소셜 미디어 공유 시 미리보기 정보 제공 및 검색엔진에서 상위에 노출되도록 개선한 경험이 있습니다.","server action, server component, app routing 등 Next.js 최신 버전의 server-side 기능을 활용해 웹 어플리케이션을 구현한 경험이 있습니다.","on-demand SSR, SSG, ISR 등 다양한 방식의 SSR에 대해 이해하고 이를 필요에 따라 선택할 수 있습니다."]},{label:"Gatsby",logo:_.gatsby,descriptions:["Markdown 파일을 기반으로 블로그 콘텐츠를 관리하고, gatsby-transformer-remark를 사용해 효율적인 페이지 생성을 구현했습니다.","wrapPageElement을 통해 공통 레이아웃 컴포넌트를 적용하고, 중복 코드를 줄여 유지보수성을 향상시켰습니다.","gatsby-plugin-image 플러그인을 사용해 이미지 최적화를 수행하여 사이트 속도를 향상시켰습니다."]},{label:"Svelte",logo:_.svelte,descriptions:["React와 비교해 Svelte의 장점과 특징을 이해하고, 프로젝트 요구 사항에 따라 적절히 선택할 수 있습니다.","실무에서 Vite 기반의 프로젝트를 세팅하여 **CSR 웹 애플리케이션**을 개발하고 성공적으로 런칭한 경험이 있습니다.","local/session storage와 자동으로 연동, 초기에 데이터를 fetch하고 일정 주기로 refetch 등 **편리한 기능을 제공하는 custom store를 개발**해 생산성을 높인 경험이 있습니다."]},{label:"TanStack Query",logo:_.tanstack,descriptions:["견고한 컨벤션을 통해 일관적이고 재사용성 높은 query/mutation custom hook을 작성해 팀의 생산성을 크게 향상시킨 경험이 있습니다.","도메인별로 적절한 staleTime을 설정하여 효율적인 캐싱 전략을 구현하고, 높은 사용자 경험을 실현한 경험이 있습니다.","select 옵션을 활용해 반복되는 파싱이나 변환 작업을 처리하여 코드 가독성과 유지보수성을 높인 경험이 있습니다."]},{label:"Tailwind CSS",logo:_.tailwindcss,descriptions:["CSS 변수와 자체 개발한 플러그인을 활용해 동일한 키값으로 다양한 테마와 라이드모드/다크모드 색상을 사용할 수 있는 색상 설정 기능을 구현한 경험이 있습니다.","Tailwind 설정을 효율적으로 관리하기 위해 tailwind.config 파일의 세부 설정을 별도의 파일로 분리하여 프로젝트 유지보수성을 향상시킨 경험이 있습니다."]},{label:"Emotion",logo:_.emotion,descriptions:["Emotion의 styled와 css 함수를 사용하여 모듈화된 스타일링 시스템을 구축했습니다.","layout, spacing, flex-box, grid 등 다양한 종류의 스타일을 유연하게 적용할 수 있는, 디자인 시스템을 기반으로 쉽게 커스터마이징 가능한 UI 컴포넌트를 개발해 팀의 생산성을 크게 향상시켰습니다."]}],Deployment:[{label:"Azure DevOps",logo:_.azure,descriptions:["Azure Repos를 사용해 프로젝트를 세팅하고, 브랜치 전략이나 코드 리뷰 정책 등 적절한 repository policy를 설정할 수 있습니다.","Azure Pipelines를 사용해 CI/CD 과정을 자동화하는 파이프라인을 구성하고, 안정적인 배포 프로세스를 관리한 경험이 있습니다.","Azure Boards를 사용해 Feature 단위의 티켓을 관리하여 성공적으로 업무를 완수한 경험이 있습니다."]},{label:"Github",logo:_.github,descriptions:["Github Actions를 사용해 NPM 및 Github Packages에 라이브러리를 배포하는 과정을 자동화한 경험이 있습니다.","실무에서 발견한 오픈소스 라이브러리의 버그를 수정해 기여하고, 해당 수정 사항이 최신 릴리즈에 반영된 경험이 있습니다."]},{label:"AWS",logo:_.aws,descriptions:["S3와 CloudFront를 사용한 정적 웹 사이트 배포로 사이트 속도를 개선하여 사용자 경험을 증대시킨 경험이 있습니다.","CloudFront에 Lambda@Edge를 적용함으로써 정적 리소스 요청에 대해 동적인 응답을 주도록 처리, 사용자 맞춤형 컨텐츠를 제공할 수 있습니다.","SST와 같은 도구를 활용하여 서버리스 웹 애플리케이션을 배포하고 인프라 관리 및 배포 과정을 자동화한 경험이 있습니다."]}],Tools:[{label:"VS Code",logo:_.vscode,descriptions:["린터나 코드 하이라이터, 유틸리티 등의 확장 기능을 필요에 따라 적용하여 생산성을 높이고 있습니다.","React component를 작성하는 code snippet을 만들고 공유하여 팀의 생산성을 향상시킨 경험이 있습니다.","multi-cursor 기능을 활용해 반복 작업을 최소화하고 효율적으로 코드를 작성합니다."]},{label:"Figma",logo:_.figma,descriptions:["간단한 개인 프로젝트에서 Figma로 UI/UX를 직접 설계하고, 이를 바탕으로 웹 애플리케이션을 완성한 경험이 있습니다.","오토 레이아웃, 컴포넌트와 바리에이션, 스타일과 변수 등 피그마 기능에 대한 지식을 바탕으로 디자이너와 원활한 소통이 가능합니다."]}]},I=e=>{let{}=e;return s.createElement(g,{title:"Skills"},s.createElement("div",{className:"flex flex-col items-stretch gap-24"},Object.entries($).map(((e,t)=>{let[a,c]=e;return s.createElement(T,{key:t,title:a,skills:c})}))))},D=e=>{let{}=e;return s.createElement("article",{className:"px-24 py-48 flex flex-col items-stretch gap-56"},s.createElement(p,null),s.createElement(I,null),s.createElement(j,null))},P=e=>s.createElement(c.G,Object.assign({title:"About"},e));var A=e=>{let{}=e;return s.createElement(D,null)}},943:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b34a572c9453ebcecdaeeda42f7e3788/8acfd/azure.svg","srcSet":"/static/b34a572c9453ebcecdaeeda42f7e3788/4da7d/azure.svg 7w,\\n/static/b34a572c9453ebcecdaeeda42f7e3788/47e84/azure.svg 14w,\\n/static/b34a572c9453ebcecdaeeda42f7e3788/8acfd/azure.svg 28w,\\n/static/b34a572c9453ebcecdaeeda42f7e3788/da3d2/azure.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/b34a572c9453ebcecdaeeda42f7e3788/cfa5d/azure.webp 7w,\\n/static/b34a572c9453ebcecdaeeda42f7e3788/6412b/azure.webp 14w,\\n/static/b34a572c9453ebcecdaeeda42f7e3788/629a0/azure.webp 28w,\\n/static/b34a572c9453ebcecdaeeda42f7e3788/f8744/azure.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":28}')},6592:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/bfc8530d272f878aca3645d0faf615a4/f99f3/figma.svg","srcSet":"/static/bfc8530d272f878aca3645d0faf615a4/faff3/figma.svg 5w,\\n/static/bfc8530d272f878aca3645d0faf615a4/34c83/figma.svg 10w,\\n/static/bfc8530d272f878aca3645d0faf615a4/f99f3/figma.svg 19w,\\n/static/bfc8530d272f878aca3645d0faf615a4/98754/figma.svg 38w","sizes":"(min-width: 19px) 19px, 100vw"},"sources":[{"srcSet":"/static/bfc8530d272f878aca3645d0faf615a4/c7c2c/figma.webp 5w,\\n/static/bfc8530d272f878aca3645d0faf615a4/99f00/figma.webp 10w,\\n/static/bfc8530d272f878aca3645d0faf615a4/72929/figma.webp 19w,\\n/static/bfc8530d272f878aca3645d0faf615a4/2ea96/figma.webp 38w","type":"image/webp","sizes":"(min-width: 19px) 19px, 100vw"}]},"width":19,"height":28}')},8948:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a0b00583d93c2f7084ad151ee0849934/24e13/github.svg","srcSet":"/static/a0b00583d93c2f7084ad151ee0849934/4da7d/github.svg 7w,\\n/static/a0b00583d93c2f7084ad151ee0849934/47e84/github.svg 14w,\\n/static/a0b00583d93c2f7084ad151ee0849934/24e13/github.svg 28w,\\n/static/a0b00583d93c2f7084ad151ee0849934/b8203/github.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/a0b00583d93c2f7084ad151ee0849934/cfa5d/github.webp 7w,\\n/static/a0b00583d93c2f7084ad151ee0849934/6412b/github.webp 14w,\\n/static/a0b00583d93c2f7084ad151ee0849934/294c3/github.webp 28w,\\n/static/a0b00583d93c2f7084ad151ee0849934/f66ae/github.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":27}')},3221:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/06a72dc931e84b096462dfbc7f439b48/629a0/emotion.webp","srcSet":"/static/06a72dc931e84b096462dfbc7f439b48/cfa5d/emotion.webp 7w,\\n/static/06a72dc931e84b096462dfbc7f439b48/6412b/emotion.webp 14w,\\n/static/06a72dc931e84b096462dfbc7f439b48/629a0/emotion.webp 28w,\\n/static/06a72dc931e84b096462dfbc7f439b48/f8744/emotion.webp 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[]},"width":28,"height":28}')},9878:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/546390152fbde8c6d43e12dc00363db2/b9042/aws.svg","srcSet":"/static/546390152fbde8c6d43e12dc00363db2/ac63c/aws.svg 7w,\\n/static/546390152fbde8c6d43e12dc00363db2/e46a4/aws.svg 14w,\\n/static/546390152fbde8c6d43e12dc00363db2/b9042/aws.svg 28w,\\n/static/546390152fbde8c6d43e12dc00363db2/ab992/aws.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/546390152fbde8c6d43e12dc00363db2/95a46/aws.webp 7w,\\n/static/546390152fbde8c6d43e12dc00363db2/105c5/aws.webp 14w,\\n/static/546390152fbde8c6d43e12dc00363db2/27710/aws.webp 28w,\\n/static/546390152fbde8c6d43e12dc00363db2/307a6/aws.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":17}')},1200:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8bed324391af60e266ba29523a45e6af/8acfd/nextjs.svg","srcSet":"/static/8bed324391af60e266ba29523a45e6af/4da7d/nextjs.svg 7w,\\n/static/8bed324391af60e266ba29523a45e6af/47e84/nextjs.svg 14w,\\n/static/8bed324391af60e266ba29523a45e6af/8acfd/nextjs.svg 28w,\\n/static/8bed324391af60e266ba29523a45e6af/da3d2/nextjs.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/8bed324391af60e266ba29523a45e6af/cfa5d/nextjs.webp 7w,\\n/static/8bed324391af60e266ba29523a45e6af/6412b/nextjs.webp 14w,\\n/static/8bed324391af60e266ba29523a45e6af/629a0/nextjs.webp 28w,\\n/static/8bed324391af60e266ba29523a45e6af/f8744/nextjs.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":28}')},5581:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a0f2ee7d435c9e0c3571ecaedbc8d407/8acfd/react.svg","srcSet":"/static/a0f2ee7d435c9e0c3571ecaedbc8d407/4da7d/react.svg 7w,\\n/static/a0f2ee7d435c9e0c3571ecaedbc8d407/47e84/react.svg 14w,\\n/static/a0f2ee7d435c9e0c3571ecaedbc8d407/8acfd/react.svg 28w,\\n/static/a0f2ee7d435c9e0c3571ecaedbc8d407/da3d2/react.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/a0f2ee7d435c9e0c3571ecaedbc8d407/cfa5d/react.webp 7w,\\n/static/a0f2ee7d435c9e0c3571ecaedbc8d407/6412b/react.webp 14w,\\n/static/a0f2ee7d435c9e0c3571ecaedbc8d407/629a0/react.webp 28w,\\n/static/a0f2ee7d435c9e0c3571ecaedbc8d407/f8744/react.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":28}')},9418:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#683898","images":{"fallback":{"src":"/static/64651d54403a93f3e67815756e1e6bb1/8acfd/gatsby.svg","srcSet":"/static/64651d54403a93f3e67815756e1e6bb1/4da7d/gatsby.svg 7w,\\n/static/64651d54403a93f3e67815756e1e6bb1/47e84/gatsby.svg 14w,\\n/static/64651d54403a93f3e67815756e1e6bb1/8acfd/gatsby.svg 28w,\\n/static/64651d54403a93f3e67815756e1e6bb1/da3d2/gatsby.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/64651d54403a93f3e67815756e1e6bb1/cfa5d/gatsby.webp 7w,\\n/static/64651d54403a93f3e67815756e1e6bb1/6412b/gatsby.webp 14w,\\n/static/64651d54403a93f3e67815756e1e6bb1/629a0/gatsby.webp 28w,\\n/static/64651d54403a93f3e67815756e1e6bb1/f8744/gatsby.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":28}')},2746:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a0f33ad8ad533f1dd3a77bf2f100edae/8acfd/vscode.svg","srcSet":"/static/a0f33ad8ad533f1dd3a77bf2f100edae/4da7d/vscode.svg 7w,\\n/static/a0f33ad8ad533f1dd3a77bf2f100edae/47e84/vscode.svg 14w,\\n/static/a0f33ad8ad533f1dd3a77bf2f100edae/8acfd/vscode.svg 28w,\\n/static/a0f33ad8ad533f1dd3a77bf2f100edae/da3d2/vscode.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/a0f33ad8ad533f1dd3a77bf2f100edae/cfa5d/vscode.webp 7w,\\n/static/a0f33ad8ad533f1dd3a77bf2f100edae/6412b/vscode.webp 14w,\\n/static/a0f33ad8ad533f1dd3a77bf2f100edae/629a0/vscode.webp 28w,\\n/static/a0f33ad8ad533f1dd3a77bf2f100edae/f8744/vscode.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":28}')},7185:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b533b18c3585ddd570ba7f1ba4b178b8/b9042/tailwindcss.svg","srcSet":"/static/b533b18c3585ddd570ba7f1ba4b178b8/ac63c/tailwindcss.svg 7w,\\n/static/b533b18c3585ddd570ba7f1ba4b178b8/a7ff0/tailwindcss.svg 14w,\\n/static/b533b18c3585ddd570ba7f1ba4b178b8/b9042/tailwindcss.svg 28w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/b533b18c3585ddd570ba7f1ba4b178b8/95a46/tailwindcss.webp 7w,\\n/static/b533b18c3585ddd570ba7f1ba4b178b8/f70d1/tailwindcss.webp 14w,\\n/static/b533b18c3585ddd570ba7f1ba4b178b8/27710/tailwindcss.webp 28w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":17}')},4289:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/cae32bcab5cf5aa1ac240c0f6806d10f/c9cb9/orderhop.webp","srcSet":"/static/cae32bcab5cf5aa1ac240c0f6806d10f/6ea4e/orderhop.webp 160w,\\n/static/cae32bcab5cf5aa1ac240c0f6806d10f/e077e/orderhop.webp 320w,\\n/static/cae32bcab5cf5aa1ac240c0f6806d10f/c9cb9/orderhop.webp 640w,\\n/static/cae32bcab5cf5aa1ac240c0f6806d10f/819b8/orderhop.webp 1280w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[]},"width":640,"height":438}')},8606:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f83808","images":{"fallback":{"src":"/static/95a7ee6c639e542ddff7e46a16d3e1e6/60aed/svelte.svg","srcSet":"/static/95a7ee6c639e542ddff7e46a16d3e1e6/5714e/svelte.svg 6w,\\n/static/95a7ee6c639e542ddff7e46a16d3e1e6/49826/svelte.svg 12w,\\n/static/95a7ee6c639e542ddff7e46a16d3e1e6/60aed/svelte.svg 23w,\\n/static/95a7ee6c639e542ddff7e46a16d3e1e6/86503/svelte.svg 46w","sizes":"(min-width: 23px) 23px, 100vw"},"sources":[{"srcSet":"/static/95a7ee6c639e542ddff7e46a16d3e1e6/8bcb7/svelte.webp 6w,\\n/static/95a7ee6c639e542ddff7e46a16d3e1e6/7027e/svelte.webp 12w,\\n/static/95a7ee6c639e542ddff7e46a16d3e1e6/28220/svelte.webp 23w,\\n/static/95a7ee6c639e542ddff7e46a16d3e1e6/ac66f/svelte.webp 46w","type":"image/webp","sizes":"(min-width: 23px) 23px, 100vw"}]},"width":23,"height":28}')},8248:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d3a3324aa35cb9cf5eafe73123d648ac/6fef5/harmony.webp","srcSet":"/static/d3a3324aa35cb9cf5eafe73123d648ac/e0dda/harmony.webp 160w,\\n/static/d3a3324aa35cb9cf5eafe73123d648ac/a8736/harmony.webp 320w,\\n/static/d3a3324aa35cb9cf5eafe73123d648ac/6fef5/harmony.webp 640w,\\n/static/d3a3324aa35cb9cf5eafe73123d648ac/36a61/harmony.webp 1280w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[]},"width":640,"height":484}')},4308:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2f31a2e1ef367aa008db9b30701756bf/c9cb9/uzzim.webp","srcSet":"/static/2f31a2e1ef367aa008db9b30701756bf/6ea4e/uzzim.webp 160w,\\n/static/2f31a2e1ef367aa008db9b30701756bf/e077e/uzzim.webp 320w,\\n/static/2f31a2e1ef367aa008db9b30701756bf/c9cb9/uzzim.webp 640w,\\n/static/2f31a2e1ef367aa008db9b30701756bf/819b8/uzzim.webp 1280w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[]},"width":640,"height":438}')},847:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8d818","images":{"fallback":{"src":"/static/dd60b11e9762b6e25f6d4ce981a1eeae/8acfd/javascript.svg","srcSet":"/static/dd60b11e9762b6e25f6d4ce981a1eeae/4da7d/javascript.svg 7w,\\n/static/dd60b11e9762b6e25f6d4ce981a1eeae/47e84/javascript.svg 14w,\\n/static/dd60b11e9762b6e25f6d4ce981a1eeae/8acfd/javascript.svg 28w,\\n/static/dd60b11e9762b6e25f6d4ce981a1eeae/da3d2/javascript.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/dd60b11e9762b6e25f6d4ce981a1eeae/cfa5d/javascript.webp 7w,\\n/static/dd60b11e9762b6e25f6d4ce981a1eeae/6412b/javascript.webp 14w,\\n/static/dd60b11e9762b6e25f6d4ce981a1eeae/629a0/javascript.webp 28w,\\n/static/dd60b11e9762b6e25f6d4ce981a1eeae/f8744/javascript.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":28}')},8025:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/887356e4a97c88b9795852add3391d61/629a0/tanstack.webp","srcSet":"/static/887356e4a97c88b9795852add3391d61/cfa5d/tanstack.webp 7w,\\n/static/887356e4a97c88b9795852add3391d61/6412b/tanstack.webp 14w,\\n/static/887356e4a97c88b9795852add3391d61/629a0/tanstack.webp 28w,\\n/static/887356e4a97c88b9795852add3391d61/f8744/tanstack.webp 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[]},"width":28,"height":28}')},1180:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#3878c8","images":{"fallback":{"src":"/static/0023109dabca6ce955764e3a05ea6c2a/8acfd/typescript.svg","srcSet":"/static/0023109dabca6ce955764e3a05ea6c2a/4da7d/typescript.svg 7w,\\n/static/0023109dabca6ce955764e3a05ea6c2a/47e84/typescript.svg 14w,\\n/static/0023109dabca6ce955764e3a05ea6c2a/8acfd/typescript.svg 28w,\\n/static/0023109dabca6ce955764e3a05ea6c2a/da3d2/typescript.svg 56w","sizes":"(min-width: 28px) 28px, 100vw"},"sources":[{"srcSet":"/static/0023109dabca6ce955764e3a05ea6c2a/cfa5d/typescript.webp 7w,\\n/static/0023109dabca6ce955764e3a05ea6c2a/6412b/typescript.webp 14w,\\n/static/0023109dabca6ce955764e3a05ea6c2a/629a0/typescript.webp 28w,\\n/static/0023109dabca6ce955764e3a05ea6c2a/f8744/typescript.webp 56w","type":"image/webp","sizes":"(min-width: 28px) 28px, 100vw"}]},"width":28,"height":28}')}}]);
//# sourceMappingURL=component---src-pages-about-tsx-566468940e8e3fb55556.js.map