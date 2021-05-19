var batrExample = {};

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

var add_1 = batrExample.add = add;
var subtract_1 = batrExample.subtract = subtract;
var multiply_1 = batrExample.multiply = multiply;
var divide_1 = batrExample.divide = divide;

export default batrExample;
export { add_1 as add, divide_1 as divide, multiply_1 as multiply, subtract_1 as subtract };
