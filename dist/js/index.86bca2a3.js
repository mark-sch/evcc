(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={index:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("9e0e")},"0efd":function(t,e,a){},"2bec":function(t,e,a){},"309d":function(t,e,a){},4322:function(t,e,a){"use strict";a("0efd")},"608f":function(t,e,a){"use strict";a("2bec")},"9e0e":function(t,e,a){"use strict";a.r(e);a("b19f"),a("ab8b"),a("4989");var s=a("2b0e"),i=a("bc3a"),n=a.n(i),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app d-flex flex-column justify-content-between"},[a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav mr-auto"}),a("div",{staticClass:"navbar-nav"},[t.hasSunny5Menu()?a("a",{staticClass:"nav-item nav-link pb-1",attrs:{href:"../smartbox/"}},[t._v("Home ")]):t._e(),a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/"}},[t._v("EVCC")]),a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/config"}},[t._v("EVCC-Config")]),t.hasSunny5Menu()?a("span",{domProps:{innerHTML:t._s(t.getVisLink())}}):t._e(),t.hasSunny5Menu()?a("span",{domProps:{innerHTML:t._s(t.getGrafanaLink())}}):t._e(),t.hasSunny5Menu()?a("span",{domProps:{innerHTML:t._s(t.getLoginLink())}}):t._e()],1)])])]),a("router-view")],1),a("Footer",{attrs:{version:t.version}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"https://www.sunny5.de",target:"_new"}},[a("img",{attrs:{src:"ico/favicon-32x32.png",alt:"Sunny5 Logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("ad3d"),c=a("ecee"),d=a("a206"),u=a("9e52"),m=a("8475"),h=a("39f0"),v=a("8718"),p=a("7c8d"),f=a("c6b3"),g=a("8668"),b=a("a14b"),C=a("5dae"),_=a("8560"),y=a("bf13"),w=a("af2b"),S=a("a938"),x=a("f303"),k=a("7116"),M=a("fdca"),D=a("6c06"),T=a("91fb"),P=a("184c"),L=a("ba01"),N=a("adbc");c["c"].add(d["faArrowDown"],u["faArrowUp"],m["faBatteryEmpty"],h["faBatteryFull"],v["faBatteryHalf"],p["faBatteryQuarter"],f["faBatteryThreeQuarters"],g["faChevronDown"],b["faChevronUp"],C["faClock"],_["faExclamationTriangle"],y["faLeaf"],w["faSun"],S["faPlug"],x["faTemperatureHigh"],k["faTemperatureLow"],D["faStar"],M["faThermometerHalf"],T["faHeart"],P["faGift"],L["faBox"],N["faExclamationCircle"]),s["a"].component("fa-icon",l["a"]);var E={data:function(){return{fmtLimit:1e3,fmtDigits:1}},methods:{round:function(t,e){var a=10**e;return(Math.round(t*a)/a).toFixed(e)},fmt:function(t){return void 0===t||null===t?0:(t=Math.abs(t),t>=this.fmtLimit?this.round(t/1e3,this.fmtDigits):this.round(t,0))},fmtCurrent:function(t){return void 0===t||null===t?0:(t=Math.abs(t),t==this.round(t,0)?t:this.round(t,1))},fmtUnit:function(t){return Math.abs(t)>=this.fmtLimit?"k":""},fmtDuration:function(t){if(t<=0||null==t)return"—";var e="0"+t%60,a="0"+Math.floor(t/60)%60,s=""+Math.floor(t/3600);return s.length<2&&(s="0"+s),s+":"+a.substr(-2)+":"+e.substr(-2)},fmtShortDuration:function(t){if(t<=0||null==t)return"—";var e,a=Math.floor(t/60)%60,s=Math.floor(t/3600);if(s>=1)a="0"+a,e=s+":"+a.substr(-2);else{var i="0"+t%60;e=a+":"+i.substr(-2)}return e},fmtShortDurationUnit:function(t){if(t<=0||null==t)return"";var e=Math.floor(t/3600);return e>=1?"h":"m"},getVisLink:function(){let t=document.location.origin.replace("2020",2020).replace("sunny5","sunny5")+"/vis/#Heatpump",e=`<a class="nav-item nav-link pb-1" href="${t}">Energie-Monitor</a>`;return e},getGrafanaLink:function(){let t=document.location.origin.replace("2020",2020).replace("sunny5","sunny5")+"/grafana/",e=`<a class="nav-item nav-link pb-1" href="${t}">Energie-Chart</a>`;return e},getLoginLink:function(){return document.location.href.indexOf("auth=1")>-1?'<a class="nav-item nav-link pb-1" href="../smartbox/logout">Logout</a>':'<a class="nav-item nav-link pb-1" href="../smartbox/login">Login</a>'},hasSunny5Menu:function(){return"true"==window.evcc.hasSunny5Menu},fmtAbsoluteDate:function(t){return new Intl.DateTimeFormat("de-DE",{weekday:"short",hour:"numeric",minute:"numeric"}).format(t)},fmtRelativeTime:function(t){var e={year:31536e6,month:2628e6,day:864e5,hour:36e5,minute:6e4,second:1e3},a=new Intl.RelativeTimeFormat("de",{numeric:"auto",style:"narrow"}),s=(t,s=new Date)=>{var i=t-s;for(var n in e)if(Math.abs(i)>e[n]||"second"==n)return a.format(Math.round(i/e[n]),n)};return s(t)}}},A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"py-3 py-md-5 mt-3 mt-md-5 border-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("p",{staticClass:"text-muted"},[a("Version",t._b({},"Version",t.version,!1))],1)]),t._m(0)])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 text-right"},[a("small",{staticClass:"text-muted"},[a("a",{attrs:{href:"https://github.com/mark-sch/evcc",target:"_blank"}},[t._v("© 2021 Think5 GmbH, andig/evcc et al.")])])])}],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("small",{staticClass:"text-black"},[t.newVersionAvailable?a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showModal.apply(null,arguments)}}},[a("fa-icon",{staticClass:"icon mr-1",attrs:{icon:"gift"}}),t._v("Update"),a("span",{staticClass:"d-none d-sm-inline"},[t._v(" verfügbar")]),t._v(": "+t._s(t.available)+" ")],1):a("a",{attrs:{href:t.releaseNotesUrl(t.installed),target:"_blank"}},[t._v(" Version "+t._s(t.installed)+" ")])]),a("transition",{attrs:{name:"fade"}},[t.modalActive?a("div",{staticClass:"dialog",attrs:{id:"updateModal",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title font-weight-bold"},[t._v("Update verfügbar")]),a("button",{staticClass:"close",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t.updateStarted?a("div",[a("p",[t._v("Nach der Aktualisierung wird evcc neu gestartet.")]),a("div",{staticClass:"progress my-3"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",style:{width:t.uploadProgress+"%"},attrs:{role:"progressbar"}})]),a("p",[t._v(t._s(t.updateStatus)+t._s(t.uploadMessage))])]):a("div",[a("p",[a("small",[t._v("Aktuell installierte Version: "+t._s(t.installed))])]),t.releaseNotes?a("div",{domProps:{innerHTML:t._s(t.releaseNotes)}}):a("p",[t._v(" Keine Releasenotes verfügbar. Mehr Informationen zur neuen Version findest du "),a("a",{attrs:{href:t.releaseNotesUrl(t.available)}},[t._v("hier")]),t._v(". ")])])]),a("div",{staticClass:"modal-footer d-flex justify-content-between"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[t._v(" Abbrechen ")]),a("div",[t.hasUpdater?a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.update}},[t.updateStarted?a("span",[a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Akualisieren ")]):a("span",[t._v("Jetzt aktualisieren")])]):a("a",{staticClass:"btn btn-primary",attrs:{href:t.releaseNotesUrl(t.available)}},[t._v(" Version ")]),a("a",{staticClass:"btn btn-primary",attrs:{href:t.installUrl()}},[t._v(" Update ")])])])])])]):t._e()])],1)},$=[],O={name:"Version",props:{installed:String,available:String,releaseNotes:String,hasUpdater:Boolean,uploadMessage:String,uploadProgress:Number},data:function(){return{modalActive:!1,updateStarted:!1,updateStatus:""}},methods:{showModal:function(){this.modalActive=!0},closeModal:function(){this.modalActive=!1},update:async function(){try{await n.a.post("update"),this.updateStatus="Aktualisierung gestartet: ",this.updateStarted=!0}catch(t){this.updateStatus="Aktualisierung nicht möglich: "+t}},releaseNotesUrl:function(t){return"https://github.com/mark-sch/evcc/releases/tag/"+t},installUrl:function(){return"/smartbox/terminal?type=evccupdate"}},computed:{newVersionAvailable:function(){return this.available&&"[[.Version]]"!=this.installed&&"0.0.1-alpha"!=this.installed&&this.available!=this.installed}}},U=O,j=(a("b392"),a("2877")),z=Object(j["a"])(U,V,$,!1,null,"0c34748e",null),H=z.exports,I={name:"Footer",components:{Version:H},props:{version:Object}},W=I,R=(a("608f"),Object(j["a"])(W,A,B,!1,null,"00e09340",null)),F=R.exports;function K(t,e,a){const i=e.shift();t[i]||s["a"].set(t,i,{}),e.length?K(t[i],e,a):a&&"object"===typeof a&&!Array.isArray(a)?t[i]={...t[i],...a}:t[i]=a}const G={state:{loadpoints:[]},update:function(t){Object.keys(t).forEach((function(e){"function"===typeof window.toasts[e]?window.toasts[e]({message:t[e]}):K(G.state,e.split("."),t[e])}))}};var Z=G,J={name:"App",components:{Footer:F},data:function(){return{compact:!1,store:this.$root.$data.store,installedVersion:window.evcc.version}},methods:{connect:function(){const t=window.location,e="https:"==t.protocol?"wss:":"ws:",a=e+"//"+t.hostname+(t.port?":"+t.port:"")+t.pathname+"ws",s=new WebSocket(a),i=this;s.onerror=function(){s.close()},s.onclose=function(){window.setTimeout(i.connect,1e3)},s.onmessage=function(t){try{var e=function(t){return"Msg"+Math.abs(t.split("").reduce((t,e)=>(t=(t<<5)-t+e.charCodeAt(0),t&t),0))},a=JSON.parse(t.data);void 0==window.throttledToasts[e(t.data)]&&(window.throttledToasts[e(t.data)]=Z.update.throttle(1e4)),window.throttledToasts[e(t.data)](a)}catch(s){window.toasts.error(s,t.data)}}}},computed:{version:function(){return{installed:this.installedVersion,available:this.store.state.availableVersion,releaseNotes:this.store.state.releaseNotes,hasUpdater:this.store.state.hasUpdater,uploadMessage:this.store.state.uploadMessage,uploadProgress:this.store.state.uploadProgress}}},created:function(){const t=new URLSearchParams(window.location.search);this.compact=t.get("compact"),this.connect()},mixins:[E]},q=J,Q=(a("e738"),Object(j["a"])(q,r,o,!1,null,"64b7437d",null)),X=Q.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",top:"4rem",right:"0.5rem"},attrs:{"aria-atomic":"true"}},t._l(t.items,(function(t){return a("ToastMessage",{key:t.id,attrs:{item:t,id:"message-id-"+t.id}})})),1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast",attrs:{"data-delay":"10000","data-autohide":!0}},[a("div",{staticClass:"toast-header"},["warn"!=t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-danger",attrs:{icon:"exclamation-triangle"}}),t._v(" Error")],1):t._e(),"warn"==t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-warning",attrs:{icon:"exclamation-triangle"}}),t._v(" Warning")],1):t._e(),t.item.status?a("small",[t._v("HTTP "+t._s(t.item.status))]):t._e(),t._m(0)]),a("div",{staticClass:"toast-body"},[t._v(t._s(t.item.message))])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],st=a("1157"),it=a.n(st),nt={name:"ToastMessage",props:["item"],mounted:function(){const t="#message-id-"+this.item.id;it()(t).toast("show"),it()(t).on("hidden.bs.toast",function(){window.toasts.remove(this.item)}.bind(this))}},rt=nt,ot=Object(j["a"])(rt,et,at,!1,null,null,null),lt=ot.exports,ct={name:"Toasts",components:{ToastMessage:lt},props:{items:Object}},dt=ct,ut=Object(j["a"])(dt,Y,tt,!1,null,null,null),mt=ut.exports,ht=a("8c4f"),vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.configured?a("Site",t._b({},"Site",t.state,!1)):a("div",[a("div",{staticClass:"row py-5"},[a("div",{staticClass:"col12"},[a("p",{staticClass:"h1 pt-5 pb-2 border-bottom"},[t._v("Willkommen bei evcc")]),a("p",{staticClass:"lead pt-2"},[a("b",[t._v("evcc")]),t._v(" ist dient zur flexiblen Ladesteuerung von Elektrofahrzeugen. ")]),a("p",{staticClass:"pt-2"},[t._v(" Es sieht aus, als wäre Dein "),a("b",[t._v("evcc")]),t._v(" noch nicht konfiguriert. Um "),a("b",[t._v("evcc")]),t._v(" zu konfigurieren sind die folgenden Schritte notwendig: ")]),a("ol",{staticClass:"pt-2"},[a("li",[t._v(" Erzeugen einer Konfigurationsdatei mit Namen "),a("code",[t._v("evcc.yaml")]),t._v(". Die Standardkonfiguration "),a("code",[t._v("evcc.dist.yaml")]),t._v(" kann dafür als Vorlage dienen ("),a("a",{attrs:{href:"https://github.com/mark-sch/evcc/blob/master/evcc.dist.yaml"}},[t._v("Download")]),t._v("). ")]),a("li",[t._v("Konfiguration der Wallbox als "),a("code",[t._v("chargers")]),t._v(".")]),a("li",[t._v(" Konfiguration des EVU Zählers und evtl. weiterer Zähler unter "),a("code",[t._v("meters")]),t._v(". ")]),a("li",[t._v(" Konfiguration des Netzanschlusses unter "),a("code",[t._v("site")]),t._v(". In einer Site wird der Netzanschluss mit dem konfigurierten EVU Zähler ("),a("code",[t._v("meter")]),t._v(") verbunden. ")]),a("li",[t._v(" Konfiguration eines Ladepunktes unter "),a("code",[t._v("loadpoints")]),t._v(". In einem Ladepunkt wird die konfigurierte Wallbox ("),a("code",[t._v("charger")]),t._v(") mit dem Ladepunkt verbunden. ")]),a("li",[t._v(" Start von "),a("b",[t._v("evcc")]),t._v(" mit der neu erstellten Konfiguration: "),a("code",[t._v("evcc -c evcc.yaml")])])]),a("p",[t._v("Minimale Beispielkonfiguration für "),a("b",[t._v("evcc")]),t._v(":")]),a("p",[a("code",[a("pre",{staticClass:"mx-3"},[t._v("                uri: localhost:7070 # Adresse für UI\n                interval: 10s # Regelintervall\n                meters:\n                - name: evu-zähler\n                type: ... # Detailkonfiguration des EVU Zählers\n                - name: ladezähler\n                type: ... # Detailkonfiguration des Ladezählers (optional)\n                chargers:\n                - name: wallbox\n                type: ... # Detailkonfiguration der Wallbox\n                site:\n                  title: Home\n                  meters:\n                  grid: evu-zähler # EVU Zähler\n                loadpoints:\n                - title: Ladepunkt # ui display name\n                  charger: wallbox # charger\n                  meters:\n                    charge: ladezähler # Ladezählers (optional)\n              ")])])]),a("p",[t._v(" Viel Spass mit "),a("b",[t._v("evcc")]),t._v("! Bei Problemen kannst Du uns auf "),a("a",{attrs:{href:"https://github.com/mark-sch/evcc/issues"}},[t._v("GitHub")]),t._v(" erreichen. ")])])])])],1)},pt=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-flex col-12 col-md-4 mt-md-4 align-items-end"},[a("p",{staticClass:"h1"},[t._v(t._s(t.siteTitle||"Home"))])]),t.multi?a("div",{staticClass:"col-12 col-md-8 mt-md-4"},[a("SiteDetails",t._b({},"SiteDetails",t.details,!1))],1):t._e()]),a("div",{staticClass:"row d-none d-md-flex border-bottom"}),t.multi?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-block col-md-4"}),a("div",{staticClass:"col-12 col-md-8"},[a("SiteDetails",t._b({},"SiteDetails",t.details,!1))],1)]),t._l(t.loadpoints,(function(e,s){return a("Loadpoint",t._b({key:s,attrs:{id:s,multi:t.multi,pvConfigured:t.pvConfigured}},"Loadpoint",e,!1))}))],2)},gt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md-3 mt-3"},[t.gridPower>0?a("div",{staticClass:"mb-2 value"},[t._v(" Bezug "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-down"}})],1):a("div",{staticClass:"mb-2 value"},[t._v(" Einspeisung "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-up"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.gridPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.gridPower))+"W")])])]),t.pvConfigured?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Erzeugung "),a("fa-icon",{class:{"text-primary":t.pvPower>0,"text-muted":t.pvPower<=0},attrs:{icon:"sun"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.pvPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.pvPower))+"W")])])]):t._e(),t.batteryConfigured?a("div",{staticClass:"d-md-block col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Batterie ("+t._s(t.batterySoC)+"%) "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:t.batteryIcon}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.batteryPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.batteryPower))+"W")])])]):t._e(),t.pvConfigured?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Verbrauch "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"plug"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.consumptionPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.consumptionPower))+"W")])])]):t._e()])},Ct=[];const _t=20,yt=["battery-empty","battery-quarter","battery-half","battery-three-quarters","battery-full"];var wt={name:"SiteDetails",props:{gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,consumptionPower:Number,batterySoC:Number,prioritySoC:Number},data:function(){return{iconIdx:0}},mixins:[E],computed:{batteryIcon:function(){return Math.abs(this.batteryPower)<_t?this.batterySoC<30?yt[0]:this.batterySoC<50?yt[1]:this.batterySoC<70?yt[2]:this.batterySoC<90?yt[3]:yt[4]:yt[this.iconIdx]}},mounted:function(){window.setInterval(()=>{this.batteryPower>_t?--this.iconIdx<0&&(this.iconIdx=yt.length-1):this.batteryPower<_t&&++this.iconIdx>=yt.length&&(this.iconIdx=0)},1e3)}},St=wt,xt=Object(j["a"])(St,bt,Ct,!1,null,null,null),kt=xt.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.multi?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 d-md-flex mt-3 mt-md-5 align-items-end"},[a("span",{staticClass:"h1 align-bottom"},[t._v(t._s(t.title||"Ladepunkt"))])]),a("div",{staticClass:"col-12 col-md-8 d-none d-md-block mt-3 mt-md-5"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1),a("div",{staticClass:"col-12 d-md-none"},[a("div",{staticClass:"row mt-3 pb-3 bg-light"},[a("div",{staticClass:"col-12 mt-3"},[a("Mode",{staticClass:"w-100",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-12 mt-3"},[a("Soc",{staticClass:"w-100",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e()])])]):t._e(),t.multi?t._e():a("div",{staticClass:"row d-none d-md-flex mt-5 py-3 pb-4 text-center bg-light"},[a("div",{staticClass:"mt-3",class:{"col-md-6":t.hasTargetSoC,"col-md-12":!t.hasTargetSoC}},[a("Mode",{attrs:{mode:t.mode,pvConfigured:t.pvConfigured,caption:!0},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-md-6 mt-3"},[a("Soc",{attrs:{soc:t.targetSoC,levels:t.socLevels,caption:!0},on:{updated:t.setTargetSoC}})],1):t._e()]),t.multi?t._e():a("div",{staticClass:"row d-md-none mt-2 pb-3 bg-light"},[a("div",{staticClass:"col-12 mt-3"},[a("Mode",{staticClass:"w-100",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-12 mt-3"},[a("Soc",{staticClass:"w-100",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e()]),t.multi?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 d-none d-md-flex mt-3 mt-md-5"},[a("span",{staticClass:"h1"},[t._v(t._s(t.title||"Ladepunkt"))])]),t.remoteDisabled?a("div",{staticClass:"col-12 col-md-8 d-flex d-md-flex mt-3 mt-md-5 pt-3"},[a("h5",{staticClass:"w-100"},["soft"==t.remoteDisabled?a("span",{staticClass:"badge badge-warning w-100"},[t._v(" "+t._s(t.remoteDisabledSource)+": Adaptives PV-Laden deaktiviert ")]):t._e(),"hard"==t.remoteDisabled?a("span",{staticClass:"badge badge-danger w-100"},[t._v(" "+t._s(t.remoteDisabledSource)+": Deaktiviert ")]):t._e()])]):t._e()]),a("div",{staticClass:"row border-bottom d-none d-md-block"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mt-3 mb-3 mb-md-0"},[a("Vehicle",t._b({},"Vehicle",t.vehicle,!1))],1),t.multi?a("div",{staticClass:"col-12 col-md-4 d-none d-md-block mt-3"},[a("div",{staticClass:"mb-2 pb-1"},[t._v("Modus")]),a("Mode",{staticClass:"btn-group-sm",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1):t._e(),t.multi&&t.hasTargetSoC?a("div",{staticClass:"col-12 col-md-4 d-none d-md-block mt-3"},[a("div",{staticClass:"mb-2 pb-1"},[t._v("Ladeziel")]),a("Soc",{staticClass:"btn-group-sm",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e(),t.multi?t._e():a("div",{staticClass:"col-md-8 d-none d-md-block"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1),a("div",{staticClass:"col-12 d-md-none"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1)])])},Dt=[],Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group btn-group-toggle bg-white shadow-none"},[t.caption?a("label",{staticClass:"btn btn-outline-primary disabled caption font-weight-bold"},[t._v(" Ladeziel ")]):t._e(),t._l(t.levelsOrDefault,(function(e,s){return a("label",{key:s,staticClass:"btn btn-outline-primary",class:{active:t.soc==e,first:!t.caption&&0==s},attrs:{level:e,id:s}},[a("input",{attrs:{type:"radio"},domProps:{value:e},on:{click:function(a){return t.setTargetSoC(e)}}}),t._v(t._s(e)+"% ")])}))],2)},Pt=[],Lt={name:"Soc",props:{soc:Number,caption:Boolean,levels:Array},computed:{levelsOrDefault:function(){return null==this.levels||0==this.levels.length?[]:this.levels}},methods:{setTargetSoC:function(t){this.$emit("updated",t)}}},Nt=Lt,Et=Object(j["a"])(Nt,Tt,Pt,!1,null,null,null),At=Et.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group btn-group-toggle bg-white shadow-none"},[t.caption?a("label",{staticClass:"btn btn-outline-primary value disabled caption font-weight-bold"},[t._v(" Modus ")]):t._e(),a("label",{staticClass:"btn btn-outline-primary",class:{active:"off"==t.mode,first:!t.caption}},[a("input",{attrs:{type:"radio",value:"off"},on:{click:function(e){return t.setTargetMode("off")}}}),t._v("Stop ")]),a("label",{staticClass:"btn btn-outline-primary",class:{active:"now"==t.mode}},[a("input",{attrs:{type:"radio",value:"now"},on:{click:function(e){return t.setTargetMode("now")}}}),t._v("Sofort ")]),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"minpv"==t.mode}},[a("input",{attrs:{type:"radio",value:"minpv"},on:{click:function(e){return t.setTargetMode("minpv")}}}),a("span",{staticClass:"d-inline d-lg-none"},[t._v("Min")]),a("span",{staticClass:"d-none d-lg-inline"},[t._v("Min + PV")])]):t._e(),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"pv"==t.mode}},[a("input",{attrs:{type:"radio",value:"pv"},on:{click:function(e){return t.setTargetMode("pv")}}}),a("span",{staticClass:"d-inline d-md-none"},[t._v("PV")]),a("span",{staticClass:"d-none d-md-inline"},[t._v("Nur PV")])]):t._e()])},Vt=[],$t={name:"Mode",props:{mode:String,pvConfigured:Boolean,caption:Boolean},methods:{setTargetMode:function(t){this.$emit("updated",t)}}},Ot=$t,Ut=Object(j["a"])(Ot,Bt,Vt,!1,null,null,null),jt=Ut.exports,zt=function(){var t,e,a,s=this,i=s.$createElement,n=s._self._c||i;return n("div",[n("div",{staticClass:"mb-2 pb-1"},[s._v(" "+s._s(s.socTitle||"Fahrzeug")+" ")]),n("div",{staticClass:"soc-bar"},[n("div",{staticClass:"progress small"},[n("div",{staticClass:"progress-bar",class:(t={"progress-bar-striped":s.charging,"progress-bar-animated":s.charging},t[s.progressColor]=!0,t),style:{width:s.socChargeDisplayWidth+"%"},attrs:{role:"progressbar"}},[s._v(" "+s._s(s.socChargeDisplayValue)+" ")]),s.remainingSoCWidth>0?n("div",{staticClass:"progress-bar",class:(e={"progress-bar-striped":s.charging,"progress-bar-animated":s.charging},e[s.progressColor]=!0,e["bg-muted"]=!0,e),style:{width:s.remainingSoCWidth+"%"},attrs:{role:"progressbar"}}):s._e(),s.socMarker?n("div",{staticClass:"soc-marker",class:(a={},a[s.progressColor]=!0,a),style:{left:s.socMarker+"%"}}):s._e()])]),s.markerLabel()?n("small",{staticClass:"subline my-2 text-secondary"},[s.minSoCActive||s.hasHomeSoCPrio?n("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"exclamation-circle"}}):s.targetChargeEnabled||s.hasDelayStatus?n("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"clock"}}):s.priorityActive?n("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"star"}}):s.connectedButNotEnabled?n("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"plug"}}):s._e(),s._v(" "+s._s(s.markerLabel())+" ")],1):s._e()])},Ht=[],It={name:"Vehicle",props:{socTitle:String,connected:Boolean,hasVehicle:Boolean,hasPriority:Boolean,delayStatus:String,socCharge:Number,enabled:Boolean,charging:Boolean,minSoC:Number,timerActive:Boolean,timerSet:Boolean,targetTime:String,targetSoC:Number,prioritySoC:Number,dummySoC:String,batterySoC:Number,batteryPower:Number},computed:{socChargeDisplayWidth:function(){return this.hasVehicle&&this.socCharge>0?this.socCharge:100},socChargeDisplayValue:function(){if(!this.hasVehicle||!this.socCharge||this.socCharge<=0){let t="getrennt";return this.charging?t="lädt":this.enabled?t="bereit":this.connected&&(t="verbunden"),t}let t=this.socCharge;return t>=10&&(t+="%"),t},socMarker:function(){return this.minSoCActive?this.minSoC:100===this.targetSoC?null:this.targetSoC>this.socCharge&&this.connected?this.targetSoC:null},progressColor:function(){return this.connected?this.minSoCActive?"bg-danger":this.connected&&!this.enabled?"bg-secondary border-primary":this.enabled?"bg-primary":"bg-secondary":"bg-light border"},minSoCActive:function(){return this.minSoC>0&&this.socCharge<this.minSoC&&this.socCharge>0},priorityActive:function(){return this.hasPriority},hasDelayStatus:function(){return 0!==this.delayStatus.length},hasHomeSoCPrio:function(){return this.batterySoC<this.prioritySoC},connectedButNotEnabled:function(){return this.connected&&!this.enabled&&this.socCharge>0},targetChargeEnabled:function(){return this.targetTime&&this.timerSet},remainingSoCWidth:function(){return 100===this.socCharge||this.socCharge<=0?null:this.minSoCActive?this.minSoC-this.socCharge:this.targetSoC>this.socCharge?this.targetSoC-this.socCharge:null}},methods:{markerLabel:function(){if(!this.connected)return null;if(this.minSoCActive)return`Mindestladung bis ${this.socMarker}%`;if(this.hasHomeSoCPrio)return`Hausspeicher hat Vorrang bis ${this.prioritySoC}%`;if(this.targetChargeEnabled){const t=Date.parse(this.targetTime);return this.timerActive?`Lädt ${this.fmtRelativeTime(t)} bis ${this.socMarker}%`:`Geplant bis ${this.fmtAbsoluteDate(t)} bis ${this.socMarker}%`}return this.hasDelayStatus?this.delayStatus:this.priorityActive?"Bevorzugt bei Überschussladung":this.connected&&!this.enabled&&this.socCharge>0?"Verbunden":null}},mixins:[E]},Wt=It,Rt=(a("4322"),Object(j["a"])(Wt,zt,Ht,!1,null,"fd159540",null)),Ft=Rt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Leistung "),t.chargeCurrent>0?a("small",{staticClass:"text-muted"},[t._v("(bei "+t._s(t.fmtCurrent(t.chargeCurrent))+"A)")]):t._e(),"heating"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-low"}}):t._e(),"cooling"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-high"}}):t._e(),"on"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"thermometer-half"}}):t._e(),t.hasPriority?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"star"}}):t._e()],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargePower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargePower))+"W")])])]),a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Geladen")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargedEnergy))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargedEnergy))+"Wh")])])]),t.range>=0?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Reichweite")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(Math.round(t.range))+" "),a("small",{staticClass:"text-muted"},[t._v("km")])])]):a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Dauer")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeDuration))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeDuration)))])])]),t.hasVehicle?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Restzeit")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeEstimate))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeEstimate)))])])]):t._e()])},Gt=[],Zt={name:"LoadpointDetails",props:{chargedEnergy:Number,chargeDuration:Number,chargeCurrent:Number,chargeEstimate:Number,chargePower:Number,climater:String,hasVehicle:Boolean,hasPriority:Boolean,delayStatus:String,range:Number},mixins:[E]},Jt=Zt,qt=Object(j["a"])(Jt,Kt,Gt,!1,null,null,null),Qt=qt.exports,Xt={methods:{collectProps:function(t){let e={};for(var a in t.props)e[a]=this[a];return e}}},Yt={name:"Loadpoint",props:{id:Number,multi:Boolean,pvConfigured:Boolean,title:String,mode:String,targetSoC:Number,socLevels:Array,remoteDisabled:Boolean,remoteDisabledSource:String,chargeDuration:Number,charging:Boolean,chargeCurrent:Number,connected:Boolean,enabled:Boolean,socTitle:String,socCharge:Number,minSoC:Number,timerSet:Boolean,timerActive:Boolean,targetTime:String,batterySoC:Number,prioritySoC:Number,chargePower:Number,chargedEnergy:Number,hasVehicle:Boolean,hasPriority:Boolean,delayStatus:String,climater:String,range:Number,chargeEstimate:Number},components:{LoadpointDetails:Qt,Soc:At,Mode:jt,Vehicle:Ft},mixins:[E,Xt],data:function(){return{tickerHandle:null,chargeDurationDisplayed:null}},computed:{details:function(){return this.collectProps(Qt)},vehicle:function(){return this.collectProps(Ft)},hasTargetSoC:function(){return null!=this.socLevels&&this.socLevels.length>0}},watch:{chargeDuration:function(){window.clearInterval(this.tickerHandle),this.charging&&this.chargeDuration>=0&&(this.chargeDurationDisplayed=this.chargeDuration,this.tickerHandle=window.setInterval(function(){this.chargeDurationDisplayed+=1}.bind(this),1e3))}},methods:{api:function(t){return"loadpoints/"+this.id+"/"+t},setTargetMode:function(t){n.a.post(this.api("mode")+"/"+t).then(function(t){this.mode=t.data.mode}.bind(this)).catch(window.toasts.error)},setTargetSoC:function(t){n.a.post(this.api("targetsoc")+"/"+t).then(function(t){this.targetSoC=t.data.targetSoC}.bind(this)).catch(window.toasts.error)}},destroyed:function(){window.clearInterval(this.tickerHandle)}},te=Yt,ee=Object(j["a"])(te,Mt,Dt,!1,null,null,null),ae=ee.exports,se={name:"Site",props:{siteTitle:String,loadpoints:Array,gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,consumptionPower:Number,batterySoC:Number,prioritySoC:Number},components:{SiteDetails:kt,Loadpoint:ae},mixins:[E,Xt],computed:{details:function(){return this.collectProps(kt)},multi:function(){return this.loadpoints.length>1}}},ie=se,ne=Object(j["a"])(ie,ft,gt,!1,null,null,null),re=ne.exports,oe={name:"Main",components:{Site:re},data:function(){return this.$root.$data.store},computed:{configured:function(){const t=window.evcc.configured;return t==window.evcc.configured||!isNaN(parseInt(t))&&parseInt(t)>0}}},le=oe,ce=Object(j["a"])(le,vt,pt,!1,null,null,null),de=ce.exports,ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.loadpoints,(function(e,s){return a("div",{key:s,attrs:{loadpoint:e,id:"loadpoint-"+s}},[a("div",{staticClass:"row mt-4 border-bottom"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"h1"},[t._v(t._s(e.title||"Ladepunkt"))])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Ladezähler: "),e.chargeConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Phasen: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.phases)+"p")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Min. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.minCurrent)+"A")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Max. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.maxCurrent)+"A")])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-md-8 h2"},[t._m(0,!0),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-6 py-3"},[t._v(" Modell: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socTitle||"—"))])]),a("div",{staticClass:"col-6 py-3"},[t._v(" Kapazität: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socCapacity)+"kWh")])])])])])])})),0)},me=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row py-3 h2 border-bottom"},[a("div",{staticClass:"col-12"},[t._v("Fahrzeug")])])}],he={name:"Config",data:function(){return this.$root.$data.store.state},methods:{api:function(t){return"loadpoints/"+this.id+"/"+t}}},ve=he,pe=Object(j["a"])(ve,ue,me,!1,null,null,null),fe=pe.exports;s["a"].use(ht["a"]);const ge=[{path:"/",component:de},{path:"/config",component:fe}];var be=new ht["a"]({routes:ge,linkExactActiveClass:"active"});const Ce=window.location;n.a.defaults.baseURL=Ce.protocol+"//"+Ce.hostname+(Ce.port?":"+Ce.port:"")+Ce.pathname+"api",n.a.defaults.headers.post["Content-Type"]="application/json",Function.prototype.throttle=function(t){let e,a=0,s=this;function i(){let i=this;function r(t){a=Date.now(),s.apply(i,t)}let o=t-(Date.now()-a);n(),o<0?r(arguments,0):e=setTimeout(r,o,arguments)}function n(){e&&(clearTimeout(e),e=void 0)}return i.reset=function(){n(),a=0},i},window.toasts=new s["a"]({el:"#toasts",render:function(t){return t(mt,{props:{items:this.items,count:this.count}})},data:{items:{},count:0},name:"ToastsRoot",methods:{raise:function(t){let e=!1;Object.keys(this.items).forEach((function(a){let s=this.items[a];s.type==t.type&&s.message==t.message&&(e=!0)}),this),e||(t.id=this.count++,s["a"].set(this.items,t.id,t))},error:function(t){t.type="error","Request failed with status code 403"==t.message&&(t.message="Keine Berechtigung! Bitte einloggen."),this.raise(t)},warn:function(t){t.type="warn",this.raise(t)},remove:function(t){s["a"].delete(this.items,t.id)}}}),window.throttledToasts=function(){},new s["a"]({el:"#app",router:be,data:{store:Z},render:t=>t(X)}),window.setInterval((async function(){void 0==window.throttledToasts["health"]&&(window.throttledToasts["health"]=window.toasts.error.throttle(3e4)),await n.a.get("health").then((function(){window.throttledToasts["health"].reset()})).catch((function(t){}))}),2e4)},a4e5:function(t,e,a){},b19f:function(t,e,a){},b392:function(t,e,a){"use strict";a("309d")},e738:function(t,e,a){"use strict";a("a4e5")}});
//# sourceMappingURL=index.86bca2a3.js.map