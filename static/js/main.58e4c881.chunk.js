(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{35:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),u=a.n(c),l=a(5),o=a(16),i=a(2),s=a(3),m=a.n(s),p=a(9),f=a(18);a(41),a(43),a(56);f.initializeApp({apiKey:"AIzaSyDsrPjHxVf_Vgo3_uRsbP_IZ4U5tCqRGe0",authDomain:"nwitter-2e8fd.firebaseapp.com",databaseURL:"https://nwitter-2e8fd.firebaseio.com",projectId:"nwitter-2e8fd",storageBucket:"nwitter-2e8fd.appspot.com",messagingSenderId:"9993568745",appId:"1:9993568745:web:7562d8e3ca93bce145cb7"});var d=f,b=f.auth(),E=f.firestore(),h=f.storage(),v=function(e){var t=e.refreshUser,a=e.userObj,c=Object(i.f)(),u=Object(n.useState)(a.displayName),o=Object(l.a)(u,2),s=o[0],f=o[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.uid===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("nweets").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{type:"text",placeholder:"Display name",onChange:function(e){var t=e.target.value;f(t)},value:s,autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){b.signOut(),c.push("/")}},"Log out"))},g=a(6),w=a(17),y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(""),o=Object(l.a)(u,2),i=o[0],s=o[1],f=Object(n.useState)(!0),d=Object(l.a)(f,2),E=d[0],h=d[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),w=g[0],y=g[1],j=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},O=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(a,i);case 5:e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(a,i);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),y(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:j,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:j,className:"authInput"}),r.a.createElement("input",{type:"submit",value:E?"Create Account":"Log In",className:"authInput authSubmit"}),w&&r.a.createElement("span",{className:"authError"},w)),r.a.createElement("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch"},E?"Sign in":"Create Account"))},j=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,b.signInWithPopup(n);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(y,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:w.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(g.a,{icon:w.a}))))},O=a(34),x=a(12),N=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),u=Object(l.a)(c,2),o=u[0],i=u[1],s=Object(n.useState)(t.text),f=Object(l.a)(s,2),d=f[0],b=f[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.confirm("Are you sure you want to delete this nweet?"),console.log(a),!a){e.next=7;break}return e.next=5,E.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,h.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return i((function(e){return!e}))},y=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.doc("nweets/".concat(t.id)).update({text:d});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},o?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:y,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:d,onChange:function(e){var t=e.target.value;b(t)},required:!0,autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:w,className:"formBtn cancelBtn"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(g.a,{icon:x.d})),r.a.createElement("span",{onClick:w},r.a.createElement(g.a,{icon:x.a})))))},k=a(33),I=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],o=c[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),f=s[0],d=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===f){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(k.v4)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return l={text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,E.collection("nweets").add(l);case 15:o(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__Input",value:u,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"what's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(g.a,{icon:x.b})),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:x.c}))))},S=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(l.a)(a,2),u=c[0],o=c[1];return Object(n.useEffect)((function(){E.collection("nweets").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(I,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},u.map((function(e){return r.a.createElement(N,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:w.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:x.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},A=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(o.a,null,a&&r.a.createElement(C,{userObj:n}),r.a.createElement(i.c,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(S,{userObj:n})),r.a.createElement(i.a,{exact:!0,path:"/profile"},r.a.createElement(v,{userObj:n,refreshUser:t}))):r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(j,null))))};var F=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(null),o=Object(l.a)(u,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{refreshUser:function(){var e=b.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(i),userObj:i}):"Initializing...",r.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Nwitter"))};a(54);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.58e4c881.chunk.js.map