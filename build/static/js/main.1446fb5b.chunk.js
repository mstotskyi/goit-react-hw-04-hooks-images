(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1ombT",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1E0vM"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1-6WM",Modal:"Modal_Modal__23VCB"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1cF-V"}},15:function(e,t,a){e.exports={Button:"Button_Button__2QSQE"}},17:function(e,t,a){e.exports={loader:"Loader_loader__2zgRE"}},24:function(e,t,a){},25:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__gwQX6",SearchForm:"Searchbar_SearchForm__1W_yG",SearchForm__button:"Searchbar_SearchForm__button__1FG3c",SearchForm__button__label:"Searchbar_SearchForm__button__label__iGMDj",SearchForm__input:"Searchbar_SearchForm__input__1vsMe"}},48:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(6),o=a.n(n),s=(a(24),a(3)),i=(a(25),a(4)),u=a.n(i),l=a(0);function h(e){var t=e.getSearchQuery,a=Object(c.useState)(""),r=Object(s.a)(a,2),n=r[0],o=r[1];return Object(l.jsx)("header",{className:u.a.Searchbar,children:Object(l.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(n),o("")},children:[Object(l.jsx)("button",{type:"submit",className:u.a.SearchForm__button,children:Object(l.jsx)("span",{className:u.a.SearchForm__button__label,children:"Search"})}),Object(l.jsx)("input",{className:u.a.SearchForm__input,value:n,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){return o(e.target.value)}})]})})}var m=a(13),b=a(14),j=a.n(b),_=a(8),g=a(9),d=function(){function e(){Object(_.a)(this,e),this.searchQuery="",this.page=1,this.hits=0}return Object(g.a)(e,[{key:"fetchPictures",value:function(){var e=this,t="".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(this.searchQuery,"&page=").concat(this.page,"&per_page=15&key=").concat("23134043-5454bb2c28435773c6d2778ec");return fetch(t).then((function(e){return e.json()})).then((function(t){return e.getHits(t.totalHits),t.hits}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"getHits",value:function(e){this.hits=e}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}(),f=a(11),O=a.n(f);function p(e){var t=e.photos,a=e.showModal;return t.length>0&&t.map((function(e){return Object(l.jsx)("li",{className:O.a.ImageGalleryItem,onClick:a,children:Object(l.jsx)("img",{src:e.webformatURL,alt:e.tags,"data-source":e.largeImageURL,className:O.a.ImageGalleryItem__image})},e.webformatURL)}))}var y=a(15),S=a.n(y);function x(e){var t=e.handleOnClick;return Object(l.jsx)("button",{type:"button",className:S.a.Button,onClick:t,children:"LoadMore"})}var v=a(12),I=a.n(v);function F(e){var t=e.img,a=e.togleModal;return Object(n.createPortal)(Object(l.jsx)("div",{className:I.a.Overlay,onClick:a,children:Object(l.jsx)("div",{className:I.a.Modal,children:Object(l.jsx)("img",{src:t.dataset.source,alt:t.alt})})}),document.getElementById("modalRoot"))}var G=a(19),M=a(18),k=a(16),w=a.n(k),N=(a(47),a(17)),Q=a.n(N),C=function(e){Object(G.a)(a,e);var t=Object(M.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(l.jsx)(w.a,{type:"Watch",color:"#00BFFF",height:100,width:100,timeout:1e5,className:Q.a.loader})}}]),a}(c.Component),B=new d;function E(e){var t=e.searchQuery,a=Object(c.useState)([]),r=Object(s.a)(a,2),n=r[0],o=r[1],i=Object(c.useState)("init"),u=Object(s.a)(i,2),h=u[0],b=u[1],_=Object(c.useState)(!1),g=Object(s.a)(_,2),d=g[0],f=g[1],O=Object(c.useState)(null),y=Object(s.a)(O,2),S=y[0],v=y[1],I=Object(c.useState)(!1),G=Object(s.a)(I,2),M=G[0],k=G[1];Object(c.useEffect)((function(){""!==t&&(b("pending"),B.query=t,B.resetPage(),B.fetchPictures().then((function(e){o(e),b("success")})).catch((function(e){b("error")})))}),[t]);return"init"===h?Object(l.jsx)("h1",{children:"Hallo! Search something!"}):"pending"===h?Object(l.jsx)(C,{}):"success"===h?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:j.a.ImageGallery,children:Object(l.jsx)(p,{photos:n,showModal:function(e){f(!d),v(e.target)}})}),M&&Object(l.jsx)(C,{}),Object(l.jsx)(x,{handleOnClick:function(e){B.incrementPage(),k(!0),B.fetchPictures().then((function(e){o((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e))})),k(!1),b("success"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){b("error")}))}}),d&&Object(l.jsx)(F,{togleModal:function(){return f(!d)},img:S})]}):void("error"===h&&alert("ERROR!!"))}function P(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{getSearchQuery:function(e){return r(e)}}),Object(l.jsx)(E,{searchQuery:a})]})}o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1446fb5b.chunk.js.map