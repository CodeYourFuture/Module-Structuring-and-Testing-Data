// Predict and explain first...
//  =============> write your prediction here: We have a SyntaxError bacause  In JavaScript, redeclaring a function parameter
// inside the function body using let is not allowed.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here : The parameter str is already defined in the function signature: function capitalise(str)
// Inside the function, the line let str = ... attempts to redeclare str using let, which is not allowed.
//
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
