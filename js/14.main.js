(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{219:function(e,a,t){"use strict";var n=t(1),l=t(0),r=t.n(l),c=t(8),s=t.n(c);a.a=function(e){return r.a.forwardRef((function(a,t){return r.a.createElement("div",Object(n.a)({},a,{ref:t,className:s()(a.className,e)}))}))}},241:function(e,a,t){"use strict";a.a="/img/learn.jpg"},291:function(e,a,t){"use strict";var n=t(1),l=t(4),r=t(8),c=t.n(r),s=t(0),i=t.n(s),m=t(10),o=t(221),d=t(219),u=t(229),g=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.variant,o=e.as,d=void 0===o?"img":o,u=Object(l.a)(e,["bsPrefix","className","variant","as"]),g=Object(m.a)(t,"card-img");return i.a.createElement(d,Object(n.a)({ref:a,className:c()(s?g+"-"+s:g,r)},u))}));g.displayName="CardImg",g.defaultProps={variant:null};var p=g,h=Object(d.a)("h5"),f=Object(d.a)("h6"),v=Object(o.a)("card-body"),b=Object(o.a)("card-title",{Component:h}),E=Object(o.a)("card-subtitle",{Component:f}),y=Object(o.a)("card-link",{Component:"a"}),N=Object(o.a)("card-text",{Component:"p"}),w=Object(o.a)("card-header"),k=Object(o.a)("card-footer"),x=Object(o.a)("card-img-overlay"),j=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.bg,d=e.text,g=e.border,p=e.body,h=e.children,f=e.as,b=void 0===f?"div":f,E=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(m.a)(t,"card"),N=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.a.createElement(u.a.Provider,{value:N},i.a.createElement(b,Object(n.a)({ref:a},E,{className:c()(r,y,o&&"bg-"+o,d&&"text-"+d,g&&"border-"+g)}),p?i.a.createElement(v,null,h):h))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=p,j.Title=b,j.Subtitle=E,j.Body=v,j.Link=y,j.Text=N,j.Header=w,j.Footer=k,j.ImgOverlay=x;a.a=j},305:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(56),c=t(58);var s={title:"About",image:t(241).a,color:"bg-primary",caption:"The Festival is open to high school students in the greater Philadelphia area and beyond with free participation for all students, and it includes an awards ceremony for the winning films.",decoColors:{primary:"bg-primary-2",secondary:"bg-primary-alt"}},i=t(48),m=t(34),o=t(35),d=t(53),u=t(291),g=t(2),p=t.n(g),h=p.a.shape({name:p.a.string,photoURL:p.a.string,biography:p.a.string,title:p.a.string,email:p.a.string,order:p.a.number});const f=({member:e})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{md:6,lg:4,className:"d-none d-md-block mb-2"},l.a.createElement(u.a,{className:"no-gutters h-100"},l.a.createElement("div",{className:"card-img-top",style:{backgroundImage:`url(${e.photoURL})`,backgroundSize:"cover",backgroundPosition:"center center",height:"300px"}}),l.a.createElement(u.a.Body,{className:"d-flex flex-column"},l.a.createElement("h4",null,e.name),l.a.createElement("p",{className:"flex-grow-1"},l.a.createElement("strong",null,e.name)," ",e.biography)))),l.a.createElement(o.a,{sm:6,xs:10,className:"d-md-none"},l.a.createElement("div",{className:"card card-sm card-body flex-row align-items-center"},l.a.createElement("div",{className:"avatar d-none d-sm-block avatar-lg rounded-circle",style:{backgroundImage:`url(${e.photoURL})`,backgroundSize:"cover",backgroundPosition:"center center"}}),l.a.createElement("div",{className:"avatar d-sm-none d-xs-block avatar-xlg rounded-circle",style:{backgroundImage:`url(${e.photoURL})`,backgroundSize:"cover",backgroundPosition:"center center"}}),l.a.createElement("div",{className:"ml-3"},l.a.createElement("h5",{className:"mb-0"},e.name),l.a.createElement("span",null,e.title)))));f.propTypes={member:h};var v=f,b=t(9),E=t(51);var y=()=>{const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{E.a.collection("team").get().then(e=>{a(e.docs.map(e=>e.data()))})},[]),e};var N=()=>{const e=y();return l.a.createElement("section",{className:"has-divider bg-primary-alt"},l.a.createElement("div",{className:"divider flip-y"},l.a.createElement(b.a,{src:d.a,alt:"graphical divider"})),l.a.createElement(i.a,null,l.a.createElement(m.a,{className:"mb-4"},l.a.createElement(o.a,null,l.a.createElement("h2",{className:"h1"},"The PHYFF Team"))),l.a.createElement(m.a,{className:"justify-content-center"},e.sort((e,a)=>e.order-a.order).map(e=>l.a.createElement(v,{member:e,key:e.name})))))};var w=()=>l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center justify-content-around"},l.a.createElement("div",{className:"col-md-5 col-xl-6 mb-4 mb-md-0"},l.a.createElement("img",{src:"/img/thomas-interview.jpg",style:{width:"70%"},alt:"Mission",className:"rounded shadow-3d"})),l.a.createElement("div",{className:"col-md-7 col-xl-6"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-xl-8 col-lg-10"},l.a.createElement("span",{className:"badge badge-primary"},"Our Mission"),l.a.createElement("div",{className:"my-3"},l.a.createElement("span",{className:"h1"},"Help teenage creatives find their voice.")),l.a.createElement("p",{className:"lead"},"PHYFF is a student-run event dedicated to helping teenage creatives find their voice in a rapidly expanding community of young filmmakers. We seek to create an environment where our peers could have their work recognized without massive budgets or extensive training. We have received submissions from Philadelphia schools and ones across the world."))))))),k=t(11);var x=()=>l.a.createElement("section",null,l.a.createElement(i.a,null,l.a.createElement(m.a,{className:"align-items-center justify-content-around"},l.a.createElement(o.a,{md:6,xl:5,className:"mb-3 mb-md-0"},l.a.createElement(m.a,{className:"justify-content-center"},l.a.createElement(o.a,{xl:10,lg:11},l.a.createElement("h3",{className:"display-4"},"Learn, Share, Achieve."),l.a.createElement("p",{className:"lead"},"This festival is a great opportunity to show off work and get critiques, as well as to network with peers from the area and make connections. Filmmaking experts will judge and rank submitted films in four categories: narrative, documentary, experimental, and screenplay. At each festival, we offer several workshops on a variety of common and niche filmmaking focuses."),l.a.createElement(k.Link,{to:"/winners",className:"lead hover-arrow"},"See Last Year's Winners")))),l.a.createElement(o.a,{md:5,lg:6,className:"mb-3 mb-md-0"},l.a.createElement("div",{className:"image-collage"},l.a.createElement("a",{"data-fancybox":"Collage Gallery",className:"d-none d-lg-block"},l.a.createElement("div",{"data-jarallax-element":"0 12"},l.a.createElement("img",{src:"/img/workshop.jpg",alt:"Description",className:"rounded","data-aos":"fade-right"}))),l.a.createElement("a",{"data-fancybox":"Collage Gallery"},l.a.createElement("div",{"data-jarallax-element":"0 6"},l.a.createElement("img",{src:"/img/presentation-2.jpg",alt:"Description",className:"rounded","data-aos":"fade-up"}))),l.a.createElement("a",{"data-fancybox":"Collage Gallery",className:"d-none d-lg-block"},l.a.createElement("div",{"data-jarallax-element":"0 -12"},l.a.createElement("img",{src:"/img/awards-1.jpg",alt:"Description",className:"rounded","data-aos":"fade-left"}))))))));var j=()=>l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center justify-content-around"},l.a.createElement("div",{className:"col-md-5 col-xl-6 mb-4 mb-md-0"},l.a.createElement("img",{src:"/img/Eli-headshot.jpeg",style:{width:"70%"},alt:"Mission",className:"rounded shadow-3d"})),l.a.createElement("div",{className:"col-md-7 col-xl-6"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-xl-12 col-lg-10"},l.a.createElement("span",{className:"badge badge-primary"},"Founders Note"),l.a.createElement("div",{className:"my-3"},l.a.createElement("span",{className:"h1"},"Creating a community of filmmakers.")),l.a.createElement("p",{className:"lead"},"When I was in high school I loved filmmaking, but I was more of a cinematographer and an editor than a writer or a director. I wanted to meet people who inspired me and people I could work with. I found myself wishing that there was a place for people like me, for kids who loved film to meet each other and swap stories and ideas and learn about film. At the same time, I was looking for film festivals to show off some projects I was proud of, but I kept getting turned away by the prospect of competing with college students and professionals. That's when I brought my idea for the GFS Film Festival to the newly formed film club with Sarah, Noah, Hyunji, and Adina. I'm so happy to see what PHYFF has become in the years since I graduated, and I can't wait to watch new young filmmakers explore their passion in the brilliant PHYFF community!\" - Eli Eisenstein, PHYFF Co-Founder."),l.a.createElement("a",{href:"https://thephiladelphiacitizen.org/philadelphia-youth-film-festival/",URL:!0,className:"lead hover-arrow"},"See us in the news!")))))));a.default=Object(r.a)(()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{data:s}),l.a.createElement(w,null),l.a.createElement(x,null),l.a.createElement(j,null),l.a.createElement(N,null)))},51:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(60),l=t.n(n);t(64),t(65),t(61);l.a.initializeApp({apiKey:"AIzaSyBQ45K6tmg-PUiQnXcaOPbDAfzTmeVDMbA",authDomain:"phyff-dea73.firebaseapp.com",databaseURL:"https://phyff-dea73.firebaseio.com",projectId:"phyff-dea73",storageBucket:"phyff-dea73.appspot.com",messagingSenderId:"504901127886",appId:"1:504901127886:web:d462db15b3072bd1ca8a9f",measurementId:"G-L593Z52SFT"}),l.a.analytics();const r=l.a.firestore();l.a.storage()},52:function(e,a,t){"use strict";var n=t(0),l=t(51);a.a=()=>{const[e,a]=Object(n.useState)({isLoaded:!1});return Object(n.useEffect)(()=>{l.a.collection("event").doc("info").get().then(e=>{console.log(e.data()),e.exists&&a({...e.data(),isLoaded:!0})})},[]),e}},53:function(e,a,t){"use strict";a.a="/img/divider-3.svg"},54:function(e,a,t){"use strict";a.a="/img/deco-lines-5.svg"},55:function(e,a,t){"use strict";a.a=e=>[{name:"address",icon:"/img/marker-1.svg",text:null!=e?e:"",href:"https://www.google.com/maps/search/?api=1&query="+e},{name:"email",icon:"/img/mail.svg",text:"phillyyouthfilmfest@gmail.com",href:"mailto:phillyyouthfilmfest@gmail.com"},{name:"instagram",icon:"/img/instagram.svg",text:"@phillyyouthfilmfest",href:"https://www.instagram.com/phillyyouthfilmfest/"},{name:"facebook",icon:"/img/facebook.svg",text:"@phyff19",href:"https://www.facebook.com/phyff19/"},{name:"youtube",icon:"/img/youtube.svg",text:"Philly Youth Film Fest",href:"https://www.youtube.com/channel/UCNNgWQxyh9mVcPV0ZSk0w1Q"}]},56:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(48),c=t(34),s=t(35),i=t(49),m=t(22),o=t(11),d=t(54),u=t(55),g=t(9);var p=[[{name:"Winners",to:"/winners"},{name:"About",to:"/about"},{name:"Virtual Screening Room",to:null,dropdownContent:[{name:"All Categories",to:"/virtual-screening-room"},{name:"Reels",to:"/virtual-screening-room/reels"},{name:"Award Winners",to:"/virtual-screening-room/award-winners"},{name:"Films",to:"/virtual-screening-room/films"},{name:"Screenplays",to:"/virtual-screening-room/screenplays"}]}],[{name:"Submit",to:"/submit"},{name:"Attend",to:"/attend"}]],h=t(52);var f=()=>{const{address:e,submissionDeadline:a}=Object(h.a)(),t=Date.now()<(null==a?void 0:a.toDate().getTime());return l.a.createElement("footer",{className:"pb-4 bg-primary-3 text-light layer-4",id:"footer"},l.a.createElement(r.a,null,l.a.createElement(c.a,{className:"mb-5"},l.a.createElement(s.a,null,l.a.createElement("div",{className:"card card-body border-0 o-hidden mb-0 bg-primary text-light"},l.a.createElement("div",{className:"position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"},l.a.createElement("div",{className:"h3 text-center mb-md-0"},t?"Submit to PHYFF Today!":"Attend the Festival!"),l.a.createElement(m.LinkContainer,{to:t?"/submit":"/attend"},l.a.createElement(i.a,{variant:"white",size:"lg"},t?"Submit":"Attend"))),l.a.createElement("div",{className:"decoration middle-y right scale-2 layer-0"},l.a.createElement(g.a,{src:d.a,className:"bg-primary-2"})),l.a.createElement("div",{className:"decoration bottom right layer-0"},l.a.createElement(g.a,{src:"/img/deco-lines-6.svg",className:"bg-primary-2-alt"}))))),l.a.createElement(c.a,{className:"mb-5"},l.a.createElement(s.a,{className:"col-6 col-lg-3 col-xl-2"},l.a.createElement("h5",null,"Navigate"),l.a.createElement("ul",{className:"nav flex-column"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.Link,{to:"/",className:"nav-link"},"Home")),p.map(e=>l.a.createElement("div",{key:e[0].name},l.a.createElement("span",{className:"footer-divider"}),e.map(e=>l.a.createElement("li",{className:"nav-item",key:e.name},l.a.createElement(o.Link,{to:e.to,className:"nav-link"},e.name))))))),l.a.createElement(s.a,{className:"col-6 col-lg"},l.a.createElement("h5",null,"Contact"),l.a.createElement("ul",{className:"list-unstyled"},Object(u.a)(e).slice(0,3).map(({icon:e,text:a,href:t})=>l.a.createElement("li",{className:"mb-2 d-flex",key:t},l.a.createElement(g.a,{src:e,className:"icon"}),l.a.createElement("div",{className:"ml-3 w-100"},l.a.createElement("a",{href:t,className:"w-100",style:{wordWrap:"break-word",wordBreak:"break-all"}},a)))))))))},v=t(276),b=t(306),E=t(310),y=t(3),N=t(13);var w=({delay:e})=>{const[a,t]=Object(n.useState)(window.scrollY);return Object(n.useEffect)(()=>{const a=((e,a,t)=>{let n=(new Date).getTime();return(...l)=>{const r=(new Date).getTime();(r-n>=a||t(...l))&&(n=r,e(...l))}})(()=>{t(window.scrollY)},null!=e?e:10,()=>window.scrollY<=0);return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}}),a};var k=()=>{var e;const a=w({delay:50}),t=null!==(e={"/":{classNames:"navbar-transparent",overlay:!0,isDark:!0}}[Object(y.l)().pathname])&&void 0!==e?e:{classNames:"navbar-transparent",overlay:!0,isDark:!0},n=l.a.forwardRef(({children:e,onClick:a},t)=>l.a.createElement(v.a.Link,{as:o.Link,onClick:e=>{e.preventDefault(),a(e)},ref:t},e));return l.a.createElement(E.a,{variant:t.isDark?"dark":"light",fixed:"top",expand:"lg",className:"px-5 "+(a>0?"navbar-background":"navbar-transparent")},l.a.createElement(E.a.Brand,{className:"fade-page"},l.a.createElement(o.Link,{to:"/"},l.a.createElement("img",{alt:"Phyff",style:{height:"2em"},src:(t.isDark,N.a)}))),l.a.createElement(E.a.Toggle,null,l.a.createElement(g.a,{className:"icon",src:"/img/menu.svg",alt:"menu interface icon"})),l.a.createElement(E.a.Collapse,{className:"justify-content-end",id:"basic-navbar-collapse"},l.a.createElement(v.a,null,p[0].map(({to:e,name:a,dropdownContent:t})=>l.a.createElement(l.a.Fragment,null,t?l.a.createElement(b.a,null,l.a.createElement(b.a.Toggle,{as:n},a),l.a.createElement(b.a.Menu,null,t.map(e=>l.a.createElement(m.LinkContainer,{to:e.to,activeClassName:""},l.a.createElement(b.a.Item,null,e.name))))):l.a.createElement(v.a.Link,{as:o.Link,to:e,key:a},a)))),l.a.createElement(v.a,{className:"ml-auto"},p[1].map(({to:e,name:a},t)=>l.a.createElement(v.a.Link,{as:o.Link,to:e,key:a},l.a.createElement(i.a,{className:"btn-"+["primary-2","primary"][t%2]},a))))))};a.a=e=>a=>l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(e,a),l.a.createElement(f,null))},57:function(e,a,t){"use strict";a.a="/img/deco-blob-1.svg"},58:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(48),c=t(34),s=t(35),i=t(53),m=t(12),o=t(57),d=t(14),u=t(9),g=t(2),p=t.n(g),h=p.a.shape({title:p.a.string.isRequired,caption:p.a.string,image:p.a.string,color:p.a.string,dividerColor:p.a.string,decorationStyle:p.a.number,decoColors:p.a.shape({primary:p.a.string,secondary:p.a.string})});const f=({data:e})=>{var a,t,n,r;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"decoration middle-y right d-none d-xl-block","data-jarallax-element":"50 50"},l.a.createElement(u.a,{src:o.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),l.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"100"},l.a.createElement(u.a,{src:m.a,className:null!==(n=null===(r=e.decoColors)||void 0===r?void 0:r.secondary)&&void 0!==n?n:"bg-primary-2"})))};f.propTypes={data:h};const v=({data:e})=>{var a,t,n,r;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"decoration middle-y right scale-2 d-none d-xl-block","data-jarallax-element":"50 50"},l.a.createElement(u.a,{src:d.a,className:null!==(a=null===(t=e.decoColors)||void 0===t?void 0:t.primary)&&void 0!==a?a:"bg-primary-3"})),l.a.createElement("div",{className:"decoration middle-y left scale-3 d-none d-xl-block","data-jarallax-element":"100"},l.a.createElement(u.a,{src:"/img/deco-dots-3.svg",className:null!==(n=null===(r=e.decoColors)||void 0===r?void 0:r.secondary)&&void 0!==n?n:"bg-primary-2"})))};v.propTypes={data:h};const b=({data:e})=>{var a,t,n,m;return l.a.createElement("section",{className:(null!==(a=e.color)&&void 0!==a?a:"bg-primary-2")+" header-inner o-hidden has-divider"},l.a.createElement("img",{src:null!==(t=e.image)&&void 0!==t?t:"/img/event-1.jpg",alt:e.title,className:"bg-image blend-mode-multiply"}),l.a.createElement(r.a,{className:"layer-2"},l.a.createElement(c.a,{className:"py-6 text-center justify-content-center align-items-center layer-2 text-light"},l.a.createElement(s.a,{lg:10,xl:8},l.a.createElement("h1",{className:"display-4"},"submit"===window.location.pathname.split("/")[1]?l.a.createElement("a",{href:"https://filmfreeway.com/phyff"},e.title):e.title),"string"==typeof e.caption&&l.a.createElement("p",{className:"lead mb-0"},e.caption),"function"==typeof e.caption&&e.caption()))),l.a.createElement("div",{className:"decoration-wrapper"},[l.a.createElement(f,{data:e}),l.a.createElement(v,{data:e})][(null!==(n=e.decorationStyle)&&void 0!==n?n:0)%2]),l.a.createElement("div",{className:"divider layer-1"},l.a.createElement(u.a,{src:i.a,className:null!==(m=e.dividerColor)&&void 0!==m?m:"bg-white"})))};b.propTypes={data:h};a.a=b}}]);