_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"5u1t":function(e,t,n){"use strict";var o=n("nKUr"),i=n("q1tI"),a=n.n(i),c=n("TSYQ"),s=n.n(c);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e,t){var n;return t.forEach((function(t){n=Object.assign({},n,d(e,t))})),n},d=function(e,t){var n={};return"object"===r(e)&&Object.keys(e).find((function(o){if(o===t)return n=Object.assign({},e[o]),!0})),n},p=a.a.forwardRef((function(e,t){var n=e.position,o=void 0===n?"left":n,i=e.align,c=void 0===i?"start":i,r=e.nodeList,d=void 0===r?[]:r,p=e.typeObj,u=void 0===p?{}:p,m=function(e){var t={};return Object.keys(e).forEach((function(n){t[n]={},Object.keys(e[n]).forEach((function(o){var i=o.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));t[n][i]=e[n][o]}))})),t}(e.styleObj||{});return a.a.createElement("div",{ref:t,className:s()("btb-react-timeline",e.className,"timeline-position-".concat(o),"timeline-align-".concat(c)),style:l(m,["btb-react-timeline","timeline-position-".concat(o),"timeline-align-".concat(c)])},d.map((function(e,t){return a.a.createElement("div",{className:"timeline_node",style:l(m,["timeline_node"]),key:"".concat(Date.now(),"_").concat(t)},a.a.createElement("div",{className:"node_point",style:l(m,["node_point"])}),a.a.createElement("div",{className:"node_content",style:l(m,["node_content"])},void 0!==e.type&&"function"==typeof u[e.type]?u[e.type](e):e))})))})),u=n("LNfz"),m={XL:1200,LG:992,MD:768,SM:576},b=[{type:"event",dateTag:"2021-10",content:"cogman_develop_angular"},{type:"event",dateTag:"2021-09",content:"cogman_backend_development"},{type:"event",dateTag:"2020-12",content:"cogman_established"},{type:"event",dateTag:"2019-09",content:"btb_develop_js"},{type:"event",dateTag:"2018-11",content:"btb_develop_vue"},{type:"event",dateTag:"2018-01",content:"btb_develop_react"},{type:"event",dateTag:"2017-12",content:"btb_established"}],v=n("4opY"),g=function(e){var t=e.children,n=e.className;return Object(o.jsxs)("div",{className:s()("cogman-divider",n),children:[Object(o.jsx)("div",{className:"divider_line"}),t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"divider_content",children:t}),Object(o.jsx)("div",{className:"divider_line"})]}):[]]})},h=n("fGXI");t.a=function(e){var t=e.lang,n=e.languages,a=Object(i.useState)(!0),c=a[0],s=a[1],r={event:function(e){var t=n.basic.events[e.dateTag][e.content];return Object(o.jsxs)("div",{className:"timeline_event",children:[Object(o.jsxs)("div",{className:"event_head",children:[Object(o.jsx)("div",{className:"context_img",children:Object(o.jsx)(u.b,{src:"/static/".concat(t.img),alt:"",height:64})}),Object(o.jsxs)("div",{className:"event_topic",children:[Object(o.jsx)("h1",{className:"context_title",children:t.title}),Object(o.jsx)("p",{className:"context_date",children:e.dateTag})]})]}),Object(o.jsx)(g,{className:"context_divider"}),Object(o.jsx)("p",{className:"context_description",children:t.description})]})}},l=function(){s(window.innerWidth<=m.MD)};return Object(i.useEffect)((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]),Object(o.jsx)(v.a,{lang:t,languages:n,pathname:"/about",children:Object(o.jsxs)("div",{id:"about",className:"page",children:[Object(o.jsx)("section",{id:"/",className:"page_section section-about",children:Object(o.jsx)("div",{className:"section_container text-center",children:Object(o.jsx)(h.b,{spacing:!1,justify:"center",children:Object(o.jsx)(h.a,{col:12,md:8,className:"text-center",children:Object(o.jsx)("h1",{className:"container_title",children:n.basic.title})})})})}),Object(o.jsx)("section",{id:"description",className:"page_section section-description",children:Object(o.jsxs)("div",{className:"section_container text-center",children:[Object(o.jsx)(h.b,{justify:"center",children:Object(o.jsx)(h.a,{col:12,md:8,className:"text-center",children:n.basic.description.map((function(e){return Object(o.jsx)("p",{className:"container_description",children:e},e)}))})}),Object(o.jsx)(h.b,{justify:"center",children:Object(o.jsx)(h.a,{col:12,md:8,children:Object(o.jsx)(p,{nodeList:b,typeObj:r,align:"center",position:c?"left":"x"})})})]})})]})})}},AlAI:function(e){e.exports=JSON.parse('{"title":"About","description":["Cogman serve for software development of information. Even better, surrounding software development. Cogman have service including Software Development Establishment, Consultant of Developing Team, Consultant of Career. Cogman do not just develop software for client, we do care more further about the growth of projects, products and developing teams themselves.","To solve requirements, problems and issues in efficiency. We suggest our client to have consultings or discussions with us before deciding to co-work or not. And Cogman provide customized service in various way. There is no need to worry about how to co-work and how to prepare spec document, just let us talk about your needs.","You are partner more than client!"],"events":{"2021-10":{"cogman_develop_angular":{"title":"Including Angular Development","img":"BTB_Angular.png","description":"Cogman provide the service to develop based on Angular."}},"2021-09":{"cogman_backend_development":{"title":"Including Backend Development","img":"COGMAN.png","description":"Besides remote server estanblishment, we decide to include the service of development with Google Cloud Platform (GCP),  Dockerize, Node, PHP."}},"2020-12":{"cogman_established":{"title":"Cogman Ltd. Established","img":"COGMAN.png","description":"Before, Btb Lab. support some developing teams as a outer sourceing. But with the desire to develop something more challenging, more meaningful or more charitable. Deciding to beging a official company, Cogman Ltd."}},"2019-09":{"btb_develop_js":{"title":"Including Pure JavaScript Development","img":"BTB_JavaScript.png","description":"After co-work with backend development. Btb Lab. try to develop some utils based on pure javascript. So that it can be used not only for frontend developing but also backend developing, like Node."}},"2018-11":{"btb_develop_vue":{"title":"Including Vue Development","img":"BTB_Vue.png","description":"Lovely to have chance to work with the team developing frontend based on Vue. Then Btb lab. decided to do the effort to devleop some component baed on Vue. Although, they are not totally published on NPM. But we better our skills of developing by this."}},"2018-01":{"btb_develop_react":{"title":"Including React Development","img":"BTB_React.png","description":"Before the day beginning to develop components based on React and published on NPM as open source modules. Btb Lab. was focusing on establishing the enviroment for components developing such like Webpack, Gulp, Rollup. After this work, our first open source component is called blacktbox-list."}},"2017-12":{"btb_established":{"title":"Btb Lab. Established","img":"BTB_Basic.png","description":"The Black Tool Box Laboratory was established on 2017-12 as an laboratory for developing frontend as a begining. We aim to develop some components, modules, utils as prototype for supporting customized development. Frontend development is a begining and entrypoint to build a more flexible and low-dependency on third-party libraries. It\'s like a toolbox for developer to solve advanced customized requirements. Backend development of customized supporting solutions are expected and planned in the future."}}}}')},DqwM:function(e,t,n){"use strict";n.r(t);var o=n("nKUr"),i=(n("q1tI"),n("5u1t")),a=n("P/Ls"),c=n("AlAI"),s={iso:"en",meta:{title:"".concat(c.title," | ").concat(a.brand),description:c.description},common:a,basic:c};t.default=function(){return Object(o.jsx)(i.a,{languages:s,lang:"en"})}},"P/Ls":function(e){e.exports=JSON.parse('{"author":"Cogman Ltd.","brand":"Cogman","owner":"Chao-Chun, Chang (Noel)","nav":{"home":"Home","about":"About","review":"Review","service":"Service","contact":"Contact"},"read":"Read","version":"Version: ","months":"Months","copyright":"Copyright \xa9 Cogman Ltd. All rights reserved."}')},mrpN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/about",function(){return n("DqwM")}])}},[["mrpN",0,1,2,3]]]);