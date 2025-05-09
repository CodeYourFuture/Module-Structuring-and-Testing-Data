// Predict and explain first...
//  ===the function parameter 'str' is already a variable within the function's scope
// ==========> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/* The code will throw a "TypeError: Cannot set property 'str' of undefined" or a "SyntaxError: 
Identifier 'str' has already been declared" error.
 The reason for this is that the function parameter 'str' is already a variable within
  the function's scope. Attempting to declare another variable with the same name 'str' 
 within the function will cause a conflict. */
 //write your new code here*
function capitalise(str) {
  if (typeof str !== 'string' || str.length === 0) {
  return str; 
  }
  let capitalizedStr = ${str[0].toUpperCase()}${str.slice(1)};
  return capitalizedStr;
  }