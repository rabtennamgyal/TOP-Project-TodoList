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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #9e9e9e;\n  font-size: 1.5rem;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .content {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\nmain .content .contentOne {\n  display: grid;\n}\nmain .content .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\nmain .content .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .contentOne .contentOneTwo #newListBtn {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .contentOne .contentOneTwo #newListBtn:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .contentTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo {\n  margin: 0 5px;\n  cursor: pointer;\n  color: #fff;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 5px;\n  background: #ff0000;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: 0.5px solid #000;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  color: #fff;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 5px;\n  background: #36d0ff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: 0.5px solid #000;\n  color: #36d0ff;\n  background: #fff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .contentTwo .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}", "",{"version":3,"sources":["webpack://./src/sass/global/_global.scss","webpack://./src/sass/main.scss","webpack://./src/sass/global/_animations.scss","webpack://./src/sass/components/navbar.scss","webpack://./src/sass/components/mainContent.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap');\r\n\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: inherit;\r\n}\r\n\r\nhtml, body {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #9e9e9e;\n  font-size: 1.5rem;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .content {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\nmain .content .contentOne {\n  display: grid;\n}\nmain .content .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\nmain .content .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .contentOne .contentOneTwo #newListBtn {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .contentOne .contentOneTwo #newListBtn:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .contentTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\nmain .content .contentTwo .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo {\n  margin: 0 5px;\n  cursor: pointer;\n  color: #fff;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 5px;\n  background: #ff0000;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: 0.5px solid #000;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  color: #fff;\n  height: 2rem;\n  width: 2rem;\n  border: none;\n  border-radius: 5px;\n  background: #36d0ff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: 0.5px solid #000;\n  color: #36d0ff;\n  background: #fff;\n}\nmain .content .contentTwo .todoStyle .divOne .divOneTwo #editTodo i {\n  font-size: 1rem;\n}\nmain .content .contentTwo .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .contentTwo .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}","@keyframes slideDown {\r\n    0% {\r\n        opacity: 0;\r\n        height: 0rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n}\r\n\r\n.slideDown {\r\n    animation: slideDown 200ms ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideUp {\r\n    0% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.slideUp {\r\n    animation: slideUp 200ms ease-in-out forwards;\r\n}\r\n\r\n\r\n@keyframes slideLeft {\r\n    0% {\r\n        grid-template-columns: 22% 78%;\r\n    }\r\n\r\n    100% {\r\n        grid-template-columns: 0% 100%;\r\n    }\r\n}\r\n\r\n.slideLeft {\r\n    animation: slideLeft 0.5s ease-in-out forwards;\r\n}\r\n\r\n\r\n@keyframes rotateDown {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n.rotateDown {\r\n    animation: rotateDown 200ms ease-in-out forwards;\r\n}\r\n\r\n",".navStyle {\r\n    height: 5rem;\r\n    background: #ff4500;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .module {\r\n        background: #e9e9e983;\r\n        display: none;\r\n        place-items: center;\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n        .moduleContent {\r\n            background: #fff;\r\n            border: none;\r\n            border-radius: 2rem;\r\n            display: grid;\r\n            place-items: center;\r\n            height: 50%;\r\n            width: 40%;\r\n            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\r\n\r\n            .formTodo {\r\n                margin-top: 10px;\r\n                height: 90%;\r\n                width: 90%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: space-between;\r\n\r\n                .inputContainer {\r\n                    height: 4rem;\r\n                    display: grid;\r\n                    grid-template-columns: 1fr 3fr;\r\n\r\n                    label {\r\n                        display: grid;\r\n                        place-items: center;\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n                    }\r\n\r\n                    input {\r\n                        height: 3rem;\r\n                        width: 20rem;\r\n                    }\r\n\r\n                    .inputArea {\r\n                        width: 100%;\r\n                        font-size: 1.5rem;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .btnContainer {\r\n                display: grid;\r\n                grid-template-columns: 1fr 2fr;\r\n                height: 90%;\r\n                width: 90%;\r\n\r\n                .btns {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 7rem;\r\n                        border-radius: 5px;\r\n                        font-weight: 600;\r\n                    }\r\n\r\n                    #addList {\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelList {\r\n                        outline: none;\r\n                        border: .5px solid #000;\r\n                        background: #fff;\r\n\r\n                        &:hover {\r\n                            background: #ebebeb;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .navOne {\r\n        justify-content: center;\r\n        align-items: center;\r\n        display: flex;\r\n        width: 10rem;\r\n\r\n        .spanStyle {\r\n            cursor: pointer;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n\r\n                :first-child {\r\n                    transform: rotate(45deg);\r\n                    margin-bottom: 0;\r\n                    margin-left: 2px;\r\n                }\r\n\r\n                :not(:first-child):not(:last-child) {\r\n                    display: none;\r\n                }\r\n\r\n                :last-child {\r\n                    transform: rotate(-45deg);\r\n                    margin-left: 2px;\r\n                }\r\n            }\r\n\r\n            span {\r\n                cursor: pointer;\r\n                border: solid #ffffff .5px;\r\n                background: #fff;\r\n                width: 15px;\r\n                transform-origin: 0px 1px;\r\n                transition: ease-in-out 0.7s;\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: -2px;\r\n            }\r\n\r\n            :not(:first-child):not(:last-child) {\r\n                margin-bottom: -2px;\r\n            }\r\n        }\r\n\r\n        .homeIcon {\r\n            height: 2rem;\r\n            width: 3.5rem;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            cursor: pointer;\r\n            margin: 0 1rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n            }\r\n\r\n            #homeIcon {\r\n                cursor: pointer;\r\n                color: #fff;\r\n                font-size: 2rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    .navTwo {\r\n        width: 10rem;\r\n        display: grid;\r\n        place-items: center;\r\n\r\n        #plusIcon {\r\n            cursor: pointer;\r\n            color: #fff;\r\n            font-size: 2rem;\r\n\r\n            &:hover {\r\n                transform: rotate(360deg);\r\n                transition: 0.7s ease-in-out;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n","main {\r\n    display: grid;\r\n    grid-template-columns: 22% 78%;\r\n    height: 52.5rem;\r\n\r\n    .sideBar {\r\n        background: #f0f0f0;\r\n        display: grid;\r\n        grid-template-rows: 30% 70%;\r\n\r\n        .sideBarOne {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            .sideBarContainer {\r\n                cursor: pointer;\r\n                border: solid .3px #f0f0f0;\r\n                border-radius: 5px;\r\n                height: 30px;\r\n                width: 70%;\r\n                margin: 5px 0;\r\n                display: flex;\r\n                align-items: center;\r\n                padding: 5px;\r\n\r\n                &:hover {\r\n                    background: #d8d8d8b0;\r\n                }\r\n\r\n                .inbox {\r\n                    color: #44b4ff;\r\n                }\r\n\r\n                .day {\r\n                    color: #03da03;\r\n                }\r\n\r\n                .project {\r\n                    color: #8f49ff;\r\n                }\r\n\r\n                h1 {\r\n                    margin: 0 6px;\r\n                    font-size: 1.3rem;\r\n                    font-family: Open Sans, monospace, sans-serif;\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarTwo {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            \r\n            .projectDefault {\r\n                align-self: flex-end;\r\n                cursor: pointer;\r\n                height: 3rem;\r\n                width: 85%;\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                #arrow {\r\n                    color: #9e9e9e;\r\n                    font-size: 1.5rem;\r\n                    margin: 0 1rem;\r\n                    transition: 200ms ease-in-out;\r\n                }\r\n\r\n                h1 {\r\n                    font-size: 1.5rem;\r\n                    font-family: Open Sans, sans-serif;\r\n                }\r\n\r\n                #newProjectIcon {\r\n                    height: 1.8rem;\r\n                    margin-left: 120px;\r\n\r\n                    &:hover {\r\n                        transform: rotate(360deg);\r\n                        transition: 0.7s ease-in-out;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .projectList {\r\n                align-self: flex-end;\r\n                opacity: 0;\r\n                height: 0;\r\n                width: 80%;\r\n                //box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n\r\n                .list {\r\n                    cursor: pointer;\r\n                    margin: 1rem 0;\r\n                    height: 3rem;\r\n                    border-radius: 5px;\r\n                    display: grid;\r\n                    align-items: center;\r\n                    padding: 5px 0 5px 5px;\r\n\r\n                    &:hover {\r\n                        background: #d8d8d8b0;\r\n                    }\r\n\r\n                    p {\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .content {\r\n        display: grid;\r\n        grid-template-rows: .5fr 3fr;\r\n\r\n        .contentOne {\r\n            display: grid;\r\n\r\n            .contentOneOne {\r\n                margin: 1rem 2rem;\r\n\r\n                h1 {\r\n                    cursor: pointer;\r\n                    margin: 1rem 2rem;\r\n                    font-size: 1.8rem;\r\n                    font-family: \"Open Sans\", sans-serif;\r\n                }\r\n            }\r\n\r\n            .contentOneTwo {\r\n                margin: 1rem 4rem;\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                h1 {\r\n                    cursor: pointer;\r\n                    font-size: 1.5rem;\r\n                    font-family: \"Open Sans\", sans-serif;\r\n                    margin: 0 5px;\r\n                    color: #474747;\r\n\r\n                    &:hover {\r\n                        color: #ff4500;\r\n                    }\r\n                }\r\n\r\n                #newListBtn {\r\n                    color: #ff4500;\r\n                    cursor: pointer;\r\n                    height: 1.8rem;\r\n                    width: 1.8rem;\r\n\r\n                    &:hover {\r\n                        color: #fff;\r\n                        border-radius: 100rem;\r\n                        background: #ff4500;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .contentTwo {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n\r\n            .todoStyle {\r\n                cursor: pointer;\r\n                border-top: .5px solid #e2e2e2;\r\n                border-bottom: .5px solid #e2e2e2;\r\n                min-height: 8rem;\r\n                max-height: auto;\r\n                width: 90%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                place-items: center;\r\n\r\n                .divOne {\r\n                    margin: 5px 0;\r\n                    width: 100%;\r\n                    display: grid;\r\n                    grid-template-columns: 3fr 1fr;\r\n                    align-items: center;\r\n\r\n                    .divOneOne {\r\n                        display: grid;\r\n                        grid-template-columns: repeat(3, 1fr);\r\n\r\n                        p {\r\n                            font-size: 1.4rem;\r\n                            font-family: Open Sans, cursive, monospace, sans-serif;\r\n                        }\r\n                    }\r\n\r\n                    .divOneTwo {\r\n                        display: flex;\r\n                        justify-content: flex-end;\r\n\r\n                        #deleteTodo {\r\n                            margin: 0 5px;\r\n                            cursor: pointer;\r\n                            color: #fff;\r\n                            height: 2rem;\r\n                            width: 2rem;\r\n                            border: none;\r\n                            border-radius: 5px;\r\n                            background: #ff0000;\r\n        \r\n                            i {\r\n                                font-size: 1rem;\r\n                            }\r\n    \r\n                            &:hover {\r\n                                border: .5px solid #000;\r\n                                color: #ff0000;\r\n                                background: #fff;\r\n                            }\r\n                        }\r\n\r\n                        #editTodo {\r\n                            cursor: pointer;\r\n                            color: #fff;\r\n                            height: 2rem;\r\n                            width: 2rem;\r\n                            border: none;\r\n                            border-radius: 5px;\r\n                            background: #36d0ff;\r\n\r\n                            &:hover {\r\n                                border: .5px solid #000;\r\n                                color: #36d0ff;\r\n                                background: #fff;\r\n                            }\r\n\r\n                            i {\r\n                                font-size: 1rem;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                .divTwo {\r\n                    height: auto;\r\n                    width: 100%;\r\n\r\n                    p {\r\n                        color: #808080;\r\n                        font-size: 1.3rem;\r\n                        letter-spacing: .5px;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "todoArray": () => (/* binding */ todoArray),
/* harmony export */   "saveInputInfo": () => (/* binding */ saveInputInfo)
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

// function to save Input info in case the person might want to edit it later.
function saveInputInfo() {
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    console.log(new _TodoList__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, priority, dueDate))
    //return new Todo(title, description, priority, dueDate)
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

    mainInbox.appendChild(div)
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

addBtn.addEventListener('click', () => {
    createTodoListElement()
    ;(0,_Factory__WEBPACK_IMPORTED_MODULE_0__.saveInputInfo)()

    // It has to be last because it changes the input value to '' / null
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
const cancel = document.getElementById('cancelList')

plusIcon.addEventListener('click', () => {
    module.style.display = 'grid'
})

newListBtn.addEventListener('click', () => {
    module.style.display = 'grid'
})

add.addEventListener('click', () => {
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
/* harmony import */ var _Modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/Paintdom */ "./src/Modules/Paintdom.js");
// Sass files 🔮



// JavaScript


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFB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O0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBVTtBQUNkLENBQUM7Ozs7Ozs7VUN2RUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDd0I7QUFDeEI7QUFDQTtBQUNBO0FBQzZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvc2Fzcy9tYWluLnNjc3M/NmExNyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL01vZHVsZXMvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL0hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL1BhaW50ZG9tLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL01vZHVsZXMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQmZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDByZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG59XFxuLnNsaWRlRG93biB7XFxuICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxufVxcbi5zbGlkZVVwIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xcbiAgMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xcbiAgfVxcbn1cXG4uc2xpZGVMZWZ0IHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlRG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG59XFxuLnJvdGF0ZURvd24ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4ubmF2U3R5bGUge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIHtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgLmlucHV0QXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDdyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAwLjVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDBweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5ob21lSWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHggMDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uICNob21lSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZTdHlsZSAubmF2VHdvICNwbHVzSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICBoZWlnaHQ6IDUyLjVyZW07XFxufVxcbm1haW4gLnNpZGVCYXIge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjNweCAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmluYm94IHtcXG4gIGNvbG9yOiAjNDRiNGZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5kYXkge1xcbiAgY29sb3I6ICMwM2RhMDM7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLnByb2plY3Qge1xcbiAgY29sb3I6ICM4ZjQ5ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgaDEge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNhcnJvdyB7XFxuICBjb2xvcjogIzllOWU5ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb24ge1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBtYXJnaW4tbGVmdDogMTIwcHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNuZXdQcm9qZWN0SWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgM2ZyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUge1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUgaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudE9uZSAuY29udGVudE9uZVR3byB7XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiAjNDc0NzQ3O1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnRuIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICB3aWR0aDogMS44cmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2UyZTJlMjtcXG4gIG1pbi1oZWlnaHQ6IDhyZW07XFxuICBtYXgtaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIGN1cnNpdmUsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8gaSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICMzNmQwZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZUd28ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFsL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9uYXZiYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9tYWluQ29udGVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FDWkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VEZU47RUNaRTtJ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QUE7RUFDQSxtQkFBQTtBSDBNNUI7QUd4TTRCO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUgwTWhDO0FHdk00QjtFQUNJLGVBQUE7QUh5TWhDO0FHbk1nQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FIcU1wQjtBR25Nb0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBSHFNeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQmZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQmZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDByZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG59XFxuLnNsaWRlRG93biB7XFxuICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxufVxcbi5zbGlkZVVwIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xcbiAgMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xcbiAgfVxcbn1cXG4uc2xpZGVMZWZ0IHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlRG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG59XFxuLnJvdGF0ZURvd24ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4ubmF2U3R5bGUge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIHtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgLmlucHV0QXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDdyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAwLjVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDBweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5ob21lSWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHggMDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uICNob21lSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZTdHlsZSAubmF2VHdvICNwbHVzSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICBoZWlnaHQ6IDUyLjVyZW07XFxufVxcbm1haW4gLnNpZGVCYXIge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjNweCAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmluYm94IHtcXG4gIGNvbG9yOiAjNDRiNGZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5kYXkge1xcbiAgY29sb3I6ICMwM2RhMDM7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLnByb2plY3Qge1xcbiAgY29sb3I6ICM4ZjQ5ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgaDEge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNhcnJvdyB7XFxuICBjb2xvcjogIzllOWU5ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb24ge1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBtYXJnaW4tbGVmdDogMTIwcHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNuZXdQcm9qZWN0SWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgM2ZyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUge1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUgaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudE9uZSAuY29udGVudE9uZVR3byB7XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiAjNDc0NzQ3O1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnRuIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICB3aWR0aDogMS44cmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2UyZTJlMjtcXG4gIG1pbi1oZWlnaHQ6IDhyZW07XFxuICBtYXgtaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIGN1cnNpdmUsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8gaSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICMzNmQwZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5jb250ZW50VHdvIC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxubWFpbiAuY29udGVudCAuY29udGVudFR3byAudG9kb1N0eWxlIC5kaXZUd28ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1haW4gLmNvbnRlbnQgLmNvbnRlbnRUd28gLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XCIsXCJAa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVEb3duIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVVcCB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlTGVmdCB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgcm90YXRlRG93biB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGVEb3duIHtcXHJcXG4gICAgYW5pbWF0aW9uOiByb3RhdGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cIixcIi5uYXZTdHlsZSB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAubW9kdWxlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICAubW9kdWxlQ29udGVudCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmZvcm1Ub2RvIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmlucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dEFyZWEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5idG5Db250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAuYnRucyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgI2FkZExpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMS41cmVtIDAgM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgI2NhbmNlbExpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICMwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdk9uZSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcblxcclxcbiAgICAgICAgLnNwYW5TdHlsZSB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2ZmZmZmZiAuNXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC43cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5ob21lSWNvbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICNob21lSWNvbiB7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdlR3byB7XFxyXFxuICAgICAgICB3aWR0aDogMTByZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICNwbHVzSWNvbiB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcclxcbiAgICBoZWlnaHQ6IDUyLjVyZW07XFxyXFxuXFxyXFxuICAgIC5zaWRlQmFyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgNzAlO1xcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJPbmUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC5zaWRlQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIC4zcHggI2YwZjBmMDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmluYm94IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDRiNGZmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kYXkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwM2RhMDM7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ZjQ5ZmY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDZweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJUd28ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0RGVmYXVsdCB7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2Fycm93IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAjbmV3UHJvamVjdEljb24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnByb2plY3RMaXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgLy9ib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAubGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAzZnI7XFxyXFxuXFxyXFxuICAgICAgICAuY29udGVudE9uZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuY29udGVudE9uZU9uZSB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAycmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5jb250ZW50T25lVHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDRyZW07XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDc0NzQ3O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI25ld0xpc3RCdG4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5jb250ZW50VHdvIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAudG9kb1N0eWxlIHtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAuNXB4IHNvbGlkICNlMmUyZTI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgI2UyZTJlMjtcXHJcXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmRpdk9uZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5kaXZPbmVPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIGN1cnNpdmUsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGl2T25lVHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgI2RlbGV0ZVRvZG8ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAjZWRpdFRvZG8ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzZkMGZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuZGl2VHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoaXMgTW9kdWxlIHdpbGwgdGFrZSBjYXJlIG9mIGFsbCB0aGUgYXBwbGljYXRpb24gbG9naWNzIPCflK5cclxuXHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG9MaXN0XCJcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgdG9kbyBsaXN0XHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuXHJcbiAgICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSlcclxufVxyXG5cclxuLy8gQXJyYXkgdG8gc3RvcmUgYWxsIHRoZSB0b2RvIGxpc3RzXHJcbmxldCB0b2RvQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTGlzdCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTGlzdCcpKSA6IFtdXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZGVsZXRlIHRvZG8gbGlzdFxyXG5mdW5jdGlvbiBkZWxldGVUb2RvKGUpIHtcclxuICAgIHRvZG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xpc3QnKSlcclxuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgIGxldCBhID0gcGFyZW50LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRvZG9BcnJheVtpXS50aXRsZSA9PT0gYSkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IHRvZG9BcnJheS5pbmRleE9mKHRvZG9BcnJheVtpXSlcclxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRvZG9BcnJheS5zcGxpY2UoeCwgMSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvQXJyYXkpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2F2ZSBJbnB1dCBpbmZvIGluIGNhc2UgdGhlIHBlcnNvbiBtaWdodCB3YW50IHRvIGVkaXQgaXQgbGF0ZXIuXHJcbmZ1bmN0aW9uIHNhdmVJbnB1dEluZm8oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuXHJcbiAgICBjb25zb2xlLmxvZyhuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSlcclxuICAgIC8vcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVG9kbywgZGVsZXRlVG9kbywgdG9kb0FycmF5LCBzYXZlSW5wdXRJbmZvIH0iLCIvLyBDcmVhdGluZyBmdW5jdGlvbiB0byBjbGVhbiB0aGUgaW5wdXQgYm94ZXMuXHJcbmZ1bmN0aW9uIGNsZWFuSW5wdXQoKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHknKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWUgID0gJydcclxufVxyXG5cclxuZXhwb3J0IHsgY2xlYW5JbnB1dCB9IiwiLy8gVGhpcyBtb2R1bGUgd2lsbCB0YWtlIGNhcmUgb2YgYWxsIHRoZSBET00gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LlxyXG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBkZWxldGVUb2RvLCB0b2RvQXJyYXksIHNhdmVJbnB1dEluZm8gfSBmcm9tIFwiLi9GYWN0b3J5XCI7XHJcbmltcG9ydCB7IGNsZWFuSW5wdXQgfSBmcm9tIFwiLi9IZWxwZXJGdW5jdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpXHJcblxyXG5mdW5jdGlvbiByZW5kZXJMaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgIGNvbnN0IG1haW5JbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbmJveENvbnRhaW5lcicpXHJcblxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvU3R5bGUnKVxyXG4gICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9J2Rpdk9uZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nZGl2T25lT25lJz5cclxuICAgICAgICAgICAgPHA+JHt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxwPiR7cHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgICA8cD4ke2R1ZURhdGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdkaXZPbmVUd28nPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdkZWxldGUnIGlkPSdkZWxldGVUb2RvJz48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2VkaXQnIGlkPSdlZGl0VG9kbyc+PGkgY2xhc3M9XCJmYXIgZmEtZWRpdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPSdkaXZUd28nPlxyXG4gICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xyXG4gICAgICAgICAgICBkZWxldGVUb2RvKGUpXHJcbiAgICAgICAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIG1haW5JbmJveC5hcHBlbmRDaGlsZChkaXYpXHJcbn1cclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIHRoZSBsaXN0IGFwcGVhcnMgaW5kZWZpbml0ZWx5IHVudGlsIGRlbGV0ZWRcclxudG9kb0FycmF5LmZvckVhY2goZWwgPT4ge1xyXG4gICAgcmVuZGVyTGlzdChlbC50aXRsZSwgZWwuZGVzY3JpcHRpb24sIGVsLnByaW9yaXR5LCBlbC5kdWVEYXRlKVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0RWxlbWVudCgpIHtcclxuICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKClcclxuICAgIHRvZG9BcnJheS5wdXNoKHRvZG8pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9BcnJheSkpXHJcbiAgICByZW5kZXJMaXN0KHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8ucHJpb3JpdHksIHRvZG8uZHVlRGF0ZSlcclxufVxyXG5cclxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlVG9kb0xpc3RFbGVtZW50KClcclxuICAgIHNhdmVJbnB1dEluZm8oKVxyXG5cclxuICAgIC8vIEl0IGhhcyB0byBiZSBsYXN0IGJlY2F1c2UgaXQgY2hhbmdlcyB0aGUgaW5wdXQgdmFsdWUgdG8gJycgLyBudWxsXHJcbiAgICBjbGVhbklucHV0KClcclxufSlcclxuIiwiLy8gRmFjdG9yeSBGdW5jdGlvbiB0byBjcmVhdGUgdG9kb3NcclxuZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGV9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG8iLCJpbXBvcnQgeyBjbGVhbklucHV0IH0gZnJvbSBcIi4vSGVscGVyRnVuY3Rpb25zXCJcclxuXHJcbi8vIFByb2plY3QgbGlzdCBhbmltYXRpb25cclxuY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3cnKVxyXG5cclxuYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXHJcblxyXG4gICAgaWYgKHByb2plY3RMaXN0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVEb3duJykpIHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZURvd24nKVxyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlVXAnKVxyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZURvd24nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdzbGlkZURvd24nKVxyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlVXAnKVxyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZURvd24nKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vIFNpZGUgYmFyIGFuaW1hdGlvblxyXG5jb25zdCBuYXZTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYW5uJylcclxuXHJcbm5hdlNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBzaWRlQmFyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJPbmUnKVxyXG4gICAgY29uc3Qgc2lkZUJhclR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyVHdvJylcclxuXHJcbiAgICBpZiAobWFpbkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZUxlZnQnKSkge1xyXG4gICAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlTGVmdCcpXHJcbiAgICAgICAgc2lkZUJhck9uZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgc2lkZUJhclR3by5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NsaWRlTGVmdCcpXHJcbiAgICAgICAgc2lkZUJhck9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgc2lkZUJhclR3by5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gSW5zZXJ0IGN1cnJlbnQgZGF0ZSBpbiB0aGUgc3ZnXHJcbmNvbnN0IHRvZGF5U3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5RGF0ZScpXHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG50b2RheVN2Zy50ZXh0Q29udGVudCA9IGRhdGUuZ2V0VVRDRGF0ZSgpXHJcblxyXG5cclxuLy8gT3BlbiAmIENsb3NlIE1vZHVsZVxyXG5jb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlJylcclxuLy8gT3BlbiBNb2RhbCBCdXR0b25zXHJcbmNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXNJY29uJylcclxuY29uc3QgbmV3TGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0QnRuJylcclxuLy8gQ2xvc2UgTW9kYWwgQnV0dG9uc1xyXG5jb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpXHJcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxMaXN0JylcclxuXHJcbnBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxufSlcclxuXHJcbm5ld0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG59KVxyXG5cclxuYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBjbGVhbklucHV0KClcclxufSlcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFNhc3MgZmlsZXMg8J+UrlxyXG5pbXBvcnQnLi9zYXNzL21haW4uc2NzcydcclxuXHJcblxyXG4vLyBKYXZhU2NyaXB0XHJcbmltcG9ydCBVSSBmcm9tICcuL01vZHVsZXMvVUknXHJcbmltcG9ydCBQYWludGRvbSBmcm9tICcuL01vZHVsZXMvUGFpbnRkb20nIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9