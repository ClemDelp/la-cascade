(this["webpackJsonpla-cascade"]=this["webpackJsonpla-cascade"]||[]).push([[0],{44:function(e,a,t){e.exports=t.p+"static/media/chalet.07bc1c26.png"},45:function(e,a,t){e.exports=t.p+"static/media/cascade.1157577f.png"},46:function(e,a,t){e.exports=t.p+"static/media/mb_vue.d3a0bba3.png"},47:function(e,a,t){e.exports=t.p+"static/media/rando.e75a2f32.png"},52:function(e,a,t){e.exports=t.p+"static/media/image1.58ac2c28.jpeg"},53:function(e,a,t){e.exports=t.p+"static/media/image2.d3fef75a.jpeg"},54:function(e,a,t){e.exports=t.p+"static/media/image3.ed183654.jpeg"},55:function(e,a,t){e.exports=t.p+"static/media/image4.7858ba6f.jpeg"},56:function(e,a,t){e.exports=t.p+"static/media/image5.64e89d39.jpeg"},57:function(e,a,t){e.exports=t.p+"static/media/image6.b2b485a2.jpeg"},58:function(e,a,t){e.exports=t.p+"static/media/image7.3b23f374.jpeg"},59:function(e,a,t){e.exports=t.p+"static/media/image8.44224108.jpeg"},60:function(e,a,t){e.exports=t.p+"static/media/image9.77d01c58.jpeg"},68:function(e,a,t){e.exports=t(83)},73:function(e,a,t){},74:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),s=(t(73),t(23)),m=t(19);function i(){return l.a.createElement("div",{className:"center flex justify-center",style:{width:"100%"}},l.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?src=svn6jt10cme9kucd66kc63f7rc%40group.calendar.google.com&ctz=Europe%2FParis",style:{border:0},width:"800",height:"600",frameborder:"0",scrolling:"no"}))}var o=t(44),u=t.n(o),p=t(45),E=t.n(p),d=t(46),f=t.n(d),h=t(47),g=t.n(h),v=(t(74),t(30)),b=t(21),N=t(48),w=t(49),y=t(15),x=t(62),A=function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(N.a)(this,Object(w.a)(a).call(this,e))).submitForm=t.submitForm.bind(Object(y.a)(t)),t.state={status:""},t}return Object(x.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.state.status;return l.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mknraeek",method:"POST"},l.a.createElement("div",{className:"bold"},"Sujet:"),l.a.createElement("select",{name:"_subject",className:"mb2"},l.a.createElement("option",{value:"".concat("CASCADE -"," information")},"Information"),l.a.createElement("option",{value:"".concat("CASCADE -"," adhesion")},"Demandes d'adh\xe9sion"),l.a.createElement("option",{value:"".concat("CASCADE -"," reservation")},"R\xe9servation"),l.a.createElement("option",{value:"".concat("CASCADE -"," annulation")},"Annulation de r\xe9servation")),l.a.createElement("div",{className:"bold"},"Votre email:"),l.a.createElement("input",{type:"text",name:"email"}),l.a.createElement("div",{className:"bold"},"Message:"),l.a.createElement("textarea",{name:"message"}),"SUCCESS"===e?l.a.createElement("p",null,"Message envoy\xe9, merci!"):l.a.createElement("button",null,"Envoyer"),"ERROR"===e&&l.a.createElement("p",null,"Ooops! Nous avons rencontr\xe9 une erreur merci de nous contacter directement au ","06599991666","."))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},l.send(n)}}]),a}(l.a.Component),C=t(107),S=t(51),k=t.n(S);function j(){return l.a.createElement("div",{className:"accueil mb3"},l.a.createElement("img",{src:u.a,alt:"logo",style:{width:"100%"}}),l.a.createElement("div",{className:"flex p2"},l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("h1",null,"La Cascade"),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb2"},"Affili\xe9 au SATUS, ",l.a.createElement("a",{href:"http://www.satus-geneve.ch",target:"_blank"},"www.satus-geneve.ch"),", La Cascade est un club familial qui offre \xe0 ses membres des activit\xe9s en montagne et un chalet situ\xe9 \xe0 La Cry, au-dessus de St Gervais-les-Bains."),l.a.createElement("p",{className:"mb2"},"D\xe8s sa cr\xe9ation, le club fonctionne gr\xe2ce au b\xe9n\xe9volat de ses membres et t\xe9moigne d\u2019une volont\xe9 de permettre \xe0 tous de profiter de la montagne."),l.a.createElement("p",{className:"mb2"},"Le chalet, construit par les membres fondateurs dans les ann\xe9es 1940, est entretenu par ses membres lors de journ\xe9es de travail en commun."),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"mr1"},l.a.createElement(C.a,{variant:"outlined",color:"primary"},l.a.createElement(m.b,{className:"App__header--link",to:"/la-cascade?page=comite"},"Le comit\xe9"))),l.a.createElement(C.a,{variant:"outlined",color:"primary",startIcon:l.a.createElement(k.a,null)},l.a.createElement(m.b,{className:"App__header--link",to:"/la-cascade/pdf/CASCADE_STATUTS_2019.pdf",target:"_blank"},"Les status du club")))),l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("h1",null,"Contactez-nous"),l.a.createElement("hr",null),l.a.createElement(A,null))),l.a.createElement("div",{className:"flex p2"},l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("h1",null,"Vue du Mont Blanc depuis le chalet"),l.a.createElement("p",{className:"mb2"},"Le chalet jouit d\u2019une situation exceptionnelle, face au Mont Blanc !"),l.a.createElement("p",{className:"mb2"},"Il invite \xe0 la d\xe9couverte d\u2019un domaine magnifique tant pour la randonn\xe9e estivale que pour le ski."),l.a.createElement("p",{className:"mb2"},"Le site web de St Gervais www.saintgervais.com. donne un avant-go\xfbt des possibilit\xe9s qu\u2019offre cette r\xe9gion, tant pour le ski que pour les itin\xe9raires \xe0 raquettes, les randonn\xe9es ou l\u2019alpinisme.")),l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("img",{src:f.a,alt:"logo",style:{width:"100%"}}))),l.a.createElement("div",{className:"flex p2"},l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("img",{src:g.a,alt:"logo",style:{width:"100%"}})),l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("h1",null,"Le chalet en \xe9t\xe9, d\xe9part de randonn\xe9es"),l.a.createElement("p",{className:"mb2"},"Le chalet en \xe9t\xe9, d\xe9part de randonn\xe9es"),l.a.createElement("p",{className:"mb2"},"Pour une pr\xe9sentation de ces activit\xe9s : ",l.a.createElement("a",{href:"http://www.saintgervais.com/sport-et-montagne/randonnee-et-alpinisme",target:"_blank"},"www.saintgervais.com/sport-et-montagne/randonnee-et-alpinisme")))),l.a.createElement("div",{className:"flex p2"},l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("h1",null,"Le chalet en hiver, acc\xe8s au domaine skiable"),l.a.createElement("p",{className:"mb2"},"du Bettex, Saint-Gervais, Saint-Nicolas de V\xe9roce, Meg\xe8ve - Rochebrune - C\xf4te 2000 ..."),l.a.createElement("p",{className:"mb2"},"Pour une pr\xe9sentation de ces kilom\xe8tres de pistes: ",l.a.createElement("a",{href:"http://www.ski-saintgervais.com/fr/",target:"_blank"},"www.ski-saintgervais.com/fr/")),l.a.createElement("p",{className:"mb2"},"Une navette gratuite passe \xe0 c\xf4t\xe9 du chalet et permet de rejoindre la station du Bettex https://www.ski-saintgervais.com/fr/h11-liens")),l.a.createElement("div",{className:"px4 col col-6"},l.a.createElement("img",{src:E.a,alt:"logo",style:{width:"100%"}}))))}var L=t(52),D=t.n(L),R=t(53),O=t.n(R),I=t(54),T=t.n(I),_=t(55),B=t.n(_),G=t(56),M=t.n(G),U=t(57),q=t.n(U),F=t(58),H=t.n(F),P=t(59),V=t.n(P),z=t(60),J=t.n(z);function W(){var e=[D.a,O.a,T.a,B.a,M.a,q.a,H.a,V.a,J.a];return l.a.createElement("div",null,l.a.createElement("h1",{className:"px3"},"Galerie"),l.a.createElement("div",{className:"center"},e&&e.map((function(e,a){return l.a.createElement("img",{key:a,className:"p1",src:e,alt:"".concat(a)})}))))}var X=t(111),K=t(112),Z=t(113),$=t(110),Q=t(17),Y=t.n(Q),ee=[{status:"PR\xc9SIDENTE",name:"Follonier Val\xe9rie",phone:"+41 (0)79 416 24 10",email:"Valtouse8573@gmail.com"},{status:"Vice-pr\xe9sidente - Responsable r\xe9servations",name:"Latini Magali",phone:"+41(0)79 312 99 42",email:"magalilatini@gmail.com"},{status:"Tr\xe9sori\xe8re",name:"Hoffmeyer Dani\xe8le",phone:"+41 (0)79 856 98 03",email:"daniele.hoffmeyer@gmail.com"},{status:"Responsable Sports et loisirs",name:"Muller Jacques",phone:"+41 (0)79 935 01 11",email:"jf.muller1@gmail.com"},{status:"Secr\xe9taire",name:"Powell Jacqueline",phone:"+41(0)76 383 45 94",email:"jacq.powell@gmail.com"},{status:"",name:"Borner Alfred",phone:"+41(0)79 449 57 16",email:"freddy.borner@icloud.com"},{status:"",name:"Hoffmeyer Fabien",phone:"+41 (0)78 791 89 23",email:"befa1227@hotmail.com"},{status:"",name:"Hoffmeyer Georges",phone:"+33 (0)78 988 61 43",email:"georges.hoffmeyer@me.com"}],ae=Object($.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function te(){var e=ae();return l.a.createElement("div",null,l.a.createElement("h1",null,"Le comit\xe9 2019 / 2020"),l.a.createElement("div",{className:"flex flex-wrap justify-center items-center"},ee&&ee.map((function(a,t){return l.a.createElement(X.a,{key:t,className:"".concat(e.root," m2")},l.a.createElement(K.a,null,l.a.createElement(Y.a,{color:"primary"}),l.a.createElement(Z.a,{variant:"h5",component:"h2"},a.status),l.a.createElement(Z.a,{className:e.title,color:"textSecondary",gutterBottom:!0},a.name),l.a.createElement(Z.a,{className:e.title,color:"textSecondary",gutterBottom:!0},a.email," | ",a.phone)))}))))}var ne=[{title:"CAPACIT\xc9 DU CHALET",icon:l.a.createElement(Y.a,{color:"primary"}),content:l.a.createElement("ul",null,l.a.createElement("li",null,"15 personnes pour les nuits"),l.a.createElement("li",null,"50 personnes au r\xe9fectoire"))},{title:"CUISINE",icon:l.a.createElement(Y.a,{color:"primary"}),content:l.a.createElement("ul",null,l.a.createElement("li",null,"3 cuisini\xe8res \xe0 gaz"),l.a.createElement("li",null,"2 frigos"),l.a.createElement("li",null,"Garde manger"))},{title:"AU SOUS SOL",icon:l.a.createElement(Y.a,{color:"primary"}),content:l.a.createElement("ul",null,l.a.createElement("li",null,"4 WC"),l.a.createElement("li",null,"Douches femme et homme"))},{title:"CABANE \xc0 SKIS",icon:l.a.createElement(Y.a,{color:"primary"}),content:""},{title:"LOCAL DE R\xc9UNION",icon:l.a.createElement(Y.a,{color:"primary"}),content:""},{title:"CAVE",icon:l.a.createElement(Y.a,{color:"primary"}),content:""},{title:"CHAUFFERIE",icon:l.a.createElement(Y.a,{color:"primary"}),content:""}],le=Object($.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function re(){var e=le();return l.a.createElement("div",null,l.a.createElement("h1",null,"Le chalet"),l.a.createElement("div",{className:"flex flex-wrap justify-center items-center"},ne&&ne.map((function(a,t){var n=a.title,r=a.icon,c=a.content;return l.a.createElement(X.a,{key:t,className:"".concat(e.root," m2"),style:{height:"180px"}},l.a.createElement(K.a,null,r,l.a.createElement(Z.a,{variant:"h5",component:"h2"},n),c))}))))}function ce(){return l.a.createElement("div",{className:"full-width"},l.a.createElement("div",{className:"flex flex-column justify-center items-center"},l.a.createElement("h1",null,"En cas de probl\xe8me"),l.a.createElement("h2",null,"CHAUFFAGE"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"T\xe9l. \xe0 l'entreprise Pichol"),l.a.createElement("p",null,"+33 450 78 32 41"),l.a.createElement("p",null,"ou"),l.a.createElement("p",null,"Georges Hoffmeyer"),l.a.createElement("p",null,"+33 450 94 44 68"),l.a.createElement("h2",null,"GAZ"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"Allez \xe0 une station d'essence avec les bonbonnes vide"),l.a.createElement("h2",null,"EL\xc9CTRICIT\xc9"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"Georges Hoffmeyer"),l.a.createElement("p",null,"+33 450 94 44 68"),l.a.createElement("h2",null,"EAUX"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"Mairie de Saint Gervais"),l.a.createElement("p",null,"+33 450 78 27 69"),l.a.createElement("h2",null,"AUTRES"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"Pompier : 18"),l.a.createElement("p",null,"Ambulance : 17")))}function se(){return l.a.createElement("div",{className:"full-width"},l.a.createElement("div",{className:"flex flex-column justify-center items-center"},l.a.createElement("h1",null,"Tarif 2017"),l.a.createElement("h2",null,"MEMBRE ACTIF CASCADE"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"Jusqu'\xe0 9 ans r\xe9volus 0.- \u20ac (Gratuit)"),l.a.createElement("p",null,"De 10 \xe0 17 ans 6.- \u20ac"),l.a.createElement("p",null,"D\xe8s 18 ans r\xe9volus 12.- \u20ac"),l.a.createElement("h2",null,"MEMBRE PASSIF CASCADE"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"Carte de membre passif valable 1 ann\xe9e"),l.a.createElement("p",null,"Jusqu'\xe0 9 ans r\xe9volus 0.- \u20ac (Gratuit)"),l.a.createElement("p",null,"De 10 \xe0 17 ans 10.- \u20ac"),l.a.createElement("p",null,"D\xe8s 18 ans r\xe9volus 20.- \u20ac"),l.a.createElement("h2",null,"DIRECTIVE"),l.a.createElement("hr",{className:"full-width"}),l.a.createElement("p",null,"Au moins un membre actif doit \xeatre pr\xe9sent lors de s\xe9jour au chalet")))}t(81);var me=t(61),ie=t(114),oe=t(115),ue=t(116),pe=t(117),Ee=[{link:"/la-cascade",name:"Accueil"},{link:"/la-cascade?page=galerie",name:"Galerie"},{link:"/la-cascade?page=disponibility",name:"Disponibilit\xe9s"},{link:"/la-cascade?page=comite",name:"Comit\xe9"}],de=Object($.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function fe(){var e=l.a.useState(null),a=Object(me.a)(e,2),t=a[0],n=a[1],r=function(){n(null)},c=de();return l.a.createElement("div",{className:c.root},l.a.createElement(ie.a,{position:"static"},l.a.createElement(oe.a,null,l.a.createElement(Z.a,{variant:"h6",className:c.title},l.a.createElement(m.b,{className:"App__header--link",to:"/la-cascade"},"La Cascade")),Ee&&Ee.map((function(e,a){return l.a.createElement(C.a,{key:a,color:"inherit"},l.a.createElement(m.b,{className:"App__header--link",to:e.link},e.name))})),l.a.createElement(C.a,{color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)}},"Information"),l.a.createElement(ue.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:r},[{link:"/la-cascade?page=chalet",name:"Le chalet"},{link:"/la-cascade?page=tarifs",name:"Les tarifs"},{link:"/la-cascade?page=problemes",name:"En cas de probl\xe8me"}].map((function(e,a){return l.a.createElement(m.b,{key:a,className:"App__header--link",to:e.link},l.a.createElement(pe.a,{onClick:r},e.name))}))))))}t(82);function he(){return l.a.createElement("div",{className:"footer py1 center"},l.a.createElement("h1",null,"La Cascade"),"Copyright \xa9 2020. Tous droits r\xe9serv\xe9s.")}function ge(){var e=new URLSearchParams(Object(s.d)().search).get("page");return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"fixed",style:{width:"100%"}},l.a.createElement(fe,null)),l.a.createElement("div",{className:"flex pt4"},(""===e||null===e)&&l.a.createElement(j,null),"galerie"===e&&l.a.createElement(W,null),"comite"===e&&l.a.createElement(te,null),"disponibility"===e&&l.a.createElement(i,null),"chalet"===e&&l.a.createElement(re,null),"problemes"===e&&l.a.createElement(ce,null),"tarifs"===e&&l.a.createElement(se,null)),l.a.createElement(he,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement((function(){return l.a.createElement(m.a,null,l.a.createElement(ge,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.41248a1e.chunk.js.map