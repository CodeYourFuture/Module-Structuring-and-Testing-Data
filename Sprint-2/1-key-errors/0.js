// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here: when i call the function capitalise with a string input, it shows an error because i am trying to redeclare the variable "str" inside the function, which is already defined as a parameter. this causes a syntax error and we can not redeclare a variable with the same name.
// =============> write your new code here:  we can not use let str because str is  already the function parameter.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
