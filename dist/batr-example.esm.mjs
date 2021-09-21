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

export { add_1 as add, src as default, divide_1 as divide, multiply_1 as multiply, subtract_1 as subtract };
