webpackJsonp([1],{"1skG":function(t,s,i){"use strict";s.a={methods:{toCOS:function(t){return"//origind-1251214188.cossh.myqcloud.com/"+t}}}},"53Tb":function(t,s,i){"use strict";var e=i("1skG"),a=i("MW8U"),n=!1;var r=function(t){n||i("NCos")},c=i("VU/8")(e.a,a.a,!1,r,null,null);c.options.__file="components/MainBanner.vue",s.a=c.exports},"6ZUd":function(t,s,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#index-banner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},HwcC:function(t,s,i){"use strict";var e=i("Oi0J"),a=i("a5lK"),n=i("VU/8")(e.a,a.a,!1,null,null,null);n.options.__file="components/Navbar.vue",s.a=n.exports},K7Vd:function(t,s,i){"use strict";(function(t){var e=i("HwcC"),a=i("yqLL"),n=i("53Tb");s.a={data:function(){return{}},components:{"nav-bar":e.a,"footer-bar":a.a,"main-banner":n.a},mounted:function(){t(".parallax").parallax()},methods:{toCOS:function(t){return"//origind-1251214188.cossh.myqcloud.com/"+t}}}}).call(s,i("7t+N"))},MW8U:function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"parallax-container",attrs:{id:"index-banner"}},[s("div",{staticClass:"section no-pad-bot no-pad-top",staticStyle:{width:"100%"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"header center white-text"},[this._v("Origind")]),this._m(0),s("div",{staticClass:"row center"},[s("router-link",{staticClass:"btn-large waves-effect waves-light teal lighten-1",attrs:{to:"join",id:"download-button"}},[this._v("加入我们")])],1)])]),s("div",{staticClass:"parallax"},[s("img",{attrs:{src:this.toCOS("images/background1.png"),alt:"Unsplashed background img 1"}})])])};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row center"},[s("h5",{staticClass:"header col s12 orange-text"},[this._v("一个轻量级的 Minecraft 服务器")])])}]};s.a=a},NCos:function(t,s,i){var e=i("6ZUd");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("5f3c15b7",e,!1,{sourceMap:!1})},Oi0J:function(t,s,i){"use strict";s.a={name:"nav-bar",data:function(){return{links:[{name:"下载",link:"/download"},{name:"加入",link:"/join"},{name:"主页",link:"/"}]}},methods:{isActive:function(t){return this.$route.path===t.link}}}},Vxor:function(t,s,i){"use strict";var e=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"blue lighten-1"},[s("nav-bar"),s("div",{staticClass:"container"},[this._m(0),s("div",{staticClass:"section grey-text text-darken-4"},[s("div",{staticClass:"row center"},[this._m(1),s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"icon-block"},[this._m(2),s("h5",{staticClass:"center"},[this._v("下载客户端")]),s("p",{staticClass:"light"},[s("router-link",{staticClass:"btn-large waves-effect waves-light orange darken-1",attrs:{to:"download",id:"download-button"}},[this._v("转至下载页面")])],1)])])])])]),s("footer-bar")],1)};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section"},[s("div",{attrs:{id:"index-banner"}},[s("div",{staticClass:"section no-pad-bot no-pad-top",staticStyle:{width:"100%"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"header center grey-text text-lighten-3"},[this._v("加入我们")]),s("div",{staticClass:"row center"},[s("h5",{staticClass:"header col s12 black-text text-lighten-2"},[this._v("你有几种方法参加到我们的服务器:")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"icon-block"},[s("h2",{staticClass:"center"},[s("i",{staticClass:"material-icons"},[this._v("sms")])]),s("h5",{staticClass:"center"},[this._v("QQ群")]),s("p",{staticClass:"light"},[this._v("\n                            我们的QQ群: 609600081\n                        ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"center"},[s("i",{staticClass:"material-icons"},[this._v("cloud_download")])])}]};s.a=a},a5lK:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("nav",{staticClass:"blue"},[i("div",{staticClass:"nav-wrapper z-depth-2"},[i("div",{staticClass:"container"},[i("a",{staticClass:"brand-logo",attrs:{href:"#"}},[t._v("Origind")]),t._l(t.links,function(s){return i("ul",{key:s.link,staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[i("li",{class:{active:t.isActive(s)}},[i("router-link",{attrs:{to:s.link}},[t._v(t._s(s.name))])],1)])})],2)])])};e._withStripped=!0;var a={render:e,staticRenderFns:[]};s.a=a},m80R:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("K7Vd"),a=i("Vxor"),n=i("VU/8")(e.a,a.a,!1,null,null,null);n.options.__file="pages/join.vue",s.default=n.exports},oc9k:function(t,s,i){"use strict";var e=function(){var t=this.$createElement;this._self._c;return this._m(0)};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"page-footer teal z-depth-2"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col l6 s12"},[s("h5",{staticClass:"white-text"},[this._v("关于我们")]),s("p",{staticClass:"grey-text text-lighten-4"},[this._v("这只是一个很小很小的服务器罢了.")])])])]),s("div",{staticClass:"footer-copyright"},[s("div",{staticClass:"container"},[this._v("\n            © 2018 TGT - OrigindServer\n        ")])])])}]};s.a=a},yqLL:function(t,s,i){"use strict";var e=i("oc9k"),a=i("VU/8")(null,e.a,!1,null,null,null);a.options.__file="components/Footer.vue",s.a=a.exports}});