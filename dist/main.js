/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #9e9e9e;\n  font-size: 1.5rem;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .content {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\nmain .content .contentOne {\n  display: grid;\n}\nmain .content .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\nmain .content .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .contentOne .contentOneTwo #newListBtn {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .contentOne .contentOneTwo #newListBtn:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .contentTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .contentTwo .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}", "",{"version":3,"sources":["webpack://./src/sass/global/_global.scss","webpack://./src/sass/main.scss","webpack://./src/sass/global/_animations.scss","webpack://./src/sass/components/navbar.scss","webpack://./src/sass/components/mainContent.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap');\r\n\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: inherit;\r\n}\r\n\r\nhtml, body {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #9e9e9e;\n  font-size: 1.5rem;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .content {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\nmain .content .contentOne {\n  display: grid;\n}\nmain .content .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\nmain .content .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .contentOne .contentOneTwo #newListBtn {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .contentOne .contentOneTwo #newListBtn:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .contentTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .contentTwo .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}","@keyframes slideDown {\r\n    0% {\r\n        opacity: 0;\r\n        height: 0rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n}\r\n\r\n.slideDown {\r\n    animation: slideDown 200ms ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideUp {\r\n    0% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.slideUp {\r\n    animation: slideUp 200ms ease-in-out forwards;\r\n}\r\n\r\n\r\n@keyframes slideLeft {\r\n    0% {\r\n        grid-template-columns: 22% 78%;\r\n    }\r\n\r\n    100% {\r\n        grid-template-columns: 0% 100%;\r\n    }\r\n}\r\n\r\n.slideLeft {\r\n    animation: slideLeft 0.5s ease-in-out forwards;\r\n}\r\n\r\n\r\n@keyframes rotateDown {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n.rotateDown {\r\n    animation: rotateDown 200ms ease-in-out forwards;\r\n}\r\n\r\n",".navStyle {\r\n    height: 5rem;\r\n    background: #ff4500;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .module {\r\n        background: #e9e9e983;\r\n        display: none;\r\n        place-items: center;\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n        .moduleContent {\r\n            background: #fff;\r\n            border: none;\r\n            border-radius: 2rem;\r\n            display: grid;\r\n            place-items: center;\r\n            height: 50%;\r\n            width: 40%;\r\n            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\r\n\r\n            .formTodo {\r\n                margin-top: 10px;\r\n                height: 90%;\r\n                width: 90%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: space-between;\r\n\r\n                .inputContainer {\r\n                    height: 4rem;\r\n                    display: grid;\r\n                    grid-template-columns: 1fr 3fr;\r\n\r\n                    label {\r\n                        display: grid;\r\n                        place-items: center;\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n                    }\r\n\r\n                    input {\r\n                        height: 3rem;\r\n                        width: 20rem;\r\n                    }\r\n\r\n                    .inputArea {\r\n                        width: 100%;\r\n                        font-size: 1.5rem;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .btnContainer {\r\n                display: grid;\r\n                grid-template-columns: 1fr 2fr;\r\n                height: 90%;\r\n                width: 90%;\r\n\r\n                .btns {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 7rem;\r\n                        border-radius: 5px;\r\n                        font-weight: 600;\r\n                    }\r\n\r\n                    #addList {\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #editList {\r\n                        display: none;\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelList {\r\n                        outline: none;\r\n                        border: .5px solid #000;\r\n                        background: #fff;\r\n\r\n                        &:hover {\r\n                            background: #ebebeb;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .navOne {\r\n        justify-content: center;\r\n        align-items: center;\r\n        display: flex;\r\n        width: 10rem;\r\n\r\n        .spanStyle {\r\n            cursor: pointer;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n\r\n                :first-child {\r\n                    transform: rotate(45deg);\r\n                    margin-bottom: 0;\r\n                    margin-left: 2px;\r\n                }\r\n\r\n                :not(:first-child):not(:last-child) {\r\n                    display: none;\r\n                }\r\n\r\n                :last-child {\r\n                    transform: rotate(-45deg);\r\n                    margin-left: 2px;\r\n                }\r\n            }\r\n\r\n            span {\r\n                cursor: pointer;\r\n                border: solid #ffffff .5px;\r\n                background: #fff;\r\n                width: 15px;\r\n                transform-origin: 0px 1px;\r\n                transition: ease-in-out 0.7s;\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: -2px;\r\n            }\r\n\r\n            :not(:first-child):not(:last-child) {\r\n                margin-bottom: -2px;\r\n            }\r\n        }\r\n\r\n        .homeIcon {\r\n            height: 2rem;\r\n            width: 3.5rem;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            cursor: pointer;\r\n            margin: 0 1rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n            }\r\n\r\n            #homeIcon {\r\n                cursor: pointer;\r\n                color: #fff;\r\n                font-size: 2rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    .navTwo {\r\n        width: 10rem;\r\n        display: grid;\r\n        place-items: center;\r\n\r\n        #plusIcon {\r\n            cursor: pointer;\r\n            color: #fff;\r\n            font-size: 2rem;\r\n\r\n            &:hover {\r\n                transform: rotate(360deg);\r\n                transition: 0.7s ease-in-out;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n","main {\r\n    display: grid;\r\n    grid-template-columns: 22% 78%;\r\n    height: 52.5rem;\r\n\r\n    .sideBar {\r\n        background: #f0f0f0;\r\n        display: grid;\r\n        grid-template-rows: 30% 70%;\r\n\r\n        .sideBarOne {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            .sideBarContainer {\r\n                cursor: pointer;\r\n                border: solid .3px #f0f0f0;\r\n                border-radius: 5px;\r\n                height: 30px;\r\n                width: 70%;\r\n                margin: 5px 0;\r\n                display: flex;\r\n                align-items: center;\r\n                padding: 5px;\r\n\r\n                &:hover {\r\n                    background: #d8d8d8b0;\r\n                }\r\n\r\n                .inbox {\r\n                    color: #44b4ff;\r\n                }\r\n\r\n                .day {\r\n                    color: #03da03;\r\n                }\r\n\r\n                .project {\r\n                    color: #8f49ff;\r\n                }\r\n\r\n                h1 {\r\n                    margin: 0 6px;\r\n                    font-size: 1.3rem;\r\n                    font-family: Open Sans, monospace, sans-serif;\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarTwo {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            \r\n            .projectDefault {\r\n                align-self: flex-end;\r\n                cursor: pointer;\r\n                height: 3rem;\r\n                width: 85%;\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                #arrow {\r\n                    color: #9e9e9e;\r\n                    font-size: 1.5rem;\r\n                    margin: 0 1rem;\r\n                    transition: 200ms ease-in-out;\r\n                }\r\n\r\n                h1 {\r\n                    font-size: 1.5rem;\r\n                    font-family: Open Sans, sans-serif;\r\n                }\r\n\r\n                #newProjectIcon {\r\n                    height: 1.8rem;\r\n                    margin-left: 120px;\r\n\r\n                    &:hover {\r\n                        transform: rotate(360deg);\r\n                        transition: 0.7s ease-in-out;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .projectList {\r\n                align-self: flex-end;\r\n                opacity: 0;\r\n                height: 0;\r\n                width: 80%;\r\n                //box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n\r\n                .list {\r\n                    cursor: pointer;\r\n                    margin: 1rem 0;\r\n                    height: 3rem;\r\n                    border-radius: 5px;\r\n                    display: grid;\r\n                    align-items: center;\r\n                    padding: 5px 0 5px 5px;\r\n\r\n                    &:hover {\r\n                        background: #d8d8d8b0;\r\n                    }\r\n\r\n                    p {\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .content {\r\n        display: grid;\r\n        grid-template-rows: .5fr 3fr;\r\n\r\n        .contentOne {\r\n            display: grid;\r\n\r\n            .contentOneOne {\r\n                margin: 1rem 2rem;\r\n\r\n                h1 {\r\n                    cursor: pointer;\r\n                    margin: 1rem 2rem;\r\n                    font-size: 1.8rem;\r\n                    font-family: \"Open Sans\", sans-serif;\r\n                }\r\n            }\r\n\r\n            .contentOneTwo {\r\n                margin: 1rem 4rem;\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                h1 {\r\n                    cursor: pointer;\r\n                    font-size: 1.5rem;\r\n                    font-family: \"Open Sans\", sans-serif;\r\n                    margin: 0 5px;\r\n                    color: #474747;\r\n\r\n                    &:hover {\r\n                        color: #ff4500;\r\n                    }\r\n                }\r\n\r\n                #newListBtn {\r\n                    color: #ff4500;\r\n                    cursor: pointer;\r\n                    height: 1.8rem;\r\n                    width: 1.8rem;\r\n\r\n                    &:hover {\r\n                        color: #fff;\r\n                        border-radius: 100rem;\r\n                        background: #ff4500;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .contentTwo {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n\r\n            .todoStyle {\r\n                cursor: pointer;\r\n                border-top: .5px solid #e2e2e2;\r\n                border-bottom: .5px solid #e2e2e2;\r\n                min-height: 8rem;\r\n                max-height: auto;\r\n                width: 90%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                place-items: center;\r\n\r\n                .divOne {\r\n                    margin: 5px 0;\r\n                    width: 100%;\r\n                    display: grid;\r\n                    grid-template-columns: 3fr 1fr;\r\n                    align-items: center;\r\n\r\n                    .divOneOne {\r\n                        display: grid;\r\n                        grid-template-columns: repeat(3, 1fr);\r\n\r\n                        p {\r\n                            font-size: 1.4rem;\r\n                            font-family: Open Sans, cursive, monospace, sans-serif;\r\n                        }\r\n\r\n                        :not(:first-child):not(:last-child) {\r\n                            display: grid;\r\n                            place-items: center;\r\n                        }\r\n\r\n                        :last-child {\r\n                            display: grid;\r\n                            place-items: center;\r\n                        }\r\n                    }\r\n\r\n                    .divOneTwo {\r\n                        //opacity: 0;\r\n                        display: flex;\r\n                        justify-content: flex-end;\r\n\r\n                        // &:hover {\r\n                        //     opacity: 1;\r\n                        // }\r\n\r\n                        #deleteTodo {\r\n                            border: .5px solid #000;\r\n                            margin: 0 5px;\r\n                            cursor: pointer;\r\n                            height: 2rem;\r\n                            width: 2rem;\r\n                            border-radius: 5px;\r\n                            color: #ff0000;\r\n                            background: #fff;\r\n        \r\n                            i {\r\n                                font-size: 1rem;\r\n                            }\r\n    \r\n                            &:hover {\r\n                                border: none;\r\n                                color: #fff;\r\n                                background: #ff0000;\r\n                            }\r\n                        }\r\n\r\n                        #editTodo {\r\n                            cursor: pointer;\r\n                            height: 2rem;\r\n                            width: 2rem;\r\n                            border-radius: 5px;\r\n                            color: #36d0ff;\r\n                            background: #fff;\r\n                            border: .5px solid #000;\r\n\r\n                            &:hover {\r\n                                border: none;\r\n                                color: #fff;\r\n                                background: #36d0ff;\r\n                            }\r\n\r\n                            i {\r\n                                font-size: 1rem;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                .divTwo {\r\n                    height: auto;\r\n                    width: 100%;\r\n\r\n                    p {\r\n                        color: #808080;\r\n                        font-size: 1.3rem;\r\n                        letter-spacing: .5px;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Modules/Factory.js":
/*!********************************!*\
  !*** ./src/Modules/Factory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "todoArray": () => (/* binding */ todoArray),
/* harmony export */   "saveInputInfo": () => (/* binding */ saveInputInfo),
/* harmony export */   "index": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ "./src/Modules/TodoList.js");
// This Module will take care of all the application logics 🔮




// function to create new todo list
function createTodo() {
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    return new _TodoList__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, priority, dueDate)
}

// Array to store all the todo lists
let todoArray = localStorage.getItem('List') ? JSON.parse(localStorage.getItem('List')) : []


// function to delete todo list
function deleteTodo(e) {
    todoArray = JSON.parse(localStorage.getItem('List'))
    let parent = e.target.parentNode.parentNode
    let a = parent.childNodes[1].childNodes[1].textContent

    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].title === a) {
            let x = todoArray.indexOf(todoArray[i])
            let newArr = todoArray.splice(x, 1)
            localStorage.setItem('List', JSON.stringify(todoArray))
        }
    }
}


// function to edit todo list 
let index // the index will be set by the saveInputInfo

function editTodo() {
    todoArray = localStorage.getItem('List') ? JSON.parse(localStorage.getItem('List')) : []

    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    let newList = new _TodoList__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, priority, dueDate)

    todoArray.splice(index, 1, newList)
    localStorage.setItem('List', JSON.stringify(todoArray))
}


// function to save Input info in case the person might want to edit it later.
// This function also gets the Index of the list of be edited.
function saveInputInfo(e) {
    let title = document.getElementById('todoTitle')
    let description = document.getElementById('todoDescription')
    let priority = document.getElementById('todoPriority')
    let dueDate = document.getElementById('todoDueDate')
    
    let parent = e.target.parentNode.parentNode
    let a = parent.childNodes[1].childNodes[1].textContent

    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].title === a) {
            index = todoArray.indexOf(todoArray[i])
            let a = todoArray[i].title
            let b = todoArray[i].description
            let c = todoArray[i].priority
            let d = todoArray[i].dueDate

            title.value = a
            description.value = b
            priority.value = c
            dueDate.value = d
        }
    }
}








/***/ }),

/***/ "./src/Modules/HelperFunctions.js":
/*!****************************************!*\
  !*** ./src/Modules/HelperFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanInput": () => (/* binding */ cleanInput)
/* harmony export */ });
// Creating function to clean the input boxes.
function cleanInput() {
    const title = document.getElementById('todoTitle').value = ''
    const description = document.getElementById('todoDescription').value = ''
    const priority = document.getElementById('todoPriority').value = ''
    const dueDate = document.getElementById('todoDueDate').value  = ''
}



/***/ }),

/***/ "./src/Modules/Paintdom.js":
/*!*********************************!*\
  !*** ./src/Modules/Paintdom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factory */ "./src/Modules/Factory.js");
/* harmony import */ var _HelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelperFunctions */ "./src/Modules/HelperFunctions.js");
// This module will take care of all the DOM related functionality.




const addBtn = document.getElementById('addList')
const editBtn = document.getElementById('editList')

// Function is render list to the dom. ( creates DOM element )
function renderList(title, description, priority, dueDate) {
    const mainInbox = document.getElementById('InboxContainer')

    const div = document.createElement('div')
    div.classList.add('todoStyle')
    div.innerHTML = `
    <div class='divOne'>
        <div class='divOneOne'>
            <p>${title}</p>
            <p>${priority}</p>
            <p>${dueDate}</p>
        </div>

        <div class='divOneTwo'>
            <button class='delete' id='deleteTodo'><i class="far fa-trash-alt"></i></button>
            <button class='edit' id='editTodo'><i class="far fa-edit"></i></button>
        </div>
    </div>
    
    <div class='divTwo'>
        <p>${description}</p>
    </div>
    `

    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(e)
            div.parentNode.removeChild(div)
        }
    })

    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.saveInputInfo)(e)
            const module = document.querySelector('.module')
            module.style.display = 'grid'
            const add = document.getElementById('addList')
            const edit = document.getElementById('editList')
            add.style.display = 'none'
            edit.style.display = 'block'
        }
    })

    mainInbox.appendChild(div)
}


// Function to delete list element from the DOM.
function deleteListElement() {
    const mainInbox = document.getElementById('InboxContainer')
    mainInbox.removeChild(mainInbox.childNodes[_Factory__WEBPACK_IMPORTED_MODULE_0__.index + 1])
}


// This function will make the list appears indefinitely until deleted
_Factory__WEBPACK_IMPORTED_MODULE_0__.todoArray.forEach(el => {
    renderList(el.title, el.description, el.priority, el.dueDate)
})


function createTodoListElement() {
    const todo = (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.createTodo)()
    _Factory__WEBPACK_IMPORTED_MODULE_0__.todoArray.push(todo)
    localStorage.setItem('List', JSON.stringify(_Factory__WEBPACK_IMPORTED_MODULE_0__.todoArray))
    renderList(todo.title, todo.description, todo.priority, todo.dueDate)
}


function createEditedTodoElement() {
    const Box = document.getElementById('InboxContainer')
    const oldList = Box.childNodes[_Factory__WEBPACK_IMPORTED_MODULE_0__.index + 1]

    // 1. Change the list details in the todoArray & the local Storage
    ;(0,_Factory__WEBPACK_IMPORTED_MODULE_0__.editTodo)()    
    // 2. Delete the old dom element of the list
    deleteListElement()

    // 3. Render the dom element 
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value
    renderList(title, description, priority, dueDate)

    const newList = Box.childNodes[(_Factory__WEBPACK_IMPORTED_MODULE_0__.todoArray.length - 1) + 1]

    Box.replaceChild(newList, oldList)
}


addBtn.addEventListener('click', () => {
    createTodoListElement()
    ;(0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__.cleanInput)()
})


editBtn.addEventListener('click', () => {
    createEditedTodoElement()
    ;(0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_1__.cleanInput)()
})





/***/ }),

/***/ "./src/Modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/Modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Factory Function to create todos
function Todo(title, description, priority, dueDate) {
    return {title, description, priority, dueDate}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/Modules/UI.js":
/*!***************************!*\
  !*** ./src/Modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelperFunctions */ "./src/Modules/HelperFunctions.js");


// Project list animation
const arrow = document.getElementById('arrow')

arrow.addEventListener('click', () => {
    const projectList = document.querySelector('.projectList')

    if (projectList.classList.contains('slideDown')) {
        projectList.classList.remove('slideDown')
        projectList.classList.add('slideUp')
        arrow.classList.remove('rotateDown')
    } else {
        projectList.classList.add('slideDown')
        projectList.classList.remove('slideUp')
        arrow.classList.add('rotateDown')
    }
})


// Side bar animation
const navSpan = document.getElementById('spann')

navSpan.addEventListener('click', () => {
    const mainContent = document.getElementById('mainContent')
    const sideBarOne = document.querySelector('.sideBarOne')
    const sideBarTwo = document.querySelector('.sideBarTwo')

    if (mainContent.classList.contains('slideLeft')) {
        mainContent.classList.remove('slideLeft')
        sideBarOne.style.display = 'flex'
        sideBarTwo.style.display = 'flex'
    } else {
        mainContent.classList.add('slideLeft')
        sideBarOne.style.display = 'none'
        sideBarTwo.style.display = 'none'
    }
})


// Insert current date in the svg
const todaySvg = document.getElementById('todayDate')

const date = new Date()
todaySvg.textContent = date.getUTCDate()


// Open & Close Module
const module = document.querySelector('.module')
// Open Modal Buttons
const plusIcon = document.getElementById('plusIcon')
const newListBtn = document.getElementById('newListBtn')
// Close Modal Buttons
const add = document.getElementById('addList')
const edit = document.getElementById('editList')
const cancel = document.getElementById('cancelList')

// plusIcon & newListBtn are two different btns but serves the same purpose.
plusIcon.addEventListener('click', () => {
    module.style.display = 'grid'
    add.style.display = 'block'
    edit.style.display = 'none'
})

newListBtn.addEventListener('click', () => {
    module.style.display = 'grid'
    add.style.display = 'block'
    edit.style.display = 'none'
})

add.addEventListener('click', () => {
    module.style.display = 'none'
})

edit.addEventListener('click', () => {
    module.style.display = 'none'
})

cancel.addEventListener('click', () => {
    module.style.display = 'none'
    ;(0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__.cleanInput)()
})


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
/************************************************************************/
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _Modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/UI */ "./src/Modules/UI.js");
/* harmony import */ var _Modules_Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/Factory */ "./src/Modules/Factory.js");
/* harmony import */ var _Modules_Paintdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/Paintdom */ "./src/Modules/Paintdom.js");
// Sass files 🔮



// JavaScript



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxV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QUFDNkI7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9IZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9QYWludGRvbS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL1RvZG9MaXN0LmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL01vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0JmZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgaGVpZ2h0OiAwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGhlaWdodDogMTByZW07XFxuICB9XFxufVxcbi5zbGlkZURvd24ge1xcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGhlaWdodDogMTByZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbn1cXG4uc2xpZGVVcCB7XFxuICBhbmltYXRpb246IHNsaWRlVXAgMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXG4gIDAlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdCB7XFxuICBhbmltYXRpb246IHNsaWRlTGVmdCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZURvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxufVxcbi5yb3RhdGVEb3duIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLm5hdlN0eWxlIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSB7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCA2cHggNnB4O1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIC5pbnB1dEFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjYWRkTGlzdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDAgMS41cmVtIDAgM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjYWRkTGlzdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDAgMS41cmVtIDAgM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjZWRpdExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNjYW5jZWxMaXN0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNjYW5jZWxMaXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTByZW07XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXB4IDA7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmIDAuNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDFweDtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuN3M7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24gI2hvbWVJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byB7XFxuICB3aWR0aDogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIGhlaWdodDogNTIuNXJlbTtcXG59XFxubWFpbiAuc2lkZUJhciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDcwJTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDAuM3B4ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAuaW5ib3gge1xcbiAgY29sb3I6ICM0NGI0ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmRheSB7XFxuICBjb2xvcjogIzAzZGEwMztcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAucHJvamVjdCB7XFxuICBjb2xvcjogIzhmNDlmZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciBoMSB7XFxuICBtYXJnaW46IDAgNnB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA4NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI2Fycm93IHtcXG4gIGNvbG9yOiAjOWU5ZTllO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCBoMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNuZXdQcm9qZWN0SWNvbiB7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogODAlO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSBoMSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6ICM0NzQ3NDc7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDE6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdG4ge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIHdpZHRoOiAxLjhyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdG46aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNlMmUyZTI7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgbWluLWhlaWdodDogOHJlbTtcXG4gIG1heC1oZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSB7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIDpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIHtcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbzpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICMzNmQwZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbzpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMzNmQwZmY7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIGkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdlR3byB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZUd28gcCB7XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbC9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL25hdmJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL21haW5Db250ZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QUNaQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RURlTjtFQ1pFO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RURjTjtBQUNGO0FDWEE7RUFDSSwrQ0FBQTtBRGFKOztBQ1ZBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsYUFBQTtFRGFO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QUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FIaU5oQztBRzdNd0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FIK001QjtBRzdNNEI7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FIK01oQztBRzVNNEI7RUFDSSxlQUFBO0FIOE1oQztBR3hNZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBSDBNcEI7QUd4TW9CO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUgwTXhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0JmZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0JmZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgaGVpZ2h0OiAwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGhlaWdodDogMTByZW07XFxuICB9XFxufVxcbi5zbGlkZURvd24ge1xcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGhlaWdodDogMTByZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbn1cXG4uc2xpZGVVcCB7XFxuICBhbmltYXRpb246IHNsaWRlVXAgMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXG4gIDAlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdCB7XFxuICBhbmltYXRpb246IHNsaWRlTGVmdCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZURvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxufVxcbi5yb3RhdGVEb3duIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLm5hdlN0eWxlIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSB7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCA2cHggNnB4O1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIC5pbnB1dEFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjYWRkTGlzdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDAgMS41cmVtIDAgM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjYWRkTGlzdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDAgMS41cmVtIDAgM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjZWRpdExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNjYW5jZWxMaXN0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNjYW5jZWxMaXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTByZW07XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXB4IDA7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmIDAuNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDFweDtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuN3M7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24gI2hvbWVJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byB7XFxuICB3aWR0aDogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIGhlaWdodDogNTIuNXJlbTtcXG59XFxubWFpbiAuc2lkZUJhciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDcwJTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDAuM3B4ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAuaW5ib3gge1xcbiAgY29sb3I6ICM0NGI0ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmRheSB7XFxuICBjb2xvcjogIzAzZGEwMztcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAucHJvamVjdCB7XFxuICBjb2xvcjogIzhmNDlmZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciBoMSB7XFxuICBtYXJnaW46IDAgNnB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA4NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI2Fycm93IHtcXG4gIGNvbG9yOiAjOWU5ZTllO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCBoMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNuZXdQcm9qZWN0SWNvbiB7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogODAlO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSBoMSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6ICM0NzQ3NDc7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDE6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdG4ge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIHdpZHRoOiAxLjhyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdG46aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNlMmUyZTI7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgbWluLWhlaWdodDogOHJlbTtcXG4gIG1heC1oZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSB7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIDpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIHtcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbzpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICMzNmQwZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbzpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMzNmQwZmY7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIGkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdlR3byB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZUd28gcCB7XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cIixcIkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZURvd24ge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZVVwIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVMZWZ0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyByb3RhdGVEb3duIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJvdGF0ZURvd24ge1xcclxcbiAgICBhbmltYXRpb246IHJvdGF0ZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcblwiLFwiLm5hdlN0eWxlIHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIC5tb2R1bGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgIC5tb2R1bGVDb250ZW50IHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuZm9ybVRvZG8ge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAuaW5wdXRDb250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0QXJlYSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5idG5zIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjYWRkTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjZWRpdExpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjY2FuY2VsTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2T25lIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTByZW07XFxyXFxuXFxyXFxuICAgICAgICAuc3BhblN0eWxlIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmIC41cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggMXB4O1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmhvbWVJY29uIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgI2hvbWVJY29uIHtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2VHdvIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgI3BsdXNJY29uIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxyXFxuICAgIGhlaWdodDogNTIuNXJlbTtcXHJcXG5cXHJcXG4gICAgLnNpZGVCYXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxyXFxuXFxyXFxuICAgICAgICAuc2lkZUJhck9uZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnNpZGVCYXJDb250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgLjNweCAjZjBmMGYwO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuaW5ib3gge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NGI0ZmY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmRheSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAzZGEwMztcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhmNDlmZjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuc2lkZUJhclR3byB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgLnByb2plY3REZWZhdWx0IHtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAjYXJyb3cge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5ZTllOWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICNuZXdQcm9qZWN0SWNvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAucHJvamVjdExpc3Qge1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgICAgICAgICAvL2JveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5saXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDNmcjtcXHJcXG5cXHJcXG4gICAgICAgIC5jb250ZW50T25lIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgICAgICAgICAgIC5jb250ZW50T25lT25lIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNvbnRlbnRPbmVUd28ge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NzQ3NDc7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAjbmV3TGlzdEJ0biB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmNvbnRlbnRUd28ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC50b2RvU3R5bGUge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IC41cHggc29saWQgI2UyZTJlMjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCAjZTJlMmUyO1xcclxcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4cmVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAuZGl2T25lIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLmRpdk9uZU9uZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGl2T25lVHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAvL29wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAjZGVsZXRlVG9kbyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICNlZGl0VG9kbyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM2ZDBmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICMwMDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzZkMGZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kaXZUd28ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhpcyBNb2R1bGUgd2lsbCB0YWtlIGNhcmUgb2YgYWxsIHRoZSBhcHBsaWNhdGlvbiBsb2dpY3Mg8J+UrlxyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvTGlzdFwiXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgdG9kbyBsaXN0XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuXHJcbiAgICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSlcclxufVxyXG5cclxuLy8gQXJyYXkgdG8gc3RvcmUgYWxsIHRoZSB0b2RvIGxpc3RzXHJcbmxldCB0b2RvQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTGlzdCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTGlzdCcpKSA6IFtdXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZGVsZXRlIHRvZG8gbGlzdFxyXG5mdW5jdGlvbiBkZWxldGVUb2RvKGUpIHtcclxuICAgIHRvZG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xpc3QnKSlcclxuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgIGxldCBhID0gcGFyZW50LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRvZG9BcnJheVtpXS50aXRsZSA9PT0gYSkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHRvZG9BcnJheS5pbmRleE9mKHRvZG9BcnJheVtpXSlcclxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRvZG9BcnJheS5zcGxpY2UoeCwgMSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyYXkpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGVkaXQgdG9kbyBsaXN0IFxyXG5sZXQgaW5kZXggLy8gdGhlIGluZGV4IHdpbGwgYmUgc2V0IGJ5IHRoZSBzYXZlSW5wdXRJbmZvXHJcblxyXG5mdW5jdGlvbiBlZGl0VG9kbygpIHtcclxuICAgIHRvZG9BcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMaXN0JykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMaXN0JykpIDogW11cclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuXHJcbiAgICBsZXQgbmV3TGlzdCA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpXHJcblxyXG4gICAgdG9kb0FycmF5LnNwbGljZShpbmRleCwgMSwgbmV3TGlzdClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdMaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KSlcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHNhdmUgSW5wdXQgaW5mbyBpbiBjYXNlIHRoZSBwZXJzb24gbWlnaHQgd2FudCB0byBlZGl0IGl0IGxhdGVyLlxyXG4vLyBUaGlzIGZ1bmN0aW9uIGFsc28gZ2V0cyB0aGUgSW5kZXggb2YgdGhlIGxpc3Qgb2YgYmUgZWRpdGVkLlxyXG5mdW5jdGlvbiBzYXZlSW5wdXRJbmZvKGUpIHtcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKVxyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpXHJcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JylcclxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJylcclxuICAgIFxyXG4gICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgbGV0IGEgPSBwYXJlbnQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodG9kb0FycmF5W2ldLnRpdGxlID09PSBhKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gdG9kb0FycmF5LmluZGV4T2YodG9kb0FycmF5W2ldKVxyXG4gICAgICAgICAgICBsZXQgYSA9IHRvZG9BcnJheVtpXS50aXRsZVxyXG4gICAgICAgICAgICBsZXQgYiA9IHRvZG9BcnJheVtpXS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBsZXQgYyA9IHRvZG9BcnJheVtpXS5wcmlvcml0eVxyXG4gICAgICAgICAgICBsZXQgZCA9IHRvZG9BcnJheVtpXS5kdWVEYXRlXHJcblxyXG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IGFcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBiXHJcbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlID0gY1xyXG4gICAgICAgICAgICBkdWVEYXRlLnZhbHVlID0gZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBkZWxldGVUb2RvLCBlZGl0VG9kbywgdG9kb0FycmF5LCBzYXZlSW5wdXRJbmZvLCBpbmRleCB9IiwiLy8gQ3JlYXRpbmcgZnVuY3Rpb24gdG8gY2xlYW4gdGhlIGlucHV0IGJveGVzLlxyXG5mdW5jdGlvbiBjbGVhbklucHV0KCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlJykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZScpLnZhbHVlICA9ICcnXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNsZWFuSW5wdXQgfSIsIi8vIFRoaXMgbW9kdWxlIHdpbGwgdGFrZSBjYXJlIG9mIGFsbCB0aGUgRE9NIHJlbGF0ZWQgZnVuY3Rpb25hbGl0eS5cclxuaW1wb3J0IHsgY3JlYXRlVG9kbywgZGVsZXRlVG9kbywgZWRpdFRvZG8sIHRvZG9BcnJheSwgc2F2ZUlucHV0SW5mbywgaW5kZXggfSBmcm9tIFwiLi9GYWN0b3J5XCI7XHJcbmltcG9ydCB7IGNsZWFuSW5wdXQgfSBmcm9tIFwiLi9IZWxwZXJGdW5jdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpXHJcbmNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdExpc3QnKVxyXG5cclxuLy8gRnVuY3Rpb24gaXMgcmVuZGVyIGxpc3QgdG8gdGhlIGRvbS4gKCBjcmVhdGVzIERPTSBlbGVtZW50IClcclxuZnVuY3Rpb24gcmVuZGVyTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgICBjb25zdCBtYWluSW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5ib3hDb250YWluZXInKVxyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb1N0eWxlJylcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPSdkaXZPbmUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2Rpdk9uZU9uZSc+XHJcbiAgICAgICAgICAgIDxwPiR7dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8cD4ke3ByaW9yaXR5fTwvcD5cclxuICAgICAgICAgICAgPHA+JHtkdWVEYXRlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nZGl2T25lVHdvJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZGVsZXRlJyBpZD0nZGVsZXRlVG9kbyc+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdlZGl0JyBpZD0nZWRpdFRvZG8nPjxpIGNsYXNzPVwiZmFyIGZhLWVkaXRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz0nZGl2VHdvJz5cclxuICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG5cclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuICAgICAgICAgICAgZGVsZXRlVG9kbyhlKVxyXG4gICAgICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQnKSkge1xyXG4gICAgICAgICAgICBzYXZlSW5wdXRJbmZvKGUpXHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGUnKVxyXG4gICAgICAgICAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdExpc3QnKVxyXG4gICAgICAgICAgICBhZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtYWluSW5ib3guYXBwZW5kQ2hpbGQoZGl2KVxyXG59XHJcblxyXG5cclxuLy8gRnVuY3Rpb24gdG8gZGVsZXRlIGxpc3QgZWxlbWVudCBmcm9tIHRoZSBET00uXHJcbmZ1bmN0aW9uIGRlbGV0ZUxpc3RFbGVtZW50KCkge1xyXG4gICAgY29uc3QgbWFpbkluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0luYm94Q29udGFpbmVyJylcclxuICAgIG1haW5JbmJveC5yZW1vdmVDaGlsZChtYWluSW5ib3guY2hpbGROb2Rlc1tpbmRleCArIDFdKVxyXG59XHJcblxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIG1ha2UgdGhlIGxpc3QgYXBwZWFycyBpbmRlZmluaXRlbHkgdW50aWwgZGVsZXRlZFxyXG50b2RvQXJyYXkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICByZW5kZXJMaXN0KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3RFbGVtZW50KCkge1xyXG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oKVxyXG4gICAgdG9kb0FycmF5LnB1c2godG9kbylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdMaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KSlcclxuICAgIHJlbmRlckxpc3QodG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5wcmlvcml0eSwgdG9kby5kdWVEYXRlKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWRpdGVkVG9kb0VsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5ib3hDb250YWluZXInKVxyXG4gICAgY29uc3Qgb2xkTGlzdCA9IEJveC5jaGlsZE5vZGVzW2luZGV4ICsgMV1cclxuXHJcbiAgICAvLyAxLiBDaGFuZ2UgdGhlIGxpc3QgZGV0YWlscyBpbiB0aGUgdG9kb0FycmF5ICYgdGhlIGxvY2FsIFN0b3JhZ2VcclxuICAgIGVkaXRUb2RvKCkgICAgXHJcbiAgICAvLyAyLiBEZWxldGUgdGhlIG9sZCBkb20gZWxlbWVudCBvZiB0aGUgbGlzdFxyXG4gICAgZGVsZXRlTGlzdEVsZW1lbnQoKVxyXG5cclxuICAgIC8vIDMuIFJlbmRlciB0aGUgZG9tIGVsZW1lbnQgXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuICAgIHJlbmRlckxpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSlcclxuXHJcbiAgICBjb25zdCBuZXdMaXN0ID0gQm94LmNoaWxkTm9kZXNbKHRvZG9BcnJheS5sZW5ndGggLSAxKSArIDFdXHJcblxyXG4gICAgQm94LnJlcGxhY2VDaGlsZChuZXdMaXN0LCBvbGRMaXN0KVxyXG59XHJcblxyXG5cclxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlVG9kb0xpc3RFbGVtZW50KClcclxuICAgIGNsZWFuSW5wdXQoKVxyXG59KVxyXG5cclxuXHJcbmVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjcmVhdGVFZGl0ZWRUb2RvRWxlbWVudCgpXHJcbiAgICBjbGVhbklucHV0KClcclxufSlcclxuXHJcblxyXG5cclxuIiwiLy8gRmFjdG9yeSBGdW5jdGlvbiB0byBjcmVhdGUgdG9kb3NcclxuZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGV9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG8iLCJpbXBvcnQgeyBjbGVhbklucHV0IH0gZnJvbSBcIi4vSGVscGVyRnVuY3Rpb25zXCJcclxuXHJcbi8vIFByb2plY3QgbGlzdCBhbmltYXRpb25cclxuY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3cnKVxyXG5cclxuYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXHJcblxyXG4gICAgaWYgKHByb2plY3RMaXN0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVEb3duJykpIHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZURvd24nKVxyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlVXAnKVxyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZURvd24nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdzbGlkZURvd24nKVxyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlVXAnKVxyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZURvd24nKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vIFNpZGUgYmFyIGFuaW1hdGlvblxyXG5jb25zdCBuYXZTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYW5uJylcclxuXHJcbm5hdlNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBzaWRlQmFyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJPbmUnKVxyXG4gICAgY29uc3Qgc2lkZUJhclR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyVHdvJylcclxuXHJcbiAgICBpZiAobWFpbkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZUxlZnQnKSkge1xyXG4gICAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlTGVmdCcpXHJcbiAgICAgICAgc2lkZUJhck9uZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgc2lkZUJhclR3by5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NsaWRlTGVmdCcpXHJcbiAgICAgICAgc2lkZUJhck9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgc2lkZUJhclR3by5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gSW5zZXJ0IGN1cnJlbnQgZGF0ZSBpbiB0aGUgc3ZnXHJcbmNvbnN0IHRvZGF5U3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5RGF0ZScpXHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG50b2RheVN2Zy50ZXh0Q29udGVudCA9IGRhdGUuZ2V0VVRDRGF0ZSgpXHJcblxyXG5cclxuLy8gT3BlbiAmIENsb3NlIE1vZHVsZVxyXG5jb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlJylcclxuLy8gT3BlbiBNb2RhbCBCdXR0b25zXHJcbmNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXNJY29uJylcclxuY29uc3QgbmV3TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0QnRuJylcclxuLy8gQ2xvc2UgTW9kYWwgQnV0dG9uc1xyXG5jb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpXHJcbmNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdExpc3QnKVxyXG5jb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsTGlzdCcpXHJcblxyXG4vLyBwbHVzSWNvbiAmIG5ld0xpc3RCdG4gYXJlIHR3byBkaWZmZXJlbnQgYnRucyBidXQgc2VydmVzIHRoZSBzYW1lIHB1cnBvc2UuXHJcbnBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgIGFkZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5uZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgIGFkZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgY2xlYW5JbnB1dCgpXHJcbn0pXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBTYXNzIGZpbGVzIPCflK5cclxuaW1wb3J0Jy4vc2Fzcy9tYWluLnNjc3MnXHJcblxyXG5cclxuLy8gSmF2YVNjcmlwdFxyXG5pbXBvcnQgVUkgZnJvbSAnLi9Nb2R1bGVzL1VJJ1xyXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL01vZHVsZXMvRmFjdG9yeSdcclxuaW1wb3J0IFBhaW50ZG9tIGZyb20gJy4vTW9kdWxlcy9QYWludGRvbSciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=