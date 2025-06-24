// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// The function capitalize is trying to take a string input and return it with the first letter capitalized.
// However, the error occurs because the variable 'str' is being declared twice: once as a parameter and again inside the function.
// This is not allowed in JavaScript, as 'let' does not allow redeclaration of the same variable in the same scope.
// This causes a syntax error because you cannot redeclare a variable with 'let' in the same scope.
// =============> write your new code here

function capitalise(str) {
  let name = `${str[0].toUpperCase()}${str.slice(1)}`;
  return name;
}
capitalise("hello, check ");
console.log(capitalise("hello, check "));
// =============> write your explanation here
// The function now uses a different variable name 'name' instead of 'str' inside the function.
// This avoids the redeclaration error. The function takes a string input, capitalizes the first letter, and returns the modified string.
// However, the return statement still returns 'str' instead of 'name', which is a mistake.
