// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// there should be an error, because instead of the parameter, that is function variable, we are passing a value (number 3).
//

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The interpreter is expecting a variable name, but instead we are passing a value 3.
// We can fix this by changing the parameter to a variable name, and then passing the value 3 in the function call.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(3));
