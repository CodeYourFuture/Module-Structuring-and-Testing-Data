// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Martin response - the error is caused by the fact that a number (3) has been entered directly in place of a parameter (num) for the function

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// Martin response - error message is - "SyntaxError: Unexpected number"
// =============> explain this error message here

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(3));
