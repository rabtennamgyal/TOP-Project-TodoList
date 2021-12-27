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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes slideLeftPhone {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 30rem;\n    opacity: 1;\n  }\n}\n.slideLeftPhone {\n  animation: slideLeftPhone 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent {\n    width: 95%;\n  }\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer {\n    grid-template-columns: 0.9fr 3fr;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer label {\n    font-size: 1.2rem;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .btnContainer {\n    grid-template-columns: 1fr;\n  }\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne #spanPhone {\n  display: none;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spanPhone {\n    display: grid;\n  }\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spann {\n    display: none;\n  }\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main {\n    grid-template-columns: 0 1fr;\n  }\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar {\n    z-index: 1000;\n    height: 100vh;\n    width: 0rem;\n    opacity: 0;\n    grid-template-rows: 20% 80%;\n  }\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #000000;\n  font-size: 1.2rem;\n  font-weight: 900;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n  display: flex;\n  justify-content: space-between;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn {\n  font-size: 1.2rem;\n  color: #808080;\n  margin-right: 1.5rem;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn:hover {\n  color: #000;\n  transform: rotate(360);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarModule {\n  top: 0rem;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  border-radius: 5px;\n  height: 30%;\n  width: 40%;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent {\n    width: 95%;\n    height: 20%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  height: 80%;\n  width: 80%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n    height: 50%;\n    width: 100%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n    height: 60%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 1rem 0 0;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n    font-size: 1.2rem;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne input {\n  height: 50%;\n  width: 70%;\n  font-size: 1.8rem;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo button {\n  cursor: pointer;\n  height: 3rem;\n  width: 8rem;\n  margin: 0 1rem 0 0;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .content {\n  display: grid;\n}\nmain .content .pageStyle {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle {\n    grid-template-rows: 10% 90%;\n  }\n}\nmain .content .pageStyle .contentOne {\n  display: grid;\n}\nmain .content .pageStyle .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .pageStyle .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .pageStyle .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .contentOne .contentOneTwo {\n    display: none;\n  }\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .pageStyle .pageContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n    grid-template-columns: 2fr 1fr 1fr;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n    font-size: 1.1rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divTwo p {\n    font-size: 1rem;\n    letter-spacing: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/global/_global.scss","webpack://./src/sass/main.scss","webpack://./src/sass/global/_animations.scss","webpack://./src/sass/components/navbar.scss","webpack://./src/sass/global/_mixin.scss","webpack://./src/sass/components/mainContent.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap');\r\n\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: inherit;\r\n}\r\n\r\nhtml, body {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Kanit&family=Open+Sans&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n@keyframes slideDown {\n  0% {\n    opacity: 0;\n    height: 0rem;\n  }\n  100% {\n    opacity: 1;\n    height: 10rem;\n  }\n}\n.slideDown {\n  animation: slideDown 200ms ease-in-out forwards;\n}\n\n@keyframes slideUp {\n  0% {\n    opacity: 1;\n    height: 10rem;\n  }\n  100% {\n    opacity: 0;\n    height: 0;\n  }\n}\n.slideUp {\n  animation: slideUp 200ms ease-in-out forwards;\n}\n\n@keyframes slideLeft {\n  0% {\n    grid-template-columns: 22% 78%;\n  }\n  100% {\n    grid-template-columns: 0% 100%;\n  }\n}\n.slideLeft {\n  animation: slideLeft 0.5s ease-in-out forwards;\n}\n\n@keyframes slideLeftPhone {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  100% {\n    width: 30rem;\n    opacity: 1;\n  }\n}\n.slideLeftPhone {\n  animation: slideLeftPhone 0.5s ease-in-out forwards;\n}\n\n@keyframes rotateDown {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(90deg);\n  }\n}\n.rotateDown {\n  animation: rotateDown 200ms ease-in-out forwards;\n}\n\n.navStyle {\n  height: 5rem;\n  background: #ff4500;\n  display: flex;\n  justify-content: space-between;\n}\n.navStyle .module {\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.navStyle .module .moduleContent {\n  background: #fff;\n  border: none;\n  border-radius: 2rem;\n  display: grid;\n  place-items: center;\n  height: 50%;\n  width: 40%;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent {\n    width: 95%;\n  }\n}\n.navStyle .module .moduleContent .formTodo {\n  margin-top: 10px;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer {\n  height: 4rem;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer {\n    grid-template-columns: 0.9fr 3fr;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer label {\n  display: grid;\n  place-items: center;\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .formTodo .inputContainer label {\n    font-size: 1.2rem;\n  }\n}\n.navStyle .module .moduleContent .formTodo .inputContainer input {\n  height: 3rem;\n  width: 20rem;\n}\n.navStyle .module .moduleContent .formTodo .inputContainer .inputArea {\n  width: 100%;\n  font-size: 1.5rem;\n}\n.navStyle .module .moduleContent .btnContainer {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  height: 90%;\n  width: 90%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .module .moduleContent .btnContainer {\n    grid-template-columns: 1fr;\n  }\n}\n.navStyle .module .moduleContent .btnContainer .btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navStyle .module .moduleContent .btnContainer .btns button {\n  cursor: pointer;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList {\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #addList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList {\n  display: none;\n  border: none;\n  margin: 0 1.5rem 0 3rem;\n  background: #ff4500;\n  color: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #editList:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList {\n  outline: none;\n  border: 0.5px solid #000;\n  background: #fff;\n}\n.navStyle .module .moduleContent .btnContainer .btns #cancelList:hover {\n  background: #ebebeb;\n}\n.navStyle .navOne {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  width: 10rem;\n}\n.navStyle .navOne .spanStyle {\n  cursor: pointer;\n  height: 2.4rem;\n  width: 3rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .spanStyle:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .spanStyle:hover :first-child {\n  transform: rotate(45deg);\n  margin-bottom: 0;\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle:hover :not(:first-child):not(:last-child) {\n  display: none;\n}\n.navStyle .navOne .spanStyle:hover :last-child {\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n.navStyle .navOne .spanStyle span {\n  cursor: pointer;\n  border: solid #ffffff 0.5px;\n  background: #fff;\n  width: 15px;\n  transform-origin: 0px 1px;\n  transition: ease-in-out 0.7s;\n}\n.navStyle .navOne .spanStyle :first-child {\n  margin-bottom: -2px;\n}\n.navStyle .navOne .spanStyle :not(:first-child):not(:last-child) {\n  margin-bottom: -2px;\n}\n.navStyle .navOne #spanPhone {\n  display: none;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spanPhone {\n    display: grid;\n  }\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  .navStyle .navOne #spann {\n    display: none;\n  }\n}\n.navStyle .navOne .homeIcon {\n  height: 2rem;\n  width: 3.5rem;\n  height: 2.4rem;\n  width: 3rem;\n  cursor: pointer;\n  margin: 0 1rem;\n  display: grid;\n  place-items: center;\n  padding: 1px 0;\n}\n.navStyle .navOne .homeIcon:hover {\n  border-radius: 2px;\n  background: #ffffff83;\n}\n.navStyle .navOne .homeIcon #homeIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo {\n  width: 10rem;\n  display: grid;\n  place-items: center;\n}\n.navStyle .navTwo #plusIcon {\n  cursor: pointer;\n  color: #fff;\n  font-size: 2rem;\n}\n.navStyle .navTwo #plusIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 22% 78%;\n  height: 52.5rem;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main {\n    grid-template-columns: 0 1fr;\n  }\n}\nmain .sideBar {\n  background: #f0f0f0;\n  display: grid;\n  grid-template-rows: 30% 70%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar {\n    z-index: 1000;\n    height: 100vh;\n    width: 0rem;\n    opacity: 0;\n    grid-template-rows: 20% 80%;\n  }\n}\nmain .sideBar .sideBarOne {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarOne .sideBarContainer {\n  cursor: pointer;\n  border: solid 0.3px #f0f0f0;\n  border-radius: 5px;\n  height: 30px;\n  width: 70%;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\nmain .sideBar .sideBarOne .sideBarContainer:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarOne .sideBarContainer .inbox {\n  color: #44b4ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer .day {\n  color: #03da03;\n}\nmain .sideBar .sideBarOne .sideBarContainer .project {\n  color: #8f49ff;\n}\nmain .sideBar .sideBarOne .sideBarContainer h1 {\n  margin: 0 6px;\n  font-size: 1.3rem;\n  font-family: Open Sans, monospace, sans-serif;\n}\nmain .sideBar .sideBarTwo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 3rem;\n  width: 85%;\n  display: flex;\n  align-items: center;\n}\nmain .sideBar .sideBarTwo .projectDefault #arrow {\n  color: #000000;\n  font-size: 1.2rem;\n  font-weight: 900;\n  margin: 0 1rem;\n  transition: 200ms ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectDefault h1 {\n  font-size: 1.5rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon {\n  height: 1.8rem;\n  margin-left: 120px;\n}\nmain .sideBar .sideBarTwo .projectDefault #newProjectIcon:hover {\n  transform: rotate(360deg);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarTwo .projectList {\n  align-self: flex-end;\n  opacity: 0;\n  height: 0;\n  width: 80%;\n}\nmain .sideBar .sideBarTwo .projectList .list {\n  cursor: pointer;\n  margin: 1rem 0;\n  height: 3rem;\n  border-radius: 5px;\n  display: grid;\n  align-items: center;\n  padding: 5px 0 5px 5px;\n  display: flex;\n  justify-content: space-between;\n}\nmain .sideBar .sideBarTwo .projectList .list:hover {\n  background: #d8d8d8b0;\n}\nmain .sideBar .sideBarTwo .projectList .list p {\n  font-size: 1.4rem;\n  font-family: Open Sans, sans-serif;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn {\n  font-size: 1.2rem;\n  color: #808080;\n  margin-right: 1.5rem;\n}\nmain .sideBar .sideBarTwo .projectList .list .deleteProjectBtn:hover {\n  color: #000;\n  transform: rotate(360);\n  transition: 0.7s ease-in-out;\n}\nmain .sideBar .sideBarModule {\n  top: 0rem;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: #e9e9e983;\n  display: none;\n  place-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  border-radius: 5px;\n  height: 30%;\n  width: 40%;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent {\n    width: 95%;\n    height: 20%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  height: 80%;\n  width: 80%;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne, main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n    height: 50%;\n    width: 100%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne {\n    height: 60%;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 1rem 0 0;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne label {\n    font-size: 1.2rem;\n  }\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivOne input {\n  height: 50%;\n  width: 70%;\n  font-size: 1.8rem;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo button {\n  cursor: pointer;\n  height: 3rem;\n  width: 8rem;\n  margin: 0 1rem 0 0;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #addProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject {\n  color: #fff;\n  background: #ff4500;\n}\nmain .sideBar .sideBarModule .sideBarModuleContent .sideBarModuleContentDivTwo #cancelProject:hover {\n  color: #ff4500;\n  background: #fff;\n  border: 0.5px solid #ff4500;\n}\nmain .content {\n  display: grid;\n}\nmain .content .pageStyle {\n  display: grid;\n  grid-template-rows: 0.5fr 3fr;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle {\n    grid-template-rows: 10% 90%;\n  }\n}\nmain .content .pageStyle .contentOne {\n  display: grid;\n}\nmain .content .pageStyle .contentOne .contentOneOne {\n  margin: 1rem 2rem;\n}\nmain .content .pageStyle .contentOne .contentOneOne h1 {\n  cursor: pointer;\n  margin: 1rem 2rem;\n  font-size: 1.8rem;\n  font-family: \"Open Sans\", sans-serif;\n}\nmain .content .pageStyle .contentOne .contentOneTwo {\n  margin: 1rem 4rem;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .contentOne .contentOneTwo {\n    display: none;\n  }\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1 {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 0 5px;\n  color: #474747;\n}\nmain .content .pageStyle .contentOne .contentOneTwo h1:hover {\n  color: #ff4500;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton {\n  color: #ff4500;\n  cursor: pointer;\n  height: 1.8rem;\n  width: 1.8rem;\n}\nmain .content .pageStyle .contentOne .contentOneTwo #newListButton:hover {\n  color: #fff;\n  border-radius: 100rem;\n  background: #ff4500;\n}\nmain .content .pageStyle .pageContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle {\n  cursor: pointer;\n  border-top: 0.5px solid #e2e2e2;\n  border-bottom: 0.5px solid #e2e2e2;\n  min-height: 8rem;\n  max-height: auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne {\n  margin: 5px 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne {\n    grid-template-columns: 2fr 1fr 1fr;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n  font-size: 1.4rem;\n  font-family: Open Sans, cursive, monospace, sans-serif;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divOne .divOneOne p {\n    font-size: 1.1rem;\n  }\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :not(:first-child):not(:last-child) {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneOne :last-child {\n  display: grid;\n  place-items: center;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo {\n  display: flex;\n  justify-content: flex-end;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo {\n  border: 0.5px solid #000;\n  margin: 0 5px;\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #ff0000;\n  background: #fff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #deleteTodo:hover {\n  border: none;\n  color: #fff;\n  background: #ff0000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo {\n  cursor: pointer;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 5px;\n  color: #36d0ff;\n  background: #fff;\n  border: 0.5px solid #000;\n}\nmain .content .pageStyle .pageContent .todoStyle .divOne .divOneTwo #editTodo:hover {\n  border: none;\n  color: #fff;\n  background: #36d0ff;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo {\n  height: auto;\n  width: 100%;\n}\nmain .content .pageStyle .pageContent .todoStyle .divTwo p {\n  color: #808080;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 320px) and (max-width: 700px) {\n  main .content .pageStyle .pageContent .todoStyle .divTwo p {\n    font-size: 1rem;\n    letter-spacing: 0;\n  }\n}","@keyframes slideDown {\r\n    0% {\r\n        opacity: 0;\r\n        height: 0rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n}\r\n\r\n.slideDown {\r\n    animation: slideDown 200ms ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideUp {\r\n    0% {\r\n        opacity: 1;\r\n        height: 10rem;\r\n    }\r\n\r\n    100% {\r\n        opacity: 0;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.slideUp {\r\n    animation: slideUp 200ms ease-in-out forwards;\r\n}\r\n\r\n\r\n@keyframes slideLeft {\r\n    0% {\r\n        grid-template-columns: 22% 78%;\r\n    }\r\n\r\n    100% {\r\n        grid-template-columns: 0% 100%;\r\n    }\r\n}\r\n\r\n.slideLeft {\r\n    animation: slideLeft 0.5s ease-in-out forwards;\r\n}\r\n\r\n@keyframes slideLeftPhone {\r\n    0% {\r\n        width: 0;\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        width: 30rem;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.slideLeftPhone {\r\n    animation: slideLeftPhone 0.5s ease-in-out forwards;\r\n}\r\n\r\n@keyframes rotateDown {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n\r\n.rotateDown {\r\n    animation: rotateDown 200ms ease-in-out forwards;\r\n}\r\n\r\n",".navStyle {\r\n    height: 5rem;\r\n    background: #ff4500;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .module {\r\n        background: #e9e9e983;\r\n        display: none;\r\n        place-items: center;\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n        .moduleContent {\r\n            background: #fff;\r\n            border: none;\r\n            border-radius: 2rem;\r\n            display: grid;\r\n            place-items: center;\r\n            height: 50%;\r\n            width: 40%;\r\n            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\r\n\r\n            @include respond(phone) {\r\n                width: 95%;\r\n            }\r\n\r\n            .formTodo {\r\n                margin-top: 10px;\r\n                height: 90%;\r\n                width: 90%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: space-between;\r\n\r\n                .inputContainer {\r\n                    height: 4rem;\r\n                    display: grid;\r\n                    grid-template-columns: 1fr 3fr;\r\n\r\n                    @include respond(phone) {\r\n                        grid-template-columns: .9fr 3fr;\r\n                    }\r\n\r\n                    label {\r\n                        display: grid;\r\n                        place-items: center;\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n\r\n                        @include respond(phone) {\r\n                            font-size: 1.2rem;\r\n                        }\r\n                    }\r\n\r\n                    input {\r\n                        height: 3rem;\r\n                        width: 20rem;\r\n                    }\r\n\r\n                    .inputArea {\r\n                        width: 100%;\r\n                        font-size: 1.5rem;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .btnContainer {\r\n                display: grid;\r\n                grid-template-columns: 1fr 2fr;\r\n                height: 90%;\r\n                width: 90%;\r\n\r\n                @include respond(phone) {\r\n                    grid-template-columns: 1fr;\r\n                }\r\n\r\n                .btns {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 7rem;\r\n                        border-radius: 5px;\r\n                        font-weight: 600;\r\n                    }\r\n\r\n                    #addList {\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #editList {\r\n                        display: none;\r\n                        border: none;\r\n                        margin: 0 1.5rem 0 3rem;\r\n                        background: #ff4500;\r\n                        color: #fff;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelList {\r\n                        outline: none;\r\n                        border: .5px solid #000;\r\n                        background: #fff;\r\n\r\n                        &:hover {\r\n                            background: #ebebeb;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    .navOne {\r\n        justify-content: center;\r\n        align-items: center;\r\n        display: flex;\r\n        width: 10rem;\r\n\r\n        .spanStyle {\r\n            cursor: pointer;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n\r\n                :first-child {\r\n                    transform: rotate(45deg);\r\n                    margin-bottom: 0;\r\n                    margin-left: 2px;\r\n                }\r\n\r\n                :not(:first-child):not(:last-child) {\r\n                    display: none;\r\n                }\r\n\r\n                :last-child {\r\n                    transform: rotate(-45deg);\r\n                    margin-left: 2px;\r\n                }\r\n            }\r\n\r\n            span {\r\n                cursor: pointer;\r\n                border: solid #ffffff .5px;\r\n                background: #fff;\r\n                width: 15px;\r\n                transform-origin: 0px 1px;\r\n                transition: ease-in-out 0.7s;\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: -2px;\r\n            }\r\n\r\n            :not(:first-child):not(:last-child) {\r\n                margin-bottom: -2px;\r\n            }\r\n        }\r\n\r\n        #spanPhone {\r\n            display: none;\r\n\r\n            @include respond(phone) {\r\n                display: grid;\r\n            }\r\n        }\r\n    \r\n        #spann {\r\n\r\n            @include respond(phone) {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        .homeIcon {\r\n            height: 2rem;\r\n            width: 3.5rem;\r\n            height: 2.4rem;\r\n            width: 3rem;\r\n            cursor: pointer;\r\n            margin: 0 1rem;\r\n            display: grid;\r\n            place-items: center;\r\n            padding: 1px 0;\r\n\r\n            &:hover {\r\n                border-radius: 2px;\r\n                background: #ffffff83;\r\n            }\r\n\r\n            #homeIcon {\r\n                cursor: pointer;\r\n                color: #fff;\r\n                font-size: 2rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    .navTwo {\r\n        width: 10rem;\r\n        display: grid;\r\n        place-items: center;\r\n\r\n        #plusIcon {\r\n            cursor: pointer;\r\n            color: #fff;\r\n            font-size: 2rem;\r\n\r\n            &:hover {\r\n                transform: rotate(360deg);\r\n                transition: 0.7s ease-in-out;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n","@mixin respond($breakpoint) {\r\n    @if $breakpoint == phone {\r\n        @media (min-width: 320px) and (max-width: 700px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == tab-port {\r\n        @media (min-width: 701px) and (max-width: 992px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == tab-land {\r\n        @media (min-width: 993px) and (max-width: 1312px) {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @if $breakpoint == desk {\r\n        @media (min-width: 1313px) and (max-width: 1500px) {\r\n            @content;\r\n        }\r\n    }\r\n};","main {\r\n    display: grid;\r\n    grid-template-columns: 22% 78%;\r\n    height: 52.5rem;\r\n\r\n    @include respond(phone) {\r\n        grid-template-columns: 0 1fr;\r\n    }\r\n\r\n\r\n    .sideBar {\r\n        background: #f0f0f0;\r\n        display: grid;\r\n        grid-template-rows: 30% 70%;\r\n\r\n        @include respond(phone) {\r\n            z-index: 1000;\r\n            height: 100vh;\r\n            width: 0rem;\r\n            opacity: 0;\r\n            grid-template-rows: 20% 80%;\r\n        }\r\n\r\n        .sideBarOne {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            .sideBarContainer {\r\n                cursor: pointer;\r\n                border: solid .3px #f0f0f0;\r\n                border-radius: 5px;\r\n                height: 30px;\r\n                width: 70%;\r\n                margin: 5px 0;\r\n                display: flex;\r\n                align-items: center;\r\n                padding: 5px;\r\n\r\n                &:hover {\r\n                    background: #d8d8d8b0;\r\n                }\r\n\r\n                .inbox {\r\n                    color: #44b4ff;\r\n                }\r\n\r\n                .day {\r\n                    color: #03da03;\r\n                }\r\n\r\n                .project {\r\n                    color: #8f49ff;\r\n                }\r\n\r\n                h1 {\r\n                    margin: 0 6px;\r\n                    font-size: 1.3rem;\r\n                    font-family: Open Sans, monospace, sans-serif;\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarTwo {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            \r\n            .projectDefault {\r\n                align-self: flex-end;\r\n                cursor: pointer;\r\n                height: 3rem;\r\n                width: 85%;\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                #arrow {\r\n                    color: #000000;\r\n                    font-size: 1.2rem;\r\n                    font-weight: 900;\r\n                    margin: 0 1rem;\r\n                    transition: 200ms ease-in-out;\r\n                }\r\n\r\n                h1 {\r\n                    font-size: 1.5rem;\r\n                    font-family: Open Sans, sans-serif;\r\n                }\r\n\r\n                #newProjectIcon {\r\n                    height: 1.8rem;\r\n                    margin-left: 120px;\r\n\r\n                    &:hover {\r\n                        transform: rotate(360deg);\r\n                        transition: 0.7s ease-in-out;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .projectList {\r\n                align-self: flex-end;\r\n                opacity: 0;\r\n                height: 0;\r\n                width: 80%;\r\n\r\n                .list {\r\n                    cursor: pointer;\r\n                    margin: 1rem 0;\r\n                    height: 3rem;\r\n                    border-radius: 5px;\r\n                    display: grid;\r\n                    align-items: center;\r\n                    padding: 5px 0 5px 5px;\r\n                    display: flex;\r\n                    justify-content: space-between;\r\n\r\n                    &:hover {\r\n                        background: #d8d8d8b0;\r\n                    }\r\n\r\n                    p {\r\n                        font-size: 1.4rem;\r\n                        font-family: Open Sans, sans-serif;\r\n                    }\r\n\r\n                    .deleteProjectBtn {\r\n                        font-size: 1.2rem;\r\n                        color: #808080;\r\n                        margin-right: 1.5rem;\r\n\r\n                        &:hover {\r\n                            color: #000;\r\n                            transform: rotate(360);\r\n                            transition: 0.7s ease-in-out;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .sideBarModule {\r\n            top: 0rem;\r\n            height: 100%;\r\n            width: 100%;\r\n            position: absolute;\r\n            background: #e9e9e983;\r\n            display: none;\r\n            place-items: center;\r\n\r\n            .sideBarModuleContent {\r\n                background: #fff;\r\n                box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\r\n                border-radius: 5px;\r\n                height: 30%;\r\n                width: 40%;\r\n                display: grid;\r\n                grid-template-columns: 1fr;\r\n                place-items: center;\r\n\r\n                @include respond(phone) {\r\n                    width: 95%;\r\n                    height: 20%;\r\n                }\r\n\r\n                .sideBarModuleContentDivOne, .sideBarModuleContentDivTwo {\r\n                    height: 80%;\r\n                    width: 80%;\r\n\r\n                    @include respond(phone) {\r\n                        height: 50%;\r\n                        width: 100%;\r\n                    }\r\n                }\r\n\r\n                .sideBarModuleContentDivOne {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    @include respond(phone) {\r\n                        height: 60%;\r\n                    }\r\n\r\n                    label {\r\n                        font-size: 1.6rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                        margin: 0 1rem 0 0;\r\n\r\n                        @include respond(phone) {\r\n                            font-size: 1.2rem;\r\n                        }\r\n                    }\r\n\r\n                    input {\r\n                        height: 50%;\r\n                        width: 70%;\r\n                        font-size: 1.8rem;\r\n                    }\r\n                }\r\n\r\n                .sideBarModuleContentDivTwo {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n\r\n                    button {\r\n                        cursor: pointer;\r\n                        height: 3rem;\r\n                        width: 8rem;\r\n                        margin: 0 1rem 0 0;\r\n                        border: none;\r\n                        outline: none;\r\n                        border-radius: 5px;\r\n                    }\r\n\r\n                    #addProject {\r\n                        color: #fff;\r\n                        background: #ff4500;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n\r\n                    #cancelProject {\r\n                        color: #fff;\r\n                        background: #ff4500;\r\n\r\n                        &:hover {\r\n                            color: #ff4500;\r\n                            background: #fff;\r\n                            border: .5px solid #ff4500;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .content {\r\n        display: grid;\r\n\r\n        .pageStyle {\r\n            display: grid;\r\n            grid-template-rows: .5fr 3fr;\r\n\r\n            @include respond(phone) {\r\n                grid-template-rows: 10% 90%;\r\n            }\r\n\r\n            .contentOne {\r\n                display: grid;\r\n    \r\n                .contentOneOne {\r\n                    margin: 1rem 2rem;\r\n    \r\n                    h1 {\r\n                        cursor: pointer;\r\n                        margin: 1rem 2rem;\r\n                        font-size: 1.8rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                    }\r\n                }\r\n    \r\n                .contentOneTwo {\r\n                    margin: 1rem 4rem;\r\n                    display: flex;\r\n                    align-items: center;\r\n    \r\n                    @include respond(phone) {\r\n                        display: none;\r\n                    }\r\n    \r\n                    h1 {\r\n                        cursor: pointer;\r\n                        font-size: 1.5rem;\r\n                        font-family: \"Open Sans\", sans-serif;\r\n                        margin: 0 5px;\r\n                        color: #474747;\r\n    \r\n                        &:hover {\r\n                            color: #ff4500;\r\n                        }\r\n                    }\r\n    \r\n                    #newListButton {\r\n                        color: #ff4500;\r\n                        cursor: pointer;\r\n                        height: 1.8rem;\r\n                        width: 1.8rem;\r\n    \r\n                        &:hover {\r\n                            color: #fff;\r\n                            border-radius: 100rem;\r\n                            background: #ff4500;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n    \r\n            .pageContent {\r\n                display: flex;\r\n                flex-direction: column;\r\n                align-items: center;\r\n    \r\n                .todoStyle {\r\n                    cursor: pointer;\r\n                    border-top: .5px solid #e2e2e2;\r\n                    border-bottom: .5px solid #e2e2e2;\r\n                    min-height: 8rem;\r\n                    max-height: auto;\r\n                    width: 90%;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    place-items: center;\r\n    \r\n                    .divOne {\r\n                        margin: 5px 0;\r\n                        width: 100%;\r\n                        display: grid;\r\n                        grid-template-columns: 3fr 1fr;\r\n                        align-items: center;\r\n    \r\n                        .divOneOne {\r\n                            display: grid;\r\n                            grid-template-columns: repeat(3, 1fr);\r\n    \r\n                            @include respond(phone) {\r\n                                grid-template-columns: 2fr 1fr 1fr;\r\n                            }\r\n    \r\n                            p {\r\n                                font-size: 1.4rem;\r\n                                font-family: Open Sans, cursive, monospace, sans-serif;\r\n    \r\n                                @include respond(phone) {\r\n                                    font-size: 1.1rem;\r\n                                }\r\n                            }\r\n    \r\n                            :not(:first-child):not(:last-child) {\r\n                                display: grid;\r\n                                place-items: center;\r\n                            }\r\n    \r\n                            :last-child {\r\n                                display: grid;\r\n                                place-items: center;\r\n                            }\r\n                        }\r\n    \r\n                        .divOneTwo {\r\n                            display: flex;\r\n                            justify-content: flex-end;\r\n    \r\n                            #deleteTodo {\r\n                                border: .5px solid #000;\r\n                                margin: 0 5px;\r\n                                cursor: pointer;\r\n                                height: 2rem;\r\n                                width: 2rem;\r\n                                border-radius: 5px;\r\n                                color: #ff0000;\r\n                                background: #fff;\r\n        \r\n                                &:hover {\r\n                                    border: none;\r\n                                    color: #fff;\r\n                                    background: #ff0000;\r\n                                }\r\n                            }\r\n    \r\n                            #editTodo {\r\n                                cursor: pointer;\r\n                                height: 2rem;\r\n                                width: 2rem;\r\n                                border-radius: 5px;\r\n                                color: #36d0ff;\r\n                                background: #fff;\r\n                                border: .5px solid #000;\r\n    \r\n                                &:hover {\r\n                                    border: none;\r\n                                    color: #fff;\r\n                                    background: #36d0ff;\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n    \r\n                    .divTwo {\r\n                        height: auto;\r\n                        width: 100%;\r\n    \r\n                        p {\r\n                            color: #808080;\r\n                            font-size: 1.3rem;\r\n                            letter-spacing: .5px;\r\n    \r\n                            @include respond(phone) {\r\n                                font-size: 1rem;\r\n                                letter-spacing: 0;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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

    return {
        todos,
        title
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
const arrow = document.getElementById("arrow");

arrow.addEventListener("click", () => {
  const projectList = document.querySelector(".projectList");

  if (projectList.classList.contains("slideDown")) {
    projectList.classList.remove("slideDown");
    projectList.classList.add("slideUp");
    arrow.classList.remove("rotateDown");
  } else {
    projectList.classList.add("slideDown");
    projectList.classList.remove("slideUp");
    arrow.classList.add("rotateDown");
  }
});

// Side bar animation ( for desktop )
const navSpan = document.getElementById("spann");

navSpan.addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  const sideBarOne = document.querySelector(".sideBarOne");
  const sideBarTwo = document.querySelector(".sideBarTwo");

  if (mainContent.classList.contains("slideLeft")) {
    mainContent.classList.remove("slideLeft");
    sideBarOne.style.display = "flex";
    sideBarTwo.style.display = "flex";
  } else {
    mainContent.classList.add("slideLeft");
    sideBarOne.style.display = "none";
    sideBarTwo.style.display = "none";
  }
});

// Side bar animation ( for mobile )
const spanPhone = document.getElementById("spanPhone");

spanPhone.addEventListener("click", () => {
  const sideBar = document.querySelector(".sideBar");

  if (sideBar.classList.contains("slideLeftPhone")) {
    sideBar.classList.remove("slideLeftPhone");
  } else {
    sideBar.classList.add("slideLeftPhone");
  }
});

// Insert current date in the svg
const todaySvg = document.getElementById("todayDate");

const date = new Date();
todaySvg.textContent = date.getUTCDate();

// Open & Close Module
const module = document.querySelector(".module");
// Open Modal Buttons
const plusIcon = document.getElementById("plusIcon");

// Close Modal Buttons
const add = document.getElementById("addList");
const edit = document.getElementById("editList");
const cancel = document.getElementById("cancelList");

// plusIcon & newListBtn are two different btns but serves the same purpose.
plusIcon.addEventListener("click", () => {
  const sideBar = document.querySelector(".sideBar");

  if (sideBar.classList.contains("slideLeftPhone")) {
    sideBar.classList.remove("slideLeftPhone");
  }

  module.style.display = "grid";
  add.style.display = "block";
  edit.style.display = "none";
});

function setBtnOne() {
  if (document.getElementById("newListButton")) {
    const btn = document.getElementById("newListButton");
    btn.addEventListener("click", () => {
      module.style.display = "grid";
      add.style.display = "block";
      edit.style.display = "none";
    });
  }
}

setInterval(() => {
  setBtnOne();
});

add.addEventListener("click", () => {
  module.style.display = "none";
});

edit.addEventListener("click", () => {
  module.style.display = "none";
});

cancel.addEventListener("click", () => {
  const projectInput = document.querySelector(".inputFive");
  module.style.display = "none";
  projectInput.style.display = "grid";
  (0,_domfuntions__WEBPACK_IMPORTED_MODULE_0__.cleanInput)();
});

// new project button
const module3 = document.querySelector(".sideBarModule");
const newProject = document.getElementById("addProject");

newProject.addEventListener("click", () => {
  module3.style.display = "none";
});

// For opening SideBar Project Module
const newProjectIcon = document.getElementById("newProjectIcon");
const cancelProject = document.getElementById("cancelProject");

newProjectIcon.addEventListener("click", () => {
  const projectModule = document.querySelector(".sideBarModule");
  const projectInput = document.getElementById("projectName");
  projectModule.style.display = "grid";
  projectInput.value = "";
});

cancelProject.addEventListener("click", () => {
  const projectModule = document.querySelector(".sideBarModule");
  const projectInput = document.getElementById("projectName");
  projectModule.style.display = "none";
  projectInput.value = "";
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9JQUFvSTtBQUNwSTtBQUNBLG9FQUFvRSxjQUFjLGVBQWUsd0JBQXdCLEdBQUcsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsR0FBRywwQkFBMEIsUUFBUSxpQkFBaUIsbUJBQW1CLEtBQUssVUFBVSxpQkFBaUIsb0JBQW9CLEtBQUssR0FBRyxjQUFjLG9EQUFvRCxHQUFHLHdCQUF3QixRQUFRLGlCQUFpQixvQkFBb0IsS0FBSyxVQUFVLGlCQUFpQixnQkFBZ0IsS0FBSyxHQUFHLFlBQVksa0RBQWtELEdBQUcsMEJBQTBCLFFBQVEscUNBQXFDLEtBQUssVUFBVSxxQ0FBcUMsS0FBSyxHQUFHLGNBQWMsbURBQW1ELEdBQUcsK0JBQStCLFFBQVEsZUFBZSxpQkFBaUIsS0FBSyxVQUFVLG1CQUFtQixpQkFBaUIsS0FBSyxHQUFHLG1CQUFtQix3REFBd0QsR0FBRywyQkFBMkIsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLCtCQUErQixLQUFLLEdBQUcsZUFBZSxxREFBcUQsR0FBRyxlQUFlLGlCQUFpQix3QkFBd0Isa0JBQWtCLG1DQUFtQyxHQUFHLHFCQUFxQiwwQkFBMEIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsaUJBQWlCLGdCQUFnQixHQUFHLG9DQUFvQyxxQkFBcUIsaUJBQWlCLHdCQUF3QixrQkFBa0Isd0JBQXdCLGdCQUFnQixlQUFlLG1GQUFtRixHQUFHLG9EQUFvRCxzQ0FBc0MsaUJBQWlCLEtBQUssR0FBRyw4Q0FBOEMscUJBQXFCLGdCQUFnQixlQUFlLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsOERBQThELGlCQUFpQixrQkFBa0IsbUNBQW1DLEdBQUcsb0RBQW9ELGdFQUFnRSx1Q0FBdUMsS0FBSyxHQUFHLG9FQUFvRSxrQkFBa0Isd0JBQXdCLHNCQUFzQix1Q0FBdUMsR0FBRyxvREFBb0Qsc0VBQXNFLHdCQUF3QixLQUFLLEdBQUcsb0VBQW9FLGlCQUFpQixpQkFBaUIsR0FBRyx5RUFBeUUsZ0JBQWdCLHNCQUFzQixHQUFHLGtEQUFrRCxrQkFBa0IsbUNBQW1DLGdCQUFnQixlQUFlLEdBQUcsb0RBQW9ELG9EQUFvRCxpQ0FBaUMsS0FBSyxHQUFHLHdEQUF3RCxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLCtEQUErRCxvQkFBb0IsaUJBQWlCLGdCQUFnQix1QkFBdUIscUJBQXFCLEdBQUcsaUVBQWlFLGlCQUFpQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixHQUFHLHVFQUF1RSxtQkFBbUIscUJBQXFCLGdDQUFnQyxHQUFHLGtFQUFrRSxrQkFBa0IsaUJBQWlCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLEdBQUcsd0VBQXdFLG1CQUFtQixxQkFBcUIsZ0NBQWdDLEdBQUcsb0VBQW9FLGtCQUFrQiw2QkFBNkIscUJBQXFCLEdBQUcsMEVBQTBFLHdCQUF3QixHQUFHLHFCQUFxQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixpQkFBaUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLG1CQUFtQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixtQkFBbUIsR0FBRyxzQ0FBc0MsdUJBQXVCLDBCQUEwQixHQUFHLG1EQUFtRCw2QkFBNkIscUJBQXFCLHFCQUFxQixHQUFHLDBFQUEwRSxrQkFBa0IsR0FBRyxrREFBa0QsOEJBQThCLHFCQUFxQixHQUFHLHFDQUFxQyxvQkFBb0IsZ0NBQWdDLHFCQUFxQixnQkFBZ0IsOEJBQThCLGlDQUFpQyxHQUFHLDZDQUE2Qyx3QkFBd0IsR0FBRyxvRUFBb0Usd0JBQXdCLEdBQUcsZ0NBQWdDLGtCQUFrQixHQUFHLG9EQUFvRCxrQ0FBa0Msb0JBQW9CLEtBQUssR0FBRyxvREFBb0QsOEJBQThCLG9CQUFvQixLQUFLLEdBQUcsK0JBQStCLGlCQUFpQixrQkFBa0IsbUJBQW1CLGdCQUFnQixvQkFBb0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUJBQW1CLEdBQUcscUNBQXFDLHVCQUF1QiwwQkFBMEIsR0FBRyx5Q0FBeUMsb0JBQW9CLGdCQUFnQixvQkFBb0IsR0FBRyxxQkFBcUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsR0FBRywrQkFBK0Isb0JBQW9CLGdCQUFnQixvQkFBb0IsR0FBRyxxQ0FBcUMsOEJBQThCLGlDQUFpQyxHQUFHLFVBQVUsa0JBQWtCLG1DQUFtQyxvQkFBb0IsR0FBRyxvREFBb0QsVUFBVSxtQ0FBbUMsS0FBSyxHQUFHLGlCQUFpQix3QkFBd0Isa0JBQWtCLGdDQUFnQyxHQUFHLG9EQUFvRCxtQkFBbUIsb0JBQW9CLG9CQUFvQixrQkFBa0IsaUJBQWlCLGtDQUFrQyxLQUFLLEdBQUcsNkJBQTZCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLCtDQUErQyxvQkFBb0IsZ0NBQWdDLHVCQUF1QixpQkFBaUIsZUFBZSxrQkFBa0Isa0JBQWtCLHdCQUF3QixpQkFBaUIsR0FBRyxxREFBcUQsMEJBQTBCLEdBQUcsc0RBQXNELG1CQUFtQixHQUFHLG9EQUFvRCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsa0RBQWtELGtCQUFrQixzQkFBc0Isa0RBQWtELEdBQUcsNkJBQTZCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsNkNBQTZDLHlCQUF5QixvQkFBb0IsaUJBQWlCLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLG9EQUFvRCxtQkFBbUIsc0JBQXNCLHFCQUFxQixtQkFBbUIsa0NBQWtDLEdBQUcsZ0RBQWdELHNCQUFzQix1Q0FBdUMsR0FBRyw2REFBNkQsbUJBQW1CLHVCQUF1QixHQUFHLG1FQUFtRSw4QkFBOEIsaUNBQWlDLEdBQUcsMENBQTBDLHlCQUF5QixlQUFlLGNBQWMsZUFBZSxHQUFHLGdEQUFnRCxvQkFBb0IsbUJBQW1CLGlCQUFpQix1QkFBdUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsa0JBQWtCLG1DQUFtQyxHQUFHLHNEQUFzRCwwQkFBMEIsR0FBRyxrREFBa0Qsc0JBQXNCLHVDQUF1QyxHQUFHLGtFQUFrRSxzQkFBc0IsbUJBQW1CLHlCQUF5QixHQUFHLHdFQUF3RSxnQkFBZ0IsMkJBQTJCLGlDQUFpQyxHQUFHLGdDQUFnQyxjQUFjLGlCQUFpQixnQkFBZ0IsdUJBQXVCLDBCQUEwQixrQkFBa0Isd0JBQXdCLEdBQUcsc0RBQXNELHFCQUFxQixnREFBZ0QsdUJBQXVCLGdCQUFnQixlQUFlLGtCQUFrQiwrQkFBK0Isd0JBQXdCLEdBQUcsb0RBQW9ELHdEQUF3RCxpQkFBaUIsa0JBQWtCLEtBQUssR0FBRyxrS0FBa0ssZ0JBQWdCLGVBQWUsR0FBRyxvREFBb0Qsb0tBQW9LLGtCQUFrQixrQkFBa0IsS0FBSyxHQUFHLGtGQUFrRixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG9EQUFvRCxvRkFBb0Ysa0JBQWtCLEtBQUssR0FBRyx3RkFBd0Ysc0JBQXNCLDJDQUEyQyx1QkFBdUIsR0FBRyxvREFBb0QsMEZBQTBGLHdCQUF3QixLQUFLLEdBQUcsd0ZBQXdGLGdCQUFnQixlQUFlLHNCQUFzQixHQUFHLGtGQUFrRixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHlGQUF5RixvQkFBb0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsR0FBRyw4RkFBOEYsZ0JBQWdCLHdCQUF3QixHQUFHLG9HQUFvRyxtQkFBbUIscUJBQXFCLGdDQUFnQyxHQUFHLGlHQUFpRyxnQkFBZ0Isd0JBQXdCLEdBQUcsdUdBQXVHLG1CQUFtQixxQkFBcUIsZ0NBQWdDLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLDRCQUE0QixrQkFBa0Isa0NBQWtDLEdBQUcsb0RBQW9ELDhCQUE4QixrQ0FBa0MsS0FBSyxHQUFHLHdDQUF3QyxrQkFBa0IsR0FBRyx1REFBdUQsc0JBQXNCLEdBQUcsMERBQTBELG9CQUFvQixzQkFBc0Isc0JBQXNCLDJDQUEyQyxHQUFHLHVEQUF1RCxzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLG9EQUFvRCx5REFBeUQsb0JBQW9CLEtBQUssR0FBRywwREFBMEQsb0JBQW9CLHNCQUFzQiwyQ0FBMkMsa0JBQWtCLG1CQUFtQixHQUFHLGdFQUFnRSxtQkFBbUIsR0FBRyxzRUFBc0UsbUJBQW1CLG9CQUFvQixtQkFBbUIsa0JBQWtCLEdBQUcsNEVBQTRFLGdCQUFnQiwwQkFBMEIsd0JBQXdCLEdBQUcseUNBQXlDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsb0RBQW9ELG9CQUFvQixvQ0FBb0MsdUNBQXVDLHFCQUFxQixxQkFBcUIsZUFBZSxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLDREQUE0RCxrQkFBa0IsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsdUVBQXVFLGtCQUFrQiwwQ0FBMEMsR0FBRyxvREFBb0QseUVBQXlFLHlDQUF5QyxLQUFLLEdBQUcseUVBQXlFLHNCQUFzQiwyREFBMkQsR0FBRyxvREFBb0QsMkVBQTJFLHdCQUF3QixLQUFLLEdBQUcsMkdBQTJHLGtCQUFrQix3QkFBd0IsR0FBRyxtRkFBbUYsa0JBQWtCLHdCQUF3QixHQUFHLHVFQUF1RSxrQkFBa0IsOEJBQThCLEdBQUcsbUZBQW1GLDZCQUE2QixrQkFBa0Isb0JBQW9CLGlCQUFpQixnQkFBZ0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsR0FBRyx5RkFBeUYsaUJBQWlCLGdCQUFnQix3QkFBd0IsR0FBRyxpRkFBaUYsb0JBQW9CLGlCQUFpQixnQkFBZ0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsNkJBQTZCLEdBQUcsdUZBQXVGLGlCQUFpQixnQkFBZ0Isd0JBQXdCLEdBQUcsNERBQTRELGlCQUFpQixnQkFBZ0IsR0FBRyw4REFBOEQsbUJBQW1CLHNCQUFzQiwwQkFBMEIsR0FBRyxvREFBb0QsZ0VBQWdFLHNCQUFzQix3QkFBd0IsS0FBSyxHQUFHLE9BQU8sNFRBQTRULFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8s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REFBVTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTTtBQUMzQixxQkFBcUIsU0FBUztBQUM5QixxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVEsR0FBRyxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3dCO0FBQ3hCO0FBQ0E7QUFDQTtBQUN5QyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9QYWludGRvbS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvTW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC8uL3NyYy9Nb2R1bGVzL2RvbWZ1bnRpb25zLmpzIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub2RvTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvZG9MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9kb0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdCZmYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbn1cXG4uc2xpZGVEb3duIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG59XFxuLnNsaWRlVXAge1xcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxuICAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XFxuICB9XFxufVxcbi5zbGlkZUxlZnQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdFBob25lIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0UGhvbmUgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVEb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG4ucm90YXRlRG93biB7XFxuICBhbmltYXRpb246IHJvdGF0ZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5uYXZTdHlsZSB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUge1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC45ZnIgM2ZyO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciAuaW5wdXRBcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNlZGl0TGlzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAwLjVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDBweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5uYXZPbmUgI3NwYW5uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24gI2hvbWVJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byB7XFxuICB3aWR0aDogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIGhlaWdodDogNTIuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgNzAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjNweCAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmluYm94IHtcXG4gIGNvbG9yOiAjNDRiNGZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5kYXkge1xcbiAgY29sb3I6ICMwM2RhMDM7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLnByb2plY3Qge1xcbiAgY29sb3I6ICM4ZjQ5ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgaDEge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNhcnJvdyB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uIHtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgLmRlbGV0ZVByb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCAuZGVsZXRlUHJvamVjdEJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MCk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIHtcXG4gIHRvcDogMHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTgpIDBweCAycHggNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSB7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIGlucHV0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogOHJlbTtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lT25lIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byB7XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiAjNDc0NzQ3O1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDE6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byAjbmV3TGlzdEJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgd2lkdGg6IDEuOHJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2UyZTJlMjtcXG4gIG1pbi1oZWlnaHQ6IDhyZW07XFxuICBtYXgtaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8ge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogIzM2ZDBmZjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbC9fYW5pbWF0aW9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL25hdmJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX21peGluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvbWFpbkNvbnRlbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ0RKOztBQ1pBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFRGVOO0VDWkU7SUFDSSxVQUFBO0lBQ0EsYUFBQTtFRGNOO0FBQ0Y7QUNYQTtFQUNJLCtDQUFBO0FEYUo7O0FDVkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VEYU47RUNWRTtJQUNJLFVBQUE7SUFDQSxTQUFBO0VEWU47QUFDRjtBQ1RBO0VBQ0ksNkNBQUE7QURXSjs7QUNQQTtFQUNJO0lBQ0ksOEJBQUE7RURVTjtFQ1BFO0lBQ0ksOEJBQUE7RURTTjtBQUNGO0FDTkE7RUFDSSw4Q0FBQTtBRFFKOztBQ0xBO0VBQ0k7SUFDSSxRQUFB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QkFBQTtFQUNBLG1CQUFBO0FKb1FwQjtBSWxRb0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FKb1F4QjtBSWxRd0I7RUFDSSxhQUFBO0VBQ0EscUNBQUE7QUpvUTVCO0FHM2tCUTtFQ3FVZ0I7SUFLUSxrQ0FBQTtFSnFROUI7QUFDRjtBSW5RNEI7RUFDSSxpQkFBQTtFQUNBLHNEQUFBO0FKcVFoQztBR3BsQlE7RUM2VW9CO0lBS1EsaUJBQUE7RUpzUWxDO0FBQ0Y7QUluUTRCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FKcVFoQztBSWxRNEI7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUpvUWhDO0FJaFF3QjtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBSmtRNUI7QUloUTRCO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUprUWhDO0FJaFFnQztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUprUXBDO0FJOVA0QjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUpnUWhDO0FJOVBnQztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUpnUXBDO0FJMVBvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0FKNFB4QjtBSTFQd0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBSjRQNUI7QUczb0JRO0VDNFlnQjtJQU1RLGVBQUE7SUFDQSxpQkFBQTtFSjZQOUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdCZmYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdCZmYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMHJlbTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbn1cXG4uc2xpZGVEb3duIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG59XFxuLnNsaWRlVXAge1xcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxuICAwJSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XFxuICB9XFxufVxcbi5zbGlkZUxlZnQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnNsaWRlTGVmdFBob25lIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0UGhvbmUgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVEb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG4ucm90YXRlRG93biB7XFxuICBhbmltYXRpb246IHJvdGF0ZURvd24gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5uYXZTdHlsZSB7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUge1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOSkgMHB4IDEwcHggMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggNnB4IDZweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC45ZnIgM2ZyO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuZm9ybVRvZG8gLmlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmZvcm1Ub2RvIC5pbnB1dENvbnRhaW5lciAuaW5wdXRBcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2FkZExpc3Q6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZmY0NTAwO1xcbn1cXG4ubmF2U3R5bGUgLm1vZHVsZSAubW9kdWxlQ29udGVudCAuYnRuQ29udGFpbmVyIC5idG5zICNlZGl0TGlzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwIDEuNXJlbSAwIDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmY0NTAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZTdHlsZSAubW9kdWxlIC5tb2R1bGVDb250ZW50IC5idG5Db250YWluZXIgLmJ0bnMgI2VkaXRMaXN0OmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY0NTAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMC41cHggc29saWQgI2ZmNDUwMDtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLm5hdlN0eWxlIC5tb2R1bGUgLm1vZHVsZUNvbnRlbnQgLmJ0bkNvbnRhaW5lciAuYnRucyAjY2FuY2VsTGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4MztcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lIC5zcGFuU3R5bGU6aG92ZXIgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLnNwYW5TdHlsZSBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogc29saWQgI2ZmZmZmZiAwLjVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDBweCAxcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjdzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuc3BhblN0eWxlIDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxufVxcbi5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uYXZTdHlsZSAubmF2T25lICNzcGFuUGhvbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5hdlN0eWxlIC5uYXZPbmUgI3NwYW5uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLm5hdlN0eWxlIC5uYXZPbmUgLmhvbWVJY29uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxuICBoZWlnaHQ6IDIuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFweCAwO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb246aG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcbn1cXG4ubmF2U3R5bGUgLm5hdk9uZSAuaG9tZUljb24gI2hvbWVJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byB7XFxuICB3aWR0aDogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdlN0eWxlIC5uYXZUd28gI3BsdXNJY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubmF2U3R5bGUgLm5hdlR3byAjcGx1c0ljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXG4gIGhlaWdodDogNTIuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgMWZyO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgNzAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuc2lkZUJhciB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAwcmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAwLjNweCAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck9uZSAuc2lkZUJhckNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLmluYm94IHtcXG4gIGNvbG9yOiAjNDRiNGZmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyT25lIC5zaWRlQmFyQ29udGFpbmVyIC5kYXkge1xcbiAgY29sb3I6ICMwM2RhMDM7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgLnByb2plY3Qge1xcbiAgY29sb3I6ICM4ZjQ5ZmY7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJPbmUgLnNpZGVCYXJDb250YWluZXIgaDEge1xcbiAgbWFyZ2luOiAwIDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0ICNhcnJvdyB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3REZWZhdWx0IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdERlZmF1bHQgI25ld1Byb2plY3RJY29uIHtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0RGVmYXVsdCAjbmV3UHJvamVjdEljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJUd28gLnByb2plY3RMaXN0IC5saXN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q4ZDhkOGIwO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhclR3byAucHJvamVjdExpc3QgLmxpc3QgLmRlbGV0ZVByb2plY3RCdG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzgwODA4MDtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyVHdvIC5wcm9qZWN0TGlzdCAubGlzdCAuZGVsZXRlUHJvamVjdEJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MCk7XFxuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIHtcXG4gIHRvcDogMHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTgzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTgpIDBweCAycHggNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICB9XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSwgbWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSB7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgfVxcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZPbmUgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lIGlucHV0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5tYWluIC5zaWRlQmFyIC5zaWRlQmFyTW9kdWxlIC5zaWRlQmFyTW9kdWxlQ29udGVudCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuc2lkZUJhciAuc2lkZUJhck1vZHVsZSAuc2lkZUJhck1vZHVsZUNvbnRlbnQgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2VHdvIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogOHJlbTtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjYWRkUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxufVxcbm1haW4gLnNpZGVCYXIgLnNpZGVCYXJNb2R1bGUgLnNpZGVCYXJNb2R1bGVDb250ZW50IC5zaWRlQmFyTW9kdWxlQ29udGVudERpdlR3byAjY2FuY2VsUHJvamVjdDpob3ZlciB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZU9uZSB7XFxuICBtYXJnaW46IDFyZW0gMnJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lT25lIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byB7XFxuICBtYXJnaW46IDFyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvIGgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiAjNDc0NzQ3O1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLmNvbnRlbnRPbmUgLmNvbnRlbnRPbmVUd28gaDE6aG92ZXIge1xcbiAgY29sb3I6ICNmZjQ1MDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAuY29udGVudE9uZSAuY29udGVudE9uZVR3byAjbmV3TGlzdEJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmNDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS44cmVtO1xcbiAgd2lkdGg6IDEuOHJlbTtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5jb250ZW50T25lIC5jb250ZW50T25lVHdvICNuZXdMaXN0QnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZTJlMmUyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2UyZTJlMjtcXG4gIG1pbi1oZWlnaHQ6IDhyZW07XFxuICBtYXgtaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICBtYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lT25lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgY3Vyc2l2ZSwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgbWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZU9uZSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVPbmUgOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2RlbGV0ZVRvZG8ge1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5tYWluIC5jb250ZW50IC5wYWdlU3R5bGUgLnBhZ2VDb250ZW50IC50b2RvU3R5bGUgLmRpdk9uZSAuZGl2T25lVHdvICNkZWxldGVUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZPbmUgLmRpdk9uZVR3byAjZWRpdFRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogIzM2ZDBmZjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDA7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2T25lIC5kaXZPbmVUd28gI2VkaXRUb2RvOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXG59XFxubWFpbiAuY29udGVudCAucGFnZVN0eWxlIC5wYWdlQ29udGVudCAudG9kb1N0eWxlIC5kaXZUd28ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgY29sb3I6ICM4MDgwODA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIG1haW4gLmNvbnRlbnQgLnBhZ2VTdHlsZSAucGFnZUNvbnRlbnQgLnRvZG9TdHlsZSAuZGl2VHdvIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbn1cIixcIkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIGhlaWdodDogMHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZURvd24ge1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZVVwIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlTGVmdCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIlIDc4JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVMZWZ0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUxlZnRQaG9uZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlTGVmdFBob25lIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUxlZnRQaG9uZSAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZURvd24ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlRG93biB7XFxyXFxuICAgIGFuaW1hdGlvbjogcm90YXRlRG93biAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIubmF2U3R5bGUge1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgLm1vZHVsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgLm1vZHVsZUNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCA2cHggNnB4O1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmZvcm1Ub2RvIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmlucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuOWZyIDNmcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0QXJlYSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5idG5zIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjYWRkTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjZWRpdExpc3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjY2FuY2VsTGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm5hdk9uZSB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcblxcclxcbiAgICAgICAgLnNwYW5TdHlsZSB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmODM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2ZmZmZmZiAuNXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC43cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNzcGFuUGhvbmUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAjc3Bhbm4ge1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaG9tZUljb24ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMy41cmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMXB4IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjgzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAjaG9tZUljb24ge1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZUd28ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAjcGx1c0ljb24ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHBob25lIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDEzMTJweCkge1xcclxcbiAgICAgICAgICAgIEBjb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBkZXNrIHtcXHJcXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzEzcHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcXHJcXG4gICAgICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn07XCIsXCJtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMiUgNzglO1xcclxcbiAgICBoZWlnaHQ6IDUyLjVyZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnNpZGVCYXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAwcmVtO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgODAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJPbmUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC5zaWRlQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIC4zcHggI2YwZjBmMDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4YjA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmluYm94IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDRiNGZmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kYXkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwM2RhMDM7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ZjQ5ZmY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDZweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNpZGVCYXJUd28ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0RGVmYXVsdCB7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI2Fycm93IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI25ld1Byb2plY3RJY29uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wcm9qZWN0TGlzdCB7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5saXN0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDhiMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlUHJvamVjdEJ0biB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5zaWRlQmFyTW9kdWxlIHtcXHJcXG4gICAgICAgICAgICB0b3A6IDByZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5ODM7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIC5zaWRlQmFyTW9kdWxlQ29udGVudCB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOCkgMHB4IDJweCA0cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLnNpZGVCYXJNb2R1bGVDb250ZW50RGl2T25lLCAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5zaWRlQmFyTW9kdWxlQ29udGVudERpdk9uZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuc2lkZUJhck1vZHVsZUNvbnRlbnREaXZUd28ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgI2FkZFByb2plY3Qge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAjY2FuY2VsUHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNDUwMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjZmY0NTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgICAgICAgLnBhZ2VTdHlsZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgM2ZyO1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuY29udGVudE9uZSB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAuY29udGVudE9uZU9uZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMnJlbTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgLmNvbnRlbnRPbmVUd28ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDc0NzQ3O1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICNuZXdMaXN0QnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjQ1MDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAucGFnZUNvbnRlbnQge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgLnRvZG9TdHlsZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAuNXB4IHNvbGlkICNlMmUyZTI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkICNlMmUyZTI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgLmRpdk9uZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2T25lT25lIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBjdXJzaXZlLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXZPbmVUd28ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2RlbGV0ZVRvZG8ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICMwMDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZWRpdFRvZG8ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM2ZDBmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC41cHggc29saWQgIzAwMDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM2ZDBmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAuZGl2VHdvIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEZhY3RvcnkgRnVuY3Rpb24gdG8gY3JlYXRlIHRvZG9zXHJcbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xyXG4gICAgbGV0IHRvZG9zID0gW11cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvZG9zLFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICB9ICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2plY3RNYW5hZ2VyKHRpdGxlKSB7XHJcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IFtdXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9qZWN0c0FycmF5LFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0TWFuYWdlciB9IiwiLy8gVGhpcyBtb2R1bGUgd2lsbCB0YWtlIGNhcmUgb2YgYWxsIHRoZSBET00gcmVsYXRlZCBmdW5jdGlvbmFsaXR5LlxyXG5pbXBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0TWFuYWdlciB9IGZyb20gJy4vRmFjdG9yeSdcclxuaW1wb3J0IHsgXHJcbiAgICByZW5kZXJOZXdQYWdlLCByZW5kZXJQYWdlLCBzaG93UGFnZSwgXHJcbiAgICByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQsIHJlbmRlclRvZG9MaXN0RWxlbWVudCxcclxuICAgIGNsZWFuSW5wdXQsIGRlbGV0ZUFsbCwgY3JlYXRlT3B0aW9ucywgcmVuZGVyT3B0aW9uc1xyXG59IGZyb20gJy4vZG9tZnVudGlvbnMnXHJcbmltcG9ydCB7IHNldEN1cnJlbnRUaXRsZSwgc2V0UHJvamVjdCwgZGVsUHJvamVjdCwgc2V0TGlzdCwgc2V0T3B0aW9uLCBkZWxPcHRpb25zLCBkZWxMaXN0LCBlZGl0TGlzdCB9IGZyb20gJy4vU3RvcmFnZSdcclxuXHJcblxyXG4vLyBCdXR0b25zIHRvIGNoYW5nZSBQYWdlcyBiZXR3ZW5uIEluYm94LCBUb2RheSAmIFByb2plY3RzLlxyXG5jb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lSWNvbicpXHJcbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94Q29udGFpbmVyJylcclxuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5Q29udGFpbmVyJylcclxuY29uc3QgbW9udGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9udGhDb250YWluZXInKVxyXG5cclxuXHJcbi8vIENyZWF0ZSBOZXcgVG9kb2xpc3QgQnV0dG9uXHJcbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZExpc3QnKVxyXG4vLyBEZWxldGUgVG9kb2xpc3QgQnV0dG9uXHJcbmNvbnN0IGRlbGV0ZVRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG4vLyBFZGl0IFRvZG9saXN0IEJ1dHRvblxyXG4vLyAxLiBCdXR0b24gdG8gT3BlbiBNb2RhbCBcclxuY29uc3QgZWRpdFRvZG9MaXN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuLy8gMi4gQnV0dG9uIHRvIGVkaXQgdGhlIFRvZG9saXN0XHJcbmNvbnN0IGVkaXRUb2RvTGlzdDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdExpc3QnKVxyXG4vLyBDcmVhdGUgUHJvamVjdCBCdXR0b25cclxuY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0JylcclxuLy8gRGVsZXRlIFByb2plY3QgQnV0dG9uXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKVxyXG4vLyBSZW5kZXJpbmcgUHJvamVjdCdzIFBhZ2VcclxuY29uc3QgTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKVxyXG5cclxuXHJcbi8vIEdldCB0aGUgY3VycmVudCBwYWdlIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbmxldCBlZGl0ZWRJbmRleFxyXG5sZXQgY3VycmVudFBhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUGFnZScpXHJcbmxldCBjdXJyZW50VGl0bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ3VycmVudFRpdGxlJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ3VycmVudFRpdGxlJykgOiAnSW5ib3gnXHJcbi8vICYgYXBwZW5kIGl0IHRvIHRoZSBET00uXHJcbnNob3dQYWdlKGN1cnJlbnRQYWdlKVxyXG5cclxuXHJcbi8vIDEuIFRoZSBQcm9qZWN0IE1hbmFnZXJcclxuY29uc3QgbXlQcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcignbXlQcm9qZWN0TWFuYWdlcicpXHJcblxyXG4vLyAyLiBBcnJheSBvZiBhbGwgUHJvamVjdFxyXG4vL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgW10pXHJcbmxldCBhbGxQcm9qZWN0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsUHJvamVjdCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWxsUHJvamVjdCcpKSA6IG15UHJvamVjdE1hbmFnZXIucHJvamVjdHNBcnJheVxyXG4vLyAzLiBBcnJheSBvZiBhbGwgb3B0aW9uc1xyXG5sZXQgYWxsT3B0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGxPcHRpb25zJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGxPcHRpb25zJykpIDogW11cclxuXHJcbi8vICNSZW5kZXJpbmcgQWxsIFByb2plY3QgVGl0bGVzIG9uIFNpZGViYXJcclxuYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWwgPT4ge1xyXG4gICAgcmVuZGVyUHJvamVjdExpc3RFbGVtZW50KGVsLnRpdGxlKVxyXG59KVxyXG4vLyAjUmVuZGVyaW5nIGFsbCB0aGUgdG9kb2xpc3RcclxuYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuLy8gI1JlbmRlcmluZyBhbGwgb3B0aW9ucyBcclxuYWxsT3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgcmVuZGVyT3B0aW9ucyhlbGVtZW50KVxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9saXN0Q3JlYXRpb24oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJykudmFsdWVcclxuICAgIGNvbnN0IGFsbFRpdGxlcyA9IGFsbFByb2plY3RBcnJheS5tYXAoZWwgPT4gZWwudGl0bGUpXHJcblxyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZScpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJpb3JpdHknKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGUnKS52YWx1ZVxyXG5cclxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpXHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFsbFRpdGxlc1tpXSA9PT0gcHJvamVjdFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlKVxyXG4gICAgICAgICAgICBzZXRMaXN0KGksIG5ld1RvZG8pXHJcbiAgICAgICAgICAgIGRlbGV0ZUFsbChwYXJlbnQpXHJcbiAgICAgICAgICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZShhbGxUaXRsZXNbaV0pKVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50VGl0bGUocHJvamVjdFRpdGxlKVxyXG4gICAgICAgICAgICBjdXJyZW50VGl0bGUgPSBwcm9qZWN0VGl0bGVcclxuICAgICAgICAgICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvTGlzdERlbGV0aW9uKGUpIHtcclxuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnRcclxuICAgIGNvbnN0IGFsbFRpdGxlcyA9IGFsbFByb2plY3RBcnJheS5tYXAoZWwgPT4gZWwudGl0bGUpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUaXRsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYWxsVGl0bGVzW2ldID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgICAgZGVsTGlzdChpLCBsaXN0VGl0bGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgICAgICBsaXN0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlzdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvTGlzdEVkaXRpb24oKSB7XHJcbiAgICBjb25zdCBhbGxUaXRsZXMgPSBhbGxQcm9qZWN0QXJyYXkubWFwKGVsID0+IGVsLnRpdGxlKVxyXG5cclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpLnZhbHVlXHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWVcclxuICAgIGNvbnN0IHRvZG9Qcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJvamVjdHMnKS52YWx1ZVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFsbFRpdGxlc1tpXSA9PT0gY3VycmVudFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRlZExpc3QgPSBUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlKVxyXG4gICAgICAgICAgICBlZGl0TGlzdChpLCBlZGl0ZWRMaXN0LCBlZGl0ZWRJbmRleCkgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Q3JlYXRpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHZhbHVlKVxyXG4gICAgICAgIHNldFByb2plY3QobmV3UHJvamVjdCwgYWxsUHJvamVjdEFycmF5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdE5hbWUnKS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3RUaXRsZSlcclxuICAgICAgICBzZXRQcm9qZWN0KG5ld1Byb2plY3QsIGFsbFByb2plY3RBcnJheSlcclxuICAgICAgICByZW5kZXJQcm9qZWN0TGlzdEVsZW1lbnQocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBjcmVhdGVPcHRpb25zKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3T3B0aW9ucy5pbm5lckhUTUxcclxuICAgICAgICBzZXRPcHRpb24ob3B0aW9ucylcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByb2plY3REZWxldGlvbihlKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZC50ZXh0Q29udGVudFxyXG4gICAgY29uc3Qgc2VsZWN0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0cycpXHJcbiAgICAvLyBEZWxldGluZyBQcm9qZWN0XHJcbiAgICBkZWxQcm9qZWN0KHByb2plY3RUaXRsZSlcclxuICAgIGxpc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaXN0KVxyXG4gICAgLy8gRGVsZXRpbmcgUHJvamVjdCdzIE9wdGlvbnMgXHJcbiAgICBkZWxPcHRpb25zKHByb2plY3RUaXRsZSlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsT3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhbGxPcHRpb25zW2ldID09PSBwcm9qZWN0VGl0bGUpIHtcclxuICAgICAgICAgICAgc2VsZWN0Qm94LnJlbW92ZSg0ICsgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdHMoKSB7XHJcbiAgICBpZiAoYWxsUHJvamVjdEFycmF5Lmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignSW5ib3gnKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignVG9kYXknKVxyXG4gICAgICAgIHByb2plY3RDcmVhdGlvbignTW9udGgnKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY3JlYXRlRGVmYXVsdFByb2plY3RzKClcclxuXHJcblxyXG4vLyAjUmVuZGVyaW5nIFByb2plY3QgUGFnZVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1BhZ2UnKSkge1xyXG4gICAgICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgICAgICBzZXRDdXJyZW50VGl0bGUoJ0luYm94JylcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlZGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5ob21lSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnSW5ib3gnKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ0luYm94J1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnSW5ib3gnKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ0luYm94J1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnVG9kYXknKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnVG9kYXknKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ1RvZGF5J1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnTW9udGgnKSlcclxuICAgIHNldEN1cnJlbnRUaXRsZSgnTW9udGgnKVxyXG4gICAgY3VycmVudFRpdGxlID0gJ01vbnRoJ1xyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5MaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaXN0JykpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5maXJzdENoaWxkLnRleHRDb250ZW50XHJcbiAgICAgICAgcmVuZGVyUGFnZShyZW5kZXJOZXdQYWdlKHByb2plY3RUaXRsZSkpXHJcbiAgICAgICAgc2V0Q3VycmVudFRpdGxlKHByb2plY3RUaXRsZSlcclxuICAgICAgICBjdXJyZW50VGl0bGUgPSBwcm9qZWN0VGl0bGVcclxuICAgICAgICBhbGxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50b2Rvcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQoZWwudGl0bGUsIGVsLmRlc2NyaXB0aW9uLCBlbC5wcmlvcml0eSwgZWwuZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vICN0b2RvTGlzdCBDcmVhdGlvblxyXG5jcmVhdGVUb2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZG9saXN0Q3JlYXRpb24oKVxyXG4gICAgY2xlYW5JbnB1dCgpXHJcbn0pXHJcblxyXG5cclxuLy8gI3RvZG9saXN0IERlbGV0aW9uXHJcbmRlbGV0ZVRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcbiAgICAgICAgdG9kb0xpc3REZWxldGlvbihlKVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vICN0b2RvbGlzdCBFZGl0aW9uXHJcbi8vIDEuIE9wZW4gdGhlIG1vZHVsZSB0byBlZGl0IHRoZSBsaXN0XHJcbmVkaXRUb2RvTGlzdDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGUnKVxyXG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0JylcclxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRMaXN0JylcclxuICAgICAgICBjb25zdCBpbnB1dEZpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGaXZlJylcclxuXHJcbiAgICAgICAgbW9kdWxlcy5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICAgICAgYWRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBlZGl0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgaW5wdXRGaXZlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbiAgICAgICAgY29uc3QgYWxsVGl0bGVzID0gYWxsUHJvamVjdEFycmF5Lm1hcChlbCA9PiBlbC50aXRsZSlcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudFxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRpdGxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWxsVGl0bGVzW2ldID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IGFsbFByb2plY3RBcnJheVtpXS50b2Rvc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldLnRpdGxlID09PSB0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRlZEluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWRUaXRsZSA9IGFycltpXS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZERlc2NyaXB0aW9uID0gYXJyW2ldLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkUHJpb3JpdHkgPSBhcnJbaV0ucHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWREdWVEYXRlID0gYXJyW2ldLmR1ZURhdGVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZSA9IHNhdmVkVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EZXNjcmlwdGlvbicpLnZhbHVlID0gc2F2ZWREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JykudmFsdWUgPSBzYXZlZFByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9EdWVEYXRlJykudmFsdWUgPSBzYXZlZER1ZURhdGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbi8vIDIuIEVkaXQgdGhlIGFjdHVhbCB0b2RvbGlzdFxyXG5lZGl0VG9kb0xpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZUNvbnRlbnQnKVxyXG4gICAgdG9kb0xpc3RFZGl0aW9uKClcclxuICAgIGRlbGV0ZUFsbChsaXN0KVxyXG4gICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUgPT09IGN1cnJlbnRUaXRsZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRvZG9zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG4vLyAjUHJvamVjdCBDcmVhdGlvblxyXG5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvamVjdENyZWF0aW9uKClcclxufSlcclxuXHJcblxyXG4vLyAjUHJvamVjdCBEZWxldGlvblxyXG5kZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZVByb2plY3RCdG4nKSkge1xyXG4gICAgICAgIHByb2plY3REZWxldGlvbihlKVxyXG4gICAgICAgIHJlbmRlclBhZ2UocmVuZGVyTmV3UGFnZSgnSW5ib3gnKSlcclxuICAgICAgICBzZXRDdXJyZW50VGl0bGUoJ0luYm94JylcclxuICAgICAgICBjdXJyZW50VGl0bGUgPSAnSW5ib3gnXHJcbiAgICAgICAgYWxsUHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRpdGxlID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudG9kb3MuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG9kb0xpc3RFbGVtZW50KGVsLnRpdGxlLCBlbC5kZXNjcmlwdGlvbiwgZWwucHJpb3JpdHksIGVsLmR1ZURhdGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgeyBhbGxQcm9qZWN0QXJyYXksIGFsbE9wdGlvbnMgfSIsImltcG9ydCB7IGFsbFByb2plY3RBcnJheSwgYWxsT3B0aW9ucyB9IGZyb20gXCIuL1BhaW50ZG9tXCJcclxuXHJcblxyXG5jb25zdCBzZXRDdXJyZW50VGl0bGUgPSAodGl0bGUpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDdXJyZW50VGl0bGUnLCB0aXRsZSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBzYXZlIHByb2plY3QgaW4gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IHNldFByb2plY3QgPSAocHJvamVjdCwgYWxsUHJvamVjdHMpID0+IHtcclxuICAgIGFsbFByb2plY3RBcnJheS5wdXNoKHByb2plY3QpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBkZWxldGUgcHJvamVjdCBmcm9tIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBkZWxQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xyXG4gICAgbGV0IGFsbFByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FsbFByb2plY3QnKSkuZmlsdGVyKGVsID0+IGVsLnRpdGxlICE9PSBwcm9qZWN0VGl0bGUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RBcnJheSkpXHJcbn1cclxuXHJcblxyXG4vLyAjRnVuY3Rpb24gdG8gc2F2ZSBsaXN0IGluIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBzZXRMaXN0ID0gKGluZGV4LCBuZXdUb2RvKSA9PiB7XHJcbiAgICBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zLnB1c2gobmV3VG9kbylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuXHJcbi8vICNGdW5jdGlvbiB0byBkZWxldGUgbGlzdCBmcm9tIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBkZWxMaXN0ID0gKGluZGV4LCBsaXN0VGl0bGUpID0+IHtcclxuICAgIGxldCBjaGFuZ2VkVG9kb3MgPSBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zLmZpbHRlcihlbCA9PiBlbC50aXRsZSAhPT0gbGlzdFRpdGxlKVxyXG4gICAgYWxsUHJvamVjdEFycmF5W2luZGV4XS50b2RvcyA9IGNoYW5nZWRUb2Rvc1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FsbFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0QXJyYXkpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGVkaXQgbGlzdCBpbiBsb2NhbHN0b3JhZ2VcclxuY29uc3QgZWRpdExpc3QgPSAoaW5kZXgsIGVkaXRlZExpc3QsIGVkaXRlZEluZGV4KSA9PiB7XHJcbiAgICBsZXQgY2hhbmdlZFRvZG9zID0gYWxsUHJvamVjdEFycmF5W2luZGV4XS50b2Rvc1xyXG4gICAgbGV0IG5ld0FyciA9IGNoYW5nZWRUb2Rvcy5zcGxpY2UoZWRpdGVkSW5kZXgsIDEsIGVkaXRlZExpc3QpXHJcbiAgICBhbGxQcm9qZWN0QXJyYXlbaW5kZXhdLnRvZG9zID0gY2hhbmdlZFRvZG9zXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RBcnJheSkpXHJcbn1cclxuXHJcblxyXG4vLyAjRnVuY3Rpb24gdG8gc2F2ZSBvcHRpb25zIGluIGxvY2Fsc3RvcmFnZVxyXG5jb25zdCBzZXRPcHRpb24gPSAob3B0aW9ucykgPT4ge1xyXG4gICAgYWxsT3B0aW9ucy5wdXNoKG9wdGlvbnMpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWxsT3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KGFsbE9wdGlvbnMpKVxyXG59XHJcblxyXG5cclxuLy8gI0Z1bmN0aW9uIHRvIGRlbGV0ZSBvcHRpb25zIGZyb20gbG9jYWxzdG9yYWdlXHJcbmNvbnN0IGRlbE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgbGV0IGFsbE9wdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBbGxPcHRpb25zJykpLmZpbHRlcihlbCA9PiBlbCAhPT0gb3B0aW9ucylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBbGxPcHRpb25zJywgSlNPTi5zdHJpbmdpZnkoYWxsT3B0aW9ucykpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBzZXRDdXJyZW50VGl0bGUsIHNldFByb2plY3QsIGRlbFByb2plY3QsIHNldExpc3QsIGRlbExpc3QsIGVkaXRMaXN0LCBzZXRPcHRpb24sIGRlbE9wdGlvbnMgfSIsImltcG9ydCB7IGNsZWFuSW5wdXQgfSBmcm9tIFwiLi9kb21mdW50aW9uc1wiO1xyXG5cclxuLy8gUHJvamVjdCBsaXN0IGFuaW1hdGlvblxyXG5jb25zdCBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJyb3dcIik7XHJcblxyXG5hcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0TGlzdFwiKTtcclxuXHJcbiAgaWYgKHByb2plY3RMaXN0LmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlRG93blwiKSkge1xyXG4gICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlRG93blwiKTtcclxuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZVVwXCIpO1xyXG4gICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0ZURvd25cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZURvd25cIik7XHJcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVVcFwiKTtcclxuICAgIGFycm93LmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVEb3duXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBTaWRlIGJhciBhbmltYXRpb24gKCBmb3IgZGVza3RvcCApXHJcbmNvbnN0IG5hdlNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwYW5uXCIpO1xyXG5cclxubmF2U3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcclxuICBjb25zdCBzaWRlQmFyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyT25lXCIpO1xyXG4gIGNvbnN0IHNpZGVCYXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVCYXJUd29cIik7XHJcblxyXG4gIGlmIChtYWluQ29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGlkZUxlZnRcIikpIHtcclxuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZUxlZnRcIik7XHJcbiAgICBzaWRlQmFyT25lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHNpZGVCYXJUd28uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0XCIpO1xyXG4gICAgc2lkZUJhck9uZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBzaWRlQmFyVHdvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gU2lkZSBiYXIgYW5pbWF0aW9uICggZm9yIG1vYmlsZSApXHJcbmNvbnN0IHNwYW5QaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BhblBob25lXCIpO1xyXG5cclxuc3BhblBob25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhclwiKTtcclxuXHJcbiAgaWYgKHNpZGVCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xpZGVMZWZ0UGhvbmVcIikpIHtcclxuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTGVmdFBob25lXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnRQaG9uZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gSW5zZXJ0IGN1cnJlbnQgZGF0ZSBpbiB0aGUgc3ZnXHJcbmNvbnN0IHRvZGF5U3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheURhdGVcIik7XHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxudG9kYXlTdmcudGV4dENvbnRlbnQgPSBkYXRlLmdldFVUQ0RhdGUoKTtcclxuXHJcbi8vIE9wZW4gJiBDbG9zZSBNb2R1bGVcclxuY29uc3QgbW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2R1bGVcIik7XHJcbi8vIE9wZW4gTW9kYWwgQnV0dG9uc1xyXG5jb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1c0ljb25cIik7XHJcblxyXG4vLyBDbG9zZSBNb2RhbCBCdXR0b25zXHJcbmNvbnN0IGFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTGlzdFwiKTtcclxuY29uc3QgZWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdExpc3RcIik7XHJcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsTGlzdFwiKTtcclxuXHJcbi8vIHBsdXNJY29uICYgbmV3TGlzdEJ0biBhcmUgdHdvIGRpZmZlcmVudCBidG5zIGJ1dCBzZXJ2ZXMgdGhlIHNhbWUgcHVycG9zZS5cclxucGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyXCIpO1xyXG5cclxuICBpZiAoc2lkZUJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGlkZUxlZnRQaG9uZVwiKSkge1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVMZWZ0UGhvbmVcIik7XHJcbiAgfVxyXG5cclxuICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gIGFkZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGVkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNldEJ0bk9uZSgpIHtcclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdMaXN0QnV0dG9uXCIpKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0xpc3RCdXR0b25cIik7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgICAgYWRkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgc2V0QnRuT25lKCk7XHJcbn0pO1xyXG5cclxuYWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSk7XHJcblxyXG5lZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbW9kdWxlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufSk7XHJcblxyXG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0Rml2ZVwiKTtcclxuICBtb2R1bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHByb2plY3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgY2xlYW5JbnB1dCgpO1xyXG59KTtcclxuXHJcbi8vIG5ldyBwcm9qZWN0IGJ1dHRvblxyXG5jb25zdCBtb2R1bGUzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyTW9kdWxlXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xyXG5cclxubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1vZHVsZTMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuXHJcbi8vIEZvciBvcGVuaW5nIFNpZGVCYXIgUHJvamVjdCBNb2R1bGVcclxuY29uc3QgbmV3UHJvamVjdEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RJY29uXCIpO1xyXG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxQcm9qZWN0XCIpO1xyXG5cclxubmV3UHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0TW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlQmFyTW9kdWxlXCIpO1xyXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIik7XHJcbiAgcHJvamVjdE1vZHVsZS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG5jYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZUJhck1vZHVsZVwiKTtcclxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xyXG4gIHByb2plY3RNb2R1bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbn0pO1xyXG4iLCIvLyDwn6aaIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgXHJcbi8vIGRlYWxzIHdpdGggcmVuZGVyaW5nIG9uIHRoZSBET00uXHJcblxyXG5cclxuLy8gMS4gRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHBhZ2UgXHJcbmNvbnN0IHJlbmRlck5ld1BhZ2UgPSAodGl0bGUpID0+IHtcclxuICAgIGNvbnN0IFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgUGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlU3R5bGUnKVxyXG4gICAgUGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRPbmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRPbmVPbmVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz0ndGl0bGVPZlBhZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRPbmVUd29cIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9J25ld0xpc3RCdXR0b24nIGNsYXNzPVwiaW52ZXJ0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0IDMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9XCJqZDRGQmdcIiBmaWxsPVwiI2ZmZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkgOGg3YS41LjUgMCAxIDEgMCAxSDl2N2EuNS41IDAgMSAxLTEgMFY5SDFhLjUuNSAwIDAgMSAwLTFoN1YxYS41LjUgMCAwIDEgMSAwdjd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgbWFzaz1cInVybCgjamQ0RkJnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0tNC0zaDI0djI0SC00elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIExpc3RcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlQ29udGVudFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIFBhZ2VcclxufVxyXG5cclxuXHJcbi8vIFJlbmRlclBhZ2UgJiBTaG93UGFnZSBkbyBzaW1pbGFyIHRoaW5ncy4gQnV0IHJlbmRlclBhZ2UgZGVhbHMgd2l0aCB0aGUgbG9jYWwgc3RvcmFnZS5cclxuXHJcbi8vIDIuIEZ1bmN0aW9uIHRvIHJlbmRlciBhIHBhZ2UgdG8gdGhlIGRvbVxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhZ2UpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUGFnZScsIHBhZ2UuaW5uZXJIVE1MKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKVxyXG59XHJcblxyXG5cclxuLy8gMy4gRnVuY3Rpb24gdG8gc2hvdyBhIHBhZ2UgdG8gdGhlIGRvbS5cclxuZnVuY3Rpb24gc2hvd1BhZ2UoZWwpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICBjb25zdCBjdXJQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGN1clBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZVN0eWxlJylcclxuICAgIGN1clBhZ2UuaW5uZXJIVE1MID0gZWxcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VyUGFnZSlcclxufVxyXG5cclxuXHJcbi8vIDQuIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0bGlzdCBlbGVtZW50XHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0RWxlbWVudChwcm9qZWN0VGl0bGUpIHtcclxuICAgIGlmIChwcm9qZWN0VGl0bGUgPT09ICdJbmJveCcgfHwgcHJvamVjdFRpdGxlID09PSAnVG9kYXknIHx8IHByb2plY3RUaXRsZSA9PT0gJ01vbnRoJykge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0JylcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0JylcclxuICAgICAgICBjb25zdCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBkaXZPbmUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGVcclxuICAgICAgICBjb25zdCBkaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBkaXZUd28uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdCcpXHJcbiAgICAgICAgZGl2VHdvLmlubmVySFRNTCA9ICc8aDEgY2xhc3M9XCJkZWxldGVQcm9qZWN0QnRuXCI+eDwvaDE+J1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2T25lKVxyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2VHdvKVxyXG4gICAgICAgIFxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobGlzdClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIDUuIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyB0b2RvbGlzdCBlbGVtZW50XHJcbmZ1bmN0aW9uIHJlbmRlclRvZG9MaXN0RWxlbWVudCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVkYXRlKSB7XHJcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlQ29udGVudCcpXHJcblxyXG4gICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kb1N0eWxlJylcclxuICAgIHRvZG9FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdkaXZPbmUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkaXZPbmVPbmUnPlxyXG4gICAgICAgICAgICAgICAgPHA+JHt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3ByaW9yaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7ZHVlZGF0ZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rpdk9uZVR3byc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdkZWxldGUnIGlkPSdkZWxldGVUb2RvJz7inYw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2VkaXQnIGlkPSdlZGl0VG9kbyc+8J+UhDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdkaXZUd28nPlxyXG4gICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudClcclxufVxyXG5cclxuXHJcbi8vIDYuIEZ1bmN0aW9uIHRvIGNsZWFuIHRoZSBpbnB1dCBmaWVsZFxyXG5mdW5jdGlvbiBjbGVhbklucHV0KCkge1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9UaXRsZScpLnZhbHVlID0gJydcclxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1ByaW9yaXR5JykudmFsdWUgPSAnJ1xyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0R1ZURhdGUnKS52YWx1ZSA9ICcnXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJykudmFsdWUgPSAnJ1xyXG59XHJcblxyXG5cclxuLy8gNy4gRnVuY3Rpb24gdG8gZGVsZXRlIGV2ZXJ5IGRvbSBlbGVtZW50IGluIGEgZGl2XHJcbmZ1bmN0aW9uIGRlbGV0ZUFsbChwYXJlbnQpIHtcclxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyA4LiBGdW5jdGlvbiB0byBjcmVhdGUgbmV3IG9wdGlvbnMgXHJcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMocHJvamVjdFRpdGxlKSB7XHJcbiAgICBsZXQgYWxsT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJvamVjdHMnKVxyXG4gICAgY29uc3QgbmV3T3B0aW9uID0gbmV3IE9wdGlvbihwcm9qZWN0VGl0bGUsIHByb2plY3RUaXRsZSlcclxuICAgIGFsbE9wdGlvbnMuYWRkKG5ld09wdGlvbiwgbnVsbClcclxuICAgIHJldHVybiBuZXdPcHRpb25cclxufVxyXG5cclxuXHJcbi8vICA5LiBGdW5jdGlvbiB0byByZW5kZXIgb3B0aW9ucyBcclxuZnVuY3Rpb24gcmVuZGVyT3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RzJylcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9JHtvcHRpb25zfT4ke29wdGlvbnN9PC9vcHRpb24+YFxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG9wdGlvbilcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgcmVuZGVyTmV3UGFnZSwgcmVuZGVyUGFnZSwgc2hvd1BhZ2UsIHJlbmRlclByb2plY3RMaXN0RWxlbWVudCwgXHJcbiAgICByZW5kZXJUb2RvTGlzdEVsZW1lbnQsIGNsZWFuSW5wdXQsIGRlbGV0ZUFsbCwgY3JlYXRlT3B0aW9ucyxcclxuICAgIHJlbmRlck9wdGlvbnNcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBTYXNzIGZpbGVzIPCflK5cclxuaW1wb3J0Jy4vc2Fzcy9tYWluLnNjc3MnXHJcblxyXG5cclxuLy8gSmF2YVNjcmlwdFxyXG5pbXBvcnQgUGFpbnRkb20gZnJvbSAnLi9Nb2R1bGVzL1BhaW50ZG9tJ1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9Nb2R1bGVzL1VJJyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==