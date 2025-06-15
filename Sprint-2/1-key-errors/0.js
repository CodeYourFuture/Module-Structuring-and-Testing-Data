// Predict and explain first...
//  =============> write your prediction here
// This code will trigger a syntax error.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error message 'Uncaught SyntaxError: Identifier 'str' has already been declared' occurs because str is already defined as a parameter of the function, 
// but it's being redeclared with let inside the same function scope. A parameter and a 'let' or 'const' variable cannot share the same name within the same scope.

// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

// console.log(capitalise("london"));
