(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={index:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("9e0e")},"35bf":function(t,e,a){"use strict";a("7cbf")},"472c":function(t,e,a){},"70df":function(t,e,a){"use strict";a("9f12")},"7cbf":function(t,e,a){},8719:function(t,e,a){},"8aed":function(t,e,a){"use strict";a("8719")},"9e0e":function(t,e,a){"use strict";a.r(e);a("b19f"),a("ab8b"),a("4989");var s=a("2b0e"),i=a("bc3a"),r=a.n(i),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app d-flex flex-column justify-content-between"},[a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav mr-auto"}),a("div",{staticClass:"navbar-nav"},[a("a",{staticClass:"nav-item nav-link pb-1",attrs:{href:"../smartbox/"}},[t._v("Home ")]),a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/"}},[t._v("Laden")]),a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/config"}},[t._v("Konfiguration")]),a("span",{domProps:{innerHTML:t._s(t.getVisLink())}}),a("span",{domProps:{innerHTML:t._s(t.getLoginLink())}})],1)])])]),a("router-view")],1),a("Footer",{attrs:{version:t.version}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"https://www.sunny5.de",target:"_new"}},[a("img",{attrs:{src:"ico/favicon-32x32.png",alt:"Sunny5 Logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("ad3d"),c=a("ecee"),d=a("a206"),u=a("9e52"),m=a("8475"),v=a("39f0"),h=a("8718"),p=a("7c8d"),f=a("c6b3"),g=a("8668"),b=a("a14b"),C=a("5dae"),_=a("8560"),w=a("bf13"),y=a("af2b"),S=a("a938"),x=a("f303"),k=a("7116"),M=a("fdca"),D=a("6c06"),T=a("91fb"),L=a("184c"),P=a("ba01"),E=a("adbc");c["c"].add(d["faArrowDown"],u["faArrowUp"],m["faBatteryEmpty"],v["faBatteryFull"],h["faBatteryHalf"],p["faBatteryQuarter"],f["faBatteryThreeQuarters"],g["faChevronDown"],b["faChevronUp"],C["faClock"],_["faExclamationTriangle"],w["faLeaf"],y["faSun"],S["faPlug"],x["faTemperatureHigh"],k["faTemperatureLow"],D["faStar"],M["faThermometerHalf"],T["faHeart"],L["faGift"],P["faBox"],E["faExclamationCircle"]),s["a"].component("fa-icon",l["a"]);var N={data:function(){return{fmtLimit:1e3,fmtDigits:1}},methods:{round:function(t,e){var a=10**e;return(Math.round(t*a)/a).toFixed(e)},fmt:function(t){return void 0===t||null===t?0:(t=Math.abs(t),t>=this.fmtLimit?this.round(t/1e3,this.fmtDigits):this.round(t,0))},fmtUnit:function(t){return Math.abs(t)>=this.fmtLimit?"k":""},fmtDuration:function(t){if(t<=0||null==t)return"—";var e="0"+t%60,a="0"+Math.floor(t/60)%60,s=""+Math.floor(t/3600);return s.length<2&&(s="0"+s),s+":"+a.substr(-2)+":"+e.substr(-2)},fmtShortDuration:function(t){if(t<=0||null==t)return"—";var e,a=Math.floor(t/60)%60,s=Math.floor(t/3600);if(s>=1)a="0"+a,e=s+":"+a.substr(-2);else{var i="0"+t%60;e=a+":"+i.substr(-2)}return e},fmtShortDurationUnit:function(t){if(t<=0||null==t)return"";var e=Math.floor(t/3600);return e>=1?"h":"m"},getVisLink:function(){let t=document.location.origin.replace("2020",2021).replace("sunny5","vis.sunny5")+"/vis/#EVCCMOBILE",e=`<a class="nav-item nav-link pb-1" href="${t}">VIS-mobile</a>`;return e},getLoginLink:function(){return document.location.href.indexOf("auth=1")>-1?'<a class="nav-item nav-link pb-1" href="../smartbox/logout">Logout</a>':'<a class="nav-item nav-link pb-1" href="../smartbox/login">Login</a>'},fmtAbsoluteDate:function(t){return new Intl.DateTimeFormat("de-DE",{weekday:"short",hour:"numeric",minute:"numeric"}).format(t)},fmtRelativeTime:function(t){var e={year:31536e6,month:2628e6,day:864e5,hour:36e5,minute:6e4,second:1e3},a=new Intl.RelativeTimeFormat("de",{numeric:"auto",style:"narrow"}),s=(t,s=new Date)=>{var i=t-s;for(var r in e)if(Math.abs(i)>e[r]||"second"==r)return a.format(Math.round(i/e[r]),r)};return s(t)}}},B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{viewBox:"0 0 122 35",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},[a("path",{attrs:{d:"M13.082 29.071a12.384 12.384 0 01-9-3.42 12.192 12.192 0 01-3.54-9.12v-.64a15.394 15.394 0 011.47-6.83 10.825 10.825 0 014.17-4.64 11.64 11.64 0 016.15-1.63 10.45 10.45 0 018.21 3.26c2 2.194 3 5.297 3 9.31v2.76H7.382a6.348 6.348 0 002 4 5.997 5.997 0 004.16 1.49 7.305 7.305 0 006.1-2.84l3.31 3.73a10 10 0 01-4.13 3.39 13.309 13.309 0 01-5.74 1.18zm-.77-20.84a4.216 4.216 0 00-3.26 1.37 7.141 7.141 0 00-1.6 3.91h9.39v-.55a5.005 5.005 0 00-1.22-3.49 4.304 4.304 0 00-3.31-1.24zM36.452 20.331l4.7-17.09h7l-8.48 25.36h-6.44l-8.52-25.36h7l4.74 17.09zM85.542 23.611a4.444 4.444 0 003-1 3.638 3.638 0 001.22-2.75h6.32a8.668 8.668 0 01-1.4 4.73 9.145 9.145 0 01-3.79 3.3 11.736 11.736 0 01-5.29 1.19 10.912 10.912 0 01-8.54-3.46c-2.087-2.3-3.13-5.483-3.13-9.55v-.45c0-3.9 1.033-7.016 3.1-9.35a10.868 10.868 0 018.51-3.5c2.791-.134 5.524.84 7.6 2.71a9.626 9.626 0 012.9 7.21h-6.3a4.663 4.663 0 00-1.2-3.22 4.005 4.005 0 00-3.08-1.24 4.068 4.068 0 00-3.56 1.73c-.8 1.15-1.2 3-1.2 5.6v.7c0 2.61.39 4.49 1.19 5.63a4.092 4.092 0 003.65 1.72zM110.422 23.611a4.454 4.454 0 003-1 3.63 3.63 0 001.21-2.75h6.33a8.668 8.668 0 01-1.4 4.73 9.143 9.143 0 01-3.73 3.3 11.76 11.76 0 01-5.29 1.18 10.912 10.912 0 01-8.54-3.46c-2.087-2.3-3.13-5.483-3.13-9.55v-.45c0-3.9 1.033-7.016 3.1-9.35a10.85 10.85 0 018.57-3.49 10.575 10.575 0 017.6 2.71 9.598 9.598 0 012.91 7.21h-6.33a4.651 4.651 0 00-1.21-3.22 4.492 4.492 0 00-6.64.49c-.8 1.15-1.21 3-1.21 5.6v.7c0 2.607.4 4.484 1.2 5.63a4.09 4.09 0 003.56 1.72z",fill:"#fff","fill-rule":"nonzero"}}),a("path",{attrs:{d:"M58.462.751h9.22l-6.14 12.3h6.15l-11.53 21.51 2.3-15.36h-7.68l7.68-18.45z",fill:"#0fdd42","fill-rule":"nonzero"}}),a("path",{attrs:{fill:"none",d:"M-24.458-22.109h170v76h-170z"}})])},A=[],V={name:"Logo"},z=V,O=a("2877"),$=Object(O["a"])(z,B,A,!1,null,null,null),j=$.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"py-3 py-md-5 mt-3 mt-md-5 border-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("p",{staticClass:"text-muted"},[a("Version",t._b({},"Version",t.version,!1))],1)]),t._m(0)])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 text-right"},[a("small",{staticClass:"text-muted"},[a("a",{attrs:{href:"https://github.com/mark-sch/evcc",target:"_blank"}},[t._v("© 2020 andig/evcc, Think5 GmbH et al.")])])])}],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("small",{staticClass:"text-black"},[t.newVersionAvailable?a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showModal(e)}}},[a("fa-icon",{staticClass:"icon mr-1",attrs:{icon:"gift"}}),t._v("Update"),a("span",{staticClass:"d-none d-sm-inline"},[t._v(" verfügbar")]),t._v(": "+t._s(t.available)+" ")],1):a("a",{attrs:{href:t.releaseNotesUrl(t.installed),target:"_blank"}},[t._v(" Version "+t._s(t.installed)+" ")])]),a("transition",{attrs:{name:"fade"}},[t.modalActive?a("div",{staticClass:"dialog",attrs:{id:"updateModal",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title font-weight-bold"},[t._v("Update verfügbar")]),a("button",{staticClass:"close",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t.updateStarted?a("div",[a("p",[t._v("Nach der Aktualisierung wird evcc neu gestartet.")]),a("div",{staticClass:"progress my-3"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",style:{width:t.uploadProgress+"%"},attrs:{role:"progressbar"}})]),a("p",[t._v(t._s(t.updateStatus)+t._s(t.uploadMessage))])]):a("div",[a("p",[a("small",[t._v("Aktuell installierte Version: "+t._s(t.installed))])]),t.releaseNotes?a("div",{domProps:{innerHTML:t._s(t.releaseNotes)}}):a("p",[t._v(" Keine Releasenotes verfügbar. Mehr Informationen zur neuen Version findest du "),a("a",{attrs:{href:t.releaseNotesUrl(t.available)}},[t._v("hier")]),t._v(". ")])])]),a("div",{staticClass:"modal-footer d-flex justify-content-between"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[t._v(" Abbrechen ")]),a("div",[t.hasUpdater?a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.update}},[t.updateStarted?a("span",[a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Akualisieren ")]):a("span",[t._v("Jetzt aktualisieren")])]):a("a",{staticClass:"btn btn-primary",attrs:{href:t.releaseNotesUrl(t.available)}},[t._v(" Download ")])])])])])]):t._e()])],1)},W=[],R={name:"Version",props:{installed:String,available:String,releaseNotes:String,hasUpdater:Boolean,uploadMessage:String,uploadProgress:Number},data:function(){return{modalActive:!1,updateStarted:!1,updateStatus:""}},methods:{showModal:function(){this.modalActive=!0},closeModal:function(){this.modalActive=!1},update:async function(){try{await r.a.post("update"),this.updateStatus="Aktualisierung gestartet: ",this.updateStarted=!0}catch(t){this.updateStatus="Aktualisierung nicht möglich: "+t}},releaseNotesUrl:function(t){return"https://github.com/mark-sch/evcc/releases/tag/"+t}},computed:{newVersionAvailable:function(){return this.available&&"[[.Version]]"!=this.installed&&"0.0.1-alpha"!=this.installed&&this.available!=this.installed}}},F=R,K=(a("70df"),Object(O["a"])(F,H,W,!1,null,"9a26ca00",null)),Z=K.exports,G={name:"Footer",components:{Version:Z},props:{version:Object}},J=G,q=(a("a331"),Object(O["a"])(J,U,I,!1,null,"4325c3e4",null)),Q=q.exports;function X(t,e,a){const i=e.shift();t[i]||s["a"].set(t,i,{}),e.length?X(t[i],e,a):a&&"object"===typeof a&&!Array.isArray(a)?t[i]={...t[i],...a}:t[i]=a}const Y={state:{loadpoints:[]},update:function(t){Object.keys(t).forEach((function(e){"function"===typeof window.toasts[e]?window.toasts[e]({message:t[e]}):X(Y.state,e.split("."),t[e])}))}};var tt=Y,et={name:"App",components:{Logo:j,Footer:Q},data:function(){return{compact:!1,store:this.$root.$data.store,installedVersion:window.evcc.version}},methods:{connect:function(){const t=window.location,e="https:"==t.protocol?"wss:":"ws:",a=e+"//"+t.hostname+(t.port?":"+t.port:"")+t.pathname+"ws",s=new WebSocket(a),i=this;s.onerror=function(){s.close()},s.onclose=function(){window.setTimeout(i.connect,1e3)},s.onmessage=function(t){try{var e=function(t){return"Msg"+Math.abs(t.split("").reduce((t,e)=>(t=(t<<5)-t+e.charCodeAt(0),t&t),0))},a=JSON.parse(t.data);void 0==window.throttledToasts[e(t.data)]&&(window.throttledToasts[e(t.data)]=tt.update.throttle(1e4)),window.throttledToasts[e(t.data)](a)}catch(s){window.toasts.error(s,t.data)}}}},computed:{version:function(){return{installed:this.installedVersion,available:this.store.state.availableVersion,releaseNotes:this.store.state.releaseNotes,hasUpdater:this.store.state.hasUpdater,uploadMessage:this.store.state.uploadMessage,uploadProgress:this.store.state.uploadProgress}}},created:function(){const t=new URLSearchParams(window.location.search);this.compact=t.get("compact"),this.connect()},mixins:[N]},at=et,st=(a("8aed"),Object(O["a"])(at,n,o,!1,null,"eff5a074",null)),it=st.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",top:"4rem",right:"0.5rem"},attrs:{"aria-atomic":"true"}},t._l(t.items,(function(t){return a("ToastMessage",{key:t.id,attrs:{item:t,id:"message-id-"+t.id}})})),1)},nt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast",attrs:{"data-delay":"10000","data-autohide":!0}},[a("div",{staticClass:"toast-header"},["warn"!=t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-danger",attrs:{icon:"exclamation-triangle"}}),t._v(" Error")],1):t._e(),"warn"==t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-warning",attrs:{icon:"exclamation-triangle"}}),t._v(" Warning")],1):t._e(),t.item.status?a("small",[t._v("HTTP "+t._s(t.item.status))]):t._e(),t._m(0)]),a("div",{staticClass:"toast-body"},[t._v(t._s(t.item.message))])])},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],ct=a("1157"),dt=a.n(ct),ut={name:"ToastMessage",props:["item"],mounted:function(){const t="#message-id-"+this.item.id;dt()(t).toast("show"),dt()(t).on("hidden.bs.toast",function(){window.toasts.remove(this.item)}.bind(this))}},mt=ut,vt=Object(O["a"])(mt,ot,lt,!1,null,null,null),ht=vt.exports,pt={name:"Toasts",components:{ToastMessage:ht},props:{items:Object}},ft=pt,gt=Object(O["a"])(ft,rt,nt,!1,null,null,null),bt=gt.exports,Ct=a("8c4f"),_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.configured?a("Site",t._b({},"Site",t.state,!1)):a("div",[a("div",{staticClass:"row py-5"},[a("div",{staticClass:"col12"},[a("p",{staticClass:"h1 pt-5 pb-2 border-bottom"},[t._v("Willkommen bei evcc")]),a("p",{staticClass:"lead pt-2"},[a("b",[t._v("evcc")]),t._v(" ist dient zur flexiblen Ladesteuerung von Elektrofahrzeugen. ")]),a("p",{staticClass:"pt-2"},[t._v(" Es sieht aus, als wäre Dein "),a("b",[t._v("evcc")]),t._v(" noch nicht konfiguriert. Um "),a("b",[t._v("evcc")]),t._v(" zu konfigurieren sind die folgenden Schritte notwendig: ")]),a("ol",{staticClass:"pt-2"},[a("li",[t._v(" Erzeugen einer Konfigurationsdatei mit Namen "),a("code",[t._v("evcc.yaml")]),t._v(". Die Standardkonfiguration "),a("code",[t._v("evcc.dist.yaml")]),t._v(" kann dafür als Vorlage dienen ("),a("a",{attrs:{href:"https://github.com/mark-sch/evcc/blob/master/evcc.dist.yaml"}},[t._v("Download")]),t._v("). ")]),a("li",[t._v("Konfiguration der Wallbox als "),a("code",[t._v("chargers")]),t._v(".")]),a("li",[t._v(" Konfiguration des EVU Zählers und evtl. weiterer Zähler unter "),a("code",[t._v("meters")]),t._v(". ")]),a("li",[t._v(" Konfiguration des Netzanschlusses unter "),a("code",[t._v("site")]),t._v(". In einer Site wird der Netzanschluss mit dem konfigurierten EVU Zähler ("),a("code",[t._v("meter")]),t._v(") verbunden. ")]),a("li",[t._v(" Konfiguration eines Ladepunktes unter "),a("code",[t._v("loadpoints")]),t._v(". In einem Ladepunkt wird die konfigurierte Wallbox ("),a("code",[t._v("charger")]),t._v(") mit dem Ladepunkt verbunden. ")]),a("li",[t._v(" Start von "),a("b",[t._v("evcc")]),t._v(" mit der neu erstellten Konfiguration: "),a("code",[t._v("evcc -c evcc.yaml")])])]),a("p",[t._v("Minimale Beispielkonfiguration für "),a("b",[t._v("evcc")]),t._v(":")]),a("p",[a("code",[a("pre",{staticClass:"mx-3"},[t._v("                uri: localhost:7070 # Adresse für UI\n                interval: 10s # Regelintervall\n                meters:\n                - name: evu-zähler\n                type: ... # Detailkonfiguration des EVU Zählers\n                - name: ladezähler\n                type: ... # Detailkonfiguration des Ladezählers (optional)\n                chargers:\n                - name: wallbox\n                type: ... # Detailkonfiguration der Wallbox\n                site:\n                  title: Home\n                  meters:\n                  grid: evu-zähler # EVU Zähler\n                loadpoints:\n                - title: Ladepunkt # ui display name\n                  charger: wallbox # charger\n                  meters:\n                    charge: ladezähler # Ladezählers (optional)\n              ")])])]),a("p",[t._v(" Viel Spass mit "),a("b",[t._v("evcc")]),t._v("! Bei Problemen kannst Du uns auf "),a("a",{attrs:{href:"https://github.com/mark-sch/evcc/issues"}},[t._v("GitHub")]),t._v(" erreichen. ")])])])])],1)},wt=[],yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-flex col-12 col-md-4 mt-md-4 align-items-end"},[a("p",{staticClass:"h1"},[t._v(t._s(t.siteTitle||"Home"))])]),t.multi?a("div",{staticClass:"col-12 col-md-8 mt-md-4"},[a("SiteDetails",t._b({},"SiteDetails",t.details,!1))],1):t._e()]),a("div",{staticClass:"row d-none d-md-flex border-bottom"}),t.multi?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-block col-md-4"}),a("div",{staticClass:"col-12 col-md-8"},[a("SiteDetails",t._b({},"SiteDetails",t.details,!1))],1)]),t._l(t.loadpoints,(function(e,s){return a("Loadpoint",t._b({key:s,attrs:{id:s,multi:t.multi,pvConfigured:t.pvConfigured}},"Loadpoint",e,!1))}))],2)},St=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t.gridConfigured?a("div",{staticClass:"col-6 col-md-3 mt-3"},[t.gridPower>0?a("div",{staticClass:"mb-2 value"},[t._v(" Bezug "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-down"}})],1):a("div",{staticClass:"mb-2 value"},[t._v(" Einspeisung "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-up"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.gridPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.gridPower))+"W")])])]):t._e(),t.pvConfigured?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Erzeugung "),a("fa-icon",{class:{"text-primary":t.pvPower>0,"text-muted":t.pvPower<=0},attrs:{icon:"sun"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.pvPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.pvPower))+"W")])])]):t._e(),t.batteryConfigured?a("div",{staticClass:"d-md-block col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Batterie ("+t._s(t.batterySoC)+"%) "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:t.batteryIcon}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.batteryPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.batteryPower))+"W")])])]):t._e(),t.pvConfigured?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Verbrauch "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"plug"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.consumptionPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.consumptionPower))+"W")])])]):t._e()])},kt=[];const Mt=20,Dt=["battery-empty","battery-quarter","battery-half","battery-three-quarters","battery-full"];var Tt={name:"SiteDetails",props:{gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,consumptionPower:Number,batterySoC:Number},data:function(){return{iconIdx:0}},mixins:[N],computed:{batteryIcon:function(){return Math.abs(this.batteryPower)<Mt?this.batterySoC<30?Dt[0]:this.batterySoC<50?Dt[1]:this.batterySoC<70?Dt[2]:this.batterySoC<90?Dt[3]:Dt[4]:Dt[this.iconIdx]}},mounted:function(){window.setInterval(()=>{this.batteryPower>Mt?--this.iconIdx<0&&(this.iconIdx=Dt.length-1):this.batteryPower<Mt&&++this.iconIdx>=Dt.length&&(this.iconIdx=0)},1e3)}},Lt=Tt,Pt=Object(O["a"])(Lt,xt,kt,!1,null,null,null),Et=Pt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.multi?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 d-md-flex mt-3 mt-md-5 align-items-end"},[a("span",{staticClass:"h1 align-bottom"},[t._v(t._s(t.title||"Ladepunkt"))])]),a("div",{staticClass:"col-12 col-md-8 d-none d-md-block mt-3 mt-md-5"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1),a("div",{staticClass:"col-12 d-md-none"},[a("div",{staticClass:"row mt-3 pb-3 bg-light"},[a("div",{staticClass:"col-12 mt-3"},[a("Mode",{staticClass:"w-100",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-12 mt-3"},[a("Soc",{staticClass:"w-100",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e()])])]):t._e(),t.multi?t._e():a("div",{staticClass:"row d-none d-md-flex mt-5 py-3 pb-4 text-center bg-light"},[a("div",{staticClass:"mt-3",class:{"col-md-6":t.hasTargetSoC,"col-md-12":!t.hasTargetSoC}},[a("Mode",{attrs:{mode:t.mode,pvConfigured:t.pvConfigured,caption:!0},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-md-6 mt-3"},[a("Soc",{attrs:{soc:t.targetSoC,levels:t.socLevels,caption:!0},on:{updated:t.setTargetSoC}})],1):t._e()]),t.multi?t._e():a("div",{staticClass:"row d-md-none mt-2 pb-3 bg-light"},[a("div",{staticClass:"col-12 mt-3"},[a("Mode",{staticClass:"w-100",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-12 mt-3"},[a("Soc",{staticClass:"w-100",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e()]),t.multi?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 d-none d-md-flex mt-3 mt-md-5"},[a("span",{staticClass:"h1"},[t._v(t._s(t.title||"Ladepunkt"))])]),t.remoteDisabled?a("div",{staticClass:"col-12 col-md-8 d-flex d-md-flex mt-3 mt-md-5 pt-3"},[a("h5",{staticClass:"w-100"},["soft"==t.remoteDisabled?a("span",{staticClass:"badge badge-warning w-100"},[t._v(" "+t._s(t.remoteDisabledSource)+": Adaptives PV-Laden deaktiviert ")]):t._e(),"hard"==t.remoteDisabled?a("span",{staticClass:"badge badge-danger w-100"},[t._v(" "+t._s(t.remoteDisabledSource)+": Deaktiviert ")]):t._e()])]):t._e()]),a("div",{staticClass:"row border-bottom d-none d-md-block"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mt-3 mb-3 mb-md-0"},[a("Vehicle",t._b({},"Vehicle",t.vehicle,!1))],1),t.multi?a("div",{staticClass:"col-12 col-md-4 d-none d-md-block mt-3"},[a("div",{staticClass:"mb-2 pb-1"},[t._v("Modus")]),a("Mode",{staticClass:"btn-group-sm",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1):t._e(),t.multi&&t.hasTargetSoC?a("div",{staticClass:"col-12 col-md-4 d-none d-md-block mt-3"},[a("div",{staticClass:"mb-2 pb-1"},[t._v("Ladeziel")]),a("Soc",{staticClass:"btn-group-sm",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e(),t.multi?t._e():a("div",{staticClass:"col-md-8 d-none d-md-block"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1),a("div",{staticClass:"col-12 d-md-none"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1)])])},Bt=[],At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group btn-group-toggle bg-white shadow-none"},[t.caption?a("label",{staticClass:"btn btn-outline-primary disabled caption font-weight-bold"},[t._v(" Ladeziel ")]):t._e(),t._l(t.levelsOrDefault,(function(e,s){return a("label",{key:s,staticClass:"btn btn-outline-primary",class:{active:t.soc==e,first:!t.caption&&0==s},attrs:{level:e,id:s}},[a("input",{attrs:{type:"radio"},domProps:{value:e},on:{click:function(a){return t.setTargetSoC(e)}}}),t._v(t._s(e)+"% ")])}))],2)},Vt=[],zt={name:"Soc",props:{soc:Number,caption:Boolean,levels:Array},computed:{levelsOrDefault:function(){return null==this.levels||0==this.levels.length?[]:this.levels}},methods:{setTargetSoC:function(t){this.$emit("updated",t)}}},Ot=zt,$t=Object(O["a"])(Ot,At,Vt,!1,null,null,null),jt=$t.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group btn-group-toggle bg-white shadow-none"},[t.caption?a("label",{staticClass:"btn btn-outline-primary value disabled caption font-weight-bold"},[t._v(" Modus ")]):t._e(),a("label",{staticClass:"btn btn-outline-primary",class:{active:"off"==t.mode,first:!t.caption}},[a("input",{attrs:{type:"radio",value:"off"},on:{click:function(e){return t.setTargetMode("off")}}}),t._v("Stop ")]),a("label",{staticClass:"btn btn-outline-primary",class:{active:"now"==t.mode}},[a("input",{attrs:{type:"radio",value:"now"},on:{click:function(e){return t.setTargetMode("now")}}}),t._v("Sofort ")]),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"minpv"==t.mode}},[a("input",{attrs:{type:"radio",value:"minpv"},on:{click:function(e){return t.setTargetMode("minpv")}}}),a("span",{staticClass:"d-inline d-lg-none"},[t._v("Min")]),a("span",{staticClass:"d-none d-lg-inline"},[t._v("Min + PV")])]):t._e(),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"pv"==t.mode}},[a("input",{attrs:{type:"radio",value:"pv"},on:{click:function(e){return t.setTargetMode("pv")}}}),a("span",{staticClass:"d-inline d-md-none"},[t._v("PV")]),a("span",{staticClass:"d-none d-md-inline"},[t._v("Nur PV")])]):t._e()])},It=[],Ht={name:"Mode",props:{mode:String,pvConfigured:Boolean,caption:Boolean},methods:{setTargetMode:function(t){this.$emit("updated",t)}}},Wt=Ht,Rt=Object(O["a"])(Wt,Ut,It,!1,null,null,null),Ft=Rt.exports,Kt=function(){var t,e,a,s=this,i=s.$createElement,r=s._self._c||i;return r("div",[r("div",{staticClass:"mb-2 pb-1"},[s._v(" "+s._s(s.socTitle||"Fahrzeug")+" ")]),r("div",{staticClass:"soc-bar"},[r("div",{staticClass:"progress small"},[r("div",{staticClass:"progress-bar",class:(t={"progress-bar-striped":s.charging,"progress-bar-animated":s.charging},t[s.progressColor]=!0,t),style:{width:s.socChargeDisplayWidth+"%"},attrs:{role:"progressbar"}},[s._v(" "+s._s(s.socChargeDisplayValue)+" ")]),s.remainingSoCWidth>0?r("div",{staticClass:"progress-bar",class:(e={"progress-bar-striped":s.charging,"progress-bar-animated":s.charging},e[s.progressColor]=!0,e["bg-muted"]=!0,e),style:{width:s.remainingSoCWidth+"%"},attrs:{role:"progressbar"}}):s._e(),s.socMarker?r("div",{staticClass:"soc-marker",class:(a={},a[s.progressColor]=!0,a),style:{left:s.socMarker+"%"}}):s._e()])]),s.markerLabel()?r("small",{staticClass:"subline my-2 text-secondary"},[s.minSoCActive?r("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"exclamation-circle"}}):s.targetChargeEnabled?r("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"clock"}}):s.priorityActive?r("fa-icon",{staticClass:"text-muted mr-1",attrs:{icon:"star"}}):s._e(),s._v(" "+s._s(s.markerLabel())+" ")],1):s._e()])},Zt=[],Gt={name:"Vehicle",props:{socTitle:String,connected:Boolean,hasVehicle:Boolean,hasPriority:Boolean,socCharge:Number,enabled:Boolean,charging:Boolean,minSoC:Number,timerActive:Boolean,timerSet:Boolean,targetTime:String,targetSoC:Number},computed:{socChargeDisplayWidth:function(){return this.hasVehicle&&this.socCharge>0?this.socCharge:100},socChargeDisplayValue:function(){if(!this.hasVehicle||!this.socCharge||this.socCharge<=0){let t="getrennt";return this.charging?t="lädt":this.enabled?t="bereit":this.connected&&(t="verbunden"),t}let t=this.socCharge;return t>=10&&(t+="%"),t},socMarker:function(){return this.minSoCActive?this.minSoC:100===this.targetSoC?null:this.targetSoC>this.socCharge&&this.connected?this.targetSoC:null},progressColor:function(){return this.connected?this.minSoCActive?"bg-danger":this.enabled?"bg-primary":"bg-secondary":"bg-light border"},minSoCActive:function(){return this.minSoC>0&&this.socCharge<this.minSoC&&this.socCharge>0},priorityActive:function(){return this.hasPriority},targetChargeEnabled:function(){return this.targetTime&&this.timerSet},remainingSoCWidth:function(){return 100===this.socCharge||this.socCharge<=0?null:this.minSoCActive?this.minSoC-this.socCharge:this.targetSoC>this.socCharge?this.targetSoC-this.socCharge:null}},methods:{markerLabel:function(){if(this.priorityActive)return"Bevorzugt bei Überschussladung";if(!this.connected)return null;if(this.minSoCActive)return`Mindestladung bis ${this.socMarker}%`;if(this.targetChargeEnabled){const t=Date.parse(this.targetTime);return this.timerActive?`Lädt ${this.fmtRelativeTime(t)} bis ${this.socMarker}%`:`Geplant bis ${this.fmtAbsoluteDate(t)} bis ${this.socMarker}%`}return null}},mixins:[N]},Jt=Gt,qt=(a("35bf"),Object(O["a"])(Jt,Kt,Zt,!1,null,"ed1e0fe2",null)),Qt=qt.exports,Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Leistung "),"heating"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-low"}}):t._e(),"cooling"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-high"}}):t._e(),"on"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"thermometer-half"}}):t._e(),t.hasPriority?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"star"}}):t._e()],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargePower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargePower))+"W")])])]),a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Geladen")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargedEnergy))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargedEnergy))+"Wh")])])]),t.range>=0?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Reichweite")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(Math.round(t.range))+" "),a("small",{staticClass:"text-muted"},[t._v("km")])])]):a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Dauer")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeDuration))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeDuration)))])])]),t.hasVehicle?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Restzeit")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeEstimate))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeEstimate)))])])]):t._e()])},Yt=[],te={name:"LoadpointDetails",props:{chargedEnergy:Number,chargeDuration:Number,chargeEstimate:Number,chargePower:Number,climater:String,hasVehicle:Boolean,hasPriority:Boolean,range:Number},mixins:[N]},ee=te,ae=Object(O["a"])(ee,Xt,Yt,!1,null,null,null),se=ae.exports,ie={methods:{collectProps:function(t){let e={};for(var a in t.props)e[a]=this[a];return e}}},re={name:"Loadpoint",props:{id:Number,multi:Boolean,pvConfigured:Boolean,title:String,mode:String,targetSoC:Number,socLevels:Array,remoteDisabled:Boolean,remoteDisabledSource:String,chargeDuration:Number,charging:Boolean,connected:Boolean,enabled:Boolean,socTitle:String,socCharge:Number,minSoC:Number,timerSet:Boolean,timerActive:Boolean,targetTime:String,chargePower:Number,chargedEnergy:Number,hasVehicle:Boolean,hasPriority:Boolean,climater:String,range:Number,chargeEstimate:Number},components:{LoadpointDetails:se,Soc:jt,Mode:Ft,Vehicle:Qt},mixins:[N,ie],data:function(){return{tickerHandle:null,chargeDurationDisplayed:null}},computed:{details:function(){return this.collectProps(se)},vehicle:function(){return this.collectProps(Qt)},hasTargetSoC:function(){return null!=this.socLevels&&this.socLevels.length>0}},watch:{chargeDuration:function(){window.clearInterval(this.tickerHandle),this.charging&&this.chargeDuration>=0&&(this.chargeDurationDisplayed=this.chargeDuration,this.tickerHandle=window.setInterval(function(){this.chargeDurationDisplayed+=1}.bind(this),1e3))}},methods:{api:function(t){return"loadpoints/"+this.id+"/"+t},setTargetMode:function(t){r.a.post(this.api("mode")+"/"+t).then(function(t){this.mode=t.data.mode}.bind(this)).catch(window.toasts.error)},setTargetSoC:function(t){r.a.post(this.api("targetsoc")+"/"+t).then(function(t){this.targetSoC=t.data.targetSoC}.bind(this)).catch(window.toasts.error)}},destroyed:function(){window.clearInterval(this.tickerHandle)}},ne=re,oe=Object(O["a"])(ne,Nt,Bt,!1,null,null,null),le=oe.exports,ce={name:"Site",props:{siteTitle:String,loadpoints:Array,gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,consumptionPower:Number,batterySoC:Number},components:{SiteDetails:Et,Loadpoint:le},mixins:[N,ie],computed:{details:function(){return this.collectProps(Et)},multi:function(){return this.loadpoints.length>1}}},de=ce,ue=Object(O["a"])(de,yt,St,!1,null,null,null),me=ue.exports,ve={name:"Main",components:{Site:me},data:function(){return this.$root.$data.store},computed:{configured:function(){const t=window.evcc.configured;return t==window.evcc.configured||!isNaN(parseInt(t))&&parseInt(t)>0}}},he=ve,pe=Object(O["a"])(he,_t,wt,!1,null,null,null),fe=pe.exports,ge=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-4 border-bottom"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"h1"},[t._v(t._s(t.title||"Home"))])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Netzzähler: "),t.gridConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" PV Zähler: "),t.pvConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Batteriezähler: "),t.batteryConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])])]),t._l(t.loadpoints,(function(e,s){return a("div",{key:s,attrs:{loadpoint:e,id:"loadpoint-"+s}},[a("div",{staticClass:"row mt-4 border-bottom"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"h1"},[t._v(t._s(e.title||"Ladepunkt"))])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Ladezähler: "),e.chargeConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Phasen: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.phases)+"p")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Min. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.minCurrent)+"A")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Max. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.maxCurrent)+"A")])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-md-8 h2"},[t._m(0,!0),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-6 py-3"},[t._v(" Modell: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socTitle||"—"))])]),a("div",{staticClass:"col-6 py-3"},[t._v(" Kapazität: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socCapacity)+"kWh")])])])])])])}))],2)},be=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row py-3 h2 border-bottom"},[a("div",{staticClass:"col-12"},[t._v("Fahrzeug")])])}],Ce={name:"Config",data:function(){return this.$root.$data.store.state}},_e=Ce,we=Object(O["a"])(_e,ge,be,!1,null,null,null),ye=we.exports;s["a"].use(Ct["a"]);const Se=[{path:"/",component:fe},{path:"/config",component:ye}];var xe=new Ct["a"]({routes:Se,linkExactActiveClass:"active"});const ke=window.location;r.a.defaults.baseURL=ke.protocol+"//"+ke.hostname+(ke.port?":"+ke.port:"")+ke.pathname+"api",r.a.defaults.headers.post["Content-Type"]="application/json",Function.prototype.throttle=function(t){let e,a=0,s=this;function i(){let i=this;function n(t){a=Date.now(),s.apply(i,t)}let o=t-(Date.now()-a);r(),o<0?n(arguments,0):e=setTimeout(n,o,arguments)}function r(){e&&(clearTimeout(e),e=void 0)}return i.reset=function(){r(),a=0},i},window.toasts=new s["a"]({el:"#toasts",render:function(t){return t(bt,{props:{items:this.items,count:this.count}})},data:{items:{},count:0},name:"ToastsRoot",methods:{raise:function(t){let e=!1;Object.keys(this.items).forEach((function(a){let s=this.items[a];s.type==t.type&&s.message==t.message&&(e=!0)}),this),e||(t.id=this.count++,s["a"].set(this.items,t.id,t))},error:function(t){t.type="error","Request failed with status code 403"==t.message&&(t.message="Keine Berechtigung! Bitte einloggen."),this.raise(t)},warn:function(t){t.type="warn",this.raise(t)},remove:function(t){s["a"].delete(this.items,t.id)}}}),window.throttledToasts=function(){},new s["a"]({el:"#app",router:xe,data:{store:tt},render:t=>t(it)}),window.setInterval((async function(){void 0==window.throttledToasts["health"]&&(window.throttledToasts["health"]=window.toasts.error.throttle(3e4)),await r.a.get("health").then((function(t){window.throttledToasts["health"].reset()})).catch((function(t){t.message="EVCC nicht erreichbar",window.throttledToasts["health"](t)}))}),5e3)},"9f12":function(t,e,a){},a331:function(t,e,a){"use strict";a("472c")},b19f:function(t,e,a){}});
//# sourceMappingURL=index.77a64717.js.map