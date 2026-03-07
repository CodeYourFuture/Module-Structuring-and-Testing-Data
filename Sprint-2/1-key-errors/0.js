// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
  */

// =============> write your explanation here
/* The error is occurring because we are trying to declare a variable with the same name as the function parameter 'str'. 
This causes a conflict and results in a SyntaxError. To fix this, we can simply remove the 'let' keyword and assign
 the new value to 'str' directly, since 'str' is already defined as a parameter.*/


// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
