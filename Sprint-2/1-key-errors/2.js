// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Inside this function 3 cannot be declared as a parameter so we will face a syntax error
function square(3) {
    return num * num;
  }
// =============> write the error message here
// SyntaxError: Unexpected number
// =============> explain this error message here
// this error occurs indicates a problem with the placement or use of numerals in your code, since
// this function should square any number we added used the varirable num as a parameter as it will be
// multiplied by itself
// Finally, correct the code to fix the problem
function square(num) {
  return num * num;
}
console.log(square(2));
// =============> write your new code here
