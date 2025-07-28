// Predict and explain first...
// =============> write your prediction here
// The code below is expected to show an error because the variable 'str' is declared twice.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error occurs because the variable 'str' is declared with 'let' twice in the same scope.
// The first declaration is a placeholder value, and the second is a variable declaration inside the function.
// =============> write your new code here
// To fix this, we can remove the 'let' keyword from the second declaration of 'str'.
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
