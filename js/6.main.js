(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{210:function(e,a,t){"use strict";a.a="/img/deco-dots-1.svg"},217:function(e,a,t){"use strict";a.a="/img/user.svg"},218:function(e,a,t){"use strict";var s=t(222);a.a=e=>Object(s.a)(e,"workshops")},222:function(e,a,t){"use strict";var s=t(0),n=t(51),l=t(52);a.a=(e,a)=>{const{date:t}=Object(l.a)(),r=null==t?void 0:t.toDate().getFullYear(),[c,m]=Object(s.useState)({[a]:[],isEmpty:!1,isLoaded:!1});return Object(s.useEffect)(()=>{n.a.collection("event").doc(a).collection(""+(null!=e?e:r)).get().then(async e=>{var t;const s=await Promise.all(e.docs.map(e=>e.data()).map(e=>{var a,t;return{...e,time:null===(a=e.time)||void 0===a?void 0:a.toDate().getTime(),endTime:null===(t=e.endTime)||void 0===t?void 0:t.toDate().getTime()}}).map(async e=>{var a;return{...e,speaker:e.speaker&&(null===(a=await n.a.collection("speakers").doc(e.speaker).get())||void 0===a?void 0:a.data())}})),l=null===(t=await n.a.collection("event").doc(a).get())||void 0===t?void 0:t.data();m({...l,[a]:s,isEmpty:e.empty,isLoaded:!0})})},[e,r]),c}},225:function(e,a,t){"use strict";var s=t(0),n=t.n(s),l=t(34),r=t(35),c=t(290),m=t(2),i=t.n(m),o=t(49),d=t(282),u=t(50),p=t.n(u),g=t(73),b=t(217),h=t(9);const v=({entry:e,delay:a,displayTime:t})=>{var m,i;const[u,g]=Object(s.useState)(!1),v=e.allDay?n.a.createElement("span",{className:"badge badge-pill badge-success"},"Both Times"):n.a.createElement("span",null,e.time?`${p()(new Date(e.time)).format("h:mm A")} - ${p()(new Date(e.endTime)).format("h:mm A")}`:"TBD");return n.a.createElement(c.a.Item,{"data-aos":"fade-up","data-aos-delay":null!=a?a:0},n.a.createElement(l.a,{className:"no-gutters align-items-center py-3 text-dark"},n.a.createElement(r.a,{xl:6,md:5},n.a.createElement("h5",{className:"mb-0"},e.title)),t&&n.a.createElement(r.a,{md:!0},v),n.a.createElement(r.a,{md:!0},e.speaker&&n.a.createElement("div",{className:"d-flex align-items-center mt-2 mt-md-0"},e.speaker.image?n.a.createElement("div",{style:{backgroundImage:`url(${e.speaker.image})`,backgroundSize:"cover",backgroundPosition:"center center"},className:"avatar avatar-sm mr-3"}):n.a.createElement(h.a,{src:b.a,alt:e.speaker.name,className:"avatar avatar-sm icon bg-primary mr-3"}),n.a.createElement("span",{className:"h6 mb-0"},e.speaker.name))),n.a.createElement(r.a,{className:"d-none d-md-block"},(e.description||e.speaker&&e.speaker.bio)&&n.a.createElement(o.a,{onClick:()=>g(!u),className:"border-0 bg-transparent btn-light","aria-controls":"entry-description","aria-expanded":u},n.a.createElement(h.a,{className:"icon bg-dark",src:"/img/control.svg",alt:"Control",style:{transform:`rotate(${u?.5:.25}turn)`,transition:"0.2s"}})))),(e.description||e.speaker&&e.speaker.bio)&&n.a.createElement(d.a,{in:u},n.a.createElement("div",{id:"entry-description"},n.a.createElement(l.a,null,n.a.createElement(r.a,null,null!==(m=e.description)&&void 0!==m?m:e.speaker&&e.speaker.bio)),n.a.createElement(l.a,null,n.a.createElement(r.a,{className:"mt-3 text-small"},e.speaker&&(null!==(i=e.speaker.affiliation)&&void 0!==i?i:e.speaker.contact))))))};v.propTypes={entry:g.a,delay:i.a.number,displayTime:i.a.bool};var y=v;const E=({entries:e,displayTime:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{className:"no-gutters d-none d-md-flex bg-white py-3"},n.a.createElement(r.a,{xl:6,md:5},n.a.createElement("span",{className:"h6 mb-0 text-muted"},"Workshop")),a&&n.a.createElement(r.a,null,n.a.createElement("span",{className:"h6 mb-0 text-muted"},"Time")),n.a.createElement(r.a,null,n.a.createElement("span",{className:"h6 mb-0 text-muted"},"Presenter")),n.a.createElement(r.a,{className:"d-none d-md-block"})),n.a.createElement(c.a,{variant:"flush"},e.sort((e,a)=>{var t,s;return(null!==(t=e.time)&&void 0!==t?t:Number.MAX_VALUE)-(null!==(s=a.time)&&void 0!==s?s:Number.MAX_VALUE)}).map(e=>n.a.createElement(y,{entry:e,key:e.title,displayTime:a}))));E.propTypes={entries:i.a.arrayOf(g.a),displayTime:i.a.bool};a.a=E},226:function(e,a,t){var s={"./af":74,"./af.js":74,"./ar":75,"./ar-dz":76,"./ar-dz.js":76,"./ar-kw":77,"./ar-kw.js":77,"./ar-ly":78,"./ar-ly.js":78,"./ar-ma":79,"./ar-ma.js":79,"./ar-sa":80,"./ar-sa.js":80,"./ar-tn":81,"./ar-tn.js":81,"./ar.js":75,"./az":82,"./az.js":82,"./be":83,"./be.js":83,"./bg":84,"./bg.js":84,"./bm":85,"./bm.js":85,"./bn":86,"./bn-bd":87,"./bn-bd.js":87,"./bn.js":86,"./bo":88,"./bo.js":88,"./br":89,"./br.js":89,"./bs":90,"./bs.js":90,"./ca":91,"./ca.js":91,"./cs":92,"./cs.js":92,"./cv":93,"./cv.js":93,"./cy":94,"./cy.js":94,"./da":95,"./da.js":95,"./de":96,"./de-at":97,"./de-at.js":97,"./de-ch":98,"./de-ch.js":98,"./de.js":96,"./dv":99,"./dv.js":99,"./el":100,"./el.js":100,"./en-au":101,"./en-au.js":101,"./en-ca":102,"./en-ca.js":102,"./en-gb":103,"./en-gb.js":103,"./en-ie":104,"./en-ie.js":104,"./en-il":105,"./en-il.js":105,"./en-in":106,"./en-in.js":106,"./en-nz":107,"./en-nz.js":107,"./en-sg":108,"./en-sg.js":108,"./eo":109,"./eo.js":109,"./es":110,"./es-do":111,"./es-do.js":111,"./es-mx":112,"./es-mx.js":112,"./es-us":113,"./es-us.js":113,"./es.js":110,"./et":114,"./et.js":114,"./eu":115,"./eu.js":115,"./fa":116,"./fa.js":116,"./fi":117,"./fi.js":117,"./fil":118,"./fil.js":118,"./fo":119,"./fo.js":119,"./fr":120,"./fr-ca":121,"./fr-ca.js":121,"./fr-ch":122,"./fr-ch.js":122,"./fr.js":120,"./fy":123,"./fy.js":123,"./ga":124,"./ga.js":124,"./gd":125,"./gd.js":125,"./gl":126,"./gl.js":126,"./gom-deva":127,"./gom-deva.js":127,"./gom-latn":128,"./gom-latn.js":128,"./gu":129,"./gu.js":129,"./he":130,"./he.js":130,"./hi":131,"./hi.js":131,"./hr":132,"./hr.js":132,"./hu":133,"./hu.js":133,"./hy-am":134,"./hy-am.js":134,"./id":135,"./id.js":135,"./is":136,"./is.js":136,"./it":137,"./it-ch":138,"./it-ch.js":138,"./it.js":137,"./ja":139,"./ja.js":139,"./jv":140,"./jv.js":140,"./ka":141,"./ka.js":141,"./kk":142,"./kk.js":142,"./km":143,"./km.js":143,"./kn":144,"./kn.js":144,"./ko":145,"./ko.js":145,"./ku":146,"./ku.js":146,"./ky":147,"./ky.js":147,"./lb":148,"./lb.js":148,"./lo":149,"./lo.js":149,"./lt":150,"./lt.js":150,"./lv":151,"./lv.js":151,"./me":152,"./me.js":152,"./mi":153,"./mi.js":153,"./mk":154,"./mk.js":154,"./ml":155,"./ml.js":155,"./mn":156,"./mn.js":156,"./mr":157,"./mr.js":157,"./ms":158,"./ms-my":159,"./ms-my.js":159,"./ms.js":158,"./mt":160,"./mt.js":160,"./my":161,"./my.js":161,"./nb":162,"./nb.js":162,"./ne":163,"./ne.js":163,"./nl":164,"./nl-be":165,"./nl-be.js":165,"./nl.js":164,"./nn":166,"./nn.js":166,"./oc-lnc":167,"./oc-lnc.js":167,"./pa-in":168,"./pa-in.js":168,"./pl":169,"./pl.js":169,"./pt":170,"./pt-br":171,"./pt-br.js":171,"./pt.js":170,"./ro":172,"./ro.js":172,"./ru":173,"./ru.js":173,"./sd":174,"./sd.js":174,"./se":175,"./se.js":175,"./si":176,"./si.js":176,"./sk":177,"./sk.js":177,"./sl":178,"./sl.js":178,"./sq":179,"./sq.js":179,"./sr":180,"./sr-cyrl":181,"./sr-cyrl.js":181,"./sr.js":180,"./ss":182,"./ss.js":182,"./sv":183,"./sv.js":183,"./sw":184,"./sw.js":184,"./ta":185,"./ta.js":185,"./te":186,"./te.js":186,"./tet":187,"./tet.js":187,"./tg":188,"./tg.js":188,"./th":189,"./th.js":189,"./tk":190,"./tk.js":190,"./tl-ph":191,"./tl-ph.js":191,"./tlh":192,"./tlh.js":192,"./tr":193,"./tr.js":193,"./tzl":194,"./tzl.js":194,"./tzm":195,"./tzm-latn":196,"./tzm-latn.js":196,"./tzm.js":195,"./ug-cn":197,"./ug-cn.js":197,"./uk":198,"./uk.js":198,"./ur":199,"./ur.js":199,"./uz":200,"./uz-latn":201,"./uz-latn.js":201,"./uz.js":200,"./vi":202,"./vi.js":202,"./x-pseudo":203,"./x-pseudo.js":203,"./yo":204,"./yo.js":204,"./zh-cn":205,"./zh-cn.js":205,"./zh-hk":206,"./zh-hk.js":206,"./zh-mo":207,"./zh-mo.js":207,"./zh-tw":208,"./zh-tw.js":208};function n(e){var a=l(e);return t(a)}function l(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=l,e.exports=n,n.id=226},242:function(e,a,t){"use strict";a.a="/img/divider-5.svg"},243:function(e,a,t){"use strict";a.a="/img/deco-blob-13.svg"},250:function(e,a,t){"use strict";var s=t(0),n=t.n(s),l=t(218),r=t(23),c=t(225),m=t(52);a.a=()=>{const{date:e}=Object(m.a)(),a=null==e?void 0:e.toDate().getFullYear(),{workshops:t,isLoaded:s}=Object(l.a)(a-1);return n.a.createElement("div",null,n.a.createElement("div",{className:"row d-flex flex-column align-items-center justify-content-center mx-0"},n.a.createElement("img",{src:"/img/saas-2.svg",alt:"No Workshops",style:{width:"35%"},className:"mb-5"}),n.a.createElement("h3",{className:"h3"},"Workshops To Be Announced"),n.a.createElement("p",{className:"lead text-center mx-3"},"We're working hard to schedule and confirm workshops for this year's event. Check out last year's schedule:"),s?n.a.createElement("div",{className:"w-100 mx-0 border-0 p-0"},n.a.createElement(c.a,{entries:t})):n.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},n.a.createElement(r.a,{className:"ml-auto mr-auto"}))))}},290:function(e,a,t){"use strict";var s=t(1),n=t(4),l=t(8),r=t.n(l),c=t(0),m=t.n(c),i=(t(216),t(63)),o=t(10),d=t(230),u=t(233),p=t(66),g={variant:void 0,active:!1,disabled:!1},b=m.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.active,i=e.disabled,d=e.className,g=e.variant,b=e.action,h=e.as,v=e.eventKey,y=e.onClick,E=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(o.a)(t,"list-group-item");var f=Object(c.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();y&&y(e)}),[i,y]);return m.a.createElement(u.a,Object(s.a)({ref:a},E,{eventKey:Object(p.b)(v||null,E.href),as:h||(b?E.href?"a":"button":"div"),onClick:f,className:r()(d,t,l&&"active",i&&"disabled",g&&t+"-"+g,b&&t+"-action")}))}));b.defaultProps=g,b.displayName="ListGroupItem";var h=b,v={variant:void 0,horizontal:void 0},y=m.a.forwardRef((function(e,a){var t,l=Object(i.a)(e,{activeKey:"onSelect"}),c=l.className,u=l.bsPrefix,p=l.variant,g=l.horizontal,b=l.as,h=void 0===b?"div":b,v=Object(n.a)(l,["className","bsPrefix","variant","horizontal","as"]),y=Object(o.a)(u,"list-group");return t=g?!0===g?"horizontal":"horizontal-"+g:null,m.a.createElement(d.a,Object(s.a)({ref:a},v,{as:h,className:r()(c,y,p&&y+"-"+p,t&&y+"-"+t)}))}));y.defaultProps=v,y.displayName="ListGroup",y.Item=h;a.a=y},304:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s);var l={title:"Attend",image:"/img/phyff-poster-2-bw.png",color:"bg-primary",dividerColor:"bg-primary-3",caption:"The 2022 Festival will take place on Saturday, February 26 on the campus of Germantown Friends School. The Fest is a great opportunity to make connections or just chat with local filmmakers and similarly passionate students.",decorationStyle:1,decoColors:{primary:"bg-primary-alt",secondary:"bg-primary"}},r=t(58),c=t(56),m=t(48),i=t(34),o=t(35),d=t(50),u=t.n(d),p=t(9),g=t(217),b=t(12),h=t(243),v=t(53),y=t(52);var E=()=>{const{date:e,address:a}=Object(y.a)();return n.a.createElement("section",{className:"bg-primary has-divider"},n.a.createElement(m.a,null,n.a.createElement(i.a,{className:"justify-content-center"},n.a.createElement(o.a,null,n.a.createElement(i.a,{className:"justify-content-center layer-2"},n.a.createElement(o.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"100"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(p.a,{className:"icon icon-lg bg-primary-2",src:g.a,alt:"user"})),n.a.createElement("h4",null,"Who?"),n.a.createElement("p",null,"You! The Fest is free and open to all high-school students. Whether you make films or just like watching them we'd love to see you at the Fest. Submissions are open to high schoolers, 14 to 19 years of age."))),n.a.createElement(o.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"200"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(p.a,{className:"icon icon-lg bg-primary-2",src:"/img/question-circle.svg",alt:"question"})),n.a.createElement("h4",null,"What?"),n.a.createElement("p",null,"The Fest features a keynote speaker, workshops with industry professionals, and screenings/awards for the best submissions! The Fest is a great opportunity to make connections or just chat with local filmmakers and similarly passionate students."))),n.a.createElement(o.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"100"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(p.a,{className:"icon icon-lg bg-primary-2",src:"/img/clock.svg",alt:"clock"})),n.a.createElement("h4",null,"When?"),n.a.createElement("p",null,"The Fest will take place on ",n.a.createElement("strong",null,u()(null==e?void 0:e.toDate()).format("dddd, MMMM Do YYYY")),"  from ",n.a.createElement("strong",null,"11:00 am to 5:00 pm EST"),"  (Philadelphia). You can arrive and leave at any time. We recommend staying for the entire event; there are workshops and screenings scheduled throughout the day!"))),n.a.createElement(o.a,{md:5,sm:8,xs:10,className:"mb-3"},n.a.createElement("div",{className:"card card-icon-3 card-body h-100 justify-content-between","data-aos":"fade-up","data-aos-delay":"200"},n.a.createElement("div",{className:"icon-round mb-3 mb-md-4 bg-primary-2"},n.a.createElement(p.a,{className:"icon icon-lg bg-primary-2",src:"/img/earth.svg",alt:"earth"})),n.a.createElement("h4",null,n.a.createElement(p.a,{className:"icon icon-md bg-primary",externalClassnames:"d-inline-block",src:"/img/warning-2.svg",alt:"earth"}),"Where?"),n.a.createElement("p",null,"The Fest is hosted by ",n.a.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query="+a,target:"_blank"},"Germantown Friends School, located in Philadelphia, Pennsylvania"),". Due to COVID restrictions, this year's event will be all virtual.")))),n.a.createElement("div",null,n.a.createElement("div",{className:"decoration top left scale-2 d-none d-md-block"},n.a.createElement(p.a,{className:"bg-primary-3",src:h.a,alt:"deco-blob-13 decoration"})),n.a.createElement("div",{className:"decoration bottom right scale-2 d-none d-md-block"},n.a.createElement(p.a,{className:"bg-primary-alt",src:"/img/deco-blob-2.svg",alt:"deco-blob-13 decoration"})),n.a.createElement("div",{className:"decoration bottom right scale-2 d-none d-md-block"},n.a.createElement(p.a,{className:"bg-primary-2",src:b.a,alt:"deco-dots-3 decoration"})))))),n.a.createElement("div",{className:"divider"},n.a.createElement(p.a,{className:"bg-white flip-x",src:v.a,alt:"divider graphic"})))},f=t(242),j=t(57),N=t(23);var k=()=>n.a.createElement("div",{className:"image-collage"},n.a.createElement("a",{"data-fancybox":"Collage Gallery",className:"d-none d-lg-block"},n.a.createElement("div",{"data-jarallax-element":"0 12"},n.a.createElement("img",{src:"/img/sign-in.jpg",alt:"Description",className:"rounded","data-aos":"fade-right"}))),n.a.createElement("a",{"data-fancybox":"Collage Gallery"},n.a.createElement("div",{"data-jarallax-element":"0 6"},n.a.createElement("img",{src:"/img/sign-in2.jpg",alt:"Description",className:"rounded","data-aos":"fade-up"}))),n.a.createElement("a",{"data-fancybox":"Collage Gallery",className:"d-none d-lg-block"},n.a.createElement("div",{"data-jarallax-element":"0 -12"},n.a.createElement("img",{src:"/img/phyff-poster-4.png",alt:"Description",className:"rounded","data-aos":"fade-left"}))));var w=()=>{const{signup:e,isLoaded:a}=Object(y.a)();return n.a.createElement("section",{className:"bg-primary-3 has-divider"},n.a.createElement(m.a,null,n.a.createElement(i.a,null,n.a.createElement(o.a,{md:12},n.a.createElement(i.a,{className:"justify-content-around o-hidden o-lg-visible mb-5 text-light"},n.a.createElement(o.a,{xl:4,md:4,className:"mb-4 mb-md-0 layer-2","data-aos":"fade"},n.a.createElement("h3",{className:"h1 mb-4"},"Sign Up"),n.a.createElement("p",{className:"lead"},"Sign up for the Philadelphia Youth Film Festival using the attached registration form. You can only fill out this form once."),a&&(e?n.a.createElement("a",{href:e,className:"lead hover-arrow"},"Open in Google Forms"):n.a.createElement("p",{className:"lead font-weight-bold"},"There currently isn't a sign-up form available. Check back soon!"))),n.a.createElement(o.a,{xl:6,md:6,className:"mb-lg-n7 layer-3","data-aos":"fade-left"},a?e?n.a.createElement("iframe",{title:"Sign Up Form",src:e,className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body"}):n.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0"},n.a.createElement(k,null)):n.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},n.a.createElement(N.a,{className:"ml-auto mr-auto"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"decoration top left scale-1 d-none mx-5 my-5 d-md-block"},n.a.createElement(p.a,{className:"bg-primary",src:j.a,alt:"deco-blob-1 decoration"})),n.a.createElement("div",{className:"decoration bottom right scale-3 d-none d-md-block"},n.a.createElement(p.a,{className:"bg-primary",src:"/img/deco-dots-5.svg",alt:"deco-dots-5 decoration"}))))))),n.a.createElement("div",{className:"divider"},n.a.createElement(p.a,{className:"bg-primary flip-x",src:f.a,alt:"divider graphic"})))},x=t(2),T=t.n(x),C=t(225),O=t(218),z=t(250),D=t(222);var F=e=>Object(D.a)(e,"schedule");const L=({year:e})=>{const{workshops:a,workshopsConfirmed:t,timesConfirmed:s,isLoaded:l}=Object(O.a)(e),{schedule:r,scheduleConfirmed:c,scheduleIsLoaded:m}=F(e),i=l&&m?n.a.createElement(z.a,null):n.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},n.a.createElement(N.a,{className:"ml-auto mr-auto"}));return n.a.createElement("div",{className:"card card-body layer-2"},a.length>0&&t?n.a.createElement(C.a,{entries:a.concat(c&&r),displayTime:s}):i)};L.propTypes={year:T.a.number};var S=L,P=t(210);var A=()=>n.a.createElement("section",{id:"schedule"},n.a.createElement(m.a,null,n.a.createElement(i.a,{className:"align-items-center mb-4 layer-2"},n.a.createElement(o.a,null,n.a.createElement("h2",{className:"h1 mb-sm-0"},"Schedule"),n.a.createElement("p",{className:"lead"},"Workshops and panels with film industry professionals are scheduled throughout the day, covering a wide variety of general and niche filmmaking topics. Whether you want to learn about how films are made or are interested in making your own, we'd love to see you at our workshops."))),n.a.createElement(S,{displayTime:!0,showNoWorkshops:!0}),n.a.createElement("div",{className:"decoration bottom left scale-2 d-none d-md-block"},n.a.createElement(p.a,{className:"bg-primary-2",src:P.a,alt:"deco-dots-3 decoration"}))));a.default=Object(c.a)(()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{data:l}),n.a.createElement(w,null),n.a.createElement(E,null),n.a.createElement(A,null)))},51:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t(60),n=t.n(s);t(64),t(65),t(61);n.a.initializeApp({apiKey:"AIzaSyBQ45K6tmg-PUiQnXcaOPbDAfzTmeVDMbA",authDomain:"phyff-dea73.firebaseapp.com",databaseURL:"https://phyff-dea73.firebaseio.com",projectId:"phyff-dea73",storageBucket:"phyff-dea73.appspot.com",messagingSenderId:"504901127886",appId:"1:504901127886:web:d462db15b3072bd1ca8a9f",measurementId:"G-L593Z52SFT"}),n.a.analytics();const l=n.a.firestore();n.a.storage()},52:function(e,a,t){"use strict";var s=t(0),n=t(51);a.a=()=>{const[e,a]=Object(s.useState)({isLoaded:!1});return Object(s.useEffect)(()=>{n.a.collection("event").doc("info").get().then(e=>{console.log(e.data()),e.exists&&a({...e.data(),isLoaded:!0})})},[]),e}},53:function(e,a,t){"use strict";a.a="/img/divider-3.svg"},54:function(e,a,t){"use strict";a.a="/img/deco-lines-5.svg"},55:function(e,a,t){"use strict";a.a=e=>[{name:"address",icon:"/img/marker-1.svg",text:null!=e?e:"",href:"https://www.google.com/maps/search/?api=1&query="+e},{name:"email",icon:"/img/mail.svg",text:"phillyyouthfilmfest@gmail.com",href:"mailto:phillyyouthfilmfest@gmail.com"},{name:"instagram",icon:"/img/instagram.svg",text:"@phillyyouthfilmfest",href:"https://www.instagram.com/phillyyouthfilmfest/"},{name:"facebook",icon:"/img/facebook.svg",text:"@phyff19",href:"https://www.facebook.com/phyff19/"},{name:"youtube",icon:"/img/youtube.svg",text:"Philly Youth Film Fest",href:"https://www.youtube.com/channel/UCNNgWQxyh9mVcPV0ZSk0w1Q"}]},56:function(e,a,t){"use strict";var s=t(0),n=t.n(s),l=t(48),r=t(34),c=t(35),m=t(49),i=t(22),o=t(11),d=t(54),u=t(55),p=t(9);var g=[[{name:"Winners",to:"/winners"},{name:"About",to:"/about"},{name:"Virtual Screening Room",to:null,dropdownContent:[{name:"All Categories",to:"/virtual-screening-room"},{name:"Reels",to:"/virtual-screening-room/reels"},{name:"Award Winners",to:"/virtual-screening-room/award-winners"},{name:"Films",to:"/virtual-screening-room/films"},{name:"Screenplays",to:"/virtual-screening-room/screenplays"}]}],[{name:"Submit",to:"/submit"},{name:"Attend",to:"/attend"}]],b=t(52);var h=()=>{const{address:e,submissionDeadline:a}=Object(b.a)(),t=Date.now()<(null==a?void 0:a.toDate().getTime());return n.a.createElement("footer",{className:"pb-4 bg-primary-3 text-light layer-4",id:"footer"},n.a.createElement(l.a,null,n.a.createElement(r.a,{className:"mb-5"},n.a.createElement(c.a,null,n.a.createElement("div",{className:"card card-body border-0 o-hidden mb-0 bg-primary text-light"},n.a.createElement("div",{className:"position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"},n.a.createElement("div",{className:"h3 text-center mb-md-0"},t?"Submit to PHYFF Today!":"Attend the Festival!"),n.a.createElement(i.LinkContainer,{to:t?"/submit":"/attend"},n.a.createElement(m.a,{variant:"white",size:"lg"},t?"Submit":"Attend"))),n.a.createElement("div",{className:"decoration middle-y right scale-2 layer-0"},n.a.createElement(p.a,{src:d.a,className:"bg-primary-2"})),n.a.createElement("div",{className:"decoration bottom right layer-0"},n.a.createElement(p.a,{src:"/img/deco-lines-6.svg",className:"bg-primary-2-alt"}))))),n.a.createElement(r.a,{className:"mb-5"},n.a.createElement(c.a,{className:"col-6 col-lg-3 col-xl-2"},n.a.createElement("h5",null,"Navigate"),n.a.createElement("ul",{className:"nav flex-column"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.Link,{to:"/",className:"nav-link"},"Home")),g.map(e=>n.a.createElement("div",{key:e[0].name},n.a.createElement("span",{className:"footer-divider"}),e.map(e=>n.a.createElement("li",{className:"nav-item",key:e.name},n.a.createElement(o.Link,{to:e.to,className:"nav-link"},e.name))))))),n.a.createElement(c.a,{className:"col-6 col-lg"},n.a.createElement("h5",null,"Contact"),n.a.createElement("ul",{className:"list-unstyled"},Object(u.a)(e).slice(0,3).map(({icon:e,text:a,href:t})=>n.a.createElement("li",{className:"mb-2 d-flex",key:t},n.a.createElement(p.a,{src:e,className:"icon"}),n.a.createElement("div",{className:"ml-3 w-100"},n.a.createElement("a",{href:t,className:"w-100",style:{wordWrap:"break-word",wordBreak:"break-all"}},a)))))))))},v=t(276),y=t(306),E=t(310),f=t(3),j=t(13);var N=({delay:e})=>{const[a,t]=Object(s.useState)(window.scrollY);return Object(s.useEffect)(()=>{const a=((e,a,t)=>{let s=(new Date).getTime();return(...n)=>{const l=(new Date).getTime();(l-s>=a||t(...n))&&(s=l,e(...n))}})(()=>{t(window.scrollY)},null!=e?e:10,()=>window.scrollY<=0);return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}}),a};var k=()=>{var e;const a=N({delay:50}),t=null!==(e={"/":{classNames:"navbar-transparent",overlay:!0,isDark:!0}}[Object(f.l)().pathname])&&void 0!==e?e:{classNames:"navbar-transparent",overlay:!0,isDark:!0},s=n.a.forwardRef(({children:e,onClick:a},t)=>n.a.createElement(v.a.Link,{as:o.Link,onClick:e=>{e.preventDefault(),a(e)},ref:t},e));return n.a.createElement(E.a,{variant:t.isDark?"dark":"light",fixed:"top",expand:"lg",className:"px-5 "+(a>0?"navbar-background":"navbar-transparent")},n.a.createElement(E.a.Brand,{className:"fade-page"},n.a.createElement(o.Link,{to:"/"},n.a.createElement("img",{alt:"Phyff",style:{height:"2em"},src:(t.isDark,j.a)}))),n.a.createElement(E.a.Toggle,null,n.a.createElement(p.a,{className:"icon",src:"/img/menu.svg",alt:"menu interface icon"})),n.a.createElement(E.a.Collapse,{className:"justify-content-end",id:"basic-navbar-collapse"},n.a.createElement(v.a,null,g[0].map(({to:e,name:a,dropdownContent:t})=>n.a.createElement(n.a.Fragment,null,t?n.a.createElement(y.a,null,n.a.createElement(y.a.Toggle,{as:s},a),n.a.createElement(y.a.Menu,null,t.map(e=>n.a.createElement(i.LinkContainer,{to:e.to,activeClassName:""},n.a.createElement(y.a.Item,null,e.name))))):n.a.createElement(v.a.Link,{as:o.Link,to:e,key:a},a)))),n.a.createElement(v.a,{className:"ml-auto"},g[1].map(({to:e,name:a},t)=>n.a.createElement(v.a.Link,{as:o.Link,to:e,key:a},n.a.createElement(m.a,{className:"btn-"+["primary-2","primary"][t%2]},a))))))};a.a=e=>a=>n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),n.a.createElement(e,a),n.a.createElement(h,null))},57:function(e,a,t){"use strict";a.a="/img/deco-blob-1.svg"},58:function(e,a,t){"use strict";var s=t(0),n=t.n(s),l=t(48),r=t(34),c=t(35),m=t(53),i=t(12),o=t(57),d=t(14),u=t(9),p=t(2),g=t.n(p),b=g.a.shape({title:g.a.string.isRequired,caption:g.a.string,image:g.a.string,color:g.a.string,dividerColor:g.a.string,decorationStyle:g.a.number,decoColors:g.a.shape({primary:g.a.string,secondary:g.a.string})});const h=({data:e})=>{var a,t,s,l;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"decoration middle-y right d-none d-xl-block","data-jarallax-element":"50 50"},n.a.createElement(u.a,{src:o.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),n.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"100"},n.a.createElement(u.a,{src:i.a,className:null!==(s=null===(l=e.decoColors)||void 0===l?void 0:l.secondary)&&void 0!==s?s:"bg-primary-2"})))};h.propTypes={data:b};const v=({data:e})=>{var a,t,s,l;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"50 50"},n.a.createElement(u.a,{src:d.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),n.a.createElement("div",{className:"decoration middle-y left scale-3 d-none d-xl-block","data-jarallax-element":"100"},n.a.createElement(u.a,{src:"/img/deco-dots-3.svg",className:null!==(s=null===(l=e.decoColors)||void 0===l?void 0:l.secondary)&&void 0!==s?s:"bg-primary-2"})))};v.propTypes={data:b};const y=({data:e})=>{var a,t,s,i;return n.a.createElement("section",{className:(null!==(a=e.color)&&void 0!==a?a:"bg-primary-2")+" header-inner o-hidden has-divider"},n.a.createElement("img",{src:null!==(t=e.image)&&void 0!==t?t:"/img/event-1.jpg",alt:e.title,className:"bg-image blend-mode-multiply"}),n.a.createElement(l.a,{className:"layer-2"},n.a.createElement(r.a,{className:"py-6 text-center justify-content-center align-items-center layer-2 text-light"},n.a.createElement(c.a,{lg:10,xl:8},n.a.createElement("h1",{className:"display-4"},"submit"===window.location.pathname.split("/")[1]?n.a.createElement("a",{href:"https://filmfreeway.com/phyff"},e.title):e.title),n.a.createElement("p",{className:"lead mb-0"},e.caption)))),n.a.createElement("div",{className:"decoration-wrapper"},[n.a.createElement(h,{data:e}),n.a.createElement(v,{data:e})][(null!==(s=e.decorationStyle)&&void 0!==s?s:0)%2]),n.a.createElement("div",{className:"divider layer-1"},n.a.createElement(u.a,{src:m.a,className:null!==(i=e.dividerColor)&&void 0!==i?i:"bg-white"})))};y.propTypes={data:b};a.a=y},73:function(e,a,t){"use strict";var s=t(2),n=t.n(s),l=n.a.shape({image:n.a.string,name:n.a.string,quote:n.a.string,bio:n.a.string,contact:n.a.string,affiliation:n.a.string});a.a=n.a.shape({title:n.a.string,description:n.a.string,time:n.a.number,endTime:n.a.number,allDay:n.a.bool,speaker:l})}}]);