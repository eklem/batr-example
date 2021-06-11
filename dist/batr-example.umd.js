(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.math = {}));
}(this, (function (exports) { 'use strict';

  var src = {};

  const add = function (a, b) {
    return a + b
  };

  const subtract = function (a, b) {
    return a - b
  };

  const multiply = function (a, b) {
    return a * b
  };

  const divide = function (a, b) {
    return a / b
  };

  var add_1 = src.add = add;
  var subtract_1 = src.subtract = subtract;
  var multiply_1 = src.multiply = multiply;
  var divide_1 = src.divide = divide;

  exports.add = add_1;
  exports.default = src;
  exports.divide = divide_1;
  exports.multiply = multiply_1;
  exports.subtract = subtract_1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
