(this["webpackJsonpprofile-show"]=this["webpackJsonpprofile-show"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),i=a.n(c);a(15),a(16),a(6),a(17);var r=a(1),s=a(2),o=a(4),m=a(3),u=a(5),d=(a(18),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).showHeaderAt=80,e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.handleScroll()}))}},{key:"render",value:function(){return l.a.createElement("header",{className:"header-fixed"},l.a.createElement("div",{className:"header-limiter"},l.a.createElement("h1",null,l.a.createElement("a",{href:"#"},"Zemin ",l.a.createElement("span",null,"Wang"))),l.a.createElement("nav",null,l.a.createElement("a",{href:"#about_section"},"ABOUT"),l.a.createElement("a",{href:"#experience_section"},"EXPERIENCE"),l.a.createElement("a",{href:"#education_section"},"EDUCATION"),l.a.createElement("a",{href:"#contact_section"},"CONTACT"))))}},{key:"handleScroll",value:function(){console.log("listen",window.scrollY,this.showHeaderAt),window.scrollY>this.showHeaderAt?document.body.classList.add("fixed"):document.body.classList.remove("fixed")}}]),t}(l.a.Component)),h=(a(19),a(27)),p=a(9),v=a.n(p),E=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).canvas=null,e.canvasCtx=null,e.alphabetPath=null,e.alphabetTween={time:0,lastTime:0},e.steps=600,e.color=["#F16060","#5C4B51","#8CBEB2","#F3B562","#F16060","#5C4B51","#8CBEB2","#F3B562","#F16060"],e.colorStep=[.1,.3,.6,.9],e.sizeScale=.01,e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.alphabetPath=document.querySelector(".alphabets #alphabet-a path"),this.createCanvas(),this.startDraw()}},{key:"render",value:function(){return l.a.createElement("div",{className:"holder"},l.a.createElement("h1",{className:"header"},"Zemin Wang"),l.a.createElement("div",{className:"photo"}),l.a.createElement("div",{className:"alphabets"},l.a.createElement("svg",{id:"alphabet-a",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 600",enableBackground:"new 0 0 1000 600",xmlSpace:"preserve"},l.a.createElement("path",{style:{display:"none"},fill:"none",stroke:"#000000",strokeMiterlimit:"10",d:"M 100 300 Q 150 50 200 300 Q 250 550 300 300 Q 350 50 400 300 C 450 550 450 50 500 300 C 550 50 550 550 600 300 A 50 50 0 1 1 700 300 "}))))}},{key:"createCanvas",value:function(){this.canvas=document.createElement("canvas"),this.canvasCtx=this.canvas.getContext("2d"),this.canvas.id="alphabets";var e=document.querySelector(".alphabets svg").getAttribute("viewBox");e=e.split(/\s+|,/),this.sizeScale=document.querySelector(".alphabets").offsetWidth/Number(e[2]),this.canvas.width=document.querySelector(".alphabets").offsetWidth,this.canvas.height=document.querySelector(".alphabets").offsetHeight,document.querySelector("div.alphabets").prepend(this.canvas)}},{key:"startDraw",value:function(){var e=this,t=v.a.scale(this.color).domain(this.colorStep),a=this.canvasCtx.createLinearGradient(0,0,150,150);a.addColorStop(0,"red"),a.addColorStop(1,"green"),this.canvasCtx.strokeStyle=a,this.canvasCtx.lineWidth=1,this.canvasCtx.lineCap="round",this.canvasCtx.lineJoin="round",this.canvasCtx.fillStyle=this.color[0],h.b.to(this.alphabetTween,10,{ease:h.a.easeInOut,delay:2,time:1,onUpdate:function(t,a,n){e.onDrawUpdate(t,a,n)},onUpdateParams:[this.alphabetPath,this.alphabetTween,t]})}},{key:"onDrawUpdate",value:function(e,t,a){for(var n=5*this.sizeScale,l=2*Math.PI,c=e.getTotalLength(),i=c*t.time,r=e.getPointAtLength(i),s=t.time-t.lastTime,o=Math.round(this.steps*s),m=0;m<o;m++){var u=s*(m/o)+t.lastTime,d=c*u,h=a(u),p=e.getPointAtLength(d);this.canvasCtx.fillStyle=h,this.canvasCtx.beginPath(),this.canvasCtx.arc(p.x*this.sizeScale,p.y*this.sizeScale,n,0,2*l),this.canvasCtx.fill()}this.canvasCtx.beginPath(),this.canvasCtx.arc(r.x*this.sizeScale,r.y*this.sizeScale,n,0,2*l),this.canvasCtx.fill(),t.lastTime=t.time}}]),t}(l.a.Component),x=(a(20),function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:this.props.id,className:"App-section"},this.props.children)}}]),t}(l.a.Component)),f=(a(21),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"profile-about"},l.a.createElement("header",null,l.a.createElement("h1",null,"About")),l.a.createElement("div",{className:"summary"},l.a.createElement("p",null,"I am an experienced full stack Web/Mobile development, looking for exciting projects and new opportunities. Over the last 8+ years, I have worked in all kinds of projects and I am able to build a web application from scratch very fast and with greate efficiency or continue working on existing code with ease. Finally but not least, my ultimate goal is to satisfy clients, deliver quality work and always on time. So if you have an exciting project and looking for a skillful developer, drop me a message and we will start working on your project asap.")))}}]),t}(l.a.Component)),g=(a(22),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).items=[],e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".profile-experience svg").createSVGPoint();function a(e,a){return t.x=e.clientX,t.y=e.clientY,t.matrixTransform(a.getScreenCTM().inverse())}function n(e){Object.keys(e).forEach((function(t){this[t]=e[t]}),this),this.el.addEventListener("mousemove",this.mouseMoveHandler.bind(this)),this.el.addEventListener("touchmove",this.touchMoveHandler.bind(this))}n.prototype={update:function(e){this.clip.setAttribute("cx",e.x),this.clip.setAttribute("cy",e.y)},mouseMoveHandler:function(e){this.update(a(e,this.svg))},touchMoveHandler:function(e){e.preventDefault();var t=e.targetTouches[0];if(t)return this.update(a(t,this.svg))}},[].slice.call(document.querySelectorAll(".profile-experience .item"),0).forEach((function(t,a){e.items.push(new n({el:t,svg:t.querySelector(".profile-experience svg"),clip:document.querySelector("#clip-"+a+" circle")}))})),[].slice.call(document.querySelectorAll(".profile-experience button"),0).forEach((function(e){e.addEventListener("click",(function(e){document.body.className=e.currentTarget.className}))}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"profile-experience"},l.a.createElement("header",null,l.a.createElement("h1",null,"My Experience"),l.a.createElement("div",{className:"small"},l.a.createElement("h3",null,"Skillsets"),l.a.createElement("ul",null,l.a.createElement("li",null,"Core PHP"),l.a.createElement("li",null,"Laravel"),l.a.createElement("li",null,"NodeJS"),l.a.createElement("li",null,"Django"),l.a.createElement("li",null,"Flask"),l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"VueJS"),l.a.createElement("li",null,"SQL"),l.a.createElement("li",null,"Oracle"),l.a.createElement("li",null,"Mongo"),l.a.createElement("li",null,"GraphQL"),l.a.createElement("li",null,"HTML/CSS"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"TypeScript"),l.a.createElement("li",null,"React Native")))),l.a.createElement("main",null,l.a.createElement("div",{className:"items"},l.a.createElement("div",{className:"item"},l.a.createElement("svg",{preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 300 200"},l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip-0"},l.a.createElement("rect",{x:"0",y:"0",width:"300px",height:"200px"}),l.a.createElement("circle",{cx:"0",cy:"0",fill:"#000",r:"150px"}))),l.a.createElement("text",{className:"svg-text",dy:".3em",x:"50%",y:"50%"},"Updating..."),l.a.createElement("g",{className:"item-container",clipPath:"url(#clip-0)"},l.a.createElement("image",{height:"100%",preserveAspectRatio:"xMinYMin slice",width:"100%",xlinkHref:"/update.png"}),l.a.createElement("text",{className:"svg-masked-text",dy:".3em",x:"50%",y:"50%"},"Updating...")))),l.a.createElement("div",{className:"item"},l.a.createElement("svg",{preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 300 200"},l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip-1"},l.a.createElement("rect",{x:"0",y:"0",width:"300px",height:"200px"}),l.a.createElement("circle",{cx:"0",cy:"0",fill:"#000",r:"150px"}))),l.a.createElement("text",{className:"svg-text",dy:".3em",x:"50%",y:"50%"},"Updating..."),l.a.createElement("g",{className:"item-container",clipPath:"url(#clip-1)"},l.a.createElement("image",{height:"100%",preserveAspectRatio:"xMinYMin slice",width:"100%",xlinkHref:"/update.png"}),l.a.createElement("text",{className:"svg-masked-text",dy:".3em",x:"50%",y:"50%"},"Updating...")))),l.a.createElement("div",{className:"item"},l.a.createElement("svg",{preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 300 200"},l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip-2"},l.a.createElement("rect",{x:"0",y:"0",width:"300px",height:"200px"}),l.a.createElement("circle",{cx:"0",cy:"0",fill:"#000",r:"150px"}))),l.a.createElement("text",{className:"svg-text",dy:".3em",x:"50%",y:"50%"},"Updating..."),l.a.createElement("g",{className:"item-container",clipPath:"url(#clip-2)"},l.a.createElement("image",{height:"100%",preserveAspectRatio:"xMinYMin slice",width:"100%",xlinkHref:"/update.png"}),l.a.createElement("text",{className:"svg-masked-text",dy:".3em",x:"50%",y:"50%"},"Updating...")))),l.a.createElement("div",{className:"item"},l.a.createElement("svg",{preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 300 200"},l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip-3"},l.a.createElement("rect",{x:"0",y:"0",width:"300px",height:"200px"}),l.a.createElement("circle",{cx:"0",cy:"0",fill:"#000",r:"150px"}))),l.a.createElement("text",{className:"svg-text",dy:".3em",x:"50%",y:"50%"},"Updating..."),l.a.createElement("g",{className:"item-container",clipPath:"url(#clip-3)"},l.a.createElement("image",{height:"100%",preserveAspectRatio:"xMinYMin slice",width:"100%",xlinkHref:"/update.png"}),l.a.createElement("text",{className:"svg-masked-text",dy:".3em",x:"50%",y:"50%"},"Updating...")))),l.a.createElement("div",{className:"item"},l.a.createElement("svg",{preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 300 200"},l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip-4"},l.a.createElement("rect",{x:"0",y:"0",width:"300px",height:"200px"}),l.a.createElement("circle",{cx:"0",cy:"0",fill:"#000",r:"150px"}))),l.a.createElement("text",{className:"svg-text",dy:".3em",x:"50%",y:"50%"},"Updating..."),l.a.createElement("g",{className:"item-container",clipPath:"url(#clip-4)"},l.a.createElement("image",{height:"100%",preserveAspectRatio:"xMinYMin slice",width:"100%",xlinkHref:"/update.png"}),l.a.createElement("text",{className:"svg-masked-text",dy:".3em",x:"50%",y:"50%"},"Updating...")))),l.a.createElement("div",{className:"item"},l.a.createElement("svg",{preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 300 200"},l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip-5"},l.a.createElement("rect",{x:"0",y:"0",width:"300px",height:"200px"}),l.a.createElement("circle",{cx:"0",cy:"0",fill:"#000",r:"150px"}))),l.a.createElement("text",{className:"svg-text",dy:".3em",x:"50%",y:"50%"},"Updating..."),l.a.createElement("g",{className:"item-container",clipPath:"url(#clip-5)"},l.a.createElement("image",{height:"100%",preserveAspectRatio:"xMinYMin slice",width:"100%",xlinkHref:"/update.png"}),l.a.createElement("text",{className:"svg-masked-text",dy:".3em",x:"50%",y:"50%"},"Updating...")))))))}}]),t}(l.a.Component)),y=(a(23),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"profile-education"},l.a.createElement("h1",null,"Education"),l.a.createElement("div",{className:"edu-box"},l.a.createElement("p",null,l.a.createElement("a",{className:"univ-title",href:"https://en.wikipedia.org/wiki/Beijing_University_of_Technology"},"Beijing University of Technology")),l.a.createElement("p",{className:"univ-x"},"Bachelor's degree, Computer Science (2013 ~ 2016)")))}}]),t}(l.a.Component)),b=(a(24),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"profile-reference"},l.a.createElement("h1",null,"Contact"),l.a.createElement("div",{className:"contact-menu"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"center",className:"label"},"Email"),l.a.createElement("td",{align:"center"},"win6win@outlook.com")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center",className:"label"},"Phone"),l.a.createElement("td",{align:"center"},"+86 17810611470"))))))}}]),t}(l.a.Component));var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-content"},l.a.createElement(d,null),l.a.createElement(E,null),l.a.createElement(x,{id:"about_section"},l.a.createElement(f,null)),l.a.createElement(x,{id:"experience_section"},l.a.createElement(g,null)),l.a.createElement(x,{id:"education_section"},l.a.createElement(y,null)),l.a.createElement(x,{id:"contact_section"},l.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.cab658b0.chunk.js.map