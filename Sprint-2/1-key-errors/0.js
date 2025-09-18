// Predict and explain first...
// The function is supposed to convert the first character of a string to uppercase
// There will be a syntax error due to the redeclaration of the variable 'str'

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
capitalise("hello");

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// The error occurred because 'str' was declared again with 'let', which is not allowed.

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
