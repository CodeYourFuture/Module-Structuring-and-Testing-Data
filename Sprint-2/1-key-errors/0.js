// Predict and explain first...
//  =============> write your prediction here
// The variable str is being declared twice within the same scope, which will cause a syntax error.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
const result = capitalise('hello');
console.log(result);
// SyntaxError: Identifier 'str' has already been declared

// =============> write your explanation here
// // The first declaration is in the function parameter and the second one is inside the function body.
// In JavaScript, you cannot declare the same variable name in the same scope using let or const.
// To fix this, we can either rename the inner variable or assign the capitalised value to the parameter itself without redeclaring it.

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} 
