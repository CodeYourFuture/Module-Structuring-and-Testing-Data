// Predict and explain first...
//  =============> write your prediction here
// The code will throw an error because the variable 'str' is being redeclared with 'let' inside the function,
// which is not allowed since 'str' is already defined as a parameter of the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// The error occurs because the variable 'str' is being declared again with 'let' inside the function,
// which conflicts with the parameter 'str' that is already defined. In JavaScript, you cannot redeclare a variable with 'let' in the same scope.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));  // Output: "Hello"


