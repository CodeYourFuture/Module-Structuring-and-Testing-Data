// Predict and explain first...
//  =============> write your prediction here

// Prediction:
// The code will throw an error because `str` is declared twice:
// once as the function parameter and again with `let str` inside the function.
// JavaScript does not allow redeclaring the same identifier in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// Explanation:
// When the file runs, JavaScript gives a SyntaxError like:
// "Identifier 'str' has already been declared".
// This happens because `str` already exists as a parameter, so `let str` tries
// to redeclare it in the same scope. To fix it, we should not redeclare `str`.
// Instead, we can create a new variable or just return the new string.

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello")); // Hello

