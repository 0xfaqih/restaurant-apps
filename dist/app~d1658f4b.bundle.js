/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #1f1f29;
  display: grid;
}

/* 
main
*/
main {
  margin: 0 auto;
  width: 100%;
}

main .title {
  margin-top: 40px;
  text-align: center;
}

/* 
card
*/

.content {
  margin-top: 10px;
  min-height: 100vh;
}

.content__heading {
  text-align: center;
  font-size: 18px;
}

.card__list {
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.card__item {
  border-radius: 10px;
  background-color: #f5f5fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  position: relative;
  width: 100%;
}

.card__item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.card__item h3 {
  position: absolute;
  background-color: #000000c5;
  color: #fdd037;
  font-size: medium;
  margin-top: 12px;
  padding: 9px;
  border-radius: 0 5px 5px 0;
}

.card__item p {
  margin: 10px;
  font-size: 13px;
}

.card__item h4 {
  margin: 10px;
  font-size: 16px;
}

.card__item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card__list .no__results {
  text-align: center;
  font-size: 15px;
  grid-column: 1 / -1;
  gap: 0;
}

.card__list img.no__results {
  max-width: 300px;
  margin: auto;
}

/* 
detail restaurant
*/
.restaurant {
  margin: 15px;
  background-color: #f5f5fa;
  border-radius: 5px;
}

.restaurant img {
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 5px;
}

.restaurant .title {
  background-color: #fdd037;
  border-radius: 0 0 0 5px;
  margin-top: -10px;
  padding: 10px 15px;
  font-size: 13px;
}

.restaurant .restaurant-title {
  margin-top: 10px;
}

.restaurant .address {
  margin: 10px;
}

.restaurant h3 {
  font-size: 16px;
}

.restaurant p {
  font-size: 14px;
}

.restaurant .description,
.restaurant-menu-title
{
  margin-top: 13px;
  padding: 0 10px;
}

.restaurant-menu-title {
  text-align: center;
}

.restaurant-menu {
  font-size: 14px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr;
}

.restaurant-menu .foods,
.restaurant-menu .drinks {
  margin: 10px auto 0 30px;
}

.restaurant-menu ul li {
  font-weight: 300;
  margin-left: 20px;
}

.restaurant .review-container-title {
  background-color: #e6e6eb;
  margin-top: 20px;
  padding: 10px;
}

.restaurant .review-container {
  padding: 10px 15px;
  display: grid;
  gap: 10px;
  background-color: #e6e6eb;
}

/* 
review form
 */
 #addReviewContainer {
  background-color: #f5f5fa;
  margin: 12px;
  padding: 10px 13px;
  border-radius: 5px;
 }

 #reviewForm .title-review-form {
  font-size: 16px;
  margin-bottom: 5px;
 }

 #reviewForm {
  display: grid;
  max-width: 500px;
  margin: 0 auto;
 }

 #reviewForm label {
  font-size: 14px;
  margin-top: 12px;
 }

 #reviewForm input {
  margin-top: 2px;
  min-height: 44px;
  border-radius: 2px;
  border: #f3d571c0 solid 1px;
  font-size: 15px;
 }

 #reviewForm input:focus {
  outline: 2px solid #fdd037;
}

 #reviewForm button {
  background-color: #dbd5d5;
  margin-top: 10px;
  min-height: 44px;
  max-width: 100px;
  border: none;
  border-radius: 2px;
 }

 #reviewForm button:hover {
  background-color: #e9dede;
 }

/* 
favorite
*/
.favorite {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db0000;
  
  position: fixed;
  bottom: 16px;
  right: 16px;
  border-radius: 50%;
  border: 0;
  
  font-size: 18px;
  color: white;
  cursor: pointer;
}

/* 
Skip to content
*/
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background-color: #000;
  color: #fff;
  padding: 10px;
  z-index: 9999;
}

.skip-link:focus {
  top: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-size: 12px;\r\n  color: #1f1f29;\r\n  display: grid;\r\n}\r\n\r\n/* \r\nmain\r\n*/\r\nmain {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\nmain .title {\r\n  margin-top: 40px;\r\n  text-align: center;\r\n}\r\n\r\n/* \r\ncard\r\n*/\r\n\r\n.content {\r\n  margin-top: 10px;\r\n  min-height: 100vh;\r\n}\r\n\r\n.content__heading {\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n\r\n.card__list {\r\n  margin: 30px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 20px;\r\n}\r\n\r\n.card__item {\r\n  border-radius: 10px;\r\n  background-color: #f5f5fa;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n  transition: box-shadow 0.3s ease;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.card__item:hover {\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.card__item h3 {\r\n  position: absolute;\r\n  background-color: #000000c5;\r\n  color: #fdd037;\r\n  font-size: medium;\r\n  margin-top: 12px;\r\n  padding: 9px;\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.card__item p {\r\n  margin: 10px;\r\n  font-size: 13px;\r\n}\r\n\r\n.card__item h4 {\r\n  margin: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.card__item img {\r\n  width: 100%;\r\n  height: 150px;\r\n  object-fit: cover;\r\n  border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.card__list .no__results {\r\n  text-align: center;\r\n  font-size: 15px;\r\n  grid-column: 1 / -1;\r\n  gap: 0;\r\n}\r\n\r\n.card__list img.no__results {\r\n  max-width: 300px;\r\n  margin: auto;\r\n}\r\n\r\n/* \r\ndetail restaurant\r\n*/\r\n.restaurant {\r\n  margin: 15px;\r\n  background-color: #f5f5fa;\r\n  border-radius: 5px;\r\n}\r\n\r\n.restaurant img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px 5px 0 5px;\r\n}\r\n\r\n.restaurant .title {\r\n  background-color: #fdd037;\r\n  border-radius: 0 0 0 5px;\r\n  margin-top: -10px;\r\n  padding: 10px 15px;\r\n  font-size: 13px;\r\n}\r\n\r\n.restaurant .restaurant-title {\r\n  margin-top: 10px;\r\n}\r\n\r\n.restaurant .address {\r\n  margin: 10px;\r\n}\r\n\r\n.restaurant h3 {\r\n  font-size: 16px;\r\n}\r\n\r\n.restaurant p {\r\n  font-size: 14px;\r\n}\r\n\r\n.restaurant .description,\r\n.restaurant-menu-title\r\n{\r\n  margin-top: 13px;\r\n  padding: 0 10px;\r\n}\r\n\r\n.restaurant-menu-title {\r\n  text-align: center;\r\n}\r\n\r\n.restaurant-menu {\r\n  font-size: 14px;\r\n  display: grid;\r\n  justify-content: space-around;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n.restaurant-menu .foods,\r\n.restaurant-menu .drinks {\r\n  margin: 10px auto 0 30px;\r\n}\r\n\r\n.restaurant-menu ul li {\r\n  font-weight: 300;\r\n  margin-left: 20px;\r\n}\r\n\r\n.restaurant .review-container-title {\r\n  background-color: #e6e6eb;\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.restaurant .review-container {\r\n  padding: 10px 15px;\r\n  display: grid;\r\n  gap: 10px;\r\n  background-color: #e6e6eb;\r\n}\r\n\r\n/* \r\nreview form\r\n */\r\n #addReviewContainer {\r\n  background-color: #f5f5fa;\r\n  margin: 12px;\r\n  padding: 10px 13px;\r\n  border-radius: 5px;\r\n }\r\n\r\n #reviewForm .title-review-form {\r\n  font-size: 16px;\r\n  margin-bottom: 5px;\r\n }\r\n\r\n #reviewForm {\r\n  display: grid;\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n }\r\n\r\n #reviewForm label {\r\n  font-size: 14px;\r\n  margin-top: 12px;\r\n }\r\n\r\n #reviewForm input {\r\n  margin-top: 2px;\r\n  min-height: 44px;\r\n  border-radius: 2px;\r\n  border: #f3d571c0 solid 1px;\r\n  font-size: 15px;\r\n }\r\n\r\n #reviewForm input:focus {\r\n  outline: 2px solid #fdd037;\r\n}\r\n\r\n #reviewForm button {\r\n  background-color: #dbd5d5;\r\n  margin-top: 10px;\r\n  min-height: 44px;\r\n  max-width: 100px;\r\n  border: none;\r\n  border-radius: 2px;\r\n }\r\n\r\n #reviewForm button:hover {\r\n  background-color: #e9dede;\r\n }\r\n\r\n/* \r\nfavorite\r\n*/\r\n.favorite {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n/* \r\nSkip to content\r\n*/\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  background-color: #000;\r\n  color: #fff;\r\n  padding: 10px;\r\n  z-index: 9999;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 499px) {
  .nav {
    z-index: 10;
    background-color: #fff;
    width: 300px;
    position: absolute;

    /* This trasform moves the drawer off canvas. */
    -webkit-transform: translate(-300px, 0);
    transform: translate(-300px, 0);

    /* Optionally, we animate the drawer. */
    transition: transform 0.3s ease;
  }

  .open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .nav__item {
    display: list-item;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    text-align: left;
  }

  .card__list {
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 500px) {
  .mobile__menu {
    display: none;
  }

  .nav__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .nav__item {
    margin: auto;
  }

  .restaurant-menu {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 700px) {
  .card__list {
    grid-template-columns: 1fr 1fr;
  }

  .restaurant .review-container {
    grid-template-columns: 1fr 1fr;
  }

  .restaurant-detail {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .restaurant-detail .img {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .restaurant-detail .title {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  
  .restaurant-detail .address {
    grid-row-start: 2;
    grid-column-end: 3;
  }

  .restaurant-detail .description,
  .restaurant-detail .restaurant-menu, 
  .restaurant-detail .review-container {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .restaurant-detail .review-container-title {
    border-radius: 0 20px 0 0;
  }
}

@media screen and (min-width: 800px) {
  .nav__list {
    max-width: 800px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 900px) {
  main .title {
    font-size: 20px;
  }

  .card__list {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .restaurant .review-container {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .restaurant-detail img {
    max-height: 677px;
    margin: 0 auto;
  }

  .restaurant-detail  {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .restaurant-detail .description {
    grid-column-start: 2;
    grid-row-start: 1;
  }

  .card__item h3 {
    font-size: 17px
  }

  .card__item p {
    font-size: 14px;
  }

  .card__item h4 {
    font-size: 17px;
  }

  .restaurant h3 {
    font-size: 17px;
  }

  .restaurant p {
    font-size: 15px;
  }

  .restaurant-menu {
    font-size: 15px;
  }

  figure {
    display: grid;
    grid-template-columns: 3fr, 1fr;
  }

  figure blockquote {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;
    height: 100%;
  }

  figure blockquote p {
    align-self: center;
    font-size: 14px;
  }

  figure img,
  figure figcaption {
    width: 200px;
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: center;
  }

  figure figcaption {
    text-align: center;
    font-size: 14px;
  }
}

@media screen and (min-width: 1200px) {
  main {
    max-width: 1200px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;;IAElB,+CAA+C;IAC/C,uCAAuC;IACvC,+BAA+B;;IAE/B,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kCAAkC;IAClC,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,yBAAyB;EAC3B;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,8BAA8B;EAChC;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;;;IAGE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,gBAAgB;IAChB,cAAc;EAChB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,kCAAkC;EACpC;;EAEA;IACE,kCAAkC;EACpC;;EAEA;IACE,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,oBAAoB;IACpB,iBAAiB;EACnB;;EAEA;IACE;EACF;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,+BAA+B;EACjC;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;;IAEE,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;EACtB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@media screen and (max-width: 499px) {\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #fff;\r\n    width: 300px;\r\n    position: absolute;\r\n\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-300px, 0);\r\n    transform: translate(-300px, 0);\r\n\r\n    /* Optionally, we animate the drawer. */\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n\r\n  .nav__item {\r\n    display: list-item;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n\r\n  .card__list {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .mobile__menu {\r\n    display: none;\r\n  }\r\n\r\n  .nav__list {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .nav__item {\r\n    margin: auto;\r\n  }\r\n\r\n  .restaurant-menu {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n  .card__list {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .restaurant .review-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .restaurant-detail {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n\r\n  .restaurant-detail .img {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n  }\r\n\r\n  .restaurant-detail .title {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n  }\r\n  \r\n  .restaurant-detail .address {\r\n    grid-row-start: 2;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .restaurant-detail .description,\r\n  .restaurant-detail .restaurant-menu, \r\n  .restaurant-detail .review-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .restaurant-detail .review-container-title {\r\n    border-radius: 0 20px 0 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  main .title {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .card__list {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n\r\n  .restaurant .review-container {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n\r\n  .restaurant-detail img {\r\n    max-height: 677px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .restaurant-detail  {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n  }\r\n\r\n  .restaurant-detail .description {\r\n    grid-column-start: 2;\r\n    grid-row-start: 1;\r\n  }\r\n\r\n  .card__item h3 {\r\n    font-size: 17px\r\n  }\r\n\r\n  .card__item p {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .card__item h4 {\r\n    font-size: 17px;\r\n  }\r\n\r\n  .restaurant h3 {\r\n    font-size: 17px;\r\n  }\r\n\r\n  .restaurant p {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .restaurant-menu {\r\n    font-size: 15px;\r\n  }\r\n\r\n  figure {\r\n    display: grid;\r\n    grid-template-columns: 3fr, 1fr;\r\n  }\r\n\r\n  figure blockquote {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n    display: grid;\r\n    height: 100%;\r\n  }\r\n\r\n  figure blockquote p {\r\n    align-self: center;\r\n    font-size: 14px;\r\n  }\r\n\r\n  figure img,\r\n  figure figcaption {\r\n    width: 200px;\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n    justify-self: center;\r\n  }\r\n\r\n  figure figcaption {\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(756);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(948);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			954: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [666,818,135,337,268], () => (__webpack_require__(91)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app~d1658f4b.bundle.js.map