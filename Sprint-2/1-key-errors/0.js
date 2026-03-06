// Predict and explain first...
//  =============> write your prediction here
// This function is trying to capitalise the first letter of a string.
// it takes the first character using str[0], converts it to uppercase,and joins it with the rest of the string using str.slice(1).

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error is occurring because the function is trying to declare a variable with the same name as the parameter, which is not allowed in JavaScript.
// The variable `str` is being redeclared inside the function, causing a syntax error.
function capitalise(str) {
  let result = str[0].toUpperCase() + str.slice(1);
  return result;
}
