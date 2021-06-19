(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),l=n(1),i=n(16),s=n(3),a=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&a.a.initialize(j);var b=function(){var e=Object(s.f)().pathname;return Object(l.useEffect)((function(){"production"===o&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},u=n(5),h=n(22),d=[{index:!0,label:"Theo Portlock",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(l.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),m=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},x=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Theo Portlock"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:zn.tportlock@gmail.com",children:"zn.tportlock@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hi, I'm Theo. I am mostly interested in using computing to find patterns in nature. I am a doctor of biochemistry who is currently researching systems biology at Scilifelab, Stockholm."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(x.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 Theo Portlock."})]})]})},k=function(){var e=Object(s.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Theo Portlock",defaultTitle:"Theo Portlock",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Theo Portlock's personal website."};t.a=g},25:function(e,t,n){"use strict";var c=n(0),l=(n(1),n(29)),i=n(30),s=n(31),a=n(32),r=n(33),o=n(34),j=[{link:"https://github.com/theoportlock",label:"Github",icon:i.faGithub},{link:"https://facebook.com/theoportlock",label:"Facebook",icon:s.faFacebookF},{link:"https://www.instagram.com/theoportlock",label:"Instagram",icon:a.faInstagram},{link:"https://twitter.com/theoportlock",label:"Twitter",icon:r.faTwitter},{link:"https://scholar.google.com/citations?hl=en&user=CgEANTAAAAAJ",label:"Scholar",icon:o.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(l.a,{icon:e.icon})})},e.label)}))})}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n(1),i=n.n(l),s=n(15),a=n(5),r=n(3),o=n(21),j=(n(47),Object(l.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,169))}))),b=Object(l.lazy)((function(){return n.e(9).then(n.bind(null,176))})),u=Object(l.lazy)((function(){return n.e(10).then(n.bind(null,170))})),h=Object(l.lazy)((function(){return n.e(11).then(n.bind(null,171))})),d=Object(l.lazy)((function(){return n.e(7).then(n.bind(null,175))})),O=Object(l.lazy)((function(){return n.e(6).then(n.bind(null,173))})),m=Object(l.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,174))})),p=function(){return Object(c.jsx)(a.a,{basename:"/personal-site",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},x=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(s.hydrate)(Object(c.jsx)(x,{}),f):Object(s.render)(Object(c.jsx)(x,{}),f)}},[[48,1,3]]]);
//# sourceMappingURL=main.193a35ec.chunk.js.map