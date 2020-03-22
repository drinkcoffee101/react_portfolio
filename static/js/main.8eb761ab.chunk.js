(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(19),i=a.n(l),c=(a(76),a(77),a(78),a(79),a(9)),o=a(15),s=a(12),m=a(11),u=a(13),d=a(16),f=a(21),p=a(113),h=(a(80),a(112)),b=a(114),g=a(115),E=function(e){var t=e.title,a=e.subTitle,n=e.text;return r.a.createElement(h.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(p.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center py-5"},r.a.createElement(g.a,{md:8,sm:12},t&&r.a.createElement("h1",{id:"title",className:"font-weight-bolder"},t),a&&r.a.createElement("h3",{id:"sub-title",className:"display-4 font-weight-light"},a),n&&r.a.createElement("h3",{id:"text",className:"lead font-weight-light"},n)))))},k=a(26),v=a(48),y=a(30),w=a(24),N=function(e){var t=e.title,a=e.subTitle,n=e.gitHubLink,l=e.videoLink,i=Object(v.b)({opacity:1,from:{opacity:0}});return r.a.createElement(v.a.div,{className:"g-card-info",stlye:i},r.a.createElement("p",{className:"g-card-title"},t),r.a.createElement("p",{className:"g-card-sub-title"},a),r.a.createElement(p.a,{style:{paddingTop:"1rem"}},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"text-center"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"card-link"},r.a.createElement(y.a,{icon:w.a,size:"2x"}))),l?r.a.createElement(g.a,{className:"text-center"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"card-link"},r.a.createElement(y.a,{icon:w.d,size:"2x"}))):"")))},x=a(46),j=function(e){var t=e.item;return r.a.createElement("div",{className:"d-inline-block g-card"},r.a.createElement(x.h,{hover:!0},r.a.createElement("img",{className:"g-card-image",src:t.imgSrc,alt:t.imgSrc}),r.a.createElement(x.d,{className:"flex-center",overlay:"black-strong",style:{borderRadius:"10px"}},r.a.createElement(N,{title:t.title,subTitle:t.subTitle,gitHubLink:t.gitHubLink,videoLink:t.videoLink}))))},C=a(61),S=a.n(C),L=a(62),O=a.n(L),T=a(63),D=a.n(T),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={items:[{id:0,title:"Kindler",subTitle:"Date planning React Native app",imgSrc:O.a,gitHubLink:"https://github.com/satchelsmidt/Date_Planner",videoLink:"https://www.youtube.com/watch?v=9QN2OPpL3Kc&feature=emb_title",selected:!1},{id:1,title:"Deron Coffie",subTitle:"Github",imgSrc:S.a,gitHubLink:"https://github.com/drinkcoffee101",videoLink:"",selected:!1},{id:2,title:"SparkCourse",subTitle:"Electronic music focused course builder using free resoucres found on the web",imgSrc:D.a,gitHubLink:"https://github.com/drinkcoffee101/SparkCourse",videoLink:"https://www.youtube.com/watch?v=DciZfwRgUnc&feature=emb_title",selected:!1}]},a.handleCardClick=function(e){var t=Object(k.a)(a.state.items);t[e].selected=!t[e].selected,t.forEach((function(t){t.id!==e&&(t.selected=!1)})),a.setState({items:t})},a.makeItems=function(e){return n.Children.toArray(e.map((function(e){return r.a.createElement(j,{item:e,click:function(t){return a.handleCardClick(e.id,t)}})})))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.items;return r.a.createElement(p.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(e)))}}]),t}(n.Component),H=function(e){var t=e.homeProps;return r.a.createElement(n.Fragment,null,r.a.createElement(E,{title:t.title,subTitle:t.subTitle,text:t.text}),r.a.createElement(I,null))},R=function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(b.a,{className:"justify-content-center"},r.a.createElement(g.a,{md:8},r.a.createElement("p",null,"Hi! My name is Deron Coffie. I am a full stack web developer with experience in Flask, Express JS, Node JS, MySQL, MongoDB, and React."),r.a.createElement("p",null,"I dream of one day combining my love for art and music with my passion for coding."),r.a.createElement("p",null,"Currently, I am working on gaining more experience with React and Python."),r.a.createElement("p",null,"My latest project, Kindler, is a mobile application built with the goal of providing individuals and those in relationships with the tools to empower them during the decision making process of going out on a date with someone. The app was built using React Native, Node JS, Express JS, and MongoDB."),r.a.createElement("p",null,"If I'm not coding I am probably making music! Check out my tunes on ",r.a.createElement("a",{href:"https://open.spotify.com/artist/4N2fjMIdgYgsbFi1Rziz4m",target:"_blank",rel:"noopener noreferrer"},"Spofity"),"."))))},_=function(e){var t=e.title;return r.a.createElement(n.Fragment,null,r.a.createElement(E,{title:t}),r.a.createElement(R,null))},A=a(65),M=a(64),J=a.n(M),P=[{href:"https://github.com/drinkcoffee101",linkStyle:"github-link",icon:w.a},{href:"https://www.linkedin.com/in/deron-coffie-067a3a3a/",linkStyle:"linkdin-link",icon:w.c},{href:"mailto:dcoffie92@gmail.com",linkStyle:"google-link",icon:w.b},{href:J.a,linkStyle:"resume-link",icon:A.a,message:"(Resume)"}],z=function(e){var t=e.title;return r.a.createElement(n.Fragment,null,r.a.createElement(E,{title:t}),r.a.createElement(p.a,{className:"link-container"},r.a.createElement(b.a,{className:"justify-content-center"},n.Children.toArray(P.map((function(e){return r.a.createElement(g.a,{className:"text-center"},r.a.createElement(p.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:e.linkStyle,download:!0},r.a.createElement(y.a,{icon:e.icon,size:"6x"})))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,e.message?r.a.createElement("span",null,e.message):""))))}))))))},B=a(33),F=a(70),K=function(e){var t=e.title;return r.a.createElement(B.a,{className:"border-bottom",expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(B.a.Brand,null,t),r.a.createElement(B.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(B.a.Collapse,{id:"navbar-toggle"},r.a.createElement(F.a,{className:"ml-auto"},r.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact"))))},G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Deron Coffie",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Adapt | Create | Deliver",subTitle:"Projects that make an impact",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Get in touch"}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.home,a=e.about,n=e.contact,l=e.title;return r.a.createElement(d.a,null,r.a.createElement(p.a,{className:"p-0",fluid:!0},r.a.createElement(K,{title:l}),r.a.createElement(f.a,{path:"/",exact:!0,render:function(){return r.a.createElement(H,{homeProps:t})},subtitle:t.subtitle,text:t.text}),r.a.createElement(f.a,{path:"/about",render:function(){return r.a.createElement(_,{title:a.title})}}),r.a.createElement(f.a,{path:"/contact",render:function(){return r.a.createElement(z,{title:n.title})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a.p+"static/media/arcade.5bbc53b5.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/fire.b8f32feb.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/spark.f6058b58.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/DeronCoffieResume.1433f23d.pdf"},71:function(e,t,a){e.exports=a(108)},79:function(e,t,a){},80:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.8eb761ab.chunk.js.map