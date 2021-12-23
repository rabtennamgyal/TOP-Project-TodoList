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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes slideLeftPhone {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 30rem;\n    opacity: 1;\n  }\n}\n.slideLeftPhone {\n  animation: slideLeftPhone 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent {\n    width: 95%;\n  }\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer {\n    grid-template-columns: 0.9fr 3fr;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer label {\n    font-size: 1.2rem;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .btnContainer {\n    grid-template-columns: 1fr;\n  }\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne #spanPhone {\n  display: none;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spanPhone {\n    display: grid;\n  }\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spann {\n    display: none;\n  }\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main {\n    grid-template-columns: 0 1fr;\n  }\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar {\n    z-index: 1000;\n    height: 100vh;\n    width: 0rem;\n    opacity: 0;\n    grid-template-rows: 20% 80%;\n  }\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #000000;\n  font-size: 1.2rem;\n  font-weight: 900;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n  display: flex;\n  justify-content: space-between;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn {\n  font-size: 1.2rem;\n  color: #808080;\n  margin-right: 1.5rem;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn:hover {\n  color: #000;\n  transform: rotate(360);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarModule {\n  top: 0rem;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  border-radius: 5px;\n  height: 30%;\n  width: 40%;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  height: 80%;\n  width: 80%;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 1rem 0 0;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne input {\n  height: 50%;\n  width: 70%;\n  font-size: 1.8rem;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo button {\n  cursor: pointer;\n  height: 3rem;\n  width: 8rem;\n  margin: 0 1rem 0 0;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .content {\n  display: grid;\n}\nmain .content .pageStyle {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle {\n    grid-template-rows: 10% 90%;\n  }\n}\nmain .content .pageStyle .contentOne {\n  display: grid;\n}\nmain .content .pageStyle .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .pageStyle .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .pageStyle .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .contentOne .contentOneTwo {\n    display: none;\n  }\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .pageStyle .pageContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n    grid-template-columns: 2fr 1fr 1fr;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n    font-size: 1.1rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n    height: 1.5rem;\n    width: 1.5rem;\n    display: grid;\n    place-items: center;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo i {\n  font-size: 1rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo i {\n    font-size: 0.8rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n    height: 1.5rem;\n    width: 1.5rem;\n    display: grid;\n    place-items: center;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo i {\n  font-size: 1rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo i {\n    font-size: 0.8rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divTwo p {\n    font-size: 1rem;\n    letter-spacing: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/global/_global.scss","webpack://./src/sass/main.scss","webpack://./src/sass/global/_animations.scss","webpack://./src/sass/components/navbar.scss","webpack://./src/sass/global/_mixin.scss","webpack://./src/sass/components/mainContent.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap');\r\n\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: inherit;\r\n}\r\n\r\nhtml, body {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes slideLeftPhone {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 30rem;\n    opacity: 1;\n  }\n}\n.slideLeftPhone {\n  animation: slideLeftPhone 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent {\n    width: 95%;\n  }\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer {\n    grid-template-columns: 0.9fr 3fr;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer label {\n    font-size: 1.2rem;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .btnContainer {\n    grid-template-columns: 1fr;\n  }\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne #spanPhone {\n  display: none;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spanPhone {\n    display: grid;\n  }\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spann {\n    display: none;\n  }\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main {\n    grid-template-columns: 0 1fr;\n  }\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar {\n    z-index: 1000;\n    height: 100vh;\n    width: 0rem;\n    opacity: 0;\n    grid-template-rows: 20% 80%;\n  }\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #000000;\n  font-size: 1.2rem;\n  font-weight: 900;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n  display: flex;\n  justify-content: space-between;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn {\n  font-size: 1.2rem;\n  color: #808080;\n  margin-right: 1.5rem;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn:hover {\n  color: #000;\n  transform: rotate(360);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarModule {\n  top: 0rem;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  border-radius: 5px;\n  height: 30%;\n  width: 40%;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  height: 80%;\n  width: 80%;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 1rem 0 0;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne input {\n  height: 50%;\n  width: 70%;\n  font-size: 1.8rem;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo button {\n  cursor: pointer;\n  height: 3rem;\n  width: 8rem;\n  margin: 0 1rem 0 0;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .content {\n  display: grid;\n}\nmain .content .pageStyle {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle {\n    grid-template-rows: 10% 90%;\n  }\n}\nmain .content .pageStyle .contentOne {\n  display: grid;\n}\nmain .content .pageStyle .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .pageStyle .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .pageStyle .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .contentOne .contentOneTwo {\n    display: none;\n  }\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .pageStyle .pageContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n    grid-template-columns: 2fr 1fr 1fr;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n    font-size: 1.1rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n    height: 1.5rem;\n    width: 1.5rem;\n    display: grid;\n    place-items: center;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo i {\n  font-size: 1rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo i {\n    font-size: 0.8rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n    height: 1.5rem;\n    width: 1.5rem;\n    display: grid;\n    place-items: center;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo i {\n  font-size: 1rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo i {\n    font-size: 0.8rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divTwo p {\n    font-size: 1rem;\n    letter-spacing: 0;\n  }\n}","@keyframes slideDown {\r\n    0% {\r\n        opacity: 0;\r\n        height: 0rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n}\r\n\r\n.slideDown {\r\n    animation: slideDown 200ms ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideUp {\r\n    0% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.slideUp {\r\n    animation: slideUp 200ms ease-in-out forwards;\r\n}\r\n\r\n\r\n@keyframes slideLeft {\r\n    0% {\r\n        grid-template-columns: 22% 78%;\r\n    }\r\n\r\n    100% {\r\n        grid-template-columns: 0% 100%;\r\n    }\r\n}\r\n\r\n.slideLeft {\r\n    animation: slideLeft 0.5s ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideLeftPhone {\r\n    0% {\r\n        width: 0;\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        width: 30rem;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.slideLeftPhone {\r\n    animation: slideLeftPhone 0.5s ease-in-out forwards;\r\n}\r\n\r\n@keyframes rotateDown {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n.rotateDown {\r\n    animation: rotateDown 200ms ease-in-out forwards;\r\n}\r\n\r\n",".navStyle {\r\n    height: 5rem;\r\n    background: #ff4500;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .module {\r\n        background: #e9e9e983;\r\n        display: none;\r\n        place-items: center;\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n        .moduleContent {\r\n            background: #fff;\r\n            border: none;\r\n            border-radius: 2rem;\r\n            display: grid;\r\n            place-items: center;\r\n            height: 50%;\r\n            width: 40%;\r\n            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\r\n\r\n            @include respond(phone) {\r\n                width: 95%;\r\n            }\r\n\r\n            .formTodo {\r\n                margin-top: 10px;\r\n                height: 90%;\r\n                width: 90%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: space-between;\r\n\r\n                .inputContainer {\r\n                    height: 4rem;\r\n                    display: grid;\r\n                    grid-template-columns: 1fr 3fr;\r\n\r\n                    @include respond(phone) {\r\n                        grid-template-columns: .9fr 3fr;\r\n                    }\r\n\r\n                    label {\r\n                        display: grid;\r\n                        place-items: center;\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n\r\n                        @include respond(phone) {\r\n                            font-size: 1.2rem;\r\n                        }\r\n                    }\r\n\r\n                    input {\r\n                        height: 3rem;\r\n                        width: 20rem;\r\n                    }\r\n\r\n                    .inputArea {\r\n                        width: 100%;\r\n                        font-size: 1.5rem;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .btnContainer {\r\n                display: grid;\r\n                grid-template-columns: 1fr 2fr;\r\n                height: 90%;\r\n                width: 90%;\r\n\r\n                @include respond(phone) {\r\n                    grid-template-columns: 1fr;\r\n                }\r\n\r\n                .btns {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 7rem;\r\n                        border-radius: 5px;\r\n                        font-weight: 600;\r\n                    }\r\n\r\n                    #addList {\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #editList {\r\n                        display: none;\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelList {\r\n                        outline: none;\r\n                        border: .5px solid #000;\r\n                        background: #fff;\r\n\r\n                        &:hover {\r\n                            background: #ebebeb;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    .navOne {\r\n        justify-content: center;\r\n        align-items: center;\r\n        display: flex;\r\n        width: 10rem;\r\n\r\n        .spanStyle {\r\n            cursor: pointer;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n\r\n                :first-child {\r\n                    transform: rotate(45deg);\r\n                    margin-bottom: 0;\r\n                    margin-left: 2px;\r\n                }\r\n\r\n                :not(:first-child):not(:last-child) {\r\n                    display: none;\r\n                }\r\n\r\n                :last-child {\r\n                    transform: rotate(-45deg);\r\n                    margin-left: 2px;\r\n                }\r\n            }\r\n\r\n            span {\r\n                cursor: pointer;\r\n                border: solid #ffffff .5px;\r\n                background: #fff;\r\n                width: 15px;\r\n                transform-origin: 0px 1px;\r\n                transition: ease-in-out 0.7s;\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: -2px;\r\n            }\r\n\r\n            :not(:first-child):not(:last-child) {\r\n                margin-bottom: -2px;\r\n            }\r\n        }\r\n\r\n        #spanPhone {\r\n            display: none;\r\n\r\n            @include respond(phone) {\r\n                display: grid;\r\n            }\r\n        }\r\n    \r\n        #spann {\r\n\r\n            @include respond(phone) {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        .homeIcon {\r\n            height: 2rem;\r\n            width: 3.5rem;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            cursor: pointer;\r\n            margin: 0 1rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n            }\r\n\r\n            #homeIcon {\r\n                cursor: pointer;\r\n                color: #fff;\r\n                font-size: 2rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    .navTwo {\r\n        width: 10rem;\r\n        display: grid;\r\n        place-items: center;\r\n\r\n        #plusIcon {\r\n            cursor: pointer;\r\n            color: #fff;\r\n            font-size: 2rem;\r\n\r\n            &:hover {\r\n                transform: rotate(360deg);\r\n                transition: 0.7s ease-in-out;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n","@mixin respond($breakpoint) {\r\n    @if $breakpoint == phone {\r\n        @media (min-width: 320px) and (max-width: 700px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == tab-port {\r\n        @media (min-width: 701px) and (max-width: 992px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == tab-land {\r\n        @media (min-width: 993px) and (max-width: 1312px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == desk {\r\n        @media (min-width: 1313px) and (max-width: 1500px) {\r\n            @content;\r\n        }\r\n    }\r\n};","main {\r\n    display: grid;\r\n    grid-template-columns: 22% 78%;\r\n    height: 52.5rem;\r\n\r\n    @include respond(phone) {\r\n        grid-template-columns: 0 1fr;\r\n    }\r\n\r\n\r\n    .sideBar {\r\n        background: #f0f0f0;\r\n        display: grid;\r\n        grid-template-rows: 30% 70%;\r\n\r\n        @include respond(phone) {\r\n            z-index: 1000;\r\n            height: 100vh;\r\n            width: 0rem;\r\n            opacity: 0;\r\n            grid-template-rows: 20% 80%;\r\n        }\r\n\r\n        .sideBarOne {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            .sideBarContainer {\r\n                cursor: pointer;\r\n                border: solid .3px #f0f0f0;\r\n                border-radius: 5px;\r\n                height: 30px;\r\n                width: 70%;\r\n                margin: 5px 0;\r\n                display: flex;\r\n                align-items: center;\r\n                padding: 5px;\r\n\r\n                &:hover {\r\n                    background: #d8d8d8b0;\r\n                }\r\n\r\n                .inbox {\r\n                    color: #44b4ff;\r\n                }\r\n\r\n                .day {\r\n                    color: #03da03;\r\n                }\r\n\r\n                .project {\r\n                    color: #8f49ff;\r\n                }\r\n\r\n                h1 {\r\n                    margin: 0 6px;\r\n                    font-size: 1.3rem;\r\n                    font-family: Open Sans, monospace, sans-serif;\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarTwo {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            \r\n            .projectDefault {\r\n                align-self: flex-end;\r\n                cursor: pointer;\r\n                height: 3rem;\r\n                width: 85%;\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                #arrow {\r\n                    color: #000000;\r\n                    font-size: 1.2rem;\r\n                    font-weight: 900;\r\n                    margin: 0 1rem;\r\n                    transition: 200ms ease-in-out;\r\n                }\r\n\r\n                h1 {\r\n                    font-size: 1.5rem;\r\n                    font-family: Open Sans, sans-serif;\r\n                }\r\n\r\n                #newProjectIcon {\r\n                    height: 1.8rem;\r\n                    margin-left: 120px;\r\n\r\n                    &:hover {\r\n                        transform: rotate(360deg);\r\n                        transition: 0.7s ease-in-out;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .projectList {\r\n                align-self: flex-end;\r\n                opacity: 0;\r\n                height: 0;\r\n                width: 80%;\r\n\r\n                .list {\r\n                    cursor: pointer;\r\n                    margin: 1rem 0;\r\n                    height: 3rem;\r\n                    border-radius: 5px;\r\n                    display: grid;\r\n                    align-items: center;\r\n                    padding: 5px 0 5px 5px;\r\n                    display: flex;\r\n                    justify-content: space-between;\r\n\r\n                    &:hover {\r\n                        background: #d8d8d8b0;\r\n                    }\r\n\r\n                    p {\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n                    }\r\n\r\n                    .deleteProjectBtn {\r\n                        font-size: 1.2rem;\r\n                        color: #808080;\r\n                        margin-right: 1.5rem;\r\n\r\n                        &:hover {\r\n                            color: #000;\r\n                            transform: rotate(360);\r\n                            transition: 0.7s ease-in-out;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarModule {\r\n            top: 0rem;\r\n            height: 100%;\r\n            width: 100%;\r\n            position: absolute;\r\n            background: #e9e9e983;\r\n            display: none;\r\n            place-items: center;\r\n\r\n            .sideBarModuleContent {\r\n                background: #fff;\r\n                box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\r\n                border-radius: 5px;\r\n                height: 30%;\r\n                width: 40%;\r\n                display: grid;\r\n                grid-template-columns: 1fr;\r\n                place-items: center;\r\n\r\n                .sideBarModuleContentDivOne, .sideBarModuleContentDivTwo {\r\n                    height: 80%;\r\n                    width: 80%;\r\n                }\r\n\r\n                .sideBarModuleContentDivOne {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    label {\r\n                        font-size: 1.6rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                        margin: 0 1rem 0 0;\r\n                    }\r\n\r\n                    input {\r\n                        height: 50%;\r\n                        width: 70%;\r\n                        font-size: 1.8rem;\r\n                    }\r\n                }\r\n\r\n                .sideBarModuleContentDivTwo {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 8rem;\r\n                        margin: 0 1rem 0 0;\r\n                        border: none;\r\n                        outline: none;\r\n                        border-radius: 5px;\r\n                    }\r\n\r\n                    #addProject {\r\n                        color: #fff;\r\n                        background: #ff4500;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelProject {\r\n                        color: #fff;\r\n                        background: #ff4500;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .content {\r\n        display: grid;\r\n\r\n        .pageStyle {\r\n            display: grid;\r\n            grid-template-rows: .5fr 3fr;\r\n\r\n            @include respond(phone) {\r\n                grid-template-rows: 10% 90%;\r\n            }\r\n\r\n            .contentOne {\r\n                display: grid;\r\n    \r\n                .contentOneOne {\r\n                    margin: 1rem 2rem;\r\n    \r\n                    h1 {\r\n                        cursor: pointer;\r\n                        margin: 1rem 2rem;\r\n                        font-size: 1.8rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                    }\r\n                }\r\n    \r\n                .contentOneTwo {\r\n                    margin: 1rem 4rem;\r\n                    display: flex;\r\n                    align-items: center;\r\n    \r\n                    @include respond(phone) {\r\n                        display: none;\r\n                    }\r\n    \r\n                    h1 {\r\n                        cursor: pointer;\r\n                        font-size: 1.5rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                        margin: 0 5px;\r\n                        color: #474747;\r\n    \r\n                        &:hover {\r\n                            color: #ff4500;\r\n                        }\r\n                    }\r\n    \r\n                    #newListButton {\r\n                        color: #ff4500;\r\n                        cursor: pointer;\r\n                        height: 1.8rem;\r\n                        width: 1.8rem;\r\n    \r\n                        &:hover {\r\n                            color: #fff;\r\n                            border-radius: 100rem;\r\n                            background: #ff4500;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n    \r\n            .pageContent {\r\n                display: flex;\r\n                flex-direction: column;\r\n                align-items: center;\r\n    \r\n                .todoStyle {\r\n                    cursor: pointer;\r\n                    border-top: .5px solid #e2e2e2;\r\n                    border-bottom: .5px solid #e2e2e2;\r\n                    min-height: 8rem;\r\n                    max-height: auto;\r\n                    width: 90%;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    place-items: center;\r\n    \r\n                    .divOne {\r\n                        margin: 5px 0;\r\n                        width: 100%;\r\n                        display: grid;\r\n                        grid-template-columns: 3fr 1fr;\r\n                        align-items: center;\r\n    \r\n                        .divOneOne {\r\n                            display: grid;\r\n                            grid-template-columns: repeat(3, 1fr);\r\n    \r\n                            @include respond(phone) {\r\n                                grid-template-columns: 2fr 1fr 1fr;\r\n                            }\r\n    \r\n                            p {\r\n                                font-size: 1.4rem;\r\n                                font-family: Open Sans, cursive, monospace, sans-serif;\r\n    \r\n                                @include respond(phone) {\r\n                                    font-size: 1.1rem;\r\n                                }\r\n                            }\r\n    \r\n                            :not(:first-child):not(:last-child) {\r\n                                display: grid;\r\n                                place-items: center;\r\n                            }\r\n    \r\n                            :last-child {\r\n                                display: grid;\r\n                                place-items: center;\r\n                            }\r\n                        }\r\n    \r\n                        .divOneTwo {\r\n                            display: flex;\r\n                            justify-content: flex-end;\r\n    \r\n                            #deleteTodo {\r\n                                border: .5px solid #000;\r\n                                margin: 0 5px;\r\n                                cursor: pointer;\r\n                                height: 2rem;\r\n                                width: 2rem;\r\n                                border-radius: 5px;\r\n                                color: #ff0000;\r\n                                background: #fff;\r\n    \r\n                                @include respond(phone) {\r\n                                    height: 1.5rem;\r\n                                    width: 1.5rem;\r\n                                    display: grid;\r\n                                    place-items: center;\r\n                                }\r\n            \r\n                                i {\r\n                                    font-size: 1rem;\r\n    \r\n                                    @include respond(phone) {\r\n                                        font-size: .8rem;\r\n                                    }\r\n                                }\r\n        \r\n                                &:hover {\r\n                                    border: none;\r\n                                    color: #fff;\r\n                                    background: #ff0000;\r\n                                }\r\n                            }\r\n    \r\n                            #editTodo {\r\n                                cursor: pointer;\r\n                                height: 2rem;\r\n                                width: 2rem;\r\n                                border-radius: 5px;\r\n                                color: #36d0ff;\r\n                                background: #fff;\r\n                                border: .5px solid #000;\r\n    \r\n                                @include respond(phone) {\r\n                                    height: 1.5rem;\r\n                                    width: 1.5rem;\r\n                                    display: grid;\r\n                                    place-items: center;\r\n                                }\r\n    \r\n                                &:hover {\r\n                                    border: none;\r\n                                    color: #fff;\r\n                                    background: #36d0ff;\r\n                                }\r\n    \r\n                                i {\r\n                                    font-size: 1rem;\r\n    \r\n                                    @include respond(phone) {\r\n                                        font-size: .8rem;\r\n                                    }\r\n                                }\r\n                                \r\n                            }\r\n                        }\r\n                    }\r\n    \r\n                    .divTwo {\r\n                        height: auto;\r\n                        width: 100%;\r\n    \r\n                        p {\r\n                            color: #808080;\r\n                            font-size: 1.3rem;\r\n                            letter-spacing: .5px;\r\n    \r\n                            @include respond(phone) {\r\n                                font-size: 1rem;\r\n                                letter-spacing: 0;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectManager": () => (/* binding */ ProjectManager)
/* harmony export */ });
// Factory Function to create todos
function Todo(title, description, priority, dueDate) {
    return {title, description, priority, dueDate}
}


function Project(title) {
    let todos = []

    const addTodo = (todo) => {
        todos.push(todo)
    }

    return {
        todos,
        title, 
        addTodo
    }  
}


function ProjectManager(title) {
    let projectsArray = []

    return {
        projectsArray,
        title
    }
}





/***/ }),

/***/ "./src/Modules/Paintdom.js":
/*!*********************************!*\
  !*** ./src/Modules/Paintdom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjectArray": () => (/* binding */ allProjectArray)
/* harmony export */ });
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factory */ "./src/Modules/Factory.js");
/* harmony import */ var _domfuntions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domfuntions */ "./src/Modules/domfuntions.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Modules/Storage.js");
// This module will take care of all the DOM related functionality.





// Buttons to change Pages betwenn Inbox, Today & Projects.
const inboxBtn = document.querySelector('.inboxContainer')
const todayBtn = document.querySelector('.dayContainer')
const monthBtn = document.querySelector('.monthContainer')


// Create New Todolist Button
const createTodoList = document.getElementById('addList')
// Delete Todolist Button
const deleteTodoList = document.querySelector('.content')
// Edit Todolist Button
// 1. Button to Open Modal 
const editTodoList1 = document.querySelector('.content')
// 2. Button to edit the Todolist
const editTodoList2 = document.getElementById('editList')
// Create Project Button
const createProject = document.getElementById('addProject')
// Delete Project Button
const deleteProject = document.querySelector('.projectList')
// Rendering Project's Page
const ListElement = document.querySelector('.projectList')


// Get the current page from the local storage.
let editedIndex
let currentPage = localStorage.getItem('Page')
let currentTitle = localStorage.getItem('CurrentTitle') ? localStorage.getItem('CurrentTitle') : 'Inbox'
// & append it to the DOM.
;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.showPage)(currentPage)


// 1. The Project Manager
const myProjectManager = new _Factory__WEBPACK_IMPORTED_MODULE_0__.ProjectManager('myProjectManager')

// 2. Array of all Project
//localStorage.setItem('AllProject', [])
let allProjectArray = localStorage.getItem('AllProject') ? JSON.parse(localStorage.getItem('AllProject')) : myProjectManager.projectsArray

// #Rendering All Project Titles on Sidebar
allProjectArray.forEach(el => {
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderProjectListElement)(el.title)
})


// #Rendering all the todolist
allProjectArray.forEach(element => {
    if (element.title === currentTitle) {
        element.todos.forEach(el => {
            (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
        })
    }
})


function todolistCreation() {
    const projectTitle = document.getElementById('todoProjects').value
    const allTitles = allProjectArray.map(el => el.title)

    const todoTitle = document.getElementById('todoTitle').value
    const todoDescription = document.getElementById('todoDescription').value
    const todoPriority = document.getElementById('todoPriority').value
    const todoDueDate = document.getElementById('todoDueDate').value

    const parent = document.querySelector('.pageContent')


    for (let i = 0; i < allTitles.length; i++) {
        if (allTitles[i] === projectTitle) {
            const newTodo = (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.Todo)(todoTitle, todoDescription, todoPriority, todoDueDate)
            ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setList)(i, newTodo)
            ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.deleteAll)(parent)
            ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderPage)((0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderNewPage)(allTitles[i]))
            ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setCurrentTitle)(projectTitle)
            currentTitle = projectTitle
            allProjectArray.forEach(element => {
                if (element.title === currentTitle) {
                    element.todos.forEach(el => {
                        (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
                    })
                }
            })
        }
    }
}


function todoListDeletion(e) {
    const listTitle = e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent
    const allTitles = allProjectArray.map(el => el.title)

    for (let i = 0; i < allTitles.length; i++) {
        if (allTitles[i] === currentTitle) {
            (0,_Storage__WEBPACK_IMPORTED_MODULE_2__.delList)(i, listTitle)
            const list = e.target.parentNode.parentNode.parentNode
            list.parentNode.removeChild(list)
        }
    }
}


function todoListEdition() {
    const allTitles = allProjectArray.map(el => el.title)

    const todoTitle = document.getElementById('todoTitle').value
    const todoDescription = document.getElementById('todoDescription').value
    const todoPriority = document.getElementById('todoPriority').value
    const todoDueDate = document.getElementById('todoDueDate').value
    const todoProjects = document.getElementById('todoProjects').value

    for (let i = 0; i < allTitles.length; i++) {
        if (allTitles[i] === currentTitle) {
            const editedList = (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.Todo)(todoTitle, todoDescription, todoPriority, todoDueDate)
            ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.editList)(i, editedList, editedIndex)      
        }
    }
}


function projectCreation(value) {
    if (value) {
        const newProject = (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.Project)(value)
        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setProject)(newProject, allProjectArray)
    } else {
        const projectTitle = document.querySelector('.projectName').value
        const newProject = (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.Project)(projectTitle)
        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setProject)(newProject, allProjectArray)
        ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderProjectListElement)(projectTitle)
        ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.createOptions)(projectTitle)
        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setOption)()
    }
}


function projectDeletion(e) {
    const list = e.target.parentNode.parentNode
    const projectTitle = e.target.parentNode.parentNode.firstChild.textContent
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.delProject)(projectTitle)
    list.parentNode.removeChild(list)
}


function createDefaultProjects() {
    if (allProjectArray.length >= 3) {
        return
    } else {
        projectCreation('Inbox')
        projectCreation('Today')
        projectCreation('Month')
    }
}


createDefaultProjects()


// #Rendering Project Page
window.addEventListener('load', () => {
    if (!localStorage.getItem('Page')) {
        (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderPage)((0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderNewPage)('Inbox'))
        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setCurrentTitle)('Inbox')
        allProjectArray.forEach(element => {
            if (element.title === currentTitle) {
                element.todos.forEach(el => {
                    (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.duedate)
                })
            }
        })
    } else {
        return
    }
})


inboxBtn.addEventListener('click', () => {
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderPage)((0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderNewPage)('Inbox'))
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setCurrentTitle)('Inbox')
    currentTitle = 'Inbox'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
            })
        }
    })
})


todayBtn.addEventListener('click', () => {
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderPage)((0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderNewPage)('Today'))
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setCurrentTitle)('Today')
    currentTitle = 'Today'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
            })
        }
    })
})


monthBtn.addEventListener('click', () => {
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderPage)((0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderNewPage)('Month'))
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setCurrentTitle)('Month')
    currentTitle = 'Month'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
            })
        }
    })
})


ListElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
        const projectTitle = e.target.firstChild.textContent
        ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderPage)((0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderNewPage)(projectTitle))
        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setCurrentTitle)(projectTitle)
        currentTitle = projectTitle
        allProjectArray.forEach(element => {
            if (element.title === currentTitle) {
                element.todos.forEach(el => {
                    (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
                })
            }
        })
    }
})


// #todoList Creation
createTodoList.addEventListener('click', () => {
    todolistCreation()
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.cleanInput)()
})


// #todolist Deletion
deleteTodoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        todoListDeletion(e)
    }
})


// #todolist Edition
// 1. Open the module to edit the list
editTodoList1.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
        const modules = document.querySelector('.module')
        const add = document.getElementById('addList')
        const edit = document.getElementById('editList')

        modules.style.display = 'grid'
        add.style.display = 'none'
        edit.style.display = 'block'

        const allTitles = allProjectArray.map(el => el.title)
        const text = e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent

        for (let i = 0; i < allTitles.length; i++) {
            if (allTitles[i] === currentTitle) {
                const arr = allProjectArray[i].todos
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].title === text) {
                        editedIndex = i
                    }
                }
            }
        }


        //console.log(e.target.parentNode.parentNode.parentNode.parentNode)
    }
})
// 2. Edit the actual todolist
editTodoList2.addEventListener('click', (e) => {
    todoListEdition()
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
            })
        }
    })
})


// #Project Creation
createProject.addEventListener('click', () => {
    projectCreation()
})


// #Project Deletion
deleteProject.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteProjectBtn')) {
        projectDeletion(e)
        ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderPage)((0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderNewPage)('Inbox'))
        currentTitle = 'Inbox'
        allProjectArray.forEach(element => {
            if (element.title === currentTitle) {
                element.todos.forEach(el => {
                    (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderTodoListElement)(el.title, el.description, el.priority, el.dueDate)
                })
            }
        })
        
    }
})






/***/ }),

/***/ "./src/Modules/Storage.js":
/*!********************************!*\
  !*** ./src/Modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentTitle": () => (/* binding */ setCurrentTitle),
/* harmony export */   "setProject": () => (/* binding */ setProject),
/* harmony export */   "delProject": () => (/* binding */ delProject),
/* harmony export */   "setList": () => (/* binding */ setList),
/* harmony export */   "delList": () => (/* binding */ delList),
/* harmony export */   "editList": () => (/* binding */ editList),
/* harmony export */   "setOption": () => (/* binding */ setOption)
/* harmony export */ });
/* harmony import */ var _Paintdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paintdom */ "./src/Modules/Paintdom.js");




const setCurrentTitle = (title) => {
    localStorage.setItem('CurrentTitle', title)
}


// #Function to save project in localstorage
const setProject = (project, allProjects) => {
    _Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray.push(project)
    localStorage.setItem('AllProject', JSON.stringify(allProjects))
}


// #Function to delete project from localstorage
const delProject = (projectTitle) => {
    let allProjectArray = JSON.parse(localStorage.getItem('AllProject')).filter(el => el.title !== projectTitle)
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}


// #Function to save list in localstorage
const setList = (index, newTodo) => {
    _Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray[index].todos.push(newTodo)
    localStorage.setItem('AllProject', JSON.stringify(_Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray))
}


// #Function to delete list from localstorage
const delList = (index, listTitle) => {
    let changedTodos = _Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray[index].todos.filter(el => el.title !== listTitle)
    _Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray[index].todos = changedTodos
    localStorage.setItem('AllProject', JSON.stringify(_Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray))
}


// #Function to edit list in localstorage
const editList = (index, editedList, editedIndex) => {
    let changedTodos = _Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray[index].todos
    let newArr = changedTodos.splice(editedIndex, 1, editedList)
    _Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray[index].todos = changedTodos
    localStorage.setItem('AllProject', JSON.stringify(_Paintdom__WEBPACK_IMPORTED_MODULE_0__.allProjectArray))
}



const setOption = () => {
    console.log('options')
}




/***/ }),

/***/ "./src/Modules/UI.js":
/*!***************************!*\
  !*** ./src/Modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domfuntions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domfuntions */ "./src/Modules/domfuntions.js");



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


// Side bar animation ( for desktop )
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


// Side bar animation ( for mobile )
const spanPhone = document.getElementById('spanPhone')

spanPhone.addEventListener('click', () => {
    const sideBar = document.querySelector('.sideBar')

    if (sideBar.classList.contains('slideLeftPhone')) {
        sideBar.classList.remove('slideLeftPhone')
    } else {
        sideBar.classList.add('slideLeftPhone')
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


function setBtnOne() {
    if(document.getElementById('newListButton')) {
        const btn = document.getElementById('newListButton') 
        btn.addEventListener('click', () => {
            module.style.display = 'grid'
            add.style.display = 'block'
            edit.style.display = 'none'
        })
    }
}


setInterval(() => {
    setBtnOne()
})


add.addEventListener('click', () => {
    module.style.display = 'none'
})


edit.addEventListener('click', () => {
    module.style.display = 'none'
})


cancel.addEventListener('click', () => {
    module.style.display = 'none'
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_0__.cleanInput)()
})



// new project button
const module3 = document.querySelector('.sideBarModule')
const newProject = document.getElementById('addProject')


newProject.addEventListener('click', () => {
    module3.style.display = 'none'
})


// For opening SideBar Project Module 
const newProjectIcon = document.getElementById('newProjectIcon')
const cancelProject = document.getElementById('cancelProject')


newProjectIcon.addEventListener('click', () => {
    const projectModule = document.querySelector('.sideBarModule')
    const projectInput = document.getElementById('projectName')
    projectModule.style.display = 'grid'
    projectInput.value = ''
})


cancelProject.addEventListener('click', () => {
    const projectModule = document.querySelector('.sideBarModule')    
    const projectInput = document.getElementById('projectName')
    projectModule.style.display = 'none'
    projectInput.value = ''
})


/***/ }),

/***/ "./src/Modules/domfuntions.js":
/*!************************************!*\
  !*** ./src/Modules/domfuntions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNewPage": () => (/* binding */ renderNewPage),
/* harmony export */   "renderPage": () => (/* binding */ renderPage),
/* harmony export */   "showPage": () => (/* binding */ showPage),
/* harmony export */   "renderProjectListElement": () => (/* binding */ renderProjectListElement),
/* harmony export */   "renderTodoListElement": () => (/* binding */ renderTodoListElement),
/* harmony export */   "cleanInput": () => (/* binding */ cleanInput),
/* harmony export */   "deleteAll": () => (/* binding */ deleteAll),
/* harmony export */   "createOptions": () => (/* binding */ createOptions)
/* harmony export */ });
// 🦚 This module contains all the functions that 
// deals with rendering on the DOM.


// 1. Function to create a new page 
const renderNewPage = (title) => {
    const Page = document.createElement('div')
    Page.classList.add('pageStyle')
    Page.innerHTML = `
        <div class="contentOne">
            <div class="contentOneOne">
                <h1 class='titleOfPage'>
                    ${title}
                </h1>
            </div>
            <div class="contentOneTwo">
                <svg id='newListButton' class="invert" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
                    <mask id="jd4FBg" fill="#fff">
                        <path
                        d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
                        ></path>
                    </mask>
                    <g mask="url(#jd4FBg)">
                        <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                    </g>
                    </g>
                </svg>
                <h1>
                    Add List
                </h1>
            </div>
        </div>
        
        <div class="pageContent">
        </div>
    `
    return Page
}


// RenderPage & ShowPage do similar things. But renderPage deals with the local storage.

// 2. Function to render a page to the dom
function renderPage(page) {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    localStorage.setItem('Page', page.innerHTML)
    content.appendChild(page)
}


// 3. Function to show a page to the dom.
function showPage(el) {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    const curPage = document.createElement('div')
    curPage.classList.add('pageStyle')
    curPage.innerHTML = el
    content.appendChild(curPage)
}


// 4. Function to create a new projectlist element
function renderProjectListElement(projectTitle) {
    if (projectTitle === 'Inbox' || projectTitle === 'Today' || projectTitle === 'Month') {
        return
    } else {
        const main = document.querySelector('.projectList')

        const list = document.createElement('div')
        list.classList.add('list')
        const divOne = document.createElement('p')
        divOne.textContent = projectTitle
        const divTwo = document.createElement('p')
        divTwo.classList.add('deleteProject')
        divTwo.innerHTML = '<h1 class="deleteProjectBtn">x</h1>'
        list.appendChild(divOne)
        list.appendChild(divTwo)
        
        main.appendChild(list)
    }
}


// 5. Function to create a new todolist element
function renderTodoListElement(title, description, priority, duedate) {
    const pageContent = document.querySelector('.pageContent')

    const todoElement = document.createElement('div')
    todoElement.classList.add('todoStyle')
    todoElement.innerHTML = `
        <div class='divOne'>
            <div class='divOneOne'>
                <p>${title}</p>
                <p>${priority}</p>
                <p>${duedate}</p>
            </div>
    
            <div class='divOneTwo'>
                <button class='delete' id='deleteTodo'>❌</button>
                <button class='edit' id='editTodo'>🔄</button>
            </div>
        </div>
        
        <div class='divTwo'>
            <p>${description}</p>
        </div>
    `

    pageContent.appendChild(todoElement)
}


// 6. Function to clean the input field
function cleanInput() {
    const todoTitle = document.getElementById('todoTitle').value = ''
    const todoDescription = document.getElementById('todoDescription').value = ''
    const todoPriority = document.getElementById('todoPriority').value = ''
    const todoDueDate = document.getElementById('todoDueDate').value = ''
    const projectTitle = document.getElementById('todoProjects').value = ''
}


// 7. Function to delete every dom element in a div
function deleteAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// 8. Function to create new options 
function createOptions(projectTitle) {
    let allOptions = document.getElementById('todoProjects')

    let newOption = new Option(projectTitle, projectTitle)

    allOptions.add(newOption, null)
}





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
/* harmony import */ var _Modules_Paintdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Paintdom */ "./src/Modules/Paintdom.js");
/* harmony import */ var _Modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/UI */ "./src/Modules/UI.js");
// Sass files 🔮



// JavaScript


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFL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QSx1QkFBdUIsc0RBQWU7QUFDdEMsSUFBSSxzREFBZTtBQUNuQixzREFBc0Qsc0RBQWU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBZTtBQUN0QztBQUNBLElBQUksc0RBQWU7QUFDbkIsc0RBQXNELHNEQUFlO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVTtBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixNQUFNO0FBQzNCLHFCQUFxQixTQUFTO0FBQzlCLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUN3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Iiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9GYWN0b3J5LmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL01vZHVsZXMvUGFpbnRkb20uanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL01vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9kb21mdW50aW9ucy5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQmZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDByZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG59XFxuLnNsaWRlRG93biB7XFxuICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxufVxcbi5zbGlkZVVwIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xcbiAgMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xcbiAgfVxcbn1cXG4uc2xpZGVMZWZ0IHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0UGhvbmUge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5zbGlkZUxlZnRQaG9uZSB7XFxuICBhbmltYXRpb246IHNsaWRlTGVmdFBob25lIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlRG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG59XFxuLnJvdGF0ZURvd24ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4ubmF2U3R5bGUge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIHtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOWZyIDNmcjtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgLmlucHV0QXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDdyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjZWRpdExpc3Qge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNlZGl0TGlzdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2NhbmNlbExpc3Qge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2NhbmNlbExpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHggMDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IHNvbGlkICNmZmZmZmYgMC41cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDE1cHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggMXB4O1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC43cztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAjc3BhblBob25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm5hdk9uZSAjc3BhblBob25lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubmF2T25lICNzcGFubiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5ob21lSWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHggMDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uICNob21lSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZTdHlsZSAubmF2VHdvICNwbHVzSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICBoZWlnaHQ6IDUyLjVyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwIDFmcjtcXG4gIH1cXG59XFxubWFpbiAuc2lkZUJhciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDcwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMHJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMC4zcHggI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5pbmJveCB7XFxuICBjb2xvcjogIzQ0YjRmZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAuZGF5IHtcXG4gIGNvbG9yOiAjMDNkYTAzO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5wcm9qZWN0IHtcXG4gIGNvbG9yOiAjOGY0OWZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIGgxIHtcXG4gIG1hcmdpbjogMCA2cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjYXJyb3cge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCBoMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNuZXdQcm9qZWN0SWNvbiB7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogODAlO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IC5kZWxldGVQcm9qZWN0QnRuIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgLmRlbGV0ZVByb2plY3RCdG46aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApO1xcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSB7XFxuICB0b3A6IDByZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE4KSAwcHggMnB4IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIGlucHV0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogOHJlbTtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lT25lIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byB7XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiAjNDc0NzQ3O1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDE6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byAjbmV3TGlzdEJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgd2lkdGg6IDEuOHJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2UyZTJlMjtcXG4gIG1pbi1oZWlnaHQ6IDhyZW07XFxuICBtYXgtaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8ge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIGkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyBpIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMzZkMGZmO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8gaSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyBpIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdlR3byBwIHtcXG4gIGNvbG9yOiAjODA4MDgwO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdlR3byBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFsL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9uYXZiYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFsL19taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL21haW5Db250ZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QUNaQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RURlTjtFQ1pFO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RURjTjtBQUNGO0FDWEE7RUFDSSwrQ0FBQTtBRGFKOztBQ1ZBO0VBQ0k7SUFDSSxVQUFBO0lB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O0FKeVB4QjtBSXZQd0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBSnlQNUI7QUdycEJRO0VDeVpnQjtJQU1RLGVBQUE7SUFDQSxpQkFBQTtFSjBQOUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdCZmYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdCZmYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbn1cXG4uc2xpZGVEb3duIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG59XFxuLnNsaWRlVXAge1xcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxuICAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XFxuICB9XFxufVxcbi5zbGlkZUxlZnQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdFBob25lIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0UGhvbmUgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVEb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG4ucm90YXRlRG93biB7XFxuICBhbmltYXRpb246IHJvdGF0ZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5uYXZTdHlsZSB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUge1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC45ZnIgM2ZyO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciAuaW5wdXRBcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNlZGl0TGlzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAwLjVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDBweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5uYXZPbmUgI3NwYW5uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24gI2hvbWVJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byB7XFxuICB3aWR0aDogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIGhlaWdodDogNTIuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgNzAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjNweCAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmluYm94IHtcXG4gIGNvbG9yOiAjNDRiNGZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5kYXkge1xcbiAgY29sb3I6ICMwM2RhMDM7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLnByb2plY3Qge1xcbiAgY29sb3I6ICM4ZjQ5ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgaDEge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNhcnJvdyB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uIHtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgLmRlbGV0ZVByb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCAuZGVsZXRlUHJvamVjdEJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MCk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIHtcXG4gIHRvcDogMHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTgpIDBweCAycHggNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lLCBtYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgaW5wdXQge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28gYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNhZGRQcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNjYW5jZWxQcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNjYW5jZWxQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lT25lIHtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUgaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6ICM0NzQ3NDc7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byBoMTpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnV0dG9uIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICB3aWR0aDogMS44cmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNlMmUyZTI7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgbWluLWhlaWdodDogOHJlbTtcXG4gIG1heC1oZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSB7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHAge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBjdXJzaXZlLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHAge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSA6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyB7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8gaSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIGkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbzpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICMzNmQwZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMzZkMGZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIGkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbn1cIixcIkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZURvd24ge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZVVwIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVMZWZ0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlTGVmdFBob25lIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnRQaG9uZSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZURvd24ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlRG93biB7XFxyXFxuICAgIGFuaW1hdGlvbjogcm90YXRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIubmF2U3R5bGUge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgLm1vZHVsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgLm1vZHVsZUNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCA2cHggNnB4O1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmZvcm1Ub2RvIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmlucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuOWZyIDNmcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0QXJlYSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5idG5zIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjYWRkTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjZWRpdExpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjY2FuY2VsTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm5hdk9uZSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcblxcclxcbiAgICAgICAgLnNwYW5TdHlsZSB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2ZmZmZmZiAuNXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC43cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNzcGFuUGhvbmUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAjc3Bhbm4ge1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaG9tZUljb24ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMy41cmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMXB4IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjaG9tZUljb24ge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZUd28ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAjcGx1c0ljb24ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHBob25lIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDEzMTJweCkge1xcclxcbiAgICAgICAgICAgIEBjb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBkZXNrIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzEzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcXHJcXG4gICAgICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn07XCIsXCJtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcclxcbiAgICBoZWlnaHQ6IDUyLjVyZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnNpZGVCYXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJPbmUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC5zaWRlQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIC4zcHggI2YwZjBmMDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmluYm94IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDRiNGZmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kYXkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwM2RhMDM7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ZjQ5ZmY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDZweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJUd28ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0RGVmYXVsdCB7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2Fycm93IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI25ld1Byb2plY3RJY29uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0TGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5saXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlUHJvamVjdEJ0biB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5zaWRlQmFyTW9kdWxlIHtcXHJcXG4gICAgICAgICAgICB0b3A6IDByZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC5zaWRlQmFyTW9kdWxlQ29udGVudCB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOCkgMHB4IDJweCA0cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUsIC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjYWRkUHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICNjYW5jZWxQcm9qZWN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICAgICAgICAucGFnZVN0eWxlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAzZnI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5jb250ZW50T25lIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIC5jb250ZW50T25lT25lIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAuY29udGVudE9uZVR3byB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NzQ3NDc7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgI25ld0xpc3RCdXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS44cmVtO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgIC5wYWdlQ29udGVudCB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAudG9kb1N0eWxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IC41cHggc29saWQgI2UyZTJlMjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgI2UyZTJlMjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGl2T25lIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXZPbmVPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIGN1cnNpdmUsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdk9uZVR3byB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZGVsZXRlVG9kbyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZWRpdFRvZG8ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM2ZDBmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNmQwZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgLmRpdlR3byB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBGYWN0b3J5IEZ1bmN0aW9uIHRvIGNyZWF0ZSB0b2Rvc1xyXG5mdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZX1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcclxuICAgIGxldCB0b2RvcyA9IFtdXHJcblxyXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9kb3MsXHJcbiAgICAgICAgdGl0bGUsIFxyXG4gICAgICAgIGFkZFRvZG9cclxuICAgIH0gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdE1hbmFnZXIodGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW11cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2plY3RzQXJyYXksXHJcbiAgICAgICAgdGl0bGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0TWFuYWdlciB9IiwiLy8gVGhpcyBtb2R1bGUgd2lsbCB0YWtlIGNhcmUgb2YgYWxsIHRoZSBET00gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LlxyXG5pbXBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0TWFuYWdlciB9IGZyb20gJy4vRmFjdG9yeSdcclxuaW1wb3J0IHsgXHJcbiAgICByZW5kZXJOZXdQYWdlLCByZW5kZXJQYWdlLCBzaG93UGFnZSwgXHJcbiAgICByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQsIHJlbmRlclRvZG9MaXN0RWxlbWVudCxcclxuICAgIGNsZWFuSW5wdXQsIGRlbGV0ZUFsbCwgY3JlYXRlT3B0aW9uc1xyXG59IGZyb20gJy4vZG9tZnVudGlvbnMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRUaXRsZSwgc2V0UHJvamVjdCwgZGVsUHJvamVjdCwgc2V0TGlzdCwgc2V0T3B0aW9uLCBkZWxMaXN0LCBlZGl0TGlzdCB9IGZyb20gJy4vU3RvcmFnZSdcclxuXHJcblxyXG4vLyBCdXR0b25zIHRvIGNoYW5nZSBQYWdlcyBiZXR3ZW5uIEluYm94LCBUb2RheSAmIFByb2plY3RzLlxyXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveENvbnRhaW5lcicpXHJcbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheUNvbnRhaW5lcicpXHJcbmNvbnN0IG1vbnRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnRoQ29udGFpbmVyJylcclxuXHJcblxyXG4vLyBDcmVhdGUgTmV3IFRvZG9saXN0IEJ1dHRvblxyXG5jb25zdCBjcmVhdGVUb2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0JylcclxuLy8gRGVsZXRlIFRvZG9saXN0IEJ1dHRvblxyXG5jb25zdCBkZWxldGVUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuLy8gRWRpdCBUb2RvbGlzdCBCdXR0b25cclxuLy8gMS4gQnV0dG9uIHRvIE9wZW4gTW9kYWwgXHJcbmNvbnN0IGVkaXRUb2RvTGlzdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbi8vIDIuIEJ1dHRvbiB0byBlZGl0IHRoZSBUb2RvbGlzdFxyXG5jb25zdCBlZGl0VG9kb0xpc3QyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRMaXN0JylcclxuLy8gQ3JlYXRlIFByb2plY3QgQnV0dG9uXHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpXHJcbi8vIERlbGV0ZSBQcm9qZWN0IEJ1dHRvblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0JylcclxuLy8gUmVuZGVyaW5nIFByb2plY3QncyBQYWdlXHJcbmNvbnN0IExpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0JylcclxuXHJcblxyXG4vLyBHZXQgdGhlIGN1cnJlbnQgcGFnZSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG5sZXQgZWRpdGVkSW5kZXhcclxubGV0IGN1cnJlbnRQYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1BhZ2UnKVxyXG5sZXQgY3VycmVudFRpdGxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0N1cnJlbnRUaXRsZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0N1cnJlbnRUaXRsZScpIDogJ0luYm94J1xyXG4vLyAmIGFwcGVuZCBpdCB0byB0aGUgRE9NLlxyXG5zaG93UGFnZShjdXJyZW50UGFnZSlcclxuXHJcblxyXG4vLyAxLiBUaGUgUHJvamVjdCBNYW5hZ2VyXHJcbmNvbnN0IG15UHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoJ215UHJvamVjdE1hbmFnZXInKVxyXG5cclxuLy8gMi4gQXJyYXkgb2YgYWxsIFByb2plY3RcclxuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsUHJvamVjdCcsIFtdKVxyXG5sZXQgYWxsUHJvamVjdEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbFByb2plY3QnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbFByb2plY3QnKSkgOiBteVByb2plY3RNYW5hZ2VyLnByb2plY3RzQXJyYXlcclxuXHJcbi8vICNSZW5kZXJpbmcgQWxsIFByb2plY3QgVGl0bGVzIG9uIFNpZGViYXJcclxuYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWwgPT4ge1xyXG4gICAgcmVuZGVyUHJvamVjdExpc3RFbGVtZW50KGVsLnRpdGxlKVxyXG59KVxyXG5cclxuXHJcbi8vICNSZW5kZXJpbmcgYWxsIHRoZSB0b2RvbGlzdFxyXG5hbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50LnRpdGxlID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9saXN0Q3JlYXRpb24oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJykudmFsdWVcclxuICAgIGNvbnN0IGFsbFRpdGxlcyA9IGFsbFByb2plY3RBcnJheS5tYXAoZWwgPT4gZWwudGl0bGUpXHJcblxyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZScpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHknKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGUnKS52YWx1ZVxyXG5cclxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpXHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFsbFRpdGxlc1tpXSA9PT0gcHJvamVjdFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlKVxyXG4gICAgICAgICAgICBzZXRMaXN0KGksIG5ld1RvZG8pXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbChwYXJlbnQpXHJcbiAgICAgICAgICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZShhbGxUaXRsZXNbaV0pKVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGl0bGUocHJvamVjdFRpdGxlKVxyXG4gICAgICAgICAgICBjdXJyZW50VGl0bGUgPSBwcm9qZWN0VGl0bGVcclxuICAgICAgICAgICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvTGlzdERlbGV0aW9uKGUpIHtcclxuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnRcclxuICAgIGNvbnN0IGFsbFRpdGxlcyA9IGFsbFByb2plY3RBcnJheS5tYXAoZWwgPT4gZWwudGl0bGUpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUaXRsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYWxsVGl0bGVzW2ldID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgICAgZGVsTGlzdChpLCBsaXN0VGl0bGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgICAgICBsaXN0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlzdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvTGlzdEVkaXRpb24oKSB7XHJcbiAgICBjb25zdCBhbGxUaXRsZXMgPSBhbGxQcm9qZWN0QXJyYXkubWFwKGVsID0+IGVsLnRpdGxlKVxyXG5cclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJvamVjdHMnKS52YWx1ZVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFsbFRpdGxlc1tpXSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRlZExpc3QgPSBUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlKVxyXG4gICAgICAgICAgICBlZGl0TGlzdChpLCBlZGl0ZWRMaXN0LCBlZGl0ZWRJbmRleCkgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHZhbHVlKVxyXG4gICAgICAgIHNldFByb2plY3QobmV3UHJvamVjdCwgYWxsUHJvamVjdEFycmF5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE5hbWUnKS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3RUaXRsZSlcclxuICAgICAgICBzZXRQcm9qZWN0KG5ld1Byb2plY3QsIGFsbFByb2plY3RBcnJheSlcclxuICAgICAgICByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIGNyZWF0ZU9wdGlvbnMocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIHNldE9wdGlvbigpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RGVsZXRpb24oZSkge1xyXG4gICAgY29uc3QgbGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcclxuICAgIGRlbFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgbGlzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpc3QpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKSB7XHJcbiAgICBpZiAoYWxsUHJvamVjdEFycmF5Lmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignSW5ib3gnKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignVG9kYXknKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignTW9udGgnKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY3JlYXRlRGVmYXVsdFByb2plY3RzKClcclxuXHJcblxyXG4vLyAjUmVuZGVyaW5nIFByb2plY3QgUGFnZVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1BhZ2UnKSkge1xyXG4gICAgICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgICAgICBzZXRDdXJyZW50VGl0bGUoJ0luYm94JylcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlZGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnSW5ib3gnKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ0luYm94J1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnVG9kYXknKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnVG9kYXknKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ1RvZGF5J1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnTW9udGgnKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnTW9udGgnKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ01vbnRoJ1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5MaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaXN0JykpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5maXJzdENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKHByb2plY3RUaXRsZSkpXHJcbiAgICAgICAgc2V0Q3VycmVudFRpdGxlKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjdXJyZW50VGl0bGUgPSBwcm9qZWN0VGl0bGVcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vICN0b2RvTGlzdCBDcmVhdGlvblxyXG5jcmVhdGVUb2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZG9saXN0Q3JlYXRpb24oKVxyXG4gICAgY2xlYW5JbnB1dCgpXHJcbn0pXHJcblxyXG5cclxuLy8gI3RvZG9saXN0IERlbGV0aW9uXHJcbmRlbGV0ZVRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcbiAgICAgICAgdG9kb0xpc3REZWxldGlvbihlKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vICN0b2RvbGlzdCBFZGl0aW9uXHJcbi8vIDEuIE9wZW4gdGhlIG1vZHVsZSB0byBlZGl0IHRoZSBsaXN0XHJcbmVkaXRUb2RvTGlzdDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGUnKVxyXG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0JylcclxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRMaXN0JylcclxuXHJcbiAgICAgICAgbW9kdWxlcy5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICAgICAgYWRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcblxyXG4gICAgICAgIGNvbnN0IGFsbFRpdGxlcyA9IGFsbFByb2plY3RBcnJheS5tYXAoZWwgPT4gZWwudGl0bGUpXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnRcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUaXRsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFsbFRpdGxlc1tpXSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBhbGxQcm9qZWN0QXJyYXlbaV0udG9kb3NcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS50aXRsZSA9PT0gdGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0ZWRJbmRleCA9IGlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpXHJcbiAgICB9XHJcbn0pXHJcbi8vIDIuIEVkaXQgdGhlIGFjdHVhbCB0b2RvbGlzdFxyXG5lZGl0VG9kb0xpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHRvZG9MaXN0RWRpdGlvbigpXHJcbiAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbi8vICNQcm9qZWN0IENyZWF0aW9uXHJcbmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9qZWN0Q3JlYXRpb24oKVxyXG59KVxyXG5cclxuXHJcbi8vICNQcm9qZWN0IERlbGV0aW9uXHJcbmRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlUHJvamVjdEJ0bicpKSB7XHJcbiAgICAgICAgcHJvamVjdERlbGV0aW9uKGUpXHJcbiAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdJbmJveCcpKVxyXG4gICAgICAgIGN1cnJlbnRUaXRsZSA9ICdJbmJveCdcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBhbGxQcm9qZWN0QXJyYXkgfVxyXG4iLCJcclxuaW1wb3J0IHsgYWxsUHJvamVjdEFycmF5IH0gZnJvbSBcIi4vUGFpbnRkb21cIlxyXG5cclxuXHJcbmNvbnN0IHNldEN1cnJlbnRUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0N1cnJlbnRUaXRsZScsIHRpdGxlKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIHNhdmUgcHJvamVjdCBpbiBsb2NhbHN0b3JhZ2VcclxuY29uc3Qgc2V0UHJvamVjdCA9IChwcm9qZWN0LCBhbGxQcm9qZWN0cykgPT4ge1xyXG4gICAgYWxsUHJvamVjdEFycmF5LnB1c2gocHJvamVjdClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGRlbGV0ZSBwcm9qZWN0IGZyb20gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IGRlbFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgICBsZXQgYWxsUHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsUHJvamVjdCcpKS5maWx0ZXIoZWwgPT4gZWwudGl0bGUgIT09IHByb2plY3RUaXRsZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBzYXZlIGxpc3QgaW4gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IHNldExpc3QgPSAoaW5kZXgsIG5ld1RvZG8pID0+IHtcclxuICAgIGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MucHVzaChuZXdUb2RvKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FsbFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0QXJyYXkpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGRlbGV0ZSBsaXN0IGZyb20gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IGRlbExpc3QgPSAoaW5kZXgsIGxpc3RUaXRsZSkgPT4ge1xyXG4gICAgbGV0IGNoYW5nZWRUb2RvcyA9IGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MuZmlsdGVyKGVsID0+IGVsLnRpdGxlICE9PSBsaXN0VGl0bGUpXHJcbiAgICBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zID0gY2hhbmdlZFRvZG9zXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RBcnJheSkpXHJcbn1cclxuXHJcblxyXG4vLyAjRnVuY3Rpb24gdG8gZWRpdCBsaXN0IGluIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBlZGl0TGlzdCA9IChpbmRleCwgZWRpdGVkTGlzdCwgZWRpdGVkSW5kZXgpID0+IHtcclxuICAgIGxldCBjaGFuZ2VkVG9kb3MgPSBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zXHJcbiAgICBsZXQgbmV3QXJyID0gY2hhbmdlZFRvZG9zLnNwbGljZShlZGl0ZWRJbmRleCwgMSwgZWRpdGVkTGlzdClcclxuICAgIGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MgPSBjaGFuZ2VkVG9kb3NcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBzZXRPcHRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnb3B0aW9ucycpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBzZXRDdXJyZW50VGl0bGUsIHNldFByb2plY3QsIGRlbFByb2plY3QsIHNldExpc3QsIGRlbExpc3QsIGVkaXRMaXN0LCBzZXRPcHRpb24gfSIsImltcG9ydCB7IGNsZWFuSW5wdXQgfSBmcm9tIFwiLi9kb21mdW50aW9uc1wiXHJcblxyXG5cclxuLy8gUHJvamVjdCBsaXN0IGFuaW1hdGlvblxyXG5jb25zdCBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdycpXHJcblxyXG5hcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0JylcclxuXHJcbiAgICBpZiAocHJvamVjdExpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZURvd24nKSkge1xyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlRG93bicpXHJcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgnc2xpZGVVcCcpXHJcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlRG93bicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlRG93bicpXHJcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVVcCcpXHJcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgncm90YXRlRG93bicpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gU2lkZSBiYXIgYW5pbWF0aW9uICggZm9yIGRlc2t0b3AgKVxyXG5jb25zdCBuYXZTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYW5uJylcclxuXHJcbm5hdlNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcbiAgICBjb25zdCBzaWRlQmFyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJPbmUnKVxyXG4gICAgY29uc3Qgc2lkZUJhclR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyVHdvJylcclxuXHJcbiAgICBpZiAobWFpbkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZUxlZnQnKSkge1xyXG4gICAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlTGVmdCcpXHJcbiAgICAgICAgc2lkZUJhck9uZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgc2lkZUJhclR3by5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NsaWRlTGVmdCcpXHJcbiAgICAgICAgc2lkZUJhck9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgc2lkZUJhclR3by5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gU2lkZSBiYXIgYW5pbWF0aW9uICggZm9yIG1vYmlsZSApXHJcbmNvbnN0IHNwYW5QaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFuUGhvbmUnKVxyXG5cclxuc3BhblBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyJylcclxuXHJcbiAgICBpZiAoc2lkZUJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlTGVmdFBob25lJykpIHtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlTGVmdFBob25lJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzbGlkZUxlZnRQaG9uZScpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gSW5zZXJ0IGN1cnJlbnQgZGF0ZSBpbiB0aGUgc3ZnXHJcbmNvbnN0IHRvZGF5U3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5RGF0ZScpXHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG50b2RheVN2Zy50ZXh0Q29udGVudCA9IGRhdGUuZ2V0VVRDRGF0ZSgpXHJcblxyXG5cclxuLy8gT3BlbiAmIENsb3NlIE1vZHVsZVxyXG5jb25zdCBtb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlJylcclxuLy8gT3BlbiBNb2RhbCBCdXR0b25zXHJcbmNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXNJY29uJylcclxuXHJcbi8vIENsb3NlIE1vZGFsIEJ1dHRvbnNcclxuY29uc3QgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZExpc3QnKVxyXG5jb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRMaXN0JylcclxuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbExpc3QnKVxyXG5cclxuXHJcbi8vIHBsdXNJY29uICYgbmV3TGlzdEJ0biBhcmUgdHdvIGRpZmZlcmVudCBidG5zIGJ1dCBzZXJ2ZXMgdGhlIHNhbWUgcHVycG9zZS5cclxucGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgYWRkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRCdG5PbmUoKSB7XHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdEJ1dHRvbicpKSB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0xpc3RCdXR0b24nKSBcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICAgICAgICAgIGFkZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgc2V0QnRuT25lKClcclxufSlcclxuXHJcblxyXG5hZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuXHJcbmVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuXHJcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBjbGVhbklucHV0KClcclxufSlcclxuXHJcblxyXG5cclxuLy8gbmV3IHByb2plY3QgYnV0dG9uXHJcbmNvbnN0IG1vZHVsZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhck1vZHVsZScpXHJcbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpXHJcblxyXG5cclxubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZHVsZTMuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuXHJcbi8vIEZvciBvcGVuaW5nIFNpZGVCYXIgUHJvamVjdCBNb2R1bGUgXHJcbmNvbnN0IG5ld1Byb2plY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RJY29uJylcclxuY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0JylcclxuXHJcblxyXG5uZXdQcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhck1vZHVsZScpXHJcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxyXG4gICAgcHJvamVjdE1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xyXG59KVxyXG5cclxuXHJcbmNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJNb2R1bGUnKSAgICBcclxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpXHJcbiAgICBwcm9qZWN0TW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnXHJcbn0pXHJcbiIsIi8vIPCfppogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdGhhdCBcclxuLy8gZGVhbHMgd2l0aCByZW5kZXJpbmcgb24gdGhlIERPTS5cclxuXHJcblxyXG4vLyAxLiBGdW5jdGlvbiB0byBjcmVhdGUgYSBuZXcgcGFnZSBcclxuY29uc3QgcmVuZGVyTmV3UGFnZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgY29uc3QgUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2VTdHlsZScpXHJcbiAgICBQYWdlLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudE9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudE9uZU9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPSd0aXRsZU9mUGFnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudE9uZVR3b1wiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBpZD0nbmV3TGlzdEJ1dHRvbicgY2xhc3M9XCJpbnZlcnRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQgMylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD1cImpkNEZCZ1wiIGZpbGw9XCIjZmZmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNOSA4aDdhLjUuNSAwIDEgMSAwIDFIOXY3YS41LjUgMCAxIDEtMSAwVjlIMWEuNS41IDAgMCAxIDAtMWg3VjFhLjUuNSAwIDAgMSAxIDB2N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFzaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBtYXNrPVwidXJsKCNqZDRGQmcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTS00LTNoMjR2MjRILTR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgTGlzdFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VDb250ZW50XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gUGFnZVxyXG59XHJcblxyXG5cclxuLy8gUmVuZGVyUGFnZSAmIFNob3dQYWdlIGRvIHNpbWlsYXIgdGhpbmdzLiBCdXQgcmVuZGVyUGFnZSBkZWFscyB3aXRoIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG5cclxuLy8gMi4gRnVuY3Rpb24gdG8gcmVuZGVyIGEgcGFnZSB0byB0aGUgZG9tXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGFnZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJydcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQYWdlJywgcGFnZS5pbm5lckhUTUwpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpXHJcbn1cclxuXHJcblxyXG4vLyAzLiBGdW5jdGlvbiB0byBzaG93IGEgcGFnZSB0byB0aGUgZG9tLlxyXG5mdW5jdGlvbiBzaG93UGFnZShlbCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJydcclxuICAgIGNvbnN0IGN1clBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY3VyUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlU3R5bGUnKVxyXG4gICAgY3VyUGFnZS5pbm5lckhUTUwgPSBlbFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjdXJQYWdlKVxyXG59XHJcblxyXG5cclxuLy8gNC4gRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHByb2plY3RsaXN0IGVsZW1lbnRcclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3RFbGVtZW50KHByb2plY3RUaXRsZSkge1xyXG4gICAgaWYgKHByb2plY3RUaXRsZSA9PT0gJ0luYm94JyB8fCBwcm9qZWN0VGl0bGUgPT09ICdUb2RheScgfHwgcHJvamVjdFRpdGxlID09PSAnTW9udGgnKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKVxyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKVxyXG4gICAgICAgIGNvbnN0IGRpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGRpdk9uZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZVxyXG4gICAgICAgIGNvbnN0IGRpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGRpdlR3by5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0JylcclxuICAgICAgICBkaXZUd28uaW5uZXJIVE1MID0gJzxoMSBjbGFzcz1cImRlbGV0ZVByb2plY3RCdG5cIj54PC9oMT4nXHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkaXZPbmUpXHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkaXZUd28pXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChsaXN0KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gNS4gRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHRvZG9saXN0IGVsZW1lbnRcclxuZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3RFbGVtZW50KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZWRhdGUpIHtcclxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VDb250ZW50JylcclxuXHJcbiAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0b2RvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2RvU3R5bGUnKVxyXG4gICAgdG9kb0VsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2Rpdk9uZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rpdk9uZU9uZSc+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7cHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtkdWVkYXRlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGl2T25lVHdvJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2RlbGV0ZScgaWQ9J2RlbGV0ZVRvZG8nPuKdjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZWRpdCcgaWQ9J2VkaXRUb2RvJz7wn5SEPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2RpdlR3byc+XHJcbiAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG5cclxuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KVxyXG59XHJcblxyXG5cclxuLy8gNi4gRnVuY3Rpb24gdG8gY2xlYW4gdGhlIGlucHV0IGZpZWxkXHJcbmZ1bmN0aW9uIGNsZWFuSW5wdXQoKSB7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlJykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpLnZhbHVlID0gJydcclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHknKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZScpLnZhbHVlID0gJydcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJvamVjdHMnKS52YWx1ZSA9ICcnXHJcbn1cclxuXHJcblxyXG4vLyA3LiBGdW5jdGlvbiB0byBkZWxldGUgZXZlcnkgZG9tIGVsZW1lbnQgaW4gYSBkaXZcclxuZnVuY3Rpb24gZGVsZXRlQWxsKHBhcmVudCkge1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIDguIEZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgb3B0aW9ucyBcclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhwcm9qZWN0VGl0bGUpIHtcclxuICAgIGxldCBhbGxPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0cycpXHJcblxyXG4gICAgbGV0IG5ld09wdGlvbiA9IG5ldyBPcHRpb24ocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgYWxsT3B0aW9ucy5hZGQobmV3T3B0aW9uLCBudWxsKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyTmV3UGFnZSwgcmVuZGVyUGFnZSwgc2hvd1BhZ2UsIHJlbmRlclByb2plY3RMaXN0RWxlbWVudCwgXHJcbiAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQsIGNsZWFuSW5wdXQsIGRlbGV0ZUFsbCwgY3JlYXRlT3B0aW9uc1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFNhc3MgZmlsZXMg8J+UrlxyXG5pbXBvcnQnLi9zYXNzL21haW4uc2NzcydcclxuXHJcblxyXG4vLyBKYXZhU2NyaXB0XHJcbmltcG9ydCBQYWludGRvbSBmcm9tICcuL01vZHVsZXMvUGFpbnRkb20nXHJcbmltcG9ydCBVSSBmcm9tICcuL01vZHVsZXMvVUknIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9