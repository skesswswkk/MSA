"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{17284:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ie});var s=t(52423),r=t(68404),n=t(16755),l=t(38953),i=t(2843),o=t(19512),c=t(64850),d=t(8157),u=t(23559),g=t(73615),p=t(67921),m=t(90062),h=t(23542),x=t(13960),b=t(44812),j=t(40711),f=t(8006),v=t(59196),y=t(96535),N=t(43271),S=t(23691),C=t(34087),k=t(60277),w=t(45916);const $=e=>{let{alert:a,alertManagerSourceName:t}=e;const s=(0,n.wW)(A),r=(0,y.QX)(t),l=!(0,N.HY)(t)||v.Vt.hasPermission(c.bW.AlertingRuleRead);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:s.actionsRow,children:[(0,w.jsxs)(k.q,{actions:[r.update,r.create],fallback:v.Vt.isEditor,children:[a.status.state===d.Z9.Suppressed&&(0,w.jsx)(f.Qj,{href:`${(0,S.eQ)("/alerting/silences",t)}&silenceIds=${a.status.silencedBy.join(",")}`,className:s.button,icon:"bell",size:"sm",children:"Manage silences"}),a.status.state===d.Z9.Active&&(0,w.jsx)(f.Qj,{href:(0,S.VN)(t,a.labels),className:s.button,icon:"bell-slash",size:"sm",children:"Silence"})]}),l&&a.generatorURL&&(0,w.jsx)(f.Qj,{className:s.button,href:a.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(a.annotations).map((e=>{let[a,t]=e;return(0,w.jsx)(C.a,{annotationKey:a,value:t},a)})),(0,w.jsxs)("div",{className:s.receivers,children:["Receivers:"," ",a.receivers.map((e=>{let{name:a}=e;return a})).filter((e=>!!e)).join(", ")]})]})},A=e=>({button:s.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:s.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:s.css`
    padding: ${e.spacing(1,0)};
  `}),G=e=>{let{alerts:a,alertManagerSourceName:t}=e;const s=(0,n.wW)(O),l=(0,r.useMemo)((()=>[{id:"state",label:"State",renderCell:e=>{let{data:a}=e;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j.G,{state:a.status.state}),(0,w.jsxs)("span",{className:s.duration,children:["for"," ",(0,x.vT)({start:new Date(a.startsAt),end:new Date(a.endsAt)})]})]})},size:"220px"},{id:"labels",label:"Labels",renderCell:e=>{let{data:{labels:a}}=e;return(0,w.jsx)(m.s,{className:s.labels,labels:a})},size:1}]),[s]),i=(0,r.useMemo)((()=>a.map((e=>({id:e.fingerprint,data:e})))),[a]);return(0,w.jsx)("div",{className:s.tableWrapper,"data-testid":"alert-group-table",children:(0,w.jsx)(b.F,{cols:l,items:i,isExpandable:!0,renderExpandedContent:e=>{let{data:a}=e;return(0,w.jsx)($,{alert:a,alertManagerSourceName:t})}})})},O=e=>({tableWrapper:s.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:s.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:s.css`
    padding-bottom: 0;
  `});var E,M=t(27481);const q=e=>{let{alertManagerSourceName:a,group:t}=e;const[s,l]=(0,r.useState)(!0),i=(0,n.wW)(F);return(0,w.jsxs)("div",{className:i.wrapper,children:[(0,w.jsxs)("div",{className:i.header,children:[(0,w.jsxs)("div",{className:i.group,"data-testid":"alert-group",children:[(0,w.jsx)(h.U,{size:"sm",isCollapsed:s,onToggle:()=>l(!s),"data-testid":"alert-group-collapse-toggle"}),Object.keys(t.labels).length?(0,w.jsx)(m.s,{className:i.headerLabels,labels:t.labels}):E||(E=(0,w.jsx)("span",{children:"No grouping"}))]}),(0,w.jsx)(M.Z,{group:t})]}),!s&&(0,w.jsx)(G,{alertManagerSourceName:a,alerts:t.alerts})]})},F=e=>({wrapper:s.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:s.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:s.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:s.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:s.css``,spanElement:s.css`
    margin-left: ${e.spacing(.5)};
  `,[d.Z9.Active]:s.css`
    color: ${e.colors.error.main};
  `,[d.Z9.Suppressed]:s.css`
    color: ${e.colors.primary.main};
  `,[d.Z9.Unprocessed]:s.css`
    color: ${e.colors.secondary.main};
  `});var W,I=t(69066),Z=t(46150),B=t(39833),z=t(83744),L=t(37625);const T=e=>{let{onStateFilterChange:a,stateFilter:t}=e;const s=(0,n.wW)(_),r=Object.entries(d.Z9).sort(((e,a)=>{let[t]=e,[s]=a;return t<s?-1:1})).map((e=>{let[a,t]=e;return{label:a,value:t}}));return(0,w.jsxs)("div",{className:s.wrapper,children:[W||(W=(0,w.jsx)(z._,{children:"State"})),(0,w.jsx)(L.S,{options:r,value:t,onChange:a})]})},_=e=>({wrapper:s.css`
    margin-left: ${e.spacing(1)};
  `});var R,Q,J=t(82897),P=t(70917),U=t(99500);const K=e=>{let{className:a,groups:t,groupBy:s,onGroupingChange:r}=e;const n=(0,J.uniq)(t.flatMap((e=>e.alerts)).flatMap((e=>{let{labels:a}=e;return Object.keys(a)}))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,w.jsxs)("div",{"data-testid":"group-by-container",className:a,children:[R||(R=(0,w.jsx)(z._,{children:"Custom group by"})),(0,w.jsx)(P.NU,{"aria-label":"group by label keys",value:s,placeholder:"Group by",prefix:Q||(Q=(0,w.jsx)(U.J,{name:"tag-alt"})),onChange:e=>{r(e.map((e=>{let{value:a}=e;return a})))},options:n})]})};var V=t(37972);const D=e=>{let{groups:a}=e;const[t,s]=(0,r.useState)(Math.floor(100*Math.random())),[l,i]=(0,o.K)(),{groupBy:c=[],queryString:d,alertState:u}=(0,S.lC)(l),g=`matcher-${t}`,p=(0,Z.k)("instance"),[m,h]=(0,I.k)(p),x=(0,n.wW)(H),b=!!(c.length>0||d||u);return(0,w.jsxs)("div",{className:x.wrapper,children:[(0,w.jsx)(B.P,{current:m,onChange:h,dataSources:p}),(0,w.jsxs)("div",{className:x.filterSection,children:[(0,w.jsx)(V.F,{className:x.filterInput,defaultQueryString:d,onFilterChange:e=>i({queryString:e||null})},g),(0,w.jsx)(K,{className:x.filterInput,groups:a,groupBy:c,onGroupingChange:e=>i({groupBy:e.length?e.join(","):null})}),(0,w.jsx)(T,{stateFilter:u,onStateFilterChange:e=>i({alertState:e||null})}),b&&(0,w.jsx)(f.zx,{className:x.clearButton,variant:"secondary",icon:"times",onClick:()=>{i({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>s(t+1)),100)},children:"Clear filters"})]})]})},H=e=>({wrapper:s.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    margin-bottom: ${e.spacing(3)};
  `,filterSection:s.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${e.spacing(3)};
  `,filterInput:s.css`
    width: 340px;
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,clearButton:s.css`
    margin-left: ${e.spacing(1)};
    margin-top: 19px;
  `});var X=t(72710);var Y,ee,ae,te=t(76938),se=t(64834),re=t(74846),ne=t(5302);const le=e=>({groupingBanner:s.css`
    margin: ${e.spacing(2,0)};
  `}),ie=()=>{var e;const{useGetAlertmanagerChoiceQuery:a}=u.h,t=(0,Z.k)("instance"),[s]=(0,I.k)(t),m=(0,c.I0)(),[h]=(0,o.K)(),{groupBy:x=[]}=(0,S.lC)(h),b=(0,n.wW)(le),{currentData:j}=a(),f=(0,te._)((e=>e.amAlertGroups)),{loading:v,error:y,result:C=[]}=null!==(e=f[s||""])&&void 0!==e?e:ne.oq,k=((e,a)=>(0,r.useMemo)((()=>0===a.length?e.filter((e=>0===Object.keys(e.labels).length)).length>1?e.reduce(((e,a)=>{if(0===Object.keys(a.labels).length){const t=e.find((e=>{let{labels:a}=e;return Object.keys(a)}));t?t.alerts=(0,J.uniqBy)([...t.alerts,...a.alerts],"labels"):e.push({alerts:a.alerts,labels:{},receiver:{name:"NONE"}})}else e.push(a);return e}),[]):e:e.flatMap((e=>{let{alerts:a}=e;return a})).reduce(((e,t)=>{if(a.every((e=>Object.keys(t.labels).includes(e)))){const s=e.find((e=>a.every((a=>e.labels[a]===t.labels[a]))));if(s)s.alerts.push(t);else{const s=a.reduce(((e,a)=>Object.assign({},e,{[a]:t.labels[a]})),{});e.push({alerts:[t],labels:s,receiver:{name:"NONE"}})}}else{const a=e.find((e=>0===Object.keys(e.labels).length));a?a.alerts.push(t):e.push({alerts:[t],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,a]))(C,x),$=(e=>{const[a]=(0,o.K)(),t=(0,S.lC)(a),s=(0,X.Zh)(t.queryString||"");return(0,r.useMemo)((()=>e.reduce(((e,a)=>{const r=a.alerts.filter((e=>{let{labels:a,status:r}=e;const n=(0,X.eD)(a,s),l=!t.alertState||r.state===t.alertState;return n&&l}));return r.length>0&&(0===Object.keys(a.labels).length?e.unshift(Object.assign({},a,{alerts:r})):e.push(Object.assign({},a,{alerts:r}))),e}),[])),[e,t,s])})(k),A=s===N.GC&&j===d.TE.External;return(0,r.useEffect)((()=>{function e(){s&&m((0,se.mS)(s))}e();const a=setInterval(e,re.iF);return()=>{clearInterval(a)}}),[m,s]),s?(0,w.jsxs)(g.J,{pageId:"groups",children:[(0,w.jsx)(D,{groups:C}),v&&(Y||(Y=(0,w.jsx)(l.u,{text:"Loading notifications"}))),y&&!v&&(0,w.jsx)(i.b,{title:"Error loading notifications",severity:"error",children:y.message||"Unknown error"}),A&&(ee||(ee=(0,w.jsx)(i.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager",children:"Grafana is configured to send alerts to external alertmanagers only. No alerts are expected to be available here for the selected Alertmanager."}))),C&&$.map(((e,a)=>(0,w.jsxs)(r.Fragment,{children:[(1===a&&0===Object.keys($[0].labels).length||0===a&&Object.keys(e.labels).length>0)&&(0,w.jsxs)("p",{className:b.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,w.jsx)(q,{alertManagerSourceName:s||"",group:e})]},`${JSON.stringify(e.labels)}-group-${a}`))),C&&!$.length&&(ae||(ae=(0,w.jsx)("p",{children:"No results."})))]}):(0,w.jsx)(g.J,{pageId:"groups",children:(0,w.jsx)(p.I,{availableAlertManagers:t})})}},23559:(e,a,t)=>{t.d(a,{h:()=>s});const s=t(47175).C.injectEndpoints({endpoints:e=>({getAlertmanagerChoice:e.query({query:()=>({url:"/api/v1/ngalert"}),providesTags:["AlertmanagerChoice"],transformResponse:e=>e.alertmanagersChoice}),getExternalAlertmanagerConfig:e.query({query:()=>({url:"/api/v1/ngalert/admin_config"}),providesTags:["AlertmanagerChoice"]}),getExternalAlertmanagers:e.query({query:()=>({url:"/api/v1/ngalert/alertmanagers"}),transformResponse:e=>e.data}),saveExternalAlertmanagersConfig:e.mutation({query:e=>({url:"/api/v1/ngalert/admin_config",method:"POST",data:e}),invalidatesTags:["AlertmanagerChoice"]})})})},73615:(e,a,t)=>{t.d(a,{J:()=>n});t(68404);var s=t(37417),r=t(45916);const n=e=>{let{children:a,pageId:t,pageNav:n,isLoading:l}=e;return(0,r.jsx)(s.T,{pageNav:n,navId:t,children:(0,r.jsx)(s.T.Contents,{isLoading:l,children:a})})}},60277:(e,a,t)=>{t.d(a,{q:()=>n});t(68404);var s=t(59196),r=t(45916);const n=e=>{let{actions:a,children:t,fallback:n=!0}=e;return a.some((e=>s.Vt.hasAccess(e,n)))?(0,r.jsx)(r.Fragment,{children:t}):null}},44812:(e,a,t)=>{t.d(a,{F:()=>o});var s=t(52423),r=(t(68404),t(16755)),n=t(39440),l=t(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:a}=e,t=function(e,a){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);const o=(0,r.wW)(c);return(0,l.jsx)(n.t,Object.assign({renderExpandedContent:a?(e,t,r)=>(0,l.jsxs)(l.Fragment,{children:[!(t===r.length-1)&&(0,l.jsx)("div",{className:(0,s.cx)(o.contentGuideline,o.guideline)}),a(e,t,r)]}):void 0,renderPrefixHeader:()=>(0,l.jsx)("div",{className:o.relative,children:(0,l.jsx)("div",{className:(0,s.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,a,t)=>(0,l.jsxs)("div",{className:o.relative,children:[(0,l.jsx)("div",{className:(0,s.cx)(o.topGuideline,o.guideline)}),!(a===t.length-1)&&(0,l.jsx)("div",{className:(0,s.cx)(o.bottomGuideline,o.guideline)})]})},t))},c=e=>({relative:s.css`
    position: relative;
    height: 100%;
  `,guideline:s.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:s.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:s.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:s.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:s.css`
    top: -25px;
    bottom: 0;
  `})},67921:(e,a,t)=>{t.d(a,{I:()=>p});t(68404);var s,r,n,l,i=t(2843),o=t(69066),c=t(39833),d=t(45916);const u=()=>s||(s=(0,d.jsx)(i.b,{title:"No Alertmanager found",severity:"warning",children:"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."})),g=()=>r||(r=(0,d.jsx)(i.b,{title:"Selected Alertmanager not found. Select a different Alertmanager.",severity:"warning",children:"Selected Alertmanager no longer exists or you may not have permission to access it."})),p=e=>{let{availableAlertManagers:a}=e;const[t,s]=(0,o.k)(a),r=a.length>0;return(0,d.jsx)("div",{children:r?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.P,{onChange:s,dataSources:a}),n||(n=(0,d.jsx)(g,{}))]}):l||(l=(0,d.jsx)(u,{}))})}},37972:(e,a,t)=>{t.d(a,{F:()=>j});var s,r,n,l=t(52423),i=t(82897),o=t(68404),c=t(68522),d=t(93250),u=t(16755),g=t(99500),p=t(83744),m=t(21888),h=t(4645),x=t(40833),b=t(45916);const j=e=>{let{className:a,onFilterChange:t,defaultQueryString:l}=e;const j=(0,u.wW)(f),v=(0,o.useMemo)((()=>(0,i.debounce)((e=>{(0,d.PN)(x.z7.filterByLabel);const a=e.target;t(a.value)}),600)),[t]);(0,o.useEffect)((()=>v.cancel()),[v]);const y=s||(s=(0,b.jsx)(g.J,{name:"search"}));return(0,b.jsxs)("div",{className:a,children:[(0,b.jsx)(p._,{children:(0,b.jsxs)(c.Stack,{gap:.5,children:[r||(r=(0,b.jsx)("span",{children:"Search by label"})),(0,b.jsx)(m.u,{content:n||(n=(0,b.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,b.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,b.jsx)(g.J,{className:j.icon,name:"info-circle",size:"sm"})})]})}),(0,b.jsx)(h.I,{placeholder:"Search",defaultValue:l,onChange:v,"data-testid":"search-query-input",prefix:y,className:j.inputWidth})]})},f=e=>({icon:l.css`
    margin-right: ${e.spacing(.5)};
  `,inputWidth:l.css`
    width: 340px;
    flex-grow: 0;
  `})},40711:(e,a,t)=>{t.d(a,{G:()=>i});t(68404);var s=t(8157),r=t(54743),n=t(45916);const l={[s.Z9.Active]:"bad",[s.Z9.Unprocessed]:"neutral",[s.Z9.Suppressed]:"info"},i=e=>{let{state:a}=e;return(0,n.jsx)(r.i,{state:l[a],children:a})}},69066:(e,a,t)=>{t.d(a,{k:()=>o});var s=t(68404),r=t(19512),n=t(78130),l=t(74846),i=t(43271);function o(e){const[a,t]=(0,r.K)(),o=function(e){return(0,s.useCallback)((a=>e.map((e=>e.name)).includes(a)),[e])}(e),c=(0,s.useCallback)((e=>{o(e)&&(e===i.GC?(n.Z.delete(l.de),t({[l.c4]:null})):(n.Z.set(l.de,e),t({[l.c4]:e})))}),[t,o]),d=a[l.c4];if(d&&"string"==typeof d)return o(d)?[d,c]:[void 0,c];const u=n.Z.get(l.de);return u&&"string"==typeof u&&o(u)?(c(u),[u,c]):o(i.GC)?[i.GC,c]:[void 0,c]}},46150:(e,a,t)=>{t.d(a,{k:()=>n});var s=t(68404),r=t(43271);function n(e){return(0,s.useMemo)((()=>(0,r.LE)(e)),[e])}}}]);
//# sourceMappingURL=AlertGroups.0fb95d41e7b18ae7c833.js.map