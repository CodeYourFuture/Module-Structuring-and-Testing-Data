// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I guess the error is a reference error because the parameter is not defined correctly.
/*
function square(3) {
    return num * num;
}
*/
// =============> write the error message here
// function square(3) {
//                 ^
//SyntaxError: Unexpected number
// In fact, the error is a syntax error because number 3 is unexpected here.

// =============> explain this error message here
// Number 3 is not a valid parameter name, which is misplacing and causes a syntax error.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(3)); // should return 9
