
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Syntax error. We put a hardcoded number '3' where a parameter name (like 'num') should be.
/* Commented out the broken code so it doesn't crash:
function square(3) {
    return num * num;
}
*/
// =============> write the error message here
// SyntaxError: Unexpected number
// =============> explain this error message here
// Function definitions require variable names as parameters to act as placeholders, not literal values.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(3)); 
console.log(square(4));

