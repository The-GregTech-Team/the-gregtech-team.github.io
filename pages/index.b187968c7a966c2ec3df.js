webpackJsonp([2],{"+ptz":function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("nav-bar"),s("main-banner"),this._m(0),s("div",{staticClass:"parallax-container valign-wrapper"},[this._m(1),s("div",{staticClass:"parallax"},[s("img",{attrs:{src:this.toCOS("images/background2.png")}})])]),s("footer-bar")],1)};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"section grey-text text-darken-4"},[a("div",{staticClass:"row center"},[a("div",{staticClass:"col s12 m4"},[a("div",{staticClass:"icon-block"},[a("h2",{staticClass:"center"},[a("i",{staticClass:"material-icons"},[t._v("flash_on")])]),a("h5",{staticClass:"center"},[t._v("游戏优化很差")]),a("p",{staticClass:"light"},[t._v("\n                            我们确保你不会遇到较大的性能问题."),a("br"),t._v(" (当然你得赞助\n                        ")])])]),a("div",{staticClass:"col s12 m4"},[a("div",{staticClass:"icon-block"},[a("h2",{staticClass:"center"},[a("i",{staticClass:"material-icons"},[t._v("group")])]),a("h5",{staticClass:"center"},[t._v("玩家数量不多")]),a("p",{staticClass:"light"},[t._v("\n                            给你一个安静的游戏体验!"),a("br"),t._v(" (没人当然安静\n                        ")])])]),a("div",{staticClass:"col s12 m4"},[a("div",{staticClass:"icon-block"},[a("h2",{staticClass:"center"},[a("i",{staticClass:"material-icons"},[t._v("settings")])]),a("h5",{staticClass:"center"},[t._v("辣鸡的管理团队")]),a("p",{staticClass:"light"},[t._v("\n                            我们的技术团队可以有很多很多的黑科技."),a("br"),t._v(" 管理团队很友善. (flowey的微笑\n                        ")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section no-pad-bot"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row center"},[s("h5",{staticClass:"header col s12 grey-text text-lighten-3"},[this._v("某个周目的GT化工线")])])])])}]};s.a=e},"/TYz":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Bs5T"),e=a("+ptz"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="pages/index.vue",s.default=n.exports},"1skG":function(t,s,a){"use strict";s.a={methods:{toCOS:function(t){return"//origind-1251214188.cossh.myqcloud.com/"+t}}}},"53Tb":function(t,s,a){"use strict";var i=a("1skG"),e=a("MW8U"),n=!1;var r=function(t){n||a("NCos")},c=a("VU/8")(i.a,e.a,!1,r,null,null);c.options.__file="components/MainBanner.vue",s.a=c.exports},"6ZUd":function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,"#index-banner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},Bs5T:function(t,s,a){"use strict";(function(t){var i=a("HwcC"),e=a("yqLL"),n=a("53Tb");s.a={data:function(){return{}},components:{"nav-bar":i.a,"footer-bar":e.a,"main-banner":n.a},mounted:function(){t(".parallax").parallax(),-1===navigator.userAgent.indexOf("MSIE")&&-1===navigator.userAgent.indexOf("Trident")||confirm("检测到您正在使用IE11以下版本，为了您的浏览体验，是否更换为其他浏览器？")&&(window.location.href="https://browsehappy.com")},methods:{toCOS:function(t){return"//origind-1251214188.cossh.myqcloud.com/"+t}}}}).call(s,a("7t+N"))},HwcC:function(t,s,a){"use strict";var i=a("Oi0J"),e=a("a5lK"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="components/Navbar.vue",s.a=n.exports},MW8U:function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"parallax-container",attrs:{id:"index-banner"}},[s("div",{staticClass:"section no-pad-bot no-pad-top",staticStyle:{width:"100%"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"header center white-text"},[this._v("Origind")]),this._m(0),s("div",{staticClass:"row center"},[s("router-link",{staticClass:"btn-large waves-effect waves-light teal lighten-1",attrs:{to:"join",id:"download-button"}},[this._v("加入我们")])],1)])]),s("div",{staticClass:"parallax"},[s("img",{attrs:{src:this.toCOS("images/background1.png"),alt:"Unsplashed background img 1"}})])])};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row center"},[s("h5",{staticClass:"header col s12 orange-text"},[this._v("一个轻量级的 Minecraft 服务器")])])}]};s.a=e},NCos:function(t,s,a){var i=a("6ZUd");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("5f3c15b7",i,!1,{sourceMap:!1})},Oi0J:function(t,s,a){"use strict";s.a={name:"nav-bar",data:function(){return{links:[{name:"下载",link:"/download"},{name:"加入",link:"/join"},{name:"主页",link:"/"}]}},methods:{isActive:function(t){return this.$route.path===t.link}}}},a5lK:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"blue"},[a("div",{staticClass:"nav-wrapper z-depth-2"},[a("div",{staticClass:"container"},[a("a",{staticClass:"brand-logo",attrs:{href:"#"}},[t._v("Origind")]),t._l(t.links,function(s){return a("ul",{key:s.link,staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[a("li",{class:{active:t.isActive(s)}},[a("router-link",{attrs:{to:s.link}},[t._v(t._s(s.name))])],1)])})],2)])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},oc9k:function(t,s,a){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"page-footer teal z-depth-2"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col l6 s12"},[s("h5",{staticClass:"white-text"},[this._v("关于我们")]),s("p",{staticClass:"grey-text text-lighten-4"},[this._v("这只是一个很小很小的服务器罢了.")])])])]),s("div",{staticClass:"footer-copyright"},[s("div",{staticClass:"container"},[this._v("\n            © 2018 TGT - OrigindServer\n        ")])])])}]};s.a=e},yqLL:function(t,s,a){"use strict";var i=a("oc9k"),e=a("VU/8")(null,i.a,!1,null,null,null);e.options.__file="components/Footer.vue",s.a=e.exports}});