(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(18),c=a.n(i),r=(a(33),a(34),a(19)),l=a(20),s=a(24),m=a(21),d=a(25),p=a(49),g={mainContainer:{padding:"10px"},backgroundIcon:{zIndex:1,height:"550px",width:"550px",position:"absolute",right:0,top:0,opacity:"0.1"},name:{fontSize:"25px",letterSpacing:"2px"},backgroundIcon2:{zIndex:1,height:"200px",width:"200px",position:"absolute",top:0,left:0,opacity:"0.1"},header:{display:"flex",justifyContent:"flex-start",alignItems:"center",paddingLeft:"20%"},detail:{borderBottom:"solid 2px lightgray",paddingBottom:"15px",width:"80%",display:"flex",alignItems:"center"},detailText:{fontFamily:"Monaco",paddingLeft:"10px"},profilePicture:{borderRadius:"50%",marginRight:"10px",opacity:"0.75"},projectContainer:{position:"relative",zIndex:2},projects:{display:"flex",justifyContent:"center"},subtitle:{textAlign:"center",letterSpacing:"2px",marginTop:"25px",fontFamily:"Roboto"},linkedin:{cursor:"pointer"},linkedinIcon:{color:"#4875B4",height:"40px",width:"40px"},devicon:{height:"40px",width:"40px"},reactIcon:{color:"#61DBFB"},androidIcon:{color:"#A4C639"},jsIcon:{color:"#F0DB4F"},subtext:{fontSize:"12px"},footer:{marginTop:"20%",backgroundColor:"lightgray",height:"100px"}},u={container:{margin:"2.5%",border:"solid 2px lightgray",paddingTop:"20px",borderRadius:"5px",flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},icon:{textAlign:"center",marginBottom:"20px",padding:"20px",borderBottom:"solid 1px lightgray"},iconImg:{height:"50px"},text:{marginBottom:"20px",padding:"0 20px",fontFamily:"Roboto"},stack:{paddingLeft:"5%"},link:{padding:"20px 20px",cursor:"pointer","&:hover":{backgroundColor:"lightgray"}}},h=a(9),x=Object(p.a)(u)(function(e){var t=e.classes,a=e.icon,n=e.text,i=e.link,c=e.stack,r=e.color;return o.a.createElement("div",{className:t.container},o.a.createElement("div",{className:t.icon},o.a.createElement("img",{src:a,alt:"Not found",className:t.iconImg})),o.a.createElement("div",{className:t.text},n),o.a.createElement("div",{className:t.stack},c),o.a.createElement("div",{className:t.link,onClick:function(){return window.location=i}},"See project ",o.a.createElement(h.a,{style:{color:r,marginLeft:"5%"}})))}),f=a(5),v=function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(f.h,{className:t.devicon+" "+t.reactIcon}),o.a.createElement(f.c,{className:t.devicon}),o.a.createElement(f.a,{className:t.devicon+" "+t.androidIcon}))},E=function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(f.g,{className:t.devicon}),o.a.createElement(f.d,{className:t.devicon}))},b=function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(f.h,{className:t.devicon+" "+t.reactIcon}),o.a.createElement(f.g,{className:t.devicon}),o.a.createElement(f.e,{className:t.devicon+" "+t.jsIcon}),o.a.createElement(f.f,{className:t.devicon+" "+t.jsIcon}))},N=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.mainContainer},o.a.createElement(f.b,{className:e.backgroundIcon2}),o.a.createElement("div",{className:e.header},o.a.createElement("div",{className:e.detail},o.a.createElement("img",{src:"https://media.licdn.com/dms/image/C4D03AQG9wDJSmplr8g/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=NzgTiOqBe9iFk6_EAzVf1e-eFMq8cimt9tgKNl3BIJc",alt:"Not found",className:e.profilePicture}),o.a.createElement("div",{className:e.detailText},o.a.createElement("p",{className:e.name},"Charlie Day"),o.a.createElement("div",null,o.a.createElement("p",{className:e.subtext},"Postgraduate Computer Science Student"),o.a.createElement("p",{className:e.subtext},"University of Nottingham")),o.a.createElement("div",{className:e.linkedin,onClick:function(){return window.location="https://www.linkedin.com/in/charlie-day-537585131/"}},o.a.createElement(h.b,{className:e.linkedinIcon}))))),o.a.createElement("div",{className:e.projectContainer},o.a.createElement("h2",{className:e.subtitle},"Current Projects"),o.a.createElement("div",{className:e.projects},o.a.createElement(x,{icon:"https://blogs.nottingham.ac.uk/ingenuitylab/files/2017/10/Logo-with-white-background.png",text:"React and React Native developer for Proodle Solutions, a startup located in Nottingham.\nWorking with a Team on developing a University branded application for both mobile and web platform.",stack:o.a.createElement(v,{classes:e}),link:"https://proodlesolutions.com/",color:"#".concat(Math.floor(16777215*Math.random()).toString(16))}),o.a.createElement(x,{icon:"https://github.com/charlieproodle/SimpleGAN/raw/master/MNIST_GAN/images/generated_plot_e090.png",text:"Current Masters project investigating GANs (Generative Adversarial Networks), a type\nof Neural Network architecture, to generate convincing novel content such as Music, Images, and Text",stack:o.a.createElement(E,{classes:e}),link:"https://github.com/charlieproodle/General-Adversarial-Networks",color:"#".concat(Math.floor(16777215*Math.random()).toString(16))}),o.a.createElement(x,{icon:"https://github.com/charlieproodle/signup/blob/master/Images/Screenshot%202019-07-10%20at%2002.02.38.png?raw=true",stack:o.a.createElement(b,{classes:e}),text:"Personal project to speed up startup development of signup/login pages using\nDjango and React",link:"https://github.com/charlieproodle/signup",color:"#".concat(Math.floor(16777215*Math.random()).toString(16))})))),o.a.createElement("div",{className:e.footer}))}}]),t}(n.Component),k=Object(p.a)(g)(N);var w=function(){return o.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.3188632a.chunk.js.map