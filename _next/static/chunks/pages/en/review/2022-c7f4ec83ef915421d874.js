_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{MTcB:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o("nKUr"),a=(o("q1tI"),o("TSYQ")),c=o.n(a),s=o("fGXI"),r=function(e){var t=e.projects,o=void 0===t?[]:t,a=e.statusMap,r=void 0===a?{}:a;return Object(n.jsx)(s.b,{className:"cogman-project-list",align:"stretch",children:o.map((function(e,t){return Object(n.jsx)(s.a,{col:12,sm:6,lg:4,children:Object(n.jsxs)("div",{className:c()(["list_card",{"card-closed":"closed"===e.status}]),children:[Object(n.jsx)("h4",{className:"card_type",children:e.type}),Object(n.jsx)("p",{className:"card_status",children:r[e.status]}),Object(n.jsx)("p",{className:"card_content",children:e.content}),Object(n.jsx)("p",{className:"card_tech",children:e.tech.join(", ")})]})},t)}))})}},"P/Ls":function(e){e.exports=JSON.parse('{"author":"Cogman Ltd.","brand":"Cogman","owner":"Chao-Chun, Chang (No\xebl)","keywords":"Cogman Ltd., out sourcing, software, frontend, backend, team establish, career consultant","nav":{"home":"Home","about":"About","review":"Review","service":"Service","recruit":"Recruit","contact":"Contact"},"project":{"running":"Running","closed":"Closed"},"backReview":"Back","read":"Read","version":"Version: ","months":"Months","copyright":"Copyright \xa9 Cogman Ltd. All rights reserved."}')},gYGO:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o("nKUr"),a=(o("q1tI"),o("TSYQ")),c=o.n(a),s=o("IP2g"),r=o("fGXI"),i=function(e){var t=e.type,o=e.packages,a=void 0===o?[]:o;return Object(n.jsx)(r.b,{className:c()("cogman-package-list","list-".concat(t)),align:"stretch",children:a.map((function(e,t){return Object(n.jsx)(r.a,{col:12,children:Object(n.jsxs)("div",{className:"list_card",children:[Object(n.jsx)("h4",{className:"card_name",children:e.name}),Object(n.jsxs)(r.b,{className:"card_url",spacing:!1,children:[Object(n.jsx)(r.a,{spacing:!1,children:Object(n.jsx)("a",{className:"service_link",href:e.url.github,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(s.a,{className:"link_icon",icon:["fab","github"],fixedWidth:!0})})}),Object(n.jsx)(r.a,{spacing:!1,children:Object(n.jsx)("a",{className:"service_link",href:e.url.npm,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(s.a,{className:"link_icon",icon:["fab","npm"],fixedWidth:!0})})}),Object(n.jsx)(r.a,{spacing:!1,children:Object(n.jsx)("a",{className:"service_link",href:e.url.website,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(s.a,{className:"link_icon",icon:["fas","link"],fixedWidth:!0})})})]}),Object(n.jsx)("p",{className:"card_version",children:e.version}),Object(n.jsx)("p",{className:"card_description",children:e.description})]})},t)}))})}},hs5G:function(e,t,o){"use strict";o.r(t);var n=o("nKUr"),a=(o("q1tI"),o("lhI2")),c=o("P/Ls"),s=o("tt+y"),r={iso:"zh-Hant",meta:{title:"".concat(s.title," | ").concat(c.brand),description:s.description,author:c.owner,copyright:c.company,keywords:c.keywords},common:c,basic:s};t.default=function(){return Object(n.jsx)(a.a,{languages:r,lang:"en"})}},lhI2:function(e,t,o){"use strict";var n=o("nKUr"),a=o("q1tI"),c=o("nOHt"),s=o("3MJQ"),r=o("IP2g"),i=o("4opY"),l=o("fGXI"),p=o("MTcB"),d=o("gYGO");t.a=function(e){var t=e.lang,o=e.languages,b=Object(c.useRouter)(),u=Object(a.useMemo)((function(){return b.route.split("/").slice(0,-1).join("/")}),[b]);return Object(n.jsx)(i.a,{lang:t,languages:o,pathname:"/review",image:"review-2022.png",children:Object(n.jsxs)("div",{id:"review",className:"page",children:[Object(n.jsx)("section",{id:"/",className:"page_section section-review",children:Object(n.jsx)("div",{className:"section_container text-center",children:Object(n.jsx)(l.b,{spacing:!1,justify:"center",children:Object(n.jsxs)(l.a,{col:12,md:8,className:"text-center",children:[Object(n.jsx)("p",{className:"container_year",children:" 2022 "}),Object(n.jsx)("h1",{className:"container_title",children:o.basic.title}),o.basic.untranslated?Object(n.jsx)("p",{className:"container_untranslated",children:o.basic.untranslated}):[]]})})})}),Object(n.jsxs)("section",{id:"description",className:"page_section section-content",children:[Object(n.jsx)("div",{className:"section_container",children:Object(n.jsx)(l.b,{children:Object(n.jsxs)(l.a,{col:12,md:12,children:[Object(n.jsx)("h1",{className:"container_head",children:o.basic.section[0].head}),o.basic.section[0].content.map((function(e){return Object(n.jsx)("p",{className:"container_description",children:e},e)})),Object(n.jsx)("h1",{className:"container_head",children:o.basic.section[1].head}),o.basic.section[1].projectContent.map((function(e){return Object(n.jsx)("p",{className:"container_description",children:e},e)})),Object(n.jsx)(p.a,{projects:o.basic.section[1].projects,statusMap:o.common.project}),o.basic.section[1].packageContent.map((function(e){return Object(n.jsx)("p",{className:"container_description",children:e},e)})),Object(n.jsx)(d.a,{type:"react",packages:o.basic.section[1].packages}),Object(n.jsx)("h1",{className:"container_head",children:o.basic.section[2].head}),o.basic.section[2].content.map((function(e){return Object(n.jsx)("p",{className:"container_description",children:e},e)})),Object(n.jsxs)("a",{className:"service_link",href:o.basic.section[2].url,target:"_blank",rel:"noreferrer",children:[Object(n.jsx)(r.a,{className:"link_icon",icon:["fas","link"],fixedWidth:!0}),o.basic.section[2].url]}),Object(n.jsx)("h1",{className:"container_head",children:o.basic.section[3].head}),o.basic.section[3].content.map((function(e){return Object(n.jsx)("p",{className:"container_description",children:e},e)}))]})})}),Object(n.jsx)("div",{className:"section_buttons",children:Object(n.jsx)(l.b,{spacing:!1,justify:"center",align:"middle",children:Object(n.jsx)(l.a,{spacing:!1,children:Object(n.jsx)("a",{class:"button-link",href:u,children:Object(n.jsx)(s.a,{children:o.common.backReview})})})})})]})]})})}},"tt+y":function(e){e.exports=JSON.parse('{"title":"Full-time and Full-heart","section":[{"head":"Achieved","content":["When we were the first year to establish Cogman Ltd. To the begining we were not done our job to other company yet. So strictly speaking weare not full-time to run our business. But this year, we are full-time and full-heart to do this. Then, we successed to achieve our goal this year. And we are excited to take challenge next year! It is honor to meet new friends and gratful to friends who we are co-work still."]},{"head":"Achievements","projectContent":["Cogman is low profile to run our business according to our service. And we are surprised and happy to be connected. Some clients found us. What an honor! Although for some reason, we could take some case. But we still expect to have opportunity to co-work someday."],"projects":[{"status":"closed","type":"Frontend Development","content":"Continue the case last year. To support client to Frontend development of a big project.","tech":["Angular","NX"]},{"status":"closed","type":"Software Development & Product Consultant","content":"Continue the case last year. To maintanance and development to a software product.","tech":["Docker","Laravel","Vue","GCP"]},{"status":"closed","type":"Software Development & Product Consultant","content":"Support to develop frontend and backend for product and be the consultant of prduct\'s design and development","tech":["Docker","React","Next","Typescript","GraphQL"]},{"status":"closed","type":"Software Development Consultant","content":"Co-work with other backend engineer, to develop frontend and asistant client to update their develop technique of frontend","tech":["React","IIS"]},{"status":"closed","type":"Frontend Development","content":"Co-work with other backend engineer, to develop frontend.","tech":["React","IIS"]},{"status":"closed","type":"Frontend Development Consultant","content":"Support to straming APIs and be the mentor to other frontend engineer.","tech":["Docker","React","Typescript","Next"]},{"status":"closed","type":"Frontend Development","content":"Developing frontend and gsap animations","tech":["Vue","gsap"]},{"status":"closed","type":"Frontend Development","content":"A case in emergency. To support to forntend development.","tech":["Nunjucks"]},{"status":"closed","type":"Frontend Development","content":"A case in emergency. To support to forntend development.","tech":["Vue"]},{"status":"closed","type":"Frontend Development Workshop","content":"A campus workshop for frontend development.","tech":["Vue","Vite"]},{"status":"running","type":"Frontend Development","content":"Frontend development to backstage website.","tech":["Angular"]},{"status":"running","type":"Frontend Development","content":"Frontend development to backstage website and be the consutant to system design.","tech":["Vue","Typescript"]},{"status":"closed","type":"Software Development & Product Consultant","content":"Frontend and backend development and be the consultant to product development.","tech":["React","Node","Web3","AWS"]},{"status":"running","type":"Software Development Consultant &  Team Consultant","content":"Frontend and backend development and support to establish developing team and interview, traning.","tech":["React","Node","Eggjs","Web3","AWS"]}],"packageContent":["To our most time of this year, we were running many cases in the same time. It is overloading a lots. But we still got a few days to take a breath. And we utilized those time to update some of our packages of NPM."],"packages":[{"name":"@blacktoolbox/react-popup","version":"1.2.0","description":"Popup is not the new package actually. We create it in Nov. 2020. However it became more complete this year.","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-popup","npm":"https://www.npmjs.com/package/@blacktoolbox/react-popup","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/popup/basic"}},{"name":"@blacktoolbox/react-form","version":"1.0.1","description":"Form is same situaction of our react-popup, this year we add the Radio and Checkbox which are more easier to be customized.","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-form","npm":"https://www.npmjs.com/package/@blacktoolbox/react-form","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/form/basic/input"}},{"name":"@blacktoolbox/react-timeline","version":"1.0.2","description":"Fixed peerDependencies\u3002","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-timeline","npm":"https://www.npmjs.com/package/@blacktoolbox/react-timeline","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/timeline/basic"}},{"name":"@blacktoolbox/react-sync-localstorag","version":"1.0.2","description":"Fixed peerDependencies\u3002","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-sync-localstorage","npm":"https://www.npmjs.com/package/@blacktoolbox/react-sync-localstorage","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/localstorage"}},{"name":"@blacktoolbox/react-popover","version":"1.2.4","description":"Fixed peerDependencies\u3002","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-popover","npm":"https://www.npmjs.com/package/@blacktoolbox/react-popover","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/popover/basic"}},{"name":"@blacktoolbox/react-message","version":"1.1.2","description":"Fixed peerDependencies\u3002","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-message","npm":"https://www.npmjs.com/package/@blacktoolbox/react-message","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/message/basic/message"}},{"name":"@blacktoolbox/react-table","version":"1.4.2","description":"Fixed peerDependencies\u3002","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-table","npm":"https://www.npmjs.com/package/@blacktoolbox/react-table","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/table/basic"}},{"name":"@blacktoolbox/react-list","version":"2.3.0","description":"Add link supported.","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-list","npm":"https://www.npmjs.com/package/@blacktoolbox/react-list","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/list/basic"}},{"name":"@blacktoolbox/react-button","version":"1.3.3","description":"Fixed peerDependencies and add disabled supported.","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-button","npm":"https://www.npmjs.com/package/@blacktoolbox/react-button","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/button/basic/button"}},{"name":"@blacktoolbox/react-component-folder","version":"1.0.2","description":"Fixed peerDependencies\u3002","url":{"github":"https://github.com/BlackToolBoxLaboratory/react-component-folder","npm":"https://www.npmjs.com/package/@blacktoolbox/react-component-folder","website":"https://blacktoolbox.cogman.org/react/v2/#/packages/localstorage"}}]},{"head":"Ya Fun","content":["Except to have some intersting cases this year. We support to friend for setting up his website too. YaFun is for providing the service of experience outdoor sporting in Japan. If you are interested, please feel free to take a see this website. It is still working on updating and complete the content."],"url":"https://yafun.life"},{"head":"Next","content":["We achieved our goal and expected this this year. We are ready to hire. However unfortunately considering to our most case are not suit for newbie engineers. We had rejected some candidates. Next year, we might still focus on our business firstly. But we still expect to meet some potential engineers to join us!"]}]}')},yna8:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/review/2022",function(){return o("hs5G")}])}},[["yna8",1,2,0,3,4]]]);