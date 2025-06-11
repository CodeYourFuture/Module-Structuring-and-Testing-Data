// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The error occurs because we pass a number as a parameter instead of passing the variable
// num which we return through the function.

/*function square(3) {
    return num * num;
}
 */

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// It says the number pass through the parameter is not a valid argument
// instead the variable must be used.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

let result = square(3);
console.log(result);
