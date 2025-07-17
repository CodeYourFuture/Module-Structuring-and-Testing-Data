// Predict and explain first...
//  =============> write your prediction here
// A syntax error should occur because the function parameter is named `str`, but it is also being redeclared inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The code outputs the error `SyntaxError: Identifier 'str' has already been declared`.
// JavaScript does not allow you to redeclare a variable or parameter with the same name in the same scope.
// In this case, the parameter `str` is being redeclared as a `let` variable inside the function, which is not allowed.
// =============> write your new code here
function capitalise(str) {
  const capitalisedString = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedString;
}
