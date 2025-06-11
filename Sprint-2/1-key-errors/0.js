// Predict and explain first...
//  =============> write your prediction here
// My prediction. There is a function that transform string make sure that first letter of the string
// is capital letter..

// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

// The error has occurred: SyntaxError: Identifier 'str' has already been declared

//function capitalize(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}

// My explanation: str can not be the variable name because it is already assign as parameter to the function.
// There are a couple ways to correct code. 1. Change a new name the variable inside the function. 2. Don't use
// let to create the variable, just directly reassign it.

function capitalize(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalize("rain"));
