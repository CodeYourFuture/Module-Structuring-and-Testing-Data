// Predict and explain first...
//  =============> write your prediction here
// The code will throw a SyntaxError

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// Original code with error:
/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} */

// =============> write your explanation here
// The error occurs because because the variable 'str' is being redeclared inside the function.
// The parameter 'str' is already defined, and trying to declare it again with 'let' causes a conflict.

// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
