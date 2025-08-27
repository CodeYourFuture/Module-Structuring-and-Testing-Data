// Predict and explain first BEFORE you run any code...
// the will be an error
// this function should square any number but instead we're going to get an error

// Why will an error occur when this program runs?
//because the function parameter is incorrectly defined by real number instead of a variable name

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//syntaxError: Unexpected number
// =============> explain this error message here
// The error occurs because the function parameter is defined as a number (3) instead of a variable name.
// In JavaScript, function parameters must be variable names, not literal values. JavaScript is expecting a parameter name in the parentheses, not a value.
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(3)); // This will not work because 'num' is not defined outside the function
