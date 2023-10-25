(self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || []).push([[135],{

/***/ 897:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var FooterApp = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FooterApp, _HTMLElement);
  var _super = _createSuper(FooterApp);
  function FooterApp() {
    _classCallCheck(this, FooterApp);
    return _super.apply(this, arguments);
  }
  _createClass(FooterApp, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.attachShadow({
        mode: 'open'
      });
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowRoot.innerHTML = "\n     <style>\n    * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    }\n    \n    body,\n    html {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%;\n      overflow-x: hidden;\n    }\n    \n    body {\n      font-family: 'Montserrat', sans-serif;\n      font-size: 12px;\n      color: #1f1f29;\n    }\n\n    footer {\n      background-color: #e6e6eb;\n      display: flex;\n      justify-content: space-around;\n      width: 100%;\n      height: 60px;\n      overflow: hidden;\n    }\n    \n    footer p {\n      color: black;\n      font-weight: 400;\n      text-align: center;\n      padding: 20px;\n      font-size: 14px;\n    }\n    </style>\n      <footer>\n      <p>Copyright &copy; 2023 - Kenyangin</p>\n      </footer>\n      ";
    }
  }]);
  return FooterApp;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('footer-app', FooterApp);

/***/ }),

/***/ 470:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HeroApp = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HeroApp, _HTMLElement);
  var _super = _createSuper(HeroApp);
  function HeroApp() {
    _classCallCheck(this, HeroApp);
    return _super.apply(this, arguments);
  }
  _createClass(HeroApp, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.attachShadow({
        mode: 'open'
      });
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowRoot.innerHTML = "\n     <style>\n     * {\n     padding: 0;\n     margin: 0;\n     box-sizing: border-box;\n   }\n   \n   body,\n   html {\n     margin: 0;\n     padding: 0;\n     width: 100%;\n     height: 100%;\n   }\n   \n   body {\n     font-family: 'Montserrat', sans-serif;\n     font-size: 12px;\n     color: #1f1f29;\n   }\n   \n   .hero {\n     display: flex;\n     align-items: center;\n     text-align: center;\n     background-image: url('../images/heros/hero.jpg');\n     background-position: center;\n     background-size: cover;\n     background-color: green;\n     aspect-ratio: 16 / 9;\n     object-fit: cover;\n   }\n   \n   .hero__inner {\n     display: flex;\n     align-items: center;\n     flex-direction: column;\n     padding: 30px 20px;\n     width: 100%;\n     background-color: rgba(0, 0, 0, 0.541);\n   }\n   \n   .hero__title {\n     color: #fff;\n     font-weight: 600;\n     font-size: 25px;\n     max-width: 800px;\n   }\n   \n   .hero__tagline {\n     color: #fff;\n     max-width: 800px;\n     margin-top: 16px;\n     font-size: 18px;\n     font-weight: 300;\n   }\n\n   @media screen and (max-width: 600px) {\n    .hero {\n      background-image: url('../images/heros/hero-small.jpg');\n    }\n  }\n\n  @media screen and (min-width: 601px) {\n    .hero {\n      background-image: url('../images/heros/hero-large.jpg');\n    }\n  }\n     </style>\n\n  <div class=\"hero\">\n    <div class=\"hero__inner\">\n      <h2 class=\"hero__title\">Dapatkan Kekenyangan Duniawi Dengan Kuliner yang Tak Terlupakan</h2>\n      <p class=\"hero__tagline\">\n        Jelajahi ragam kuliner Indonesia di restoran-restoran yang tersebar di seluruh Indonesia. Rasakan kelezatan\n        hidangan tradisional dan nikmat kekenyangan\n      </p>\n    </div>\n  </div>\n     ";
    }
  }]);
  return HeroApp;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('hero-app', HeroApp);

/***/ }),

/***/ 543:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var LoadingApp = /*#__PURE__*/function (_HTMLElement) {
  _inherits(LoadingApp, _HTMLElement);
  var _super = _createSuper(LoadingApp);
  function LoadingApp() {
    _classCallCheck(this, LoadingApp);
    return _super.apply(this, arguments);
  }
  _createClass(LoadingApp, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.attachShadow({
        mode: 'open'
      });
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowRoot.innerHTML = "\n      <style>\n      #loading-container {\n         display: flex;\n         justify-content: center;\n         align-items: center;\n         height: 10vh;\n         width: 100%;\n         position: fixed;\n         background: rgba(255, 255, 255, 0.8);\n         z-index: 1000;\n       }\n       \n       .loader {\n         border: 8px solid #f3f3f3;\n         border-top: 8px solid #3498db;\n         border-radius: 50%;\n         width: 50px;\n         height: 50px;\n         animation: spin 2s linear infinite;\n       }\n       \n       @keyframes spin {\n         0% { transform: rotate(0deg); }\n         100% { transform: rotate(360deg); }\n       }\n       \n      </style>\n \n      <div id=\"loading-container\">\n         <div class=\"loader\"></div>\n      </div>\n\n      ";
    }
  }]);
  return LoadingApp;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('loading-app', LoadingApp);

/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(961);

var API_ENDPOINT = {
  LIST: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.BASE_URL, "/list"),
  DETAIL: function DETAIL(id) {
    return "".concat(_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.BASE_URL, "/detail/").concat(id);
  },
  ADD_REVIEW: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.BASE_URL, "/").concat(_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.REVIEW)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_ENDPOINT);

/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/small',
  REVIEW: 'review',
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  CACHE_NAME: 'Restaurant-v1'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);

/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(666);
// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__(46);
// EXTERNAL MODULE: ./src/styles/responsive.css
var responsive = __webpack_require__(362);
// EXTERNAL MODULE: ./src/scripts/views/app.js
var views_app = __webpack_require__(899);
// EXTERNAL MODULE: ./src/scripts/utils/sw-register.js
var sw_register = __webpack_require__(317);
;// CONCATENATED MODULE: ./src/scripts/components/header-app.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var HeaderApp = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HeaderApp, _HTMLElement);
  var _super = _createSuper(HeaderApp);
  function HeaderApp() {
    var _this;
    _classCallCheck(this, HeaderApp);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }
  _createClass(HeaderApp, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      var app = new views_app/* default */.Z({
        button: this.shadowRoot.querySelector('#menu'),
        drawer: this.shadowRoot.querySelector('#drawer'),
        content: document.querySelector('main'),
        hero: document.querySelector('hero-app')
      });
      window.addEventListener('hashchange', function () {
        app.renderPage();
      });
      window.addEventListener('load', function () {
        app.renderPage();
        (0,sw_register/* default */.Z)();
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowRoot.innerHTML = "\n    <style>\n    * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    }\n  \n    body,\n    html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    }\n  \n    body {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 12px;\n    color: #1f1f29;\n    }\n\n    .header {\n      min-height: 56px;\n      transition: min-height 0.3s;\n      display: flex;\n    }\n    \n    .header__inner {\n      align-self: center;\n      padding-left: 30px;\n      width: 100%;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    \n    .header__title {\n      font-weight: 200px;\n      font-size: 2.5em;\n      margin: 0.5em 0.25em;\n      display: inline-block;\n      color: #1f1f29;\n    }\n    \n    .mobile__menu {\n      font-size: 32px;\n      margin: 10px;\n      color: #1f1f29;\n      display: block;\n      min-width: 44px;\n      min-height: 44px;\n      text-decoration: none;\n      text-align: center;\n    }\n    \n    \n    .nav {\n      display: flex;\n      flex-wrap: nowrap;\n      width: 100%;\n      margin-left: auto;\n      margin-right: auto;\n      text-align: center;\n    }\n    \n    .nav__list {\n      width: 100%;\n      padding: 0;\n      margin: 0;\n    }\n    \n    .nav__item {\n      box-sizing: border-box;\n      display: inline-block;\n      width: 24%;\n      text-align: center;\n      line-height: 24px;\n      text-transform: uppercase;\n    }\n\n    #menu {\n      background-color: #fff;\n      border: none;\n    }\n    \n    .nav a {\n      min-height: 44px;\n      display: inline-block;\n      padding: 1.3em;\n      text-decoration: none;\n      color: #1f1f29;\n    }\n    \n    .nav a:hover {\n      text-decoration: underline;\n    }\n\n    @media screen and (max-width: 499px) {\n      .nav {\n        z-index: 10;\n        background-color: #fff;\n        width: 300px;\n        position: absolute;\n    \n        /* This trasform moves the drawer off canvas. */\n        -webkit-transform: translate(-300px, 0);\n        transform: translate(-300px, 0);\n    \n        /* Optionally, we animate the drawer. */\n        transition: transform 0.3s ease;\n      }\n    \n      .open {\n        -webkit-transform: translate(0, 0);\n        transform: translate(0, 0);\n      }\n    \n      .nav__item {\n        display: list-item;\n        border-bottom: 1px solid #e0e0e0;\n        width: 100%;\n        text-align: left;\n      }\n    }\n\n    @media screen and (min-width: 500px) {\n      .mobile__menu {\n        display: none;\n      }\n    \n      .nav__list {\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n      }\n    \n      .nav__item {\n        margin: auto;\n      }\n    }\n\n    @media screen and (min-width: 800px) {\n      .nav__list {\n        max-width: 800px;\n        margin: 0 auto;\n      }\n    }\n    </style>\n\n     <header class=\"header\">\n     <div class=\"header__inner\">\n       <h1 class=\"header__title\">Kenyangin</h1>\n     </div>\n     <button id=\"menu\" class=\"mobile__menu\">\u2630</button>\n     <nav id=\"drawer\" class=\"nav\">\n       <ul class=\"nav__list\">\n         <li class=\"nav__item\"><a href=\"#/home\">Home</a></li>\n         <li class=\"nav__item\"><a href=\"#/favorite\">Favorite</a></li>\n         <li class=\"nav__item\"><a href=\"https://www.linkedin.com/in/abdulfaqih\">About Us</a></li>\n       </ul>\n     </nav>\n   </header>\n      ";
    }
  }]);
  return HeaderApp;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('header-app', HeaderApp);
// EXTERNAL MODULE: ./src/scripts/components/hero-app.js
var hero_app = __webpack_require__(470);
// EXTERNAL MODULE: ./src/public/data/restaurant-source.js
var restaurant_source = __webpack_require__(783);
// EXTERNAL MODULE: ./src/scripts/views/templates/template-creator.js
var template_creator = __webpack_require__(510);
;// CONCATENATED MODULE: ./src/scripts/components/restaurant-list.js
function restaurant_list_typeof(o) { "@babel/helpers - typeof"; return restaurant_list_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, restaurant_list_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == restaurant_list_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(restaurant_list_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function restaurant_list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function restaurant_list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, restaurant_list_toPropertyKey(descriptor.key), descriptor); } }
function restaurant_list_createClass(Constructor, protoProps, staticProps) { if (protoProps) restaurant_list_defineProperties(Constructor.prototype, protoProps); if (staticProps) restaurant_list_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function restaurant_list_toPropertyKey(arg) { var key = restaurant_list_toPrimitive(arg, "string"); return restaurant_list_typeof(key) === "symbol" ? key : String(key); }
function restaurant_list_toPrimitive(input, hint) { if (restaurant_list_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (restaurant_list_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function restaurant_list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) restaurant_list_setPrototypeOf(subClass, superClass); }
function restaurant_list_createSuper(Derived) { var hasNativeReflectConstruct = restaurant_list_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = restaurant_list_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = restaurant_list_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return restaurant_list_possibleConstructorReturn(this, result); }; }
function restaurant_list_possibleConstructorReturn(self, call) { if (call && (restaurant_list_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return restaurant_list_assertThisInitialized(self); }
function restaurant_list_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function restaurant_list_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; restaurant_list_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !restaurant_list_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return restaurant_list_construct(Class, arguments, restaurant_list_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return restaurant_list_setPrototypeOf(Wrapper, Class); }; return restaurant_list_wrapNativeSuper(Class); }
function restaurant_list_construct(Parent, args, Class) { if (restaurant_list_isNativeReflectConstruct()) { restaurant_list_construct = Reflect.construct.bind(); } else { restaurant_list_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) restaurant_list_setPrototypeOf(instance, Class.prototype); return instance; }; } return restaurant_list_construct.apply(null, arguments); }
function restaurant_list_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function restaurant_list_isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function restaurant_list_setPrototypeOf(o, p) { restaurant_list_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return restaurant_list_setPrototypeOf(o, p); }
function restaurant_list_getPrototypeOf(o) { restaurant_list_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return restaurant_list_getPrototypeOf(o); }


var RestaurantListCard = /*#__PURE__*/function (_HTMLElement) {
  restaurant_list_inherits(RestaurantListCard, _HTMLElement);
  var _super = restaurant_list_createSuper(RestaurantListCard);
  function RestaurantListCard() {
    var _this;
    restaurant_list_classCallCheck(this, RestaurantListCard);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }
  restaurant_list_createClass(RestaurantListCard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.showLoading();
      this.fetchRestaurantList();
    }
  }, {
    key: "fetchRestaurantList",
    value: function () {
      var _fetchRestaurantList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var restaurants, restaurantsContainer;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return restaurant_source/* default */.Z.listRestaurant();
            case 3:
              restaurants = _context.sent;
              restaurantsContainer = this.shadowRoot.querySelector('#restaurants');
              restaurantsContainer.innerHTML = '';
              restaurants.forEach(function (restaurant) {
                restaurantsContainer.innerHTML += (0,template_creator/* createRestaurantItemTemplate */.yK)(restaurant);
              });
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              this.hideLoading();
              this.displayError();
            case 13:
              _context.prev = 13;
              this.hideLoading();
              return _context.finish(13);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 9, 13, 16]]);
      }));
      function fetchRestaurantList() {
        return _fetchRestaurantList.apply(this, arguments);
      }
      return fetchRestaurantList;
    }()
  }, {
    key: "showLoading",
    value: function showLoading() {
      var loadingApp = document.createElement('loading-app');
      loadingApp.setAttribute('loading', '');
      this.shadowRoot.appendChild(loadingApp);
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      var loadingApp = this.shadowRoot.querySelector('loading-app');
      if (loadingApp) {
        loadingApp.removeAttribute('loading');
        this.shadowRoot.removeChild(loadingApp);
      }
    }
  }, {
    key: "displayError",
    value: function displayError() {
      var errorMessage = document.createElement('h3');
      errorMessage.textContent = 'Gagal memuat data restoran. Silakan coba lagi.';
      errorMessage.style.color = 'red';
      errorMessage.style.textAlign = 'center';
      var restaurantsContainer = this.shadowRoot.querySelector('#restaurants');
      restaurantsContainer.innerHTML = '';
      restaurantsContainer.appendChild(errorMessage);
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowRoot.innerHTML = "\n    <style>\n    * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    }\n    \n    body,\n    html {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%;\n    }\n    \n    body {\n      font-family: 'Montserrat', sans-serif;\n      font-size: 12px;\n      color: #1f1f29;\n    }\n\n    .card__list {\n      margin: 30px;\n      display: grid;\n      grid-template-columns: 1fr;\n      gap: 20px;\n    }\n    \n    .card__item {\n      border-radius: 10px;\n      background-color: #f5f5fa;\n      border-radius: 10px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n      transition: box-shadow 0.3s ease;\n      position: relative;\n      width: 100%;\n    }\n    \n    .card__item:hover {\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n    }\n    \n    .card__item h3 {\n      position: absolute;\n      background-color: #000000c5;\n      color: #fdd037;\n      font-size: medium;\n      margin-top: 12px;\n      padding: 9px;\n      border-radius: 0 5px 5px 0;\n    }\n    \n    .card__item p {\n      margin: 10px;\n      font-size: 13px;\n    }\n    \n    .card__item h4 {\n      margin: 10px;\n      font-size: 16px;\n    }\n    \n    .card__item img {\n      width: 100%;\n      height: 150px;\n      object-fit: cover;\n      border-radius: 10px 10px 0 0;\n    }\n\n    h4 a {\n      text-decoration: none;\n      color: #1f1f29;\n      display: inline-block;\n      height: 44px;\n      line-height: 44px;\n    }\n\n    @media screen and (max-width: 499px) {\n    \n      .card__list {\n        grid-template-columns: 1fr;\n      }\n    }\n    \n    @media screen and (min-width: 700px) {\n      .card__list {\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n    \n    @media screen and (min-width: 900px) {\n\n      .card__list {\n        grid-template-columns: 1fr 1fr 1fr;\n      }\n    \n      .card__item h3 {\n        font-size: 17px\n      }\n    \n      .card__item p {\n        font-size: 14px;\n      }\n    \n      .card__item h4 {\n        font-size: 17px;\n      }\n    }\n    </style>\n    <div id=\"restaurants\" class=\"card__list\">\n    </div>\n      \n    ";
    }
  }]);
  return RestaurantListCard;
}( /*#__PURE__*/restaurant_list_wrapNativeSuper(HTMLElement));
customElements.define('restaurant-list-card', RestaurantListCard);
// EXTERNAL MODULE: ./src/scripts/components/footer-app.js
var footer_app = __webpack_require__(897);
// EXTERNAL MODULE: ./src/scripts/components/loading.js
var loading = __webpack_require__(543);
;// CONCATENATED MODULE: ./src/scripts/index.js








var skipLink = document.querySelector('.skip-link');
var mainContent = document.querySelector('#maincontent');
skipLink.addEventListener('click', function (event) {
  event.preventDefault();
  mainContent.scrollIntoView({
    behavior: 'smooth'
  });
  mainContent.setAttribute('tabindex', '-1');
  mainContent.focus();
  mainContent.removeAttribute('tabindex');
});

/***/ })

}]);
//# sourceMappingURL=app~49ea73a0.bundle.js.map