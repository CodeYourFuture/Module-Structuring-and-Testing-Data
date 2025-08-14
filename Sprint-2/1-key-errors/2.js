// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The code will throw a syntax error because you cannot use a number as a function parameter.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// Function parameters must be variable names, not values. Using a number as a parameter is invalid syntax in JavaScript -mdn

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(7));
