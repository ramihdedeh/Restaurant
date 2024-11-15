/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\"; // Clear existing content\r\n  \r\n    // Create a container for the contact section\r\n    const contactContainer = document.createElement(\"div\");\r\n    contactContainer.style = \"text-align: center; padding: 20px;\";\r\n\r\n    // Add a headline\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"Get in Touch with Us!\";\r\n    headline.style = \"margin-bottom: 20px; font-size: 2em; color: #333;\";\r\n  \r\n    // Add contact information\r\n    const contactInfo = document.createElement(\"p\");\r\n    contactInfo.textContent = \"📞 Phone: 123-456-7890 | ✉️ Email: contact@bestrestaurant.com\";\r\n    contactInfo.style = \"margin-bottom: 15px; font-size: 1.2em;\";\r\n  \r\n    // Add location details\r\n    const location = document.createElement(\"p\");\r\n    location.textContent = \"📍 Address: 123 Food Street, Gourmet City, Yummyland\";\r\n    location.style = \"margin-bottom: 20px; font-size: 1.2em;\";\r\n  \r\n    // Add business hours\r\n    const hours = document.createElement(\"p\");\r\n    hours.textContent = \"⏰ Business Hours: Mon-Sun, 10:00 AM - 10:00 PM\";\r\n    hours.style = \"margin-bottom: 15px; font-size: 1.2em;\";\r\n  \r\n    // Append all elements to the container\r\n    contactContainer.appendChild(headline);\r\n    contactContainer.appendChild(contactInfo);\r\n    contactContainer.appendChild(location);\r\n    contactContainer.appendChild(hours);\r\n\r\n    // Append the container to the content div\r\n    content.appendChild(contactContainer);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0IsWUFBWTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxpQkFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUJBQWlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcz9kNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciB0aGUgY29udGFjdCBzZWN0aW9uXHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuc3R5bGUgPSBcInRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjBweDtcIjtcclxuXHJcbiAgICAvLyBBZGQgYSBoZWFkbGluZVxyXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiR2V0IGluIFRvdWNoIHdpdGggVXMhXCI7XHJcbiAgICBoZWFkbGluZS5zdHlsZSA9IFwibWFyZ2luLWJvdHRvbTogMjBweDsgZm9udC1zaXplOiAyZW07IGNvbG9yOiAjMzMzO1wiO1xyXG4gIFxyXG4gICAgLy8gQWRkIGNvbnRhY3QgaW5mb3JtYXRpb25cclxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb250YWN0SW5mby50ZXh0Q29udGVudCA9IFwi8J+TniBQaG9uZTogMTIzLTQ1Ni03ODkwIHwg4pyJ77iPIEVtYWlsOiBjb250YWN0QGJlc3RyZXN0YXVyYW50LmNvbVwiO1xyXG4gICAgY29udGFjdEluZm8uc3R5bGUgPSBcIm1hcmdpbi1ib3R0b206IDE1cHg7IGZvbnQtc2l6ZTogMS4yZW07XCI7XHJcbiAgXHJcbiAgICAvLyBBZGQgbG9jYXRpb24gZGV0YWlsc1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gXCLwn5ONIEFkZHJlc3M6IDEyMyBGb29kIFN0cmVldCwgR291cm1ldCBDaXR5LCBZdW1teWxhbmRcIjtcclxuICAgIGxvY2F0aW9uLnN0eWxlID0gXCJtYXJnaW4tYm90dG9tOiAyMHB4OyBmb250LXNpemU6IDEuMmVtO1wiO1xyXG4gIFxyXG4gICAgLy8gQWRkIGJ1c2luZXNzIGhvdXJzXHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaG91cnMudGV4dENvbnRlbnQgPSBcIuKPsCBCdXNpbmVzcyBIb3VyczogTW9uLVN1biwgMTA6MDAgQU0gLSAxMDowMCBQTVwiO1xyXG4gICAgaG91cnMuc3R5bGUgPSBcIm1hcmdpbi1ib3R0b206IDE1cHg7IGZvbnQtc2l6ZTogMS4yZW07XCI7XHJcbiAgXHJcbiAgICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXJcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgY29udGFpbmVyIHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _ris_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ris.jpg */ \"./src/ris.jpg\");\n\r\n\r\nfunction loadHome() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\"; // Clear existing content\r\n\r\n    // Create a headline\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"Welcome to The Best Restaurant!\";\r\n\r\n    // Create a short description\r\n    const description = document.createElement(\"p\");\r\n    description.textContent = \"At The Best Restaurant, we serve delicious food with a passion.\";\r\n\r\n    // Append headline and description\r\n    content.appendChild(headline);\r\n    content.appendChild(description);\r\n\r\n    // Create the second section (image and text side-by-side)\r\n    const divsec = document.createElement(\"div\");\r\n    divsec.style = \"display: flex; align-items: flex-start; gap: 20px; margin-top: 20px;\";\r\n\r\n    // Create image element\r\n    const img = document.createElement(\"img\");\r\n    img.src = _ris_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img.alt = \"Restaurant Image\"; // Add alt text for accessibility\r\n    img.style = \"width: 100%; max-width: 400px; height: auto; border-radius: 8px;\";\r\n\r\n    // Create the content paragraph next to the image\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = \"At The Best Restaurant, we serve delicious food with a passion. Our chefs use only the finest ingredients to prepare mouth-watering dishes that will leave you coming back for more.\";\r\n    paragraph.style = \"max-width: 400px; font-size: 1rem; color: #555;\";\r\n\r\n    // Create additional info paragraph\r\n    const paragraph2 = document.createElement(\"p\");\r\n    paragraph2.textContent = \"Whether you're here for a casual meal with friends or a special celebration, we ensure that every dining experience is exceptional. Join us today and taste the best!\";\r\n    paragraph2.style = \"max-width: 400px; font-size: 1rem; color: #555; margin-top: 10px;\";\r\n\r\n    // Add elements to the divsec\r\n    divsec.appendChild(img);\r\n    divsec.appendChild(paragraph);\r\n    divsec.appendChild(paragraph2);\r\n\r\n    // Append everything to the content\r\n    content.appendChild(divsec);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUNqQztBQUNlO0FBQ2Y7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlCQUF5QixXQUFXLGlCQUFpQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFDQUFRO0FBQ3RCLGtDQUFrQztBQUNsQyw4QkFBOEIsa0JBQWtCLGNBQWMsbUJBQW1CO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlCQUFpQixZQUFZO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGlCQUFpQixhQUFhLGlCQUFpQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmlzaW1hZ2UgZnJvbSAnLi9yaXMuanBnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxyXG5cclxuICAgIC8vIENyZWF0ZSBhIGhlYWRsaW5lXHJcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFRoZSBCZXN0IFJlc3RhdXJhbnQhXCI7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgc2hvcnQgZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQXQgVGhlIEJlc3QgUmVzdGF1cmFudCwgd2Ugc2VydmUgZGVsaWNpb3VzIGZvb2Qgd2l0aCBhIHBhc3Npb24uXCI7XHJcblxyXG4gICAgLy8gQXBwZW5kIGhlYWRsaW5lIGFuZCBkZXNjcmlwdGlvblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCBzZWN0aW9uIChpbWFnZSBhbmQgdGV4dCBzaWRlLWJ5LXNpZGUpXHJcbiAgICBjb25zdCBkaXZzZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2c2VjLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAyMHB4OyBtYXJnaW4tdG9wOiAyMHB4O1wiO1xyXG5cclxuICAgIC8vIENyZWF0ZSBpbWFnZSBlbGVtZW50XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nLnNyYyA9IHJpc2ltYWdlO1xyXG4gICAgaW1nLmFsdCA9IFwiUmVzdGF1cmFudCBJbWFnZVwiOyAvLyBBZGQgYWx0IHRleHQgZm9yIGFjY2Vzc2liaWxpdHlcclxuICAgIGltZy5zdHlsZSA9IFwid2lkdGg6IDEwMCU7IG1heC13aWR0aDogNDAwcHg7IGhlaWdodDogYXV0bzsgYm9yZGVyLXJhZGl1czogOHB4O1wiO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCBwYXJhZ3JhcGggbmV4dCB0byB0aGUgaW1hZ2VcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJBdCBUaGUgQmVzdCBSZXN0YXVyYW50LCB3ZSBzZXJ2ZSBkZWxpY2lvdXMgZm9vZCB3aXRoIGEgcGFzc2lvbi4gT3VyIGNoZWZzIHVzZSBvbmx5IHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgdG8gcHJlcGFyZSBtb3V0aC13YXRlcmluZyBkaXNoZXMgdGhhdCB3aWxsIGxlYXZlIHlvdSBjb21pbmcgYmFjayBmb3IgbW9yZS5cIjtcclxuICAgIHBhcmFncmFwaC5zdHlsZSA9IFwibWF4LXdpZHRoOiA0MDBweDsgZm9udC1zaXplOiAxcmVtOyBjb2xvcjogIzU1NTtcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgYWRkaXRpb25hbCBpbmZvIHBhcmFncmFwaFxyXG4gICAgY29uc3QgcGFyYWdyYXBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IFwiV2hldGhlciB5b3UncmUgaGVyZSBmb3IgYSBjYXN1YWwgbWVhbCB3aXRoIGZyaWVuZHMgb3IgYSBzcGVjaWFsIGNlbGVicmF0aW9uLCB3ZSBlbnN1cmUgdGhhdCBldmVyeSBkaW5pbmcgZXhwZXJpZW5jZSBpcyBleGNlcHRpb25hbC4gSm9pbiB1cyB0b2RheSBhbmQgdGFzdGUgdGhlIGJlc3QhXCI7XHJcbiAgICBwYXJhZ3JhcGgyLnN0eWxlID0gXCJtYXgtd2lkdGg6IDQwMHB4OyBmb250LXNpemU6IDFyZW07IGNvbG9yOiAjNTU1OyBtYXJnaW4tdG9wOiAxMHB4O1wiO1xyXG5cclxuICAgIC8vIEFkZCBlbGVtZW50cyB0byB0aGUgZGl2c2VjXHJcbiAgICBkaXZzZWMuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGRpdnNlYy5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG4gICAgZGl2c2VjLmFwcGVuZENoaWxkKHBhcmFncmFwaDIpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBldmVyeXRoaW5nIHRvIHRoZSBjb250ZW50XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdnNlYyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nfunction switchTab(tabfunction){\r\n    const content = document.getElementById(\"content\")\r\n    content.innerHTML='';\r\n\r\n    tabfunction();\r\n\r\n}\r\n\r\nfunction setupNavigation(){\r\n    const navButtons=document.querySelectorAll(\"nav button\")\r\n\r\n        navButtons.forEach(button => {\r\n            button.addEventListener(\"click\" , event => {\r\n                const tab = event.target.id\r\n\r\n                if(tab === \"home\")switchTab(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n                if(tab === \"contact\")switchTab(_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n                if(tab === \"menu\")switchTab(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n            });\r\n        });\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Load the Home tab by default\r\n    setupNavigation(); // Set up navigation\r\n  });\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QjtBQUNPO0FBQ1A7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkNBQVE7QUFDcEQsK0NBQStDLGdEQUFXO0FBQzFELDRDQUE0Qyw2Q0FBUTtBQUNwRDtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUSxJQUFJO0FBQ2hCLHVCQUF1QjtBQUN2QixHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGxvYWRDb250YWN0ICBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hUYWIodGFiZnVuY3Rpb24pe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgY29udGVudC5pbm5lckhUTUw9Jyc7XHJcblxyXG4gICAgdGFiZnVuY3Rpb24oKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwTmF2aWdhdGlvbigpe1xyXG4gICAgY29uc3QgbmF2QnV0dG9ucz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGJ1dHRvblwiKVxyXG5cclxuICAgICAgICBuYXZCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiID0gZXZlbnQudGFyZ2V0LmlkXHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGFiID09PSBcImhvbWVcIilzd2l0Y2hUYWIobG9hZEhvbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYodGFiID09PSBcImNvbnRhY3RcIilzd2l0Y2hUYWIobG9hZENvbnRhY3QpO1xyXG4gICAgICAgICAgICAgICAgaWYodGFiID09PSBcIm1lbnVcIilzd2l0Y2hUYWIobG9hZE1lbnUpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGxvYWRIb21lKCk7IC8vIExvYWQgdGhlIEhvbWUgdGFiIGJ5IGRlZmF1bHRcclxuICAgIHNldHVwTmF2aWdhdGlvbigpOyAvLyBTZXQgdXAgbmF2aWdhdGlvblxyXG4gIH0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\"; // Clear existing content\r\n  \r\n    // Create a headline for the menu\r\n    const headline = document.createElement(\"h1\");\r\n    headline.textContent = \"Our Menu\";\r\n    headline.style = \"text-align: center; font-size: 2rem; color: #333; margin-bottom: 20px;\";\r\n\r\n    // Create a list to display menu items\r\n    const menuList = document.createElement(\"ul\");\r\n    menuList.style = \"list-style-type: none; padding: 0;\";\r\n\r\n    // Array of menu items\r\n    const menuItems = [\"Pizza\", \"Pasta\", \"Salad\", \"Desserts\"];\r\n    \r\n    // Loop through the items and add them to the list\r\n    menuItems.forEach(item => {\r\n      const menuItem = document.createElement(\"li\");\r\n      menuItem.textContent = item;\r\n      menuItem.style = \"font-size: 1.2rem; color: #555; padding: 10px 0; border-bottom: 1px solid #ddd;\";\r\n      menuList.appendChild(menuItem);\r\n    });\r\n  \r\n    // Append headline and menu list to the content\r\n    content.appendChild(headline);\r\n    content.appendChild(menuList);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpQkFBaUIsYUFBYSxvQkFBb0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxhQUFhLGlCQUFpQiw4QkFBOEI7QUFDdkc7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGxpbmUgZm9yIHRoZSBtZW51XHJcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xyXG4gICAgaGVhZGxpbmUuc3R5bGUgPSBcInRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAycmVtOyBjb2xvcjogIzMzMzsgbWFyZ2luLWJvdHRvbTogMjBweDtcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBsaXN0IHRvIGRpc3BsYXkgbWVudSBpdGVtc1xyXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBtZW51TGlzdC5zdHlsZSA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lOyBwYWRkaW5nOiAwO1wiO1xyXG5cclxuICAgIC8vIEFycmF5IG9mIG1lbnUgaXRlbXNcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcIlBpenphXCIsIFwiUGFzdGFcIiwgXCJTYWxhZFwiLCBcIkRlc3NlcnRzXCJdO1xyXG4gICAgXHJcbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIGl0ZW1zIGFuZCBhZGQgdGhlbSB0byB0aGUgbGlzdFxyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgIG1lbnVJdGVtLnN0eWxlID0gXCJmb250LXNpemU6IDEuMnJlbTsgY29sb3I6ICM1NTU7IHBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XCI7XHJcbiAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gQXBwZW5kIGhlYWRsaW5lIGFuZCBtZW51IGxpc3QgdG8gdGhlIGNvbnRlbnRcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/ris.jpg":
/*!*********************!*\
  !*** ./src/ris.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8723c87abe16bde4340f.jpg";

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;