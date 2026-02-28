// Predict and explain first...
// //My prediction` => The capitalise function tries to capitalize the first character of the string and concat it with the rest. This function may not run as it has error.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// call the function with a string argument
capitalise("hello world");
// the error is occurring because we are trying to declare a variable with the same name as the function parameter

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
