(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402],{7535:function(e,A,t){var n={"./en/about.json":[7018,18],"./en/common.json":[9945,945],"./en/cooperation.json":[9417,417],"./en/hiring.json":[7308,308],"./en/home.json":[6496,60],"./en/review-2018.json":[9159,159],"./en/review-2019.json":[5031,31],"./en/review-2020.json":[9284,284],"./en/review-2021.json":[8653,653],"./en/review-2022.json":[2475,475],"./en/review-2023.json":[5363,363],"./en/review.json":[9784,914],"./en/service.json":[4654,654],"./zh-Hant/about.json":[78,78],"./zh-Hant/common.json":[4694,694],"./zh-Hant/cooperation.json":[5079,79],"./zh-Hant/hiring.json":[2172,172],"./zh-Hant/home.json":[8605,605],"./zh-Hant/review-2018.json":[2905,784],"./zh-Hant/review-2019.json":[9177,177],"./zh-Hant/review-2020.json":[9223,223],"./zh-Hant/review-2021.json":[4322,322],"./zh-Hant/review-2022.json":[5492,492],"./zh-Hant/review-2023.json":[5619,619],"./zh-Hant/review.json":[195,195],"./zh-Hant/service.json":[9306,306]};function r(e){if(!t.o(n,e))return Promise.resolve().then(function(){var A=Error("Cannot find module '"+e+"'");throw A.code="MODULE_NOT_FOUND",A});var A=n[e],r=A[0];return t.e(A[1]).then(function(){return t.t(r,19)})}r.keys=function(){return Object.keys(n)},r.id=7535,e.exports=r},2360:function(e,A,t){Promise.resolve().then(t.t.bind(t,413,23)),Promise.resolve().then(t.t.bind(t,8326,23)),Promise.resolve().then(t.bind(t,8662)),Promise.resolve().then(t.bind(t,5335)),Promise.resolve().then(t.bind(t,2711)),Promise.resolve().then(t.bind(t,4402)),Promise.resolve().then(t.bind(t,1979)),Promise.resolve().then(t.bind(t,1896)),Promise.resolve().then(t.bind(t,1955)),Promise.resolve().then(t.bind(t,7305)),Promise.resolve().then(t.bind(t,2286)),Promise.resolve().then(t.bind(t,883)),Promise.resolve().then(t.t.bind(t,828,23)),Promise.resolve().then(t.bind(t,7295)),Promise.resolve().then(t.bind(t,1927)),Promise.resolve().then(t.bind(t,1911)),Promise.resolve().then(t.bind(t,4836)),Promise.resolve().then(t.t.bind(t,7231,23)),Promise.resolve().then(t.bind(t,6454)),Promise.resolve().then(t.t.bind(t,4299,23)),Promise.resolve().then(t.t.bind(t,8550,23))},6021:function(e,A,t){"use strict";t.d(A,{E:function(){return r}});var n=t(646),r={locales:n.G.map(function(e){return e.key}),defaultLocale:n.G[0].key,prefixDefault:!0,localeDetector:!1}},646:function(e,A,t){"use strict";t.d(A,{G:function(){return n}});var n=[{key:"zh-Hant",label:"繁體中文"},{key:"en",label:"English"}]},7295:function(e,A,t){"use strict";t.r(A),t.d(A,{Button:function(){return a}});var n=t(5029),r=t(7437),i=t(7155),a=function(e){return(0,r.jsx)(i.z,(0,n._)({},e))}},1927:function(e,A,t){"use strict";t.r(A),t.d(A,{TranslationsProvider:function(){return d}});var n,r=t(7437),i=t(1359),a=t(3968),o=t(6687),s=t(44),c=t(7083),l=t(3087),u=t(6021),_=(n=(0,o._)(function(e){var A,n,r,i,o;return(0,s.Jh)(this,function(s){switch(s.label){case 0:return A=e.locale,n=e.namespaces,r=e.i18nInstance,i=e.resources,(o=r||(0,a.Fs)()).use(c.D),i||o.use((0,l.Z)(function(e,A){return t(7535)("./".concat(e,"/").concat(A,".json"))})),[4,o.init({lng:A,resources:i,fallbackLng:u.E.defaultLocale,supportedLngs:u.E.locales,defaultNS:n[0],fallbackNS:n[0],ns:n,preload:i?[]:u.E.locales})];case 1:return s.sent(),[2,{i18n:o,resources:o.services.resourceStore.data,t:o.t}]}})}),function(e){return n.apply(this,arguments)});function d(e){var A=e.children,t=e.locale,n=e.namespaces,o=e.resources,s=(0,a.Fs)();return _({locale:t,namespaces:n,i18nInstance:s,resources:o}),(0,r.jsx)(i.a3,{i18n:s,children:A})}},1911:function(e,A,t){"use strict";t.r(A),t.d(A,{LayoutHeaderController:function(){return o}});var n=t(7437),r=t(2265),i=t(7231),a=t.n(i),o=function(){var e=function(){var e=document.getElementsByClassName(a().header)[0];e&&0===globalThis.scrollY?e.classList.remove("solid"):e.classList.add("solid")};return(0,r.useEffect)(function(){return e(),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),(0,n.jsx)(n.Fragment,{})}},4836:function(e,A,t){"use strict";t.r(A),t.d(A,{LanguageSelector:function(){return m}});var n=t(7437),r=t(3919),i=t(4033),a=t(1396),o=t.n(a),s=t(143),c=t(7155),l=t(504),u=t(7922),_=t(646),d=t(6021),g=t(7231),h=t.n(g),m=function(){var e=(0,r.useCurrentLocale)(d.E),A=(0,i.usePathname)();return(0,n.jsx)(s.Z,{id:"bars",className:h().cmLayoutLanguageSelector,withArrow:!1,trigger:(0,n.jsx)(l.G,{className:h().trigger,icon:u.jyZ,size:"lg",fixedWidth:!0}),children:_.G.map(function(t){return(0,n.jsx)(o(),{href:e?null==A?void 0:A.replace(e,t.key):"",children:(0,n.jsx)(c.z,{className:h().link,children:t.label})},t.key)})})}},6454:function(e,A,t){"use strict";t.r(A),t.d(A,{MenuSelector:function(){return m}});var n=t(7437),r=t(1359),i=t(3919),a=t(1396),o=t.n(a),s=t(143),c=t(7155),l=t(504),u=t(7922),_=t(646),d=t(6021),g=t(7231),h=t.n(g),m=function(e){var A=e.menu,t=(0,i.useCurrentLocale)(d.E)||_.G[0].key,a=(0,r.$G)().t;return(0,n.jsx)(s.Z,{id:"bars",className:h().cmLayoutMenuSelector,withArrow:!1,trigger:(0,n.jsx)(l.G,{className:h().trigger,icon:u.xiG,size:"lg",fixedWidth:!0}),children:A.map(function(e){return(0,n.jsx)(o(),{href:"/".concat(t).concat(e.url),children:(0,n.jsx)(c.z,{className:h().link,children:a("common:nav.".concat(e.key))})},e.key)})})}},828:function(e){e.exports={section:"reviewArticle_section__Jdrkj",sectionLanding:"reviewArticle_sectionLanding__GItsz",sectionContainer:"reviewArticle_sectionContainer__W2AJH",photoFrame:"reviewArticle_photoFrame__s3q4t",photo:"reviewArticle_photo__kyadZ",title:"reviewArticle_title__Yx1Jy",sectionReview:"reviewArticle_sectionReview__mEe1q",text:"reviewArticle_text__lt4Yg",sectionContent:"reviewArticle_sectionContent___6sjW",part:"reviewArticle_part__1Ye_z",packages:"reviewArticle_packages__EjPU4",list:"reviewArticle_list___coUd",head:"reviewArticle_head__IXpAd"}},7231:function(e){e.exports={cmLayout:"layout_cmLayout__znDep",header:"layout_header__8oRW2",cmLayoutHeader:"layout_cmLayoutHeader__2wvik",brand:"layout_brand__Pa4nO",text:"layout_text__cZdVe",nav:"layout_nav__7JfK4",link:"layout_link__yMP0j",cmLayoutLanguageSelector:"layout_cmLayoutLanguageSelector__eZYVm",trigger:"layout_trigger__rRV5O",cmLayoutMenuSelector:"layout_cmLayoutMenuSelector__AhIVW",body:"layout_body__9zeSl",footer:"layout_footer__dOpQm",isHome:"layout_isHome__ejFUR",menu:"layout_menu__o1o_L",container:"layout_container__kPTXw",logo:"layout_logo___Najp",cmLayoutFooter:"layout_cmLayoutFooter__b7zyN",routes:"layout_routes__jmK77",category:"layout_category__n59x4",label:"layout_label__e8mFe",cogman:"layout_cogman__tsTL5",btb:"layout_btb____sp4",image:"layout_image__ZHwT7",icon:"layout_icon__En7JM",copyright:"layout_copyright__BKzz5"}},8550:function(e){e.exports={cmPackageCard:"card_cmPackageCard___jSq0",logo:"card_logo__zVez6",content:"card_content__VqRJt",title:"card_title__US_4L",version:"card_version__khaTp",links:"card_links__ReGv4",link:"card_link__WLW4M",icon:"card_icon__xLgzh",description:"card_description__slY5M",js:"card_js__W77R_",react:"card_react__AX9Ql",vue:"card_vue__Wn6Iz",ng:"card_ng__WSjAX"}},4299:function(e){e.exports={cmProjectCard:"card_cmProjectCard__TCK41",mask:"card_mask__eX8fn",closed:"card_closed__18MxR",type:"card_type__0BjG7",description:"card_description__EDhhD",tech:"card_tech__cYRoI"}},8662:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/BTB-banner.c5f1c150.png",height:200,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEXz8/Pi4uL9/f3s7Ow6gWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nAXBAQEAAACCILX/nwPYgALV1QEAvgAWxmkQfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},5335:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/logo.ce66710f.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXG/xcXGsLC/vLy8urr/AAC8w8P/CAiLReNPAAAACHRSTlMAalcuKsGa0dLD298AAAAJcEhZcwAAGTIAABkyAa8WpZEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAJklEQVR4nGNgQAAWRkZmMM3GxMQIYjAysbKDZeAMuBQDM1QxFAAAC2AATlXYmxwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2711:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/textBrand-en.f009ac76.png",height:160,width:469,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEX//////f3//////////f3/7+//8/P/oKD/+fnKsgIVAAAACXRSTlMbFzZrQQ9VQTAaM9PSAAAACXBIWXMAAA+/AAAPvwGfsDKnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACBJREFUeJxjYGJgZAAhBhZ2NmYWNmYmBgZWDiZWBkZGAALZAD6sGJ5CAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},4402:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/textBrand-zh-Hant.7464d8cd.png",height:150,width:514,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEX/+vr//v7EXov5AAAAAnRSTlMxQigc6jYAAAAJcEhZcwAAD9EAAA/RAVYwGqQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAEklEQVR4nGNgYGBgZGSAADADAAA2AAXzsWb6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},1979:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/2018.aebd72cd.png",height:339,width:997,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEX2+fj+///w9PP8/fvi8efO4fbY7N/N6dSC/E/VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nAXBgQEAMAiDMGh1/v/xEgLQXV7mJpWgRT8DFgA2dP4nhQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},1896:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/2019.c5f1c150.png",height:200,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEXz8/Pi4uL9/f3s7Ow6gWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nAXBAQEAAACCILX/nwPYgALV1QEAvgAWxmkQfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},1955:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/2020.10ae2ae8.png",height:253,width:1021,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEX09vX5+/qz0fKvEYucAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgYGBgYGRgYAIRICYjAAA+AAemQRI2AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},7305:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/2021.01497c49.png",height:1024,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEXy8vLh4eLZ2dnf3t6LhIT9/f1rXl7R0tLIyMh0c3PX0dHBwcFXV1fp6OhLXMFTAAAACXBIWXMAAB48AAAePAHLd8FkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACdJREFUeJwFwYkBADAEBMHlCPL0325mAMiYh0zKuUlEyfs0a/kuN30KLwCdbu3qmQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},2286:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/2022.f6181a2d.png",height:395,width:1420,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEUSIB8QNCS5zcbEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgYGRkZGBgZIBgBgYGAABRAAYHodk0AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},883:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/2023.6a07165c.png",height:342,width:1308,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEURHR4VJCMMOeohAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNgZGRkYGBgABEQBgAAUwAHtdfRfwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}}},function(e){e.O(0,[676,143,971,472,744],function(){return e(e.s=2360)}),_N_E=e.O()}]);