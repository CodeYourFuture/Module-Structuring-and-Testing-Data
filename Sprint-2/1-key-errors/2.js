
// Predict and explain first BEFORE you run any code...
// this function should square any number but instead we're going to get an error
//

// =============> write your prediction of the error here
// // This code would throw a syntaxerror "missing valid function parameter".
// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// function square(3) {
//                 ^

// SyntaxError: Unexpected number
// =============> explain this error message here
// The JavaScript exception "missing formal parameter" occurs when your function declaration is missing valid parameters.
// In the declaration of a function, the parameters must be identifiers, not any value like numbers, strings, or objects.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(10));
