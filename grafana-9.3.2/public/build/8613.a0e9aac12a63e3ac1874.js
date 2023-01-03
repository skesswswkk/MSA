"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8613],{44812:(e,r,n)=>{n.d(r,{F:()=>o});var t=n(52423),l=(n(68404),n(16755)),s=n(39440),a=n(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:r}=e,n=function(e,r){if(null==e)return{};var n,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,i);const o=(0,l.wW)(d);return(0,a.jsx)(s.t,Object.assign({renderExpandedContent:r?(e,n,l)=>(0,a.jsxs)(a.Fragment,{children:[!(n===l.length-1)&&(0,a.jsx)("div",{className:(0,t.cx)(o.contentGuideline,o.guideline)}),r(e,n,l)]}):void 0,renderPrefixHeader:()=>(0,a.jsx)("div",{className:o.relative,children:(0,a.jsx)("div",{className:(0,t.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,r,n)=>(0,a.jsxs)("div",{className:o.relative,children:[(0,a.jsx)("div",{className:(0,t.cx)(o.topGuideline,o.guideline)}),!(r===n.length-1)&&(0,a.jsx)("div",{className:(0,t.cx)(o.bottomGuideline,o.guideline)})]})},n))},d=e=>({relative:t.css`
    position: relative;
    height: 100%;
  `,guideline:t.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:t.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:t.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:t.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:t.css`
    top: -25px;
    bottom: 0;
  `})},41058:(e,r,n)=>{n.d(r,{V:()=>a});n(68404);var t,l=n(99500),s=n(45916);const a=e=>{let{namespace:r,group:n}=e;return n?(0,s.jsxs)(s.Fragment,{children:[r," ",t||(t=(0,s.jsx)(l.J,{name:"angle-right"}))," ",n]}):(0,s.jsx)(s.Fragment,{children:r})}},58613:(e,r,n)=>{n.d(r,{i:()=>ne});var t,l,s,a,i=n(52423),o=n(68404),d=n(16755),u=n(42949),c=n(97846),p=n(74846),m=n(80458),x=n(39440),h=n(44812),g=n(47628),v=n(41058),f=n(98492),b=n(70356),j=n(274),w=n(65737),y=n(21888),C=n(8006),$=n(11818),R=n(54761),E=n(2024),S=n(47900),N=n(62847),z=n(64850),G=n(12134),k=n(64834),V=n(43271),M=n(23691),W=n(55357),F=n(45916);function L(e){let{children:r}=e;const n=(0,d.l4)().breakpoints.values.xxl,[t,l]=(0,o.useState)((s=n,window.matchMedia(`(max-width: ${s}px)`).matches));var s;const a=(0,d.wW)(A);return(0,N.e)({breakpoint:n,onChange:e=>{l(e.matches)}}),t?null:(0,F.jsx)("div",{className:a.buttonText,children:r})}const U=e=>{let{rule:r,rulesSource:n}=e;const i=(0,z.I0)(),u=(0,b.TH)(),c=(0,S.iG)(),p=(0,d.wW)(A),{namespace:x,group:h,rulerRule:g}=r,[v,f]=(0,o.useState)(),N=(0,V.EG)(n),U=(0,m.Pc)(r.rulerRule)&&Boolean(r.rulerRule.grafana_alert.provenance),I=[],P=(0,m.Jq)(h),{isEditable:_,isRemovable:D}=(0,G.M)(N,g),T=u.pathname+u.search,O=u.pathname.endsWith("/view");const B=()=>{if(v&&v.rulerRule){const e=W.Zk((0,V.EG)(v.namespace.rulesSource),v.namespace.name,v.group.name,v.rulerRule);i((0,k.hS)(e,{navigateTo:O?"/alerting/list":void 0})),f(void 0)}},q=()=>{if((0,V.jq)(n)){const{appUrl:e,appSubUrl:t}=w.v;return`${""!==t?`${e}${t}/`:w.v.appUrl}alerting/${`${encodeURIComponent(n.name)}/${encodeURIComponent(r.name)}`}/find`}return window.location.href.split("?")[0]};if(O||I.push((0,F.jsx)(y.u,{placement:"top",content:"View",children:(0,F.jsx)(C.Qj,{className:p.button,size:"xs",variant:"secondary",icon:"eye",href:(0,M.V2)(n,r,T),children:t||(t=(0,F.jsx)(L,{children:"View"}))},"view")})),_&&g&&!P&&!U){const e=(0,V.EG)(n),r=W.Zk(e,x.name,h.name,g),t=j.Cj.renderUrl(`${w.v.appSubUrl}/alerting/${encodeURIComponent(W.$V(r))}/edit`,{returnTo:T});O&&I.push((0,F.jsx)($.m,{icon:"copy",onClipboardError:e=>{c.error("Error while copying URL",e)},className:p.button,size:"sm",getText:q,children:"Copy link to rule"},"copy")),I.push((0,F.jsx)(y.u,{placement:"top",content:"Edit",children:(0,F.jsx)(C.Qj,{className:p.button,size:"xs",variant:"secondary",icon:"pen",href:t,children:l||(l=(0,F.jsx)(L,{children:"Edit"}))},"edit")}))}return D&&g&&!P&&!U&&I.push((0,F.jsx)(y.u,{placement:"top",content:"Delete",children:(0,F.jsx)(C.zx,{className:p.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>f(r),children:s||(s=(0,F.jsx)(L,{children:"Delete"}))},"delete")})),I.length?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:p.wrapper,children:(0,F.jsx)(R.Lh,{width:"auto",children:I.length?I.map(((e,r)=>(0,F.jsx)("div",{children:e},r))):a||(a=(0,F.jsx)("div",{}))})}),!!v&&(0,F.jsx)(E.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:B,onDismiss:()=>f(void 0)})]}):null};const A=e=>({wrapper:i.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,button:i.css`
    height: 24px;
    font-size: ${e.typography.size.sm};
    svg {
      margin-right: 0;
    }
  `,buttonText:i.css`
    margin-left: 8px;
  `});var I=n(99500),P=n(9751);function _(e){let{rule:r}=e;const n=(0,d.wW)(D),{exceedsLimit:t}=(0,o.useMemo)((()=>(0,P.f)(r.group.interval)),[r.group.interval]);return t?(0,F.jsx)(y.u,{theme:"error",content:(0,F.jsxs)("div",{children:["A minimum evaluation interval of"," ",(0,F.jsx)("span",{className:n.globalLimitValue,children:w.v.unifiedAlerting.minInterval})," has been configured in Grafana and will be used instead of the ",r.group.interval," interval configured for the Rule Group."]}),children:(0,F.jsx)(I.J,{name:"stopwatch-slash",className:n.icon})}):null}function D(e){return{globalLimitValue:i.css`
      font-weight: ${e.typography.fontWeightBold};
    `,icon:i.css`
      fill: ${e.colors.warning.text};
    `}}var T=n(90062),O=n(95018),B=n(57306),q=n(81887),J=n(93991),H=n(47286),Z=n(39778);const Q=e=>{let{rule:r}=e;const n=(0,d.wW)(K),{namespace:{rulesSource:t}}=r,l=Object.entries(r.annotations).filter((e=>{let[r,n]=e;return!!n.trim()}));return(0,F.jsxs)("div",{children:[(0,F.jsx)(B.f,{rule:r,rulesSource:t}),(0,F.jsxs)("div",{className:n.wrapper,children:[(0,F.jsxs)("div",{className:n.leftSide,children:[(0,F.jsx)(Y,{rule:r}),!!r.labels&&!!Object.keys(r.labels).length&&(0,F.jsx)(O.C,{label:"Labels",horizontal:!0,children:(0,F.jsx)(T.s,{labels:r.labels})}),(0,F.jsx)(H.C,{rulesSource:t,rule:r,annotations:l}),(0,F.jsx)(q.J,{annotations:l})]}),(0,F.jsx)("div",{className:n.rightSide,children:(0,F.jsx)(J.C,{rulesSource:t,rule:r})})]}),(0,F.jsx)(Z.M,{rule:r,itemsDisplayLimit:15})]})},Y=e=>{let r,{rule:n}=e,t=n.group.interval;var l;(0,m.yF)(n.rulerRule)||(r=null===(l=n.rulerRule)||void 0===l?void 0:l.for);return(0,F.jsxs)(F.Fragment,{children:[t&&(0,F.jsxs)(O.C,{label:"Evaluate",horizontal:!0,children:["Every ",t]}),r&&(0,F.jsx)(O.C,{label:"For",horizontal:!0,children:r})]})},K=e=>({wrapper:i.css`
    display: flex;
    flex-direction: row;

    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:i.css`
    flex: 1;
  `,rightSide:i.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var X,ee=n(84438),re=n(31244);const ne=e=>{let{rules:r,className:n,showGuidelines:t=!1,emptyMessage:l="No rules found.",showGroupColumn:s=!1,showSummaryColumn:a=!1}=e;const c=(0,d.wW)(te),p=(0,i.cx)(c.wrapper,n,{[c.wrapperMargin]:t}),m=(0,o.useMemo)((()=>r.map(((e,r)=>({id:`${e.namespace.name}-${e.group.name}-${e.name}-${r}`,data:e})))),[r]),g=le(a,s);if(!r.length)return(0,F.jsx)("div",{className:(0,i.cx)(p,c.emptyMessage),children:l});const v=t?h.F:x.t;return(0,F.jsx)("div",{className:p,"data-testid":"rules-table",children:(0,F.jsx)(v,{cols:g,isExpandable:!0,items:m,renderExpandedContent:e=>{let{data:r}=e;return(0,F.jsx)(Q,{rule:r})},pagination:{itemsPerPage:u.gN},paginationStyles:c.pagination})})},te=e=>({wrapperMargin:i.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:i.css`
    padding: ${e.spacing(1)};
  `,wrapper:i.css`
    width: auto;
    border-radius: ${e.shape.borderRadius()};
  `,pagination:i.css`
    display: flex;
    margin: 0;
    padding-top: ${e.spacing(1)};
    padding-bottom: ${e.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${e.colors.border.strong};
    border-right: 1px solid ${e.colors.border.strong};
    border-bottom: 1px solid ${e.colors.border.strong};
  `});function le(e,r){const{hasRuler:n,rulerRulesLoaded:t}=(0,c.h)();return(0,o.useMemo)((()=>{const l=[{id:"state",label:"State",renderCell:e=>{let{data:r}=e;const{namespace:l}=r,{rulesSource:s}=l,{promRule:a,rulerRule:i}=r,o=!(!(n(s)&&t(s)&&a)||i),d=!(!(n(s)&&t(s)&&i)||a);return(0,F.jsx)(re.p,{rule:r,isDeleting:o,isCreating:d})},size:"165px"},{id:"name",label:"Name",renderCell:e=>{let{data:r}=e;return r.name},size:5},{id:"provisioned",label:"",renderCell:e=>{let{data:r}=e;const n=r.rulerRule;if(!(0,m.Pc)(n))return null;return n.grafana_alert.provenance?X||(X=(0,F.jsx)(g.C0,{})):null},size:"100px"},{id:"warnings",label:"",renderCell:e=>{let{data:r}=e;return(0,F.jsx)(_,{rule:r})},size:"45px"},{id:"health",label:"Health",renderCell:e=>{let{data:{promRule:r,group:n}}=e;return r?(0,F.jsx)(ee.V,{rule:r}):null},size:"75px"}];return e&&l.push({id:"summary",label:"Summary",renderCell:e=>{var r;let{data:n}=e;return(0,F.jsx)(f.Z,{input:null!==(r=n.annotations[p.q6.summary])&&void 0!==r?r:""})},size:5}),r&&l.push({id:"group",label:"Group",renderCell:e=>{let{data:r}=e;const{namespace:n,group:t}=r;return"default"===t.name?(0,F.jsx)(v.V,{namespace:n.name}):(0,F.jsx)(v.V,{namespace:n.name,group:t.name})},size:5}),l.push({id:"actions",label:"Actions",renderCell:e=>{let{data:r}=e;return(0,F.jsx)(U,{rule:r,rulesSource:r.namespace.rulesSource})},size:"290px"}),l}),[e,r,n,t])}},65673:(e,r,n)=>{n.d(r,{W:()=>o});var t=n(68404),l=n(64850),s=n(64834),a=n(5302),i=n(76938);function o(e){const r=(0,l.I0)(),n=(0,i._)((e=>e.folders));if((0,t.useEffect)((()=>{e&&r((0,s.sw)(e))}),[r,e]),e){const r=n[e]||a.oq;return{folder:r.result,loading:r.loading}}return{loading:!1}}},97846:(e,r,n)=>{n.d(r,{h:()=>a});var t=n(68404),l=n(43271),s=n(76938);function a(){const e=(0,s._)((e=>e.rulerRules));return{hasRuler:(0,t.useCallback)((r=>{var n;const t="string"==typeof r?r:r.name;return t===l.GC||!(null===(n=e[t])||void 0===n||!n.result)}),[e]),rulerRulesLoaded:(0,t.useCallback)((r=>{var n;const t=(0,l.EG)(r),s=null===(n=e[t])||void 0===n?void 0:n.result;return Boolean(s)}),[e])}}},12134:(e,r,n)=>{n.d(r,{M:()=>o});var t=n(59196),l=n(96535),s=n(80458),a=n(65673),i=n(76938);function o(e,r){var n,o,d;const u=(0,i._)((e=>e.dataSources)),c=r&&(0,s.Pc)(r)?r.grafana_alert.namespace_uid:void 0,p=(0,l.Bz)(e),{folder:m,loading:x}=(0,a.W)(c);if(!r)return{isEditable:!1,isRemovable:!1,loading:!1};if((0,s.Pc)(r)){if(!c)throw new Error(`Rule ${r.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);if(!m)return{isEditable:!1,isRemovable:!1,loading:x};const e=m.canSave;return{isEditable:t.Vt.hasAccessInMetadata(p.update,m,e),isRemovable:t.Vt.hasAccessInMetadata(p.delete,m,e),loading:x}}const h=Boolean(null===(n=u[e])||void 0===n||null===(o=n.result)||void 0===o?void 0:o.rulerConfig);return{isEditable:t.Vt.hasAccess(p.update,t.Vt.isEditor)&&h,isRemovable:t.Vt.hasAccess(p.delete,t.Vt.isEditor)&&h,loading:null===(d=u[e])||void 0===d?void 0:d.loading}}}}]);
//# sourceMappingURL=8613.a0e9aac12a63e3ac1874.js.map