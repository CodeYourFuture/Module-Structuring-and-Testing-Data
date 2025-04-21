// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//a number value is hardcoded in the param instead of passing a reference to a parameter
// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number
// =============> explain this error message here
//the function expected a parameter but instead a number was passed
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(2));
