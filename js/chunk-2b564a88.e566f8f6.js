(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b564a88"],{"4ef5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container d-flex pa-0"},[a("section",{staticClass:"left-section"},[a("Navbar")],1),a("section",{staticClass:"main-section"},[a("v-card",{staticClass:"header-card mt-0",attrs:{elevation:"0",height:"55px",tile:""}},[a("v-card-title",{staticClass:"header-setting",attrs:{"max-width":"600px"}},[e._v("帳戶設定")])],1),a("v-divider"),a("v-col",{staticClass:"col-xs-12 col-sm-10 col-md-10 col-lg-10"},[a("UserForm")],1)],1)])},r=[],c=a("5530"),o=a("d178"),l=a("aa74"),s=a("2f62"),i={name:"Setting",components:{Navbar:o["a"],UserForm:l["a"]},computed:Object(c["a"])({},Object(s["b"])(["currentUser","isAuthenticated"]))},u=i,d=a("2877"),f=a("6544"),b=a.n(f),p=a("b0af"),v=a("99d9"),m=a("62ad"),g=a("ce7e"),j=Object(d["a"])(u,n,r,!1,null,null,null);t["default"]=j.exports;b()(j,{VCard:p["a"],VCardTitle:v["d"],VCol:m["a"],VDivider:g["a"]})},"62ad":function(e,t,a){"use strict";var n=a("ade3"),r=a("5530"),c=(a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),o=a("d9f7"),l=a("80d2"),s=["sm","md","lg","xl"],i=function(){return s.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return s.reduce((function(e,t){return e["offset"+Object(l["E"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return s.reduce((function(e,t){return e["order"+Object(l["E"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(i),offset:Object.keys(u),order:Object.keys(d)};function b(e,t,a){var n=e;if(null!=a&&!1!==a){if(t){var r=t.replace(e,"");n+="-".concat(r)}return"col"!==e||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var p=new Map;t["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},i),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var a=t.props,r=t.data,c=t.children,l=(t.parent,"");for(var s in a)l+=String(a[s]);var i=p.get(l);return i||function(){var e,t;for(t in i=[],f)f[t].forEach((function(e){var n=a[e],r=b(t,e,n);r&&i.push(r)}));var r=i.some((function(e){return e.startsWith("col-")}));i.push((e={col:!r||!a.cols},Object(n["a"])(e,"col-".concat(a.cols),a.cols),Object(n["a"])(e,"offset-".concat(a.offset),a.offset),Object(n["a"])(e,"order-".concat(a.order),a.order),Object(n["a"])(e,"align-self-".concat(a.alignSelf),a.alignSelf),e)),p.set(l,i)}(),e(a.tag,Object(o["a"])(r,{class:i}),c)}})}}]);
//# sourceMappingURL=chunk-2b564a88.e566f8f6.js.map