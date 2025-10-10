// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> write your explanation here
//Undeclared variables are automatically declared when first used. As a parameter in the 'capitalise' function,
// 'str' is already declared. trying to declare it again with 'let' will cause a syntax error.

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello world")); // This line is inserted only to test the code. It returns "Hello world"
