// Predict and explain first...
//  ==============> This will throw a SyntaxError, because 'str' is already declared as the function's parameter, and line 8 tries to declare a new variable with the same name using let.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
// ==============> The error is "SyntaxError: Identifier 'str' has already been declared". This happens because you can't declare a new variable with let using a name that's already taken - in this case, the parameter str.
// ==============> function capitalise(str) {
//   let capitalisedStr = ${str[0].toUpperCase()}${str.slice(1)};
//   return capitalisedStr;
// }