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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes slideLeftPhone {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 30rem;\n    opacity: 1;\n  }\n}\n.slideLeftPhone {\n  animation: slideLeftPhone 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent {\n    width: 95%;\n  }\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer {\n    grid-template-columns: 0.9fr 3fr;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer label {\n    font-size: 1.2rem;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .btnContainer {\n    grid-template-columns: 1fr;\n  }\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne #spanPhone {\n  display: none;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spanPhone {\n    display: grid;\n  }\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spann {\n    display: none;\n  }\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main {\n    grid-template-columns: 0 1fr;\n  }\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar {\n    z-index: 1000;\n    height: 100vh;\n    width: 0rem;\n    opacity: 0;\n    grid-template-rows: 20% 80%;\n  }\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #000000;\n  font-size: 1.2rem;\n  font-weight: 900;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n  display: flex;\n  justify-content: space-between;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn {\n  font-size: 1.2rem;\n  color: #808080;\n  margin-right: 1.5rem;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn:hover {\n  color: #000;\n  transform: rotate(360);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarModule {\n  top: 0rem;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent {\n  border: solid red;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  border-radius: 5px;\n  height: 30%;\n  width: 40%;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent {\n    width: 95%;\n    height: 20%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  height: 80%;\n  width: 80%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n    height: 50%;\n    width: 100%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n    height: 60%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 1rem 0 0;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n    font-size: 1.2rem;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne input {\n  height: 50%;\n  width: 70%;\n  font-size: 1.8rem;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo button {\n  cursor: pointer;\n  height: 3rem;\n  width: 8rem;\n  margin: 0 1rem 0 0;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .content {\n  display: grid;\n}\nmain .content .pageStyle {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle {\n    grid-template-rows: 10% 90%;\n  }\n}\nmain .content .pageStyle .contentOne {\n  display: grid;\n}\nmain .content .pageStyle .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .pageStyle .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .pageStyle .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .contentOne .contentOneTwo {\n    display: none;\n  }\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .pageStyle .pageContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n    grid-template-columns: 2fr 1fr 1fr;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n    font-size: 1.1rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divTwo p {\n    font-size: 1rem;\n    letter-spacing: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/global/_global.scss","webpack://./src/sass/main.scss","webpack://./src/sass/global/_animations.scss","webpack://./src/sass/components/navbar.scss","webpack://./src/sass/global/_mixin.scss","webpack://./src/sass/components/mainContent.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap');\r\n\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: inherit;\r\n}\r\n\r\nhtml, body {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes slideLeftPhone {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 30rem;\n    opacity: 1;\n  }\n}\n.slideLeftPhone {\n  animation: slideLeftPhone 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent {\n    width: 95%;\n  }\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer {\n    grid-template-columns: 0.9fr 3fr;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer label {\n    font-size: 1.2rem;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .btnContainer {\n    grid-template-columns: 1fr;\n  }\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne #spanPhone {\n  display: none;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spanPhone {\n    display: grid;\n  }\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spann {\n    display: none;\n  }\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main {\n    grid-template-columns: 0 1fr;\n  }\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar {\n    z-index: 1000;\n    height: 100vh;\n    width: 0rem;\n    opacity: 0;\n    grid-template-rows: 20% 80%;\n  }\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #000000;\n  font-size: 1.2rem;\n  font-weight: 900;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n  display: flex;\n  justify-content: space-between;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn {\n  font-size: 1.2rem;\n  color: #808080;\n  margin-right: 1.5rem;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn:hover {\n  color: #000;\n  transform: rotate(360);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarModule {\n  top: 0rem;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent {\n  border: solid red;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  border-radius: 5px;\n  height: 30%;\n  width: 40%;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent {\n    width: 95%;\n    height: 20%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  height: 80%;\n  width: 80%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n    height: 50%;\n    width: 100%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n    height: 60%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 1rem 0 0;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n    font-size: 1.2rem;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne input {\n  height: 50%;\n  width: 70%;\n  font-size: 1.8rem;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo button {\n  cursor: pointer;\n  height: 3rem;\n  width: 8rem;\n  margin: 0 1rem 0 0;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .content {\n  display: grid;\n}\nmain .content .pageStyle {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle {\n    grid-template-rows: 10% 90%;\n  }\n}\nmain .content .pageStyle .contentOne {\n  display: grid;\n}\nmain .content .pageStyle .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .pageStyle .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .pageStyle .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .contentOne .contentOneTwo {\n    display: none;\n  }\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .pageStyle .pageContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n    grid-template-columns: 2fr 1fr 1fr;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n    font-size: 1.1rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divTwo p {\n    font-size: 1rem;\n    letter-spacing: 0;\n  }\n}","@keyframes slideDown {\r\n    0% {\r\n        opacity: 0;\r\n        height: 0rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n}\r\n\r\n.slideDown {\r\n    animation: slideDown 200ms ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideUp {\r\n    0% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.slideUp {\r\n    animation: slideUp 200ms ease-in-out forwards;\r\n}\r\n\r\n\r\n@keyframes slideLeft {\r\n    0% {\r\n        grid-template-columns: 22% 78%;\r\n    }\r\n\r\n    100% {\r\n        grid-template-columns: 0% 100%;\r\n    }\r\n}\r\n\r\n.slideLeft {\r\n    animation: slideLeft 0.5s ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideLeftPhone {\r\n    0% {\r\n        width: 0;\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        width: 30rem;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.slideLeftPhone {\r\n    animation: slideLeftPhone 0.5s ease-in-out forwards;\r\n}\r\n\r\n@keyframes rotateDown {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n.rotateDown {\r\n    animation: rotateDown 200ms ease-in-out forwards;\r\n}\r\n\r\n",".navStyle {\r\n    height: 5rem;\r\n    background: #ff4500;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .module {\r\n        background: #e9e9e983;\r\n        display: none;\r\n        place-items: center;\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n        .moduleContent {\r\n            background: #fff;\r\n            border: none;\r\n            border-radius: 2rem;\r\n            display: grid;\r\n            place-items: center;\r\n            height: 50%;\r\n            width: 40%;\r\n            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\r\n\r\n            @include respond(phone) {\r\n                width: 95%;\r\n            }\r\n\r\n            .formTodo {\r\n                margin-top: 10px;\r\n                height: 90%;\r\n                width: 90%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: space-between;\r\n\r\n                .inputContainer {\r\n                    height: 4rem;\r\n                    display: grid;\r\n                    grid-template-columns: 1fr 3fr;\r\n\r\n                    @include respond(phone) {\r\n                        grid-template-columns: .9fr 3fr;\r\n                    }\r\n\r\n                    label {\r\n                        display: grid;\r\n                        place-items: center;\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n\r\n                        @include respond(phone) {\r\n                            font-size: 1.2rem;\r\n                        }\r\n                    }\r\n\r\n                    input {\r\n                        height: 3rem;\r\n                        width: 20rem;\r\n                    }\r\n\r\n                    .inputArea {\r\n                        width: 100%;\r\n                        font-size: 1.5rem;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .btnContainer {\r\n                display: grid;\r\n                grid-template-columns: 1fr 2fr;\r\n                height: 90%;\r\n                width: 90%;\r\n\r\n                @include respond(phone) {\r\n                    grid-template-columns: 1fr;\r\n                }\r\n\r\n                .btns {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 7rem;\r\n                        border-radius: 5px;\r\n                        font-weight: 600;\r\n                    }\r\n\r\n                    #addList {\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #editList {\r\n                        display: none;\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelList {\r\n                        outline: none;\r\n                        border: .5px solid #000;\r\n                        background: #fff;\r\n\r\n                        &:hover {\r\n                            background: #ebebeb;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    .navOne {\r\n        justify-content: center;\r\n        align-items: center;\r\n        display: flex;\r\n        width: 10rem;\r\n\r\n        .spanStyle {\r\n            cursor: pointer;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n\r\n                :first-child {\r\n                    transform: rotate(45deg);\r\n                    margin-bottom: 0;\r\n                    margin-left: 2px;\r\n                }\r\n\r\n                :not(:first-child):not(:last-child) {\r\n                    display: none;\r\n                }\r\n\r\n                :last-child {\r\n                    transform: rotate(-45deg);\r\n                    margin-left: 2px;\r\n                }\r\n            }\r\n\r\n            span {\r\n                cursor: pointer;\r\n                border: solid #ffffff .5px;\r\n                background: #fff;\r\n                width: 15px;\r\n                transform-origin: 0px 1px;\r\n                transition: ease-in-out 0.7s;\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: -2px;\r\n            }\r\n\r\n            :not(:first-child):not(:last-child) {\r\n                margin-bottom: -2px;\r\n            }\r\n        }\r\n\r\n        #spanPhone {\r\n            display: none;\r\n\r\n            @include respond(phone) {\r\n                display: grid;\r\n            }\r\n        }\r\n    \r\n        #spann {\r\n\r\n            @include respond(phone) {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        .homeIcon {\r\n            height: 2rem;\r\n            width: 3.5rem;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            cursor: pointer;\r\n            margin: 0 1rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n            }\r\n\r\n            #homeIcon {\r\n                cursor: pointer;\r\n                color: #fff;\r\n                font-size: 2rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    .navTwo {\r\n        width: 10rem;\r\n        display: grid;\r\n        place-items: center;\r\n\r\n        #plusIcon {\r\n            cursor: pointer;\r\n            color: #fff;\r\n            font-size: 2rem;\r\n\r\n            &:hover {\r\n                transform: rotate(360deg);\r\n                transition: 0.7s ease-in-out;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n","@mixin respond($breakpoint) {\r\n    @if $breakpoint == phone {\r\n        @media (min-width: 320px) and (max-width: 700px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == tab-port {\r\n        @media (min-width: 701px) and (max-width: 992px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == tab-land {\r\n        @media (min-width: 993px) and (max-width: 1312px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == desk {\r\n        @media (min-width: 1313px) and (max-width: 1500px) {\r\n            @content;\r\n        }\r\n    }\r\n};","main {\r\n    display: grid;\r\n    grid-template-columns: 22% 78%;\r\n    height: 52.5rem;\r\n\r\n    @include respond(phone) {\r\n        grid-template-columns: 0 1fr;\r\n    }\r\n\r\n\r\n    .sideBar {\r\n        background: #f0f0f0;\r\n        display: grid;\r\n        grid-template-rows: 30% 70%;\r\n\r\n        @include respond(phone) {\r\n            z-index: 1000;\r\n            height: 100vh;\r\n            width: 0rem;\r\n            opacity: 0;\r\n            grid-template-rows: 20% 80%;\r\n        }\r\n\r\n        .sideBarOne {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            .sideBarContainer {\r\n                cursor: pointer;\r\n                border: solid .3px #f0f0f0;\r\n                border-radius: 5px;\r\n                height: 30px;\r\n                width: 70%;\r\n                margin: 5px 0;\r\n                display: flex;\r\n                align-items: center;\r\n                padding: 5px;\r\n\r\n                &:hover {\r\n                    background: #d8d8d8b0;\r\n                }\r\n\r\n                .inbox {\r\n                    color: #44b4ff;\r\n                }\r\n\r\n                .day {\r\n                    color: #03da03;\r\n                }\r\n\r\n                .project {\r\n                    color: #8f49ff;\r\n                }\r\n\r\n                h1 {\r\n                    margin: 0 6px;\r\n                    font-size: 1.3rem;\r\n                    font-family: Open Sans, monospace, sans-serif;\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarTwo {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            \r\n            .projectDefault {\r\n                align-self: flex-end;\r\n                cursor: pointer;\r\n                height: 3rem;\r\n                width: 85%;\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                #arrow {\r\n                    color: #000000;\r\n                    font-size: 1.2rem;\r\n                    font-weight: 900;\r\n                    margin: 0 1rem;\r\n                    transition: 200ms ease-in-out;\r\n                }\r\n\r\n                h1 {\r\n                    font-size: 1.5rem;\r\n                    font-family: Open Sans, sans-serif;\r\n                }\r\n\r\n                #newProjectIcon {\r\n                    height: 1.8rem;\r\n                    margin-left: 120px;\r\n\r\n                    &:hover {\r\n                        transform: rotate(360deg);\r\n                        transition: 0.7s ease-in-out;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .projectList {\r\n                align-self: flex-end;\r\n                opacity: 0;\r\n                height: 0;\r\n                width: 80%;\r\n\r\n                .list {\r\n                    cursor: pointer;\r\n                    margin: 1rem 0;\r\n                    height: 3rem;\r\n                    border-radius: 5px;\r\n                    display: grid;\r\n                    align-items: center;\r\n                    padding: 5px 0 5px 5px;\r\n                    display: flex;\r\n                    justify-content: space-between;\r\n\r\n                    &:hover {\r\n                        background: #d8d8d8b0;\r\n                    }\r\n\r\n                    p {\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n                    }\r\n\r\n                    .deleteProjectBtn {\r\n                        font-size: 1.2rem;\r\n                        color: #808080;\r\n                        margin-right: 1.5rem;\r\n\r\n                        &:hover {\r\n                            color: #000;\r\n                            transform: rotate(360);\r\n                            transition: 0.7s ease-in-out;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarModule {\r\n            top: 0rem;\r\n            height: 100%;\r\n            width: 100%;\r\n            position: absolute;\r\n            background: #e9e9e983;\r\n            display: none;\r\n            place-items: center;\r\n\r\n            .sideBarModuleContent {\r\n                border: solid red;\r\n                background: #fff;\r\n                box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\r\n                border-radius: 5px;\r\n                height: 30%;\r\n                width: 40%;\r\n                display: grid;\r\n                grid-template-columns: 1fr;\r\n                place-items: center;\r\n\r\n                @include respond(phone) {\r\n                    width: 95%;\r\n                    height: 20%;\r\n                }\r\n\r\n                .sideBarModuleContentDivOne, .sideBarModuleContentDivTwo {\r\n                    height: 80%;\r\n                    width: 80%;\r\n\r\n                    @include respond(phone) {\r\n                        height: 50%;\r\n                        width: 100%;\r\n                    }\r\n                }\r\n\r\n                .sideBarModuleContentDivOne {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    @include respond(phone) {\r\n                        height: 60%;\r\n                    }\r\n\r\n                    label {\r\n                        font-size: 1.6rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                        margin: 0 1rem 0 0;\r\n\r\n                        @include respond(phone) {\r\n                            font-size: 1.2rem;\r\n                        }\r\n                    }\r\n\r\n                    input {\r\n                        height: 50%;\r\n                        width: 70%;\r\n                        font-size: 1.8rem;\r\n                    }\r\n                }\r\n\r\n                .sideBarModuleContentDivTwo {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 8rem;\r\n                        margin: 0 1rem 0 0;\r\n                        border: none;\r\n                        outline: none;\r\n                        border-radius: 5px;\r\n                    }\r\n\r\n                    #addProject {\r\n                        color: #fff;\r\n                        background: #ff4500;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelProject {\r\n                        color: #fff;\r\n                        background: #ff4500;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .content {\r\n        display: grid;\r\n\r\n        .pageStyle {\r\n            display: grid;\r\n            grid-template-rows: .5fr 3fr;\r\n\r\n            @include respond(phone) {\r\n                grid-template-rows: 10% 90%;\r\n            }\r\n\r\n            .contentOne {\r\n                display: grid;\r\n    \r\n                .contentOneOne {\r\n                    margin: 1rem 2rem;\r\n    \r\n                    h1 {\r\n                        cursor: pointer;\r\n                        margin: 1rem 2rem;\r\n                        font-size: 1.8rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                    }\r\n                }\r\n    \r\n                .contentOneTwo {\r\n                    margin: 1rem 4rem;\r\n                    display: flex;\r\n                    align-items: center;\r\n    \r\n                    @include respond(phone) {\r\n                        display: none;\r\n                    }\r\n    \r\n                    h1 {\r\n                        cursor: pointer;\r\n                        font-size: 1.5rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                        margin: 0 5px;\r\n                        color: #474747;\r\n    \r\n                        &:hover {\r\n                            color: #ff4500;\r\n                        }\r\n                    }\r\n    \r\n                    #newListButton {\r\n                        color: #ff4500;\r\n                        cursor: pointer;\r\n                        height: 1.8rem;\r\n                        width: 1.8rem;\r\n    \r\n                        &:hover {\r\n                            color: #fff;\r\n                            border-radius: 100rem;\r\n                            background: #ff4500;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n    \r\n            .pageContent {\r\n                display: flex;\r\n                flex-direction: column;\r\n                align-items: center;\r\n    \r\n                .todoStyle {\r\n                    cursor: pointer;\r\n                    border-top: .5px solid #e2e2e2;\r\n                    border-bottom: .5px solid #e2e2e2;\r\n                    min-height: 8rem;\r\n                    max-height: auto;\r\n                    width: 90%;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    place-items: center;\r\n    \r\n                    .divOne {\r\n                        margin: 5px 0;\r\n                        width: 100%;\r\n                        display: grid;\r\n                        grid-template-columns: 3fr 1fr;\r\n                        align-items: center;\r\n    \r\n                        .divOneOne {\r\n                            display: grid;\r\n                            grid-template-columns: repeat(3, 1fr);\r\n    \r\n                            @include respond(phone) {\r\n                                grid-template-columns: 2fr 1fr 1fr;\r\n                            }\r\n    \r\n                            p {\r\n                                font-size: 1.4rem;\r\n                                font-family: Open Sans, cursive, monospace, sans-serif;\r\n    \r\n                                @include respond(phone) {\r\n                                    font-size: 1.1rem;\r\n                                }\r\n                            }\r\n    \r\n                            :not(:first-child):not(:last-child) {\r\n                                display: grid;\r\n                                place-items: center;\r\n                            }\r\n    \r\n                            :last-child {\r\n                                display: grid;\r\n                                place-items: center;\r\n                            }\r\n                        }\r\n    \r\n                        .divOneTwo {\r\n                            display: flex;\r\n                            justify-content: flex-end;\r\n    \r\n                            #deleteTodo {\r\n                                border: .5px solid #000;\r\n                                margin: 0 5px;\r\n                                cursor: pointer;\r\n                                height: 2rem;\r\n                                width: 2rem;\r\n                                border-radius: 5px;\r\n                                color: #ff0000;\r\n                                background: #fff;\r\n        \r\n                                &:hover {\r\n                                    border: none;\r\n                                    color: #fff;\r\n                                    background: #ff0000;\r\n                                }\r\n                            }\r\n    \r\n                            #editTodo {\r\n                                cursor: pointer;\r\n                                height: 2rem;\r\n                                width: 2rem;\r\n                                border-radius: 5px;\r\n                                color: #36d0ff;\r\n                                background: #fff;\r\n                                border: .5px solid #000;\r\n    \r\n                                &:hover {\r\n                                    border: none;\r\n                                    color: #fff;\r\n                                    background: #36d0ff;\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n    \r\n                    .divTwo {\r\n                        height: auto;\r\n                        width: 100%;\r\n    \r\n                        p {\r\n                            color: #808080;\r\n                            font-size: 1.3rem;\r\n                            letter-spacing: .5px;\r\n    \r\n                            @include respond(phone) {\r\n                                font-size: 1rem;\r\n                                letter-spacing: 0;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
const homeIcon = document.getElementById('homeIcon')
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
    const selectBox = document.getElementById('todoProjects')
    // Deleting Project
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.delProject)(projectTitle)
    list.parentNode.removeChild(list)
    // Deleting Project's Options 
    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.delOptions)(projectTitle)
    for (let i = 0; i < allOptions.length; i++) {
        if (allOptions[i] === projectTitle) {
            selectBox.remove(4 + i)
        }
    }
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


homeIcon.addEventListener('click', () => {
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
                        
                        const savedTitle = arr[i].title
                        const savedDescription = arr[i].description
                        const savedPriority = arr[i].priority
                        const savedDueDate = arr[i].dueDate

                        const todoTitle = document.getElementById('todoTitle').value = savedTitle
                        const todoDescription = document.getElementById('todoDescription').value = savedDescription
                        const todoPriority = document.getElementById('todoPriority').value = savedPriority
                        const todoDueDate = document.getElementById('todoDueDate').value = savedDueDate
                    }
                }
            }
        }
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
        ;(0,_Storage__WEBPACK_IMPORTED_MODULE_2__.setCurrentTitle)('Inbox')
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


//  9. Function to render options 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FB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QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVTtBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTTtBQUMzQixxQkFBcUIsU0FBUztBQUM5QixxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVEsR0FBRyxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3dCO0FBQ3hCO0FBQ0E7QUFDQTtBQUN5QyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9QYWludGRvbS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL2RvbWZ1bnRpb25zLmpzIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdCZmYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbn1cXG4uc2xpZGVEb3duIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG59XFxuLnNsaWRlVXAge1xcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxuICAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XFxuICB9XFxufVxcbi5zbGlkZUxlZnQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdFBob25lIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0UGhvbmUgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVEb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG4ucm90YXRlRG93biB7XFxuICBhbmltYXRpb246IHJvdGF0ZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5uYXZTdHlsZSB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUge1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC45ZnIgM2ZyO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciAuaW5wdXRBcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNlZGl0TGlzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAwLjVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDBweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5uYXZPbmUgI3NwYW5uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24gI2hvbWVJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byB7XFxuICB3aWR0aDogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIGhlaWdodDogNTIuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgNzAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjNweCAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmluYm94IHtcXG4gIGNvbG9yOiAjNDRiNGZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5kYXkge1xcbiAgY29sb3I6ICMwM2RhMDM7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLnByb2plY3Qge1xcbiAgY29sb3I6ICM4ZjQ5ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgaDEge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNhcnJvdyB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uIHtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgLmRlbGV0ZVByb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCAuZGVsZXRlUHJvamVjdEJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MCk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIHtcXG4gIHRvcDogMHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gIGJvcmRlcjogc29saWQgcmVkO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOCkgMHB4IDJweCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gIH1cXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lLCBtYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lLCBtYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIHtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgaW5wdXQge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28gYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNhZGRQcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNjYW5jZWxQcm9qZWN0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvICNjYW5jZWxQcm9qZWN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lT25lIHtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVPbmUgaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gIG1hcmdpbjogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6ICM0NzQ3NDc7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byBoMTpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnV0dG9uIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjhyZW07XFxuICB3aWR0aDogMS44cmVtO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gI25ld0xpc3RCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNlMmUyZTI7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgbWluLWhlaWdodDogOHJlbTtcXG4gIG1heC1oZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSB7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHAge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBjdXJzaXZlLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHAge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSA6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZGVsZXRlVG9kbyB7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNlZGl0VG9kbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMzZkMGZmO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG86aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMzZkMGZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdlR3byB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28gcCB7XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbC9fZ2xvYmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFsL19hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvbmF2YmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbC9fbWl4aW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9tYWluQ29udGVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FDWkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VEZU47RUNaRTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VEY047QUFDRjtBQ1hBO0VBQ0ksK0NBQUE7QURhSjs7QUNWQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RURhTjtFQ1ZFO0lBQ0ksVUFBQTtJ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ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQmZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQmZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDByZW07XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG59XFxuLnNsaWRlRG93biB7XFxuICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxufVxcbi5zbGlkZVVwIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xcbiAgMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xcbiAgfVxcbn1cXG4uc2xpZGVMZWZ0IHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVMZWZ0UGhvbmUge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5zbGlkZUxlZnRQaG9uZSB7XFxuICBhbmltYXRpb246IHNsaWRlTGVmdFBob25lIDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlRG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG59XFxuLnJvdGF0ZURvd24ge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4ubmF2U3R5bGUge1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIHtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOWZyIDNmcjtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5mb3JtVG9kbyAuaW5wdXRDb250YWluZXIgLmlucHV0QXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDdyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNhZGRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjZWRpdExpc3Qge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNlZGl0TGlzdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2NhbmNlbExpc3Qge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2NhbmNlbExpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHggMDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGUgc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IHNvbGlkICNmZmZmZmYgMC41cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDE1cHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwcHggMXB4O1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC43cztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAjc3BhblBob25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubmF2U3R5bGUgLm5hdk9uZSAjc3BhblBob25lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubmF2T25lICNzcGFubiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5ob21lSWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcHggMDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uICNob21lSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZTdHlsZSAubmF2VHdvICNwbHVzSWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSA3OCU7XFxuICBoZWlnaHQ6IDUyLjVyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwIDFmcjtcXG4gIH1cXG59XFxubWFpbiAuc2lkZUJhciB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDcwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMHJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMC4zcHggI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5pbmJveCB7XFxuICBjb2xvcjogIzQ0YjRmZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lciAuZGF5IHtcXG4gIGNvbG9yOiAjMDNkYTAzO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5wcm9qZWN0IHtcXG4gIGNvbG9yOiAjOGY0OWZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIGgxIHtcXG4gIG1hcmdpbjogMCA2cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjYXJyb3cge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCBoMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNuZXdQcm9qZWN0SWNvbiB7XFxuICBoZWlnaHQ6IDEuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogODAlO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgcCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IC5kZWxldGVQcm9qZWN0QnRuIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgLmRlbGV0ZVByb2plY3RCdG46aG92ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApO1xcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSB7XFxuICB0b3A6IDByZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk4MztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCB7XFxuICBib3JkZXI6IHNvbGlkIHJlZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTgpIDBweCAycHggNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSB7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIGlucHV0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogOHJlbTtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lT25lIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byB7XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiAjNDc0NzQ3O1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDE6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byAjbmV3TGlzdEJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgd2lkdGg6IDEuOHJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2UyZTJlMjtcXG4gIG1pbi1oZWlnaHQ6IDhyZW07XFxuICBtYXgtaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8ge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogIzM2ZDBmZjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbn1cIixcIkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZURvd24ge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZVVwIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVMZWZ0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlTGVmdFBob25lIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnRQaG9uZSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZURvd24ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlRG93biB7XFxyXFxuICAgIGFuaW1hdGlvbjogcm90YXRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIubmF2U3R5bGUge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgLm1vZHVsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgLm1vZHVsZUNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCA2cHggNnB4O1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmZvcm1Ub2RvIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmlucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuOWZyIDNmcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0QXJlYSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5idG5zIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjYWRkTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjZWRpdExpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjY2FuY2VsTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm5hdk9uZSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcblxcclxcbiAgICAgICAgLnNwYW5TdHlsZSB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2ZmZmZmZiAuNXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC43cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNzcGFuUGhvbmUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAjc3Bhbm4ge1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaG9tZUljb24ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMy41cmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMXB4IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjaG9tZUljb24ge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZUd28ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAjcGx1c0ljb24ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHBob25lIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDEzMTJweCkge1xcclxcbiAgICAgICAgICAgIEBjb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBkZXNrIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzEzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcXHJcXG4gICAgICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn07XCIsXCJtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcclxcbiAgICBoZWlnaHQ6IDUyLjVyZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnNpZGVCYXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJPbmUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC5zaWRlQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIC4zcHggI2YwZjBmMDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmluYm94IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDRiNGZmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kYXkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwM2RhMDM7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ZjQ5ZmY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDZweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJUd28ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0RGVmYXVsdCB7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2Fycm93IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI25ld1Byb2plY3RJY29uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0TGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5saXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlUHJvamVjdEJ0biB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5zaWRlQmFyTW9kdWxlIHtcXHJcXG4gICAgICAgICAgICB0b3A6IDByZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC5zaWRlQmFyTW9kdWxlQ29udGVudCB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgcmVkO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTgpIDBweCAycHggNHB4O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAlO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICNhZGRQcm9qZWN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgI2NhbmNlbFByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gICAgICAgIC5wYWdlU3R5bGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDNmcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNvbnRlbnRPbmUge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgLmNvbnRlbnRPbmVPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDJyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIC5jb250ZW50T25lVHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSA0cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ3NDc0NztcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAjbmV3TGlzdEJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgLnBhZ2VDb250ZW50IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIC50b2RvU3R5bGUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogLjVweCBzb2xpZCAjZTJlMmUyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCAjZTJlMmUyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIC5kaXZPbmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdk9uZU9uZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2T25lVHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkZWxldGVUb2RvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VkaXRUb2RvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNmQwZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNmQwZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgLmRpdlR3byB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBGYWN0b3J5IEZ1bmN0aW9uIHRvIGNyZWF0ZSB0b2Rvc1xyXG5mdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZX1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcclxuICAgIGxldCB0b2RvcyA9IFtdXHJcblxyXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9kb3MsXHJcbiAgICAgICAgdGl0bGUsIFxyXG4gICAgICAgIGFkZFRvZG9cclxuICAgIH0gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdE1hbmFnZXIodGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW11cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2plY3RzQXJyYXksXHJcbiAgICAgICAgdGl0bGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0TWFuYWdlciB9IiwiLy8gVGhpcyBtb2R1bGUgd2lsbCB0YWtlIGNhcmUgb2YgYWxsIHRoZSBET00gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LlxyXG5pbXBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0TWFuYWdlciB9IGZyb20gJy4vRmFjdG9yeSdcclxuaW1wb3J0IHsgXHJcbiAgICByZW5kZXJOZXdQYWdlLCByZW5kZXJQYWdlLCBzaG93UGFnZSwgXHJcbiAgICByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQsIHJlbmRlclRvZG9MaXN0RWxlbWVudCxcclxuICAgIGNsZWFuSW5wdXQsIGRlbGV0ZUFsbCwgY3JlYXRlT3B0aW9ucywgcmVuZGVyT3B0aW9ucywgXHJcbiAgICByZW1vdmVTaWRlQmFyXHJcbn0gZnJvbSAnLi9kb21mdW50aW9ucydcclxuaW1wb3J0IHsgc2V0Q3VycmVudFRpdGxlLCBzZXRQcm9qZWN0LCBkZWxQcm9qZWN0LCBzZXRMaXN0LCBzZXRPcHRpb24sIGRlbE9wdGlvbnMsIGRlbExpc3QsIGVkaXRMaXN0IH0gZnJvbSAnLi9TdG9yYWdlJ1xyXG5cclxuXHJcbi8vIEJ1dHRvbnMgdG8gY2hhbmdlIFBhZ2VzIGJldHdlbm4gSW5ib3gsIFRvZGF5ICYgUHJvamVjdHMuXHJcbmNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVJY29uJylcclxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3hDb250YWluZXInKVxyXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlDb250YWluZXInKVxyXG5jb25zdCBtb250aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb250aENvbnRhaW5lcicpXHJcblxyXG5cclxuLy8gQ3JlYXRlIE5ldyBUb2RvbGlzdCBCdXR0b25cclxuY29uc3QgY3JlYXRlVG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpXHJcbi8vIERlbGV0ZSBUb2RvbGlzdCBCdXR0b25cclxuY29uc3QgZGVsZXRlVG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbi8vIEVkaXQgVG9kb2xpc3QgQnV0dG9uXHJcbi8vIDEuIEJ1dHRvbiB0byBPcGVuIE1vZGFsIFxyXG5jb25zdCBlZGl0VG9kb0xpc3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4vLyAyLiBCdXR0b24gdG8gZWRpdCB0aGUgVG9kb2xpc3RcclxuY29uc3QgZWRpdFRvZG9MaXN0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0TGlzdCcpXHJcbi8vIENyZWF0ZSBQcm9qZWN0IEJ1dHRvblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKVxyXG4vLyBEZWxldGUgUHJvamVjdCBCdXR0b25cclxuY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXHJcbi8vIFJlbmRlcmluZyBQcm9qZWN0J3MgUGFnZVxyXG5jb25zdCBMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXHJcblxyXG5cclxuLy8gR2V0IHRoZSBjdXJyZW50IHBhZ2UgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cclxubGV0IGVkaXRlZEluZGV4XHJcbmxldCBjdXJyZW50UGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQYWdlJylcclxubGV0IGN1cnJlbnRUaXRsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDdXJyZW50VGl0bGUnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDdXJyZW50VGl0bGUnKSA6ICdJbmJveCdcclxuLy8gJiBhcHBlbmQgaXQgdG8gdGhlIERPTS5cclxuc2hvd1BhZ2UoY3VycmVudFBhZ2UpXHJcblxyXG5cclxuLy8gMS4gVGhlIFByb2plY3QgTWFuYWdlclxyXG5jb25zdCBteVByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCdteVByb2plY3RNYW5hZ2VyJylcclxuXHJcbi8vIDIuIEFycmF5IG9mIGFsbCBQcm9qZWN0XHJcbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FsbFByb2plY3QnLCBbXSlcclxubGV0IGFsbFByb2plY3RBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGxQcm9qZWN0JykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGxQcm9qZWN0JykpIDogbXlQcm9qZWN0TWFuYWdlci5wcm9qZWN0c0FycmF5XHJcbi8vIDMuIEFycmF5IG9mIGFsbCBvcHRpb25zXHJcbmxldCBhbGxPcHRpb25zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbE9wdGlvbnMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbE9wdGlvbnMnKSkgOiBbXVxyXG5cclxuLy8gI1JlbmRlcmluZyBBbGwgUHJvamVjdCBUaXRsZXMgb24gU2lkZWJhclxyXG5hbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQoZWwudGl0bGUpXHJcbn0pXHJcbi8vICNSZW5kZXJpbmcgYWxsIHRoZSB0b2RvbGlzdFxyXG5hbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGlmIChlbGVtZW50LnRpdGxlID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG4vLyAjUmVuZGVyaW5nIGFsbCBvcHRpb25zIFxyXG5hbGxPcHRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICByZW5kZXJPcHRpb25zKGVsZW1lbnQpXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gdG9kb2xpc3RDcmVhdGlvbigpIHtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJvamVjdHMnKS52YWx1ZVxyXG4gICAgY29uc3QgYWxsVGl0bGVzID0gYWxsUHJvamVjdEFycmF5Lm1hcChlbCA9PiBlbC50aXRsZSlcclxuXHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1RpdGxlJykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb24nKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRHVlRGF0ZScpLnZhbHVlXHJcblxyXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VDb250ZW50JylcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUaXRsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYWxsVGl0bGVzW2ldID09PSBwcm9qZWN0VGl0bGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IFRvZG8odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9Qcmlvcml0eSwgdG9kb0R1ZURhdGUpXHJcbiAgICAgICAgICAgIHNldExpc3QoaSwgbmV3VG9kbylcclxuICAgICAgICAgICAgZGVsZXRlQWxsKHBhcmVudClcclxuICAgICAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKGFsbFRpdGxlc1tpXSkpXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRUaXRsZShwcm9qZWN0VGl0bGUpXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaXRsZSA9IHByb2plY3RUaXRsZVxyXG4gICAgICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRpdGxlID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9MaXN0RGVsZXRpb24oZSkge1xyXG4gICAgY29uc3QgbGlzdFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudFxyXG4gICAgY29uc3QgYWxsVGl0bGVzID0gYWxsUHJvamVjdEFycmF5Lm1hcChlbCA9PiBlbC50aXRsZSlcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRpdGxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhbGxUaXRsZXNbaV0gPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBkZWxMaXN0KGksIGxpc3RUaXRsZSlcclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXHJcbiAgICAgICAgICAgIGxpc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaXN0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9MaXN0RWRpdGlvbigpIHtcclxuICAgIGNvbnN0IGFsbFRpdGxlcyA9IGFsbFByb2plY3RBcnJheS5tYXAoZWwgPT4gZWwudGl0bGUpXHJcblxyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZScpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHknKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGUnKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb1Byb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0cycpLnZhbHVlXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUaXRsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYWxsVGl0bGVzW2ldID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGVkTGlzdCA9IFRvZG8odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9Qcmlvcml0eSwgdG9kb0R1ZURhdGUpXHJcbiAgICAgICAgICAgIGVkaXRMaXN0KGksIGVkaXRlZExpc3QsIGVkaXRlZEluZGV4KSAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RDcmVhdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QodmFsdWUpXHJcbiAgICAgICAgc2V0UHJvamVjdChuZXdQcm9qZWN0LCBhbGxQcm9qZWN0QXJyYXkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZScpLnZhbHVlXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIHNldFByb2plY3QobmV3UHJvamVjdCwgYWxsUHJvamVjdEFycmF5KVxyXG4gICAgICAgIHJlbmRlclByb2plY3RMaXN0RWxlbWVudChwcm9qZWN0VGl0bGUpXHJcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IGNyZWF0ZU9wdGlvbnMocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXdPcHRpb25zLmlubmVySFRNTFxyXG4gICAgICAgIHNldE9wdGlvbihvcHRpb25zKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJvamVjdERlbGV0aW9uKGUpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50XHJcbiAgICBjb25zdCBzZWxlY3RCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJylcclxuICAgIC8vIERlbGV0aW5nIFByb2plY3RcclxuICAgIGRlbFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgbGlzdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpc3QpXHJcbiAgICAvLyBEZWxldGluZyBQcm9qZWN0J3MgT3B0aW9ucyBcclxuICAgIGRlbE9wdGlvbnMocHJvamVjdFRpdGxlKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxPcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFsbE9wdGlvbnNbaV0gPT09IHByb2plY3RUaXRsZSkge1xyXG4gICAgICAgICAgICBzZWxlY3RCb3gucmVtb3ZlKDQgKyBpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0cygpIHtcclxuICAgIGlmIChhbGxQcm9qZWN0QXJyYXkubGVuZ3RoID49IDMpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdENyZWF0aW9uKCdJbmJveCcpXHJcbiAgICAgICAgcHJvamVjdENyZWF0aW9uKCdUb2RheScpXHJcbiAgICAgICAgcHJvamVjdENyZWF0aW9uKCdNb250aCcpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jcmVhdGVEZWZhdWx0UHJvamVjdHMoKVxyXG5cclxuXHJcbi8vICNSZW5kZXJpbmcgUHJvamVjdCBQYWdlXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUGFnZScpKSB7XHJcbiAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdJbmJveCcpKVxyXG4gICAgICAgIHNldEN1cnJlbnRUaXRsZSgnSW5ib3gnKVxyXG4gICAgICAgIGFsbFByb2plY3RBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRvZG9MaXN0RWxlbWVudChlbC50aXRsZSwgZWwuZGVzY3JpcHRpb24sIGVsLnByaW9yaXR5LCBlbC5kdWVkYXRlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmhvbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdJbmJveCcpKVxyXG4gICAgc2V0Q3VycmVudFRpdGxlKCdJbmJveCcpXHJcbiAgICBjdXJyZW50VGl0bGUgPSAnSW5ib3gnXHJcbiAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdJbmJveCcpKVxyXG4gICAgc2V0Q3VycmVudFRpdGxlKCdJbmJveCcpXHJcbiAgICBjdXJyZW50VGl0bGUgPSAnSW5ib3gnXHJcbiAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdUb2RheScpKVxyXG4gICAgc2V0Q3VycmVudFRpdGxlKCdUb2RheScpXHJcbiAgICBjdXJyZW50VGl0bGUgPSAnVG9kYXknXHJcbiAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vbnRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdNb250aCcpKVxyXG4gICAgc2V0Q3VycmVudFRpdGxlKCdNb250aCcpXHJcbiAgICBjdXJyZW50VGl0bGUgPSAnTW9udGgnXHJcbiAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbkxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QnKSkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnRcclxuICAgICAgICByZW5kZXJQYWdlKHJlbmRlck5ld1BhZ2UocHJvamVjdFRpdGxlKSlcclxuICAgICAgICBzZXRDdXJyZW50VGl0bGUocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIGN1cnJlbnRUaXRsZSA9IHByb2plY3RUaXRsZVxyXG4gICAgICAgIGFsbFByb2plY3RBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRvZG9MaXN0RWxlbWVudChlbC50aXRsZSwgZWwuZGVzY3JpcHRpb24sIGVsLnByaW9yaXR5LCBlbC5kdWVEYXRlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gI3RvZG9MaXN0IENyZWF0aW9uXHJcbmNyZWF0ZVRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9kb2xpc3RDcmVhdGlvbigpXHJcbiAgICBjbGVhbklucHV0KClcclxufSlcclxuXHJcblxyXG4vLyAjdG9kb2xpc3QgRGVsZXRpb25cclxuZGVsZXRlVG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuICAgICAgICB0b2RvTGlzdERlbGV0aW9uKGUpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gI3RvZG9saXN0IEVkaXRpb25cclxuLy8gMS4gT3BlbiB0aGUgbW9kdWxlIHRvIGVkaXQgdGhlIGxpc3RcclxuZWRpdFRvZG9MaXN0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZScpXHJcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZExpc3QnKVxyXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdExpc3QnKVxyXG4gICAgICAgIGNvbnN0IGlucHV0Rml2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dEZpdmUnKVxyXG5cclxuICAgICAgICBtb2R1bGVzLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgICAgICBhZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICBpbnB1dEZpdmUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgICAgICBjb25zdCBhbGxUaXRsZXMgPSBhbGxQcm9qZWN0QXJyYXkubWFwKGVsID0+IGVsLnRpdGxlKVxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxUaXRsZXNbaV0gPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gYWxsUHJvamVjdEFycmF5W2ldLnRvZG9zXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0udGl0bGUgPT09IHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGVkSW5kZXggPSBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZFRpdGxlID0gYXJyW2ldLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkRGVzY3JpcHRpb24gPSBhcnJbaV0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWRQcmlvcml0eSA9IGFycltpXS5wcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZER1ZURhdGUgPSBhcnJbaV0uZHVlRGF0ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZScpLnZhbHVlID0gc2F2ZWRUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWUgPSBzYXZlZERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHknKS52YWx1ZSA9IHNhdmVkUHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGUnKS52YWx1ZSA9IHNhdmVkRHVlRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuLy8gMi4gRWRpdCB0aGUgYWN0dWFsIHRvZG9saXN0XHJcbmVkaXRUb2RvTGlzdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpXHJcbiAgICB0b2RvTGlzdEVkaXRpb24oKVxyXG4gICAgZGVsZXRlQWxsKGxpc3QpXHJcbiAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbi8vICNQcm9qZWN0IENyZWF0aW9uXHJcbmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9qZWN0Q3JlYXRpb24oKVxyXG59KVxyXG5cclxuXHJcbi8vICNQcm9qZWN0IERlbGV0aW9uXHJcbmRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlUHJvamVjdEJ0bicpKSB7XHJcbiAgICAgICAgcHJvamVjdERlbGV0aW9uKGUpXHJcbiAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKCdJbmJveCcpKVxyXG4gICAgICAgIHNldEN1cnJlbnRUaXRsZSgnSW5ib3gnKVxyXG4gICAgICAgIGN1cnJlbnRUaXRsZSA9ICdJbmJveCdcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCB7IGFsbFByb2plY3RBcnJheSwgYWxsT3B0aW9ucyB9IiwiaW1wb3J0IHsgYWxsUHJvamVjdEFycmF5LCBhbGxPcHRpb25zIH0gZnJvbSBcIi4vUGFpbnRkb21cIlxyXG5cclxuXHJcbmNvbnN0IHNldEN1cnJlbnRUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0N1cnJlbnRUaXRsZScsIHRpdGxlKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIHNhdmUgcHJvamVjdCBpbiBsb2NhbHN0b3JhZ2VcclxuY29uc3Qgc2V0UHJvamVjdCA9IChwcm9qZWN0LCBhbGxQcm9qZWN0cykgPT4ge1xyXG4gICAgYWxsUHJvamVjdEFycmF5LnB1c2gocHJvamVjdClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGRlbGV0ZSBwcm9qZWN0IGZyb20gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IGRlbFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XHJcbiAgICBsZXQgYWxsUHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsUHJvamVjdCcpKS5maWx0ZXIoZWwgPT4gZWwudGl0bGUgIT09IHByb2plY3RUaXRsZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBzYXZlIGxpc3QgaW4gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IHNldExpc3QgPSAoaW5kZXgsIG5ld1RvZG8pID0+IHtcclxuICAgIGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MucHVzaChuZXdUb2RvKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FsbFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0QXJyYXkpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGRlbGV0ZSBsaXN0IGZyb20gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IGRlbExpc3QgPSAoaW5kZXgsIGxpc3RUaXRsZSkgPT4ge1xyXG4gICAgbGV0IGNoYW5nZWRUb2RvcyA9IGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MuZmlsdGVyKGVsID0+IGVsLnRpdGxlICE9PSBsaXN0VGl0bGUpXHJcbiAgICBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zID0gY2hhbmdlZFRvZG9zXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RBcnJheSkpXHJcbn1cclxuXHJcblxyXG4vLyAjRnVuY3Rpb24gdG8gZWRpdCBsaXN0IGluIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBlZGl0TGlzdCA9IChpbmRleCwgZWRpdGVkTGlzdCwgZWRpdGVkSW5kZXgpID0+IHtcclxuICAgIGxldCBjaGFuZ2VkVG9kb3MgPSBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zXHJcbiAgICBsZXQgbmV3QXJyID0gY2hhbmdlZFRvZG9zLnNwbGljZShlZGl0ZWRJbmRleCwgMSwgZWRpdGVkTGlzdClcclxuICAgIGFsbFByb2plY3RBcnJheVtpbmRleF0udG9kb3MgPSBjaGFuZ2VkVG9kb3NcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBzYXZlIG9wdGlvbnMgaW4gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IHNldE9wdGlvbiA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBhbGxPcHRpb25zLnB1c2gob3B0aW9ucylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxPcHRpb25zJywgSlNPTi5zdHJpbmdpZnkoYWxsT3B0aW9ucykpXHJcbn1cclxuXHJcblxyXG4vLyAjRnVuY3Rpb24gdG8gZGVsZXRlIG9wdGlvbnMgZnJvbSBsb2NhbHN0b3JhZ2VcclxuY29uc3QgZGVsT3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBsZXQgYWxsT3B0aW9ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbE9wdGlvbnMnKSkuZmlsdGVyKGVsID0+IGVsICE9PSBvcHRpb25zKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FsbE9wdGlvbnMnLCBKU09OLnN0cmluZ2lmeShhbGxPcHRpb25zKSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHNldEN1cnJlbnRUaXRsZSwgc2V0UHJvamVjdCwgZGVsUHJvamVjdCwgc2V0TGlzdCwgZGVsTGlzdCwgZWRpdExpc3QsIHNldE9wdGlvbiwgZGVsT3B0aW9ucyB9IiwiaW1wb3J0IHsgY2xlYW5JbnB1dCB9IGZyb20gXCIuL2RvbWZ1bnRpb25zXCJcclxuXHJcblxyXG4vLyBQcm9qZWN0IGxpc3QgYW5pbWF0aW9uXHJcbmNvbnN0IGFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93JylcclxuXHJcbmFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKVxyXG5cclxuICAgIGlmIChwcm9qZWN0TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlRG93bicpKSB7XHJcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVEb3duJylcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdzbGlkZVVwJylcclxuICAgICAgICBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGVEb3duJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgnc2xpZGVEb3duJylcclxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZVVwJylcclxuICAgICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKCdyb3RhdGVEb3duJylcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vLyBTaWRlIGJhciBhbmltYXRpb24gKCBmb3IgZGVza3RvcCApXHJcbmNvbnN0IG5hdlNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bhbm4nKVxyXG5cclxubmF2U3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuICAgIGNvbnN0IHNpZGVCYXJPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhck9uZScpXHJcbiAgICBjb25zdCBzaWRlQmFyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJUd28nKVxyXG5cclxuICAgIGlmIChtYWluQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlTGVmdCcpKSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVMZWZ0JylcclxuICAgICAgICBzaWRlQmFyT25lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICBzaWRlQmFyVHdvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2xpZGVMZWZ0JylcclxuICAgICAgICBzaWRlQmFyT25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBzaWRlQmFyVHdvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vLyBTaWRlIGJhciBhbmltYXRpb24gKCBmb3IgbW9iaWxlIClcclxuY29uc3Qgc3BhblBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYW5QaG9uZScpXHJcblxyXG5zcGFuUGhvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKVxyXG5cclxuICAgIGlmIChzaWRlQmFyLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVMZWZ0UGhvbmUnKSkge1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVMZWZ0UGhvbmUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlTGVmdFBob25lJylcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vLyBJbnNlcnQgY3VycmVudCBkYXRlIGluIHRoZSBzdmdcclxuY29uc3QgdG9kYXlTdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlEYXRlJylcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbnRvZGF5U3ZnLnRleHRDb250ZW50ID0gZGF0ZS5nZXRVVENEYXRlKClcclxuXHJcblxyXG4vLyBPcGVuICYgQ2xvc2UgTW9kdWxlXHJcbmNvbnN0IG1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGUnKVxyXG4vLyBPcGVuIE1vZGFsIEJ1dHRvbnNcclxuY29uc3QgcGx1c0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGx1c0ljb24nKVxyXG5cclxuLy8gQ2xvc2UgTW9kYWwgQnV0dG9uc1xyXG5jb25zdCBhZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpXHJcbmNvbnN0IGVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdExpc3QnKVxyXG5jb25zdCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsTGlzdCcpXHJcblxyXG5cclxuLy8gcGx1c0ljb24gJiBuZXdMaXN0QnRuIGFyZSB0d28gZGlmZmVyZW50IGJ0bnMgYnV0IHNlcnZlcyB0aGUgc2FtZSBwdXJwb3NlLlxyXG5wbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICBhZGQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEJ0bk9uZSgpIHtcclxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0QnV0dG9uJykpIHtcclxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdEJ1dHRvbicpIFxyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgICAgICAgICAgYWRkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBzZXRCdG5PbmUoKVxyXG59KVxyXG5cclxuXHJcbmFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5cclxuZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5cclxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Rml2ZScpXHJcbiAgICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgcHJvamVjdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgIGNsZWFuSW5wdXQoKVxyXG59KVxyXG5cclxuXHJcblxyXG4vLyBuZXcgcHJvamVjdCBidXR0b25cclxuY29uc3QgbW9kdWxlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyTW9kdWxlJylcclxuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0JylcclxuXHJcblxyXG5uZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kdWxlMy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn0pXHJcblxyXG5cclxuLy8gRm9yIG9wZW5pbmcgU2lkZUJhciBQcm9qZWN0IE1vZHVsZSBcclxuY29uc3QgbmV3UHJvamVjdEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEljb24nKVxyXG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFByb2plY3QnKVxyXG5cclxuXHJcbm5ld1Byb2plY3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdE1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyTW9kdWxlJylcclxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpXHJcbiAgICBwcm9qZWN0TW9kdWxlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnXHJcbn0pXHJcblxyXG5cclxuY2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZUJhck1vZHVsZScpICAgIFxyXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJylcclxuICAgIHByb2plY3RNb2R1bGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gJydcclxufSlcclxuIiwiLy8g8J+mmiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IFxyXG4vLyBkZWFscyB3aXRoIHJlbmRlcmluZyBvbiB0aGUgRE9NLlxyXG5cclxuXHJcbi8vIDEuIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBwYWdlIFxyXG5jb25zdCByZW5kZXJOZXdQYWdlID0gKHRpdGxlKSA9PiB7XHJcbiAgICBjb25zdCBQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIFBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZVN0eWxlJylcclxuICAgIFBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50T25lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50T25lT25lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9J3RpdGxlT2ZQYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAke3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50T25lVHdvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGlkPSduZXdMaXN0QnV0dG9uJyBjbGFzcz1cImludmVydFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNCAzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPVwiamQ0RkJnXCIgZmlsbD1cIiNmZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDhoN2EuNS41IDAgMSAxIDAgMUg5djdhLjUuNSAwIDEgMS0xIDBWOUgxYS41LjUgMCAwIDEgMC0xaDdWMWEuNS41IDAgMCAxIDEgMHY3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG1hc2s9XCJ1cmwoI2pkNEZCZylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNLTQtM2gyNHYyNEgtNHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBMaXN0XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZUNvbnRlbnRcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIHJldHVybiBQYWdlXHJcbn1cclxuXHJcblxyXG4vLyBSZW5kZXJQYWdlICYgU2hvd1BhZ2UgZG8gc2ltaWxhciB0aGluZ3MuIEJ1dCByZW5kZXJQYWdlIGRlYWxzIHdpdGggdGhlIGxvY2FsIHN0b3JhZ2UuXHJcblxyXG4vLyAyLiBGdW5jdGlvbiB0byByZW5kZXIgYSBwYWdlIHRvIHRoZSBkb21cclxuZnVuY3Rpb24gcmVuZGVyUGFnZShwYWdlKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1BhZ2UnLCBwYWdlLmlubmVySFRNTClcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSlcclxufVxyXG5cclxuXHJcbi8vIDMuIEZ1bmN0aW9uIHRvIHNob3cgYSBwYWdlIHRvIHRoZSBkb20uXHJcbmZ1bmN0aW9uIHNob3dQYWdlKGVsKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgY29uc3QgY3VyUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjdXJQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2VTdHlsZScpXHJcbiAgICBjdXJQYWdlLmlubmVySFRNTCA9IGVsXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGN1clBhZ2UpXHJcbn1cclxuXHJcblxyXG4vLyA0LiBGdW5jdGlvbiB0byBjcmVhdGUgYSBuZXcgcHJvamVjdGxpc3QgZWxlbWVudFxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQocHJvamVjdFRpdGxlKSB7XHJcbiAgICBpZiAocHJvamVjdFRpdGxlID09PSAnSW5ib3gnIHx8IHByb2plY3RUaXRsZSA9PT0gJ1RvZGF5JyB8fCBwcm9qZWN0VGl0bGUgPT09ICdNb250aCcpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpXHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpXHJcbiAgICAgICAgY29uc3QgZGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgZGl2T25lLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlXHJcbiAgICAgICAgY29uc3QgZGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgZGl2VHdvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3QnKVxyXG4gICAgICAgIGRpdlR3by5pbm5lckhUTUwgPSAnPGgxIGNsYXNzPVwiZGVsZXRlUHJvamVjdEJ0blwiPng8L2gxPidcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGRpdk9uZSlcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGRpdlR3bylcclxuICAgICAgICBcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGxpc3QpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyA1LiBGdW5jdGlvbiB0byBjcmVhdGUgYSBuZXcgdG9kb2xpc3QgZWxlbWVudFxyXG5mdW5jdGlvbiByZW5kZXJUb2RvTGlzdEVsZW1lbnQodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlZGF0ZSkge1xyXG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRlbnQnKVxyXG5cclxuICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG9TdHlsZScpXHJcbiAgICB0b2RvRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nZGl2T25lJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGl2T25lT25lJz5cclxuICAgICAgICAgICAgICAgIDxwPiR7dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwcmlvcml0eX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2R1ZWRhdGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkaXZPbmVUd28nPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZGVsZXRlJyBpZD0nZGVsZXRlVG9kbyc+4p2MPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdlZGl0JyBpZD0nZWRpdFRvZG8nPvCflIQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nZGl2VHdvJz5cclxuICAgICAgICAgICAgPHA+JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpXHJcbn1cclxuXHJcblxyXG4vLyA2LiBGdW5jdGlvbiB0byBjbGVhbiB0aGUgaW5wdXQgZmllbGRcclxuZnVuY3Rpb24gY2xlYW5JbnB1dCgpIHtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcmlvcml0eScpLnZhbHVlID0gJydcclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0cycpLnZhbHVlID0gJydcclxufVxyXG5cclxuXHJcbi8vIDcuIEZ1bmN0aW9uIHRvIGRlbGV0ZSBldmVyeSBkb20gZWxlbWVudCBpbiBhIGRpdlxyXG5mdW5jdGlvbiBkZWxldGVBbGwocGFyZW50KSB7XHJcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gOC4gRnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBvcHRpb25zIFxyXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zKHByb2plY3RUaXRsZSkge1xyXG4gICAgbGV0IGFsbE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJylcclxuICAgIGNvbnN0IG5ld09wdGlvbiA9IG5ldyBPcHRpb24ocHJvamVjdFRpdGxlLCBwcm9qZWN0VGl0bGUpXHJcbiAgICBhbGxPcHRpb25zLmFkZChuZXdPcHRpb24sIG51bGwpXHJcbiAgICByZXR1cm4gbmV3T3B0aW9uXHJcbn1cclxuXHJcblxyXG4vLyAgOS4gRnVuY3Rpb24gdG8gcmVuZGVyIG9wdGlvbnMgXHJcbmZ1bmN0aW9uIHJlbmRlck9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0cycpXHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uLmlubmVySFRNTCA9IGA8b3B0aW9uIHZhbHVlPSR7b3B0aW9uc30+JHtvcHRpb25zfTwvb3B0aW9uPmBcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBcclxuICAgIHJlbmRlck5ld1BhZ2UsIHJlbmRlclBhZ2UsIHNob3dQYWdlLCByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQsIFxyXG4gICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50LCBjbGVhbklucHV0LCBkZWxldGVBbGwsIGNyZWF0ZU9wdGlvbnMsXHJcbiAgICByZW5kZXJPcHRpb25zXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU2FzcyBmaWxlcyDwn5SuXHJcbmltcG9ydCcuL3Nhc3MvbWFpbi5zY3NzJ1xyXG5cclxuXHJcbi8vIEphdmFTY3JpcHRcclxuaW1wb3J0IFBhaW50ZG9tIGZyb20gJy4vTW9kdWxlcy9QYWludGRvbSdcclxuaW1wb3J0IFVJIGZyb20gJy4vTW9kdWxlcy9VSSciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=