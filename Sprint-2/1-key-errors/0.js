// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here
//str is being declared twice, once as a parameter and once as a variable inside the function. This causes a syntax error because we cannot redeclare a variable in the same scope. To fix this, we can simply remove the variable declaration and directly return the capitalised string.

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}   