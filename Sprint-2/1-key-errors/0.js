// Predict and explain first...
// I think str is already declared even though it is a parameter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The error is a syntax error at line 8 in which as I have predicted. 'str' was already declared. 
// =============> write your new code here
function capitalize(str) {
  let capitalized = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalized;
}
