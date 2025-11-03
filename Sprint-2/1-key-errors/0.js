// Predict and explain first...
//  =============> write your prediction here
// It will show an error message

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("Hello");

// =============> write your explanation here
// SyntaxError: Identifier 'str' has already been declared - This error means that the variable 'str' was declared more than once in the same scope.
// JavaScrip doesn't allow that - once a variable name is declared with let or const, you can't declare it again.
// =============> write your new code here
function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}

