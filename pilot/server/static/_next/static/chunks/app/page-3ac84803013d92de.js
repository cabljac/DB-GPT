(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{90545:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var o=t(40431),i=t(46750),n=t(86006),a=t(89791),l=t(4323),s=t(51579),c=t(86601),d=t(95887),v=t(9268);let u=["className","component"];var p=t(47327),m=t(98918);let g=function(e={}){let{themeId:r,defaultTheme:t,defaultClassName:p="MuiBox-root",generateClassName:m}=e,g=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z),h=n.forwardRef(function(e,n){let l=(0,d.Z)(t),s=(0,c.Z)(e),{className:h,component:f="div"}=s,y=(0,i.Z)(s,u);return(0,v.jsx)(g,(0,o.Z)({as:f,ref:n,className:(0,a.Z)(h,m?m(p):p),theme:r&&l[r]||l},y))});return h}({defaultTheme:m.Z,defaultClassName:"MuiBox-root",generateClassName:p.Z.generate});var h=g},53113:function(e,r,t){"use strict";var o=t(46750),i=t(40431),n=t(86006),a=t(46319),l=t(47562),s=t(53832),c=t(99179),d=t(50645),v=t(88930),u=t(47093),p=t(326),m=t(94244),g=t(77614),h=t(9268);let f=["children","action","color","variant","size","fullWidth","startDecorator","endDecorator","loading","loadingPosition","loadingIndicator","disabled"],y=e=>{let{color:r,disabled:t,focusVisible:o,focusVisibleClassName:i,fullWidth:n,size:a,variant:c,loading:d}=e,v={root:["root",t&&"disabled",o&&"focusVisible",n&&"fullWidth",c&&`variant${(0,s.Z)(c)}`,r&&`color${(0,s.Z)(r)}`,a&&`size${(0,s.Z)(a)}`,d&&"loading"],startDecorator:["startDecorator"],endDecorator:["endDecorator"],loadingIndicatorCenter:["loadingIndicatorCenter"]},u=(0,l.Z)(v,g.F,{});return o&&i&&(u.root+=` ${i}`),u},x=(0,d.Z)("span",{name:"JoyButton",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})({"--Icon-margin":"0 0 0 calc(var(--Button-gap) / -2)","--CircularProgress-margin":"0 0 0 calc(var(--Button-gap) / -2)",display:"inherit",marginRight:"var(--Button-gap)"}),Z=(0,d.Z)("span",{name:"JoyButton",slot:"EndDecorator",overridesResolver:(e,r)=>r.endDecorator})({"--Icon-margin":"0 calc(var(--Button-gap) / -2) 0 0","--CircularProgress-margin":"0 calc(var(--Button-gap) / -2) 0 0",display:"inherit",marginLeft:"var(--Button-gap)"}),D=(0,d.Z)("span",{name:"JoyButton",slot:"LoadingCenter",overridesResolver:(e,r)=>r.loadingIndicatorCenter})(({theme:e,ownerState:r})=>{var t,o,n,a;return(0,i.Z)({display:"inherit",position:"absolute",left:"50%",transform:"translateX(-50%)",color:null==(t=e.variants[r.variant])?void 0:null==(o=t[r.color])?void 0:o.color},r.disabled&&{color:null==(n=e.variants[`${r.variant}Disabled`])?void 0:null==(a=n[r.color])?void 0:a.color})}),b=(0,d.Z)("button",{name:"JoyButton",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var t,o,n,a;return[(0,i.Z)({"--Icon-margin":"initial"},"sm"===r.size&&{"--Icon-fontSize":"1.25rem","--CircularProgress-size":"20px","--Button-gap":"0.375rem",minHeight:"var(--Button-minHeight, 2rem)",fontSize:e.vars.fontSize.sm,paddingBlock:"2px",paddingInline:"0.75rem"},"md"===r.size&&{"--Icon-fontSize":"1.5rem","--CircularProgress-size":"24px","--Button-gap":"0.5rem",minHeight:"var(--Button-minHeight, 2.5rem)",fontSize:e.vars.fontSize.sm,paddingBlock:"0.25rem",paddingInline:"1rem"},"lg"===r.size&&{"--Icon-fontSize":"1.75rem","--CircularProgress-size":"28px","--Button-gap":"0.75rem",minHeight:"var(--Button-minHeight, 3rem)",fontSize:e.vars.fontSize.md,paddingBlock:"0.375rem",paddingInline:"1.5rem"},{WebkitTapHighlightColor:"transparent",borderRadius:`var(--Button-radius, ${e.vars.radius.sm})`,margin:"var(--Button-margin)",border:"none",backgroundColor:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",textDecoration:"none",fontFamily:e.vars.fontFamily.body,fontWeight:e.vars.fontWeight.lg,lineHeight:1},r.fullWidth&&{width:"100%"},{[e.focus.selector]:e.focus.default}),null==(t=e.variants[r.variant])?void 0:t[r.color],{"&:hover":null==(o=e.variants[`${r.variant}Hover`])?void 0:o[r.color]},{"&:active":null==(n=e.variants[`${r.variant}Active`])?void 0:n[r.color]},(0,i.Z)({[`&.${g.Z.disabled}`]:null==(a=e.variants[`${r.variant}Disabled`])?void 0:a[r.color]},"center"===r.loadingPosition&&{[`&.${g.Z.loading}`]:{color:"transparent"}})]}),S=n.forwardRef(function(e,r){let t=(0,v.Z)({props:e,name:"JoyButton"}),{children:l,action:s,color:d="primary",variant:g="solid",size:S="md",fullWidth:j=!1,startDecorator:B,endDecorator:I,loading:P=!1,loadingPosition:C="center",loadingIndicator:z,disabled:w}=t,k=(0,o.Z)(t,f),{getColor:N}=(0,u.VT)(g),T=N(e.color,d),R=n.useRef(null),_=(0,c.Z)(R,r),{focusVisible:F,setFocusVisible:$,getRootProps:W}=(0,a.Z)((0,i.Z)({},t,{disabled:w||P,ref:_})),J=null!=z?z:(0,h.jsx)(m.Z,(0,i.Z)({},"context"!==T&&{color:T},{thickness:{sm:2,md:3,lg:4}[S]||3}));n.useImperativeHandle(s,()=>({focusVisible:()=>{var e;$(!0),null==(e=R.current)||e.focus()}}),[$]);let M=(0,i.Z)({},t,{color:T,fullWidth:j,variant:g,size:S,focusVisible:F,loading:P,loadingPosition:C,disabled:w||P}),H=y(M),[O,E]=(0,p.Z)("root",{ref:r,className:H.root,elementType:b,externalForwardedProps:k,getSlotProps:W,ownerState:M}),[L,A]=(0,p.Z)("startDecorator",{className:H.startDecorator,elementType:x,externalForwardedProps:k,ownerState:M}),[V,K]=(0,p.Z)("endDecorator",{className:H.endDecorator,elementType:Z,externalForwardedProps:k,ownerState:M}),[q,U]=(0,p.Z)("loadingIndicatorCenter",{className:H.loadingIndicatorCenter,elementType:D,externalForwardedProps:k,ownerState:M});return(0,h.jsxs)(O,(0,i.Z)({},E,{children:[(B||P&&"start"===C)&&(0,h.jsx)(L,(0,i.Z)({},A,{children:P&&"start"===C?J:B})),l,P&&"center"===C&&(0,h.jsx)(q,(0,i.Z)({},U,{children:J})),(I||P&&"end"===C)&&(0,h.jsx)(V,(0,i.Z)({},K,{children:P&&"end"===C?J:I}))]}))});r.Z=S},77614:function(e,r,t){"use strict";t.d(r,{F:function(){return i}});var o=t(18587);function i(e){return(0,o.d6)("MuiButton",e)}let n=(0,o.sI)("MuiButton",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","focusVisible","disabled","sizeSm","sizeMd","sizeLg","fullWidth","startDecorator","endDecorator","loading","loadingIndicatorCenter"]);r.Z=n},22046:function(e,r,t){"use strict";t.d(r,{eu:function(){return x},FR:function(){return y},ZP:function(){return I}});var o=t(46750),i=t(40431),n=t(86006),a=t(53832),l=t(86601),s=t(47562),c=t(50645),d=t(88930),v=t(47093),u=t(326),p=t(18587);function m(e){return(0,p.d6)("MuiTypography",e)}(0,p.sI)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","body1","body2","body3","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var g=t(9268);let h=["color","textColor"],f=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant"],y=n.createContext(!1),x=n.createContext(!1),Z=e=>{let{gutterBottom:r,noWrap:t,level:o,color:i,variant:n}=e,l={root:["root",o,r&&"gutterBottom",t&&"noWrap",i&&`color${(0,a.Z)(i)}`,n&&`variant${(0,a.Z)(n)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,s.Z)(l,m,{})},D=(0,c.Z)("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})(({ownerState:e})=>{var r;return(0,i.Z)({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"},"string"!=typeof e.startDecorator&&("flex-start"===e.alignItems||(null==(r=e.sx)?void 0:r.alignItems)==="flex-start")&&{marginTop:"2px"})}),b=(0,c.Z)("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(e,r)=>r.endDecorator})(({ownerState:e})=>{var r;return(0,i.Z)({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"},"string"!=typeof e.endDecorator&&("flex-start"===e.alignItems||(null==(r=e.sx)?void 0:r.alignItems)==="flex-start")&&{marginTop:"2px"})}),S=(0,c.Z)("span",{name:"JoyTypography",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var t,o,n,a;return(0,i.Z)({"--Icon-fontSize":"1.25em",margin:"var(--Typography-margin, 0px)"},r.nesting?{display:"inline"}:{fontFamily:e.vars.fontFamily.body,display:"block"},(r.startDecorator||r.endDecorator)&&(0,i.Z)({display:"flex",alignItems:"center"},r.nesting&&(0,i.Z)({display:"inline-flex"},r.startDecorator&&{verticalAlign:"bottom"})),r.level&&"inherit"!==r.level&&e.typography[r.level],{fontSize:`var(--Typography-fontSize, ${r.level&&"inherit"!==r.level&&null!=(t=null==(o=e.typography[r.level])?void 0:o.fontSize)?t:"inherit"})`},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.color&&"context"!==r.color&&{color:`rgba(${null==(n=e.vars.palette[r.color])?void 0:n.mainChannel} / 1)`},r.variant&&(0,i.Z)({borderRadius:e.vars.radius.xs,paddingBlock:"min(0.15em, 4px)",paddingInline:"0.375em"},!r.nesting&&{marginInline:"-0.375em"},null==(a=e.variants[r.variant])?void 0:a[r.color]))}),j={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",display1:"h1",display2:"h2",body1:"p",body2:"p",body3:"span",body4:"span",body5:"span",inherit:"p"},B=n.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"JoyTypography"}),{color:a,textColor:s}=t,c=(0,o.Z)(t,h),p=n.useContext(y),m=n.useContext(x),B=(0,l.Z)((0,i.Z)({},c,{color:s})),{component:I,gutterBottom:P=!1,noWrap:C=!1,level:z="body1",levelMapping:w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",body3:"p",inherit:"p"},children:k,endDecorator:N,startDecorator:T,variant:R}=B,_=(0,o.Z)(B,f),{getColor:F}=(0,v.VT)(R),$=F(e.color,R?null!=a?a:"neutral":a),W=p||m?e.level||"inherit":z,J=I||(p?"span":w[W]||j[W]||"span"),M=(0,i.Z)({},B,{level:W,component:J,color:$,gutterBottom:P,noWrap:C,nesting:p,variant:R}),H=Z(M),O=(0,i.Z)({},_,{component:J}),[E,L]=(0,u.Z)("root",{ref:r,className:H.root,elementType:S,externalForwardedProps:O,ownerState:M}),[A,V]=(0,u.Z)("startDecorator",{className:H.startDecorator,elementType:D,externalForwardedProps:O,ownerState:M}),[K,q]=(0,u.Z)("endDecorator",{className:H.endDecorator,elementType:b,externalForwardedProps:O,ownerState:M});return(0,g.jsx)(y.Provider,{value:!0,children:(0,g.jsxs)(E,(0,i.Z)({},L,{children:[T&&(0,g.jsx)(A,(0,i.Z)({},V,{children:T})),k,N&&(0,g.jsx)(K,(0,i.Z)({},q,{children:N}))]}))})});var I=B},45825:function(e,r,t){Promise.resolve().then(t.bind(t,26925))},26925:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var o=t(9268),i=t(89081),n=t(86006),a=t(22046),l=t(46750),s=t(40431),c=t(89791),d=t(53832),v=t(47562),u=t(50645),p=t(88930),m=t(18587);function g(e){return(0,m.d6)("MuiDivider",e)}(0,m.sI)("MuiDivider",["root","horizontal","vertical","insetContext","insetNone"]);let h=["className","children","component","inset","orientation","role"],f=e=>{let{orientation:r,inset:t}=e,o={root:["root",r,t&&`inset${(0,d.Z)(t)}`]};return(0,v.Z)(o,g,{})},y=(0,u.Z)("hr",{name:"JoyDivider",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>(0,s.Z)({"--Divider-thickness":"1px","--Divider-lineColor":e.vars.palette.divider},"none"===r.inset&&{"--_Divider-inset":"0px"},"context"===r.inset&&{"--_Divider-inset":"var(--Divider-inset, 0px)"},{margin:"initial",marginInline:"vertical"===r.orientation?"initial":"var(--_Divider-inset)",marginBlock:"vertical"===r.orientation?"var(--_Divider-inset)":"initial",position:"relative",alignSelf:"stretch",flexShrink:0},r.children?{"--Divider-gap":e.spacing(1),"--Divider-childPosition":"50%",display:"flex",flexDirection:"vertical"===r.orientation?"column":"row",alignItems:"center",whiteSpace:"nowrap",textAlign:"center",border:0,fontFamily:e.vars.fontFamily.body,fontSize:e.vars.fontSize.sm,"&::before, &::after":{position:"relative",inlineSize:"vertical"===r.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===r.orientation?"initial":"var(--Divider-thickness)",backgroundColor:"var(--Divider-lineColor)",content:'""'},"&::before":{marginInlineEnd:"vertical"===r.orientation?"initial":"min(var(--Divider-childPosition) * 999, var(--Divider-gap))",marginBlockEnd:"vertical"===r.orientation?"min(var(--Divider-childPosition) * 999, var(--Divider-gap))":"initial",flexBasis:"var(--Divider-childPosition)"},"&::after":{marginInlineStart:"vertical"===r.orientation?"initial":"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",marginBlockStart:"vertical"===r.orientation?"min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))":"initial",flexBasis:"calc(100% - var(--Divider-childPosition))"}}:{border:"none",listStyle:"none",backgroundColor:"var(--Divider-lineColor)",inlineSize:"vertical"===r.orientation?"var(--Divider-thickness)":"initial",blockSize:"vertical"===r.orientation?"initial":"var(--Divider-thickness)"})),x=n.forwardRef(function(e,r){let t=(0,p.Z)({props:e,name:"JoyDivider"}),{className:i,children:n,component:a=null!=n?"div":"hr",inset:d,orientation:v="horizontal",role:u="hr"!==a?"separator":void 0}=t,m=(0,l.Z)(t,h),g=(0,s.Z)({},t,{inset:d,role:u,orientation:v,component:a}),x=f(g);return(0,o.jsx)(y,(0,s.Z)({ref:r,as:a,className:(0,c.Z)(x.root,i),ownerState:g,role:u},"separator"===u&&"vertical"===v&&{"aria-orientation":"vertical"},m,{children:n}))});x.muiName="Divider";var Z=t(90545),D=t(77614),b=t(53113),S=t(35086),j=t(53047),B=t(54842),I=t(67830),P=t(19700),C=t(92391),z=t(78915),w=t(56008);function k(){var e;let r=C.z.object({query:C.z.string().min(1)}),t=(0,w.useRouter)(),[l,s]=(0,n.useState)(!1),c=(0,P.cI)({resolver:(0,I.F)(r),defaultValues:{}}),{data:d}=(0,i.Z)(async()=>await (0,z.K)("/v1/chat/dialogue/scenes")),v=async e=>{let{query:r}=e;try{var o,i;s(!0),c.reset();let e=await (0,z.K)("/v1/chat/dialogue/new",{chat_mode:"chat_normal"});(null==e?void 0:e.success)&&(null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.conv_uid)&&t.push("/chat?id=".concat(null==e?void 0:null===(i=e.data)||void 0===i?void 0:i.conv_uid,"&initMessage=").concat(r))}catch(e){}finally{s(!1)}};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mx-auto h-full justify-center flex max-w-3xl flex-col gap-8 px-5 pt-6 xl:max-w-4xl",children:[(0,o.jsxs)("div",{className:"max-w-xs my-0 mx-auto",children:[(0,o.jsx)(a.ZP,{level:"h3",className:"text-center",children:"DB-GPT"}),(0,o.jsx)(a.ZP,{level:"body1",className:"text-center pt-4",children:"Revolutionizing Database Interactions with Private LLM Technology"})]}),(0,o.jsx)("div",{className:"grid gap-8 lg:grid-cols-3",children:(0,o.jsxs)("div",{className:"lg:col-span-3",children:[(0,o.jsx)(x,{className:"text-[#878c93]",children:"Quick Start"}),(0,o.jsx)(Z.Z,{className:"grid pt-7 rounded-xl gap-2 lg:grid-cols-3 lg:gap-6",sx:{["& .".concat(D.Z.root)]:{color:"var(--joy-palette-primary-solidColor)",backgroundColor:"var(--joy-palette-primary-solidBg)",height:"52px","&: hover":{backgroundColor:"var(--joy-palette-primary-solidHoverBg)"}}},children:null==d?void 0:null===(e=d.data)||void 0===e?void 0:e.map(e=>(0,o.jsx)(b.Z,{size:"md",variant:"solid",className:"text-base rounded-none",onClick:async()=>{var r,o;let i=await (0,z.K)("/v1/chat/dialogue/new",{chat_mode:e.chat_scene});(null==i?void 0:i.success)&&(null==i?void 0:null===(r=i.data)||void 0===r?void 0:r.conv_uid)&&t.push("/chat?id=".concat(null==i?void 0:null===(o=i.data)||void 0===o?void 0:o.conv_uid,"&scene=").concat(e.chat_scene))},children:e.scene_name},e.chat_scene))})]})}),(0,o.jsx)("div",{className:"mt-6 mb-[10%] pointer-events-none inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-3xl flex-col items-center justify-center max-md:border-t xl:max-w-4xl [&>*]:pointer-events-auto",children:(0,o.jsx)("form",{style:{maxWidth:"100%",width:"100%",position:"relative",display:"flex",marginTop:"auto",overflow:"visible",background:"none",justifyContent:"center",marginLeft:"auto",marginRight:"auto",height:"52px"},onSubmit:e=>{c.handleSubmit(v)(e)},children:(0,o.jsx)(S.ZP,{sx:{width:"100%"},variant:"outlined",placeholder:"Ask anything",endDecorator:(0,o.jsx)(j.ZP,{type:"submit",disabled:l,children:(0,o.jsx)(B.Z,{})}),...c.register("query")})})})]})})}},78915:function(e,r,t){"use strict";t.d(r,{T:function(){return d},K:function(){return v}});var o=t(21628),i=t(24214),n=t(52040);let a=i.Z.create({baseURL:n.env.API_BASE_URL});a.defaults.timeout=1e4,a.interceptors.response.use(e=>e.data,e=>Promise.reject(e));var l=t(84835);let s={"content-type":"application/json"},c=e=>{if(!(0,l.isPlainObject)(e))return JSON.stringify(e);let r={...e};for(let e in r){let t=r[e];"string"==typeof t&&(r[e]=t.trim())}return JSON.stringify(r)},d=(e,r)=>{if(r){let t=Object.keys(r).filter(e=>void 0!==r[e]&&""!==r[e]).map(e=>"".concat(e,"=").concat(r[e])).join("&");t&&(e+="?".concat(t))}return a.get("/api"+e,{headers:s}).then(e=>e).catch(e=>{o.ZP.error(e),Promise.reject(e)})},v=(e,r)=>{let t=c(r);return a.post("/api"+e,{body:t,headers:s}).then(e=>e).catch(e=>{o.ZP.error(e),Promise.reject(e)})}},56008:function(e,r,t){e.exports=t(30794)}},function(e){e.O(0,[180,797,577,86,562,259,253,769,744],function(){return e(e.s=45825)}),_N_E=e.O()}]);