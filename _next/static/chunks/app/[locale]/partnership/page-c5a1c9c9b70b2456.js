(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4916],{7535:function(A,e,t){var n={"./en/about.json":[7018,7018],"./en/common.json":[9945,9945],"./en/cooperation.json":[9417,9417],"./en/hiring.json":[7308,7308],"./en/home.json":[6496,1060],"./en/partnership.json":[6685,6685],"./en/review-2018.json":[9159,9159],"./en/review-2019.json":[5031,5031],"./en/review-2020.json":[9284,9284],"./en/review-2021.json":[8653,8653],"./en/review-2022.json":[2475,2475],"./en/review-2023.json":[5363,5363],"./en/review-2024.json":[534,534],"./en/review.json":[9784,1914],"./en/service.json":[4654,4654],"./zh-Hant/about.json":[78,78],"./zh-Hant/common.json":[4694,4694],"./zh-Hant/cooperation.json":[5079,5079],"./zh-Hant/hiring.json":[2172,2172],"./zh-Hant/home.json":[8605,8605],"./zh-Hant/partnership.json":[2419,2419],"./zh-Hant/review-2018.json":[2905,9784],"./zh-Hant/review-2019.json":[9177,9177],"./zh-Hant/review-2020.json":[9223,9223],"./zh-Hant/review-2021.json":[4322,4322],"./zh-Hant/review-2022.json":[5492,5492],"./zh-Hant/review-2023.json":[5619,5619],"./zh-Hant/review-2024.json":[7567,7567],"./zh-Hant/review.json":[195,195],"./zh-Hant/service.json":[9306,9306]};function r(A){if(!t.o(n,A))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e});var e=n[A],r=e[0];return t.e(e[1]).then(function(){return t.t(r,19)})}r.keys=function(){return Object.keys(n)},r.id=7535,A.exports=r},3397:function(A,e,t){Promise.resolve().then(t.t.bind(t,413,23)),Promise.resolve().then(t.t.bind(t,8326,23)),Promise.resolve().then(t.bind(t,8662)),Promise.resolve().then(t.bind(t,5335)),Promise.resolve().then(t.bind(t,2711)),Promise.resolve().then(t.bind(t,4402)),Promise.resolve().then(t.bind(t,1499)),Promise.resolve().then(t.bind(t,2955)),Promise.resolve().then(t.bind(t,4127)),Promise.resolve().then(t.bind(t,48)),Promise.resolve().then(t.t.bind(t,6712,23)),Promise.resolve().then(t.bind(t,1927)),Promise.resolve().then(t.bind(t,1911)),Promise.resolve().then(t.bind(t,4836)),Promise.resolve().then(t.t.bind(t,7231,23)),Promise.resolve().then(t.bind(t,6454)),Promise.resolve().then(t.t.bind(t,7337,23))},6021:function(A,e,t){"use strict";t.d(e,{E:function(){return r}});var n=t(646),r={locales:n.G.map(function(A){return A.key}),defaultLocale:n.G[0].key,prefixDefault:!0,localeDetector:!1}},646:function(A,e,t){"use strict";t.d(e,{G:function(){return n}});var n=[{key:"zh-Hant",label:"繁體中文"},{key:"en",label:"English"}]},1927:function(A,e,t){"use strict";t.r(e),t.d(e,{TranslationsProvider:function(){return h}});var n,r=t(7437),a=t(1359),o=t(3968),i=t(6687),s=t(44),c=t(7083),u=t(3087),l=t(6021),d=(n=(0,i._)(function(A){var e,n,r,a,i;return(0,s.Jh)(this,function(s){switch(s.label){case 0:return e=A.locale,n=A.namespaces,r=A.i18nInstance,a=A.resources,(i=r||(0,o.Fs)()).use(c.D),a||i.use((0,u.Z)(function(A,e){return t(7535)("./".concat(A,"/").concat(e,".json"))})),[4,i.init({lng:e,resources:a,fallbackLng:l.E.defaultLocale,supportedLngs:l.E.locales,defaultNS:n[0],fallbackNS:n[0],ns:n,preload:a?[]:l.E.locales})];case 1:return s.sent(),[2,{i18n:i,resources:i.services.resourceStore.data,t:i.t}]}})}),function(A){return n.apply(this,arguments)});function h(A){var e=A.children,t=A.locale,n=A.namespaces,i=A.resources,s=(0,o.Fs)();return d({locale:t,namespaces:n,i18nInstance:s,resources:i}),(0,r.jsx)(a.a3,{i18n:s,children:e})}},1911:function(A,e,t){"use strict";t.r(e),t.d(e,{LayoutHeaderController:function(){return i}});var n=t(7437),r=t(2265),a=t(7231),o=t.n(a),i=function(){var A=function(){var A=document.getElementsByClassName(o().header)[0];A&&0===globalThis.scrollY?A.classList.remove("solid"):A.classList.add("solid")};return(0,r.useEffect)(function(){return A(),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}},[]),(0,n.jsx)(n.Fragment,{})}},4836:function(A,e,t){"use strict";t.r(e),t.d(e,{LanguageSelector:function(){return m}});var n=t(7437),r=t(3919),a=t(4033),o=t(1396),i=t.n(o),s=t(143),c=t(7155),u=t(504),l=t(7922),d=t(646),h=t(6021),g=t(7231),_=t.n(g),m=function(){var A=(0,r.useCurrentLocale)(h.E),e=(0,a.usePathname)();return(0,n.jsx)(s.Z,{id:"bars",className:_().cmLayoutLanguageSelector,withArrow:!1,trigger:(0,n.jsx)(u.G,{className:_().trigger,icon:l.jyZ,size:"lg",fixedWidth:!0}),children:d.G.map(function(t){return(0,n.jsx)(i(),{href:A?null==e?void 0:e.replace(A,t.key):t.key,children:(0,n.jsx)(c.z,{className:_().link,children:t.label})},t.key)})})}},6454:function(A,e,t){"use strict";t.r(e),t.d(e,{MenuSelector:function(){return m}});var n=t(7437),r=t(1359),a=t(3919),o=t(1396),i=t.n(o),s=t(143),c=t(7155),u=t(504),l=t(7922),d=t(646),h=t(6021),g=t(7231),_=t.n(g),m=function(A){var e=A.menu,t=(0,a.useCurrentLocale)(h.E)||d.G[0].key,o=(0,r.$G)().t;return(0,n.jsx)(s.Z,{id:"bars",className:_().cmLayoutMenuSelector,withArrow:!1,trigger:(0,n.jsx)(u.G,{className:_().trigger,icon:l.xiG,size:"lg",fixedWidth:!0}),children:e.map(function(A){return(0,n.jsx)(i(),{href:"/".concat(t).concat(A.url),children:(0,n.jsx)(c.z,{className:_().link,children:o("common:nav.".concat(A.key))})},A.key)})})}},6712:function(A){A.exports={section:"partnership_section__EtW3v",sectionLanding:"partnership_sectionLanding__GAkpA",sectionContainer:"partnership_sectionContainer__C9LGq",photoFrame:"partnership_photoFrame__dQlwh",photo:"partnership_photo__5O2NO",title:"partnership_title__L9kT1",sectionPartnership:"partnership_sectionPartnership__0eIjo",text:"partnership_text__dfAPi",sectionPartners:"partnership_sectionPartners__Jgfvr",list:"partnership_list__nuvPM"}},7231:function(A){A.exports={cmLayout:"layout_cmLayout__znDep",header:"layout_header__8oRW2",cmLayoutHeader:"layout_cmLayoutHeader__2wvik",brand:"layout_brand__Pa4nO",text:"layout_text__cZdVe",nav:"layout_nav__7JfK4",link:"layout_link__yMP0j",cmLayoutLanguageSelector:"layout_cmLayoutLanguageSelector__eZYVm",trigger:"layout_trigger__rRV5O",cmLayoutMenuSelector:"layout_cmLayoutMenuSelector__AhIVW",body:"layout_body__9zeSl",footer:"layout_footer__dOpQm",isHome:"layout_isHome__ejFUR",menu:"layout_menu__o1o_L",container:"layout_container__kPTXw",logo:"layout_logo___Najp",cmLayoutFooter:"layout_cmLayoutFooter__b7zyN",routes:"layout_routes__jmK77",category:"layout_category__n59x4",label:"layout_label__e8mFe",cogman:"layout_cogman__tsTL5",btb:"layout_btb____sp4",image:"layout_image__ZHwT7",icon:"layout_icon__En7JM",copyright:"layout_copyright__BKzz5"}},7337:function(A){A.exports={cmPartnerCard:"card_cmPartnerCard__2qa0b",link:"card_link__yxjbM",body:"card_body__MlCx2",name:"card_name__KF78V",header:"card_header__MaSVT",image:"card_image__MyiF2"}},8662:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/BTB-banner.c5f1c150.png",height:200,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEXz8/Pi4uL9/f3s7Ow6gWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nAXBAQEAAACCILX/nwPYgALV1QEAvgAWxmkQfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},5335:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/logo.ce66710f.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXG/xcXGsLC/vLy8urr/AAC8w8P/CAiLReNPAAAACHRSTlMAalcuKsGa0dLD298AAAAJcEhZcwAAGTIAABkyAa8WpZEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAJklEQVR4nGNgQAAWRkZmMM3GxMQIYjAysbKDZeAMuBQDM1QxFAAAC2AATlXYmxwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2711:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/textBrand-en.f009ac76.png",height:160,width:469,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEX//////f3//////////f3/7+//8/P/oKD/+fnKsgIVAAAACXRSTlMbFzZrQQ9VQTAaM9PSAAAACXBIWXMAAA+/AAAPvwGfsDKnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACBJREFUeJxjYGJgZAAhBhZ2NmYWNmYmBgZWDiZWBkZGAALZAD6sGJ5CAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},4402:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/textBrand-zh-Hant.7464d8cd.png",height:150,width:514,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEX/+vr//v7EXov5AAAAAnRSTlMxQigc6jYAAAAJcEhZcwAAD9EAAA/RAVYwGqQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAEklEQVR4nGNgYGBgZGSAADADAAA2AAXzsWb6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},1499:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/partnership-landing.fe79ade6.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAG0C3//xAAWEAEBAQAAAAAAAAAAAAAAAAABAgT/2gAIAQEAAQUC0Ntf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAEDAQE/ATJf/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8BVv/EABgQAAIDAAAAAAAAAAAAAAAAAAACISJR/9oACAEBAAY/AmtGH//EABYQAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAQABPyEDIFSN/9oADAMBAAIAAwAAABD7/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oACAEDAQE/EEG3/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/EFof/8QAFxABAQEBAAAAAAAAAAAAAAAAAREAgf/aAAgBAQABPxABKUrCdN//2Q==",blurWidth:8,blurHeight:5}},2955:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/dayinUP.62eb9bbe.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXq6uv29vbX4Ofm1ZDEyc/Q1d2ttsX+///w7+/t6+PqtAmapLNojrubv97F2Pf2yhGZo6711l331zLOxqGynkYeVomfp33c2cdjfgJ7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nB3GSRbAIAgE0UaFBjPHDPe/aR6pTX0AiEDm61L+x3PPDoC190s1cWwnXEAt72iNoO1mU4IUIfkBOgQBu5LcKbUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},4127:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/easyLtd.fedd9a65.png",height:198,width:264,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAIVBMVEX///7747T56MX857/98t767dT/+vHj4+Pb3d3R09T07uL9fEONAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nBXFyREAIAwDsXWcA9J/wQz6CMjuBCiFldBKuQRYdgTQsfuHuWfgAQyyAIXs3ZkvAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},48:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/hi-interactive.cee18b09.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEUALCwAAAAZjbwAAAAAAAAalMUk0+00zf8DExsAAwMNR2AAAgIQW3weo+AcuPcAAQEAAAAer+kSZIceqOC1RVw2AAAAE3RSTlMBUHaHdZcOBEduQF0fGSS/JadRLtEhdQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwdy0sWgCAMxdAABV4Bxc/+9+qxmWR04a/3GK1m4FLKbwXKLs99Au6uITHNzaYnpLHW0YIG/gAsFwFomOOWgAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(A){A.O(0,[3676,3143,2971,2472,1744],function(){return A(A.s=3397)}),_N_E=A.O()}]);