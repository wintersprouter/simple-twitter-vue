(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f635521"],{"61f3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1)),a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1)),a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1)),a("v-skeleton-loader",t._b({attrs:{type:"list-item-avatar-three-line, divider"}},"v-skeleton-loader",t.attrs,!1))],1)},r=[],n={data:function(){return{attrs:{boilerplate:!0,elevation:0}}}},i=n,c=a("2877"),o=a("6544"),l=a.n(o),u=a("3129"),d=Object(c["a"])(i,s,r,!1,null,null,null);e["a"]=d.exports;l()(d,{VSkeletonLoader:u["a"]})},"67b9":function(t,e,a){"use strict";a("9551")},8928:function(t,e,a){},9551:function(t,e,a){},c774:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.isLoading?a("TweetsLoading"):[t._l(t.tweets,(function(t){return a("UserLikedTweetsCard",{key:t.id,attrs:{"initial-tweet":t}})})),t.tweets.length?t._e():a("v-card",{staticClass:"message-card mt-0",attrs:{elevation:"0","max-width":"600px"}},[a("v-card-title",[t._v("This account haven’t any liked Tweets. ")])],1)]],2)},r=[],n=a("5530"),i=a("1da1"),c=(a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"tweet-list",attrs:{elevation:"0",tile:"","max-width":"600px"}},[a("v-card",{staticClass:"tweet-card",attrs:{elevation:"0"}},[a("v-container",{staticClass:"d-flex justify-space-between"},[a("router-link",{staticClass:"links",attrs:{to:"/users/"+t.tweet.likedTweetUserId}},[a("v-avatar",{staticClass:"tweet-card-avatar mt-2",attrs:{size:"50"}},[a("v-img",{attrs:{src:t.tweet.avatar,alt:t.tweet.name}})],1)],1),a("v-list",{staticClass:"tweet-card-list"},[a("v-card-text",{staticClass:"py-0"},[a("router-link",{staticClass:"links",attrs:{to:"/tweets/"+t.tweet.TweetId}},[a("v-list-item-group",[a("v-list-item-title",[a("span",{staticClass:"mr-1 tweets-user-name"},[t._v(t._s(t.tweet.name))]),t.$vuetify.breakpoint.xsOnly?[a("br")]:t._e(),a("span",{staticClass:"tweets-user-account"},[t._v("@"+t._s(t.tweet.account)+"·"+t._s(t._f("fromNow")(t.tweet.tweetCreatedAt))+" ")])],2),a("p",{staticClass:"tweets-description pt-2 pb-2"},[t._v(" "+t._s(t.tweet.description)+" ")])],1)],1)],1),a("v-card-actions",{staticClass:"pb-0 pt-1 justify-start"},[a("v-dialog",{attrs:{"max-width":"600px","max-hight":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"gary"}},"v-btn",r,!1),s),[a("v-icon",[t._v("mdi-message-reply-outline")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("ReplyLikedTweetModal",{attrs:{"init-tweet":t.tweet},on:{"after-create-reply":function(e){return t.afterCreateReply(t.tweet)},"after-click-close":t.afterClickClose}})],1),a("span",{staticClass:"mr-8 tweet-card-count"},[t._v(t._s(t.tweet.repliedCount))]),t.tweet.isLike?a("v-btn",{attrs:{disabled:t.isProcessing,icon:"",color:"pink"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.postUnlike(t.tweet)}}},[a("v-icon",[t._v("mdi-heart")])],1):a("v-btn",{attrs:{disabled:t.isProcessing,icon:"",color:"gary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.postLike(t.tweet)}}},[a("v-icon",[t._v("mdi-heart-outline")])],1),a("span",{staticClass:"tweet-card-count"},[t._v(t._s(t.tweet.likedCount))])],1)],1)],1)],1),a("v-divider")],1)}),o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-0",staticStyle:{"border-radius":"14px"},attrs:{elevation:"0"}},[a("v-card-actions",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClick.apply(null,arguments)}}},[a("span",[t._v("✕")])])],1),a("v-divider"),a("v-card-actions",[a("v-container",{staticClass:"d-flex justify-space-between modal-top"},[a("v-avatar",{staticClass:"tweet-card-avatar",attrs:{size:"50"}},[a("img",{attrs:{src:t.tweet.avatar,alt:t.tweet.name}})]),a("v-card-text",{staticClass:"py-0"},[a("v-list-item-title",[a("span",{staticClass:"mr-2 tweets-user-name"},[t._v(t._s(t.tweet.name))]),a("span",{staticClass:"tweets-user-account"},[t._v("@"+t._s(t.tweet.account))]),a("span",{staticClass:"tweets-user-account"},[t._v(" · ")]),a("span",{staticClass:"tweets-user-account"},[t._v(" "+t._s(t._f("fromNow")(t.tweet.tweetCreatedAt)))])]),a("p",{staticClass:"pt-2 pb-1 pr-0 reply-description"},[t._v(" "+t._s(t.tweet.description)+" ")]),a("v-list-item-subtitle",[a("span",{staticClass:"reply-modal-text"},[t._v("回覆給")]),a("span",{staticClass:"reply-modal-target"},[t._v("@"+t._s(t.tweet.account))])])],1)],1)],1),a("v-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(t.tweet.TweetId)}}},[a("v-card-actions",[a("v-container",{staticClass:"d-flex justify-space-between"},[a("v-avatar",{staticClass:"ml-2 mr-5",attrs:{size:"50"}},[a("img",{attrs:{src:t.currentUser.avatar,alt:t.currentUser.name}})]),a("v-textarea",{attrs:{counter:"",maxlength:"50","auto-grow":"","row-height":"15",placeholder:"推你的回覆"},model:{value:t.repliedContent,callback:function(e){t.repliedContent=e},expression:"repliedContent"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mb-5 mr-2",attrs:{color:"primary",rounded:"",elevation:"0",type:"submit",disabled:t.isProcessing}},[t._v(" 回覆 ")])],1)],1)],1)},u=[],d=a("2708"),p=a("2f62"),v=a("6783"),w=a("2fa3"),f={props:{initTweet:{type:Object,required:!0}},data:function(){return{repliedContent:" ",tweet:this.initTweet,isProcessing:!1,dialog:!0}},mixins:[d["a"]],computed:Object(n["a"])({},Object(p["b"])(["currentUser"])),methods:{handleSubmit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r,n,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.repliedContent){a.next=4;break}return w["a"].fire({icon:"warning",title:"您尚未填寫任何內容"}),a.abrupt("return");case 4:return e.isProcessing=!0,s={comment:e.repliedContent},a.next=8,v["a"].postReply({tweetId:t,comment:s.comment});case 8:if(r=a.sent,n=r.data,i=new Date,"success"===n.status){a.next=13;break}throw new Error(n.message);case 13:c={id:e.tweet.TweetId,content:s.comment,nowTime:i},e.repliedContent="",e.$emit("after-create-reply",c),w["a"].fire({icon:"success",title:"回覆 @".concat(e.tweet.account," 的推文成功")}),a.next=24;break;case 19:a.prev=19,a.t0=a["catch"](0),e.repliedContent="",e.isProcessing=!1,w["a"].fire({icon:"error",title:"無法新增回文，請稍後再試"});case 24:case"end":return a.stop()}}),a,null,[[0,19]])})))()},handleClick:function(){this.$emit("after-click-close")}}},m=f,b=(a("e945"),a("2877")),k=a("6544"),g=a.n(k),h=a("8212"),C=a("8336"),_=a("b0af"),x=a("99d9"),y=a("a523"),T=a("ce7e"),L=a("4bd4"),V=a("5d23"),j=a("2fa4"),O=a("a844"),P=Object(b["a"])(m,l,u,!1,null,"0375221e",null),U=P.exports;g()(P,{VAvatar:h["a"],VBtn:C["a"],VCard:_["a"],VCardActions:x["a"],VCardText:x["c"],VContainer:y["a"],VDivider:T["a"],VForm:L["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VSpacer:j["a"],VTextarea:O["a"]});var I={name:"UserTweets",props:{initialTweet:{type:Object,required:!0}},data:function(){return{tweet:this.initialTweet,dialog:!1,isProcessing:!1}},components:{ReplyLikedTweetModal:U},watch:{initialTweet:function(t){this.tweet=Object(n["a"])(Object(n["a"])({},this.tweet),t)}},mixins:[d["a"]],methods:{postLike:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,v["a"].postLike(t.TweetId);case 4:if(s=a.sent,r=s.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.isLike=!t.isLike,t.likedCount+=1,e.isProcessing=!1,w["a"].fire({icon:"success",title:"對 @".concat(e.tweet.account," 的推文按讚")}),a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](0),e.isProcessing=!1,w["a"].fire({icon:"error",title:"無法對 @".concat(e.tweet.account," 的推文按讚，請稍後再試")}),console.log("error",a.t0);case 19:case"end":return a.stop()}}),a,null,[[0,14]])})))()},postUnlike:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,v["a"].postUnlike(t.TweetId);case 4:if(s=a.sent,r=s.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.isLike=!t.isLike,t.likedCount-=1,e.isProcessing=!1,w["a"].fire({icon:"success",title:"收回對 @".concat(e.tweet.account," 推文按的讚")}),a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](0),e.isProcessing=!1,w["a"].fire({icon:"error",title:"無法收回對 @".concat(e.tweet.account," 推文按的讚，請稍後再試")}),console.log("error",a.t0);case 19:case"end":return a.stop()}}),a,null,[[0,14]])})))()},afterCreateReply:function(t){this.tweet.TweetId===t.TweetId&&(this.tweet.repliedCount+=1,this.dialog=!1)},afterClickClose:function(){this.dialog=!1}},computed:Object(n["a"])({},Object(p["b"])(["currentUser"]))},R=I,D=(a("67b9"),a("169a")),$=a("132d"),E=a("adda"),S=a("8860"),A=a("1baa"),z=Object(b["a"])(R,c,o,!1,null,"1f055ce8",null),q=z.exports;g()(z,{VAvatar:h["a"],VBtn:C["a"],VCard:_["a"],VCardActions:x["a"],VCardText:x["c"],VContainer:y["a"],VDialog:D["a"],VDivider:T["a"],VIcon:$["a"],VImg:E["a"],VList:S["a"],VListItemGroup:A["a"],VListItemTitle:V["c"]});var B=a("4cce"),J=a("61f3"),M={name:"UserLikedTweets",data:function(){return{tweets:[],isProcessing:!1,isLoading:!1}},components:{UserLikedTweetsCard:q,TweetsLoading:J["a"]},methods:{fetchUserLikedTweets:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isLoading=!0,a.next=4,B["a"].users.getUserLikedTweets(t);case 4:s=a.sent,r=s.data,e.tweets=r,e.isLoading=!1,a.next=15;break;case 10:a.prev=10,a.t0=a["catch"](0),e.isLoading=!1,w["a"].fire({icon:"error",title:"無法取得喜歡的推文資料，請稍後再試"}),console.log("error",a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,10]])})))()}},created:function(){var t=this.$route.params.id;this.fetchUserLikedTweets(t)},computed:Object(n["a"])({},Object(p["b"])(["currentUser"])),beforeRouteUpdate:function(t,e,a){this.fetchUserLikedTweets(t.params.id),a()}},N=M,F=(a("e3e5"),Object(b["a"])(N,s,r,!1,null,"5c75b5f6",null));e["default"]=F.exports;g()(F,{VCard:_["a"],VCardTitle:x["d"]})},e3e5:function(t,e,a){"use strict";a("ea0f")},e945:function(t,e,a){"use strict";a("8928")},ea0f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2f635521.72bd6972.js.map