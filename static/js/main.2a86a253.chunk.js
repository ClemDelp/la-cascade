(this["webpackJsonpla-cascade"]=this["webpackJsonpla-cascade"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/chalet.07bc1c26.png"},32:function(e,t,a){e.exports=a.p+"static/media/image1.58ac2c28.jpeg"},33:function(e,t,a){e.exports=a.p+"static/media/image2.d3fef75a.jpeg"},34:function(e,t,a){e.exports=a.p+"static/media/image3.ed183654.jpeg"},35:function(e,t,a){e.exports=a.p+"static/media/image4.7858ba6f.jpeg"},36:function(e,t,a){e.exports=a.p+"static/media/image5.64e89d39.jpeg"},37:function(e,t,a){e.exports=a.p+"static/media/image6.b2b485a2.jpeg"},38:function(e,t,a){e.exports=a.p+"static/media/image7.3b23f374.jpeg"},39:function(e,t,a){e.exports=a.p+"static/media/image8.44224108.jpeg"},40:function(e,t,a){e.exports=a.p+"static/media/image9.77d01c58.jpeg"},46:function(e,t,a){e.exports=a(60)},51:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),i=(a(51),a(16)),o=a(15);function s(){return r.a.createElement("div",{className:"center flex justify-center",style:{width:"100%"}},r.a.createElement("iframe",{src:"http://calendar.google.com/calendar/embed?src=svn6jt10cme9kucd66kc63f7rc%40group.calendar.google.com&ctz=Europe%2FParis",style:{border:0},width:"800",height:"600",frameborder:"0",scrolling:"no"}))}var m=a(28),u=a.n(m),p=(a(52),a(29)),d=a(19),E=a(30),h=a(31),f=a(12),v=a(42),g=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).submitForm=a.submitForm.bind(Object(f.a)(a)),a.state={status:""},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.status;return r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mknraeek",method:"POST"},r.a.createElement("div",{className:"bold"},"Sujet:"),r.a.createElement("select",{name:"_subject",className:"mb2"},r.a.createElement("option",{value:"".concat("CASCADE -"," information")},"Information"),r.a.createElement("option",{value:"".concat("CASCADE -"," adhesion")},"Demandes d'adh\xe9sion"),r.a.createElement("option",{value:"".concat("CASCADE -"," reservation")},"R\xe9servation"),r.a.createElement("option",{value:"".concat("CASCADE -"," annulation")},"Annulation de r\xe9servation")),r.a.createElement("div",{className:"bold"},"Votre email:"),r.a.createElement("input",{type:"text",name:"email"}),r.a.createElement("div",{className:"bold"},"Message:"),r.a.createElement("textarea",{name:"message"}),"SUCCESS"===e?r.a.createElement("p",null,"Message envoy\xe9, merci!"):r.a.createElement("button",null,"Envoyer"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! Nous avons rencontr\xe9 une erreur merci de nous contacter directement au ","06599991666","."))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)}}]),t}(r.a.Component),b=a(83);function y(){return r.a.createElement("div",{className:"accueil mb3"},r.a.createElement("img",{src:u.a,alt:"logo",style:{width:"100%"}}),r.a.createElement("div",{className:"p2"},r.a.createElement("div",{className:"px4 col col-6"},r.a.createElement("h1",null,"La Cascade"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb2"},"L'histoire du chalet ???? ..... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset "),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"mr1"},r.a.createElement(b.a,{variant:"outlined",color:"primary",href:"/comite"},"Le comit\xe9")),r.a.createElement(b.a,{variant:"outlined",color:"primary",href:"/club"},"Le club"))),r.a.createElement("div",{className:"px4 col col-6"},r.a.createElement("h1",null,"Contactez-nous"),r.a.createElement("hr",null),r.a.createElement(g,null))))}var N=a(32),x=a.n(N),j=a(33),C=a.n(j),k=a(34),w=a.n(k),A=a(35),S=a.n(A),L=a(36),O=a.n(L),R=a(37),_=a.n(R),D=a(38),F=a.n(D),I=a(39),G=a.n(I),M=a(40),q=a.n(M);function B(){var e=[x.a,C.a,w.a,S.a,O.a,_.a,F.a,G.a,q.a];return r.a.createElement("div",null,r.a.createElement("h1",{className:"px3"},"Galerie"),r.a.createElement("div",{className:"center"},e&&e.map((function(e,t){return r.a.createElement("img",{key:t,className:"p1",src:e,alt:"".concat(t)})}))))}function H(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Comit\xe9"))}function z(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Le club"))}a(56);var J=a(80),P=a(84),T=a(81),U=a(82),W=Object(J.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function X(){var e=W();return r.a.createElement("div",{className:e.root},r.a.createElement(P.a,{position:"static"},r.a.createElement(T.a,null,r.a.createElement(U.a,{variant:"h6",className:e.title},"La Cascade"),r.a.createElement(b.a,{color:"inherit"},r.a.createElement(i.b,{className:"App__header--link",to:"/"},"Accueil")),r.a.createElement(b.a,{color:"inherit"},r.a.createElement(i.b,{className:"App__header--link",to:"/galerie"},"Galerie")),r.a.createElement(b.a,{color:"inherit"},r.a.createElement(i.b,{className:"App__header--link",to:"/disponibility"},"Disponibilit\xe9s")),r.a.createElement(b.a,{color:"inherit"},r.a.createElement(i.b,{className:"App__header--link",to:"/comite"},"Comit\xe9")),r.a.createElement(b.a,{color:"inherit"},r.a.createElement(i.b,{className:"App__header--link",to:"/club"},"Le Club")))))}a(59);function V(){return r.a.createElement("div",{className:"footer py1 center"},r.a.createElement("h1",null,"La Cascade"),"Copyright \xa9 2020. Tous droits r\xe9serv\xe9s.")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"fixed",style:{width:"100%"}},r.a.createElement(X,null)),r.a.createElement("div",{className:"flex pt4"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(o.a,{path:"/galerie"},r.a.createElement(B,null)),r.a.createElement(o.a,{path:"/comite"},r.a.createElement(H,null)),r.a.createElement(o.a,{path:"/club"},r.a.createElement(z,null)),r.a.createElement(o.a,{path:"/disponibility"},r.a.createElement(s,null)))),r.a.createElement(V,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.2a86a253.chunk.js.map