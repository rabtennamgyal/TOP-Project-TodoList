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
/* harmony export */   "allProjectArray": () => (/* binding */ allProjectArray),
/* harmony export */   "allOptions": () => (/* binding */ allOptions)
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
// 3. Array of all options
let allOptions = localStorage.getItem('AllOptions') ? JSON.parse(localStorage.getItem('AllOptions')) : []

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


// #Rendering all options 
allOptions.forEach(element => {
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.renderOptions)(element)
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
        const newOptions = (0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.createOptions)(projectTitle)
        const options = newOptions.innerHTML
        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setOption)(options)
    }
}


function projectDeletion(e) {
    const list = e.target.parentNode.parentNode
    const projectTitle = e.target.parentNode.parentNode.firstChild.textContent
    // Deleting Project
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.delProject)(projectTitle)
    list.parentNode.removeChild(list)
    // Deleting Project's Options
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.delOptions)(projectTitle)
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
        const inputFive = document.querySelector('.inputFive')

        modules.style.display = 'grid'
        add.style.display = 'none'
        edit.style.display = 'block'
        inputFive.style.display = 'none'

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
    const list = document.querySelector('.pageContent')
    todoListEdition()
    ;(0,_domfuntions__WEBPACK_IMPORTED_MODULE_1__.deleteAll)(list)
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
/* harmony export */   "setOption": () => (/* binding */ setOption),
/* harmony export */   "delOptions": () => (/* binding */ delOptions)
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


// #Function to save options in localstorage
const setOption = (options) => {
    _Paintdom__WEBPACK_IMPORTED_MODULE_0__.allOptions.push(options)
    localStorage.setItem('AllOptions', JSON.stringify(_Paintdom__WEBPACK_IMPORTED_MODULE_0__.allOptions))
}


// #Function to delete options from localstorage
const delOptions = (options) => {
    let allOptions = JSON.parse(localStorage.getItem('AllOptions')).filter(el => el !== options)
    console.log(options)
    console.log(allOptions)
    localStorage.setItem('AllOptions', JSON.stringify(allOptions))
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
    const projectInput = document.querySelector('.inputFive')
    module.style.display = 'none'
    projectInput.style.display = 'grid'
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
/* harmony export */   "createOptions": () => (/* binding */ createOptions),
/* harmony export */   "renderOptions": () => (/* binding */ renderOptions)
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
    const newOption = new Option(projectTitle, projectTitle)
    allOptions.add(newOption, null)
    return newOption
}


//   Function to render options 
function renderOptions(options) {
    const parent = document.getElementById('todoProjects')
    const option = document.createElement('option')
    option.innerHTML = `<option value=${options}>${options}</option>`
    parent.appendChild(option)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFdBQVcsT0FBTyxLQUFL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QUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVTtBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTTtBQUMzQixxQkFBcUIsU0FBUztBQUM5QixxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVEsR0FBRyxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3dCO0FBQ3hCO0FBQ0E7QUFDQTtBQUN5QyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9QYWludGRvbS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL2RvbWZ1bnRpb25zLmpzIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdCZmYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbn1cXG4uc2xpZGVEb3duIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG59XFxuLnNsaWRlVXAge1xcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxuICAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XFxuICB9XFxufVxcbi5zbGlkZUxlZnQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdFBob25lIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0UGhvbmUgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVEb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG4ucm90YXRlRG93biB7XFxuICBhbmltYXRpb246IHJvdGF0ZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5uYXZTdHlsZSB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUge1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC45ZnIgM2ZyO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciAuaW5wdXRBcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNlZGl0TGlzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAwLjVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDBweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5uYXZPbmUgI3NwYW5uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24gI2hvbWVJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byB7XFxuICB3aWR0aDogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIGhlaWdodDogNTIuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgNzAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjNweCAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmluYm94IHtcXG4gIGNvbG9yOiAjNDRiNGZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5kYXkge1xcbiAgY29sb3I6ICMwM2RhMDM7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLnByb2plY3Qge1xcbiAgY29sb3I6ICM4ZjQ5ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgaDEge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNhcnJvdyB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uIHtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgLmRlbGV0ZVByb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCAuZGVsZXRlUHJvamVjdEJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MCk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIHtcXG4gIHRvcDogMHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTgpIDBweCAycHggNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lLCBtYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgaW5wdXQge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28gYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNhZGRQcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNjYW5jZWxQcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNjYW5jZWxQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lT25lIHtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUgaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6ICM0NzQ3NDc7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byBoMTpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnV0dG9uIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICB3aWR0aDogMS44cmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNlMmUyZTI7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgbWluLWhlaWdodDogOHJlbTtcXG4gIG1heC1oZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSB7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHAge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBjdXJzaXZlLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHAge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSA6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyB7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8gaSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIGkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbzpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICMzNmQwZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMzZkMGZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIGkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbC9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL25hdmJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX21peGluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNz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QTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUo2UGhDO0FHdm5CUTtFQ21Yb0I7SUFVUSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFSjhQbEM7QUFDRjtBSTVQZ0M7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FKOFBwQztBSTNQZ0M7RUFDSSxlQUFBO0FKNlBwQztBR3ZvQlE7RUN5WXdCO0lBSVEsaUJBQUE7RUo4UHRDO0FBQ0Y7QUl2UG9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUp5UHhCO0FJdlB3QjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FKeVA1QjtBR3JwQlE7RUN5WmdCO0lBTVEsZUFBQTtJQUNBLGlCQUFBO0VKMFA5QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0JmZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0JmZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgaGVpZ2h0OiAwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGhlaWdodDogMTByZW07XFxuICB9XFxufVxcbi5zbGlkZURvd24ge1xcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGhlaWdodDogMTByZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbn1cXG4uc2xpZGVVcCB7XFxuICBhbmltYXRpb246IHNsaWRlVXAgMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXG4gIDAlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdCB7XFxuICBhbmltYXRpb246IHNsaWRlTGVmdCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdFBob25lIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uc2xpZGVMZWZ0UGhvbmUge1xcbiAgYW5pbWF0aW9uOiBzbGlkZUxlZnRQaG9uZSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZURvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxufVxcbi5yb3RhdGVEb3duIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLm5hdlN0eWxlIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSB7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNDAlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCA2cHggNnB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjlmciAzZnI7XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgbGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIC5pbnB1dEFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjYWRkTGlzdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDAgMS41cmVtIDAgM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjYWRkTGlzdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDAgMS41cmVtIDAgM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjZWRpdExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNjYW5jZWxMaXN0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNjYW5jZWxMaXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTByZW07XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXB4IDA7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmIDAuNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDFweDtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuN3M7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgI3NwYW5QaG9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5uYXZPbmUgI3NwYW5QaG9uZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm5hdk9uZSAjc3Bhbm4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXB4IDA7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5ob21lSWNvbjpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5ob21lSWNvbiAjaG9tZUljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5uYXZTdHlsZSAubmF2VHdvIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5uYXZTdHlsZSAubmF2VHdvICNwbHVzSWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcbiAgaGVpZ2h0OiA1Mi41cmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAxZnI7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5zaWRlQmFyIHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDByZW07XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDgwJTtcXG4gIH1cXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDAuM3B4ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAuaW5ib3gge1xcbiAgY29sb3I6ICM0NGI0ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmRheSB7XFxuICBjb2xvcjogIzAzZGEwMztcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAucHJvamVjdCB7XFxuICBjb2xvcjogIzhmNDlmZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciBoMSB7XFxuICBtYXJnaW46IDAgNnB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA4NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI2Fycm93IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb24ge1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICBtYXJnaW4tbGVmdDogMTIwcHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNuZXdQcm9qZWN0SWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IHAge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCAuZGVsZXRlUHJvamVjdEJ0biB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiAjODA4MDgwO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IC5kZWxldGVQcm9qZWN0QnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUge1xcbiAgdG9wOiAwcmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOCkgMHB4IDJweCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUsIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA3MCU7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDhyZW07XFxuICBtYXJnaW46IDAgMXJlbSAwIDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28gI2FkZFByb2plY3Qge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28gI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28gI2NhbmNlbFByb2plY3Qge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28gI2NhbmNlbFByb2plY3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUge1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSBoMSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28ge1xcbiAgbWFyZ2luOiAxcmVtIDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byBoMSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBjb2xvcjogIzQ3NDc0NztcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdXR0b24ge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIHdpZHRoOiAxLjhyZW07XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byAjbmV3TGlzdEJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2UyZTJlMjtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNlMmUyZTI7XFxuICBtaW4taGVpZ2h0OiA4cmVtO1xcbiAgbWF4LWhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIGN1cnNpdmUsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIDpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvIHtcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8gaSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogIzM2ZDBmZjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbzpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMzNmQwZmY7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvIGkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8gaSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdlR3byB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28gcCB7XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICB9XFxufVwiLFwiQGtleWZyYW1lcyBzbGlkZURvd24ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlRG93biB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlVXAge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlVXAgMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZUxlZnQge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlTGVmdCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdFBob25lIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVMZWZ0UGhvbmUge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlTGVmdFBob25lIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcm90YXRlRG93biB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGVEb3duIHtcXHJcXG4gICAgYW5pbWF0aW9uOiByb3RhdGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cIixcIi5uYXZTdHlsZSB7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAubW9kdWxlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICAubW9kdWxlQ29udGVudCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuZm9ybVRvZG8ge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAuaW5wdXRDb250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC45ZnIgM2ZyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjByZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAuaW5wdXRBcmVhIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmJ0bnMge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICNhZGRMaXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICNlZGl0TGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICNjYW5jZWxMaXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubmF2T25lIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTByZW07XFxyXFxuXFxyXFxuICAgICAgICAuc3BhblN0eWxlIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjZmZmZmZmIC41cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggMXB4O1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3NwYW5QaG9uZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICNzcGFubiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5ob21lSWNvbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICNob21lSWNvbiB7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdlR3byB7XFxyXFxuICAgICAgICB3aWR0aDogMTByZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICNwbHVzSWNvbiB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xcclxcbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gcGhvbmUge1xcclxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQge1xcclxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQge1xcclxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KSBhbmQgKG1heC13aWR0aDogMTMxMnB4KSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IGRlc2sge1xcclxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzMTNweCkgYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xcclxcbiAgICAgICAgICAgIEBjb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufTtcIixcIm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxyXFxuICAgIGhlaWdodDogNTIuNXJlbTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwIDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc2lkZUJhciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDcwJTtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDByZW07XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuc2lkZUJhck9uZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnNpZGVCYXJDb250YWluZXIge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgLjNweCAjZjBmMGYwO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuaW5ib3gge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NGI0ZmY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmRheSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAzZGEwMztcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAucHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhmNDlmZjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuc2lkZUJhclR3byB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgLnByb2plY3REZWZhdWx0IHtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAjYXJyb3cge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAjbmV3UHJvamVjdEljb24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnByb2plY3RMaXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmxpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5kZWxldGVQcm9qZWN0QnRuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJNb2R1bGUge1xcclxcbiAgICAgICAgICAgIHRvcDogMHJlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE4KSAwcHggMnB4IDRweDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICNhZGRQcm9qZWN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgI2NhbmNlbFByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gICAgICAgIC5wYWdlU3R5bGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDNmcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNvbnRlbnRPbmUge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgLmNvbnRlbnRPbmVPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIC5jb250ZW50T25lVHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSA0cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ3NDc0NztcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAjbmV3TGlzdEJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgLnBhZ2VDb250ZW50IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIC50b2RvU3R5bGUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogLjVweCBzb2xpZCAjZTJlMmUyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCAjZTJlMmUyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIC5kaXZPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdk9uZU9uZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2T25lVHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkZWxldGVUb2RvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlZGl0VG9kbyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzZkMGZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMDAwO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGl2VHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEZhY3RvcnkgRnVuY3Rpb24gdG8gY3JlYXRlIHRvZG9zXHJcbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xyXG4gICAgbGV0IHRvZG9zID0gW11cclxuXHJcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcclxuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b2RvcyxcclxuICAgICAgICB0aXRsZSwgXHJcbiAgICAgICAgYWRkVG9kb1xyXG4gICAgfSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0TWFuYWdlcih0aXRsZSkge1xyXG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvamVjdHNBcnJheSxcclxuICAgICAgICB0aXRsZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IFRvZG8sIFByb2plY3QsIFByb2plY3RNYW5hZ2VyIH0iLCIvLyBUaGlzIG1vZHVsZSB3aWxsIHRha2UgY2FyZSBvZiBhbGwgdGhlIERPTSByZWxhdGVkIGZ1bmN0aW9uYWxpdHkuXHJcbmltcG9ydCB7IFRvZG8sIFByb2plY3QsIFByb2plY3RNYW5hZ2VyIH0gZnJvbSAnLi9GYWN0b3J5J1xyXG5pbXBvcnQgeyBcclxuICAgIHJlbmRlck5ld1BhZ2UsIHJlbmRlclBhZ2UsIHNob3dQYWdlLCBcclxuICAgIHJlbmRlclByb2plY3RMaXN0RWxlbWVudCwgcmVuZGVyVG9kb0xpc3RFbGVtZW50LFxyXG4gICAgY2xlYW5JbnB1dCwgZGVsZXRlQWxsLCBjcmVhdGVPcHRpb25zLCByZW5kZXJPcHRpb25zXHJcbn0gZnJvbSAnLi9kb21mdW50aW9ucydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFRpdGxlLCBzZXRQcm9qZWN0LCBkZWxQcm9qZWN0LCBzZXRMaXN0LCBzZXRPcHRpb24sIGRlbE9wdGlvbnMsIGRlbExpc3QsIGVkaXRMaXN0IH0gZnJvbSAnLi9TdG9yYWdlJ1xyXG5cclxuXHJcbi8vIEJ1dHRvbnMgdG8gY2hhbmdlIFBhZ2VzIGJldHdlbm4gSW5ib3gsIFRvZGF5ICYgUHJvamVjdHMuXHJcbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Q29udGFpbmVyJylcclxuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5Q29udGFpbmVyJylcclxuY29uc3QgbW9udGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9udGhDb250YWluZXInKVxyXG5cclxuXHJcbi8vIENyZWF0ZSBOZXcgVG9kb2xpc3QgQnV0dG9uXHJcbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZExpc3QnKVxyXG4vLyBEZWxldGUgVG9kb2xpc3QgQnV0dG9uXHJcbmNvbnN0IGRlbGV0ZVRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4vLyBFZGl0IFRvZG9saXN0IEJ1dHRvblxyXG4vLyAxLiBCdXR0b24gdG8gT3BlbiBNb2RhbCBcclxuY29uc3QgZWRpdFRvZG9MaXN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuLy8gMi4gQnV0dG9uIHRvIGVkaXQgdGhlIFRvZG9saXN0XHJcbmNvbnN0IGVkaXRUb2RvTGlzdDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdExpc3QnKVxyXG4vLyBDcmVhdGUgUHJvamVjdCBCdXR0b25cclxuY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0JylcclxuLy8gRGVsZXRlIFByb2plY3QgQnV0dG9uXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKVxyXG4vLyBSZW5kZXJpbmcgUHJvamVjdCdzIFBhZ2VcclxuY29uc3QgTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKVxyXG5cclxuXHJcbi8vIEdldCB0aGUgY3VycmVudCBwYWdlIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbmxldCBlZGl0ZWRJbmRleFxyXG5sZXQgY3VycmVudFBhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUGFnZScpXHJcbmxldCBjdXJyZW50VGl0bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ3VycmVudFRpdGxlJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ3VycmVudFRpdGxlJykgOiAnSW5ib3gnXHJcbi8vICYgYXBwZW5kIGl0IHRvIHRoZSBET00uXHJcbnNob3dQYWdlKGN1cnJlbnRQYWdlKVxyXG5cclxuXHJcbi8vIDEuIFRoZSBQcm9qZWN0IE1hbmFnZXJcclxuY29uc3QgbXlQcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcignbXlQcm9qZWN0TWFuYWdlcicpXHJcblxyXG4vLyAyLiBBcnJheSBvZiBhbGwgUHJvamVjdFxyXG4vL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgW10pXHJcbmxldCBhbGxQcm9qZWN0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsUHJvamVjdCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsUHJvamVjdCcpKSA6IG15UHJvamVjdE1hbmFnZXIucHJvamVjdHNBcnJheVxyXG4vLyAzLiBBcnJheSBvZiBhbGwgb3B0aW9uc1xyXG5sZXQgYWxsT3B0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGxPcHRpb25zJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGxPcHRpb25zJykpIDogW11cclxuXHJcbi8vICNSZW5kZXJpbmcgQWxsIFByb2plY3QgVGl0bGVzIG9uIFNpZGViYXJcclxuYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWwgPT4ge1xyXG4gICAgcmVuZGVyUHJvamVjdExpc3RFbGVtZW50KGVsLnRpdGxlKVxyXG59KVxyXG5cclxuXHJcbi8vICNSZW5kZXJpbmcgYWxsIHRoZSB0b2RvbGlzdFxyXG5hbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50LnRpdGxlID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vICNSZW5kZXJpbmcgYWxsIG9wdGlvbnMgXHJcbmFsbE9wdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIHJlbmRlck9wdGlvbnMoZWxlbWVudClcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvbGlzdENyZWF0aW9uKCkge1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0cycpLnZhbHVlXHJcbiAgICBjb25zdCBhbGxUaXRsZXMgPSBhbGxQcm9qZWN0QXJyYXkubWFwKGVsID0+IGVsLnRpdGxlKVxyXG5cclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuXHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRpdGxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhbGxUaXRsZXNbaV0gPT09IHByb2plY3RUaXRsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb1ByaW9yaXR5LCB0b2RvRHVlRGF0ZSlcclxuICAgICAgICAgICAgc2V0TGlzdChpLCBuZXdUb2RvKVxyXG4gICAgICAgICAgICBkZWxldGVBbGwocGFyZW50KVxyXG4gICAgICAgICAgICByZW5kZXJQYWdlKHJlbmRlck5ld1BhZ2UoYWxsVGl0bGVzW2ldKSlcclxuICAgICAgICAgICAgc2V0Q3VycmVudFRpdGxlKHByb2plY3RUaXRsZSlcclxuICAgICAgICAgICAgY3VycmVudFRpdGxlID0gcHJvamVjdFRpdGxlXHJcbiAgICAgICAgICAgIGFsbFByb2plY3RBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclRvZG9MaXN0RWxlbWVudChlbC50aXRsZSwgZWwuZGVzY3JpcHRpb24sIGVsLnByaW9yaXR5LCBlbC5kdWVEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3REZWxldGlvbihlKSB7XHJcbiAgICBjb25zdCBsaXN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50XHJcbiAgICBjb25zdCBhbGxUaXRsZXMgPSBhbGxQcm9qZWN0QXJyYXkubWFwKGVsID0+IGVsLnRpdGxlKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFsbFRpdGxlc1tpXSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGRlbExpc3QoaSwgbGlzdFRpdGxlKVxyXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgICAgICAgICAgbGlzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3RFZGl0aW9uKCkge1xyXG4gICAgY29uc3QgYWxsVGl0bGVzID0gYWxsUHJvamVjdEFycmF5Lm1hcChlbCA9PiBlbC50aXRsZSlcclxuXHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlJykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb24nKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZScpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJykudmFsdWVcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRpdGxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhbGxUaXRsZXNbaV0gPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0ZWRMaXN0ID0gVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb1ByaW9yaXR5LCB0b2RvRHVlRGF0ZSlcclxuICAgICAgICAgICAgZWRpdExpc3QoaSwgZWRpdGVkTGlzdCwgZWRpdGVkSW5kZXgpICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdCh2YWx1ZSlcclxuICAgICAgICBzZXRQcm9qZWN0KG5ld1Byb2plY3QsIGFsbFByb2plY3RBcnJheSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lJykudmFsdWVcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0VGl0bGUpXHJcbiAgICAgICAgc2V0UHJvamVjdChuZXdQcm9qZWN0LCBhbGxQcm9qZWN0QXJyYXkpXHJcbiAgICAgICAgcmVuZGVyUHJvamVjdExpc3RFbGVtZW50KHByb2plY3RUaXRsZSlcclxuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0gY3JlYXRlT3B0aW9ucyhwcm9qZWN0VGl0bGUpXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ld09wdGlvbnMuaW5uZXJIVE1MXHJcbiAgICAgICAgc2V0T3B0aW9uKG9wdGlvbnMpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0RGVsZXRpb24oZSkge1xyXG4gICAgY29uc3QgbGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcclxuICAgIC8vIERlbGV0aW5nIFByb2plY3RcclxuICAgIGRlbFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgbGlzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpc3QpXHJcbiAgICAvLyBEZWxldGluZyBQcm9qZWN0J3MgT3B0aW9uc1xyXG4gICAgZGVsT3B0aW9ucyhwcm9qZWN0VGl0bGUpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKSB7XHJcbiAgICBpZiAoYWxsUHJvamVjdEFycmF5Lmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignSW5ib3gnKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignVG9kYXknKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignTW9udGgnKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY3JlYXRlRGVmYXVsdFByb2plY3RzKClcclxuXHJcblxyXG4vLyAjUmVuZGVyaW5nIFByb2plY3QgUGFnZVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1BhZ2UnKSkge1xyXG4gICAgICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgICAgICBzZXRDdXJyZW50VGl0bGUoJ0luYm94JylcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlZGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnSW5ib3gnKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ0luYm94J1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnVG9kYXknKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnVG9kYXknKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ1RvZGF5J1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnTW9udGgnKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnTW9udGgnKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ01vbnRoJ1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5MaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaXN0JykpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5maXJzdENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKHByb2plY3RUaXRsZSkpXHJcbiAgICAgICAgc2V0Q3VycmVudFRpdGxlKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjdXJyZW50VGl0bGUgPSBwcm9qZWN0VGl0bGVcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vICN0b2RvTGlzdCBDcmVhdGlvblxyXG5jcmVhdGVUb2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZG9saXN0Q3JlYXRpb24oKVxyXG4gICAgY2xlYW5JbnB1dCgpXHJcbn0pXHJcblxyXG5cclxuLy8gI3RvZG9saXN0IERlbGV0aW9uXHJcbmRlbGV0ZVRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcbiAgICAgICAgdG9kb0xpc3REZWxldGlvbihlKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vICN0b2RvbGlzdCBFZGl0aW9uXHJcbi8vIDEuIE9wZW4gdGhlIG1vZHVsZSB0byBlZGl0IHRoZSBsaXN0XHJcbmVkaXRUb2RvTGlzdDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGUnKVxyXG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0JylcclxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRMaXN0JylcclxuICAgICAgICBjb25zdCBpbnB1dEZpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGaXZlJylcclxuXHJcbiAgICAgICAgbW9kdWxlcy5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICAgICAgYWRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgaW5wdXRGaXZlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbiAgICAgICAgY29uc3QgYWxsVGl0bGVzID0gYWxsUHJvamVjdEFycmF5Lm1hcChlbCA9PiBlbC50aXRsZSlcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudFxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRpdGxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWxsVGl0bGVzW2ldID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IGFsbFByb2plY3RBcnJheVtpXS50b2Rvc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldLnRpdGxlID09PSB0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRlZEluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZSlcclxuICAgIH1cclxufSlcclxuLy8gMi4gRWRpdCB0aGUgYWN0dWFsIHRvZG9saXN0XHJcbmVkaXRUb2RvTGlzdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpXHJcbiAgICB0b2RvTGlzdEVkaXRpb24oKVxyXG4gICAgZGVsZXRlQWxsKGxpc3QpXHJcbiAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbi8vICNQcm9qZWN0IENyZWF0aW9uXHJcbmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9qZWN0Q3JlYXRpb24oKVxyXG59KVxyXG5cclxuXHJcbi8vICNQcm9qZWN0IERlbGV0aW9uXHJcbmRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlUHJvamVjdEJ0bicpKSB7XHJcbiAgICAgICAgcHJvamVjdERlbGV0aW9uKGUpXHJcbiAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdJbmJveCcpKVxyXG4gICAgICAgIGN1cnJlbnRUaXRsZSA9ICdJbmJveCdcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCB7IGFsbFByb2plY3RBcnJheSwgYWxsT3B0aW9ucyB9IiwiaW1wb3J0IHsgYWxsUHJvamVjdEFycmF5LCBhbGxPcHRpb25zIH0gZnJvbSBcIi4vUGFpbnRkb21cIlxyXG5cclxuXHJcbmNvbnN0IHNldEN1cnJlbnRUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0N1cnJlbnRUaXRsZScsIHRpdGxlKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIHNhdmUgcHJvamVjdCBpbiBsb2NhbHN0b3JhZ2VcclxuY29uc3Qgc2V0UHJvamVjdCA9IChwcm9qZWN0LCBhbGxQcm9qZWN0cykgPT4ge1xyXG4gICAgYWxsUHJvamVjdEFycmF5LnB1c2gocHJvamVjdClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGRlbGV0ZSBwcm9qZWN0IGZyb20gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IGRlbFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgICBsZXQgYWxsUHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsUHJvamVjdCcpKS5maWx0ZXIoZWwgPT4gZWwudGl0bGUgIT09IHByb2plY3RUaXRsZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBzYXZlIGxpc3QgaW4gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IHNldExpc3QgPSAoaW5kZXgsIG5ld1RvZG8pID0+IHtcclxuICAgIGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MucHVzaChuZXdUb2RvKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FsbFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0QXJyYXkpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGRlbGV0ZSBsaXN0IGZyb20gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IGRlbExpc3QgPSAoaW5kZXgsIGxpc3RUaXRsZSkgPT4ge1xyXG4gICAgbGV0IGNoYW5nZWRUb2RvcyA9IGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MuZmlsdGVyKGVsID0+IGVsLnRpdGxlICE9PSBsaXN0VGl0bGUpXHJcbiAgICBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zID0gY2hhbmdlZFRvZG9zXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RBcnJheSkpXHJcbn1cclxuXHJcblxyXG4vLyAjRnVuY3Rpb24gdG8gZWRpdCBsaXN0IGluIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBlZGl0TGlzdCA9IChpbmRleCwgZWRpdGVkTGlzdCwgZWRpdGVkSW5kZXgpID0+IHtcclxuICAgIGxldCBjaGFuZ2VkVG9kb3MgPSBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zXHJcbiAgICBsZXQgbmV3QXJyID0gY2hhbmdlZFRvZG9zLnNwbGljZShlZGl0ZWRJbmRleCwgMSwgZWRpdGVkTGlzdClcclxuICAgIGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MgPSBjaGFuZ2VkVG9kb3NcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBzYXZlIG9wdGlvbnMgaW4gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IHNldE9wdGlvbiA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBhbGxPcHRpb25zLnB1c2gob3B0aW9ucylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxPcHRpb25zJywgSlNPTi5zdHJpbmdpZnkoYWxsT3B0aW9ucykpXHJcbn1cclxuXHJcblxyXG4vLyAjRnVuY3Rpb24gdG8gZGVsZXRlIG9wdGlvbnMgZnJvbSBsb2NhbHN0b3JhZ2VcclxuY29uc3QgZGVsT3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBsZXQgYWxsT3B0aW9ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbE9wdGlvbnMnKSkuZmlsdGVyKGVsID0+IGVsICE9PSBvcHRpb25zKVxyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgIGNvbnNvbGUubG9nKGFsbE9wdGlvbnMpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsT3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KGFsbE9wdGlvbnMpKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgc2V0Q3VycmVudFRpdGxlLCBzZXRQcm9qZWN0LCBkZWxQcm9qZWN0LCBzZXRMaXN0LCBkZWxMaXN0LCBlZGl0TGlzdCwgc2V0T3B0aW9uLCBkZWxPcHRpb25zIH0iLCJpbXBvcnQgeyBjbGVhbklucHV0IH0gZnJvbSBcIi4vZG9tZnVudGlvbnNcIlxyXG5cclxuXHJcbi8vIFByb2plY3QgbGlzdCBhbmltYXRpb25cclxuY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3cnKVxyXG5cclxuYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXHJcblxyXG4gICAgaWYgKHByb2plY3RMaXN0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVEb3duJykpIHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZURvd24nKVxyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlVXAnKVxyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZURvd24nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdzbGlkZURvd24nKVxyXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlVXAnKVxyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZURvd24nKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vIFNpZGUgYmFyIGFuaW1hdGlvbiAoIGZvciBkZXNrdG9wIClcclxuY29uc3QgbmF2U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFubicpXHJcblxyXG5uYXZTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKVxyXG4gICAgY29uc3Qgc2lkZUJhck9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyT25lJylcclxuICAgIGNvbnN0IHNpZGVCYXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhclR3bycpXHJcblxyXG4gICAgaWYgKG1haW5Db250ZW50LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVMZWZ0JykpIHtcclxuICAgICAgICBtYWluQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZUxlZnQnKVxyXG4gICAgICAgIHNpZGVCYXJPbmUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIHNpZGVCYXJUd28uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzbGlkZUxlZnQnKVxyXG4gICAgICAgIHNpZGVCYXJPbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHNpZGVCYXJUd28uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vIFNpZGUgYmFyIGFuaW1hdGlvbiAoIGZvciBtb2JpbGUgKVxyXG5jb25zdCBzcGFuUGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhblBob25lJylcclxuXHJcbnNwYW5QaG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhcicpXHJcblxyXG4gICAgaWYgKHNpZGVCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZUxlZnRQaG9uZScpKSB7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZUxlZnRQaG9uZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVMZWZ0UGhvbmUnKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vIEluc2VydCBjdXJyZW50IGRhdGUgaW4gdGhlIHN2Z1xyXG5jb25zdCB0b2RheVN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheURhdGUnKVxyXG5cclxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxudG9kYXlTdmcudGV4dENvbnRlbnQgPSBkYXRlLmdldFVUQ0RhdGUoKVxyXG5cclxuXHJcbi8vIE9wZW4gJiBDbG9zZSBNb2R1bGVcclxuY29uc3QgbW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZScpXHJcbi8vIE9wZW4gTW9kYWwgQnV0dG9uc1xyXG5jb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbHVzSWNvbicpXHJcblxyXG4vLyBDbG9zZSBNb2RhbCBCdXR0b25zXHJcbmNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0JylcclxuY29uc3QgZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0TGlzdCcpXHJcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxMaXN0JylcclxuXHJcblxyXG4vLyBwbHVzSWNvbiAmIG5ld0xpc3RCdG4gYXJlIHR3byBkaWZmZXJlbnQgYnRucyBidXQgc2VydmVzIHRoZSBzYW1lIHB1cnBvc2UuXHJcbnBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgIGFkZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QnRuT25lKCkge1xyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0xpc3RCdXR0b24nKSkge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0QnV0dG9uJykgXHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgICAgICAgICBhZGQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbnNldEludGVydmFsKCgpID0+IHtcclxuICAgIHNldEJ0bk9uZSgpXHJcbn0pXHJcblxyXG5cclxuYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcblxyXG5lZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcblxyXG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGaXZlJylcclxuICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBwcm9qZWN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgY2xlYW5JbnB1dCgpXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vIG5ldyBwcm9qZWN0IGJ1dHRvblxyXG5jb25zdCBtb2R1bGUzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJNb2R1bGUnKVxyXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKVxyXG5cclxuXHJcbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2R1bGUzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSlcclxuXHJcblxyXG4vLyBGb3Igb3BlbmluZyBTaWRlQmFyIFByb2plY3QgTW9kdWxlIFxyXG5jb25zdCBuZXdQcm9qZWN0SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0SWNvbicpXHJcbmNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvamVjdCcpXHJcblxyXG5cclxubmV3UHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJNb2R1bGUnKVxyXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJylcclxuICAgIHByb2plY3RNb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gJydcclxufSlcclxuXHJcblxyXG5jYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdE1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyTW9kdWxlJykgICAgXHJcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKVxyXG4gICAgcHJvamVjdE1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xyXG59KVxyXG4iLCIvLyDwn6aaIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgXHJcbi8vIGRlYWxzIHdpdGggcmVuZGVyaW5nIG9uIHRoZSBET00uXHJcblxyXG5cclxuLy8gMS4gRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHBhZ2UgXHJcbmNvbnN0IHJlbmRlck5ld1BhZ2UgPSAodGl0bGUpID0+IHtcclxuICAgIGNvbnN0IFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlU3R5bGUnKVxyXG4gICAgUGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRPbmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRPbmVPbmVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0ndGl0bGVPZlBhZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRPbmVUd29cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9J25ld0xpc3RCdXR0b24nIGNsYXNzPVwiaW52ZXJ0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0IDMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9XCJqZDRGQmdcIiBmaWxsPVwiI2ZmZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkgOGg3YS41LjUgMCAxIDEgMCAxSDl2N2EuNS41IDAgMSAxLTEgMFY5SDFhLjUuNSAwIDAgMSAwLTFoN1YxYS41LjUgMCAwIDEgMSAwdjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgbWFzaz1cInVybCgjamQ0RkJnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0tNC0zaDI0djI0SC00elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIExpc3RcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlQ29udGVudFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIFBhZ2VcclxufVxyXG5cclxuXHJcbi8vIFJlbmRlclBhZ2UgJiBTaG93UGFnZSBkbyBzaW1pbGFyIHRoaW5ncy4gQnV0IHJlbmRlclBhZ2UgZGVhbHMgd2l0aCB0aGUgbG9jYWwgc3RvcmFnZS5cclxuXHJcbi8vIDIuIEZ1bmN0aW9uIHRvIHJlbmRlciBhIHBhZ2UgdG8gdGhlIGRvbVxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhZ2UpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUGFnZScsIHBhZ2UuaW5uZXJIVE1MKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKVxyXG59XHJcblxyXG5cclxuLy8gMy4gRnVuY3Rpb24gdG8gc2hvdyBhIHBhZ2UgdG8gdGhlIGRvbS5cclxuZnVuY3Rpb24gc2hvd1BhZ2UoZWwpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICBjb25zdCBjdXJQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGN1clBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZVN0eWxlJylcclxuICAgIGN1clBhZ2UuaW5uZXJIVE1MID0gZWxcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VyUGFnZSlcclxufVxyXG5cclxuXHJcbi8vIDQuIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0bGlzdCBlbGVtZW50XHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0RWxlbWVudChwcm9qZWN0VGl0bGUpIHtcclxuICAgIGlmIChwcm9qZWN0VGl0bGUgPT09ICdJbmJveCcgfHwgcHJvamVjdFRpdGxlID09PSAnVG9kYXknIHx8IHByb2plY3RUaXRsZSA9PT0gJ01vbnRoJykge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0JylcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0JylcclxuICAgICAgICBjb25zdCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBkaXZPbmUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGVcclxuICAgICAgICBjb25zdCBkaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBkaXZUd28uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdCcpXHJcbiAgICAgICAgZGl2VHdvLmlubmVySFRNTCA9ICc8aDEgY2xhc3M9XCJkZWxldGVQcm9qZWN0QnRuXCI+eDwvaDE+J1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2T25lKVxyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2VHdvKVxyXG4gICAgICAgIFxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobGlzdClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIDUuIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyB0b2RvbGlzdCBlbGVtZW50XHJcbmZ1bmN0aW9uIHJlbmRlclRvZG9MaXN0RWxlbWVudCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVkYXRlKSB7XHJcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpXHJcblxyXG4gICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kb1N0eWxlJylcclxuICAgIHRvZG9FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdkaXZPbmUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkaXZPbmVPbmUnPlxyXG4gICAgICAgICAgICAgICAgPHA+JHt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3ByaW9yaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7ZHVlZGF0ZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rpdk9uZVR3byc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdkZWxldGUnIGlkPSdkZWxldGVUb2RvJz7inYw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2VkaXQnIGlkPSdlZGl0VG9kbyc+8J+UhDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdkaXZUd28nPlxyXG4gICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudClcclxufVxyXG5cclxuXHJcbi8vIDYuIEZ1bmN0aW9uIHRvIGNsZWFuIHRoZSBpbnB1dCBmaWVsZFxyXG5mdW5jdGlvbiBjbGVhbklucHV0KCkge1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZScpLnZhbHVlID0gJydcclxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGUnKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJykudmFsdWUgPSAnJ1xyXG59XHJcblxyXG5cclxuLy8gNy4gRnVuY3Rpb24gdG8gZGVsZXRlIGV2ZXJ5IGRvbSBlbGVtZW50IGluIGEgZGl2XHJcbmZ1bmN0aW9uIGRlbGV0ZUFsbChwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyA4LiBGdW5jdGlvbiB0byBjcmVhdGUgbmV3IG9wdGlvbnMgXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMocHJvamVjdFRpdGxlKSB7XHJcbiAgICBsZXQgYWxsT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJvamVjdHMnKVxyXG4gICAgY29uc3QgbmV3T3B0aW9uID0gbmV3IE9wdGlvbihwcm9qZWN0VGl0bGUsIHByb2plY3RUaXRsZSlcclxuICAgIGFsbE9wdGlvbnMuYWRkKG5ld09wdGlvbiwgbnVsbClcclxuICAgIHJldHVybiBuZXdPcHRpb25cclxufVxyXG5cclxuXHJcbi8vICAgRnVuY3Rpb24gdG8gcmVuZGVyIG9wdGlvbnMgXHJcbmZ1bmN0aW9uIHJlbmRlck9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0cycpXHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uLmlubmVySFRNTCA9IGA8b3B0aW9uIHZhbHVlPSR7b3B0aW9uc30+JHtvcHRpb25zfTwvb3B0aW9uPmBcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBcclxuICAgIHJlbmRlck5ld1BhZ2UsIHJlbmRlclBhZ2UsIHNob3dQYWdlLCByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQsIFxyXG4gICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50LCBjbGVhbklucHV0LCBkZWxldGVBbGwsIGNyZWF0ZU9wdGlvbnMsXHJcbiAgICByZW5kZXJPcHRpb25zXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU2FzcyBmaWxlcyDwn5SuXHJcbmltcG9ydCcuL3Nhc3MvbWFpbi5zY3NzJ1xyXG5cclxuXHJcbi8vIEphdmFTY3JpcHRcclxuaW1wb3J0IFBhaW50ZG9tIGZyb20gJy4vTW9kdWxlcy9QYWludGRvbSdcclxuaW1wb3J0IFVJIGZyb20gJy4vTW9kdWxlcy9VSSciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=