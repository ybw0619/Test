(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-dialog",{model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[a("q-card",{staticStyle:{width:"300px"}},[a("q-card-section",{staticClass:"justify-center"},[t._v("\n        Sign-In\n      ")]),a("q-card-section",[a("q-input",{attrs:{dense:t.dense,placeholder:"Email",color:"black"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"mail"}})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("q-input",{attrs:{dense:t.dense,placeholder:"Password",type:"password",color:"black"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-dialog",rawName:"v-close-dialog"}],attrs:{flat:"",label:"Sign In",color:"brand"},on:{click:t.signin}})],1)],1)],1),a("q-layout",{attrs:{view:"hHh Lpr lff"}},[a("q-header",{attrs:{bordered:""}},[a("q-toolbar",{staticClass:"text-black"},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v("\n          Hojun's Blog\n        ")]),t._v("\n        로그인: "+t._s(this.$store.state.isLogin)+"\n        "),this.$store.state.isLogin?t._e():a("q-btn",{attrs:{flat:"",dense:"",icon:"input",label:"Sign In","no-caps":""},on:{click:function(e){t.alert=!t.alert}}}),this.$store.state.isLogin?a("q-btn",{attrs:{flat:"",dense:"",icon:"input",label:"Sign Out","no-caps":""},on:{click:t.signout}}):t._e()],1)],1),a("q-drawer",{staticClass:"text-grey-7",attrs:{overlay:"",bordered:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-item",{attrs:{clickable:"",to:"/",exact:"","active-class":"text-black"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("q-item-label",[t._v("HOME")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/board","active-class":"text-black"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"event_note"}})],1),a("q-item-section",[a("q-item-label",[t._v("BOARD")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/board0","active-class":"text-black"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"event_note"}})],1),a("q-item-section",[a("q-item-label",[t._v("BOARD0")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/board1","active-class":"text-black"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"security"}})],1),a("q-item-section",[a("q-item-label",[t._v("SECRET")]),a("q-item-label",{attrs:{caption:""}},[t._v("비밀공간....")])],1)],1)],1),a("q-page-container",[a("router-view")],1),a("q-footer",[a("q-toolbar",{staticClass:"bg-white text-grey-6 justify-center"},[t._v("\n          © 2019 / 양호준\n      ")])],1)],1)],1)},o=[],i=a("0967"),s=function(t,e){var a=window.open;if(!0===i["a"].is.cordova)if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var n=a(t,"_blank");if(n)return n.focus(),n;e&&e()},r={name:"MyLayout",data:function(){return{isLogin:!1,email:"",password:"",alert:!1,leftDrawerOpen:!1,dense:!0}},created:function(){console.log(this)},methods:{openURL:s,signin:function(){var t=this;this.$axios.post("/api/signin",{username:this.email,password:this.password}).then(function(e){console.log(e.data),1==e.data.result&&t.$store.commit("login")})},signout:function(){var t=this;this.$axios.get("/api/signout").then(function(e){console.log(e.data),1==e.data.result&&t.$store.commit("logout")})}}},l=r,c=a("2877"),d=Object(c["a"])(l,n,o,!1,null,null,null);e["default"]=d.exports}}]);