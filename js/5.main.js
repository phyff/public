(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(e,a,t){"use strict";a.a="/img/video-camera.svg"},210:function(e,a,t){"use strict";a.a="/img/deco-dots-1.svg"},217:function(e,a,t){"use strict";a.a="/img/user.svg"},218:function(e,a,t){"use strict";var n=t(222);a.a=e=>Object(n.a)(e,"workshops")},222:function(e,a,t){"use strict";var n=t(0),r=t(51),l=t(52);a.a=(e,a)=>{const{date:t}=Object(l.a)(),s=null==t?void 0:t.toDate().getFullYear(),[c,m]=Object(n.useState)({[a]:[],isEmpty:!1,isLoaded:!1});return Object(n.useEffect)(()=>{r.a.collection("event").doc(a).collection(""+(null!=e?e:s)).get().then(async e=>{var t;const n=await Promise.all(e.docs.map(e=>e.data()).map(e=>{var a,t;return{...e,time:null===(a=e.time)||void 0===a?void 0:a.toDate().getTime(),endTime:null===(t=e.endTime)||void 0===t?void 0:t.toDate().getTime()}}).map(async e=>{var a;return{...e,speaker:e.speaker&&(null===(a=await r.a.collection("speakers").doc(e.speaker).get())||void 0===a?void 0:a.data())}})),l=null===(t=await r.a.collection("event").doc(a).get())||void 0===t?void 0:t.data();m({...l,[a]:n,isEmpty:e.empty,isLoaded:!0})})},[e,s]),c}},224:function(e,a,t){"use strict";var n=t(3);a.a=()=>new URLSearchParams(Object(n.l)().search)},225:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(34),s=t(35),c=t(290),m=t(2),i=t.n(m),o=t(49),d=t(282),u=t(50),p=t.n(u),g=t(73),E=t(217),b=t(9);const v=({entry:e,delay:a,displayTime:t})=>{var m,i;const[u,g]=Object(n.useState)(!1),v=e.allDay?r.a.createElement("span",{className:"badge badge-pill badge-success"},"Both Times"):r.a.createElement("span",null,e.time?`${p()(new Date(e.time)).format("h:mm A")} - ${p()(new Date(e.endTime)).format("h:mm A")}`:"TBD");return r.a.createElement(c.a.Item,{"data-aos":"fade-up","data-aos-delay":null!=a?a:0},r.a.createElement(l.a,{className:"no-gutters align-items-center py-3 text-dark"},r.a.createElement(s.a,{xl:6,md:5},r.a.createElement("h5",{className:"mb-0"},e.title)),t&&r.a.createElement(s.a,{md:!0},v),r.a.createElement(s.a,{md:!0},e.speaker&&r.a.createElement("div",{className:"d-flex align-items-center mt-2 mt-md-0"},e.speaker.image?r.a.createElement("div",{style:{backgroundImage:`url(${e.speaker.image})`,backgroundSize:"cover",backgroundPosition:"center center"},className:"avatar avatar-sm mr-3"}):r.a.createElement(b.a,{src:E.a,alt:e.speaker.name,className:"avatar avatar-sm icon bg-primary mr-3"}),r.a.createElement("span",{className:"h6 mb-0"},e.speaker.name))),r.a.createElement(s.a,{className:"d-none d-md-block"},(e.description||e.speaker&&e.speaker.bio)&&r.a.createElement(o.a,{onClick:()=>g(!u),className:"border-0 bg-transparent btn-light","aria-controls":"entry-description","aria-expanded":u},r.a.createElement(b.a,{className:"icon bg-dark",src:"/img/control.svg",alt:"Control",style:{transform:`rotate(${u?.5:.25}turn)`,transition:"0.2s"}})))),(e.description||e.speaker&&e.speaker.bio)&&r.a.createElement(d.a,{in:u},r.a.createElement("div",{id:"entry-description"},r.a.createElement(l.a,null,r.a.createElement(s.a,null,null!==(m=e.description)&&void 0!==m?m:e.speaker&&e.speaker.bio)),r.a.createElement(l.a,null,r.a.createElement(s.a,{className:"mt-3 text-small"},e.speaker&&(null!==(i=e.speaker.affiliation)&&void 0!==i?i:e.speaker.contact))))))};v.propTypes={entry:g.a,delay:i.a.number,displayTime:i.a.bool};var h=v;const y=({entries:e,displayTime:a})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:"no-gutters d-none d-md-flex bg-white py-3"},r.a.createElement(s.a,{xl:6,md:5},r.a.createElement("span",{className:"h6 mb-0 text-muted"},"Workshop")),a&&r.a.createElement(s.a,null,r.a.createElement("span",{className:"h6 mb-0 text-muted"},"Time")),r.a.createElement(s.a,null,r.a.createElement("span",{className:"h6 mb-0 text-muted"},"Presenter")),r.a.createElement(s.a,{className:"d-none d-md-block"})),r.a.createElement(c.a,{variant:"flush"},e.sort((e,a)=>{var t,n;return(null!==(t=e.time)&&void 0!==t?t:Number.MAX_VALUE)-(null!==(n=a.time)&&void 0!==n?n:Number.MAX_VALUE)}).map(e=>r.a.createElement(h,{entry:e,key:e.title,displayTime:a}))));y.propTypes={entries:i.a.arrayOf(g.a),displayTime:i.a.bool};a.a=y},226:function(e,a,t){var n={"./af":74,"./af.js":74,"./ar":75,"./ar-dz":76,"./ar-dz.js":76,"./ar-kw":77,"./ar-kw.js":77,"./ar-ly":78,"./ar-ly.js":78,"./ar-ma":79,"./ar-ma.js":79,"./ar-sa":80,"./ar-sa.js":80,"./ar-tn":81,"./ar-tn.js":81,"./ar.js":75,"./az":82,"./az.js":82,"./be":83,"./be.js":83,"./bg":84,"./bg.js":84,"./bm":85,"./bm.js":85,"./bn":86,"./bn-bd":87,"./bn-bd.js":87,"./bn.js":86,"./bo":88,"./bo.js":88,"./br":89,"./br.js":89,"./bs":90,"./bs.js":90,"./ca":91,"./ca.js":91,"./cs":92,"./cs.js":92,"./cv":93,"./cv.js":93,"./cy":94,"./cy.js":94,"./da":95,"./da.js":95,"./de":96,"./de-at":97,"./de-at.js":97,"./de-ch":98,"./de-ch.js":98,"./de.js":96,"./dv":99,"./dv.js":99,"./el":100,"./el.js":100,"./en-au":101,"./en-au.js":101,"./en-ca":102,"./en-ca.js":102,"./en-gb":103,"./en-gb.js":103,"./en-ie":104,"./en-ie.js":104,"./en-il":105,"./en-il.js":105,"./en-in":106,"./en-in.js":106,"./en-nz":107,"./en-nz.js":107,"./en-sg":108,"./en-sg.js":108,"./eo":109,"./eo.js":109,"./es":110,"./es-do":111,"./es-do.js":111,"./es-mx":112,"./es-mx.js":112,"./es-us":113,"./es-us.js":113,"./es.js":110,"./et":114,"./et.js":114,"./eu":115,"./eu.js":115,"./fa":116,"./fa.js":116,"./fi":117,"./fi.js":117,"./fil":118,"./fil.js":118,"./fo":119,"./fo.js":119,"./fr":120,"./fr-ca":121,"./fr-ca.js":121,"./fr-ch":122,"./fr-ch.js":122,"./fr.js":120,"./fy":123,"./fy.js":123,"./ga":124,"./ga.js":124,"./gd":125,"./gd.js":125,"./gl":126,"./gl.js":126,"./gom-deva":127,"./gom-deva.js":127,"./gom-latn":128,"./gom-latn.js":128,"./gu":129,"./gu.js":129,"./he":130,"./he.js":130,"./hi":131,"./hi.js":131,"./hr":132,"./hr.js":132,"./hu":133,"./hu.js":133,"./hy-am":134,"./hy-am.js":134,"./id":135,"./id.js":135,"./is":136,"./is.js":136,"./it":137,"./it-ch":138,"./it-ch.js":138,"./it.js":137,"./ja":139,"./ja.js":139,"./jv":140,"./jv.js":140,"./ka":141,"./ka.js":141,"./kk":142,"./kk.js":142,"./km":143,"./km.js":143,"./kn":144,"./kn.js":144,"./ko":145,"./ko.js":145,"./ku":146,"./ku.js":146,"./ky":147,"./ky.js":147,"./lb":148,"./lb.js":148,"./lo":149,"./lo.js":149,"./lt":150,"./lt.js":150,"./lv":151,"./lv.js":151,"./me":152,"./me.js":152,"./mi":153,"./mi.js":153,"./mk":154,"./mk.js":154,"./ml":155,"./ml.js":155,"./mn":156,"./mn.js":156,"./mr":157,"./mr.js":157,"./ms":158,"./ms-my":159,"./ms-my.js":159,"./ms.js":158,"./mt":160,"./mt.js":160,"./my":161,"./my.js":161,"./nb":162,"./nb.js":162,"./ne":163,"./ne.js":163,"./nl":164,"./nl-be":165,"./nl-be.js":165,"./nl.js":164,"./nn":166,"./nn.js":166,"./oc-lnc":167,"./oc-lnc.js":167,"./pa-in":168,"./pa-in.js":168,"./pl":169,"./pl.js":169,"./pt":170,"./pt-br":171,"./pt-br.js":171,"./pt.js":170,"./ro":172,"./ro.js":172,"./ru":173,"./ru.js":173,"./sd":174,"./sd.js":174,"./se":175,"./se.js":175,"./si":176,"./si.js":176,"./sk":177,"./sk.js":177,"./sl":178,"./sl.js":178,"./sq":179,"./sq.js":179,"./sr":180,"./sr-cyrl":181,"./sr-cyrl.js":181,"./sr.js":180,"./ss":182,"./ss.js":182,"./sv":183,"./sv.js":183,"./sw":184,"./sw.js":184,"./ta":185,"./ta.js":185,"./te":186,"./te.js":186,"./tet":187,"./tet.js":187,"./tg":188,"./tg.js":188,"./th":189,"./th.js":189,"./tk":190,"./tk.js":190,"./tl-ph":191,"./tl-ph.js":191,"./tlh":192,"./tlh.js":192,"./tr":193,"./tr.js":193,"./tzl":194,"./tzl.js":194,"./tzm":195,"./tzm-latn":196,"./tzm-latn.js":196,"./tzm.js":195,"./ug-cn":197,"./ug-cn.js":197,"./uk":198,"./uk.js":198,"./ur":199,"./ur.js":199,"./uz":200,"./uz-latn":201,"./uz-latn.js":201,"./uz.js":200,"./vi":202,"./vi.js":202,"./x-pseudo":203,"./x-pseudo.js":203,"./yo":204,"./yo.js":204,"./zh-cn":205,"./zh-cn.js":205,"./zh-hk":206,"./zh-hk.js":206,"./zh-mo":207,"./zh-mo.js":207,"./zh-tw":208,"./zh-tw.js":208};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=226},240:function(e,a,t){"use strict";a.a="/img/submit.jpg"},241:function(e,a,t){"use strict";a.a="/img/learn.jpg"},242:function(e,a,t){"use strict";a.a="/img/divider-5.svg"},243:function(e,a,t){"use strict";a.a="/img/deco-blob-13.svg"},244:function(e,a,t){"use strict";var n=t(0),r=t(51);a.a=()=>{const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{r.a.collection("winners").get().then(e=>{const t=[];e.forEach(e=>{t.push(e.data())}),a(t.reverse().map(e=>e.year))})},[]),e}},248:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(312),s=t(298),c=t(2),m=t.n(c),i=t(71),o=t(51);var d=e=>{const[a,t]=Object(n.useState)({});return Object(n.useEffect)(()=>{i.a.forEach(({title:a})=>{o.a.collection("winners").doc(e.toString()).collection(a.toLowerCase()).get().then(e=>{const n=[];e.forEach(e=>{n.push(e.data())}),t(e=>{const t={...e};return t[a]=n,t})})})},[e]),a},u=t(34),p=t(35),g=t(290),E=t(23),b=t(49),v=t(311),h=t(297),y=t(260),f=t(261),j=m.a.shape({title:m.a.string,director:m.a.string,url:m.a.string,local:m.a.bool,place:m.a.number,specialAward:m.a.string});const N=({winner:e,delay:a})=>{const{title:t,director:n,local:l,place:s,url:c,specialAward:m}=e||{};return r.a.createElement(g.a.Item,{"data-aos":"fade-up","data-aos-delay":a},r.a.createElement(u.a,{className:"no-gutters align-items-center justify-content-center py-3 text-dark"},r.a.createElement(p.a,{md:4,sm:10,className:"text-center text-md-left"},r.a.createElement("h5",null,r.a.createElement(y.a,{icon:f.a,size:"lg",color:["gold","silver","darkgoldenrod"][s-1]})," ",t)),r.a.createElement(p.a,{md:2,sm:3,className:"text-center mb-1"},c&&r.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},r.a.createElement(b.a,null,"View ",r.a.createElement(y.a,{icon:f.b})))),r.a.createElement(p.a,{md:1,sm:3,className:"text-center mb-1"},l&&r.a.createElement(v.a,{placement:"right",delay:{show:400,hide:250},overlay:e=>r.a.createElement(h.a,e,r.a.createElement("strong",null,t)," was created by a filmmaker from the Philadelphia area.")},r.a.createElement("span",{className:"badge badge-pill badge-primary-2 m-1"},"Local")),m&&r.a.createElement(v.a,{placement:"right",delay:{show:400,hide:250},overlay:e=>r.a.createElement(h.a,e,r.a.createElement("strong",null,t),' won the "',m,'" award.')},r.a.createElement("span",{className:"badge badge-pill badge-warning m-1"},"Special"))),r.a.createElement(p.a,{md:5,sm:10,className:"text-center text-md-right ml-md-auto"},r.a.createElement("span",{className:"w-100"},n))))};N.propTypes={winner:j,delay:m.a.number};var k=N;const w=({winners:e})=>r.a.createElement("div",{className:"card card-body layer-2"},e.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"no-gutters d-none d-md-flex bg-white py-3"},r.a.createElement(p.a,{md:4},r.a.createElement("span",{className:"h6 mb-0 text-muted"},"Title")),r.a.createElement(p.a,{md:!0,className:"ml-auto text-right"},r.a.createElement("span",{className:"h6 mb-0 text-muted"},"Filmmaker(s)"))),r.a.createElement(g.a,{variant:"flush"},e.sort((e,a)=>e.place-a.place).map((e,a)=>r.a.createElement(k,{winner:e,delay:50*a,key:e.title})))):r.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},r.a.createElement(E.a,{className:"ml-auto mr-auto"})));w.propTypes={winners:m.a.arrayOf(j)};var x=w,O=m.a.shape({title:m.a.string,description:m.a.string,icon:m.a.string}),L=t(9);const T=({category:e,winners:a})=>{const{title:t,description:n,icon:l}=e;return r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"justify-content-center text-center mb-1"},r.a.createElement(L.a,{src:l,className:"icon icon-lg bg-primary",externalClassnames:"d-inline-block"}),r.a.createElement("h3",null,t),r.a.createElement("p",{className:"lead"},n)),r.a.createElement(x,{winners:a}))};T.propTypes={category:O,winners:m.a.arrayOf(j)};var S=T,z=t(224);const F=({year:e,compact:a,navLeft:t})=>{const c=i.a.map(e=>e.title),[m,o]=Object(n.useState)(c[0]),u=Object(z.a)(),p=d(e);return Object(n.useEffect)(()=>{var e;const a=null!==(e=u.get("category"))&&void 0!==e?e:"none",t=a.charAt(0).toUpperCase()+a.slice(1);a&&c.includes(t)&&o(t)},[]),a?r.a.createElement(l.a,{activeKey:m,onSelect:e=>o(e),variant:"pills",className:"mb-3 "+(t?null:"justify-content-end")},i.a.map(e=>{var a;return r.a.createElement(s.a,{eventKey:e.title,title:e.title,key:e.title},r.a.createElement(S,{category:e,winners:null!==(a=p[e.title])&&void 0!==a?a:[]}))})):r.a.createElement("div",null,i.a.map(e=>{var a;return r.a.createElement(S,{category:e,winners:null!==(a=p[e.title])&&void 0!==a?a:[],key:e.title})}))};F.propTypes={year:m.a.number,compact:m.a.bool,navLeft:m.a.bool};a.a=F},250:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(218),s=t(23),c=t(225),m=t(52);a.a=()=>{const{date:e}=Object(m.a)(),a=null==e?void 0:e.toDate().getFullYear(),{workshops:t,isLoaded:n}=Object(l.a)(a-1);return r.a.createElement("div",null,r.a.createElement("div",{className:"row d-flex flex-column align-items-center justify-content-center mx-0"},r.a.createElement("img",{src:"/img/saas-2.svg",alt:"No Workshops",style:{width:"35%"},className:"mb-5"}),r.a.createElement("h3",{className:"h3"},"Workshops To Be Announced"),r.a.createElement("p",{className:"lead text-center mx-3"},"We're working hard to schedule and confirm workshops for this year's event. Check out last year's schedule:"),n?r.a.createElement("div",{className:"w-100 mx-0 border-0 p-0"},r.a.createElement(c.a,{entries:t})):r.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},r.a.createElement(s.a,{className:"ml-auto mr-auto"}))))}},303:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(48),s=t(34),c=t(35),m=t(50),i=t.n(m),o=t(11),d=t(9),u=t(54),p=t(210),g=t(53),E=t(52);var b=()=>{const{date:e,venueName:a}=Object(E.a)();return r.a.createElement("section",{className:"bg-primary-2 text-light p-0 o-hidden"},r.a.createElement("img",{src:"/img/phyff-poster-1-flip-x.jpeg",className:"bg-image blend-mode-multiply",alt:"Splash"}),r.a.createElement(l.a,{className:"layer-2"},r.a.createElement(s.a,{className:"py-6 min-vh-80 align-items-center","data-aos":"fade-up"},r.a.createElement(c.a,{lg:9,xl:9},r.a.createElement("h5",null,e&&i()(null==e?void 0:e.toDate()).format("dddd, MMMM Do YYYY")),r.a.createElement("h1",{className:"display-3"},"Philadelphia Youth Film Festival"),r.a.createElement("p",{className:"lead mb-4"},a),r.a.createElement(o.Link,{to:"/attend",className:"btn btn-primary btn-lg"},"Attend")))),r.a.createElement("div",{className:"decoration-wrapper"},r.a.createElement("div",{className:"decoration middle-y left scale-4","data-aos":"fade-right"},r.a.createElement(d.a,{className:"bg-primary-2 d-none d-sm-block",src:u.a,alt:"deco-lines-5 decoration"})),r.a.createElement("div",{className:"decoration bottom right scale-2","data-jarallax-element":"20"},r.a.createElement(d.a,{className:"bg-primary d-none d-md-block",src:"/img/deco-blob-4.svg",alt:"deco-blob-4 decoration"})),r.a.createElement("div",{className:"decoration bottom right","data-jarallax-element":"-50"},r.a.createElement(d.a,{className:"bg-white d-none d-md-block",src:p.a,alt:"deco-dots-1 decoration"}))),r.a.createElement("div",{className:"divider flip-x"},r.a.createElement(d.a,{className:"bg-primary-3",src:g.a,alt:"divider graphic"})))},v=t(56),h=t(51);var y=()=>{const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{h.a.collection("sponsors").get().then(e=>{a(e.docs.map(e=>e.data()))})},[]),e};var f=()=>{const e=y();return r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{className:"text-uppercase mb-4"},"Sponsored By"),r.a.createElement("ul",{className:"d-flex flex-wrap list-unstyled"},e.map(({name:e,photoURL:a})=>r.a.createElement("li",{className:"mr-4 mb-5","data-aos":"fade-up","data-aos-delay":"100",key:e},r.a.createElement("img",{className:"icon icon-logo icon-md",src:a,alt:e})))))},j=t(23);var N=()=>{const{promoVideo:e}=Object(E.a)();return r.a.createElement("div",{className:"rounded o-hidden mb-5"},r.a.createElement("div",{className:"embed-container"},e?r.a.createElement("iframe",{title:"Promo video",src:e,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("div",{className:"min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center"},r.a.createElement(j.a,{className:"ml-auto mr-auto"}))))};var k=()=>r.a.createElement("section",{className:"bg-primary-3 text-light has-divider"},r.a.createElement(l.a,null,r.a.createElement(s.a,{className:"justify-content-between"},r.a.createElement(c.a,{xl:4,md:5,className:"mb-3 mb-md-0"},r.a.createElement("h2",{className:"h1"},"Join the rapidly expanding community of young filmmakers."),r.a.createElement("p",{className:"lead"},"We seek to create an environment where our peers could have their work recognized without massive budgets or extensive training."),r.a.createElement(o.Link,{to:"/about",className:"btn btn-white btn-lg mb-3"},"Learn More")),r.a.createElement(c.a,{xl:8,md:6},r.a.createElement(N,null),r.a.createElement(f,null)))),r.a.createElement("div",{className:"divider"},r.a.createElement(d.a,{className:"bg-primary-2-alt",src:g.a,alt:"divider graphic"}))),w=t(2),x=t.n(w),O=t(217),L=t(73);const T=({workshops:e})=>r.a.createElement(l.a,null,r.a.createElement(s.a,{className:"mb-4"},r.a.createElement(c.a,null,r.a.createElement("h2",{className:"h1"},"Featuring workshops with"))),r.a.createElement(s.a,null,e.sort((e,a)=>(a.speaker.image?1:0)-(e.speaker.image?1:0)).filter(a=>e.find(({speaker:e})=>e.name===a.speaker.name)===a).map((e,a)=>{var t;return r.a.createElement(c.a,{sm:6,lg:4,className:"d-flex align-items-center mb-5","data-aos":"fade-up","data-aos-delay":100*a,key:"wp-s-"+e.title},e.speaker.image?r.a.createElement("div",{style:{backgroundImage:`url(${e.speaker.image})`,backgroundSize:"cover",backgroundPosition:"center center"},className:"avatar avatar-xlg mr-3"}):r.a.createElement(d.a,{src:O.a,alt:e.speaker.name,className:"avatar avatar-xlg icon bg-primary mr-3"}),r.a.createElement("div",null,r.a.createElement("h5",{className:"mb-0"},e.speaker.name),r.a.createElement("small",null,null!==(t=e.speaker.contact)&&void 0!==t?t:e.speaker.affiliation)))})));T.propTypes={workshops:x.a.arrayOf(L.a)};var S=T,z=t(240),F=t(241);const D=({workshops:e,count:a})=>{const t=e=>{const a=["/img/attend.jpg",z.a,F.a,"/img/more.jpg"];return a[void 0!==e?e%a.length:Math.floor(e?e%a.length:Math.random()*a.length)]};return r.a.createElement(l.a,null,r.a.createElement(s.a,{className:"mb-4"},r.a.createElement(c.a,null,r.a.createElement("h2",{className:"h1"},"Covering topics like"))),r.a.createElement(s.a,null,e.slice(0,null!=a?a:4).map((e,a)=>{var n;return r.a.createElement(c.a,{md:6,lg:3,className:"d-flex","data-aos":"fade-up","data-aos-delay":100*a,key:"wp-t-"+e.title},r.a.createElement(o.Link,{to:"/attend#schedule",className:"card card-icon-2 card-body border-0 justify-content-between hover-shadow-3d text-light "+["bg-primary","bg-primary-2","bg-primary-3"][a%3]},e.speaker.image&&r.a.createElement("div",{style:{backgroundImage:`url(${e.speaker.image})`,backgroundSize:"cover",backgroundPosition:"center center"},className:"avatar avatar-lg mb-3 mb-md-4 bg-primary layer-2"}),r.a.createElement("h5",{className:"mb-0 layer-2"},e.title),r.a.createElement("img",{className:"bg-image opacity-50",src:null!==(n=e.image)&&void 0!==n?n:t(a),alt:e.title})))})),r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(o.Link,{to:"/attend#schedule",className:"hover-arrow"},"View all workshops"))))};D.propTypes={workshops:x.a.arrayOf(L.a),count:x.a.number};var A=D,C=t(242),P=t(250),M=t(218);var Y=()=>{const{workshops:e,isLoaded:a}=Object(M.a)();return a?e.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(S,{workshops:e})),r.a.createElement("section",{className:"has-divider"},r.a.createElement(A,{workshops:e,count:4}),r.a.createElement("div",{className:"divider"},r.a.createElement(d.a,{className:"bg-primary-alt",src:C.a,alt:"divider graphic"})))):r.a.createElement("section",{className:"has-divider"},r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(P.a,null)))),r.a.createElement("div",{className:"divider"},r.a.createElement(d.a,{className:"bg-primary-alt",src:C.a,alt:"divider graphic"}))):r.a.createElement("section",{className:"has-divider"},r.a.createElement("div",{className:"h-100 w-100 p-0 m-0 border-0 justify-content-center"},r.a.createElement(j.a,{className:"ml-auto mr-auto"})),r.a.createElement("div",{className:"divider"},r.a.createElement(d.a,{className:"bg-secondary-alt",src:C.a,alt:"divider graphic"})))},W=t(243),I=t(12),U=t(55);var B=()=>r.a.createElement("section",{className:"bg-primary text-light has-divider"},r.a.createElement(l.a,null,r.a.createElement(s.a,{className:"mb-4 justify-content-center text-center"},r.a.createElement(c.a,{xl:8,lg:9},r.a.createElement("h2",{className:"display-4"},"Participate in the Festival"),r.a.createElement("p",{className:"lead"},"The Fest is open to all high-school students. Both submission and attendance are free."))),r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(c.a,{lg:8,xl:7},r.a.createElement("div",{className:"card card-lg card-body flex-row align-items-center film-primary bg-white text-primary layer-2","data-aos":"fade-right","data-aos-delay":100},r.a.createElement("div",{className:"mx-2 text-center text-sm-left mb-3 mb-sm-0"},r.a.createElement("span",{className:"h1 d-block text-primary"},"Submit"),r.a.createElement("p",{className:"lead pr-xl-3"},"Submit your film to the Fest. Submissions are open to high schoolers in the greater Philadelphia area and beyond, 14 to 19 years of age."),r.a.createElement(o.Link,{to:"/submit",className:"btn btn-lg mt-2 btn-primary"},"Submit"))),r.a.createElement("div",{className:"card card-lg card-body flex-row align-items-center pricing-ticket-primary bg-primary-2 layer-2","data-aos":"fade-left","data-aos-delay":200},r.a.createElement("div",{className:"mx-2 text-center text-sm-left mb-3 mb-sm-0"},r.a.createElement("span",{className:"h1 d-block"},"Attend"),r.a.createElement("p",{className:"lead pr-xl-3"},"Attend any workshop and event throughout the Fest. Whether you make films or just like watching them, we'd love to see you there."),r.a.createElement(o.Link,{to:"/attend",className:"btn btn-lg mt-2 btn-white"},"Sign Up")),r.a.createElement("div",{className:"mx-2 text-center"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("span",{className:"h3 mb-0"},"$"),r.a.createElement("span",{className:"display-3"},"0")))),r.a.createElement("div",{className:"decoration top left scale-2 d-none d-md-block"},r.a.createElement(d.a,{className:"bg-primary-3",src:I.a,alt:"deco-dots-3 decoration"})),r.a.createElement("div",{className:"decoration bottom right scale-2 d-none d-md-block"},r.a.createElement(d.a,{className:"bg-white",src:W.a,alt:"deco-blob-13 decoration"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("span",null,"Want to sponsor the event?",r.a.createElement("a",{href:Object(U.a)().filter(({name:e})=>"email"===e)[0].href,className:"hover-arrow"}," Get in touch"))))))),V=t(244),$=t(248);var R=()=>{var e;const a=null!==(e=Object(V.a)())&&void 0!==e?e:[];if(a.length>0){const e=Math.max(...a);return r.a.createElement("section",{className:"has-divider bg-primary-alt"},r.a.createElement(l.a,null,r.a.createElement("div",{className:"justify-content-center"},r.a.createElement("h1",{className:"mb-2"},"2021 Winners"),r.a.createElement($.a,{year:e,compact:!0,navLeft:!0}))),r.a.createElement("div",{className:"divider flip-x"},r.a.createElement(d.a,{className:"bg-primary",src:g.a,alt:"divider graphic"})))}return r.a.createElement("section",{className:"has-divider bg-primary-alt"},r.a.createElement(l.a,null,r.a.createElement("div",{className:"h-100 w-100 p-0 m-0 border-0 justify-content-center"},r.a.createElement(j.a,{className:"ml-auto mr-auto"}))),r.a.createElement("div",{className:"divider flip-x"},r.a.createElement(d.a,{className:"bg-primary",src:g.a,alt:"divider graphic"})))};var q=e=>{const[a,t]=Object(n.useState)({isLoaded:!1});return Object(n.useEffect)(()=>{h.a.collection("event").doc("keynote").get().then(async a=>{if(a.exists&&e){var n;const r=a.data()[e];t({keynote:null===(n=await h.a.collection("speakers").doc(r).get())||void 0===n?void 0:n.data(),isLoaded:!0})}})},[e]),a};const K=({year:e})=>{var a;const{keynote:t,isLoaded:n}=q(e);return n&&e?t?r.a.createElement(s.a,null,t.image&&r.a.createElement(c.a,{md:5,xl:6,className:"mb-4 mb-md-0"},r.a.createElement("img",{src:t.image,style:{width:"70%"},alt:"Mission",className:"rounded shadow-3d"})),r.a.createElement(c.a,{md:t.image?7:12,xl:t.image?6:12},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-xl-8 col-lg-10"},r.a.createElement("span",{className:"badge badge-primary-2"},e," Keynote Speaker"),r.a.createElement("div",{className:"my-3"},r.a.createElement("span",{className:"h1"},t.name)),r.a.createElement("p",{className:"lead"},t.bio),r.a.createElement("div",{className:"mt-3 text-small"},null!==(a=t.affiliation)&&void 0!==a?a:t.contact))))):r.a.createElement(K,{year:e-1}):r.a.createElement(j.a,{className:"ml-auto mr-auto"})};K.propTypes={year:x.a.number};var _=K;var Q=()=>{var e;const{date:a}=null!==(e=Object(E.a)())&&void 0!==e?e:{},t=null==a?void 0:a.toDate().getFullYear();return r.a.createElement("section",{className:"has-divider bg-primary-2-alt"},r.a.createElement(l.a,null,r.a.createElement("div",{className:"h-100 w-100 p-0 m-0 border-0 justify-content-center"},r.a.createElement(_,{year:t}))),r.a.createElement("div",{className:"divider flip-x"},r.a.createElement(d.a,{className:"bg-white",src:g.a,alt:"divider graphic"})))};a.default=Object(v.a)(()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(k,null),r.a.createElement(Q,null),r.a.createElement(Y,null),r.a.createElement(R,null),r.a.createElement(B,null)))},51:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(60),r=t.n(n);t(64),t(65),t(61);r.a.initializeApp({apiKey:"AIzaSyBQ45K6tmg-PUiQnXcaOPbDAfzTmeVDMbA",authDomain:"phyff-dea73.firebaseapp.com",databaseURL:"https://phyff-dea73.firebaseio.com",projectId:"phyff-dea73",storageBucket:"phyff-dea73.appspot.com",messagingSenderId:"504901127886",appId:"1:504901127886:web:d462db15b3072bd1ca8a9f",measurementId:"G-L593Z52SFT"}),r.a.analytics();const l=r.a.firestore();r.a.storage()},52:function(e,a,t){"use strict";var n=t(0),r=t(51);a.a=()=>{const[e,a]=Object(n.useState)({isLoaded:!1});return Object(n.useEffect)(()=>{r.a.collection("event").doc("info").get().then(e=>{console.log(e.data()),e.exists&&a({...e.data(),isLoaded:!0})})},[]),e}},53:function(e,a,t){"use strict";a.a="/img/divider-3.svg"},54:function(e,a,t){"use strict";a.a="/img/deco-lines-5.svg"},55:function(e,a,t){"use strict";a.a=e=>[{name:"address",icon:"/img/marker-1.svg",text:null!=e?e:"",href:"https://www.google.com/maps/search/?api=1&query="+e},{name:"email",icon:"/img/mail.svg",text:"phillyyouthfilmfest@gmail.com",href:"mailto:phillyyouthfilmfest@gmail.com"},{name:"instagram",icon:"/img/instagram.svg",text:"@phillyyouthfilmfest",href:"https://www.instagram.com/phillyyouthfilmfest/"},{name:"facebook",icon:"/img/facebook.svg",text:"@phyff19",href:"https://www.facebook.com/phyff19/"},{name:"youtube",icon:"/img/youtube.svg",text:"Philly Youth Film Fest",href:"https://www.youtube.com/channel/UCNNgWQxyh9mVcPV0ZSk0w1Q"}]},56:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(48),s=t(34),c=t(35),m=t(49),i=t(22),o=t(11),d=t(54),u=t(55),p=t(9);var g=[[{name:"Winners",to:"/winners"},{name:"About",to:"/about"},{name:"Virtual Screening Room",to:null,dropdownContent:[{name:"All Categories",to:"/virtual-screening-room"},{name:"Reels",to:"/virtual-screening-room/reels"},{name:"Award Winners",to:"/virtual-screening-room/award-winners"},{name:"Films",to:"/virtual-screening-room/films"},{name:"Screenplays",to:"/virtual-screening-room/screenplays"}]}],[{name:"Submit",to:"/submit"},{name:"Attend",to:"/attend"}]],E=t(52);var b=()=>{const{address:e,submissionDeadline:a}=Object(E.a)(),t=Date.now()<(null==a?void 0:a.toDate().getTime());return r.a.createElement("footer",{className:"pb-4 bg-primary-3 text-light layer-4",id:"footer"},r.a.createElement(l.a,null,r.a.createElement(s.a,{className:"mb-5"},r.a.createElement(c.a,null,r.a.createElement("div",{className:"card card-body border-0 o-hidden mb-0 bg-primary text-light"},r.a.createElement("div",{className:"position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"},r.a.createElement("div",{className:"h3 text-center mb-md-0"},t?"Submit to PHYFF Today!":"Attend the Festival!"),r.a.createElement(i.LinkContainer,{to:t?"/submit":"/attend"},r.a.createElement(m.a,{variant:"white",size:"lg"},t?"Submit":"Attend"))),r.a.createElement("div",{className:"decoration middle-y right scale-2 layer-0"},r.a.createElement(p.a,{src:d.a,className:"bg-primary-2"})),r.a.createElement("div",{className:"decoration bottom right layer-0"},r.a.createElement(p.a,{src:"/img/deco-lines-6.svg",className:"bg-primary-2-alt"}))))),r.a.createElement(s.a,{className:"mb-5"},r.a.createElement(c.a,{className:"col-6 col-lg-3 col-xl-2"},r.a.createElement("h5",null,"Navigate"),r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.Link,{to:"/",className:"nav-link"},"Home")),g.map(e=>r.a.createElement("div",{key:e[0].name},r.a.createElement("span",{className:"footer-divider"}),e.map(e=>r.a.createElement("li",{className:"nav-item",key:e.name},r.a.createElement(o.Link,{to:e.to,className:"nav-link"},e.name))))))),r.a.createElement(c.a,{className:"col-6 col-lg"},r.a.createElement("h5",null,"Contact"),r.a.createElement("ul",{className:"list-unstyled"},Object(u.a)(e).slice(0,3).map(({icon:e,text:a,href:t})=>r.a.createElement("li",{className:"mb-2 d-flex",key:t},r.a.createElement(p.a,{src:e,className:"icon"}),r.a.createElement("div",{className:"ml-3 w-100"},r.a.createElement("a",{href:t,className:"w-100",style:{wordWrap:"break-word",wordBreak:"break-all"}},a)))))))))},v=t(276),h=t(306),y=t(310),f=t(3),j=t(13);var N=({delay:e})=>{const[a,t]=Object(n.useState)(window.scrollY);return Object(n.useEffect)(()=>{const a=((e,a,t)=>{let n=(new Date).getTime();return(...r)=>{const l=(new Date).getTime();(l-n>=a||t(...r))&&(n=l,e(...r))}})(()=>{t(window.scrollY)},null!=e?e:10,()=>window.scrollY<=0);return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}}),a};var k=()=>{var e;const a=N({delay:50}),t=null!==(e={"/":{classNames:"navbar-transparent",overlay:!0,isDark:!0}}[Object(f.l)().pathname])&&void 0!==e?e:{classNames:"navbar-transparent",overlay:!0,isDark:!0},n=r.a.forwardRef(({children:e,onClick:a},t)=>r.a.createElement(v.a.Link,{as:o.Link,onClick:e=>{e.preventDefault(),a(e)},ref:t},e));return r.a.createElement(y.a,{variant:t.isDark?"dark":"light",fixed:"top",expand:"lg",className:"px-5 "+(a>0?"navbar-background":"navbar-transparent")},r.a.createElement(y.a.Brand,{className:"fade-page"},r.a.createElement(o.Link,{to:"/"},r.a.createElement("img",{alt:"Phyff",style:{height:"2em"},src:(t.isDark,j.a)}))),r.a.createElement(y.a.Toggle,null,r.a.createElement(p.a,{className:"icon",src:"/img/menu.svg",alt:"menu interface icon"})),r.a.createElement(y.a.Collapse,{className:"justify-content-end",id:"basic-navbar-collapse"},r.a.createElement(v.a,null,g[0].map(({to:e,name:a,dropdownContent:t})=>r.a.createElement(r.a.Fragment,null,t?r.a.createElement(h.a,null,r.a.createElement(h.a.Toggle,{as:n},a),r.a.createElement(h.a.Menu,null,t.map(e=>r.a.createElement(i.LinkContainer,{to:e.to,activeClassName:""},r.a.createElement(h.a.Item,null,e.name))))):r.a.createElement(v.a.Link,{as:o.Link,to:e,key:a},a)))),r.a.createElement(v.a,{className:"ml-auto"},g[1].map(({to:e,name:a},t)=>r.a.createElement(v.a.Link,{as:o.Link,to:e,key:a},r.a.createElement(m.a,{className:"btn-"+["primary-2","primary"][t%2]},a))))))};a.a=e=>a=>r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(e,a),r.a.createElement(b,null))},71:function(e,a,t){"use strict";const n=[{title:"Narrative",description:"Films that tell fictional or fictionalized stories, events or narratives.",icon:"/img/chat-1.svg"},{title:"Experimental",description:"Films that experiment with some aspect of the filmmaking process, such as editing of visuals and/or audio, filming techniques, and even the mode of presentation.",icon:"/img/bulb-1.svg"},{title:"Documentary",description:"Films that provide factual records reports on a specific subject or subjects.",icon:t(209).a},{title:"Screenplay",description:"The script of a movie, including acting instructions and scene directions.",icon:"/img/selected-file.svg"}];a.a=n},73:function(e,a,t){"use strict";var n=t(2),r=t.n(n),l=r.a.shape({image:r.a.string,name:r.a.string,quote:r.a.string,bio:r.a.string,contact:r.a.string,affiliation:r.a.string});a.a=r.a.shape({title:r.a.string,description:r.a.string,time:r.a.number,endTime:r.a.number,allDay:r.a.bool,speaker:l})}}]);