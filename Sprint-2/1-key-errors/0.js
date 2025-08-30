// Predict and explain first...
//  =============> write your prediction here
//  the code isn't going to work because there is a syntax error which is str has been declared twice 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The code didn't work because str was declared, so we can't call variables with the same name 
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}