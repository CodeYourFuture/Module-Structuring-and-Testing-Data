// Predict and explain first...
//  =============> The following code will result in an error message:
SyntaxError: It has been established that the identifier "str" has already been declared.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The function capitalize is intended to return the input string with the first character capitalized.
However, the original version results in a syntax error due to the declaration of str as a function parameter, which precludes its redeclaration using let within the same scope.
// =============> function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}