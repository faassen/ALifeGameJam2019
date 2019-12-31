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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry_points/cellular_atmosphere.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/p5/lib/p5.js":
/*!***********************************!*\
  !*** ./node_modules/p5/lib/p5.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/entry_points/cellular_atmosphere.ts":
/*!*************************************************!*\
  !*** ./src/entry_points/cellular_atmosphere.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar parameters = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"parsedQueries\"])();\n// tslint:disable: no-string-literal\nvar DEBUG = parameters[\"debug\"] ? true : false; // Caution: 0 turns to \"0\" and it's true. Use \"\" to disable it.\nvar size = parameters[\"size\"] ? parseInt(parameters[\"size\"], 10) : 100;\nvar isSpringEnabled = parameters[\"spring\"] ? true : false;\nvar radius = parameters[\"r\"] ? parseInt(parameters[\"r\"], 10) : 1;\n// tslint:enable: no-string-literal\nvar t = 0;\nvar cells = [];\nvar cellSize = 1000 / size;\nvar maxPressure = 1000;\nvar diameter = radius * 2 + 1;\nvar numberOfNeighbors = (radius + 1) * radius * 4;\nvar main = function (p) {\n    p.setup = function () {\n        var fieldSize = size * cellSize;\n        var canvas = p.createCanvas(fieldSize, fieldSize);\n        canvas.id(\"canvas\");\n        canvas.parent(\"canvas-parent\");\n        setupCells();\n    };\n    p.draw = function () {\n        if (t % 10 !== 0) {\n            t += 1;\n            return;\n        }\n        update();\n        draw();\n        t += 1;\n        setTimestamp(t);\n    };\n    function draw() {\n        p.noStroke();\n        var white = p.color(255);\n        var textSize = cellSize / 10;\n        var cellRadius = cellSize / 2;\n        var indicatorRectSize = cellSize / 10;\n        var showDebugInfo = DEBUG && (indicatorRectSize > 5);\n        for (var y = 0; y < cells.length; y += 1) {\n            var row = cells[y];\n            for (var x = 0; x < row.length; x += 1) {\n                var cell = row[x];\n                var xx = x * cellSize;\n                var yy = y * cellSize;\n                var progress = Math.min(cell.currentState.pressure / maxPressure, 1);\n                var color = p.lerpColor(white, cell.currentState.color(p), progress);\n                p.fill(color);\n                p.rect(xx, yy, cellSize, cellSize);\n                if (showDebugInfo) {\n                    p.textSize(textSize);\n                    p.fill(0);\n                    p.text(cell.currentState.pressure + \", \" + cell.imaginaryPressure, xx, yy + cellRadius);\n                    p.fill(cell.currentState.color(p));\n                    p.rect(xx, yy, indicatorRectSize, indicatorRectSize);\n                }\n            }\n        }\n    }\n    function update() {\n        var mass = 0;\n        cells.forEach(function (row) {\n            row.forEach(function (cell) {\n                cell.next();\n            });\n            // console.log(`${String(row.map(cell => cell.currentState.pressure))}`)\n        });\n        for (var y = 0; y < cells.length; y += 1) {\n            var row = cells[y];\n            var _loop_1 = function (x) {\n                var cell = row[x];\n                mass += cell.currentState.pressure;\n                if (cell.currentState.material === Material.Vacuum) {\n                    cell.imaginaryPressure = 0;\n                    return \"continue\";\n                }\n                var neighbourCells = [];\n                for (var j = -radius; j <= radius; j += 1) {\n                    for (var i = -radius; i <= radius; i += 1) {\n                        if ((i === 0) && (j === 0)) {\n                            continue;\n                        }\n                        var neighbour = cells[(y + j + size) % size][(x + i + size) % size];\n                        neighbourCells.push(neighbour);\n                    }\n                }\n                var additionalPressure = 0;\n                neighbourCells.forEach(function (c) {\n                    if (c.currentState.material === cell.currentState.material) {\n                        additionalPressure -= Math.max((c.currentState.pressure - cell.currentState.pressure), 0);\n                    }\n                    else {\n                        additionalPressure += Math.max((c.currentState.pressure - cell.currentState.pressure), 0);\n                    }\n                });\n                // const differenceMaterialCells = neighbourCells.filter(c => {\n                //   return c.currentState.material !== cell.currentState.material\n                // })\n                // const additionalPressure = differenceMaterialCells\n                //   .map((c: Cell): number => {\n                //     return c.currentState.pressure\n                //   })\n                //   .reduce(\n                //     (previousValue, currentValue) => {\n                //       return previousValue + Math.max((currentValue - cell.currentState.pressure), 0)\n                //     },\n                //     0,\n                //   )\n                // if (additionalPressure > 0) {\n                cell.imaginaryPressure = cell.currentState.pressure + additionalPressure;\n            };\n            for (var x = 0; x < row.length; x += 1) {\n                _loop_1(x);\n            }\n        }\n        if (DEBUG) {\n            console.log(\"Mass: \" + mass);\n        }\n        for (var y = 0; y < cells.length; y += 1) {\n            var row = cells[y];\n            var _loop_2 = function (x) {\n                var cell = row[x];\n                var neighbourCells = [];\n                for (var j = -radius; j <= radius; j += 1) {\n                    for (var i = -radius; i <= radius; i += 1) {\n                        if ((i === 0) && (j === 0)) {\n                            continue;\n                        }\n                        var neighbour = cells[(y + j + size) % size][(x + i + size) % size];\n                        neighbourCells.push(neighbour);\n                    }\n                }\n                console.log(\"neighbour \" + neighbourCells.length);\n                if (cell.currentState.material === Material.Vacuum) {\n                    var pressures_1 = new Map();\n                    neighbourCells.forEach(function (neighbour) {\n                        // tslint:disable-next-line: strict-boolean-expressions\n                        var pressure = pressures_1.get(neighbour.currentState.material) || 0;\n                        pressures_1.set(neighbour.currentState.material, pressure + neighbour.currentState.pressure);\n                    });\n                    var largestPressure_1 = 0;\n                    var largestPressureMaterial_1;\n                    pressures_1.forEach(function (pressure, material) {\n                        if (pressure > largestPressure_1) {\n                            largestPressureMaterial_1 = material;\n                            largestPressure_1 = pressure;\n                        }\n                    });\n                    if (largestPressureMaterial_1 != undefined) {\n                        cell.nextState.material = largestPressureMaterial_1;\n                        cell.nextState.pressure = 0;\n                    }\n                }\n                else { // Not Vaccum\n                    var sameMaterialCells = neighbourCells.filter(function (c) {\n                        return c.currentState.material === cell.currentState.material;\n                    });\n                    sameMaterialCells.forEach(function (neighbour) {\n                        if (neighbour.imaginaryPressure > cell.imaginaryPressure) { // 絶対値の小さい方に floor しなければ気圧が負数をとりうるため\n                            var pressureDifference = (neighbour.imaginaryPressure - cell.imaginaryPressure);\n                            var transferAmount = Math.min(transferAmountOf(cell.currentState.material, pressureDifference), neighbour.currentState.pressure) / numberOfNeighbors;\n                            cell.nextState.pressure += Math.floor(transferAmount);\n                            // console.log(`${pressure} + ${transferAmount}`)\n                        }\n                        else {\n                            var pressureDifference = (cell.imaginaryPressure - neighbour.imaginaryPressure);\n                            var transferAmount = Math.min(transferAmountOf(cell.currentState.material, pressureDifference), cell.currentState.pressure) / numberOfNeighbors;\n                            cell.nextState.pressure -= Math.floor(transferAmount);\n                            // console.log(`${pressure} - ${transferAmount}`)\n                        }\n                        if ((cell.nextState.pressure < numberOfNeighbors) && (cell.imaginaryPressure > maxPressure)) {\n                            cell.nextState.pressure = 0;\n                            cell.nextState.material = Material.Vacuum;\n                        }\n                        // console.log(`${cell.nextState.pressure}`)\n                    });\n                }\n            };\n            for (var x = 0; x < row.length; x += 1) {\n                _loop_2(x);\n            }\n        }\n    }\n    function setupCells() {\n        for (var y = 0; y < size; y += 1) {\n            var row = [];\n            for (var x = 0; x < size; x += 1) {\n                var state = State.random();\n                // if (x > size * 0.25 && x < size * 0.75 && y > size * 0.25 && y < size * 0.75) {\n                //   state.material = Material.Hydrogen\n                // } else {\n                //   state.material = Material.Nitrogen\n                // }\n                var cell = new Cell(state);\n                row.push(cell);\n            }\n            cells.push(row);\n        }\n        if (isSpringEnabled) {\n            var maxPressureState = new State();\n            maxPressureState.pressure = maxPressure;\n            var fixedCell = new FixedCell(maxPressureState);\n            var centerIndex = Math.round(size / 2);\n            cells[centerIndex][centerIndex] = fixedCell;\n        }\n    }\n};\nvar sketch = new p5__WEBPACK_IMPORTED_MODULE_0__(main);\nvar Material;\n(function (Material) {\n    Material[Material[\"Vacuum\"] = 0] = \"Vacuum\";\n    Material[Material[\"Hydrogen\"] = 1] = \"Hydrogen\";\n    Material[Material[\"Nitrogen\"] = 2] = \"Nitrogen\";\n    Material[Material[\"CarbonDioxide\"] = 3] = \"CarbonDioxide\";\n})(Material || (Material = {}));\nfunction colorOf(material, p) {\n    switch (material) {\n        case Material.Vacuum:\n            return p.color(255);\n        case Material.Hydrogen:\n            return p.color(100, 221, 251);\n        case Material.Nitrogen:\n            return p.color(205, 160, 196);\n        case Material.CarbonDioxide:\n            return p.color(166, 180, 210);\n        default:\n            return p.color(0);\n    }\n}\nfunction transferAmountOf(material, pressureDifference) {\n    var flowRate;\n    switch (material) {\n        case Material.Vacuum:\n            return 0;\n        case Material.Hydrogen:\n            flowRate = 2;\n            break;\n        case Material.Nitrogen:\n            flowRate = 3;\n            break;\n        case Material.CarbonDioxide:\n            flowRate = 4;\n            break;\n        default:\n            return 0;\n    }\n    var maxTransferAmount = maxPressure / 50;\n    return Math.min(pressureDifference / flowRate, maxTransferAmount);\n}\nvar Cell = /** @class */ (function () {\n    function Cell(state) {\n        this.imaginaryPressure = 0;\n        this._currentState = state;\n        this._nextState = this.currentState.clone();\n    }\n    Object.defineProperty(Cell.prototype, \"currentState\", {\n        get: function () {\n            return this._currentState;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Cell.prototype, \"nextState\", {\n        get: function () {\n            return this._nextState;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Cell.random = function () {\n        return new Cell(State.random());\n    };\n    Cell.prototype.next = function () {\n        this._currentState = this.nextState;\n        this._nextState = this.currentState.clone();\n    };\n    return Cell;\n}());\nvar FixedCell = /** @class */ (function (_super) {\n    __extends(FixedCell, _super);\n    function FixedCell() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    FixedCell.prototype.next = function () {\n        this._nextState = this.currentState.clone();\n    };\n    return FixedCell;\n}(Cell));\nvar State = /** @class */ (function () {\n    function State() {\n        this.material = Material.Hydrogen;\n        this._pressure = 0;\n    }\n    Object.defineProperty(State.prototype, \"pressure\", {\n        get: function () {\n            return this._pressure;\n        },\n        set: function (value) {\n            if (value <= 0) {\n                this._pressure = 0;\n                return;\n            }\n            this._pressure = value;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    State.random = function () {\n        var state = new State();\n        var materials = [\n            // Material.Vacuum,\n            Material.Hydrogen,\n            Material.Nitrogen,\n        ];\n        state.material = materials[Math.floor(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(materials.length))];\n        var isVacuum = state.material === Material.Vacuum;\n        state.pressure = isVacuum ? 0 : Math.floor(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(maxPressure));\n        return state;\n    };\n    State.prototype.color = function (p) {\n        return colorOf(this.material, p);\n    };\n    State.prototype.clone = function () {\n        var state = new State();\n        state.material = this.material;\n        state.pressure = this.pressure;\n        return state;\n    };\n    State.minimumPressure = 1;\n    return State;\n}());\nfunction pressureOf(state, surroundings) {\n    return 0; // TODO: materialが異なれば与えるpressureが異なる？\n}\n// function transference(to: State, from: State, pressure): number {\n//   if (to.material != ) {\n//     }\n// }\n\n\n//# sourceURL=webpack:///./src/entry_points/cellular_atmosphere.ts?");

/***/ }),

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/*! exports provided: random, Color, parsedQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsedQueries\", function() { return parsedQueries; });\nvar __values = (undefined && undefined.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\n// export function random(max: number): number\t// not working: raises \"Expected 1 arguments, but got 2.\"\nfunction random(max, min) {\n    if (min == undefined) {\n        return Math.random() * max;\n    }\n    var range = max - min;\n    return Math.random() * range + min;\n}\nvar Color = /** @class */ (function () {\n    function Color(r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    }\n    Color.prototype.p5 = function (p) {\n        return p.color(this.r, this.g, this.b);\n    };\n    return Color;\n}());\n\nfunction parsedQueries() {\n    var e_1, _a;\n    var rawQuery = document.location.search;\n    var queries = rawQuery\n        .slice(rawQuery.indexOf(\"?\") + 1)\n        .split(\"&\");\n    var parameters = {};\n    try {\n        for (var queries_1 = __values(queries), queries_1_1 = queries_1.next(); !queries_1_1.done; queries_1_1 = queries_1.next()) {\n            var query = queries_1_1.value;\n            var pair = query.split(\"=\");\n            parameters[pair[0]] = pair[1];\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (queries_1_1 && !queries_1_1.done && (_a = queries_1.return)) _a.call(queries_1);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n    console.log(parameters);\n    return parameters;\n}\n\n\n//# sourceURL=webpack:///./src/utilities.ts?");

/***/ })

/******/ });