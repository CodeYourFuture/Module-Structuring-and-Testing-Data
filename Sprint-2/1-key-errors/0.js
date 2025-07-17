// Predict and explain first...
//  =============> write your prediction here => This code will throw a syntax error
// because the parameter str is redeclared as a let variable inside the function, which is not allowed.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here => The error occurs because we cannot declare
// a new variable with the same name as a function parameter (str) using let inside the function.
// This causes a "Identifier 'str' has already been declared" error according to mdn.

// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("bethan"));
