// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//I think that's an error because there is no declared variable "num".

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// As I can see now after running the code, I missed the very first error - we can't use a number as a parameter name, and  JavaScript even didn't go after the very first mistake to check others errors (and my predicted error about undeclared "num")

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(12)); // 144
