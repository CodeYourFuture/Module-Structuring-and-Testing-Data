// Predict and explain first...
//  =============> write your prediction here
// SyntaxError: Cannot redeclare parameter 'str' inside function body

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// SyntaxError: Identifier 'str' has already been declared - parameter cannot be redeclared with let/const/var
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter

// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
