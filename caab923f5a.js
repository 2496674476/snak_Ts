/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.less */ \"./src/style/main.less\");\n/* harmony import */ var _ts_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/GameControl */ \"./src/ts/GameControl.ts\");\n/* harmony import */ var _font_iconfont_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font/iconfont.css */ \"./src/font/iconfont.css\");\n // 引入食物模块\n\n // 引入字体图标\n\n // 开始游戏\n\nnew _ts_GameControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // 测试代码\n\n//# sourceURL=webpack://eat_snake/./src/index.ts?");

/***/ }),

/***/ "./src/ts/Btns.ts":
/*!************************!*\
  !*** ./src/ts/Btns.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Btns = /*#__PURE__*/_createClass(function Btns() {\n  _classCallCheck(this, Btns);\n\n  this.elebtns = document.querySelector('.Btns').getElementsByTagName('i');\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Btns);\n\n//# sourceURL=webpack://eat_snake/./src/ts/Btns.ts?");

/***/ }),

/***/ "./src/ts/Food.ts":
/*!************************!*\
  !*** ./src/ts/Food.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./src/ts/Snake.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Food = /*#__PURE__*/function () {\n  function Food() {\n    _classCallCheck(this, Food);\n\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.Element = document.getElementById('food');\n    this.top = this.Element.offsetTop;\n    this.left = this.Element.offsetLeft;\n  }\n\n  _createClass(Food, [{\n    key: \"move\",\n    value: function move() {\n      var left = Math.round(Math.random() * this.snake.move_x_y / this.snake.Head_width) * this.snake.Head_width;\n      var top = Math.round(Math.random() * this.snake.move_x_y / this.snake.Head_width) * this.snake.Head_width;\n      this.Element.style.left = left + 'px';\n      this.Element.style.top = top + 'px'; // 更新\n\n      this.top = this.Element.offsetTop;\n      this.left = this.Element.offsetLeft;\n      console.log('move', this.snake.Head_width, 'left', left);\n    }\n  }]);\n\n  return Food;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);\n\n//# sourceURL=webpack://eat_snake/./src/ts/Food.ts?");

/***/ }),

/***/ "./src/ts/GameControl.ts":
/*!*******************************!*\
  !*** ./src/ts/GameControl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/_core-js@3.21.1@core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/_core-js@3.21.1@core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/_core-js@3.21.1@core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/_core-js@3.21.1@core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Panel */ \"./src/ts/Panel.ts\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Snake */ \"./src/ts/Snake.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Food */ \"./src/ts/Food.ts\");\n/* harmony import */ var _Btns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Btns */ \"./src/ts/Btns.ts\");\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar _a;\n\n\n\n\n\n\nvar GameControl = /*#__PURE__*/function () {\n  function GameControl() {\n    _classCallCheck(this, GameControl);\n\n    this.panel = new _Panel__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    this.food = new _Food__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n    this.btns = new _Btns__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n    this.isLive = true; // 初始化\n\n    this._init(); // 开始\n\n\n    this.run();\n  } //  初始化 注册事件 的函数\n\n\n  _createClass(GameControl, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      document.addEventListener(\"keydown\", this.setDirection.bind(this));\n      Array.prototype.slice.call(this.btns.elebtns).forEach(function (item) {\n        item.addEventListener('click', _this.ClicksetDirection.bind(_this));\n      }); // 刷新 食物\n\n      this.food.move(); // this.btns.elebtns.\n    }\n  }, {\n    key: \"setDirection\",\n    value: function setDirection(event) {\n      // 阻止屏幕滚动的默认事件\n      if (event.key != ('ArrowDown' || 0) && event.key != ('ArrowLeft' || 0) && event.key != ('ArrowRight' || 0) && event.key != ('ArrowUp' || 0)) {\n        return false;\n      } // 设置蛇的移动方向\n\n\n      event.preventDefault();\n      this.snake.Direction = event.key;\n    }\n  }, {\n    key: \"ClicksetDirection\",\n    value: function ClicksetDirection(event) {\n      // 点击设置方向\n      this.snake.Direction = event.target.dataset.type;\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      var _this2 = this;\n\n      // 获取当前坐标\n      var X = this.snake.x;\n      var Y = this.snake.y; // 确定移动后坐标\n\n      switch (this.snake.Direction) {\n        case \"ArrowUp\":\n        case \"Up\":\n          // 向上移动 top 减少\n          Y -= this.snake.Head_width;\n          break;\n\n        case \"ArrowDown\":\n        case \"Down\":\n          // 向下移动 top 增加\n          Y += this.snake.Head_width;\n          break;\n\n        case \"ArrowLeft\":\n        case \"Left\":\n          // 向左移动 left 减少\n          X -= this.snake.Head_width;\n          break;\n\n        case \"ArrowRight\":\n        case \"Right\":\n          // 向右移动 left 增加\n          X += this.snake.Head_width;\n          break;\n      } // 检测是否吃到十五\n\n\n      if (this.snake.Direction != '') {\n        this.checkEat(X, Y);\n      } // 移动\n\n\n      try {\n        this.snake.y = Y;\n        this.snake.x = X;\n      } catch (error) {\n        // 说明撞墙了\n        this.isLive = false;\n        alert(error + 'GAME OVER!');\n      } // 递归调用\n\n\n      this.isLive && setTimeout(function () {\n        _this2.run();\n      }, 300 - (this.panel.level - 1) * 30);\n    }\n  }, {\n    key: \"checkEat\",\n    value: function checkEat(X, Y) {\n      if (Math.abs(X - this.food.left) <= 2 && Math.abs(Y - this.food.top) <= 2) {\n        // 加分 刷新食物\n        this.food.move();\n        this.panel.addScore();\n        this.snake.addBody();\n      }\n    }\n  }]);\n\n  return GameControl;\n}();\n\nvar f1 = new _Food__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {\n  f1.move();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameControl);\n\n//# sourceURL=webpack://eat_snake/./src/ts/GameControl.ts?");

/***/ }),

/***/ "./src/ts/Panel.ts":
/*!*************************!*\
  !*** ./src/ts/Panel.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Panel = /*#__PURE__*/function () {\n  function Panel() {\n    _classCallCheck(this, Panel);\n\n    this.score_box = document.querySelector('.score_box');\n    this.level_box = document.querySelector('.level_box');\n    this.score = 0;\n    this.level = 1;\n    this.maxLevel = 10;\n    this.upScore = 5;\n  }\n\n  _createClass(Panel, [{\n    key: \"addScore\",\n    value: function addScore() {\n      this.score++;\n      this.score_box.innerHTML = this.score + '';\n\n      if (this.score % this.upScore === 0) {\n        this.addLevel();\n      }\n    }\n  }, {\n    key: \"addLevel\",\n    value: function addLevel() {\n      if (this.level < this.maxLevel) {\n        this.level++;\n        this.level_box.innerHTML = this.level + '';\n      }\n    }\n  }]);\n\n  return Panel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);\n\n//# sourceURL=webpack://eat_snake/./src/ts/Panel.ts?");

/***/ }),

/***/ "./src/ts/Snake.ts":
/*!*************************!*\
  !*** ./src/ts/Snake.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Snake = /*#__PURE__*/function () {\n  function Snake() {\n    _classCallCheck(this, Snake);\n\n    this.snakeBox = document.querySelector('.snakeBox');\n    this.Direction = '';\n    this.bodies = this.snakeBox.getElementsByTagName('div');\n    this.move_x_y = Math.round(100 / (375 / 290) * document.body.clientWidth / 100);\n    this.Head_width = Math.round(100 / (375 / 10) * document.body.clientWidth / 100);\n    this.head = document.querySelector('.snakeBox>div');\n  }\n\n  _createClass(Snake, [{\n    key: \"x\",\n    get: function get() {\n      return this.head.offsetLeft;\n    },\n    set: function set(value) {\n      if (this.x === value) {\n        return;\n      }\n\n      var bd1 = this.bodies[1];\n\n      if (bd1 && bd1.offsetLeft === value) {\n        if (value > this.x) {\n          value = this.x - this.Head_width;\n        } else if (value < this.x) {\n          value = this.x + this.Head_width;\n        }\n      }\n\n      if (value < 0 || value > this.move_x_y + 3) {\n        throw new Error('撞墙啦!');\n      }\n\n      this.checkHeadBody();\n      this.moveBody();\n      this.head.style.left = value + 'px';\n      console.log('snake', this.Head_width, 'left', value);\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this.head.offsetTop;\n    },\n    set: function set(value) {\n      if (this.y === value) {\n        return;\n      }\n\n      var bd1 = this.bodies[1];\n\n      if (bd1 && bd1.offsetTop === value) {\n        if (value > this.y) {\n          value = this.y - this.Head_width;\n        } else if (value < this.y) {\n          value = this.y + this.Head_width;\n        }\n      }\n\n      if (value < 0 || value > this.move_x_y + 3) {\n        throw new Error('撞墙啦!');\n      } // 撞到自己检测\n\n\n      this.checkHeadBody();\n      this.moveBody();\n      this.head.style.top = value + 'px';\n      console.log(this.Head_width);\n    } // 身体边长\n\n  }, {\n    key: \"addBody\",\n    value: function addBody() {\n      // 创建div 并插入到 最后 高级语法\n      this.snakeBox.insertAdjacentHTML('beforeend', '<div style=\"position:absolute\"></div>');\n    }\n  }, {\n    key: \"moveBody\",\n    value: function moveBody() {\n      for (var i = this.bodies.length - 1; i > 0; i--) {\n        this.bodies[i].style.left = this.bodies[i - 1].style.left;\n        this.bodies[i].style.top = this.bodies[i - 1].style.top;\n      }\n    }\n  }, {\n    key: \"checkHeadBody\",\n    value: function checkHeadBody() {\n      for (var i = 1; i < this.bodies.length; i++) {\n        if (this.x === this.bodies[i].offsetLeft && this.y === this.bodies[i].offsetTop) {\n          throw new Error('撞到自己了1');\n        }\n      }\n    }\n  }]);\n\n  return Snake;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);\n\n//# sourceURL=webpack://eat_snake/./src/ts/Snake.ts?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/a-callable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/a-callable.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/_core-js@3.21.1@core-js/internals/try-to-string.js\");\n\nvar TypeError = global.TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/an-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/an-object.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-object.js\");\n\nvar String = global.String;\nvar TypeError = global.TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw TypeError(String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-for-each.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-for-each.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $forEach = (__webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-iteration.js\").forEach);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n} : [].forEach;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-includes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-includes.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-indexed-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/_core-js@3.21.1@core-js/internals/length-of-array-like.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-iteration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-iteration.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-bind-context.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/_core-js@3.21.1@core-js/internals/length-of-array-like.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-species-create.js\");\n\nvar push = uncurryThis([].push);\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_REJECT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that);\n    var length = lengthOfArrayLike(self);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push(target, value);      // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push(target, value);      // filterReject\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterReject` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterReject: createMethod(7)\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-method-has-species-support.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-method-has-species-support.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/_core-js@3.21.1@core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-method-is-strict.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-method-is-strict.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call -- required for testing\n    method.call(null, argument || function () { return 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-slice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-slice.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis([].slice);\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-slice.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-species-constructor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-species-constructor.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-array.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-constructor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-object.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar Array = global.Array;\n\n// a part of `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/array-species-create.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/array-species-create.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-species-constructor.js\");\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/classof-raw.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/classof-raw.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/classof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/classof.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-string-tag-support.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.21.1@core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar Object = global.Object;\n\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/copy-constructor-properties.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/copy-constructor-properties.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/_core-js@3.21.1@core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source, exceptions) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {\n      defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n    }\n  }\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/create-non-enumerable-property.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/create-non-enumerable-property.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/create-property-descriptor.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/create-property-descriptor.js ***!
  \**************************************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/create-property.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/create-property.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-property-key.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPropertyKey(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/document-create-element.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/document-create-element.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/dom-iterables.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/dom-iterables.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/dom-token-list-prototype.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/dom-token-list-prototype.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/_core-js@3.21.1@core-js/internals/document-create-element.js\");\n\nvar classList = documentCreateElement('span').classList;\nvar DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;\n\nmodule.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/dom-token-list-prototype.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/engine-user-agent.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/engine-user-agent.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.21.1@core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/engine-v8-version.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/engine-v8-version.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/_core-js@3.21.1@core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/enum-bug-keys.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/enum-bug-keys.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/export.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/export.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-descriptor.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/_core-js@3.21.1@core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.21.1@core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/_core-js@3.21.1@core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n  options.name        - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty == typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/fails.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/fails.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/function-apply.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/function-apply.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/function-apply.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/function-bind-context.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/function-bind-context.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/function-bind-native.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/function-bind-native.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/function-call.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/function-call.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/function-name.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/function-name.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\n\nvar EXISTS = hasOwn(FunctionPrototype, 'name');\n// additional protection from minified / mangled / dropped function names\nvar PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));\n\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/function-name.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar bind = FunctionPrototype.bind;\nvar call = FunctionPrototype.call;\nvar uncurryThis = NATIVE_BIND && bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? function (fn) {\n  return fn && uncurryThis(fn);\n} : function (fn) {\n  return fn && function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/get-built-in.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/get-built-in.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\n\nvar aFunction = function (argument) {\n  return isCallable(argument) ? argument : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/get-method.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/get-method.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/a-callable.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return func == null ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/global.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/global.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/hidden-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/hidden-keys.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/ie8-dom-define.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/ie8-dom-define.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/_core-js@3.21.1@core-js/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/indexed-object.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/indexed-object.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.21.1@core-js/internals/classof-raw.js\");\n\nvar Object = global.Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/inspect-source.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/inspect-source.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.21.1@core-js/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString);\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/internal-state.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/internal-state.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/_core-js@3.21.1@core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.21.1@core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/_core-js@3.21.1@core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.21.1@core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = global.TypeError;\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = uncurryThis(store.get);\n  var wmhas = uncurryThis(store.has);\n  var wmset = uncurryThis(store.set);\n  set = function (it, metadata) {\n    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    wmset(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/is-array.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js@3.21.1@core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(argument) {\n  return classof(argument) == 'Array';\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/is-constructor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/is-constructor.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/_core-js@3.21.1@core-js/internals/classof.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.21.1@core-js/internals/get-built-in.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.21.1@core-js/internals/inspect-source.js\");\n\nvar noop = function () { /* empty */ };\nvar empty = [];\nvar construct = getBuiltIn('Reflect', 'construct');\nvar constructorRegExp = /^\\s*(?:class|function)\\b/;\nvar exec = uncurryThis(constructorRegExp.exec);\nvar INCORRECT_TO_STRING = !constructorRegExp.exec(noop);\n\nvar isConstructorModern = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  try {\n    construct(noop, empty, argument);\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nvar isConstructorLegacy = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  switch (classof(argument)) {\n    case 'AsyncFunction':\n    case 'GeneratorFunction':\n    case 'AsyncGeneratorFunction': return false;\n  }\n  try {\n    // we can't check .prototype since constructors produced by .bind haven't it\n    // `Function#toString` throws on some built-it function in some legacy engines\n    // (for example, `DOMQuad` and similar in FF41-)\n    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));\n  } catch (error) {\n    return true;\n  }\n};\n\nisConstructorLegacy.sham = true;\n\n// `IsConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-isconstructor\nmodule.exports = !construct || fails(function () {\n  var called;\n  return isConstructorModern(isConstructorModern.call)\n    || !isConstructorModern(Object)\n    || !isConstructorModern(function () { called = true; })\n    || called;\n}) ? isConstructorLegacy : isConstructorModern;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/is-constructor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/is-forced.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/is-forced.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/is-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/is-object.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\n\nmodule.exports = function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/is-pure.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/is-pure.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/is-symbol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/is-symbol.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.21.1@core-js/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/_core-js@3.21.1@core-js/internals/use-symbol-as-uid.js\");\n\nvar Object = global.Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/length-of-array-like.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/length-of-array-like.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-length.js\");\n\n// `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/length-of-array-like.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/native-symbol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/native-symbol.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/_core-js@3.21.1@core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/native-weak-map.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/native-weak-map.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.21.1@core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-define-property.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-define-property.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js@3.21.1@core-js/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/_core-js@3.21.1@core-js/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-property-key.js\");\n\nvar TypeError = global.TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-descriptor.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-descriptor.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js@3.21.1@core-js/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-names.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-names.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/_core-js@3.21.1@core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-symbols.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-symbols.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-is-prototype-of.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-is-prototype-of.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-keys-internal.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-keys-internal.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/_core-js@3.21.1@core-js/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-property-is-enumerable.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-property-is-enumerable.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/object-to-string.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/object-to-string.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/_core-js@3.21.1@core-js/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/ordinary-to-primitive.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/ordinary-to-primitive.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-object.js\");\n\nvar TypeError = global.TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/own-keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/own-keys.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/_core-js@3.21.1@core-js/internals/get-built-in.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/an-object.js\");\n\nvar concat = uncurryThis([].concat);\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/redefine.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/redefine.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-non-enumerable-property.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.21.1@core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/_core-js@3.21.1@core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/_core-js@3.21.1@core-js/internals/internal-state.js\");\nvar CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-name.js\").CONFIGURABLE);\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var name = options && options.name !== undefined ? options.name : key;\n  var state;\n  if (isCallable(value)) {\n    if (String(name).slice(0, 7) === 'Symbol(') {\n      name = '[' + String(name).replace(/^Symbol\\(([^)]*)\\)/, '$1') + ']';\n    }\n    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {\n      createNonEnumerableProperty(value, 'name', name);\n    }\n    state = enforceInternalState(value);\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');\n    }\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return isCallable(this) && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/require-object-coercible.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/require-object-coercible.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\n\nvar TypeError = global.TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/set-global.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/set-global.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/shared-key.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/shared-key.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/_core-js@3.21.1@core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/_core-js@3.21.1@core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/shared-store.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/shared-store.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/_core-js@3.21.1@core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/shared.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/shared.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/_core-js@3.21.1@core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.21.1',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-absolute-index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-absolute-index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-indexed-object.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-indexed-object.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.21.1@core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-integer-or-infinity.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-integer-or-infinity.js ***!
  \**********************************************************************************/
/***/ ((module) => {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\nmodule.exports = function (argument) {\n  var number = +argument;\n  // eslint-disable-next-line no-self-compare -- safe\n  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-integer-or-infinity.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-length.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-object.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.21.1@core-js/internals/require-object-coercible.js\");\n\nvar Object = global.Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-primitive.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-primitive.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/_core-js@3.21.1@core-js/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/_core-js@3.21.1@core-js/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js\");\n\nvar TypeError = global.TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-property-key.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-property-key.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/to-string-tag-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/to-string-tag-support.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/try-to-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/try-to-string.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\n\nvar String = global.String;\n\nmodule.exports = function (argument) {\n  try {\n    return String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/uid.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/uid.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/use-symbol-as-uid.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/use-symbol-as-uid.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/v8-prototype-define-bug.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/v8-prototype-define-bug.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js@3.21.1@core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js@3.21.1@core-js/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype != 42;\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/validate-arguments-length.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/validate-arguments-length.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\n\nvar TypeError = global.TypeError;\n\nmodule.exports = function (passed, required) {\n  if (passed < required) throw TypeError('Not enough arguments');\n  return passed;\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/validate-arguments-length.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/_core-js@3.21.1@core-js/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/_core-js@3.21.1@core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/_core-js@3.21.1@core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar symbolFor = Symbol && Symbol['for'];\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    var description = 'Symbol.' + name;\n    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else if (USE_SYMBOL_AS_UID && symbolFor) {\n      WellKnownSymbolsStore[name] = symbolFor(description);\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/modules/es.array.slice.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/modules/es.array.slice.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.21.1@core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-array.js\");\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-constructor.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/_core-js@3.21.1@core-js/internals/length-of-array-like.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-indexed-object.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/_core-js@3.21.1@core-js/internals/well-known-symbol.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-method-has-species-support.js\");\nvar un$Slice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-slice.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\n\nvar SPECIES = wellKnownSymbol('species');\nvar Array = global.Array;\nvar max = Math.max;\n\n// `Array.prototype.slice` method\n// https://tc39.es/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = lengthOfArrayLike(O);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n    var Constructor, result, n;\n    if (isArray(O)) {\n      Constructor = O.constructor;\n      // cross-realm fallback\n      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n      if (Constructor === Array || Constructor === undefined) {\n        return un$Slice(O, k, fin);\n      }\n    }\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n    result.length = n;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/modules/es.array.slice.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/modules/es.object.to-string.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/modules/es.object.to-string.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/_core-js@3.21.1@core-js/internals/to-string-tag-support.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/_core-js@3.21.1@core-js/internals/redefine.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/_core-js@3.21.1@core-js/internals/object-to-string.js\");\n\n// `Object.prototype.toString` method\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/modules/web.dom-collections.for-each.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/modules/web.dom-collections.for-each.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/_core-js@3.21.1@core-js/internals/dom-iterables.js\");\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/_core-js@3.21.1@core-js/internals/dom-token-list-prototype.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.21.1@core-js/internals/create-non-enumerable-property.js\");\n\nvar handlePrototype = function (CollectionPrototype) {\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  if (DOMIterables[COLLECTION_NAME]) {\n    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);\n  }\n}\n\nhandlePrototype(DOMTokenListPrototype);\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.21.1@core-js/modules/web.timers.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.21.1@core-js/modules/web.timers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.21.1@core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.21.1@core-js/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/_core-js@3.21.1@core-js/internals/function-apply.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/_core-js@3.21.1@core-js/internals/is-callable.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/_core-js@3.21.1@core-js/internals/engine-user-agent.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/_core-js@3.21.1@core-js/internals/array-slice.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/_core-js@3.21.1@core-js/internals/validate-arguments-length.js\");\n\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar Function = global.Function;\n\nvar wrap = function (scheduler) {\n  return function (handler, timeout /* , ...arguments */) {\n    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;\n    var fn = isCallable(handler) ? handler : Function(handler);\n    var args = boundArgs ? arraySlice(arguments, 2) : undefined;\n    return scheduler(boundArgs ? function () {\n      apply(fn, this, args);\n    } : fn, timeout);\n  };\n};\n\n// ie9- setTimeout & setInterval additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers\n$({ global: true, bind: true, forced: MSIE }, {\n  // `setTimeout` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout\n  setTimeout: wrap(global.setTimeout),\n  // `setInterval` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://eat_snake/./node_modules/_core-js@3.21.1@core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/style/main.less":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/style/main.less ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,\\nhtml {\\n  margin: 0px;\\n  padding: 0px;\\n  box-sizing: border-box;\\n  font: bold 7vw 'Courier';\\n}\\ndiv {\\n  box-sizing: border-box !important;\\n}\\n.main {\\n  box-sizing: border-box !important;\\n  width: 100vw;\\n  height: 100vw;\\n  margin: 0 auto;\\n  background-color: #b7d4a9;\\n  border: 4vw solid #000000;\\n  border-radius: 10vw;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n.main .content {\\n  width: 81.0667vw;\\n  height: 81.0667vw;\\n  border: 0.5333vw solid black;\\n  position: relative;\\n}\\n.main .content .snakeBox > div {\\n  border: 0.2vw solid #b7d4a9;\\n  width: 2.6667vw;\\n  height: 2.6667vw;\\n  background-color: black;\\n  position: absolute;\\n}\\n.main .content .food {\\n  width: 2.6667vw;\\n  height: 2.6667vw;\\n  position: absolute;\\n  top: 26.6667vw;\\n  left: 26.6667vw;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  align-content: space-around;\\n}\\n.main .content .food > div {\\n  width: 1.3333vw;\\n  height: 1.3333vw;\\n  background-color: black;\\n  transform: rotate(-45deg);\\n}\\n.main .footer {\\n  width: 85%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.Btns {\\n  width: 80vw;\\n  height: 80vw;\\n  margin: -6vw auto;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.Btns i {\\n  width: 20vw;\\n  height: 20vw;\\n  font-size: 20vw;\\n  text-align: center;\\n  line-height: 20vw;\\n}\\n.Btns > div {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://eat_snake/./src/style/main.less?./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./src/font/iconfont.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./src/font/iconfont.css ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"iconfont\\\";\\n  /* Project id 3318440 */\\n  src: url('//at.alicdn.com/t/font_3318440_qer61sgrw78.woff2?t=1649653678830') format('woff2'),\\n    url('//at.alicdn.com/t/font_3318440_qer61sgrw78.woff?t=1649653678830') format('woff'),\\n    url('//at.alicdn.com/t/font_3318440_qer61sgrw78.ttf?t=1649653678830') format('truetype');\\n}\\n\\n.iconfont {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.icon-fangxiangyuan-xiangshang:before {\\n  content: \\\"\\\\e616\\\";\\n}\\n\\n.icon-fangxiangyuan-xiangxia:before {\\n  content: \\\"\\\\e617\\\";\\n}\\n\\n.icon-fangxiangyuan-xiangyou:before {\\n  content: \\\"\\\\e618\\\";\\n}\\n\\n.icon-fangxiangyuan-xiangzuo:before {\\n  content: \\\"\\\\e619\\\";\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://eat_snake/./src/font/iconfont.css?./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://eat_snake/./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://eat_snake/./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/main.less":
/*!*****************************!*\
  !*** ./src/style/main.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!../../node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!../../node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./main.less */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/style/main.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://eat_snake/./src/style/main.less?");

/***/ }),

/***/ "./src/font/iconfont.css":
/*!*******************************!*\
  !*** ./src/font/iconfont.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!../../node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./iconfont.css */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js!./src/font/iconfont.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://eat_snake/./src/font/iconfont.css?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://eat_snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://eat_snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://eat_snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://eat_snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://eat_snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://eat_snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;