// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// We should get something like num is undefined, because we are not declaring it anywhere.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// I missed the parameter error.
// We can use actual values (numbers, strings, etc.) as arguments when we call a function. But the function will receive these values as variables (identifier), so we cannot have a number as parameter.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3));
console.log(square(14));
console.log(square(57));
