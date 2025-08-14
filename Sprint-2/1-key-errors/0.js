// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here 
// The error occurs because the variable `str` is being redeclared inside the function, which is not allowed in JavaScript.
// The variable `str` is already defined as a parameter of the function, and attempting to declare it again with `let` causes a syntax error.
//

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} 
