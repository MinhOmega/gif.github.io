(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{2978:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3303,23)),Promise.resolve().then(r.bind(r,1409)),Promise.resolve().then(r.bind(r,7218)),Promise.resolve().then(r.bind(r,2124))},1409:(e,t,r)=>{"use strict";r.d(t,{ScheduleCallFloat:()=>u,ScheduleCallPopup:()=>m});var a=r(5155),n=r(9749),s=r(2115);function l(e="https://app.cal.com/embed/embed.js"){var t;let r,a;return t=window,r=function(e,t){e.q.push(t)},a=t.document,t.Cal=t.Cal||function(){let n=t.Cal,s=arguments;if(n.loaded||(n.ns={},n.q=n.q||[],a.head.appendChild(a.createElement("script")).src=e,n.loaded=!0),"init"===s[0]){let e=function(){r(e,arguments)},t=s[1];e.q=e.q||[],"string"==typeof t?(n.ns[t]=n.ns[t]||e,r(n.ns[t],s),r(n,["initNamespace",t])):r(n,s);return}r(n,s)},window.Cal}function o(e){let{namespace:t="",embedJsUrl:r}="string"==typeof e?{embedJsUrl:e}:e??{};return new Promise(function e(a){let n=l(r);n("init",t);let s=t?n.ns[t]:n;if(!s){setTimeout(()=>{e(a)},50);return}a(s)})}l.toString();var i=r(9298);let c=(0,r(4752).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var d=r(2967);function m(){let e,t,r;let l=(0,n.c)(4),{theme:c}=(0,d.D)();return l[0]!==c?(e=()=>{!async function(){(await o({namespace:"quickcall"}))("ui",{theme:"dark"===c?"dark":"light",cssVarsPerTheme:{dark:{"--brand-color":"#000000"},light:{"--brand-color":"#000000"}},hideEventTypeDetails:!1,layout:"month_view"})}()},t=[c],l[0]=c,l[1]=e,l[2]=t):(e=l[1],t=l[2]),(0,s.useEffect)(e,t),l[3]===Symbol.for("react.memo_cache_sentinel")?(r=(0,a.jsx)(i.$,{"data-cal-namespace":"quickcall","data-cal-link":"minh-vo/quickcall","data-cal-config":'{"layout":"month_view"}',className:"shadow-none hover:bg-background hover:text-primary border-[0.3px] border-transparent hover:border-b-4 hover:border-primary/30 active:border-b transition-all",children:"Schedule a call"}),l[3]=r):r=l[3],r}function u(){let e,t,r;let l=(0,n.c)(4),{theme:m}=(0,d.D)();return l[0]!==m?(e=()=>{!async function(){(await o({namespace:"quickcall"}))("ui",{theme:"dark"===m?"dark":"light",cssVarsPerTheme:{dark:{"--brand-color":"#000000"},light:{"--brand-color":"#ffffff"}},hideEventTypeDetails:!1,layout:"month_view"})}()},t=[m],l[0]=m,l[1]=e,l[2]=t):(e=l[1],t=l[2]),(0,s.useEffect)(e,t),l[3]===Symbol.for("react.memo_cache_sentinel")?(r=(0,a.jsx)(i.$,{"data-cal-namespace":"quickcall","data-cal-link":"minh-vo/quickcall","data-cal-config":'{"layout":"month_view"}',className:"group/cal fixed z-50 bottom-5 right-5 w-12 h-12 rounded-full hover:px-4 hover:w-auto p-2 duration-300 transition-all ease-out",children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("p",{className:"group-hover/cal:block hidden duration-300 transition-all ease-out",children:"Book a call"}),(0,a.jsx)(c,{strokeWidth:1})]})}),l[3]=r):r=l[3],r}},7218:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var a=r(5155),n=r(9749),s=r(3192),l=r(3057),o=r(3303),i=r.n(o);let c=[{title:"Projects",url:"/"},{title:"Experience",url:"/experience"},{title:"TIL",url:"/til"},{title:"Blogs",url:"/blogs"}];var d=r(2442);function m(){let e;let t=(0,n.c)(1);return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsx)("div",{className:"sticky top-0 inline-flex items-center text-sm rounded-lg nav-container z-50",children:c.map(u)}),t[0]=e):e=t[0],e}function u(e,t){return(0,a.jsx)(h,{url:e.url,className:(0,l.cn)(0==t&&"rounded-l-lg border-l-[0.5px]",t==c.length-1&&"rounded-r-lg border-r-[0.5px]"),children:e.title},t)}let h=e=>{let t,r,o,c,m,u;let h=(0,n.c)(12),{children:f,url:p,className:v}=e,g=(0,s.usePathname)(),y=g===p||g.includes(p)&&"/"!==p?"current hover:bg-background":"nav-item";return h[0]!==v||h[1]!==y?(t=(0,l.cn)("p-2 min-w-16 lg:min-w-24 text-center hover:bg-secondary cursor-pointer border-t-[0.5px] bg-background",y,v),h[0]=v,h[1]=y,h[2]=t):t=h[2],h[3]===Symbol.for("react.memo_cache_sentinel")?(r={scale:1.02},o={scale:.98},c={type:"spring",stiffness:400,damping:17},h[3]=r,h[4]=o,h[5]=c):(r=h[3],o=h[4],c=h[5]),h[6]!==f||h[7]!==t?(m=(0,a.jsx)(d.P.div,{className:t,whileHover:r,whileTap:o,transition:c,children:f}),h[6]=f,h[7]=t,h[8]=m):m=h[8],h[9]!==m||h[10]!==p?(u=(0,a.jsx)(i(),{href:p,children:m}),h[9]=m,h[10]=p,h[11]=u):u=h[11],u}},2124:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var a=r(5155),n=r(9749),s=r(2967),l=r(2115),o=r(4752);let i=(0,o.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),c=(0,o.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);var d=r(9298);function m(){let e,t,r,o;let m=(0,n.c)(5),{toggleTheme:u}=function(){let e,t,r,a,o;let i=(0,n.c)(11),{theme:c,setTheme:d}=(0,s.D)(),[m,u]=(0,l.useState)("light");i[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{let e=window.matchMedia("(prefers-color-scheme: dark)");u(e.matches?"dark":"light");let t=e=>{u(e.matches?"dark":"light")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},t=[],i[0]=e,i[1]=t):(e=i[0],t=i[1]),(0,l.useEffect)(e,t),i[2]!==d||i[3]!==m||i[4]!==c?(r=()=>{switch(c){case"light":d("dark");break;case"dark":d("light");break;case"system":d("light"===m?"dark":"light")}},i[2]=d,i[3]=m,i[4]=c,i[5]=r):r=i[5];let h=r;i[6]!==h?(a=()=>{document.startViewTransition||h(),document.startViewTransition(h)},i[6]=h,i[7]=a):a=i[7];let f=a;return i[8]!==c||i[9]!==f?(o={theme:c,toggleTheme:f},i[8]=c,i[9]=f,i[10]=o):o=i[10],o}();return m[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsx)(i,{size:16,className:"rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),t=(0,a.jsx)(c,{size:16,className:"absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),r=(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"}),m[0]=e,m[1]=t,m[2]=r):(e=m[0],t=m[1],r=m[2]),m[3]!==u?(o=(0,a.jsxs)(d.$,{onClick:u,variant:"ghost",size:"sm",className:"size-8 p-0",children:[e,t,r]}),m[3]=u,m[4]=o):o=m[4],o}},9298:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var a=r(5155),n=r(9749),s=r(2115),l=r(2223),o=r(1849),i=r(3057);let c=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let r,s,o,d,m,u,h;let f=(0,n.c)(15);f[0]!==e?({className:r,variant:m,size:o,asChild:d,...s}=e,f[0]=e,f[1]=r,f[2]=s,f[3]=o,f[4]=d,f[5]=m):(r=f[1],s=f[2],o=f[3],d=f[4],m=f[5]);let p=void 0!==d&&d?l.DX:"button";return f[6]!==r||f[7]!==o||f[8]!==m?(u=(0,i.cn)(c({variant:m,size:o,className:r})),f[6]=r,f[7]=o,f[8]=m,f[9]=u):u=f[9],f[10]!==p||f[11]!==s||f[12]!==t||f[13]!==u?(h=(0,a.jsx)(p,{className:u,ref:t,...s}),f[10]=p,f[11]=s,f[12]=t,f[13]=u,f[14]=h):h=f[14],h});d.displayName="Button"},3057:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(4497),n=r(4469);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,a.$)(t))}r(1540)},2967:(e,t,r)=>{"use strict";r.d(t,{D:()=>d,N:()=>m});var a=r(2115),n=(e,t,r,a,n,s,l,o)=>{let i=document.documentElement,c=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,a=r&&s?n.map(e=>s[e]||e):n;r?(i.classList.remove(...a),i.classList.add(t)):i.setAttribute(e,t)}),o&&c.includes(t)&&(i.style.colorScheme=t)}if(a)d(a);else try{let e=localStorage.getItem(t)||r,a=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(a)}catch(e){}},s=["light","dark"],l="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=a.createContext(void 0),c={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=a.useContext(i))?e:c},m=e=>a.useContext(i)?a.createElement(a.Fragment,null,e.children):a.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:d=u,defaultTheme:m=n?"system":"light",attribute:h="data-theme",value:y,children:b,nonce:k,scriptProps:w}=e,[x,S]=a.useState(()=>p(c,m)),[E,_]=a.useState(()=>p(c)),C=y?Object.values(y):d,T=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=g());let a=y?y[t]:t,l=r?v(k):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...C),a&&i.classList.add(a)):e.startsWith("data-")&&(a?i.setAttribute(e,a):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),o){let e=s.includes(m)?m:null,r=s.includes(t)?t:e;i.style.colorScheme=r}null==l||l()},[k]),j=a.useCallback(e=>{let t="function"==typeof e?e(x):e;S(t);try{localStorage.setItem(c,t)}catch(e){}},[x]),N=a.useCallback(e=>{_(g(e)),"system"===x&&n&&!t&&T("system")},[x,t]);a.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),a.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?S(e.newValue):j(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),a.useEffect(()=>{T(null!=t?t:x)},[t,x]);let P=a.useMemo(()=>({theme:x,setTheme:j,forcedTheme:t,resolvedTheme:"system"===x?E:x,themes:n?[...d,"system"]:d,systemTheme:n?E:void 0}),[x,j,t,E,n,d]);return a.createElement(i.Provider,{value:P},a.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:n,enableColorScheme:o,defaultTheme:m,value:y,themes:d,nonce:k,scriptProps:w}),b)},f=a.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,themes:d,nonce:m,scriptProps:u}=e,h=JSON.stringify([s,r,i,t,d,c,l,o]).slice(1,-1);return a.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(h,")")}})}),p=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},g=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[739,303,507,441,75,358],()=>t(2978)),_N_E=e.O()}]);