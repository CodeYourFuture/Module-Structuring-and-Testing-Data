// Predict and explain first...
//  This code will cause a SyntaxError because the variable `str` is being declared twice within the same function scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// Explanation:
// The function parameter is named `str`. Inside the function, the same name `str` is redeclared with `let`.
// JavaScript does not allow redeclaring a variable in the same scope with `let` or `const`, so this causes a SyntaxError.
// The error message would say something like: "Identifier 'str' has already been declared".

// =============> write your new code here
function capitalise(str) {
  const result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}