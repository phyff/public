(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{209:function(e,a,t){"use strict";a.a="/img/video-camera.svg"},210:function(e,a,t){"use strict";a.a="/img/deco-dots-1.svg"},224:function(e,a,t){"use strict";var n=t(3);a.a=()=>new URLSearchParams(Object(n.l)().search)},244:function(e,a,t){"use strict";var n=t(0),r=t(51);a.a=()=>{const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{r.a.collection("winners").get().then(e=>{const t=[];e.forEach(e=>{t.push(e.data())}),a(t.reverse().map(e=>e.year))})},[]),e}},248:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(312),c=t(298),s=t(2),i=t.n(s),m=t(71),o=t(51);var d=e=>{const[a,t]=Object(n.useState)({});return Object(n.useEffect)(()=>{m.a.forEach(({title:a})=>{o.a.collection("winners").doc(e.toString()).collection(a.toLowerCase()).get().then(e=>{const n=[];e.forEach(e=>{n.push(e.data())}),t(e=>{const t={...e};return t[a]=n,t})})})},[e]),a},u=t(34),p=t(35),g=t(290),E=t(23),v=t(49),f=t(311),y=t(297),b=t(260),h=t(261),N=i.a.shape({title:i.a.string,director:i.a.string,url:i.a.string,local:i.a.bool,place:i.a.number,specialAward:i.a.string});const w=({winner:e,delay:a})=>{const{title:t,director:n,local:l,place:c,url:s,specialAward:i,gfs:m}=e||{};return r.a.createElement(g.a.Item,{"data-aos":"fade-up","data-aos-delay":a},r.a.createElement(u.a,{className:"no-gutters align-items-center justify-content-center py-3 text-dark"},r.a.createElement(p.a,{md:4,sm:10,className:"text-center text-md-left"},r.a.createElement("h5",null,r.a.createElement(b.a,{icon:h.a,size:"lg",color:["gold","silver","darkgoldenrod"][c-1]})," ",t)),r.a.createElement(p.a,{md:2,sm:3,className:"text-center mb-1"},s&&r.a.createElement("a",{href:s,target:"_blank",rel:"noreferrer"},r.a.createElement(v.a,null,"View ",r.a.createElement(b.a,{icon:h.b})))),r.a.createElement(p.a,{md:1,sm:3,className:"text-center mb-1"},l&&r.a.createElement(f.a,{placement:"right",delay:{show:400,hide:250},overlay:e=>r.a.createElement(y.a,e,r.a.createElement("strong",null,t)," was created by a filmmaker from the Philadelphia area.")},r.a.createElement("span",{className:"badge badge-pill badge-primary-2 m-1"},"Local")),m&&r.a.createElement(f.a,{placement:"right",delay:{show:400,hide:250},overlay:e=>r.a.createElement(y.a,e,r.a.createElement("strong",null,t)," was created by a filmmaker attending Germantown Friends School.")},r.a.createElement("span",{className:"badge badge-pill badge-warning m-1"},"gfs")),i&&r.a.createElement(f.a,{placement:"right",delay:{show:400,hide:250},overlay:e=>r.a.createElement(y.a,e,r.a.createElement("strong",null,t),' won the "',i,'" award.')},r.a.createElement("span",{className:"badge badge-pill badge-warning m-1"},"Special"))),r.a.createElement(p.a,{md:5,sm:10,className:"text-center text-md-right ml-md-auto"},r.a.createElement("span",{className:"w-100"},n))))};w.propTypes={winner:N,delay:i.a.number};var k=w;const x=({winners:e})=>r.a.createElement("div",{className:"card card-body layer-2"},e.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"no-gutters d-none d-md-flex bg-white py-3"},r.a.createElement(p.a,{md:4},r.a.createElement("span",{className:"h6 mb-0 text-muted"},"Title")),r.a.createElement(p.a,{md:!0,className:"ml-auto text-right"},r.a.createElement("span",{className:"h6 mb-0 text-muted"},"Filmmaker(s)"))),r.a.createElement(g.a,{variant:"flush"},e.sort((e,a)=>e.place-a.place).map((e,a)=>r.a.createElement(k,{winner:e,delay:50*a,key:e.title})))):r.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},r.a.createElement(E.a,{className:"ml-auto mr-auto"})));x.propTypes={winners:i.a.arrayOf(N)};var j=x,O=i.a.shape({title:i.a.string,description:i.a.string,icon:i.a.string}),C=t(9);const L=({category:e,winners:a})=>{const{title:t,description:n,icon:l}=e;return r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"justify-content-center text-center mb-1"},r.a.createElement(C.a,{src:l,className:"icon icon-lg bg-primary",externalClassnames:"d-inline-block"}),r.a.createElement("h3",null,t),r.a.createElement("p",{className:"lead"},n)),r.a.createElement(j,{winners:a}))};L.propTypes={category:O,winners:i.a.arrayOf(N)};var S=L,F=t(224);const T=({year:e,compact:a,navLeft:t})=>{const s=m.a.map(e=>e.title),[i,o]=Object(n.useState)(s[0]),u=Object(F.a)(),p=d(e);return Object(n.useEffect)(()=>{var e;const a=null!==(e=u.get("category"))&&void 0!==e?e:"none",t=a.charAt(0).toUpperCase()+a.slice(1);a&&s.includes(t)&&o(t)},[]),a?r.a.createElement(l.a,{activeKey:i,onSelect:e=>o(e),variant:"pills",className:"mb-3 "+(t?null:"justify-content-end")},m.a.map(e=>{var a;return r.a.createElement(c.a,{eventKey:e.title,title:e.title,key:e.title},r.a.createElement(S,{category:e,winners:null!==(a=p[e.title])&&void 0!==a?a:[]}))})):r.a.createElement("div",null,m.a.map(e=>{var a;return r.a.createElement(S,{category:e,winners:null!==(a=p[e.title])&&void 0!==a?a:[],key:e.title})}))};T.propTypes={year:i.a.number,compact:i.a.bool,navLeft:i.a.bool};a.a=T},308:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(56),c=t(58);var s={title:"Winners",image:t(59).a,color:"bg-primary-2",caption:"Each year, filmmaking experts will judge and rank submitted films in four categories. The top 3 films are selected in each category. Submit your film for a chance to win!",dividerColor:"bg-primary-alt",decoColors:{primary:"bg-primary",secondary:"bg-primary-alt"}},i=t(1),m=t(4),o=t(8),d=t.n(o),u=t(10),p=t(25),g=r.a.forwardRef((function(e,a){var t=e.active,n=e.disabled,l=e.className,c=e.style,s=e.activeLabel,o=e.children,u=Object(m.a)(e,["active","disabled","className","style","activeLabel","children"]),g=t||n?"span":p.a;return r.a.createElement("li",{ref:a,style:c,className:d()(l,"page-item",{active:t,disabled:n})},r.a.createElement(g,Object(i.a)({className:"page-link",disabled:n},u),o,t&&s&&r.a.createElement("span",{className:"sr-only"},s)))}));g.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},g.displayName="PageItem";var E=g;function v(e,a,t){function n(e){var n=e.children,l=Object(m.a)(e,["children"]);return r.a.createElement(g,l,r.a.createElement("span",{"aria-hidden":"true"},n||a),r.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var f=v("First","«"),y=v("Prev","‹","Previous"),b=v("Ellipsis","…","More"),h=v("Next","›"),N=v("Last","»"),w=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.children,c=e.size,s=Object(m.a)(e,["bsPrefix","className","children","size"]),o=Object(u.a)(t,"pagination");return r.a.createElement("ul",Object(i.a)({ref:a},s,{className:d()(n,o,c&&o+"-"+c)}),l)}));w.First=f,w.Prev=y,w.Ellipsis=b,w.Item=E,w.Next=h,w.Last=N;var k=w,x=t(48),j=t(244),O=t(248),C=t(9),L=t(210),S=t(224);var F=()=>{var e;const a=Object(S.a)(),[t,l]=Object(n.useState)(0),c=null!==(e=Object(j.a)())&&void 0!==e?e:[];return Object(n.useEffect)(()=>{const e=a.get("year"),t=Math.max(Math.min(c.map(e=>e.toString()).indexOf(e),c.length),0);l(t)},[c]),r.a.createElement("section",{className:"bg-primary-alt"},r.a.createElement(x.a,{className:"layer-2"},r.a.createElement(k,{className:"justify-content-end"},r.a.createElement(k.First,{onClick:()=>{l(0)}}),r.a.createElement(k.Prev,{onClick:()=>{l(e=>Math.max(Math.min(c.length-1,e-1),0))}}),c.map((e,a)=>{const n=t-2,s=t+2,i=n-(s>c.length-1?s-(c.length-1):0),m=s-(n<0?n:0);return i<a&&a<m?r.a.createElement(k.Item,{onClick:()=>{l(a)},active:a===t,key:e},e):a===i||a===m?r.a.createElement(k.Ellipsis,{key:e}):null}),r.a.createElement(k.Next,{onClick:()=>{l(e=>Math.max(Math.min(c.length-1,e+1),0))}}),r.a.createElement(k.Last,{onClick:()=>{l(c.length-1)}})),c[t]&&r.a.createElement(O.a,{year:c[t],compact:!0})),r.a.createElement("div",{className:"decoration bottom left scale-2 d-none d-md-block"},r.a.createElement(C.a,{className:"bg-primary",src:L.a,alt:"deco-dots-3 decoration"})))};a.default=Object(l.a)(()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{data:s}),r.a.createElement(F,null)))},51:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(60),r=t.n(n);t(64),t(65),t(61);r.a.initializeApp({apiKey:"AIzaSyBQ45K6tmg-PUiQnXcaOPbDAfzTmeVDMbA",authDomain:"phyff-dea73.firebaseapp.com",databaseURL:"https://phyff-dea73.firebaseio.com",projectId:"phyff-dea73",storageBucket:"phyff-dea73.appspot.com",messagingSenderId:"504901127886",appId:"1:504901127886:web:d462db15b3072bd1ca8a9f",measurementId:"G-L593Z52SFT"}),r.a.analytics();const l=r.a.firestore();r.a.storage()},52:function(e,a,t){"use strict";var n=t(0),r=t(51);a.a=()=>{const[e,a]=Object(n.useState)({isLoaded:!1});return Object(n.useEffect)(()=>{r.a.collection("event").doc("info").get().then(e=>{e.exists&&a({...e.data(),isLoaded:!0})})},[]),e}},53:function(e,a,t){"use strict";a.a="/img/divider-3.svg"},54:function(e,a,t){"use strict";a.a="/img/deco-lines-5.svg"},55:function(e,a,t){"use strict";a.a=e=>[{name:"address",icon:"/img/marker-1.svg",text:null!=e?e:"",href:"https://www.google.com/maps/search/?api=1&query="+e},{name:"email",icon:"/img/mail.svg",text:"phillyyouthfilmfest@gmail.com",href:"mailto:phillyyouthfilmfest@gmail.com"},{name:"instagram",icon:"/img/instagram.svg",text:"@phillyyouthfilmfest",href:"https://www.instagram.com/phillyyouthfilmfest/"},{name:"facebook",icon:"/img/facebook.svg",text:"@phyff19",href:"https://www.facebook.com/phyff19/"},{name:"youtube",icon:"/img/youtube.svg",text:"Philly Youth Film Fest",href:"https://www.youtube.com/channel/UCNNgWQxyh9mVcPV0ZSk0w1Q"}]},56:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(48),c=t(34),s=t(35),i=t(49),m=t(22),o=t(11),d=t(54),u=t(55),p=t(9);var g=[[{name:"Winners",to:"/winners"},{name:"About",to:"/about"},{name:"Virtual Screening Room",to:null,dropdownContent:[{name:"All Categories",to:"/virtual-screening-room"},{name:"Reels",to:"/virtual-screening-room/reels"},{name:"Award Winners",to:"/virtual-screening-room/award-winners"},{name:"Films",to:"/virtual-screening-room/films"},{name:"Screenplays",to:"/virtual-screening-room/screenplays"}]}],[{name:"Submit",to:"/submit"},{name:"Attend",to:"/attend"}]],E=t(52);var v=()=>{const{address:e,submissionDeadline:a}=Object(E.a)(),t=Date.now()<(null==a?void 0:a.toDate().getTime());return r.a.createElement("footer",{className:"pb-4 bg-primary-3 text-light layer-4",id:"footer"},r.a.createElement(l.a,null,r.a.createElement(c.a,{className:"mb-5"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"card card-body border-0 o-hidden mb-0 bg-primary text-light"},r.a.createElement("div",{className:"position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"},r.a.createElement("div",{className:"h3 text-center mb-md-0"},t?"Submit to PHYFF Today!":"Attend the Festival!"),r.a.createElement(m.LinkContainer,{to:t?"/submit":"/attend"},r.a.createElement(i.a,{variant:"white",size:"lg"},t?"Submit":"Attend"))),r.a.createElement("div",{className:"decoration middle-y right scale-2 layer-0"},r.a.createElement(p.a,{src:d.a,className:"bg-primary-2"})),r.a.createElement("div",{className:"decoration bottom right layer-0"},r.a.createElement(p.a,{src:"/img/deco-lines-6.svg",className:"bg-primary-2-alt"}))))),r.a.createElement(c.a,{className:"mb-5"},r.a.createElement(s.a,{className:"col-6 col-lg-3 col-xl-2"},r.a.createElement("h5",null,"Navigate"),r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.Link,{to:"/",className:"nav-link"},"Home")),g.map(e=>r.a.createElement("div",{key:e[0].name},r.a.createElement("span",{className:"footer-divider"}),e.map(e=>r.a.createElement("li",{className:"nav-item",key:e.name},r.a.createElement(o.Link,{to:e.to,className:"nav-link"},e.name))))))),r.a.createElement(s.a,{className:"col-6 col-lg"},r.a.createElement("h5",null,"Contact"),r.a.createElement("ul",{className:"list-unstyled"},Object(u.a)(e).slice(0,3).map(({icon:e,text:a,href:t})=>r.a.createElement("li",{className:"mb-2 d-flex",key:t},r.a.createElement(p.a,{src:e,className:"icon"}),r.a.createElement("div",{className:"ml-3 w-100"},r.a.createElement("a",{href:t,className:"w-100",style:{wordWrap:"break-word",wordBreak:"break-all"}},a)))))))))},f=t(276),y=t(306),b=t(310),h=t(3),N=t(13);var w=({delay:e})=>{const[a,t]=Object(n.useState)(window.scrollY);return Object(n.useEffect)(()=>{const a=((e,a,t)=>{let n=(new Date).getTime();return(...r)=>{const l=(new Date).getTime();(l-n>=a||t(...r))&&(n=l,e(...r))}})(()=>{t(window.scrollY)},null!=e?e:10,()=>window.scrollY<=0);return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}}),a};var k=()=>{var e;const a=w({delay:50}),t=null!==(e={"/":{classNames:"navbar-transparent",overlay:!0,isDark:!0}}[Object(h.l)().pathname])&&void 0!==e?e:{classNames:"navbar-transparent",overlay:!0,isDark:!0},n=r.a.forwardRef(({children:e,onClick:a},t)=>r.a.createElement(f.a.Link,{as:o.Link,onClick:e=>{e.preventDefault(),a(e)},ref:t},e));return r.a.createElement(b.a,{variant:t.isDark?"dark":"light",fixed:"top",expand:"lg",className:"px-5 "+(a>0?"navbar-background":"navbar-transparent")},r.a.createElement(b.a.Brand,{className:"fade-page"},r.a.createElement(o.Link,{to:"/"},r.a.createElement("img",{alt:"Phyff",style:{height:"2em"},src:(t.isDark,N.a)}))),r.a.createElement(b.a.Toggle,null,r.a.createElement(p.a,{className:"icon",src:"/img/menu.svg",alt:"menu interface icon"})),r.a.createElement(b.a.Collapse,{className:"justify-content-end",id:"basic-navbar-collapse"},r.a.createElement(f.a,null,g[0].map(({to:e,name:a,dropdownContent:t})=>r.a.createElement(r.a.Fragment,null,t?r.a.createElement(y.a,null,r.a.createElement(y.a.Toggle,{as:n},a),r.a.createElement(y.a.Menu,null,t.map(e=>r.a.createElement(m.LinkContainer,{to:e.to,activeClassName:""},r.a.createElement(y.a.Item,null,e.name))))):r.a.createElement(f.a.Link,{as:o.Link,to:e,key:a},a)))),r.a.createElement(f.a,{className:"ml-auto"},g[1].map(({to:e,name:a},t)=>r.a.createElement(f.a.Link,{as:o.Link,to:e,key:a},r.a.createElement(i.a,{className:"btn-"+["primary-2","primary"][t%2]},a))))))};a.a=e=>a=>r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(e,a),r.a.createElement(v,null))},57:function(e,a,t){"use strict";a.a="/img/deco-blob-1.svg"},58:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(48),c=t(34),s=t(35),i=t(53),m=t(12),o=t(57),d=t(14),u=t(9),p=t(2),g=t.n(p),E=g.a.shape({title:g.a.string.isRequired,caption:g.a.string,image:g.a.string,color:g.a.string,dividerColor:g.a.string,decorationStyle:g.a.number,decoColors:g.a.shape({primary:g.a.string,secondary:g.a.string})});const v=({data:e})=>{var a,t,n,l;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"decoration middle-y right d-none d-xl-block","data-jarallax-element":"50 50"},r.a.createElement(u.a,{src:o.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),r.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"100"},r.a.createElement(u.a,{src:m.a,className:null!==(n=null===(l=e.decoColors)||void 0===l?void 0:l.secondary)&&void 0!==n?n:"bg-primary-2"})))};v.propTypes={data:E};const f=({data:e})=>{var a,t,n,l;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"50 50"},r.a.createElement(u.a,{src:d.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),r.a.createElement("div",{className:"decoration middle-y left scale-3 d-none d-xl-block","data-jarallax-element":"100"},r.a.createElement(u.a,{src:"/img/deco-dots-3.svg",className:null!==(n=null===(l=e.decoColors)||void 0===l?void 0:l.secondary)&&void 0!==n?n:"bg-primary-2"})))};f.propTypes={data:E};const y=({data:e})=>{var a,t,n,m;return r.a.createElement("section",{className:(null!==(a=e.color)&&void 0!==a?a:"bg-primary-2")+" header-inner o-hidden has-divider"},r.a.createElement("img",{src:null!==(t=e.image)&&void 0!==t?t:"/img/event-1.jpg",alt:e.title,className:"bg-image blend-mode-multiply"}),r.a.createElement(l.a,{className:"layer-2"},r.a.createElement(c.a,{className:"py-6 text-center justify-content-center align-items-center layer-2 text-light"},r.a.createElement(s.a,{lg:10,xl:8},r.a.createElement("h1",{className:"display-4"},"submit"===window.location.pathname.split("/")[1]?r.a.createElement("a",{href:"https://filmfreeway.com/phyff"},e.title):e.title),"string"==typeof e.caption&&r.a.createElement("p",{className:"lead mb-0"},e.caption),"function"==typeof e.caption&&e.caption()))),r.a.createElement("div",{className:"decoration-wrapper"},[r.a.createElement(v,{data:e}),r.a.createElement(f,{data:e})][(null!==(n=e.decorationStyle)&&void 0!==n?n:0)%2]),r.a.createElement("div",{className:"divider layer-1"},r.a.createElement(u.a,{src:i.a,className:null!==(m=e.dividerColor)&&void 0!==m?m:"bg-white"})))};y.propTypes={data:E};a.a=y},59:function(e,a,t){"use strict";a.a="/img/awards-1-bw.jpg"},71:function(e,a,t){"use strict";const n=[{title:"Narrative",description:"Films that tell fictional or fictionalized stories, events or narratives.",icon:"/img/chat-1.svg"},{title:"Experimental",description:"Films that experiment with some aspect of the filmmaking process, such as editing of visuals and/or audio, filming techniques, and even the mode of presentation.",icon:"/img/bulb-1.svg"},{title:"Documentary",description:"Films that provide factual records reports on a specific subject or subjects.",icon:t(209).a},{title:"Screenplay",description:"The script of a movie, including acting instructions and scene directions.",icon:"/img/selected-file.svg"}];a.a=n}}]);