(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{301:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(56),c=t(68),s=t(58),i=t(67),o=t(70);a.default=Object(c.a)(Object(r.a)((function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{data:i.a}),n.a.createElement("section",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-xl-10"},n.a.createElement("h2",{className:"h1 mb-4"},"Reels"),n.a.createElement("hr",null),n.a.createElement("p",{className:"h2"},"Narrative Reel"),n.a.createElement(o.a,{title:"Narrative Reel",src:"https://player.vimeo.com/video/516743263?badge=0&autopause=0&player_id=0&app_id=58479",width:"640",height:"360",allow:"autoplay; fullscreen; picture-in-picture",frameBorder:"0"}),n.a.createElement("p",{className:"h2"},"Experimental Reel"),n.a.createElement(o.a,{title:"Narrative Reel",src:"https://player.vimeo.com/video/516741852",width:"640",height:"360",allow:"autoplay; fullscreen; picture-in-picture",frameBorder:"0"}),n.a.createElement("p",{className:"h2"},"Documentary Reel"),n.a.createElement(o.a,{title:"Narrative Reel",src:"https://player.vimeo.com/video/516740705",width:"640",height:"360",allow:"autoplay; fullscreen; picture-in-picture",frameBorder:"0"}))))))})))},51:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var l=t(60),n=t.n(l);t(64),t(65),t(61);n.a.initializeApp({apiKey:"AIzaSyBQ45K6tmg-PUiQnXcaOPbDAfzTmeVDMbA",authDomain:"phyff-dea73.firebaseapp.com",databaseURL:"https://phyff-dea73.firebaseio.com",projectId:"phyff-dea73",storageBucket:"phyff-dea73.appspot.com",messagingSenderId:"504901127886",appId:"1:504901127886:web:d462db15b3072bd1ca8a9f",measurementId:"G-L593Z52SFT"}),n.a.analytics();const r=n.a.firestore();n.a.storage()},52:function(e,a,t){"use strict";var l=t(0),n=t(51);a.a=()=>{const[e,a]=Object(l.useState)({isLoaded:!1});return Object(l.useEffect)(()=>{n.a.collection("event").doc("info").get().then(e=>{e.exists&&a({...e.data(),isLoaded:!0})})},[]),e}},53:function(e,a,t){"use strict";a.a="/img/divider-3.svg"},54:function(e,a,t){"use strict";a.a="/img/deco-lines-5.svg"},55:function(e,a,t){"use strict";a.a=e=>[{name:"address",icon:"/img/marker-1.svg",text:null!=e?e:"",href:"https://www.google.com/maps/search/?api=1&query="+e},{name:"email",icon:"/img/mail.svg",text:"phillyyouthfilmfest@gmail.com",href:"mailto:phillyyouthfilmfest@gmail.com"},{name:"instagram",icon:"/img/instagram.svg",text:"@phillyyouthfilmfest",href:"https://www.instagram.com/phillyyouthfilmfest/"},{name:"facebook",icon:"/img/facebook.svg",text:"@phyff19",href:"https://www.facebook.com/phyff19/"},{name:"youtube",icon:"/img/youtube.svg",text:"Philly Youth Film Fest",href:"https://www.youtube.com/channel/UCNNgWQxyh9mVcPV0ZSk0w1Q"}]},56:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(48),c=t(34),s=t(35),i=t(49),o=t(22),m=t(11),d=t(54),u=t(55),p=t(9);var g=[[{name:"Winners",to:"/winners"},{name:"About",to:"/about"},{name:"Virtual Screening Room",to:null,dropdownContent:[{name:"All Categories",to:"/virtual-screening-room"},{name:"Reels",to:"/virtual-screening-room/reels"},{name:"Award Winners",to:"/virtual-screening-room/award-winners"},{name:"Films",to:"/virtual-screening-room/films"},{name:"Screenplays",to:"/virtual-screening-room/screenplays"}]}],[{name:"Submit",to:"/submit"},{name:"Attend",to:"/attend"}]],v=t(52);var E=()=>{const{address:e,submissionDeadline:a}=Object(v.a)(),t=Date.now()<(null==a?void 0:a.toDate().getTime());return n.a.createElement("footer",{className:"pb-4 bg-primary-3 text-light layer-4",id:"footer"},n.a.createElement(r.a,null,n.a.createElement(c.a,{className:"mb-5"},n.a.createElement(s.a,null,n.a.createElement("div",{className:"card card-body border-0 o-hidden mb-0 bg-primary text-light"},n.a.createElement("div",{className:"position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"},n.a.createElement("div",{className:"h3 text-center mb-md-0"},t?"Submit to PHYFF Today!":"Attend the Festival!"),n.a.createElement(o.LinkContainer,{to:t?"/submit":"/attend"},n.a.createElement(i.a,{variant:"white",size:"lg"},t?"Submit":"Attend"))),n.a.createElement("div",{className:"decoration middle-y right scale-2 layer-0"},n.a.createElement(p.a,{src:d.a,className:"bg-primary-2"})),n.a.createElement("div",{className:"decoration bottom right layer-0"},n.a.createElement(p.a,{src:"/img/deco-lines-6.svg",className:"bg-primary-2-alt"}))))),n.a.createElement(c.a,{className:"mb-5"},n.a.createElement(s.a,{className:"col-6 col-lg-3 col-xl-2"},n.a.createElement("h5",null,"Navigate"),n.a.createElement("ul",{className:"nav flex-column"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.Link,{to:"/",className:"nav-link"},"Home")),g.map(e=>n.a.createElement("div",{key:e[0].name},n.a.createElement("span",{className:"footer-divider"}),e.map(e=>n.a.createElement("li",{className:"nav-item",key:e.name},n.a.createElement(m.Link,{to:e.to,className:"nav-link"},e.name))))))),n.a.createElement(s.a,{className:"col-6 col-lg"},n.a.createElement("h5",null,"Contact"),n.a.createElement("ul",{className:"list-unstyled"},Object(u.a)(e).slice(0,3).map(({icon:e,text:a,href:t})=>n.a.createElement("li",{className:"mb-2 d-flex",key:t},n.a.createElement(p.a,{src:e,className:"icon"}),n.a.createElement("div",{className:"ml-3 w-100"},n.a.createElement("a",{href:t,className:"w-100",style:{wordWrap:"break-word",wordBreak:"break-all"}},a)))))))))},y=t(276),f=t(306),h=t(310),b=t(3),N=t(13);var w=({delay:e})=>{const[a,t]=Object(l.useState)(window.scrollY);return Object(l.useEffect)(()=>{const a=((e,a,t)=>{let l=(new Date).getTime();return(...n)=>{const r=(new Date).getTime();(r-l>=a||t(...n))&&(l=r,e(...n))}})(()=>{t(window.scrollY)},null!=e?e:10,()=>window.scrollY<=0);return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}}),a};var k=()=>{var e;const a=w({delay:50}),t=null!==(e={"/":{classNames:"navbar-transparent",overlay:!0,isDark:!0}}[Object(b.l)().pathname])&&void 0!==e?e:{classNames:"navbar-transparent",overlay:!0,isDark:!0},l=n.a.forwardRef(({children:e,onClick:a},t)=>n.a.createElement(y.a.Link,{as:m.Link,onClick:e=>{e.preventDefault(),a(e)},ref:t},e));return n.a.createElement(h.a,{variant:t.isDark?"dark":"light",fixed:"top",expand:"lg",className:"px-5 "+(a>0?"navbar-background":"navbar-transparent")},n.a.createElement(h.a.Brand,{className:"fade-page"},n.a.createElement(m.Link,{to:"/"},n.a.createElement("img",{alt:"Phyff",style:{height:"2em"},src:(t.isDark,N.a)}))),n.a.createElement(h.a.Toggle,null,n.a.createElement(p.a,{className:"icon",src:"/img/menu.svg",alt:"menu interface icon"})),n.a.createElement(h.a.Collapse,{className:"justify-content-end",id:"basic-navbar-collapse"},n.a.createElement(y.a,null,g[0].map(({to:e,name:a,dropdownContent:t})=>n.a.createElement(n.a.Fragment,null,t?n.a.createElement(f.a,null,n.a.createElement(f.a.Toggle,{as:l},a),n.a.createElement(f.a.Menu,null,t.map(e=>n.a.createElement(o.LinkContainer,{to:e.to,activeClassName:""},n.a.createElement(f.a.Item,null,e.name))))):n.a.createElement(y.a.Link,{as:m.Link,to:e,key:a},a)))),n.a.createElement(y.a,{className:"ml-auto"},g[1].map(({to:e,name:a},t)=>n.a.createElement(y.a.Link,{as:m.Link,to:e,key:a},n.a.createElement(i.a,{className:"btn-"+["primary-2","primary"][t%2]},a))))))};a.a=e=>a=>n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),n.a.createElement(e,a),n.a.createElement(E,null))},57:function(e,a,t){"use strict";a.a="/img/deco-blob-1.svg"},58:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(48),c=t(34),s=t(35),i=t(53),o=t(12),m=t(57),d=t(14),u=t(9),p=t(2),g=t.n(p),v=g.a.shape({title:g.a.string.isRequired,caption:g.a.string,image:g.a.string,color:g.a.string,dividerColor:g.a.string,decorationStyle:g.a.number,decoColors:g.a.shape({primary:g.a.string,secondary:g.a.string})});const E=({data:e})=>{var a,t,l,r;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"decoration middle-y right d-none d-xl-block","data-jarallax-element":"50 50"},n.a.createElement(u.a,{src:m.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),n.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"100"},n.a.createElement(u.a,{src:o.a,className:null!==(l=null===(r=e.decoColors)||void 0===r?void 0:r.secondary)&&void 0!==l?l:"bg-primary-2"})))};E.propTypes={data:v};const y=({data:e})=>{var a,t,l,r;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"50 50"},n.a.createElement(u.a,{src:d.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),n.a.createElement("div",{className:"decoration middle-y left scale-3 d-none d-xl-block","data-jarallax-element":"100"},n.a.createElement(u.a,{src:"/img/deco-dots-3.svg",className:null!==(l=null===(r=e.decoColors)||void 0===r?void 0:r.secondary)&&void 0!==l?l:"bg-primary-2"})))};y.propTypes={data:v};const f=({data:e})=>{var a,t,l,o;return n.a.createElement("section",{className:(null!==(a=e.color)&&void 0!==a?a:"bg-primary-2")+" header-inner o-hidden has-divider"},n.a.createElement("img",{src:null!==(t=e.image)&&void 0!==t?t:"/img/event-1.jpg",alt:e.title,className:"bg-image blend-mode-multiply"}),n.a.createElement(r.a,{className:"layer-2"},n.a.createElement(c.a,{className:"py-6 text-center justify-content-center align-items-center layer-2 text-light"},n.a.createElement(s.a,{lg:10,xl:8},n.a.createElement("h1",{className:"display-4"},e.title),n.a.createElement("p",{className:"lead mb-0"},e.caption)))),n.a.createElement("div",{className:"decoration-wrapper"},[n.a.createElement(E,{data:e}),n.a.createElement(y,{data:e})][(null!==(l=e.decorationStyle)&&void 0!==l?l:0)%2]),n.a.createElement("div",{className:"divider layer-1"},n.a.createElement(u.a,{src:i.a,className:null!==(o=e.dividerColor)&&void 0!==o?o:"bg-white"})))};f.propTypes={data:v};a.a=f},59:function(e,a,t){"use strict";a.a="/img/awards-1-bw.jpg"},67:function(e,a,t){"use strict";const l={title:"Virtual Screening Room",image:t(59).a,color:"bg-primary-2",caption:"Official Winners and Selections for the Philadelphia Youth Film Festival 2021.",dividerColor:"bg-white",decoColors:{primary:"bg-primary",secondary:"bg-primary-alt"}};a.a=l},68:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(220),c=t(3),s=t(313),i=t(51);var o=()=>{const[e,a]=Object(l.useState)(null);return Object(l.useEffect)(()=>{i.a.collection("security").doc("auth").get().then(async e=>{e.exists&&a(e.data().password)})},[]),e};var m=Object(c.o)((function({history:e}){const a=o(),[t,c]=Object(l.useState)(!1);return n.a.createElement("section",{className:"min-vh-100 py-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center pt-6"},n.a.createElement("div",{className:"col-xl-4 col-lg-5 col-md-6"},n.a.createElement("div",{className:"text-center mb-4"},n.a.createElement("h1",{className:"mb-1"},"This material is private"),n.a.createElement("span",null,"Enter password to gain access"),t&&n.a.createElement(s.a,{variant:"danger",className:"mt-3"},"The password you have entered is incorrect. Please try again.")),n.a.createElement(r.c,{initialValues:{password:""},onSubmit:(t,{resetForm:l})=>{c(!1),l(),t.password===a?(localStorage.setItem("authentication",t.password),e.push("/virtual-screening-room")):c(!0)}},n.a.createElement(r.b,null,n.a.createElement("div",{className:"form-group"},n.a.createElement(r.a,{type:"password",name:"password",placeholder:"Password",className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn-block btn btn-primary",type:"submit"},"Submit"))))))))})),d=t(24);a.a=function(e){return a=>{const t=o();return t?localStorage.authentication===t?n.a.createElement(e,a):n.a.createElement(m,null):n.a.createElement(d.a,null)}}},70:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(2),c=t.n(r);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const i=function({title:e,src:a,style:t,...l}){return n.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},n.a.createElement("iframe",s({title:e,src:a,allowFullScreen:!0,frameBorder:"0",className:"pb-5",style:t||{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},l)))};i.propTypes={title:c.a.string,src:c.a.string},a.a=i}}]);