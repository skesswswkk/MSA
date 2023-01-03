"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[529],{62232:(e,a,t)=>{t.d(a,{Z:()=>I,v:()=>U});var n,r,s,o,i=t(52423),l=t(68404),d=t(54316),h=t(25004),c=t(65737),u=t(3218),m=t(71980),p=t(65678),g=t(37625),b=t(83744),f=t(82261),x=t(48239),v=t(14402),j=t(70917),C=t(8006),w=t(50191),y=t(71438),z=t(35448),S=t(89103),k=t(13498),D=t(45916);function O(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const P=[{value:"",label:(0,z.t)("shared-preferences.theme.default-label","Default")},{value:"dark",label:(0,z.t)("shared-preferences.theme.dark-label","Dark")},{value:"light",label:(0,z.t)("shared-preferences.theme.light-label","Light")}];const T=Boolean(c.v.featureToggles.internationalization);class U extends l.PureComponent{constructor(e){super(e),O(this,"service",void 0),O(this,"onSubmitForm",(async()=>{if(!this.props.onConfirm||await this.props.onConfirm()){const{homeDashboardUID:e,theme:a,timezone:t,weekStart:n,locale:r,queryHistory:s}=this.state;await this.service.update({homeDashboardUID:e,theme:a,timezone:t,weekStart:n,locale:r,queryHistory:s}),window.location.reload()}})),O(this,"onThemeChanged",(e=>{this.setState({theme:e})})),O(this,"onTimeZoneChanged",(e=>{e&&this.setState({timezone:e})})),O(this,"onWeekStartChanged",(e=>{this.setState({weekStart:e})})),O(this,"onHomeDashboardChanged",(e=>{this.setState({homeDashboardUID:e})})),O(this,"onLocaleChanged",(e=>{this.setState({locale:e})})),this.service=new k.y(e.resourceUri),this.state={theme:"",timezone:"",weekStart:"",locale:"",queryHistory:{homeTab:""}}}async componentDidMount(){const e=await this.service.load();this.setState({homeDashboardUID:e.homeDashboardUID,theme:e.theme,timezone:e.timezone,weekStart:e.weekStart,locale:e.locale,queryHistory:e.queryHistory})}render(){const{theme:e,timezone:a,weekStart:t,homeDashboardUID:i,locale:l}=this.state,{disabled:c}=this.props,w=N(),k=function(){const e=S.lE.map((e=>({value:e.code,label:e.name})));return[{value:"",label:(0,z.t)("common.locale.default","Default")},...e]}();return(0,D.jsx)(u.l,{onSubmit:this.onSubmitForm,children:()=>{var u;return(0,D.jsxs)(m.C,{label:n||(n=(0,D.jsx)(z.cC,{i18nKey:"shared-preferences.title",children:"Preferences"})),disabled:c,children:[(0,D.jsx)(p.g,{label:(0,z.t)("shared-preferences.fields.theme-label","UI Theme"),children:(0,D.jsx)(g.S,{options:P,value:null===(u=P.find((a=>a.value===e)))||void 0===u?void 0:u.value,onChange:this.onThemeChanged})}),(0,D.jsx)(p.g,{label:(0,D.jsx)(b._,{htmlFor:"home-dashboard-select",children:(0,D.jsx)("span",{className:w.labelText,children:r||(r=(0,D.jsx)(z.cC,{i18nKey:"shared-preferences.fields.home-dashboard-label",children:"Home Dashboard"}))})}),"data-testid":"User preferences home dashboard drop down",children:(0,D.jsx)(y.o,{value:i,onChange:e=>{var a;return this.onHomeDashboardChanged(null!==(a=null==e?void 0:e.uid)&&void 0!==a?a:"")},defaultOptions:!0,isClearable:!0,placeholder:(0,z.t)("shared-preferences.fields.home-dashboard-placeholder","Default dashboard"),inputId:"home-dashboard-select"})}),(0,D.jsx)(p.g,{label:(0,z.t)("shared-dashboard.fields.timezone-label","Timezone"),"data-testid":h.wl.components.TimeZonePicker.containerV2,children:(0,D.jsx)(f.O,{includeInternal:!0,value:a,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})}),(0,D.jsx)(p.g,{label:(0,z.t)("shared-preferences.fields.week-start-label","Week start"),"data-testid":h.wl.components.WeekStartPicker.containerV2,children:(0,D.jsx)(x.z,{value:t,onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})}),T?(0,D.jsx)(p.g,{label:(0,D.jsxs)(b._,{htmlFor:"locale-select",children:[(0,D.jsx)("span",{className:w.labelText,children:s||(s=(0,D.jsx)(z.cC,{i18nKey:"shared-preferences.fields.locale-label",children:"Language"}))}),(0,D.jsx)(v.a,{featureState:d.CQ.beta})]}),"data-testid":"User preferences language drop down",children:(0,D.jsx)(j.Ph,{value:k.find((e=>e.value===l)),onChange:e=>{var a;return this.onLocaleChanged(null!==(a=e.value)&&void 0!==a?a:"")},options:k,placeholder:(0,z.t)("shared-preferences.fields.locale-placeholder","Choose language"),inputId:"locale-select"})}):null,(0,D.jsx)("div",{className:"gf-form-button-row",children:(0,D.jsx)(C.zx,{type:"submit",variant:"primary","data-testid":h.wl.components.UserProfile.preferencesSaveButton,children:o||(o=(0,D.jsx)(z.cC,{i18nKey:"common.save",children:"Save"}))})})]})}})}}const I=U,N=(0,w.B)((()=>({labelText:i.css`
      margin-right: 6px;
    `})))},79375:(e,a,t)=>{t.r(a),t.d(a,{OrgDetailsPage:()=>y,default:()=>S});var n,r=t(68404),s=t(36635),o=t(54761),i=t(37417),l=t(62232),d=t(68374),h=t(85829),c=t(64850),u=t(8105),m=t(3218),p=t(71980),g=t(65678),b=t(4645),f=t(8006),x=t(45916);const v=e=>{let{onSubmit:a,orgName:t}=e;const r=d.Vt.hasPermission(c.bW.OrgsWrite);return(0,x.jsx)(m.l,{defaultValues:{orgName:t},onSubmit:e=>{let{orgName:t}=e;return a(t)},children:e=>{let{register:a}=e;return(0,x.jsxs)(p.C,{label:"Organization profile",disabled:!r,children:[(0,x.jsx)(g.g,{label:"Organization name",children:(0,x.jsx)(b.I,Object.assign({id:"org-name-input",type:"text"},a("orgName",{required:!0})))}),n||(n=(0,x.jsx)(f.zx,{type:"submit",children:"Update organization name"}))]})}})};var j=t(6551),C=t(66347);function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class y extends r.PureComponent{constructor(){super(...arguments),w(this,"onUpdateOrganization",(e=>{this.props.setOrganizationName(e),this.props.updateOrganization()})),w(this,"handleConfirm",(()=>new Promise((e=>{d.h$.publish(new u.VJ({title:"Confirm preferences update",text:"This will update the preferences for the whole organization. Are you sure you want to update the preferences?",yesText:"Save",yesButtonVariant:"primary",onConfirm:async()=>e(!0),onDismiss:async()=>e(!1)}))}))))}async componentDidMount(){await this.props.loadOrganization()}render(){const{navModel:e,organization:a}=this.props,t=0===Object.keys(a).length,n=d.Vt.hasPermission(c.bW.OrgsRead),r=d.Vt.hasPermission(c.bW.OrgsPreferencesRead),s=d.Vt.hasPermission(c.bW.OrgsPreferencesWrite);return(0,x.jsx)(i.T,{navModel:e,children:(0,x.jsx)(i.T.Contents,{isLoading:t,children:!t&&(0,x.jsxs)(o.wc,{spacing:"lg",children:[n&&(0,x.jsx)(v,{onSubmit:this.onUpdateOrganization,orgName:a.name}),r&&(0,x.jsx)(l.Z,{resourceUri:"org",disabled:!s,onConfirm:this.handleConfirm})]})})})}}const z={loadOrganization:j.RF,setOrganizationName:C.xR,updateOrganization:j.FV},S=(0,s.connect)((function(e){return{navModel:(0,h.ht)(e.navIndex,"org-settings"),organization:e.organization.organization}}),z)(y)}}]);
//# sourceMappingURL=OrgDetailsPage.b14ed5e80332f28d89df.js.map