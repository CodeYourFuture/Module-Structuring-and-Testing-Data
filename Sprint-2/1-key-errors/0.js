// Predict and explain first...
//  =============> write your prediction here

// Predict and explain first...
//  =============> write your prediction here
// This code will throw an error: "SyntaxError: Identifier 'str' has already been declared".
// The reason is that the variable 'str' is declared twice — once as a function parameter
// and again with `let str` inside the function. You cannot redeclare a parameter variable
// using `let` or `const` in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
// }

// =============> write your explanation here

// The error occurs because 'str' is already defined as a parameter to the function.
// Using 'let str' again inside the function tries to redeclare it, which is not allowed.
// We can fix this by either using a different variable name or by reassigning 'str'
// directly without redeclaring it.

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Example:
console.log(capitalise("hello")); // Output: "Hello"

