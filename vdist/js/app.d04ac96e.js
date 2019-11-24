(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"head"}},[e._m(0),o("div",{attrs:{id:"window-control"}},[o("img",{staticClass:"wc-icon",attrs:{id:"wc-minimize",src:n("6918")},on:{click:e.minimize}}),o("img",{staticClass:"wc-icon",attrs:{id:"wc-maximize",src:n("5bad")},on:{click:e.maximize}}),o("img",{staticClass:"wc-icon",attrs:{id:"wc-close",src:n("bf37")},on:{click:e.close}})])]),o("router-view",{attrs:{id:"router-view"}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[e._v("Face Recognition")])])}],a={name:"App",methods:{minimize:function(){electron.remote.getCurrentWindow().minimize()},maximize:function(){var e=electron.remote.getCurrentWindow().isMaximized();e?electron.remote.getCurrentWindow().unmaximize():electron.remote.getCurrentWindow().maximize()},close:function(){electron.remote.getCurrentWindow().close()}},mounted:function(){fs.mkdir("".concat(BASE_DIR,"/python/dataset"),(function(){})),fs.mkdir("".concat(BASE_DIR,"/python/trainer"),(function(){}))}},s=a,c=(n("d283"),n("2877")),l=Object(c["a"])(s,i,r,!1,null,"0c9e12c7",null),d=l.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],attrs:{id:"details-modal"}},[n("div",{attrs:{id:"modal-contents"}},[n("h3",[e._v(" Details of the person")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.name,expression:"person.name"}],attrs:{type:"text",placeholder:"Full Name"},domProps:{value:e.person.name},on:{input:function(t){t.target.composing||e.$set(e.person,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.dob,expression:"person.dob"}],attrs:{type:"date",placeholder:"Date of Birth"},domProps:{value:e.person.dob},on:{input:function(t){t.target.composing||e.$set(e.person,"dob",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.person.height,expression:"person.height"}],attrs:{type:"text",placeholder:"Height"},domProps:{value:e.person.height},on:{input:function(t){t.target.composing||e.$set(e.person,"height",t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.person.others,expression:"person.others"}],attrs:{type:"text",placeholder:"Other identifying information"},domProps:{value:e.person.others},on:{input:function(t){t.target.composing||e.$set(e.person,"others",t.target.value)}}}),n("button",{staticClass:"btn",on:{click:e.ProceedWithDetails}},[e._v("Proceed")]),n("button",{staticClass:"btn",on:{click:e.CloseModal}},[e._v("Cancel")])])]),n("div",{staticClass:"section"},[n("div",{staticClass:"section-title"},[e._v("1. Get input faces")]),n("div",{staticClass:"section-description"},[e._v(" To train the machine learning algorithm to recognize faces, you need to first import the images of person's face. This can be done by getting images from your camera or importing a video with the person's face clearly visible in it. ")]),n("div",{staticClass:"section-action"},[n("button",{directives:[{name:"promise-btn",rawName:"v-promise-btn"}],staticClass:"btn",on:{click:function(t){return e.GetFaces("camera")}}},[e._v("Use camera")]),n("button",{directives:[{name:"promise-btn",rawName:"v-promise-btn"}],staticClass:"btn",on:{click:function(t){return e.GetFaces("video")}}},[e._v("Use video")])])]),n("div",{staticClass:"section"},[n("div",{staticClass:"section-title"},[e._v("2. Train")]),n("div",{staticClass:"section-description"},[e._v(" Start training the machine learning alogrithm to detect imported faces. ")]),n("div",{staticClass:"section-action"},[n("button",{directives:[{name:"promise-btn",rawName:"v-promise-btn"}],staticClass:"btn",on:{click:e.Train}},[e._v("Start Training")])])]),n("div",{staticClass:"section"},[n("div",{staticClass:"section-title"},[e._v("3. Detect faces")]),n("div",{staticClass:"section-description"},[e._v(" Once the training has been completed you can start detecting faces. You can detect faces from a video, image or directly from the camera feed. ")]),n("div",{staticClass:"section-action"},[n("button",{staticClass:"btn",on:{click:function(t){return e.Detect("video")}}},[e._v("From video")]),n("button",{staticClass:"btn",on:{click:function(t){return e.Detect("image")}}},[e._v("From Image")]),n("button",{directives:[{name:"promise-btn",rawName:"v-promise-btn"}],staticClass:"btn",on:{click:function(t){return e.Detect("camera")}}},[e._v("From Camera")])])])])},m=[],p=(n("99af"),n("0d03"),n("b0c0"),n("d3b7"),n("ac1f"),{name:"Home",data:function(){return{person:{name:"",dob:"",height:"",others:""},showModal:!1,from:"camera"}},methods:{spawnProcess:function(e){return new Promise((function(t,n){var o=BASE_DIR+"/python";childProcess.exec(e,{windowsHide:!0,cwd:o},(function(e,o,i){e||i?(alert("An error occured!"),console.log(e,i),n()):t()}))}))},GetFaces:function(e){this.showModal=!0,this.from=e},ProceedWithDetails:function(){var e=this,t=this.person,n=this.from;if(!t.name||!t.dob||!t.height)return alert("Required fields are invalid");var o=Date.now();fs.appendFile("".concat(BASE_DIR,"/python/details.csv"),"\n".concat(o,",").concat(t.name,",").concat(t.dob,",").concat(t.height,",").concat(t.others),(function(t){t&&alert("An error occured while trying to write details to disk"),e.CloseModal(),"camera"==n?e.ImportViaCamera(o):e.ImportViaVideo(o)}))},CloseModal:function(){this.showModal=!1},ImportViaCamera:function(e){var t=this;return new Promise((function(n){var o="python 1.c.py ".concat(e);t.spawnProcess(o).then(n).catch(n)}))},ImportViaVideo:function(e){var t=this;return new Promise((function(n){var o=t.promptForFile("Select a video file");if(!o)return alert("No file selected!"),n();t.spawnProcess("python 1.b.py ".concat(e," ").concat(o)).then(n).catch((function(){alert("An error occured"),n()}))}))},promptForFile:function(e){var t=electron.remote.dialog.showOpenDialog(electron.remote.getCurrentWindow(),{title:e,properties:["openFile"]});return"undefined"==typeof t?"":t[0]?t[0]:""},Train:function(){return this.spawnProcess("python 2.py")},Detect:function(e){var t="python ";if("camera"==e)t+="3.c.py ";else if("image"==e){var n=this.promptForFile("Select an image");if(!n)return alert("No file selected!"),new Promise.resolve;t+="3.a.py ".concat(n)}else{var o=this.promptForFile("Select a video");if(!o)return alert("No file selected!"),new Promise.resolve;t+="3.b.py ".concat(o)}return this.spawnProcess(t)}}}),f=p,v=(n("8410"),Object(c["a"])(f,u,m,!1,null,"018a2d82",null)),h=v.exports,g=n("8c4f"),b=n("3c29");n("9c9f");o["a"].use(b["a"]),o["a"].use(g["a"]);var w=[{path:"/",name:"home",component:h}],y=new g["a"]({mode:"hash",base:"",routes:w}),C=y,_=n("2f62");o["a"].use(_["a"]);var x=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:C,store:x,render:function(e){return e(d)}}).$mount("#app")},"5bad":function(e,t,n){e.exports=n.p+"img/maximize.d8e237ca.svg"},"5d83":function(e,t,n){},6918:function(e,t,n){e.exports=n.p+"img/minimize.2de24897.png"},8410:function(e,t,n){"use strict";var o=n("c221"),i=n.n(o);i.a},bf37:function(e,t,n){e.exports=n.p+"img/close.26fb2114.svg"},c221:function(e,t,n){},d283:function(e,t,n){"use strict";var o=n("5d83"),i=n.n(o);i.a}});
//# sourceMappingURL=app.d04ac96e.js.map