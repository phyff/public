(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(e,a,t){"use strict";a.a="/img/deco-dots-1.svg"},206:function(e,a,t){"use strict";var s=t(2),n=t.n(s);a.a=n.a.shape({title:n.a.string,time:n.a.number,speaker:n.a.shape({image:n.a.string,name:n.a.string,contact:n.a.string})})},208:function(e,a,t){var s={"./af":60,"./af.js":60,"./ar":61,"./ar-dz":62,"./ar-dz.js":62,"./ar-kw":63,"./ar-kw.js":63,"./ar-ly":64,"./ar-ly.js":64,"./ar-ma":65,"./ar-ma.js":65,"./ar-sa":66,"./ar-sa.js":66,"./ar-tn":67,"./ar-tn.js":67,"./ar.js":61,"./az":68,"./az.js":68,"./be":69,"./be.js":69,"./bg":70,"./bg.js":70,"./bm":71,"./bm.js":71,"./bn":72,"./bn-bd":73,"./bn-bd.js":73,"./bn.js":72,"./bo":74,"./bo.js":74,"./br":75,"./br.js":75,"./bs":76,"./bs.js":76,"./ca":77,"./ca.js":77,"./cs":78,"./cs.js":78,"./cv":79,"./cv.js":79,"./cy":80,"./cy.js":80,"./da":81,"./da.js":81,"./de":82,"./de-at":83,"./de-at.js":83,"./de-ch":84,"./de-ch.js":84,"./de.js":82,"./dv":85,"./dv.js":85,"./el":86,"./el.js":86,"./en-au":87,"./en-au.js":87,"./en-ca":88,"./en-ca.js":88,"./en-gb":89,"./en-gb.js":89,"./en-ie":90,"./en-ie.js":90,"./en-il":91,"./en-il.js":91,"./en-in":92,"./en-in.js":92,"./en-nz":93,"./en-nz.js":93,"./en-sg":94,"./en-sg.js":94,"./eo":95,"./eo.js":95,"./es":96,"./es-do":97,"./es-do.js":97,"./es-mx":98,"./es-mx.js":98,"./es-us":99,"./es-us.js":99,"./es.js":96,"./et":100,"./et.js":100,"./eu":101,"./eu.js":101,"./fa":102,"./fa.js":102,"./fi":103,"./fi.js":103,"./fil":104,"./fil.js":104,"./fo":105,"./fo.js":105,"./fr":106,"./fr-ca":107,"./fr-ca.js":107,"./fr-ch":108,"./fr-ch.js":108,"./fr.js":106,"./fy":109,"./fy.js":109,"./ga":110,"./ga.js":110,"./gd":111,"./gd.js":111,"./gl":112,"./gl.js":112,"./gom-deva":113,"./gom-deva.js":113,"./gom-latn":114,"./gom-latn.js":114,"./gu":115,"./gu.js":115,"./he":116,"./he.js":116,"./hi":117,"./hi.js":117,"./hr":118,"./hr.js":118,"./hu":119,"./hu.js":119,"./hy-am":120,"./hy-am.js":120,"./id":121,"./id.js":121,"./is":122,"./is.js":122,"./it":123,"./it-ch":124,"./it-ch.js":124,"./it.js":123,"./ja":125,"./ja.js":125,"./jv":126,"./jv.js":126,"./ka":127,"./ka.js":127,"./kk":128,"./kk.js":128,"./km":129,"./km.js":129,"./kn":130,"./kn.js":130,"./ko":131,"./ko.js":131,"./ku":132,"./ku.js":132,"./ky":133,"./ky.js":133,"./lb":134,"./lb.js":134,"./lo":135,"./lo.js":135,"./lt":136,"./lt.js":136,"./lv":137,"./lv.js":137,"./me":138,"./me.js":138,"./mi":139,"./mi.js":139,"./mk":140,"./mk.js":140,"./ml":141,"./ml.js":141,"./mn":142,"./mn.js":142,"./mr":143,"./mr.js":143,"./ms":144,"./ms-my":145,"./ms-my.js":145,"./ms.js":144,"./mt":146,"./mt.js":146,"./my":147,"./my.js":147,"./nb":148,"./nb.js":148,"./ne":149,"./ne.js":149,"./nl":150,"./nl-be":151,"./nl-be.js":151,"./nl.js":150,"./nn":152,"./nn.js":152,"./oc-lnc":153,"./oc-lnc.js":153,"./pa-in":154,"./pa-in.js":154,"./pl":155,"./pl.js":155,"./pt":156,"./pt-br":157,"./pt-br.js":157,"./pt.js":156,"./ro":158,"./ro.js":158,"./ru":159,"./ru.js":159,"./sd":160,"./sd.js":160,"./se":161,"./se.js":161,"./si":162,"./si.js":162,"./sk":163,"./sk.js":163,"./sl":164,"./sl.js":164,"./sq":165,"./sq.js":165,"./sr":166,"./sr-cyrl":167,"./sr-cyrl.js":167,"./sr.js":166,"./ss":168,"./ss.js":168,"./sv":169,"./sv.js":169,"./sw":170,"./sw.js":170,"./ta":171,"./ta.js":171,"./te":172,"./te.js":172,"./tet":173,"./tet.js":173,"./tg":174,"./tg.js":174,"./th":175,"./th.js":175,"./tk":176,"./tk.js":176,"./tl-ph":177,"./tl-ph.js":177,"./tlh":178,"./tlh.js":178,"./tr":179,"./tr.js":179,"./tzl":180,"./tzl.js":180,"./tzm":181,"./tzm-latn":182,"./tzm-latn.js":182,"./tzm.js":181,"./ug-cn":183,"./ug-cn.js":183,"./uk":184,"./uk.js":184,"./ur":185,"./ur.js":185,"./uz":186,"./uz-latn":187,"./uz-latn.js":187,"./uz.js":186,"./vi":188,"./vi.js":188,"./x-pseudo":189,"./x-pseudo.js":189,"./yo":190,"./yo.js":190,"./zh-cn":191,"./zh-cn.js":191,"./zh-hk":192,"./zh-hk.js":192,"./zh-mo":193,"./zh-mo.js":193,"./zh-tw":194,"./zh-tw.js":194};function n(e){var a=r(e);return t(a)}function r(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=208},215:function(e,a,t){"use strict";a.a="/img/user.svg"},218:function(e,a,t){"use strict";a.a="/img/divider-5.svg"},219:function(e,a,t){"use strict";var s=t(0),n=t(48);a.a=()=>{const[e,a]=Object(s.useState)({workshops:[],isEmpty:!1,isLoaded:!1});return Object(s.useEffect)(()=>{n.a.collection("event").doc("info").collection("workshops").get().then(e=>{a({workshops:e.docs.map(e=>e.data()),isEmpty:e.empty,isLoaded:!0})})},[]),e}},220:function(e,a,t){"use strict";a.a="/img/deco-blob-13.svg"},224:function(e,a,t){"use strict";var s=t(0),n=t.n(s);a.a=()=>n.a.createElement("div",null,n.a.createElement("div",{className:"row d-flex flex-column align-items-center justify-content-center"},n.a.createElement("img",{src:"/img/saas-2.svg",alt:"No Workshops",style:{width:"35%"},className:"mb-5"}),n.a.createElement("h3",{className:"h3"},"No Workshops Scheduled"),n.a.createElement("p",{className:"lead text-center"},"We currently don't have any workshops scheduled for this year's event. We're always planning, so check again soon to see if there are any workshops that pique your interest!")))},266:function(e,a,t){"use strict";var s=t(1),n=t(4),r=t(8),l=t.n(r),c=t(0),m=t.n(c),o=(t(202),t(57)),i=t(10),d=t(211),u=t(213),h=t(56),g={variant:void 0,active:!1,disabled:!1},p=m.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.active,o=e.disabled,d=e.className,g=e.variant,p=e.action,b=e.as,v=e.eventKey,y=e.onClick,j=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(i.a)(t,"list-group-item");var E=Object(c.useCallback)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();y&&y(e)}),[o,y]);return m.a.createElement(u.a,Object(s.a)({ref:a},j,{eventKey:Object(h.b)(v||null,j.href),as:b||(p?j.href?"a":"button":"div"),onClick:E,className:l()(d,t,r&&"active",o&&"disabled",g&&t+"-"+g,p&&t+"-action")}))}));p.defaultProps=g,p.displayName="ListGroupItem";var b=p,v={variant:void 0,horizontal:void 0},y=m.a.forwardRef((function(e,a){var t,r=Object(o.a)(e,{activeKey:"onSelect"}),c=r.className,u=r.bsPrefix,h=r.variant,g=r.horizontal,p=r.as,b=void 0===p?"div":p,v=Object(n.a)(r,["className","bsPrefix","variant","horizontal","as"]),y=Object(i.a)(u,"list-group");return t=g?!0===g?"horizontal":"horizontal-"+g:null,m.a.createElement(d.a,Object(s.a)({ref:a},v,{as:b,className:l()(c,y,h&&y+"-"+h,t&&y+"-"+t)}))}));y.defaultProps=v,y.displayName="ListGroup",y.Item=b;a.a=y},278:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s);var r={title:"Attend",image:"/img/phyff-poster-2-bw.png",color:"bg-primary",dividerColor:"bg-primary-3",caption:"The Fest is a great opportunity to make connections or just chat with local filmmakers and similarly passionate students.",decorationStyle:1,decoColors:{primary:"bg-primary-alt",secondary:"bg-primary"}},l=t(58),c=t(53),m=t(43),o=t(44),i=t(45),d=t(47),u=t.n(d),h=t(9),g=t(215),p=t(12),b=t(220),v=t(49),y=t(50);var j=()=>{const{date:e,address:a}=Object(y.a)();return n.a.createElement("section",{className:"bg-primary has-divider"},n.a.createElement(m.a,null,n.a.createElement(o.a,{className:"justify-content-center"},n.a.createElement(i.a,null,n.a.createElement(o.a,{className:"justify-content-center layer-2"},n.a.createElement(i.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"100"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(h.a,{className:"icon icon-lg bg-primary-2",src:g.a,alt:"user"})),n.a.createElement("h4",null,"Who?"),n.a.createElement("p",null,"You! The Fest is free and open to all high-school students. Whether you make films or just like watching them we'd love to see you at the Fest. Submissions are open to high schoolers, 14 to 19 years of age."))),n.a.createElement(i.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"200"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(h.a,{className:"icon icon-lg bg-primary-2",src:"/img/question-circle.svg",alt:"question"})),n.a.createElement("h4",null,"What?"),n.a.createElement("p",null,"The Fest features a keynote speaker, workshops with local professionals, and screenings/awards for the best submissions! The Fest is a great opportunity to make connections or just chat with local filmmakers and similarly passionate students."))),n.a.createElement(i.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"100"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(h.a,{className:"icon icon-lg bg-primary-2",src:"/img/clock.svg",alt:"clock"})),n.a.createElement("h4",null,"When?"),n.a.createElement("p",null,"The Fest will take place on ",n.a.createElement("strong",null,u()(null==e?void 0:e.toDate()).format("dddd, MMMM Do YYYY")),"  from ",n.a.createElement("strong",null,"12:00 pm to 6:00 pm."),"  You can arrive and leave at any time. We recommend staying for the entire event; there are workshops and screenings scheduled throughout the day!"))),n.a.createElement(i.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"200"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(h.a,{className:"icon icon-lg bg-primary-2",src:"/img/earth.svg",alt:"earth"})),n.a.createElement("h4",null,"Where?"),n.a.createElement("p",null,"The Fest is hosted on the campus of ",n.a.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query="+a},"Germantown Friends School"),", in the Sharpless building. There will be signs guiding you around campus on the day of the event.")))),n.a.createElement("div",null,n.a.createElement("div",{className:"decoration top left scale-2 d-none d-md-block"},n.a.createElement(h.a,{className:"bg-primary-3",src:b.a,alt:"deco-blob-13 decoration"})),n.a.createElement("div",{className:"decoration bottom right scale-2 d-none d-md-block"},n.a.createElement(h.a,{className:"bg-primary-alt",src:"/img/deco-blob-2.svg",alt:"deco-blob-13 decoration"})),n.a.createElement("div",{className:"decoration bottom right scale-2 d-none d-md-block"},n.a.createElement(h.a,{className:"bg-primary-2",src:p.a,alt:"deco-dots-3 decoration"})))))),n.a.createElement("div",{className:"divider"},n.a.createElement(h.a,{className:"bg-white flip-x",src:v.a,alt:"divider graphic"})))},E=t(218),f=t(54),N=t(20);var k=()=>{const{signup:e}=Object(y.a)();return n.a.createElement("section",{className:"bg-primary-3 has-divider"},n.a.createElement(m.a,null,n.a.createElement(o.a,null,n.a.createElement(i.a,{md:12},n.a.createElement(o.a,{className:"justify-content-around o-hidden o-lg-visible mb-5 text-light"},n.a.createElement(i.a,{xl:4,md:4,className:"mb-4 mb-md-0 layer-2","data-aos":"fade"},n.a.createElement("h3",{className:"h1 mb-4"},"Sign Up"),n.a.createElement("p",{className:"lead"},"Sign up for the Philadelphia Youth Film Festival using the attached registration form. You can only fill out this form once."),n.a.createElement("a",{href:e,className:"lead hover-arrow"},"Open in Google Forms")),n.a.createElement(i.a,{xl:6,md:6,className:"mb-lg-n7 layer-3","data-aos":"fade-left"},e?n.a.createElement("iframe",{title:"Sign Up Form",src:e,className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body"}):n.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},n.a.createElement(N.a,{className:"ml-auto mr-auto"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"decoration top left scale-1 d-none mx-5 my-5 d-md-block"},n.a.createElement(h.a,{className:"bg-primary",src:f.a,alt:"deco-blob-1 decoration"})),n.a.createElement("div",{className:"decoration bottom right scale-3 d-none d-md-block"},n.a.createElement(h.a,{className:"bg-primary",src:"/img/deco-dots-5.svg",alt:"deco-dots-5 decoration"}))))))),n.a.createElement("div",{className:"divider"},n.a.createElement(h.a,{className:"bg-primary flip-x",src:E.a,alt:"divider graphic"})))},w=t(266),x=t(2),z=t.n(x),O=t(206);const F=({workshop:e,delay:a})=>n.a.createElement(w.a.Item,{"data-aos":"fade-up","data-aos-delay":a},n.a.createElement(o.a,{className:"no-gutters align-items-center py-3 text-dark"},n.a.createElement(i.a,{xl:7,md:6},n.a.createElement("h5",{className:"mb-0"},e.title)),n.a.createElement(i.a,{md:!0},n.a.createElement("span",null,u()(new Date(e.time)).format("h:mm A"))),n.a.createElement(i.a,{md:!0},n.a.createElement("div",{className:"d-flex align-items-center mt-2 mt-md-0"},n.a.createElement("img",{src:e.speaker.image,alt:e.speaker.name,className:"avatar avatar-sm mr-2"}),n.a.createElement("span",{className:"h6 mb-0"},e.speaker.name)))));F.propTypes={workshop:O.a,delay:z.a.number};var S=F,T=t(196),C=t(224),D=t(219);var L=()=>{const{workshops:e,isLoaded:a}=Object(D.a)(),t=a?n.a.createElement(C.a,null):n.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},n.a.createElement(N.a,{className:"ml-auto mr-auto"}));return n.a.createElement("section",{id:"schedule"},n.a.createElement(m.a,null,n.a.createElement(o.a,{className:"align-items-center mb-4 layer-2"},n.a.createElement(i.a,null,n.a.createElement("h2",{className:"h1 mb-sm-0"},"Schedule"),n.a.createElement("p",{className:"lead"},"Workshops with film industry professionals are scheduled throughout the day, covering a wide variety of common and niche filmmaking topics. Whether you want to learn about how films are made or are interested in making your own, we'd love to see you at our workshops."))),n.a.createElement("div",{className:"card card-body layer-2 "+(0===e.length&&"rotate-right shadow-3d")},e.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{className:"no-gutters d-none d-md-flex bg-white py-3"},n.a.createElement(i.a,{xl:7,md:6},n.a.createElement("span",{className:"h6 mb-0 text-muted"},"Workshop")),n.a.createElement(i.a,null,n.a.createElement("span",{className:"h6 mb-0 text-muted"},"Time")),n.a.createElement(i.a,null,n.a.createElement("span",{className:"h6 mb-0 text-muted"},"Presenter"))),n.a.createElement(w.a,{variant:"flush"},e.sort((e,a)=>e.time-a.time).map((e,a)=>n.a.createElement(S,{workshop:e,delay:50*a,key:e.title})))):t),n.a.createElement("div",{className:"decoration bottom left scale-2 d-none d-md-block"},n.a.createElement(h.a,{className:"bg-primary-2",src:T.a,alt:"deco-dots-3 decoration"}))))};a.default=Object(c.a)(()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{data:r}),n.a.createElement(k,null),n.a.createElement(j,null),n.a.createElement(L,null)))},48:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var s=t(197),n=t.n(s);t(203),t(204),t(201);n.a.initializeApp({apiKey:"AIzaSyBQ45K6tmg-PUiQnXcaOPbDAfzTmeVDMbA",authDomain:"phyff-dea73.firebaseapp.com",databaseURL:"https://phyff-dea73.firebaseio.com",projectId:"phyff-dea73",storageBucket:"phyff-dea73.appspot.com",messagingSenderId:"504901127886",appId:"1:504901127886:web:d462db15b3072bd1ca8a9f",measurementId:"G-L593Z52SFT"}),n.a.analytics();const r=n.a.firestore();n.a.storage()},49:function(e,a,t){"use strict";a.a="/img/divider-3.svg"},50:function(e,a,t){"use strict";var s=t(0),n=t(48);a.a=()=>{const[e,a]=Object(s.useState)({});return Object(s.useEffect)(()=>{n.a.collection("event").doc("info").get().then(e=>{e.exists&&a(e.data())})},[]),e}},51:function(e,a,t){"use strict";a.a="/img/deco-lines-5.svg"},52:function(e,a,t){"use strict";a.a=e=>[{name:"address",icon:"/img/marker-1.svg",text:null!=e?e:"",href:"https://www.google.com/maps/search/?api=1&query="+e},{name:"email",icon:"/img/mail.svg",text:"phillyyouthfilmfest@gmail.com",href:"mailto:phillyyouthfilmfest@gmail.com"},{name:"instagram",icon:"/img/instagram.svg",text:"@phyff21",href:"https://www.instagram.com/phyff21/"},{name:"facebook",icon:"/img/facebook.svg",text:"@phyff19",href:"https://www.facebook.com/phyff19/"},{name:"youtube",icon:"/img/youtube.svg",text:"Philly Youth Film Fest",href:"https://www.youtube.com/channel/UCNNgWQxyh9mVcPV0ZSk0w1Q"}]},53:function(e,a,t){"use strict";var s=t(0),n=t.n(s),r=t(43),l=t(44),c=t(45),m=t(46),o=t(21),i=t(11),d=t(51),u=t(52),h=t(9);var g=[[{name:"Winners",to:"/winners"},{name:"About",to:"/about"}],[{name:"Submit",to:"/submit"},{name:"Attend",to:"/attend"}]],p=t(50);var b=()=>{const{address:e,submissionDeadline:a}=Object(p.a)(),t=Date.now()<(null==a?void 0:a.toDate().getTime());return n.a.createElement("footer",{className:"pb-4 bg-primary-3 text-light layer-4",id:"footer"},n.a.createElement(r.a,null,n.a.createElement(l.a,{className:"mb-5"},n.a.createElement(c.a,null,n.a.createElement("div",{className:"card card-body border-0 o-hidden mb-0 bg-primary text-light"},n.a.createElement("div",{className:"position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"},n.a.createElement("div",{className:"h3 text-center mb-md-0"},t?"Submit to PHYFF Today!":"Attend the Festival!"),n.a.createElement(o.LinkContainer,{to:t?"/submit":"/attend"},n.a.createElement(m.a,{variant:"white",size:"lg"},t?"Submit":"Attend"))),n.a.createElement("div",{className:"decoration middle-y right scale-2 layer-0"},n.a.createElement(h.a,{src:d.a,className:"bg-primary-2"})),n.a.createElement("div",{className:"decoration bottom right layer-0"},n.a.createElement(h.a,{src:"/img/deco-lines-6.svg",className:"bg-primary-2-alt"}))))),n.a.createElement(l.a,{className:"mb-5"},n.a.createElement(c.a,{className:"col-6 col-lg-3 col-xl-2"},n.a.createElement("h5",null,"Navigate"),n.a.createElement("ul",{className:"nav flex-column"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"/",className:"nav-link"},"Home")),g.map(e=>n.a.createElement("div",{key:e[0].name},n.a.createElement("span",{className:"footer-divider"}),e.map(e=>n.a.createElement("li",{className:"nav-item",key:e.name},n.a.createElement(i.Link,{to:e.to,className:"nav-link"},e.name))))))),n.a.createElement(c.a,{className:"col-6 col-lg"},n.a.createElement("h5",null,"Contact"),n.a.createElement("ul",{className:"list-unstyled"},Object(u.a)(e).slice(0,3).map(({icon:e,text:a,href:t})=>n.a.createElement("li",{className:"mb-2 d-flex",key:t},n.a.createElement(h.a,{src:e,className:"icon"}),n.a.createElement("div",{className:"ml-3 w-100"},n.a.createElement("a",{href:t,className:"w-100",style:{wordWrap:"break-word",wordBreak:"break-all"}},a)))))))))},v=t(252),y=t(281),j=t(3),E=t(13);var f=({delay:e})=>{const[a,t]=Object(s.useState)(window.scrollY);return Object(s.useEffect)(()=>{const a=((e,a,t)=>{let s=(new Date).getTime();return(...n)=>{const r=(new Date).getTime();(r-s>=a||t(...n))&&(s=r,e(...n))}})(()=>{t(window.scrollY)},null!=e?e:10,()=>window.scrollY<=0);return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}}),a};var N=()=>{var e;const a=f({delay:50}),t=null!==(e={"/":{classNames:"navbar-transparent",overlay:!0,isDark:!0}}[Object(j.l)().pathname])&&void 0!==e?e:{classNames:"navbar-transparent",overlay:!0,isDark:!0};return n.a.createElement(y.a,{variant:t.isDark?"dark":"light",fixed:"top",expand:"lg",className:"px-5 "+(a>0?"navbar-background":"navbar-transparent")},n.a.createElement(y.a.Brand,{className:"fade-page"},n.a.createElement(i.Link,{to:"/"},n.a.createElement("img",{alt:"Phyff",style:{height:"2em"},src:(t.isDark,E.a)}))),n.a.createElement(y.a.Toggle,null,n.a.createElement(h.a,{className:"icon",src:"/img/menu.svg",alt:"menu interface icon"})),n.a.createElement(y.a.Collapse,{className:"justify-content-end",id:"basic-navbar-collapse"},n.a.createElement(v.a,null,g[0].map(({to:e,name:a})=>n.a.createElement(v.a.Link,{as:i.Link,to:e,key:a},a))),n.a.createElement(v.a,{className:"ml-auto"},g[1].map(({to:e,name:a},t)=>n.a.createElement(v.a.Link,{as:i.Link,to:e,key:a},n.a.createElement(m.a,{className:"btn-"+["primary-2","primary"][t%2]},a))))))};a.a=e=>a=>n.a.createElement(n.a.Fragment,null,n.a.createElement(N,null),n.a.createElement(e,a),n.a.createElement(b,null))},54:function(e,a,t){"use strict";a.a="/img/deco-blob-1.svg"},58:function(e,a,t){"use strict";var s=t(0),n=t.n(s),r=t(43),l=t(44),c=t(45),m=t(49),o=t(12),i=t(54),d=t(14),u=t(9),h=t(2),g=t.n(h),p=g.a.shape({title:g.a.string.isRequired,caption:g.a.string,image:g.a.string,color:g.a.string,dividerColor:g.a.string,decorationStyle:g.a.number,decoColors:g.a.shape({primary:g.a.string,secondary:g.a.string})});const b=({data:e})=>{var a,t,s,r;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"decoration middle-y right d-none d-xl-block","data-jarallax-element":"50 50"},n.a.createElement(u.a,{src:i.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),n.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"100"},n.a.createElement(u.a,{src:o.a,className:null!==(s=null===(r=e.decoColors)||void 0===r?void 0:r.secondary)&&void 0!==s?s:"bg-primary-2"})))};b.propTypes={data:p};const v=({data:e})=>{var a,t,s,r;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"50 50"},n.a.createElement(u.a,{src:d.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),n.a.createElement("div",{className:"decoration middle-y left scale-3 d-none d-xl-block","data-jarallax-element":"100"},n.a.createElement(u.a,{src:"/img/deco-dots-3.svg",className:null!==(s=null===(r=e.decoColors)||void 0===r?void 0:r.secondary)&&void 0!==s?s:"bg-primary-2"})))};v.propTypes={data:p};const y=({data:e})=>{var a,t,s,o;return n.a.createElement("section",{className:(null!==(a=e.color)&&void 0!==a?a:"bg-primary-2")+" header-inner o-hidden has-divider"},n.a.createElement("img",{src:null!==(t=e.image)&&void 0!==t?t:"/img/event-1.jpg",alt:e.title,className:"bg-image blend-mode-multiply"}),n.a.createElement(r.a,{className:"layer-2"},n.a.createElement(l.a,{className:"py-6 text-center justify-content-center align-items-center layer-2 text-light"},n.a.createElement(c.a,{lg:10,xl:8},n.a.createElement("h1",{className:"display-4"},e.title),n.a.createElement("p",{className:"lead mb-0"},e.caption)))),n.a.createElement("div",{className:"decoration-wrapper"},[n.a.createElement(b,{data:e}),n.a.createElement(v,{data:e})][(null!==(s=e.decorationStyle)&&void 0!==s?s:0)%2]),n.a.createElement("div",{className:"divider layer-1"},n.a.createElement(u.a,{src:m.a,className:null!==(o=e.dividerColor)&&void 0!==o?o:"bg-white"})))};y.propTypes={data:p};a.a=y}}]);