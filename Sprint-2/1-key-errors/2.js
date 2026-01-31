// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Prediction of the error is that the function parameter is not valid.
// It should be a variable name, not a number.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error message indicates that there is an unexpected number in the function parameter list.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(4)); // should print 16, does display correctly.
