(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={loadButton:"Button_loadButton__2P7Cn",Button:"Button_Button__3pUoK"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__7TqJD",Modal:"Modal_Modal__fFUPT"}},23:function(e,t,a){e.exports={loader:"Loader_loader__2XrIc"}},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__14wKe",SearchForm:"Searchbar_SearchForm__1yGD8",Button:"Searchbar_Button__320Ot",Label:"Searchbar_Label__1UDES",Input:"Searchbar_Input__35B6l"}},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),i=a(12),s=a(4),l=a(5),u=a.n(l),m=a(1),d=function(e){var t=e.onSubmit,a=Object(n.useState)(""),o=Object(s.a)(a,2),r=o[0],c=o[1];return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(e){e.preventDefault(),r.trim()&&(t(r),c(""))},children:[Object(m.jsx)("button",{type:"submit",className:u.a.Button,children:Object(m.jsx)("span",{className:u.a.Label,children:"Search"})}),Object(m.jsx)("input",{className:u.a.Input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target.value;c(t)}})]})})},b=a(8),j=a.n(b),g=a(2),h=a.n(g),f=function(e){var t=e.imageId,a=e.smallImg,n=e.onClick;return Object(m.jsx)("li",{id:t,children:Object(m.jsx)("img",{className:j.a.image,src:a,alt:"query",onClick:n})})};f.prototype={smallImg:h.a.string.isRequired,imageId:h.a.number.isRequired,onClick:h.a.func.isRequired};var O=f,p=function(e){var t=e.images,a=e.onModal;return Object(m.jsx)("ul",{className:j.a.ImageGallery,children:t.map((function(e){var t=e.imageId,n=e.smallImg,o=e.modalImg;return Object(m.jsx)(O,{imageId:t,smallImg:n,onClick:function(){return a(o)}},t)}))})};p.prototype={images:h.a.arrayOf(h.a.shape({imageId:h.a.string.isRequired,smallImg:h.a.string.isRequired,modalImg:h.a.string.isRequired}).isRequired).isRequired,onModal:h.a.func.isRequired};var _=p,x=a(10),y=a.n(x),I=function(e){var t=e.onClickLoadMore;return Object(m.jsx)("div",{className:y.a.loadButton,children:Object(m.jsx)("button",{className:y.a.Button,onClick:function(){return t()},children:"Load more"})})},v=a(11),S=a.n(v),k=function(e){var t=e.image,a=e.query,o=e.onCloseModal,r=function(e){"Escape"===e.key&&o()};Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}}));return Object(m.jsx)("div",{className:S.a.Overlay,onClick:function(e){o()},children:Object(m.jsx)("div",{className:S.a.Modal,children:Object(m.jsx)("img",{src:t,alt:a})})})},q=a(22),w=a.n(q),B=a(23),M=a.n(B),C=(a(50),function(){return Object(m.jsx)("div",{className:M.a.loader,children:Object(m.jsx)(w.a,{type:"Hearts",color:"#00BFFF",height:80,width:80})})}),N=a(24),L=a.n(N),R=function(e){return e.map((function(e){return{imageId:e.id,smallImg:e.webformatURL,modalImg:e.largeImageURL}}))},F=(a(69),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(1),c=Object(s.a)(r,2),l=c[0],u=c[1],b=Object(n.useState)(!1),j=Object(s.a)(b,2),g=j[0],h=j[1],f=Object(n.useState)([]),O=Object(s.a)(f,2),p=O[0],x=O[1],y=Object(n.useState)(!1),v=Object(s.a)(y,2),S=v[0],q=v[1],w=Object(n.useState)(""),B=Object(s.a)(w,2),M=B[0],N=B[1];Object(n.useEffect)((function(){""!==a&&(F(a,l),l>1&&(console.log("page",l),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})))}),[a,l]);var F=function(e,t){h(!0),function(e,t){return L.a.get("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat("21924211-a56ef8093bc4c324081574229"))}(e,t).then((function(e){var t=e.data.hits;return x((function(e){return[].concat(Object(i.a)(e),Object(i.a)(R(t)))}))})).catch((function(e){return console.log("error",e)})).finally((function(){h(!1)}))},G=function(e){N(e),q(!S)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{onSubmit:function(e){o(e),x([]),u(1)}}),!!p.length&&Object(m.jsx)(_,{images:p,onModal:G}),p.length>=12&&!g&&Object(m.jsx)(I,{onClickLoadMore:function(e){u((function(e){return e+1}))}}),S&&Object(m.jsx)(k,{image:M,query:a,onCloseModal:G}),g&&Object(m.jsx)(C,{})]})});c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={ImageGallery:"Gallery_ImageGallery__1316s",ImageGalleryItem:"Gallery_ImageGalleryItem__qMNLW",image:"Gallery_image__3lOi3"}}},[[70,1,2]]]);
//# sourceMappingURL=main.1aa88251.chunk.js.map