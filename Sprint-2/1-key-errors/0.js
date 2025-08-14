// Predict and explain first...
//  =============> write your prediction here
/*
The variable 'str' must be defined before it be used in a function. As a result, an error of Identifier will occur.
*/
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error is occurring because the parameter 'str' is being redeclared with 'let' inside the function.
// This causes a conflict and results in an error. To fix this, we can simply remove the 'let' keyword
// when reassigning the value to 'str'.

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
//console.log(capitalise("Texto"))
