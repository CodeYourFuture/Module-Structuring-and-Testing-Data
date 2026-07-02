// Predict and explain first...
//  =============> write your prediction here
// I predict it will throw a SyntaxError because the variable 'str' has already being declared in the function parameter. And JavaScript will not allow it.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/*  it throws a SyntaxError: Identifier 'str' has already been declared because the function parameter 'str' is already a variable in the function scope. 
The line `let str = ...` tries to create a new variable str in the same scope, which is not allowed in JavaScript. To fix this, we can either rename the parameter or the variable inside the function. */

// =============> write your new code here
function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}