// Predict and explain first...
//  =============> write your prediction here
// The code will run an error as STR is defined twice(once as a parameter and once as a let variable)
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
 let  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The code runs a syntax error with the following text " Identifier 'str' has already been declared"
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}