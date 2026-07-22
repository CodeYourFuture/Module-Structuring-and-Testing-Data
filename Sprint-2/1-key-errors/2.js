// Predict and explain first BEFORE you run any code.

// this function should square any number but instead

// ==============> This will throw a SyntaxError, because 3 is used as the parameter name in function square(3), but parameter names can't be numbers - they need to be valid identifiers like "num".

function square(num) {
  return num * num;
}

// ==============> The error is "SyntaxError: Unexpected number"

// ==============> This happens because 3 is a number, not a valid parameter name. Parameter names must be identifiers, like "num" - JavaScript doesn't know what to do with a number in that position.

// Finally, correct the code to fix the problem
// ==============> function square(num) {
//   return num * num;
// }
