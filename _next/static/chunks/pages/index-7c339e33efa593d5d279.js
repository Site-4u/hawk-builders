(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3631:function(e,n,s){"use strict";var r=s(6848);var i=s(378),t=null,a="https://api.emailjs.com";function c(e,n,s){return void 0===s&&(s={}),new Promise((function(i,t){var a=new XMLHttpRequest;for(var c in a.addEventListener("load",(function(e){var n=new r.EmailJSResponseStatus(e.target);200===n.status||"OK"===n.text?i(n):t(n)})),a.addEventListener("error",(function(e){t(new r.EmailJSResponseStatus(e.target))})),a.open("POST",e,!0),s)a.setRequestHeader(c,s[c]);a.send(n)}))}function o(e){var n=document&&document.getElementById("g-recaptcha-response");return n&&n.value&&(e["g-recaptcha-response"]=n.value),n=null,e}function l(e,n){t=e,a=n||"https://api.emailjs.com"}function d(e,n,s,r){var i={lib_version:"2.6.4",user_id:r||t,service_id:e,template_id:n,template_params:o(s)};return c(a+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function u(e,n,s,r){var o;if("string"===typeof s&&(s=document.querySelector("#"!==(o=s)[0]&&"."!==o[0]?"#"+o:o)),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(s);var l=new FormData(s);return l.append("lib_version","2.6.4"),l.append("service_id",e),l.append("template_id",n),l.append("user_id",r||t),c(a+"/api/v1.0/email/send-form",l).then((function(e){return i.UI.successState(s),e}),(function(e){return i.UI.errorState(s),Promise.reject(e)}))}n.ZP={init:l,send:d,sendForm:u}},6848:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.EmailJSResponseStatus=void 0;var s=function(e){this.status=e.status,this.text=e.responseText};n.EmailJSResponseStatus=s},378:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.UI=void 0;var s=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();n.UI=s},1358:function(e,n,s){"use strict";var r=s(5893);s(7294);n.Z=function(e){return(0,r.jsx)("div",{id:"footer-container",children:(0,r.jsx)("div",{class:"container",children:(0,r.jsxs)("h3",{children:["\xa9",(new Date).getFullYear()," ",e.name,". All rights reserved."]})})})}},4147:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return E}});var r=s(5893),i=s(4047),t=s(2700),a=s(8127),c=s(8580),o=s(775),l=s(7294),d=s(1664),u=s(9755),h=s.n(u),m=s(5853),p=s(3971);var g=function(e){return(0,l.useEffect)((function(){window.onscroll=function(){var e=document.querySelector("#navbar-container");h()(window).scrollTop()<=50?e.className="":e.className="scroll"},h()(document).on("click",'a[href^="#"]',(function(e){e.preventDefault(),h()("html, body").animate({scrollTop:h()(h().attr(this,"href")).offset().top-100},200)}))})),(0,r.jsx)("nav",{id:"navbar-container",class:"",children:(0,r.jsxs)("ul",{id:"navbar",children:[(0,r.jsxs)(m.pT,{triggerOnce:!0,keyframes:p.zN,delay:"5",children:[(0,r.jsx)("li",{className:"push nav-brand",children:(0,r.jsx)("a",{href:"",children:e.name})}),(0,r.jsx)("li",{className:"push nav-brand nav-brand-mobile",children:(0,r.jsx)("a",{href:"",children:e.name.split(/\s/).reduce((function(e,n){return e+n.slice(0,1)}),"")})})]}),(0,r.jsxs)("div",{id:"nav-link-container",children:[(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.zN,delay:"20",children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"nav-link",href:"#about-us-page-container",children:"About Us"})})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.zN,delay:"50",children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"nav-link",href:"#Projects",children:"Projects"})})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.zN,delay:"80",children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"nav-link",href:"#contact-container",children:"Contact"})})}),(0,r.jsx)("div",{id:"bg-nav-link-container"})]}),(0,r.jsx)("button",{id:"toggle-container-btn",onClick:function(){h()("#1").toggleClass("toggle-div-btn-1"),h()("#2").toggleClass("toggle-div-btn-2"),h()("#3").toggleClass("toggle-div-btn-3"),h()("#nav-link-container").toggleClass("nav-link-move")},children:(0,r.jsxs)("div",{id:"toggle-container",children:[(0,r.jsx)("div",{id:"1"}),(0,r.jsx)("div",{id:"2"}),(0,r.jsx)("div",{id:"3"})]})})]})})};var x=function(e){var n="https://www.youtube.com/embed/"+e.url+"?autoplay=1&mute=1&loop=1&controls=0&playlist="+e.url;return(0,r.jsx)("div",{id:"landing-page-container",children:(0,r.jsxs)("div",{id:"video-container",children:[(0,r.jsx)("iframe",{src:n,autoplay:!0,frameborder:"0",allowFullScreen:!0,children:" "}),(0,r.jsxs)("div",{id:"video-overlay-container",children:[(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:"90",children:(0,r.jsx)("h1",{id:"heading",children:e.name})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:"120",children:(0,r.jsx)("h6",{class:"desc",children:e.desc})})]})]})})};var f=function(e){return(0,r.jsx)("div",{id:"about-us-page-container",children:(0,r.jsxs)("div",{class:"container",children:[(0,r.jsxs)("div",{class:"info",children:[(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.F2,delay:"20",children:(0,r.jsx)("h2",{children:e.name})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.F2,delay:"0",children:(0,r.jsx)("p",{children:e.desc})})]}),(0,r.jsx)("div",{class:"image",children:(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"20",children:(0,r.jsx)("img",{src:e.image})})})]})})};var j=function(e){return(0,r.jsx)("div",{id:"r-about-us-page-container",children:(0,r.jsxs)("div",{class:"container",children:[(0,r.jsx)("div",{class:"image",children:(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.F2,delay:"20",children:(0,r.jsx)("img",{src:e.image})})}),(0,r.jsxs)("div",{class:"info",children:[(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"20",children:(0,r.jsx)("h2",{children:e.name})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"0",children:(0,r.jsx)("p",{children:e.desc})})]})]})})},v=s(9583),y=s(3750);var w=function(e){return(0,r.jsx)("div",{id:"facts-section-container",children:(0,r.jsxs)("div",{class:"container",children:[(0,r.jsx)("div",{class:"info",children:(0,r.jsxs)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:"0",children:[(0,r.jsx)(v.wN,{size:"6rem",color:"white"}),(0,r.jsx)("p",{children:e.message1})]})}),(0,r.jsx)("div",{class:"info",children:(0,r.jsxs)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:"20",children:[(0,r.jsx)(y.nZm,{size:"6rem",color:"white"}),(0,r.jsx)("p",{children:e.message2})]})}),(0,r.jsx)("div",{class:"info",children:(0,r.jsxs)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:"40",children:[(0,r.jsx)(y.dVI,{size:"6rem",color:"white"}),(0,r.jsx)("p",{children:e.message3})]})})]})})};var b=function(e){var n=e.desc;return(0,r.jsx)("div",{id:"card-container",children:(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:100*e.id,children:(0,r.jsxs)("div",{class:"container",children:[(0,r.jsx)("div",{class:"img",children:(0,r.jsx)("img",{src:e.img})}),(0,r.jsxs)("div",{class:"info",children:[(0,r.jsx)("h3",{class:"name",children:e.name}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{class:"desc",children:n}),(0,r.jsx)("p",{class:"price",children:e.price})]})]})})})},k=s(155),O=s(3631);var S=function(){return(0,r.jsxs)("div",{id:"contact-container",children:[(0,r.jsx)("h1",{class:"title",children:"Contact Us"}),(0,r.jsxs)("div",{class:"container",children:[(0,r.jsxs)("div",{class:"information",children:[(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.F2,children:(0,r.jsxs)("div",{class:"number",children:[(0,r.jsx)("div",{class:"image",children:(0,r.jsx)(k.DsV,{size:"6rem",color:"white"})}),(0,r.jsxs)("div",{class:"info",children:[(0,r.jsx)("h1",{children:"Phone Number"}),(0,r.jsx)("h2",{children:"647-835-4402"})]})]})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.F2,delay:"30",children:(0,r.jsxs)("div",{class:"email",children:[(0,r.jsx)("div",{class:"image",children:(0,r.jsx)(k.GYo,{size:"6rem",color:"white"})}),(0,r.jsxs)("div",{class:"info",children:[(0,r.jsx)("h1",{children:"Email"}),(0,r.jsx)("h2",{children:"contact@hawkbuilders.ca"})]})]})})]}),(0,r.jsx)("div",{class:"divider"}),(0,r.jsx)("div",{class:"contact",children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.ZP.sendForm("service_sk0tiwp","template_2nika1e",e.target,"user_m4yKPukA2PawmJR2074c6").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"0",children:(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",required:!0})})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"10",children:(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",name:"number",placeholder:"Your Phone Number",required:!0})})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"20",children:(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",name:"email",placeholder:"Your Email Adress",required:!0})})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"30",children:(0,r.jsx)("div",{children:(0,r.jsx)("textarea",{name:"message",placeholder:"Type your message here"})})}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.t$,delay:"40",children:(0,r.jsx)("div",{class:"btn-container",children:(0,r.jsx)("input",{class:"btn",type:"submit",value:"SUBMIT"})})})]})})]})]})},R=s(1358),T=s(9008);function N(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,o.Z)(e);if(n){var i=(0,o.Z)(this).constructor;s=Reflect.construct(r,arguments,i)}else s=r.apply(this,arguments);return(0,c.Z)(this,s)}}var E=function(e){(0,a.Z)(s,e);var n=N(s);function s(){return(0,i.Z)(this,s),n.apply(this,arguments)}return(0,t.Z)(s,[{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(T.default,{children:[(0,r.jsx)("title",{children:"Home - Hawk Builders"}),(0,r.jsx)("link",{rel:"icon",href:"https://i.ibb.co/PN3RFY5/favicon.png"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{charset:"UTF-8"}),(0,r.jsx)("meta",{name:"description",content:"Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality."}),(0,r.jsx)("meta",{name:"keywords",content:"Hawk, Builders, Hawk Builders, H, B, HB, House, Construction, Basement, Washroom, Kitchen, Renovation, Upgrade, Living, Home, Construction"}),(0,r.jsx)("meta",{name:"author",content:"Site 4 u"})]}),(0,r.jsx)(g,{name:"Hawk Builders"}),(0,r.jsx)(x,{url:"vyIh46Xawyo",name:"Hawk Builders",desc:"Strive To Serve Your Dream"}),(0,r.jsx)(f,{name:"What is Hawk Builders",desc:"We have been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality.",image:"https://i.ibb.co/nzdqgWr/download.png"}),(0,r.jsx)(w,{message1:"Your experience with us will be seamless",message2:"We will make your Dream a Reality",message3:"We serve you in numerous ways"}),(0,r.jsx)(j,{name:"How We Serve You",desc:" Contacting us, you can let us take care of all your stress, you can lean on us for all support. Our experienced team handle it all, starting from: Creating Rough sketch of your vision; Getting land surveys conducted; Developing geological drawings; Getting soil sampling; Developing Engineering drawings; 3D sketch of the House; HVAC drawings; Truss Drawing; Obtaining all required permits from the concerned governmental agencies; And finally Construction to bring your vision to life. ",image:"https://i.ibb.co/qJQNTSH/pexels-burst-544965-1-1.jpg"}),(0,r.jsx)(w,{message1:"Your experience with us will be seamless",message2:"We will make your Dream a Reality",message3:"We serve you in numerous ways"}),(0,r.jsxs)("div",{id:"Projects",children:[(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:"0",children:(0,r.jsx)("h1",{children:" Projects "})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"cards",children:[(0,r.jsx)(b,{id:"1",name:"Build",desc:"We build houses to your taste. Just contact us to get a quote on the price.",img:"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}),(0,r.jsx)(b,{id:"2",name:"Model",desc:"We model the ultimate dream house that you would want us to build for you.",img:"https://i.ibb.co/d5FyZXR/Screen-Shot-2021-06-11-at-8-03-08-AM.png"}),(0,r.jsx)(b,{id:"3",name:"Kitchen",desc:"Have a kitchen to Great Gordan's Standards.",img:"https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?cs=srgb&dl=pexels-tamil-king-3214064.jpg&fm=jpg"}),(0,r.jsx)(b,{id:"4",name:"Living Room",desc:"Grab popcorn on a Friday nigh and enjoy a warm cozy room.",img:"https://images.pexels.com/photos/5353880/pexels-photo-5353880.jpeg?cs=srgb&dl=pexels-curtis-adams-5353880.jpg&fm=jpg"}),(0,r.jsx)(b,{id:"5",name:"Washroom",desc:"No matter your budget, experience the washroom of a king.",img:"https://images.pexels.com/photos/5071176/pexels-photo-5071176.jpeg?cs=srgb&dl=pexels-curtis-adams-5071176.jpg&fm=jpg"}),(0,r.jsx)(b,{id:"6",name:"Lounge",desc:"Call your friends over and enjoy the day by showing off your new lounge created by the 'Hawk Builders'.",img:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-terry-magallanes-2635038.jpg&fm=jpg"})]})}),(0,r.jsx)(d.default,{href:"/projects",children:(0,r.jsx)("a",{class:"viewMoreProjects",children:" View More "})})]}),(0,r.jsx)(S,{}),(0,r.jsx)(m.pT,{triggerOnce:!0,keyframes:p.up,delay:"0",children:(0,r.jsx)(R.Z,{})})]})}}]),s}(l.Component)},3971:function(e,n,s){"use strict";s.d(n,{up:function(){return l},F2:function(){return d},t$:function(){return u},zN:function(){return h}});var r=s(7261),i=s(917);function t(){var e=(0,r.Z)(["\n  from {\n    opacity: 0;\n    transform: translate3d(000px, -200px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]);return t=function(){return e},e}function a(){var e=(0,r.Z)(["\n  from {\n    opacity: 0;\n    transform: translate3d(500px, 000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]);return a=function(){return e},e}function c(){var e=(0,r.Z)(["\n  from {\n    opacity: 0;\n    transform: translate3d(-500px, 000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]);return c=function(){return e},e}function o(){var e=(0,r.Z)(["\n  from {\n    opacity: 0;\n    transform: translate3d(000px, 200px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]);return o=function(){return e},e}var l=(0,i.F4)(o()),d=(0,i.F4)(c()),u=(0,i.F4)(a()),h=(0,i.F4)(t())},8581:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4147)}])}},function(e){e.O(0,[774,260,445,13,571,822,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);