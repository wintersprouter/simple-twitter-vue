(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48780d41"],{"2bf5":function(t,e,a){},"60a2":function(t,e,a){},"61f3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1)),a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1)),a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1)),a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1))],1)},i=[],r={data:function(){return{attrs:{boilerplate:!0,elevation:0}}}},n=r,c=a("2877"),o=a("6544"),l=a.n(o),u=a("3129"),d=Object(c["a"])(n,s,i,!1,null,null,null);e["a"]=d.exports;l()(d,{VSkeletonLoader:u["a"]})},"8c57":function(t,e,a){"use strict";a("60a2")},"9bc3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container d-flex pa-0"},[a("section",{staticClass:"left-section"},[a("Navbar")],1),a("section",{staticClass:"middle-section"},[a("v-card",{staticClass:"mt-0 header-card",attrs:{elevation:"0",height:"55px",tile:""}},[a("v-container",{staticClass:"d-flex p-0"},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.back()}}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-arrow-left")])],1),a("v-card-title",{staticClass:"header-title py-0"},[t._v("推文")])],1)],1),a("v-divider"),t.isLoading?a("TweetLoading"):[a("v-card",{staticClass:"detail-tweet-card",attrs:{elevation:"0",tile:"","max-width":"600px"}},[a("v-container",{staticClass:"d-flex justify-space-between align-start"},[a("router-link",{attrs:{to:"/users/"+t.tweet.UserId}},[a("v-avatar",{staticClass:"tweet-card-avatar mb-2",attrs:{size:"50"}},[a("img",{attrs:{src:t.tweet.avatar,alt:t.tweet.name}})])],1),a("v-list",{staticClass:"pt-0 ml-2 mt-0"},[a("v-card-text",{staticClass:"py-0"},[a("v-list-item-title",{staticClass:"tweets-user-name"},[t._v(t._s(t.tweet.name))]),a("v-list-item-subtitle",{staticClass:"tweets-user-account"},[t._v("@"+t._s(t.tweet.account))])],1)],1)],1),a("v-card-text",[a("p",{staticClass:"tweet-description"},[t._v(" "+t._s(t.tweet.description)+" ")])]),a("v-card-subtitle",[a("p",{staticClass:"tweets-user-account"},[t._v(" "+t._s(t._f("fromNow")(t.tweet.createdAt))+" ")])]),a("v-divider",{staticClass:"mx-1"}),a("v-card-subtitle",[a("span",{staticClass:"tweet-count mr-1"},[t._v(t._s(t.tweet.repliedCount))]),a("span",{staticClass:"tweet-count-text mr-3"},[t._v("回覆")]),a("span",{staticClass:"tweet-count mr-1"},[t._v(t._s(t.tweet.likedCount))]),a("span",{staticClass:"tweet-count-text"},[t._v("喜歡次數")])]),a("v-divider",{staticClass:"mx-1"}),a("v-card-actions",{staticClass:"py-0"},[a("v-list-item",[a("v-dialog",{attrs:{"max-width":"600px","max-hight":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"gary"}},"v-btn",i,!1),s),[a("v-icon",[t._v("mdi-message-reply-outline")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("ReplyTweetModal",{attrs:{"init-tweet":t.tweet},on:{"after-create-reply":t.afterCreateReply,"after-click-close":t.afterClickClose}})],1)],1),a("v-list-item",[t.tweet.isLike?a("v-btn",{attrs:{disabled:t.isProcessing,icon:"",color:"pink"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.postUnlike(t.tweet)}}},[a("v-icon",[t._v("mdi-heart")])],1):a("v-btn",{attrs:{disabled:t.isProcessing,icon:"",color:"gary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.postLike(t.tweet)}}},[a("v-icon",[t._v("mdi-heart-outline")])],1)],1)],1)],1)],a("v-divider"),t._v(" "),t.isLoading?a("TweetsLoading"):[a("Replies",{attrs:{"init-replies":t.replies}})]],2),a("section",{staticClass:"right-section"},[a("FollowRecommendations",{attrs:{"initial-top-users":t.topUsers}})],1)])},i=[],r=a("1da1"),n=a("5530"),c=(a("b0c0"),a("96cf"),a("d178")),o=a("dd3f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"reply-list",attrs:{elevation:"0",tile:"","max-width":"600px"}},t._l(t.replies,(function(e){return a("v-card",{key:e.id,staticClass:"reply-card",attrs:{tile:"",elevation:"0"}},[a("v-container",{staticClass:"d-flex justify-space-between align-start"},[a("router-link",{attrs:{to:"/users/"+e.UserId}},[a("v-avatar",{staticClass:"tweet-card-avatar mb-2",attrs:{size:"50"}},[a("img",{attrs:{src:e.avatar,alt:e.name}})])],1),a("v-list",{staticClass:"mt-0 ml-2 pt-0"},[a("v-list-item-title",{staticClass:"ml-2"},[a("span",{staticClass:"mr-1 tweets-user-name"},[t._v(t._s(e.name))]),t.$vuetify.breakpoint.xsOnly?[a("br")]:t._e(),a("span",{staticClass:"tweets-user-account"},[t._v("@"+t._s(e.commentAccount)+"·"+t._s(t._f("fromNow")(e.createdAt))+" ")])],2),a("v-list-item-subtitle",{staticClass:"ml-2"},[a("span",{staticClass:"tweets-user-account"},[t._v("回覆")]),a("span",{staticClass:"reply-target ml-2"},[t._v("@"+t._s(e.tweetAuthorAccount))])]),a("p",{staticClass:"ml-2 reply-description"},[t._v(" "+t._s(e.comment)+" ")])],1)],1)],1)})),1)},u=[],d=a("2909"),v=a("2708"),p={name:"Replies",props:{initReplies:{type:Array,default:function(){return[]}}},data:function(){return{replies:this.initReplies}},mixins:[v["a"]],watch:{initReplies:function(t){this.replies=Object(d["a"])(t)}}},m=p,f=(a("8c57"),a("2877")),w=a("6544"),h=a.n(w),b=a("8212"),g=a("b0af"),k=a("a523"),C=a("8860"),_=a("5d23"),x=Object(f["a"])(m,l,u,!1,null,"775ff297",null),L=x.exports;h()(x,{VAvatar:b["a"],VCard:g["a"],VContainer:k["a"],VList:C["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]});var y=a("2fc8"),R=a("2f62"),V=a("6783"),T=a("2fa3"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar,list-item-three-line, list-item, divider, list-item, divider, list-item"}},"v-skeleton-loader",t.attrs,!1))},O=[],U={data:function(){return{attrs:{boilerplate:!0,elevation:0}}}},A=U,P=a("3129"),I=Object(f["a"])(A,j,O,!1,null,null,null),$=I.exports;h()(I,{VSkeletonLoader:P["a"]});var E=a("61f3"),S={name:"TweetDetail",components:{Navbar:c["a"],Replies:L,FollowRecommendations:o["a"],ReplyTweetModal:y["a"],TweetLoading:$,TweetsLoading:E["a"]},data:function(){return{tweet:{},replies:[],dialog:!1,isProcessing:!1,isLoading:!1}},watch:{initialTweet:function(t){this.tweet=Object(n["a"])(Object(n["a"])({},this.tweet),t)}},mixins:[v["a"]],created:function(){var t=this.$route.params.id;this.fetchTweet(t),this.fetchReplies(t)},computed:Object(n["a"])({},Object(R["b"])(["currentUser","topUsers"])),methods:{fetchTweet:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isLoading=!0,a.next=4,V["a"].getTweet(t);case 4:if(s=a.sent,i=s.data,e.tweet=i,"success"===i.status){a.next=9;break}throw new Error(i.message);case 9:e.isLoading=!1,a.next=18;break;case 12:a.prev=12,a.t0=a["catch"](0),e.isLoading=!1,T["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試"}),e.$router.push("/404"),console.log("error",a.t0);case 18:case"end":return a.stop()}}),a,null,[[0,12]])})))()},fetchReplies:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isLoading=!0,a.next=4,V["a"].getReplies(t);case 4:s=a.sent,i=s.data,e.replies=i,e.isLoading=!1,a.next=15;break;case 10:a.prev=10,a.t0=a["catch"](0),e.isLoading=!1,T["a"].fire({icon:"error",title:"無法取得回文資料，請稍後再試"}),console.log("error",a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,10]])})))()},postLike:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,V["a"].postLike(t.id);case 4:if(s=a.sent,i=s.data,"success"===i.status){a.next=8;break}throw new Error(i.message);case 8:t.isLike=!t.isLike,t.likedCount+=1,e.isProcessing=!1,T["a"].fire({icon:"success",title:"對 @".concat(e.tweet.account," 的推文按讚")}),a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](0),e.isProcessing=!1,T["a"].fire({icon:"error",title:"無法對 @".concat(e.tweet.account," 的推文按讚，請稍後再試")}),console.log("error",a.t0);case 19:case"end":return a.stop()}}),a,null,[[0,14]])})))()},postUnlike:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,V["a"].postUnlike(t.id);case 4:if(s=a.sent,i=s.data,"success"===i.status){a.next=8;break}throw new Error(i.message);case 8:t.isLike=!t.isLike,t.likedCount-=1,e.isProcessing=!1,T["a"].fire({icon:"success",title:"收回對 @".concat(e.tweet.account," 推文按的讚")}),a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](0),e.isProcessing=!1,T["a"].fire({icon:"error",title:"無法收回對 @".concat(e.tweet.account," 推文按的讚，請稍後再試")}),console.log("error",a.t0);case 19:case"end":return a.stop()}}),a,null,[[0,14]])})))()},afterCreateReply:function(t){this.dialog=!1;var e={id:t.id,UserId:this.currentUser.id,tweetAuthorAccount:this.tweet.account,TweetId:this.tweet.id,comment:t.content,commentAccount:this.currentUser.account,name:this.currentUser.name,avatar:this.currentUser.avatar,creatAt:t.nowTime};this.tweet.repliedCount+=1,this.replies.unshift(e)},afterClickClose:function(){this.dialog=!1}},beforeRouteUpdate:function(t,e,a){this.fetchTweet(t.params.id),this.fetchReplies(t.params.id),a()}},D=S,N=(a("e33e"),a("8336")),z=a("99d9"),F=a("169a"),J=a("ce7e"),M=a("132d"),B=a("da13"),q=Object(f["a"])(D,s,i,!1,null,"f8c5763c",null);e["default"]=q.exports;h()(q,{VAvatar:b["a"],VBtn:N["a"],VCard:g["a"],VCardActions:z["a"],VCardSubtitle:z["b"],VCardText:z["c"],VCardTitle:z["d"],VContainer:k["a"],VDialog:F["a"],VDivider:J["a"],VIcon:M["a"],VList:C["a"],VListItem:B["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"]})},e33e:function(t,e,a){"use strict";a("2bf5")}}]);
//# sourceMappingURL=chunk-48780d41.0356eaf3.js.map