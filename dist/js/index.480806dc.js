(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={index:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("9e0e")},"087f":function(t,e,a){},"3f79":function(t,e,a){"use strict";a("6982")},5965:function(t,e,a){"use strict";a("087f")},6982:function(t,e,a){},"70df":function(t,e,a){"use strict";a("9f12")},9434:function(t,e,a){"use strict";a("b082")},"9e0e":function(t,e,a){"use strict";a.r(e);a("b19f"),a("ab8b"),a("4989");var s=a("2b0e"),i=a("bc3a"),n=a.n(i),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app d-flex flex-column justify-content-between"},[a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav mr-auto"}),a("div",{staticClass:"navbar-nav"},[t.hasSunny5Menu()?a("a",{staticClass:"nav-item nav-link pb-1",attrs:{href:"../smartbox/"}},[t._v("Home ")]):t._e(),a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/"}},[t._v("Laden")]),a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/config"}},[t._v("Konfiguration")]),t.hasSunny5Menu()?a("span",{domProps:{innerHTML:t._s(t.getVisLink())}}):t._e(),t.hasSunny5Menu()?a("span",{domProps:{innerHTML:t._s(t.getLoginLink())}}):t._e()],1)])])]),a("router-view")],1),a("Footer",{attrs:{version:t.version}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"https://www.sunny5.de",target:"_new"}},[a("img",{attrs:{src:"ico/favicon-32x32.png",alt:"Sunny5 Logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("ad3d"),c=a("ecee"),u=a("a206"),d=a("9e52"),m=a("8475"),v=a("39f0"),h=a("8718"),p=a("7c8d"),g=a("c6b3"),f=a("8668"),b=a("a14b"),C=a("5dae"),_=a("8560"),y=a("bf13"),w=a("af2b"),S=a("a938"),T=a("f303"),x=a("7116"),k=a("fdca"),D=a("6c06"),M=a("91fb"),P=a("184c"),N=a("ba01"),V=a("adbc");c["c"].add(u["faArrowDown"],d["faArrowUp"],m["faBatteryEmpty"],v["faBatteryFull"],h["faBatteryHalf"],p["faBatteryQuarter"],g["faBatteryThreeQuarters"],f["faChevronDown"],b["faChevronUp"],C["faClock"],_["faExclamationTriangle"],y["faLeaf"],w["faSun"],S["faPlug"],T["faTemperatureHigh"],x["faTemperatureLow"],D["faStar"],k["faThermometerHalf"],M["faHeart"],P["faGift"],N["faBox"],V["faExclamationCircle"]),s["a"].component("fa-icon",l["a"]);var E={data:function(){return{fmtLimit:1e3,fmtDigits:1}},methods:{round:function(t,e){var a=10**e;return(Math.round(t*a)/a).toFixed(e)},fmt:function(t){return void 0===t||null===t?0:(t=Math.abs(t),t>=this.fmtLimit?this.round(t/1e3,this.fmtDigits):this.round(t,0))},fmtUnit:function(t){return Math.abs(t)>=this.fmtLimit?"k":""},fmtDuration:function(t){if(t<=0||null==t)return"—";var e="0"+t%60,a="0"+Math.floor(t/60)%60,s=""+Math.floor(t/3600);return s.length<2&&(s="0"+s),s+":"+a.substr(-2)+":"+e.substr(-2)},fmtShortDuration:function(t){if(t<=0||null==t)return"—";var e,a=Math.floor(t/60)%60,s=Math.floor(t/3600);if(s>=1)a="0"+a,e=s+":"+a.substr(-2);else{var i="0"+t%60;e=a+":"+i.substr(-2)}return e},fmtShortDurationUnit:function(t){if(t<=0||null==t)return"";var e=Math.floor(t/3600);return e>=1?"h":"m"},getVisLink:function(){let t=document.location.origin.replace("2020",2021).replace("sunny5","vis.sunny5")+"/vis/#EVCCMOBILE",e=`<a class="nav-item nav-link pb-1" href="${t}">VIS-mobile</a>`;return e},getLoginLink:function(){return document.location.href.indexOf("auth=1")>-1?'<a class="nav-item nav-link pb-1" href="../smartbox/logout">Logout</a>':'<a class="nav-item nav-link pb-1" href="../smartbox/login">Login</a>'},hasSunny5Menu:function(){return"true"==window.evcc.hasSunny5Menu},fmtDayString:function(t){const e=""+t.getFullYear(),a=(""+(t.getMonth()+1)).padStart(2,"0"),s=(""+t.getDate()).padStart(2,"0");return`${e}-${a}-${s}`},fmtTimeString:function(t){const e=(""+t.getHours()).padStart(2,"0"),a=(""+t.getMinutes()).padStart(2,"0");return`${e}:${a}`},fmtAbsoluteDate:function(t){return new Intl.DateTimeFormat("default",{weekday:"short",hour:"numeric",minute:"numeric"}).format(t)}}},L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"py-3 py-md-5 mt-3 mt-md-5 border-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("p",{staticClass:"text-muted"},[a("Version",t._b({},"Version",t.version,!1))],1)]),t._m(0)])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 text-right"},[a("small",{staticClass:"text-muted"},[a("a",{attrs:{href:"https://github.com/mark-sch/evcc",target:"_blank"}},[t._v("© 2020 andig/evcc, Think5 GmbH et al.")])])])}],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("small",{staticClass:"text-black"},[t.newVersionAvailable?a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showModal(e)}}},[a("fa-icon",{staticClass:"icon mr-1",attrs:{icon:"gift"}}),t._v("Update"),a("span",{staticClass:"d-none d-sm-inline"},[t._v(" verfügbar")]),t._v(": "+t._s(t.available)+" ")],1):a("a",{attrs:{href:t.releaseNotesUrl(t.installed),target:"_blank"}},[t._v(" Version "+t._s(t.installed)+" ")])]),a("transition",{attrs:{name:"fade"}},[t.modalActive?a("div",{staticClass:"dialog",attrs:{id:"updateModal",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title font-weight-bold"},[t._v("Update verfügbar")]),a("button",{staticClass:"close",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t.updateStarted?a("div",[a("p",[t._v("Nach der Aktualisierung wird evcc neu gestartet.")]),a("div",{staticClass:"progress my-3"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",style:{width:t.uploadProgress+"%"},attrs:{role:"progressbar"}})]),a("p",[t._v(t._s(t.updateStatus)+t._s(t.uploadMessage))])]):a("div",[a("p",[a("small",[t._v("Aktuell installierte Version: "+t._s(t.installed))])]),t.releaseNotes?a("div",{domProps:{innerHTML:t._s(t.releaseNotes)}}):a("p",[t._v(" Keine Releasenotes verfügbar. Mehr Informationen zur neuen Version findest du "),a("a",{attrs:{href:t.releaseNotesUrl(t.available)}},[t._v("hier")]),t._v(". ")])])]),a("div",{staticClass:"modal-footer d-flex justify-content-between"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[t._v(" Abbrechen ")]),a("div",[t.hasUpdater?a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.update}},[t.updateStarted?a("span",[a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Akualisieren ")]):a("span",[t._v("Jetzt aktualisieren")])]):a("a",{staticClass:"btn btn-primary",attrs:{href:t.releaseNotesUrl(t.available)}},[t._v(" Download ")])])])])])]):t._e()])],1)},$=[],j={name:"Version",props:{installed:String,available:String,releaseNotes:String,hasUpdater:Boolean,uploadMessage:String,uploadProgress:Number},data:function(){return{modalActive:!1,updateStarted:!1,updateStatus:""}},methods:{showModal:function(){this.modalActive=!0},closeModal:function(){this.modalActive=!1},update:async function(){try{await n.a.post("update"),this.updateStatus="Aktualisierung gestartet: ",this.updateStarted=!0}catch(t){this.updateStatus="Aktualisierung nicht möglich: "+t}},releaseNotesUrl:function(t){return"https://github.com/mark-sch/evcc/releases/tag/"+t}},computed:{newVersionAvailable:function(){return this.available&&"[[.Version]]"!=this.installed&&"0.0.1-alpha"!=this.installed&&this.available!=this.installed}}},O=j,U=(a("70df"),a("2877")),z=Object(U["a"])(O,A,$,!1,null,"9a26ca00",null),I=z.exports,H={name:"Footer",components:{Version:I},props:{version:Object}},W=H,F=(a("e6b4"),Object(U["a"])(W,L,B,!1,null,"58dad27f",null)),K=F.exports;function Z(t,e,a){const i=e.shift();t[i]||s["a"].set(t,i,{}),e.length?Z(t[i],e,a):a&&"object"===typeof a&&!Array.isArray(a)?t[i]={...t[i],...a}:t[i]=a}const R={state:{loadpoints:[]},update:function(t){Object.keys(t).forEach((function(e){"function"===typeof window.toasts[e]?window.toasts[e]({message:t[e]}):Z(R.state,e.split("."),t[e])}))}};var q=R,G={name:"App",components:{Footer:K},data:function(){return{compact:!1,store:this.$root.$data.store,installedVersion:window.evcc.version}},methods:{connect:function(){const t=window.location,e="https:"==t.protocol?"wss:":"ws:",a=e+"//"+t.hostname+(t.port?":"+t.port:"")+t.pathname+"ws",s=new WebSocket(a),i=this;s.onerror=function(){s.close()},s.onclose=function(){window.setTimeout(i.connect,1e3)},s.onmessage=function(t){try{var e=function(t){return"Msg"+Math.abs(t.split("").reduce((t,e)=>(t=(t<<5)-t+e.charCodeAt(0),t&t),0))},a=JSON.parse(t.data);void 0==window.throttledToasts[e(t.data)]&&(window.throttledToasts[e(t.data)]=q.update.throttle(1e4)),window.throttledToasts[e(t.data)](a)}catch(s){window.toasts.error(s,t.data)}}}},computed:{version:function(){return{installed:this.installedVersion,available:this.store.state.availableVersion,releaseNotes:this.store.state.releaseNotes,hasUpdater:this.store.state.hasUpdater,uploadMessage:this.store.state.uploadMessage,uploadProgress:this.store.state.uploadProgress}}},created:function(){const t=new URLSearchParams(window.location.search);this.compact=t.get("compact"),this.connect()},mixins:[E]},J=G,Q=(a("5965"),Object(U["a"])(J,r,o,!1,null,"00ed7048",null)),Y=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",top:"4rem",right:"0.5rem"},attrs:{"aria-atomic":"true"}},t._l(t.items,(function(t){return a("ToastMessage",{key:t.id,attrs:{item:t,id:"message-id-"+t.id}})})),1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast",attrs:{"data-delay":"10000","data-autohide":!0}},[a("div",{staticClass:"toast-header"},["warn"!=t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-danger",attrs:{icon:"exclamation-triangle"}}),t._v(" Error")],1):t._e(),"warn"==t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-warning",attrs:{icon:"exclamation-triangle"}}),t._v(" Warning")],1):t._e(),t.item.status?a("small",[t._v("HTTP "+t._s(t.item.status))]):t._e(),t._m(0)]),a("div",{staticClass:"toast-body"},[t._v(t._s(t.item.message))])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],st=a("1157"),it=a.n(st),nt={name:"ToastMessage",props:["item"],mounted:function(){const t="#message-id-"+this.item.id;it()(t).toast("show"),it()(t).on("hidden.bs.toast",function(){window.toasts.remove(this.item)}.bind(this))}},rt=nt,ot=Object(U["a"])(rt,et,at,!1,null,null,null),lt=ot.exports,ct={name:"Toasts",components:{ToastMessage:lt},props:{items:Object}},ut=ct,dt=Object(U["a"])(ut,X,tt,!1,null,null,null),mt=dt.exports,vt=a("8c4f"),ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.configured?a("Site",t._b({},"Site",t.state,!1)):a("div",[a("div",{staticClass:"row py-5"},[a("div",{staticClass:"col12"},[a("p",{staticClass:"h1 pt-5 pb-2 border-bottom"},[t._v("Willkommen bei evcc")]),a("p",{staticClass:"lead pt-2"},[a("b",[t._v("evcc")]),t._v(" ist dient zur flexiblen Ladesteuerung von Elektrofahrzeugen. ")]),a("p",{staticClass:"pt-2"},[t._v(" Es sieht aus, als wäre Dein "),a("b",[t._v("evcc")]),t._v(" noch nicht konfiguriert. Um "),a("b",[t._v("evcc")]),t._v(" zu konfigurieren sind die folgenden Schritte notwendig: ")]),a("ol",{staticClass:"pt-2"},[a("li",[t._v(" Erzeugen einer Konfigurationsdatei mit Namen "),a("code",[t._v("evcc.yaml")]),t._v(". Die Standardkonfiguration "),a("code",[t._v("evcc.dist.yaml")]),t._v(" kann dafür als Vorlage dienen ("),a("a",{attrs:{href:"https://github.com/mark-sch/evcc/blob/master/evcc.dist.yaml"}},[t._v("Download")]),t._v("). ")]),a("li",[t._v("Konfiguration der Wallbox als "),a("code",[t._v("chargers")]),t._v(".")]),a("li",[t._v(" Konfiguration des EVU Zählers und evtl. weiterer Zähler unter "),a("code",[t._v("meters")]),t._v(". ")]),a("li",[t._v(" Konfiguration des Netzanschlusses unter "),a("code",[t._v("site")]),t._v(". In einer Site wird der Netzanschluss mit dem konfigurierten EVU Zähler ("),a("code",[t._v("meter")]),t._v(") verbunden. ")]),a("li",[t._v(" Konfiguration eines Ladepunktes unter "),a("code",[t._v("loadpoints")]),t._v(". In einem Ladepunkt wird die konfigurierte Wallbox ("),a("code",[t._v("charger")]),t._v(") mit dem Ladepunkt verbunden. ")]),a("li",[t._v(" Start von "),a("b",[t._v("evcc")]),t._v(" mit der neu erstellten Konfiguration: "),a("code",[t._v("evcc -c evcc.yaml")])])]),a("p",[t._v("Minimale Beispielkonfiguration für "),a("b",[t._v("evcc")]),t._v(":")]),a("p",[a("code",[a("pre",{staticClass:"mx-3"},[t._v("                uri: localhost:7070 # Adresse für UI\n                interval: 10s # Regelintervall\n                meters:\n                - name: evu-zähler\n                type: ... # Detailkonfiguration des EVU Zählers\n                - name: ladezähler\n                type: ... # Detailkonfiguration des Ladezählers (optional)\n                chargers:\n                - name: wallbox\n                type: ... # Detailkonfiguration der Wallbox\n                site:\n                  title: Home\n                  meters:\n                  grid: evu-zähler # EVU Zähler\n                loadpoints:\n                - title: Ladepunkt # ui display name\n                  charger: wallbox # charger\n                  meters:\n                    charge: ladezähler # Ladezählers (optional)\n              ")])])]),a("p",[t._v(" Viel Spass mit "),a("b",[t._v("evcc")]),t._v("! Bei Problemen kannst Du uns auf "),a("a",{attrs:{href:"https://github.com/mark-sch/evcc/issues"}},[t._v("GitHub")]),t._v(" erreichen. ")])])])])],1)},pt=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-flex col-12 col-md-4 col-lg-3 mt-md-4 align-items-end"},[a("p",{staticClass:"h1"},[t._v(t._s(t.siteTitle||"Home"))])]),t.multi?a("div",{staticClass:"col-12 col-md-8 col-lg-9 mt-3"},[a("SiteDetails",t._b({},"SiteDetails",t.details,!1))],1):t._e()]),t._l(t.loadpoints,(function(e,s){return a("Loadpoint",t._b({key:s,attrs:{id:s,multi:t.multi,pvConfigured:t.pvConfigured}},"Loadpoint",e,!1))}))],2)},ft=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row row-cols-4 justify-content-between justify-content-md-end"},[t.gridConfigured?a("div",{staticClass:"mt-3 px-3"},[t.gridPower>0?a("div",{staticClass:"mb-2 value"},[t._v(" Bezug "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-down"}})],1):a("div",{staticClass:"mb-2 value"},[t._v(" Einspeisung "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-up"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.gridPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.gridPower))+"W")])])]):t._e(),t.pvConfigured?a("div",{staticClass:"mt-3 px-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Erzeugung "),a("fa-icon",{class:{"text-primary":t.pvPower>0,"text-muted":t.pvPower<=0},attrs:{icon:"sun"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.pvPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.pvPower))+"W")])])]):t._e(),t.batteryConfigured?a("div",{staticClass:"mt-3 px-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Batterie "),a("span",{staticClass:"text-muted"},[t._v("/")]),t._v(" "+t._s(t.batterySoC)+" % "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:t.batteryIcon}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.batteryPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.batteryPower))+"W")])])]):t._e(),t.pvConfigured?a("div",{staticClass:"mt-3 px-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Verbrauch "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"plug"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.consumptionPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.consumptionPower))+"W")])])]):t._e()])},Ct=[];const _t=20,yt=["battery-empty","battery-quarter","battery-half","battery-three-quarters","battery-full"];var wt={name:"SiteDetails",props:{gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,consumptionPower:Number,batterySoC:Number},data:function(){return{iconIdx:0}},mixins:[E],computed:{numberOfPanels:function(){let t=0;return this.gridConfigured&&t++,this.pvConfigured&&t++,this.batteryConfigured&&t++,t},batteryIcon:function(){return Math.abs(this.batteryPower)<_t?this.batterySoC<30?yt[0]:this.batterySoC<50?yt[1]:this.batterySoC<70?yt[2]:this.batterySoC<90?yt[3]:yt[4]:yt[this.iconIdx]}},mounted:function(){window.setInterval(()=>{this.batteryPower>_t?--this.iconIdx<0&&(this.iconIdx=yt.length-1):this.batteryPower<_t&&++this.iconIdx>=yt.length&&(this.iconIdx=0)},1e3)}},St=wt,Tt=Object(U["a"])(St,bt,Ct,!1,null,null,null),xt=Tt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"border-top mt-4 pt-4"},[a("h4",{staticClass:"mb-2"},[t._v(t._s(t.title||"Ladepunkt"))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-8 col-lg-8 pr-4 pr-lg-5"},[a("Vehicle",t._b({staticClass:"mb-2",on:{"target-soc-updated":t.setTargetSoC,"target-time-updated":t.setTargetTime}},"Vehicle",t.vehicle,!1)),a("Mode",{staticClass:"py-1 mb-4 mb-sm-3",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1),a("LoadpointDetails",t._b({staticClass:"col-12 col-md-4 col-lg-4"},"LoadpointDetails",t.details,!1))],1)])},Dt=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-items-baseline justify-content-center"},[a("p",{staticClass:"mr-4 my-2 d-none d-md-block d-lg-block"},[t._v("Modus")]),a("div",{staticClass:"btn-group btn-group-sm btn-group-toggle bg-white shadow-none w-100"},[a("label",{staticClass:"btn btn-outline-primary first",class:{active:"off"==t.mode}},[a("input",{attrs:{type:"radio",value:"off"},on:{click:function(e){return t.setTargetMode("off")}}}),t._v("Stop ")]),a("label",{staticClass:"btn btn-outline-primary",class:{active:"now"==t.mode}},[a("input",{attrs:{type:"radio",value:"now"},on:{click:function(e){return t.setTargetMode("now")}}}),t._v("Sofort ")]),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"minpv"==t.mode}},[a("input",{attrs:{type:"radio",value:"minpv"},on:{click:function(e){return t.setTargetMode("minpv")}}}),a("span",{staticClass:"d-inline d-sm-none"},[t._v("Min")]),a("span",{staticClass:"d-none d-sm-inline"},[t._v("Min + PV")])]):t._e(),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"pv"==t.mode}},[a("input",{attrs:{type:"radio",value:"pv"},on:{click:function(e){return t.setTargetMode("pv")}}}),a("span",{staticClass:"d-inline d-sm-none"},[t._v("PV")]),a("span",{staticClass:"d-none d-sm-inline"},[t._v("Nur PV")])]):t._e()])])},Pt=[],Nt={name:"Mode",props:{mode:String,pvConfigured:Boolean},methods:{setTargetMode:function(t){this.$emit("updated",t)}}},Vt=Nt,Et=Object(U["a"])(Vt,Mt,Pt,!1,null,"260c2ed5",null),Lt=Et.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-3 pb-2"},[a("div",{staticClass:"mb-3"},[a("span",[t._v(t._s(t.socTitle||" "))]),t.range>=0?a("span",{staticClass:"text-muted"},[t._v("/ "+t._s(t.range)+" km")]):t._e()]),a("VehicleSoc",t._b({on:{"target-soc-updated":t.targetSocUpdated}},"VehicleSoc",t.vehicleSoc,!1)),a("VehicleSubline",t._b({staticClass:"my-1",on:{"target-time-updated":t.targetTimeUpdated}},"VehicleSubline",t.vehicleSubline,!1))],1)},At=[],$t={methods:{collectProps:function(t){let e={};for(var a in t.props)e[a]=this[a];return e}}},jt=function(){var t,e,a=this,s=a.$createElement,i=a._self._c||s;return i("div",{staticClass:"vehicle-soc"},[i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar",class:(t={"progress-bar-striped":a.charging,"progress-bar-animated":a.charging},t[a.progressColor]=!0,t),style:{width:a.socChargeDisplayWidth+"%"},attrs:{role:"progressbar"}},[a._v(" "+a._s(a.socChargeDisplayValue)+" ")]),a.remainingSoCWidth>0?i("div",{staticClass:"progress-bar",class:(e={},e[a.progressColor]=!0,e["bg-muted"]=!0,e),style:{width:a.remainingSoCWidth+"%",transition:"none"},attrs:{role:"progressbar"}}):a._e()]),a.hasVehicle&&a.visibleTargetSoC?i("div",{staticClass:"target",class:{"target--max":100===a.visibleTargetSoC}},[i("div",{staticClass:"target-label d-flex align-items-center justify-content-center",style:{left:a.visibleTargetSoC+"%"}},[a._v(" "+a._s(a.visibleTargetSoC)+"% ")]),i("input",{staticClass:"target-slider",attrs:{type:"range",min:"0",max:"100",step:"5"},domProps:{value:a.visibleTargetSoC},on:{input:a.movedTargetSoC,change:a.setTargetSoC}})]):a._e()])},Ot=[],Ut={name:"VehicleSoc",props:{connected:Boolean,hasVehicle:Boolean,socCharge:Number,enabled:Boolean,charging:Boolean,minSoC:Number,targetSoC:Number},data:function(){return{selectedTargetSoC:null}},computed:{socChargeDisplayWidth:function(){return this.hasVehicle&&this.socCharge>=0?this.socCharge:100},socChargeDisplayValue:function(){if(!this.hasVehicle||!this.socCharge||this.socCharge<0){let t="getrennt";return this.charging?t="lädt":this.enabled?t="bereit":this.connected&&(t="verbunden"),t}let t=this.socCharge;return t>=10&&(t+="%"),t},progressColor:function(){return this.connected?this.minSoCActive?"bg-danger":this.enabled?"bg-primary":"bg-secondary":"bg-light border"},minSoCActive:function(){return this.minSoC>0&&this.socCharge<this.minSoC},remainingSoCWidth:function(){return 100===this.socCharge?null:this.minSoCActive?this.minSoC-this.socCharge:this.visibleTargetSoC>this.socCharge?this.visibleTargetSoC-this.socCharge:null},visibleTargetSoC:function(){return Number(this.selectedTargetSoC||this.targetSoC)}},methods:{movedTargetSoC:function(t){const e=40;return t.target.value<e?(t.target.value=e,this.selectedTargetSoC=t.target.value,t.preventDefault(),!1):(this.selectedTargetSoC=t.target.value,!0)},setTargetSoC:function(t){this.$emit("target-soc-updated",t.target.value)}}},zt=Ut,It=(a("9434"),Object(U["a"])(zt,jt,Ot,!1,null,"59a408c3",null)),Ht=It.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subline d-flex justify-content-between align-items-center"},[a("div",{staticClass:"min-soc-status text-secondary"},[t.minSoCActive?a("div",[a("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"exclamation-circle"}}),t._v(" Mindestladung bis "+t._s(t.minSoC)+"% ")],1):t._e()]),a("button",{staticClass:"target-time-button btn btn-link btn-sm pr-0",class:{invisible:!t.targetSoC,"text-primary":t.timerActive,"text-secondary":!t.timerActive},on:{click:t.selectTargetTime}},[t._v(" "+t._s(t.targetTimeLabel())),a("fa-icon",{staticClass:"ml-1",attrs:{icon:"clock"}})],1),a("transition",{attrs:{name:"fade"}},[t.targetTimeModalActive?a("div",{staticClass:"dialog",attrs:{tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title font-weight-bold"},[t._v("Zielzeit festlegen")]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.saveTargetTime(e)}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"targetTimeLabel"}},[t._v("Wann soll das Fahrzeug auf "),a("strong",[t._v(t._s(t.targetSoC)+"%")]),t._v(" geladen sein?")]),a("div",{staticClass:"d-flex justify-content-between"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDay,expression:"selectedDay"}],staticClass:"form-control mr-4",style:{"flex-basis":"66%"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedDay=e.target.multiple?a:a[0]}}},t._l(t.dayOptions(),(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedTime,expression:"selectedTime"}],staticClass:"form-control ml-4",style:{"flex-basis":"33%"},attrs:{type:"time",step:300,required:""},domProps:{value:t.selectedTime},on:{input:function(e){e.target.composing||(t.selectedTime=e.target.value)}}})])]),t.selectedTargetTimeValid?a("p"):t._e(),t.selectedTargetTimeValid?t._e():a("p",{staticClass:"text-danger"},[t._v(" Zeitpunkt liegt in der Vergangenheit. ")])]),a("div",{staticClass:"modal-footer d-flex justify-content-between"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.removeTargetTime}},[t._v(" Keine Zielzeit ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.selectedTargetTimeValid}},[t._v(" Zielzeit aktivieren ")])])])])])]):t._e()])],1)},Ft=[],Kt={name:"VehicleSubline",props:{socCharge:Number,minSoC:Number,timerActive:Boolean,timerSet:Boolean,targetTime:String,targetSoC:Number},computed:{minSoCActive:function(){return this.minSoC>0&&this.socCharge<this.minSoC},targetChargeEnabled:function(){return this.targetTime&&this.timerSet},selectedTargetTimeValid:function(){const t=new Date;return t<this.selectedTargetTime},selectedTargetTime:function(){return new Date(`${this.selectedDay}T${this.selectedTime||"00:00"}`)}},data:function(){return{targetTimeModalActive:!1,selectedDay:null,selectedTime:null}},mounted:function(){this.initInputFields()},watch:{targetTime(){this.initInputFields()}},methods:{targetTimeLabel:function(){if(this.targetChargeEnabled){const t=new Date(this.targetTime);return`bis ${this.fmtAbsoluteDate(t)} Uhr`}return"Zielzeit"},defaultDate:function(){const t=new Date;return t.setHours(t.getHours()+12),t.setMinutes(15*Math.ceil(t.getMinutes()/15)),t},initInputFields:function(){const t=this.targetChargeEnabled?new Date(this.targetTime):this.defaultDate();this.selectedDay=this.fmtDayString(t),this.selectedTime=this.fmtTimeString(t)},dayOptions:function(){const t=[],e=new Date,a=["heute","morgen"];for(let s=0;s<7;s++){const i=e.toLocaleDateString("default",{month:"long",day:"numeric"}),n=a[s]||e.toLocaleDateString("default",{weekday:"long"});t.push({value:e.toISOString().split("T")[0],name:`${i} (${n})`}),e.setDate(e.getDate()+1)}return t},minTime:function(){return(new Date).toISOString().split("T")[1].slice(0,-8)},selectTargetTime:function(){this.targetTimeModalActive=!0},closeModal:function(){this.targetTimeModalActive=!1},removeTargetTime:function(){this.$emit("target-time-updated",new Date(null)),this.closeModal()},saveTargetTime:function(){this.$emit("target-time-updated",this.selectedTargetTime),this.closeModal()}},mixins:[E]},Zt=Kt,Rt=(a("3f79"),Object(U["a"])(Zt,Wt,Ft,!1,null,"40984092",null)),qt=Rt.exports,Gt={name:"Vehicle",components:{VehicleSoc:Ht,VehicleSubline:qt},props:{connected:Boolean,hasVehicle:Boolean,hasPriority:Boolean,socCharge:Number,enabled:Boolean,charging:Boolean,minSoC:Number,range:Number,socTitle:String,timerActive:Boolean,timerSet:Boolean,targetTime:String,targetSoC:Number},data:function(){return{selectedTargetSoC:null}},computed:{vehicleSoc:function(){return this.collectProps(Ht)},vehicleSubline:function(){return this.collectProps(qt)},priorityActive:function(){return this.hasPriority}},methods:{targetSocUpdated:function(t){this.$emit("target-soc-updated",t)},targetTimeUpdated:function(t){this.$emit("target-time-updated",t)}},mixins:[$t]},Jt=Gt,Qt=Object(U["a"])(Jt,Bt,At,!1,null,null,null),Yt=Qt.exports,Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-sm-3 col-md-6 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Leistung "),"heating"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-low"}}):t._e(),"cooling"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-high"}}):t._e(),"on"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"thermometer-half"}}):t._e(),t.hasPriority?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"star"}}):t._e()],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargePower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargePower))+"W")])])]),a("div",{staticClass:"col-6 col-sm-3 col-md-6 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Geladen")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargedEnergy))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargedEnergy))+"Wh")])])]),a("div",{staticClass:"col-6 col-sm-3 col-md-6 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Dauer")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeDuration))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeDuration)))])])]),t.hasVehicle?a("div",{staticClass:"col-6 col-sm-3 col-md-6 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Restzeit")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeEstimate))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeEstimate)))])])]):t._e()])])},te=[],ee={name:"LoadpointDetails",props:{chargedEnergy:Number,chargeDuration:Number,chargeEstimate:Number,chargePower:Number,climater:String,hasVehicle:Boolean,hasPriority:Boolean,range:Number},mixins:[E]},ae=ee,se=Object(U["a"])(ae,Xt,te,!1,null,null,null),ie=se.exports,ne={name:"Loadpoint",props:{id:Number,multi:Boolean,pvConfigured:Boolean,title:String,mode:String,targetSoC:Number,socLevels:Array,remoteDisabled:Boolean,remoteDisabledSource:String,chargeDuration:Number,charging:Boolean,connected:Boolean,enabled:Boolean,socTitle:String,socCharge:Number,minSoC:Number,timerSet:Boolean,timerActive:Boolean,targetTime:String,chargePower:Number,chargedEnergy:Number,hasVehicle:Boolean,hasPriority:Boolean,climater:String,range:Number,chargeEstimate:Number},components:{LoadpointDetails:ie,Mode:Lt,Vehicle:Yt},mixins:[E,$t],data:function(){return{tickerHandle:null,chargeDurationDisplayed:null}},computed:{details:function(){return this.collectProps(ie)},vehicle:function(){return this.collectProps(Yt)},hasTargetSoC:function(){return null!=this.socLevels&&this.socLevels.length>0}},watch:{chargeDuration:function(){window.clearInterval(this.tickerHandle),this.charging&&this.chargeDuration>=0&&(this.chargeDurationDisplayed=this.chargeDuration,this.tickerHandle=window.setInterval(function(){this.chargeDurationDisplayed+=1}.bind(this),1e3))}},methods:{api:function(t){return"loadpoints/"+this.id+"/"+t},setTargetMode:function(t){n.a.post(this.api("mode")+"/"+t).then(function(t){this.mode=t.data.mode}.bind(this)).catch(window.toasts.error)},setTargetSoC:function(t){n.a.post(this.api("targetsoc")+"/"+t).then(function(t){this.targetSoC=t.data.targetSoC}.bind(this)).catch(window.toasts.error)},setTargetTime:function(t){const e=`${this.fmtDayString(t)}T${this.fmtTimeString(t)}:00`;n.a.post(this.api("targetcharge")+"/"+this.targetSoC+"/"+e).catch(window.toasts.error)}},destroyed:function(){window.clearInterval(this.tickerHandle)}},re=ne,oe=Object(U["a"])(re,kt,Dt,!1,null,null,null),le=oe.exports,ce={name:"Site",props:{siteTitle:String,loadpoints:Array,gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,consumptionPower:Number,batterySoC:Number},components:{SiteDetails:xt,Loadpoint:le},mixins:[E,$t],computed:{details:function(){return this.collectProps(xt)},multi:function(){return this.loadpoints.length>1}}},ue=ce,de=Object(U["a"])(ue,gt,ft,!1,null,null,null),me=de.exports,ve={name:"Main",components:{Site:me},data:function(){return this.$root.$data.store},computed:{configured:function(){const t=window.evcc.configured;return t==window.evcc.configured||!isNaN(parseInt(t))&&parseInt(t)>0}}},he=ve,pe=Object(U["a"])(he,ht,pt,!1,null,null,null),ge=pe.exports,fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-4 border-bottom"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"h1"},[t._v(t._s(t.title||"Home"))])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Netzzähler: "),t.gridConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" PV Zähler: "),t.pvConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Batteriezähler: "),t.batteryConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])])]),t._l(t.loadpoints,(function(e,s){return a("div",{key:s,attrs:{loadpoint:e,id:"loadpoint-"+s}},[a("div",{staticClass:"row mt-4 border-bottom"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"h1"},[t._v(t._s(e.title||"Ladepunkt"))])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Ladezähler: "),e.chargeConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Phasen: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.phases)+"p")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Min. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.minCurrent)+"A")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Max. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.maxCurrent)+"A")])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-md-8 h2"},[t._m(0,!0),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-6 py-3"},[t._v(" Modell: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socTitle||"—"))])]),a("div",{staticClass:"col-6 py-3"},[t._v(" Kapazität: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socCapacity)+"kWh")])])])])])])}))],2)},be=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row py-3 h2 border-bottom"},[a("div",{staticClass:"col-12"},[t._v("Fahrzeug")])])}],Ce={name:"Config",data:function(){return this.$root.$data.store.state}},_e=Ce,ye=Object(U["a"])(_e,fe,be,!1,null,null,null),we=ye.exports;s["a"].use(vt["a"]);const Se=[{path:"/",component:ge},{path:"/config",component:we}];var Te=new vt["a"]({routes:Se,linkExactActiveClass:"active"});const xe=window.location;n.a.defaults.baseURL=xe.protocol+"//"+xe.hostname+(xe.port?":"+xe.port:"")+xe.pathname+"api",n.a.defaults.headers.post["Content-Type"]="application/json",Function.prototype.throttle=function(t){let e,a=0,s=this;function i(){let i=this;function r(t){a=Date.now(),s.apply(i,t)}let o=t-(Date.now()-a);n(),o<0?r(arguments,0):e=setTimeout(r,o,arguments)}function n(){e&&(clearTimeout(e),e=void 0)}return i.reset=function(){n(),a=0},i},window.toasts=new s["a"]({el:"#toasts",render:function(t){return t(mt,{props:{items:this.items,count:this.count}})},data:{items:{},count:0},name:"ToastsRoot",methods:{raise:function(t){let e=!1;Object.keys(this.items).forEach((function(a){let s=this.items[a];s.type==t.type&&s.message==t.message&&(e=!0)}),this),e||(t.id=this.count++,s["a"].set(this.items,t.id,t))},error:function(t){t.type="error","Request failed with status code 403"==t.message&&(t.message="Keine Berechtigung! Bitte einloggen."),this.raise(t)},warn:function(t){t.type="warn",this.raise(t)},remove:function(t){s["a"].delete(this.items,t.id)}}}),window.throttledToasts=function(){},new s["a"]({el:"#app",router:Te,data:{store:q},render:t=>t(Y)}),window.setInterval((async function(){void 0==window.throttledToasts["health"]&&(window.throttledToasts["health"]=window.toasts.error.throttle(3e4)),await n.a.get("health").then((function(){window.throttledToasts["health"].reset()})).catch((function(t){t.message="EVCC nicht erreichbar",window.throttledToasts["health"](t)}))}),5e3)},"9f12":function(t,e,a){},b082:function(t,e,a){},b19f:function(t,e,a){},d010:function(t,e,a){},e6b4:function(t,e,a){"use strict";a("d010")}});
//# sourceMappingURL=index.480806dc.js.map