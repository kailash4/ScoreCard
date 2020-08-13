(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{xHWh:function(e,l,n){"use strict";n.r(l),n.d(l,"WeatherPageModuleNgFactory",(function(){return b}));var t=n("8Y7J");class a{}var u=n("pMnS"),o=n("MKJQ"),i=n("sZkV"),r=n("s7LF"),d=n("SVse"),c=n("mrSG");class s{constructor(e,l,n,t,a,u){this.weather=e,this.toast=l,this.alertController=n,this.platform=t,this.router=a,this.nativeFirebaseAnalytics=u,this.searchPlace="",this.stateChangeval="Current",this.type=!1,this.WeatherData={temp_celcius:"",isDay:"",temp_min:"",temp_max:"",temp_feels_like:"",main:{humidity:""},weatherDes:"",name:""},this.weatherShowData={temp_celcius:"",isDay:"",temp_min:"",temp_max:"",temp_feels_like:"",main:{humidity:""},weatherDes:"",name:""},this.localWeather=[],this.selectedCityName=""}ngOnInit(){this.platform.ready().then(()=>{this.nativeFirebaseAnalytics.setUserId("123123"),this.nativeFirebaseAnalytics.setUserProperty("Weather","Feedback")}),this.type?this.searchWeather("bangalore","user"):this.callLocaldata(),this.platform.resume.subscribe(()=>Object(c.__awaiter)(this,void 0,void 0,(function*(){try{this.selectedCityName=window.localStorage.getItem("selectedCity")}catch(e){}this.selectedCityName&&this.searchWeather(this.selectedCityName,"resume")})))}callLocaldata(){return Object(c.__awaiter)(this,void 0,void 0,(function*(){yield this.weather.getlocalWeather("weather").subscribe(e=>{let l;l=JSON.parse(e),this.localWeather=l.data.weather,this.formate(this.localWeather[0],"old"),this.selectedLocal=this.localWeather[0].city})}))}changeLocalToAPI(e){this.type=e}searchInLocal(e){this.localWeather.forEach(l=>{e===l.city&&(this.formate(l,"old"),this.selectedCity(e))})}getLocalData(){return JSON.parse(window.localStorage.getItem("saved"))}searchWeather(e,l){return Object(c.__awaiter)(this,void 0,void 0,(function*(){this.selectedCity(e),this.weather.getWeatherDetails(e).subscribe(e=>{this.formate(this.setWeatherData(e),"resume"==l?"resume":"api")},e=>{console.log("searchWeather:",e),this.alertMessage("Incorrect location")})}))}selectedCity(e){window.localStorage.setItem("selectedCity",e)}setWeatherData(e){let l=e,n=new Date(1e3*l.sys.sunset);l.sunset_time=n.toLocaleTimeString();let t=new Date;return l.isDay=t.getTime()<n.getTime(),l.temp_celcius=(l.main.temp-273.15).toFixed(0),l.temp_min=(l.main.temp_min-273.15).toFixed(0),l.temp_max=(l.main.temp_max-273.15).toFixed(0),l.temp_feels_like=(l.main.feels_like-273.15).toFixed(0),l.tdate=t,l.weatherIcon=this.setIcons(l.weather[0].main),l.weatherDes=l.weather[0].description,l}formate(e,l){if("resume"==l)return this.modelDdetails={temp_celcius:e.temp_celcius,temp_min:e.temp_min,temp_max:e.temp_max,name:e.name,weatherDes:e.weatherDes,tdate:e.tdate,weatherIcon:e.weatherIcon},void this.presentAlertConfirm(this.modelDdetails);this.weatherShowData="api"==l?{temp_celcius:e.temp_celcius,temp_min:e.temp_min,temp_max:e.temp_max,name:e.name,weatherDes:e.weatherDes,tdate:e.tdate,weatherIcon:e.weatherIcon}:{temp_celcius:e.weatherP,temp_min:e.min,temp_max:e.max,name:e.city,weatherDes:e.weather,tdate:new Date,weatherIcon:e.weatherP>25?"Sunny":"snow"}}setIcons(e){switch(console.log(e),e){case"Clouds":return"cloud";case"Drizzle":return"rainy";case"Sunny":return"sunny";case"Thunderstorm":return"thunderstorm";case"Haze":return"partly-sunny";case"Mist":return"snow";default:return"cloud"}}alertMessage(e){return Object(c.__awaiter)(this,void 0,void 0,(function*(){(yield this.toast.create({message:e,position:"bottom",duration:2e3})).present()}))}feedBack(e){this.alertMessage("Thank you for your feedback!")}presentAlert(e){return Object(c.__awaiter)(this,void 0,void 0,(function*(){const l=yield this.alertController.create({cssClass:"my-custom-class",header:"Alert",message:e,buttons:["OK"]});yield l.present()}))}fireBase(e){console.log("fire calling:",e),this.nativeFirebaseAnalytics.logEvent("my_event",{param1:e}).then(e=>this.alertMessage("Thank you for your feedback!")).catch(e=>this.alertMessage(e))}camera(){this.router.navigate(["/takePhoto"])}presentAlertConfirm(e){return Object(c.__awaiter)(this,void 0,void 0,(function*(){const l=yield this.alertController.create({cssClass:"my-custom-class",header:"New!",subHeader:"Do you want to update?",message:"Current weather <strong>"+e.temp_celcius+"\xb0</strong>!!!",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:e=>{console.log("Confirm Cancel: blah")}},{text:"Okay",handler:()=>{this.weatherShowData=e,this.alertMessage("Status updated!")}}]});yield l.present()}))}}var h=n("H+bZ"),m=n("iInd"),g=n("9JKG"),p=t["\u0275crt"]({encapsulation:0,styles:[[".shape[_ngcontent-%COMP%]{-webkit-clip-path:polygon(20% 0,80% 0,100% 0,100% 100%,60% 91%,29% 78%,0 50%,0 0);clip-path:polygon(20% 0,80% 0,100% 0,100% 100%,60% 91%,29% 78%,0 50%,0 0);height:350px;background-color:#303644;color:#fff}.mycard[_ngcontent-%COMP%]   .shapeDetails[_ngcontent-%COMP%]{text-align:center;padding:15px;line-height:1.5;position:relative}.mycard[_ngcontent-%COMP%]   .shapeDetails[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]{font-size:20px}.mycard[_ngcontent-%COMP%]   .shapeDetails[_ngcontent-%COMP%]   .temp_celcius[_ngcontent-%COMP%]{font-size:78px}.mycard[_ngcontent-%COMP%]   .shapeDetails[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:55px}.feedback[_ngcontent-%COMP%]{position:absolute;right:0;bottom:-10px;text-align:center}"]],data:{}});function f(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,11,"ion-item",[],null,null,null,o.N,o.o)),t["\u0275did"](1,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](2,0,null,0,6,"ion-input",[["placeholder","place"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(e,l,n){var a=!0,u=e.component;return"ionBlur"===l&&(a=!1!==t["\u0275nov"](e,3)._handleBlurEvent(n.target)&&a),"ionChange"===l&&(a=!1!==t["\u0275nov"](e,3)._handleInputEvent(n.target)&&a),"ngModelChange"===l&&(a=!1!==(u.searchPlace=n)&&a),a}),o.M,o.n)),t["\u0275did"](3,4341760,null,0,i.Ib,[t.Injector,t.ElementRef],null,null),t["\u0275prd"](1024,null,r.c,(function(e){return[e]}),[i.Ib]),t["\u0275did"](5,671744,null,0,r.f,[[8,null],[8,null],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.d,null,[r.f]),t["\u0275did"](7,16384,null,0,r.e,[[4,r.d]],null,null),t["\u0275did"](8,49152,null,0,i.F,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(e()(),t["\u0275eld"](9,0,null,0,2,"ion-button",[["item-right",""]],null,[[null,"click"]],(function(e,l,n){var t=!0,a=e.component;return"click"===l&&(t=!1!==a.searchWeather(a.searchPlace,"user")&&t),t}),o.A,o.b)),t["\u0275did"](10,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Search"]))],(function(e,l){e(l,5,0,l.component.searchPlace),e(l,8,0,"place","text")}),(function(e,l){e(l,2,0,t["\u0275nov"](l,7).ngClassUntouched,t["\u0275nov"](l,7).ngClassTouched,t["\u0275nov"](l,7).ngClassPristine,t["\u0275nov"](l,7).ngClassDirty,t["\u0275nov"](l,7).ngClassValid,t["\u0275nov"](l,7).ngClassInvalid,t["\u0275nov"](l,7).ngClassPending)}))}function C(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,o.Q,o.s)),t["\u0275did"](1,49152,null,0,i.kb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(e()(),t["\u0275ted"](2,0,["",""]))],(function(e,l){e(l,1,0,l.context.$implicit.city)}),(function(e,l){e(l,2,0,l.context.$implicit.city)}))}function v(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,13,"ion-item",[],null,null,null,o.N,o.o)),t["\u0275did"](1,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](2,0,null,0,2,"ion-label",[],null,null,null,o.O,o.p)),t["\u0275did"](3,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Local"])),(e()(),t["\u0275eld"](5,0,null,0,8,"ion-select",[["placeholder","Select place"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(e,l,n){var a=!0,u=e.component;return"ionBlur"===l&&(a=!1!==t["\u0275nov"](e,6)._handleBlurEvent(n.target)&&a),"ionChange"===l&&(a=!1!==t["\u0275nov"](e,6)._handleChangeEvent(n.target)&&a),"ngModelChange"===l&&(a=!1!==(u.selectedLocal=n)&&a),"ionChange"===l&&(a=!1!==u.searchInLocal(u.selectedLocal)&&a),a}),o.R,o.r)),t["\u0275did"](6,4341760,null,0,i.Hb,[t.Injector,t.ElementRef],null,null),t["\u0275prd"](1024,null,r.c,(function(e){return[e]}),[i.Hb]),t["\u0275did"](8,671744,null,0,r.f,[[8,null],[8,null],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.d,null,[r.f]),t["\u0275did"](10,16384,null,0,r.e,[[4,r.d]],null,null),t["\u0275did"](11,49152,null,0,i.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](13,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(e,l){var n=l.component;e(l,8,0,n.selectedLocal),e(l,11,0,"Select place"),e(l,13,0,n.localWeather)}),(function(e,l){e(l,5,0,t["\u0275nov"](l,10).ngClassUntouched,t["\u0275nov"](l,10).ngClassTouched,t["\u0275nov"](l,10).ngClassPristine,t["\u0275nov"](l,10).ngClassDirty,t["\u0275nov"](l,10).ngClassValid,t["\u0275nov"](l,10).ngClassInvalid,t["\u0275nov"](l,10).ngClassPending)}))}function y(e){return t["\u0275vid"](0,[t["\u0275pid"](0,d.DatePipe,[t.LOCALE_ID]),(e()(),t["\u0275eld"](1,0,null,null,16,"ion-header",[],null,null,null,o.K,o.l)),t["\u0275did"](2,49152,null,0,i.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](3,0,null,0,14,"ion-toolbar",[],null,null,null,o.X,o.y)),t["\u0275did"](4,49152,null,0,i.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](5,0,null,0,2,"ion-title",[],null,null,null,o.V,o.w)),t["\u0275did"](6,49152,null,0,i.wb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["weather"])),(e()(),t["\u0275eld"](8,0,null,0,9,"ion-buttons",[["slot","end"]],null,null,null,o.B,o.c)),t["\u0275did"](9,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](10,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.presentAlert("The app will give you local and real time weather details!")&&t),t}),o.A,o.b)),t["\u0275did"](11,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](12,0,null,0,1,"ion-icon",[["name","alert"],["slot","icon-only"]],null,null,null,o.L,o.m)),t["\u0275did"](13,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](14,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.camera()&&t),t}),o.A,o.b)),t["\u0275did"](15,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](16,0,null,0,1,"ion-icon",[["name","camera-outline"],["slot","icon-only"]],null,null,null,o.L,o.m)),t["\u0275did"](17,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](18,0,null,null,70,"ion-content",[],null,null,null,o.I,o.j)),t["\u0275did"](19,49152,null,0,i.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](20,0,null,0,17,"ion-card",[],null,null,null,o.G,o.d)),t["\u0275did"](21,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](22,0,null,0,11,"ion-item",[],null,[[null,"ionChange"]],(function(e,l,n){var t=!0,a=e.component;return"ionChange"===l&&(t=!1!==a.changeLocalToAPI(a.type)&&t),t}),o.N,o.o)),t["\u0275did"](23,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](24,0,null,0,2,"ion-label",[],null,null,null,o.O,o.p)),t["\u0275did"](25,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Real Time"])),(e()(),t["\u0275eld"](27,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(e,l,n){var a=!0,u=e.component;return"ionBlur"===l&&(a=!1!==t["\u0275nov"](e,28)._handleBlurEvent(n.target)&&a),"ionChange"===l&&(a=!1!==t["\u0275nov"](e,28)._handleIonChange(n.target)&&a),"ngModelChange"===l&&(a=!1!==(u.type=n)&&a),a}),o.W,o.x)),t["\u0275did"](28,4341760,null,0,i.c,[t.Injector,t.ElementRef],null,null),t["\u0275prd"](1024,null,r.c,(function(e){return[e]}),[i.c]),t["\u0275did"](30,671744,null,0,r.f,[[8,null],[8,null],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.d,null,[r.f]),t["\u0275did"](32,16384,null,0,r.e,[[4,r.d]],null,null),t["\u0275did"](33,49152,null,0,i.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275and"](16777216,null,0,1,null,f)),t["\u0275did"](35,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](37,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275eld"](38,0,null,0,50,"ion-card",[["class","mycard"]],null,null,null,o.G,o.d)),t["\u0275did"](39,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](40,0,null,0,9,"div",[["class","shape shapeDetails"]],null,null,null,null,null)),(e()(),t["\u0275eld"](41,0,null,null,1,"div",[["class","today"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["Today"])),(e()(),t["\u0275eld"](43,0,null,null,1,"div",[["class","temp_celcius"]],null,null,null,null,null)),(e()(),t["\u0275ted"](44,null,["","\xb0"])),(e()(),t["\u0275eld"](45,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),t["\u0275eld"](46,0,null,null,1,"ion-icon",[],null,null,null,o.L,o.m)),t["\u0275did"](47,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](48,0,null,null,1,"div",[["class","temp_min"]],null,null,null,null,null)),(e()(),t["\u0275ted"](49,null,["Min:","\xb0 / Max:","\xb0"])),(e()(),t["\u0275eld"](50,0,null,0,9,"ion-card-header",[],null,null,null,o.D,o.f)),t["\u0275did"](51,49152,null,0,i.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](52,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.E,o.g)),t["\u0275did"](53,49152,null,0,i.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](54,0,["",""])),(e()(),t["\u0275eld"](55,0,null,0,4,"ion-card-title",[],null,null,null,o.F,o.h)),t["\u0275did"](56,49152,null,0,i.p,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](57,0,[""," "])),(e()(),t["\u0275eld"](58,0,null,0,1,"ion-icon",[],null,null,null,o.L,o.m)),t["\u0275did"](59,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](60,0,null,0,28,"ion-card-content",[],null,null,null,o.C,o.e)),t["\u0275did"](61,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](62,0,null,0,26,"ion-grid",[["style","padding: 0;"]],null,null,null,o.J,o.k)),t["\u0275did"](63,49152,null,0,i.z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](64,0,null,0,24,"ion-row",[],null,null,null,o.P,o.q)),t["\u0275did"](65,49152,null,0,i.fb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](66,0,null,0,5,"ion-col",[],null,null,null,o.H,o.i)),t["\u0275did"](67,49152,null,0,i.s,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](68,0,null,0,1,"ion-icon",[["name","calendar"]],null,null,null,o.L,o.m)),t["\u0275did"](69,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275ted"](70,0,[" "," "])),t["\u0275ppd"](71,1),(e()(),t["\u0275eld"](72,0,null,0,16,"ion-col",[["style","position: relative;"]],null,null,null,o.H,o.i)),t["\u0275did"](73,49152,null,0,i.s,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](74,0,null,0,14,"div",[["class","feedback"]],null,null,null,null,null)),(e()(),t["\u0275eld"](75,0,null,null,3,"div",[],null,null,null,null,null)),(e()(),t["\u0275eld"](76,0,null,null,2,"ion-card-subtitle",[],null,null,null,o.E,o.g)),t["\u0275did"](77,49152,null,0,i.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275ted"](-1,0,["Feedback"])),(e()(),t["\u0275eld"](79,0,null,null,9,"ion-buttons",[],null,null,null,o.B,o.c)),t["\u0275did"](80,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](81,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.fireBase("good")&&t),t}),o.A,o.b)),t["\u0275did"](82,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](83,0,null,0,1,"ion-icon",[["name","happy-outline"],["slot","icon-only"]],null,null,null,o.L,o.m)),t["\u0275did"](84,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(e()(),t["\u0275eld"](85,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.fireBase("bad")&&t),t}),o.A,o.b)),t["\u0275did"](86,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(e()(),t["\u0275eld"](87,0,null,0,1,"ion-icon",[["name","sad-outline"],["slot","icon-only"]],null,null,null,o.L,o.m)),t["\u0275did"](88,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(e,l){var n=l.component;e(l,13,0,"alert"),e(l,17,0,"camera-outline"),e(l,30,0,n.type),e(l,35,0,n.type),e(l,37,0,!n.type),e(l,47,0,t["\u0275inlineInterpolate"](1,"",n.weatherShowData.weatherIcon,"")),e(l,59,0,t["\u0275inlineInterpolate"](1,"",n.weatherShowData.weatherIcon,"")),e(l,69,0,"calendar"),e(l,84,0,"happy-outline"),e(l,88,0,"sad-outline")}),(function(e,l){var n=l.component;e(l,27,0,t["\u0275nov"](l,32).ngClassUntouched,t["\u0275nov"](l,32).ngClassTouched,t["\u0275nov"](l,32).ngClassPristine,t["\u0275nov"](l,32).ngClassDirty,t["\u0275nov"](l,32).ngClassValid,t["\u0275nov"](l,32).ngClassInvalid,t["\u0275nov"](l,32).ngClassPending),e(l,44,0,n.weatherShowData.temp_celcius),e(l,49,0,n.weatherShowData.temp_min,n.weatherShowData.temp_max),e(l,54,0,n.weatherShowData.name),e(l,57,0,n.weatherShowData.weatherDes);var a=t["\u0275unv"](l,70,0,e(l,71,0,t["\u0275nov"](l,0),n.weatherShowData.tdate));e(l,70,0,a)}))}function R(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-weather",[],null,null,null,y,p)),t["\u0275did"](1,114688,null,0,s,[h.a,i.Jb,i.a,i.Fb,m.m,g.a],null,null)],(function(e,l){e(l,1,0)}),null)}var w=t["\u0275ccf"]("app-weather",s,R,{},{},[]);class D{}var b=t["\u0275cmf"](a,[],(function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,w]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID]),t["\u0275mpd"](4608,r.i,r.i,[]),t["\u0275mpd"](4608,i.b,i.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Db,i.Db,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Gb,i.Gb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1073742336,r.h,r.h,[]),t["\u0275mpd"](1073742336,r.b,r.b,[]),t["\u0275mpd"](1073742336,i.Ab,i.Ab,[]),t["\u0275mpd"](1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),t["\u0275mpd"](1073742336,D,D,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,m.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);