/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/css/styles.css");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: AppMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenu", function() { return AppMenu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import '../assets/css/styles.css';
var topActionsFilters = document.querySelector("#top-actions-filters");
var moreLessTrigger = document.querySelector("#more-less-trigger");
moreLessTrigger.addEventListener("click", toggleTopActionsFilters);

function toggleTopActionsFilters() {
  if (topActionsFilters.classList.contains("more")) {
    topActionsFilters.classList.remove("more");
    moreLessTrigger.classList.remove("more");
  } else {
    topActionsFilters.classList.add("more");
    moreLessTrigger.classList.add("more");
  }
}

var AppMenu = /*#__PURE__*/function () {
  function AppMenu() {
    _classCallCheck(this, AppMenu);

    _defineProperty(this, "ticketsButton", document.querySelector(".js-tickets"));

    _defineProperty(this, "aboutButton", document.querySelector(".js-about"));

    _defineProperty(this, "contactButton", document.querySelectorAll(".js-contact"));

    _defineProperty(this, "goToRegisterButton", document.querySelector("#button-go-to-register"));

    _defineProperty(this, "goToLoginButton", document.querySelector("#button-go-to-login"));

    _defineProperty(this, "loginForm", document.querySelector("#form-login"));

    _defineProperty(this, "registerForm", document.querySelector("#form-register"));
  }

  _createClass(AppMenu, [{
    key: "init",
    value: function init() {
      this.ticketsButton.addEventListener("click", this.toggleMenu.bind(this));
      this.aboutButton.addEventListener("click", this.toggleMenu.bind(this));
      this.contactButton[0].addEventListener("click", this.toggleMenu.bind(this));
      this.contactButton[1].addEventListener("click", this.toggleMenu.bind(this));
      this.goToRegisterButton.addEventListener("click", this.goToRegister.bind(this));
      this.goToLoginButton.addEventListener("click", this.goToLogin.bind(this));
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu(event) {
      var component = event.target;
      var navLink = document.querySelector(".js-app-menu-link.active");
      navLink.classList.remove("active");
      component.classList.add("active");

      if (component.id === "tickets") {
        this.handleTicketsRoute();
      }

      if (component.id === "about") {
        this.handleAboutRoute();
      }

      if (component.id === "contact") {
        this.handleContactRoute();
      }
    }
  }, {
    key: "handleTicketsRoute",
    value: function handleTicketsRoute() {
      var topActionContainer = document.querySelector("#top-actions");
      var ticketDetailsContainer = document.querySelector("#ticket-details");
      var contactContainer = document.querySelector("#contact-form");
      var headingTicketContainer = document.querySelector("#heading-ticket");
      var headingAboutContainer = document.querySelector("#heading-about");
      var headingContactContainer = document.querySelector("#heading-contact");
      var buttonFilters = document.querySelector("#button-filters");
      headingAboutContainer.classList.add("is-hidden");
      headingContactContainer.classList.add("is-hidden");
      buttonFilters.classList.remove("is-hidden");
      topActionContainer.classList.remove("is-hidden");
      ticketDetailsContainer.classList.remove("is-hidden");
      headingTicketContainer.classList.remove("is-hidden");
      var aboutContainer = document.querySelector("#about-park");
      contactContainer.classList.add("is-hidden");
      aboutContainer.classList.add("is-hidden");
    }
  }, {
    key: "handleAboutRoute",
    value: function handleAboutRoute() {
      var topActionContainer = document.querySelector("#top-actions");
      var ticketDetailsContainer = document.querySelector("#ticket-details");
      var contactContainer = document.querySelector("#contact-form");
      var headingTicketContainer = document.querySelector("#heading-ticket");
      var headingAboutContainer = document.querySelector("#heading-about");
      var headingContactContainer = document.querySelector("#heading-contact");
      var buttonFilters = document.querySelector("#button-filters");
      buttonFilters.classList.add("is-hidden");
      topActionContainer.classList.add("is-hidden");
      ticketDetailsContainer.classList.add("is-hidden");
      contactContainer.classList.add("is-hidden");
      headingTicketContainer.classList.add("is-hidden");
      headingContactContainer.classList.add("is-hidden");
      var aboutContainer = document.querySelector("#about-park");
      aboutContainer.classList.remove("is-hidden");
      headingAboutContainer.classList.remove("is-hidden");
    }
  }, {
    key: "handleContactRoute",
    value: function handleContactRoute() {
      var topActionContainer = document.querySelector("#top-actions");
      var ticketDetailsContainer = document.querySelector("#ticket-details");
      var aboutContainer = document.querySelector("#about-park");
      var headingTicketContainer = document.querySelector("#heading-ticket");
      var headingAboutContainer = document.querySelector("#heading-about");
      var headingContactContainer = document.querySelector("#heading-contact");
      headingTicketContainer.classList.add("is-hidden");
      headingAboutContainer.classList.add("is-hidden");
      var buttonFilters = document.querySelector("#button-filters");
      buttonFilters.classList.add("is-hidden");
      topActionContainer.classList.add("is-hidden");
      ticketDetailsContainer.classList.add("is-hidden");
      aboutContainer.classList.add("is-hidden");
      var contactContainer = document.querySelector("#contact-form");
      contactContainer.classList.remove("is-hidden");
      headingContactContainer.classList.remove("is-hidden");
    }
  }, {
    key: "goToRegister",
    value: function goToRegister() {
      this.loginForm.classList.add('is-hidden');
      this.registerForm.classList.remove('is-hidden');
    }
  }, {
    key: "goToLogin",
    value: function goToLogin() {
      this.registerForm.classList.add('is-hidden');
      this.loginForm.classList.remove('is-hidden');
    }
  }]);

  return AppMenu;
}();
var appMenu = new AppMenu();
appMenu.init();

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/index.js ./assets/scss/styles.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/patryk/Development/priv/eparki-ui/src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! /Users/patryk/Development/priv/eparki-ui/assets/scss/styles.scss */"./assets/scss/styles.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map