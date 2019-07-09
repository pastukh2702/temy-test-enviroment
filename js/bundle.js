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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/registerForm/addUser.js":
/*!***********************************************!*\
  !*** ./js/components/registerForm/addUser.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators */ \"./js/components/registerForm/validators.js\");\n/* harmony import */ var _services_postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/postData */ \"./js/components/services/postData.js\");\n/* harmony import */ var _usersList_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usersList/init */ \"./js/components/usersList/init.js\");\n\n\n\nlet form = document.forms.registerForm;\nlet countrySelect = form.elements.inputCountry;\nlet stateSelect = form.elements.inputState;\nlet citySelect = form.elements.inputCity;\nlet name = form.elements.inputName;\nlet email = form.elements.inputEmail;\nlet phone_number = form.elements.inputPhone;\nlet address = form.elements.inputAddress;\nlet about_me = form.elements.inputAbout;\n\nconst formReset = () => {\n  form.reset();\n\n  for (let i = 0; i < form.elements.length; i++) {\n    form.elements[i].classList.remove('is-valid');\n  }\n\n  countrySelect.selectedIndex = 0;\n  citySelect.options.length = '';\n  citySelect[citySelect.options.length] = new Option('Choose city', '', false, false);\n  citySelect.disabled = true;\n  stateSelect.options.length = '';\n  stateSelect[stateSelect.options.length] = new Option('Choose state', '', false, false);\n  stateSelect.disabled = true;\n};\n\nconst addUser = e => {\n  e.preventDefault();\n\n  for (let i = 0; i < form.elements.length; i++) {\n    _validators__WEBPACK_IMPORTED_MODULE_0__[\"autoValidStatus\"](form.elements[i]);\n  }\n\n  if (form.checkValidity()) {\n    let user = {\n      name: name.value,\n      email: email.value,\n      phone_number: Number(phone_number.value),\n      address: _validators__WEBPACK_IMPORTED_MODULE_0__[\"isEmpty\"](address.value),\n      about_me: _validators__WEBPACK_IMPORTED_MODULE_0__[\"isEmpty\"](about_me.value),\n      country_id: countrySelect.options[countrySelect.selectedIndex].value,\n      state_id: stateSelect.options[stateSelect.selectedIndex].value,\n      city_id: citySelect.options[citySelect.selectedIndex].value\n    };\n    Object(_services_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(user, 'users').then(_usersList_init__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).then(formReset);\n  }\n\n  ;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addUser);\n\n//# sourceURL=webpack:///./js/components/registerForm/addUser.js?");

/***/ }),

/***/ "./js/components/registerForm/selectsFill.js":
/*!***************************************************!*\
  !*** ./js/components/registerForm/selectsFill.js ***!
  \***************************************************/
/*! exports provided: CountrySelectFill, StateSelectFill, CitySelectFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountrySelectFill\", function() { return CountrySelectFill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateSelectFill\", function() { return StateSelectFill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CitySelectFill\", function() { return CitySelectFill; });\n/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getData */ \"./js/components/services/getData.js\");\n\nlet form = document.forms.registerForm;\nlet countrySelect = form.elements.inputCountry;\nlet stateSelect = form.elements.inputState;\nlet citySelect = form.elements.inputCity;\n\nconst CountrySelectFill = () => {\n  Object(_services_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('countries').then(res => res.json()).then(res => {\n    countrySelect.options.length = '';\n    countrySelect[countrySelect.options.length] = new Option('Choose country', '', false, false);\n    countrySelect.options[0].disabled = true;\n    res.forEach(country => {\n      countrySelect[countrySelect.options.length] = new Option(country.name, country.id, false, false);\n    });\n  }).catch(() => {\n    console.error(\"ERROR ROUTER: Check router! getData(router) in SelectFill()\");\n  });\n};\n\nCountrySelectFill();\n\nconst StateSelectFill = e => {\n  stateSelect.disabled = false;\n  Object(_services_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('states').then(res => res.json()).then(res => {\n    stateSelect.options.length = '';\n    stateSelect[stateSelect.options.length] = new Option('Choose state', '', false, false);\n    stateSelect.options[0].disabled = true;\n    res.forEach(state => {\n      if (state.country_id == e.target.value) {\n        stateSelect[stateSelect.options.length] = new Option(state.name, state.id, false, false);\n      }\n    });\n  }).catch(() => {\n    console.error(\"ERROR ROUTER: Check router! getData(router) in SelectFill()\");\n  });\n};\n\ncountrySelect.addEventListener('change', StateSelectFill);\n\nconst CitySelectFill = e => {\n  citySelect.disabled = false;\n  Object(_services_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('cities').then(res => res.json()).then(res => {\n    citySelect.options.length = '';\n    citySelect[citySelect.options.length] = new Option('Choose city', '', false, false);\n    citySelect.options[0].disabled = true;\n    res.forEach(city => {\n      if (city.state_id == e.target.value) {\n        citySelect[citySelect.options.length] = new Option(city.name, city.id, false, false);\n      }\n    });\n  }).catch(() => {\n    console.error(\"ERROR ROUTER: Check router! getData(router) in SelectFill()\");\n  });\n};\n\nstateSelect.addEventListener('change', CitySelectFill);\n\n\n//# sourceURL=webpack:///./js/components/registerForm/selectsFill.js?");

/***/ }),

/***/ "./js/components/registerForm/validators.js":
/*!**************************************************!*\
  !*** ./js/components/registerForm/validators.js ***!
  \**************************************************/
/*! exports provided: inputValidStatus, autoValidStatus, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputValidStatus\", function() { return inputValidStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autoValidStatus\", function() { return autoValidStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\nconst inputValidStatus = area => {\n  if (area.target.required) {\n    if (area.target.validity.valid == true) {\n      area.target.classList.add('is-valid');\n      area.target.classList.remove('is-invalid');\n    } else {\n      area.target.classList.add('is-invalid');\n      area.target.classList.remove('is-valid');\n    }\n  }\n};\n\nconst autoValidStatus = area => {\n  if (area.required) {\n    if (area.validity.valid == true && area.disabled == false) {\n      area.classList.add('is-valid');\n      area.classList.remove('is-invalid');\n    } else {\n      area.classList.add('is-invalid');\n      area.classList.remove('is-valid');\n    }\n  }\n};\n\nconst isEmpty = str => {\n  if (str.trim().length == 0) {\n    return str;\n  } else {\n    return null;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/components/registerForm/validators.js?");

/***/ }),

/***/ "./js/components/services/getData.js":
/*!*******************************************!*\
  !*** ./js/components/services/getData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getData = router => {\n  let url = `http://localhost:7000`;\n  return fetch(`${url}/${router}`).catch(() => {\n    console.log(\"ERROR CONNECTION: Check port or your mockserver!\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./js/components/services/getData.js?");

/***/ }),

/***/ "./js/components/services/postData.js":
/*!********************************************!*\
  !*** ./js/components/services/postData.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst postData = (data, router) => {\n  let url = 'http://localhost:7000';\n  return fetch(`${url}/${router}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  }).then(alert('User added!')).catch(() => {\n    alert(\"ERROR ADDING: Check port or your mockserver!\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postData);\n\n//# sourceURL=webpack:///./js/components/services/postData.js?");

/***/ }),

/***/ "./js/components/usersList/init.js":
/*!*****************************************!*\
  !*** ./js/components/usersList/init.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _readers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./readers */ \"./js/components/usersList/readers.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./js/components/usersList/render.js\");\n/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getData */ \"./js/components/services/getData.js\");\n\n\n\n\nconst init = () => {\n  Object(_services_getData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`users`).then(users => users.json()).then(users => {\n    return Object(_services_getData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`cities`).then(cities => cities.json()).then(_readers__WEBPACK_IMPORTED_MODULE_0__[\"cityReader\"](users));\n  }).then(users => {\n    return Object(_services_getData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`states`).then(states => states.json()).then(_readers__WEBPACK_IMPORTED_MODULE_0__[\"stateReader\"](users));\n  }).then(users => {\n    return Object(_services_getData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`countries`).then(countries => countries.json()).then(_readers__WEBPACK_IMPORTED_MODULE_0__[\"countryReader\"](users));\n  }).then(_readers__WEBPACK_IMPORTED_MODULE_0__[\"dateReader\"]).then(_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"]).catch(() => {\n    console.error(\"ERROR ROUTER: Check router! getData(router) in usersList/init()\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./js/components/usersList/init.js?");

/***/ }),

/***/ "./js/components/usersList/readers.js":
/*!********************************************!*\
  !*** ./js/components/usersList/readers.js ***!
  \********************************************/
/*! exports provided: cityReader, stateReader, countryReader, dateReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityReader\", function() { return cityReader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stateReader\", function() { return stateReader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countryReader\", function() { return countryReader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateReader\", function() { return dateReader; });\nconst cityReader = users => cities => {\n  users.forEach((user, index) => {\n    cities.forEach(city => {\n      if (user.city_id == city.id) {\n        user.city_id = city.name;\n      }\n    });\n  });\n  return users;\n};\n\nconst stateReader = users => states => {\n  users.forEach((user, index) => {\n    states.forEach(state => {\n      if (user.state_id == state.id) {\n        user.state_id = state.name;\n      }\n    });\n  });\n  return users;\n};\n\nconst countryReader = users => countries => {\n  users.forEach((user, index) => {\n    countries.forEach(country => {\n      if (user.country_id == country.id) {\n        user.country_id = country.name;\n      }\n    });\n  });\n  return users;\n};\n\nconst dateReader = users => {\n  users.forEach(user => {\n    let s = user.createdAt;\n    let time = new Date(s);\n    let month = time.getMonth();\n    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Octr', 'Nov', 'Dec'];\n    let day = time.getDate();\n    let year = time.getFullYear();\n    let hrs = time.getHours();\n    let min = time.getMinutes(); // let sec = time.getSeconds();\n\n    if (hrs < 9) {\n      hrs = `0${hrs}`;\n    }\n\n    if (min < 9) {\n      min = `0${min}`;\n    } // if(sec < 9){\n    //     sec = `0${sec}`;\n    // }\n\n\n    user.createdAt = `${year}, ${monthNames[month]} ${day},  ${hrs}:${min}`;\n  });\n  return users;\n};\n\n\n\n//# sourceURL=webpack:///./js/components/usersList/readers.js?");

/***/ }),

/***/ "./js/components/usersList/render.js":
/*!*******************************************!*\
  !*** ./js/components/usersList/render.js ***!
  \*******************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nconst render = users => {\n  usersList.innerHTML = '';\n  users.forEach(user => {\n    usersList.innerHTML += `\n            <tr>\n                <th scope=\"row\">${user.id}</th>\n                <td>${user.name}</td>\n                <td>${user.email}</td>\n                <td>+${user.phone_number}</td>\n                <td>${user.country_id}, ${user.state_id}, ${user.city_id}</td>\n                <td>${user.createdAt}</td>\n            </tr>\n        `;\n  });\n};\n\n\n\n//# sourceURL=webpack:///./js/components/usersList/render.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_usersList_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/usersList/init */ \"./js/components/usersList/init.js\");\n/* harmony import */ var _components_registerForm_addUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/registerForm/addUser */ \"./js/components/registerForm/addUser.js\");\n/* harmony import */ var _components_registerForm_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/registerForm/validators */ \"./js/components/registerForm/validators.js\");\n/* harmony import */ var _components_registerForm_selectsFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registerForm/selectsFill */ \"./js/components/registerForm/selectsFill.js\");\n\n\n\n\nlet form = document.forms.registerForm;\nlet submit = form.elements.button;\nform.addEventListener('change', _components_registerForm_validators__WEBPACK_IMPORTED_MODULE_2__[\"inputValidStatus\"]); //realtime validator ;)\n\n_components_registerForm_selectsFill__WEBPACK_IMPORTED_MODULE_3__[\"CountrySelectFill\"](); //getData into selects\n\nObject(_components_usersList_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); //get user list\n\nsubmit.addEventListener('click', _components_registerForm_addUser__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // post user data\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });