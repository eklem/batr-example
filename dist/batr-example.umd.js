(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.math = {}));
})(this, (function (exports) { 'use strict';

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

  exports.add = add;
  exports.divide = divide;
  exports.multiply = multiply;
  exports.subtract = subtract;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
