(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{7535:function(A,e,t){var n={"./en/about.json":[7018,18],"./en/common.json":[9945,945],"./en/cooperation.json":[9417,417],"./en/hiring.json":[7308,308],"./en/home.json":[6496,60],"./en/review-2018.json":[9159,159],"./en/review-2019.json":[5031,31],"./en/review-2020.json":[9284,284],"./en/review-2021.json":[8653,653],"./en/review-2022.json":[2475,475],"./en/review-2023.json":[5363,363],"./en/review.json":[9784,914],"./en/service.json":[4654,654],"./zh-Hant/about.json":[78,78],"./zh-Hant/common.json":[4694,694],"./zh-Hant/cooperation.json":[5079,79],"./zh-Hant/hiring.json":[2172,172],"./zh-Hant/home.json":[8605,605],"./zh-Hant/review-2018.json":[2905,784],"./zh-Hant/review-2019.json":[9177,177],"./zh-Hant/review-2020.json":[9223,223],"./zh-Hant/review-2021.json":[4322,322],"./zh-Hant/review-2022.json":[5492,492],"./zh-Hant/review-2023.json":[5619,619],"./zh-Hant/review.json":[195,195],"./zh-Hant/service.json":[9306,306]};function s(A){if(!t.o(n,A))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e});var e=n[A],s=e[0];return t.e(e[1]).then(function(){return t.t(s,19)})}s.keys=function(){return Object.keys(n)},s.id=7535,A.exports=s},8617:function(A,e,t){Promise.resolve().then(t.t.bind(t,413,23)),Promise.resolve().then(t.t.bind(t,8326,23)),Promise.resolve().then(t.bind(t,8662)),Promise.resolve().then(t.bind(t,5335)),Promise.resolve().then(t.bind(t,2711)),Promise.resolve().then(t.bind(t,4402)),Promise.resolve().then(t.bind(t,9979)),Promise.resolve().then(t.bind(t,9059)),Promise.resolve().then(t.bind(t,714)),Promise.resolve().then(t.bind(t,6731)),Promise.resolve().then(t.bind(t,4297)),Promise.resolve().then(t.bind(t,3507)),Promise.resolve().then(t.t.bind(t,6900,23)),Promise.resolve().then(t.bind(t,1927)),Promise.resolve().then(t.bind(t,1911)),Promise.resolve().then(t.bind(t,4836)),Promise.resolve().then(t.t.bind(t,7231,23)),Promise.resolve().then(t.bind(t,6454)),Promise.resolve().then(t.t.bind(t,8292,23))},6021:function(A,e,t){"use strict";t.d(e,{E:function(){return s}});var n=t(646),s={locales:n.G.map(function(A){return A.key}),defaultLocale:n.G[0].key,prefixDefault:!0,localeDetector:!1}},646:function(A,e,t){"use strict";t.d(e,{G:function(){return n}});var n=[{key:"zh-Hant",label:"繁體中文"},{key:"en",label:"English"}]},1927:function(A,e,t){"use strict";t.r(e),t.d(e,{TranslationsProvider:function(){return g}});var n,s=t(7437),o=t(1359),r=t(3968),a=t(6687),i=t(44),c=t(7083),E=t(3087),l=t(6021),B=(n=(0,a._)(function(A){var e,n,s,o,a;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return e=A.locale,n=A.namespaces,s=A.i18nInstance,o=A.resources,(a=s||(0,r.Fs)()).use(c.D),o||a.use((0,E.Z)(function(A,e){return t(7535)("./".concat(A,"/").concat(e,".json"))})),[4,a.init({lng:e,resources:o,fallbackLng:l.E.defaultLocale,supportedLngs:l.E.locales,defaultNS:n[0],fallbackNS:n[0],ns:n,preload:o?[]:l.E.locales})];case 1:return i.sent(),[2,{i18n:a,resources:a.services.resourceStore.data,t:a.t}]}})}),function(A){return n.apply(this,arguments)});function g(A){var e=A.children,t=A.locale,n=A.namespaces,a=A.resources,i=(0,r.Fs)();return B({locale:t,namespaces:n,i18nInstance:i,resources:a}),(0,s.jsx)(o.a3,{i18n:i,children:e})}},1911:function(A,e,t){"use strict";t.r(e),t.d(e,{LayoutHeaderController:function(){return a}});var n=t(7437),s=t(2265),o=t(7231),r=t.n(o),a=function(){var A=function(){var A=document.getElementsByClassName(r().header)[0];A&&0===globalThis.scrollY?A.classList.remove("solid"):A.classList.add("solid")};return(0,s.useEffect)(function(){return A(),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}},[]),(0,n.jsx)(n.Fragment,{})}},4836:function(A,e,t){"use strict";t.r(e),t.d(e,{LanguageSelector:function(){return h}});var n=t(7437),s=t(3919),o=t(4033),r=t(1396),a=t.n(r),i=t(143),c=t(7155),E=t(504),l=t(7922),B=t(646),g=t(6021),u=t(7231),Q=t.n(u),h=function(){var A=(0,s.useCurrentLocale)(g.E),e=(0,o.usePathname)();return(0,n.jsx)(i.Z,{id:"bars",className:Q().cmLayoutLanguageSelector,withArrow:!1,trigger:(0,n.jsx)(E.G,{className:Q().trigger,icon:l.jyZ,size:"lg",fixedWidth:!0}),children:B.G.map(function(t){return(0,n.jsx)(a(),{href:A?null==e?void 0:e.replace(A,t.key):"",children:(0,n.jsx)(c.z,{className:Q().link,children:t.label})},t.key)})})}},6454:function(A,e,t){"use strict";t.r(e),t.d(e,{MenuSelector:function(){return h}});var n=t(7437),s=t(1359),o=t(3919),r=t(1396),a=t.n(r),i=t(143),c=t(7155),E=t(504),l=t(7922),B=t(646),g=t(6021),u=t(7231),Q=t.n(u),h=function(A){var e=A.menu,t=(0,o.useCurrentLocale)(g.E)||B.G[0].key,r=(0,s.$G)().t;return(0,n.jsx)(i.Z,{id:"bars",className:Q().cmLayoutMenuSelector,withArrow:!1,trigger:(0,n.jsx)(E.G,{className:Q().trigger,icon:l.xiG,size:"lg",fixedWidth:!0}),children:e.map(function(A){return(0,n.jsx)(a(),{href:"/".concat(t).concat(A.url),children:(0,n.jsx)(c.z,{className:Q().link,children:r("common:nav.".concat(A.key))})},A.key)})})}},6900:function(A){A.exports={section:"service_section__lqVQQ",sectionLanding:"service_sectionLanding__YKLLM",sectionContainer:"service_sectionContainer__1iEHM",photoFrame:"service_photoFrame___AXKw",photo:"service_photo__R7LwG",title:"service_title__3JoV2",sectionService:"service_sectionService__b8Jzi",text:"service_text__TJS3p",sectionInfo:"service_sectionInfo__7d10U",list:"service_list__TPEec"}},7231:function(A){A.exports={cmLayout:"layout_cmLayout__znDep",header:"layout_header__8oRW2",cmLayoutHeader:"layout_cmLayoutHeader__2wvik",brand:"layout_brand__Pa4nO",text:"layout_text__cZdVe",nav:"layout_nav__7JfK4",link:"layout_link__yMP0j",cmLayoutLanguageSelector:"layout_cmLayoutLanguageSelector__eZYVm",trigger:"layout_trigger__rRV5O",cmLayoutMenuSelector:"layout_cmLayoutMenuSelector__AhIVW",body:"layout_body__9zeSl",footer:"layout_footer__dOpQm",isHome:"layout_isHome__ejFUR",menu:"layout_menu__o1o_L",container:"layout_container__kPTXw",logo:"layout_logo___Najp",cmLayoutFooter:"layout_cmLayoutFooter__b7zyN",routes:"layout_routes__jmK77",category:"layout_category__n59x4",label:"layout_label__e8mFe",cogman:"layout_cogman__tsTL5",btb:"layout_btb____sp4",image:"layout_image__ZHwT7",icon:"layout_icon__En7JM",copyright:"layout_copyright__BKzz5"}},8292:function(A){A.exports={cmServiceCard:"card_cmServiceCard__QR2FL",header:"card_header__sVUc6",image:"card_image__eyDoW",mask:"card_mask__1g3NJ",body:"card_body__PPU6R",description:"card_description__5PGmS",list:"card_list__QjGdO",card:"card_card__HF3mz",label:"card_label__ZtUne"}},8662:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/BTB-banner.c5f1c150.png",height:200,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEXz8/Pi4uL9/f3s7Ow6gWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nAXBAQEAAACCILX/nwPYgALV1QEAvgAWxmkQfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},5335:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/logo.ce66710f.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXG/xcXGsLC/vLy8urr/AAC8w8P/CAiLReNPAAAACHRSTlMAalcuKsGa0dLD298AAAAJcEhZcwAAGTIAABkyAa8WpZEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAJklEQVR4nGNgQAAWRkZmMM3GxMQIYjAysbKDZeAMuBQDM1QxFAAAC2AATlXYmxwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2711:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/textBrand-en.f009ac76.png",height:160,width:469,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEX//////f3//////////f3/7+//8/P/oKD/+fnKsgIVAAAACXRSTlMbFzZrQQ9VQTAaM9PSAAAACXBIWXMAAA+/AAAPvwGfsDKnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACBJREFUeJxjYGJgZAAhBhZ2NmYWNmYmBgZWDiZWBkZGAALZAD6sGJ5CAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},4402:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/textBrand-zh-Hant.7464d8cd.png",height:150,width:514,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEX/+vr//v7EXov5AAAAAnRSTlMxQigc6jYAAAAJcEhZcwAAD9EAAA/RAVYwGqQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAEklEQVR4nGNgYGBgZGSAADADAAA2AAXzsWb6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},9979:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/service-landing.5bda82f5.jpg",height:1004,width:1504,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGsD//EABUQAQEAAAAAAAAAAAAAAAAAAAQB/9oACAEBAAEFAkylL//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAAMBAAAAAAAAAAAAAAAAAAACETH/2gAIAQEABj8Ciu2Q/8QAGBABAQADAAAAAAAAAAAAAAAAAREAMUH/2gAIAQEAAT8hIOsBpDupn//aAAwDAQACAAMAAAAQB//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxBw/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Qj//EABgQAQADAQAAAAAAAAAAAAAAAAEAESGh/9oACAEBAAE/EFAtgWDbhP/Z",blurWidth:8,blurHeight:5}},9059:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/career.9888262b.jpg",height:1387,width:2080,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABiF//xAAWEAEBAQAAAAAAAAAAAAAAAAACAQP/2gAIAQEAAQUCSub/AP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AY//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAZEAACAwEAAAAAAAAAAAAAAAADQQACETH/2gAIAQEABj8CEOvFqn//xAAXEAEAAwAAAAAAAAAAAAAAAAABADFB/9oACAEBAAE/Icjq2R//2gAMAwEAAgADAAAAEAf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPxBKX//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCI/8QAGxAAAgEFAAAAAAAAAAAAAAAAASEAETFRYYH/2gAIAQEAAT8QOfxqFRfDe5//2Q==",blurWidth:8,blurHeight:5}},714:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/collaboration.d86a1c2e.jpg",height:1333,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAG8Gn//xAAXEAADAQAAAAAAAAAAAAAAAAAAAQIE/9oACAEBAAEFAnoqj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAAMBAAAAAAAAAAAAAAAAAAADIUH/2gAIAQEABj8CdkP/xAAZEAEAAgMAAAAAAAAAAAAAAAABABEhUWH/2gAIAQEAAT8hGZ003if/2gAMAwEAAgADAAAAEA//xAAXEQADAQAAAAAAAAAAAAAAAAAAASEx/9oACAEDAQE/EFMP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oACAECAQE/EDS//8QAGRAAAwADAAAAAAAAAAAAAAAAAREhAIGR/9oACAEBAAE/EBDvAtg6Ai16z//Z",blurWidth:8,blurHeight:5}},6731:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/software.80fbd71b.jpg",height:1356,width:2048,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGANf/EABYQAQEBAAAAAAAAAAAAAAAAAAIDEv/aAAgBAQABBQLaEv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AY//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGv/8QAFxABAQEBAAAAAAAAAAAAAAAAAREAAv/aAAgBAQAGPwITqV3/xAAWEAEBAQAAAAAAAAAAAAAAAAABADH/2gAIAQEAAT8hVaGBf//aAAwDAQACAAMAAAAQC//EABYRAQEBAAAAAAAAAAAAAAAAAAEAQf/aAAgBAwEBPxADl//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/EEl//8QAFxABAQEBAAAAAAAAAAAAAAAAAREAIf/aAAgBAQABPxCNIDyAWO//2Q==",blurWidth:8,blurHeight:5}},4297:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/team.e6929ca8.jpg",height:1333,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABoJ2//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEDAv/aAAgBAQABBQKNno//xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8BUP/EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAgBAgEBPwFqf//EABUQAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEBAAY/Aq//xAAXEAEBAQEAAAAAAAAAAAAAAAABEQBh/9oACAEBAAE/IWzARj3f/9oADAMBAAIAAwAAABD3/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/EFg//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QSK//xAAYEAEAAwEAAAAAAAAAAAAAAAABABExQf/aAAgBAQABPxBvX0hYLMObP//Z",blurWidth:8,blurHeight:5}},3507:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/team2.bf418d1a.jpg",height:2e3,width:1335,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGwP//EABYQAQEBAAAAAAAAAAAAAAAAAAMAE//aAAgBAQABBQLMBv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABgQAAIDAAAAAAAAAAAAAAAAAAABAhES/9oACAEBAAY/AszdH//EABcQAAMBAAAAAAAAAAAAAAAAAAABEXH/2gAIAQEAAT8hW+VZWf/aAAwDAQACAAMAAAAQA//EABYRAQEBAAAAAAAAAAAAAAAAABEAIf/aAAgBAwEBPxBMv//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/EAG//8QAGBABAQEBAQAAAAAAAAAAAAAAAREhAFH/2gAIAQEAAT8QsV7FgHalptN87//Z",blurWidth:5,blurHeight:8}}},function(A){A.O(0,[676,143,971,472,744],function(){return A(A.s=8617)}),_N_E=A.O()}]);