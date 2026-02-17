// Predict and explain first BEFORE you run any code...
// It will throw a syntax error because 3 is not a valid.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/*
function square(3) {
    return num * num;
}
*/
// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error occurs because function parameters must be valid identifiers (i.e., variable names), not literal numbers.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3));
