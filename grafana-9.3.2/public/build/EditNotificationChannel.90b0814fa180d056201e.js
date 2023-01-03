"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7384],{12991:(e,t,n)=>{n.d(t,{$:()=>d});var i=n(24420),s=n.n(i),r=n(68404),a=n(36635),l=n(64850),o=n(40264),c=n(45916);const d=(e,t,n)=>i=>{const d=(0,a.connect)(e,t)(i),u=e=>{const t=(0,l.I0)();return(0,r.useEffect)((()=>function(){t((0,o.e)({cleanupAction:n}))}),[t]),(0,c.jsx)(d,Object.assign({},e))};return u.displayName=`ConnectWithCleanUp(${d.displayName})`,s()(u,i),u}},24508:(e,t,n)=>{n.r(t),n.d(t,{EditNotificationChannelPage:()=>j,default:()=>b});var i,s,r=n(68404),a=n(65737),l=n(3218),o=n(81691),c=n(37417),d=n(12991),u=n(17502),g=n(45173),p=n(82983),h=n(96217),f=n(45916);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class j extends r.PureComponent{constructor(){super(...arguments),m(this,"onSubmit",(e=>{const{notificationChannel:t}=this.props;this.props.updateNotificationChannel(Object.assign({},(0,h.YV)(Object.assign({},t,e,{settings:Object.assign({},t.settings,e.settings)})),{id:t.id}))})),m(this,"onTestChannel",(e=>{const{notificationChannel:t}=this.props;this.props.testNotificationChannel((0,h.dv)(Object.assign({},t,e,{settings:Object.assign({},t.settings,e.settings)})))}))}componentDidMount(){this.props.loadNotificationChannel(parseInt(this.props.match.params.id,10))}render(){const{notificationChannel:e,notificationChannelTypes:t}=this.props;return(0,f.jsx)(c.T,{navId:"channels",children:(0,f.jsxs)(c.T.Contents,{children:[i||(i=(0,f.jsx)("h2",{className:"page-sub-heading",children:"Edit notification channel"})),e&&e.id>0?(0,f.jsx)(l.l,{maxWidth:600,onSubmit:this.onSubmit,defaultValues:Object.assign({},e,{type:t.find((t=>t.value===e.type))}),children:n=>{let{control:i,errors:s,getValues:r,register:l,watch:o}=n;const c=t.find((e=>e.value===r().type.value));return(0,f.jsx)(u.w,{selectableChannels:(0,h.t7)(t,!0),selectedChannel:c,imageRendererAvailable:a.v.rendererAvailable,onTestChannel:this.onTestChannel,register:l,watch:o,errors:s,getValues:r,control:i,resetSecureField:this.props.resetSecureField,secureFields:e.secureFields})}}):s||(s=(0,f.jsxs)("div",{children:["Loading notification channel",(0,f.jsx)(o.$,{})]}))]})})}}const v={loadNotificationChannel:g.tk,testNotificationChannel:g.c1,updateNotificationChannel:g.fg,resetSecureField:p.J0},b=(0,d.$)((e=>({notificationChannel:e.notificationChannel.notificationChannel,notificationChannelTypes:e.notificationChannel.notificationChannelTypes})),v,(e=>e.notificationChannel=p.Gr))(j)},17502:(e,t,n)=>{n.d(t,{w:()=>T});var i=n(52423),s=n(68404),r=n(16755),a=n(81691),l=n(54761),o=n(8006),c=n(46782),d=n(65678),u=n(4645),g=n(35258),p=n(70917),h=n(12310),f=n(93194),m=n(45916);const j=["ref"];const v=e=>{let{control:t,option:n,register:i,invalid:s}=e;const r=n.secure?`secureSettings.${n.propertyName}`:`settings.${n.propertyName}`;switch(n.element){case"input":return(0,m.jsx)(u.I,Object.assign({},i(`${r}`,{required:!!n.required&&"Required",validate:e=>""===n.validationRule||b(e,n.validationRule)}),{invalid:s,type:n.inputType,placeholder:n.placeholder}));case"select":return(0,m.jsx)(g.g,{control:t,name:`${r}`,render:e=>{var t;let{}=e,i=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e.field,j);return(0,m.jsx)(p.Ph,Object.assign({},i,{options:null!==(t=n.selectOptions)&&void 0!==t?t:void 0,invalid:s}))}});case"textarea":return(0,m.jsx)(f.K,Object.assign({invalid:s},i(`${r}`,{required:!!n.required&&"Required",validate:e=>""===n.validationRule||b(e,n.validationRule)})));default:return console.error("Element not supported",n.element),null}},b=(e,t)=>!!RegExp(t).test(e)||"Invalid format",x=e=>{let{control:t,currentFormValues:n,errors:i,selectedChannelOptions:s,register:r,onResetSecureField:a,secureFields:l}=e;return(0,m.jsx)(m.Fragment,{children:s.map(((e,s)=>{var c;const g=`${e.label}-${s}`,p=n[`settings.${e.showWhen.field}`]&&n[`settings.${e.showWhen.field}`].value;return e.showWhen.field&&p!==e.showWhen.is?null:"checkbox"===e.element?(0,m.jsx)(d.g,{children:(0,m.jsx)(h.X,Object.assign({},r(e.secure?`secureSettings.${e.propertyName}`:`settings.${e.propertyName}`),{label:e.label,description:e.description}))},g):(0,m.jsx)(d.g,{label:e.label,description:e.description,invalid:i.settings&&!!i.settings[e.propertyName],error:i.settings&&(null===(c=i.settings[e.propertyName])||void 0===c?void 0:c.message),children:l&&l[e.propertyName]?(0,m.jsx)(u.I,{readOnly:!0,value:"Configured",suffix:(0,m.jsx)(o.zx,{onClick:()=>a(e.propertyName),fill:"text",type:"button",size:"sm",children:"Clear"})}):(0,m.jsx)(v,{option:e,register:r,control:t})},g)}))})},y=["ref"];const C=e=>{let{control:t,currentFormValues:n,errors:i,secureFields:s,selectedChannel:r,channels:a,register:l,resetSecureField:o}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.g,{label:"Name",invalid:!!i.name,error:i.name&&i.name.message,children:(0,m.jsx)(u.I,Object.assign({},l("name",{required:"Name is required"})))}),(0,m.jsx)(d.g,{label:"Type",children:(0,m.jsx)(g.g,{name:"type",render:e=>{let{}=e,t=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e.field,y);return(0,m.jsx)(p.Ph,Object.assign({},t,{options:a}))},control:t,rules:{required:!0}})}),(0,m.jsx)(x,{selectedChannelOptions:r.options.filter((e=>e.required)),currentFormValues:n,secureFields:s,onResetSecureField:o,register:l,errors:i,control:t})]})};var O=n(75342),F=n(2843);const S=e=>{var t;let{control:n,currentFormValues:i,errors:s,selectedChannel:r,secureFields:a,register:l,resetSecureField:o}=e;return(0,m.jsxs)(O.s,{label:`Optional ${r.heading}`,isOpen:!1,children:[""!==r.info&&(0,m.jsx)(F.b,{severity:"info",title:null!==(t=r.info)&&void 0!==t?t:""}),(0,m.jsx)(x,{selectedChannelOptions:r.options.filter((e=>!e.required)),currentFormValues:i,register:l,errors:s,control:n,onResetSecureField:o,secureFields:a})]})};var w,N=n(89902);const $=e=>{let{currentFormValues:t,imageRendererAvailable:n,register:i}=e;return(0,m.jsxs)(O.s,{label:"Notification settings",isOpen:!1,children:[(0,m.jsx)(d.g,{children:(0,m.jsx)(h.X,Object.assign({},i("isDefault"),{label:"Default",description:"Use this notification for all alerts"}))}),(0,m.jsx)(d.g,{children:(0,m.jsx)(h.X,Object.assign({},i("settings.uploadImage"),{label:"Include image",description:"Captures an image and include it in the notification"}))}),t.uploadImage&&!n&&(w||(w=(0,m.jsx)(N.v,{title:"No image renderer available/installed",children:"Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."}))),(0,m.jsx)(d.g,{children:(0,m.jsx)(h.X,Object.assign({},i("disableResolveMessage"),{label:"Disable Resolve Message",description:"Disable the resolve message [OK] that is sent when alerting state returns to false"}))}),(0,m.jsx)(d.g,{children:(0,m.jsx)(h.X,Object.assign({},i("sendReminder"),{label:"Send reminders",description:"Send additional notifications for triggered alerts"}))}),t.sendReminder&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d.g,{label:"Send reminder every",description:"Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",children:(0,m.jsx)(u.I,Object.assign({},i("frequency"),{width:8}))})})]})};var R,q,I;const T=e=>{let{control:t,errors:n,selectedChannel:i,selectableChannels:d,register:u,watch:g,getValues:p,imageRendererAvailable:h,onTestChannel:f,resetSecureField:j,secureFields:v}=e;const b=(0,r.wW)(k);(0,s.useEffect)((()=>{const e=new Set(null==i?void 0:i.options.filter((e=>e.showWhen.field)).map((e=>`settings.${e.showWhen.field}`)))||[];g(["type","sendReminder","uploadImage",...e])}),[null==i?void 0:i.options,g]);const x=p();return i?(0,m.jsxs)("div",{className:b.formContainer,children:[(0,m.jsx)("div",{className:b.formItem,children:(0,m.jsx)(C,{selectedChannel:i,channels:d,secureFields:v,resetSecureField:j,currentFormValues:x,register:u,errors:n,control:t})}),i.options.filter((e=>!e.required)).length>0&&(0,m.jsx)("div",{className:b.formItem,children:(0,m.jsx)(S,{selectedChannel:i,secureFields:v,resetSecureField:j,currentFormValues:x,register:u,errors:n,control:t})}),(0,m.jsx)("div",{className:b.formItem,children:(0,m.jsx)($,{imageRendererAvailable:h,currentFormValues:x,register:u,errors:n,control:t})}),(0,m.jsx)("div",{className:b.formButtons,children:(0,m.jsxs)(l.Lh,{children:[q||(q=(0,m.jsx)(o.zx,{type:"submit",children:"Save"})),(0,m.jsx)(o.zx,{type:"button",variant:"secondary",onClick:()=>f(p()),children:"Test"}),(0,m.jsx)("a",{href:`${c.ZP.appSubUrl}/alerting/notifications`,children:I||(I=(0,m.jsx)(o.zx,{type:"button",variant:"secondary",children:"Back"}))})]})})]}):R||(R=(0,m.jsx)(a.$,{}))},k=e=>({formContainer:i.css``,formItem:i.css`
      flex-grow: 1;
      padding-top: ${e.spacing(2)};
    `,formButtons:i.css`
      padding-top: ${e.spacing(4)};
    `})},45173:(e,t,n)=>{n.d(t,{Au:()=>o,C2:()=>d,c1:()=>g,en:()=>c,fA:()=>p,fg:()=>u,tk:()=>h});var i=n(93570),s=n(80795),r=n(93686),a=n(47900),l=n(82983);function o(e){return async t=>{t((0,l.gz)());const n=await(0,i.i)().get("/api/alerts",e);t((0,l.Oc)(n))}}function c(e,t){return async n=>{await(0,i.i)().post(`/api/alerts/${e}/pause`,t);n(o({state:(s.E1.getSearchObject().state||"all").toString()}))}}function d(e){return async t=>{try{await(0,i.i)().post("/api/alert-notifications",e),t((0,r.$l)((0,a.AT)("Notification created"))),s.E1.push("/alerting/notifications")}catch(e){(0,i.kW)(e)&&t((0,r.$l)((0,a.t_)(e.data.error)))}}}function u(e){return async t=>{try{await(0,i.i)().put(`/api/alert-notifications/${e.id}`,e),t((0,r.$l)((0,a.AT)("Notification updated")))}catch(e){(0,i.kW)(e)&&t((0,r.$l)((0,a.t_)(e.data.error)))}}}function g(e){return async(t,n)=>{const s=n().notificationChannel.notificationChannel;await(0,i.i)().post("/api/alert-notifications/test",Object.assign({id:s.id},e))}}function p(){return async e=>{const t=(await(0,i.i)().get("/api/alert-notifiers")).sort(((e,t)=>e.name>t.name?1:-1));e((0,l.T2)(t))}}function h(e){return async t=>{await t(p());const n=await(0,i.i)().get(`/api/alert-notifications/${e}`);t((0,l.K)(n))}}},96217:(e,t,n)=>{n.d(t,{Pg:()=>s,YV:()=>a,dv:()=>l,t7:()=>r});var i=n(58635);const s={id:-1,name:"",type:{value:"email",label:"Email"},sendReminder:!1,disableResolveMessage:!1,frequency:"15m",settings:{uploadImage:n(65737).v.rendererAvailable,autoResolve:!0,httpMethod:"POST",severity:"critical"},secureSettings:{},secureFields:{},isDefault:!1},r=(0,i.Z)(((e,t)=>e.map((e=>t?{value:e.value,label:e.label,description:e.description}:{value:e.value,label:e.label})))),a=e=>{const t=Object.fromEntries(Object.entries(e.settings).map((e=>{let[t,n]=e;return[t,n&&n.hasOwnProperty("value")?n.value:n]})));return Object.assign({},s,e,{frequency:""===e.frequency?s.frequency:e.frequency,type:e.type.value,settings:Object.assign({},s.settings,t),secureSettings:Object.assign({},e.secureSettings)})},l=e=>{var t;return{name:e.name,type:e.type.value,frequency:null!==(t=e.frequency)&&void 0!==t?t:s.frequency,settings:Object.assign({},Object.assign(s.settings,e.settings)),secureSettings:Object.assign({},e.secureSettings)}}}}]);
//# sourceMappingURL=EditNotificationChannel.90b0814fa180d056201e.js.map