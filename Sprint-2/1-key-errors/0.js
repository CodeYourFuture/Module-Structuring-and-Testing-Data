// Predict and explain first...
//  =============> Prediction:
// The code will throw an error because the variable `str` is being redeclared 
// with `let` inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));
*/

// =============> Explanation:
// SyntaxError: Identifier 'str' has already been declared
// The error occurs because the variable `str` is declared twice in the same scope.
// =============> Solution:
// Remove the `let` keyword from the second declaration of `str` inside the function.
// =============> Corrected Code:

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));
// =============> Output: "Hello" 
