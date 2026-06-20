// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The error is on line 8.
// The parameter 'str' has already been declared in the function.
// Declaring 'let str' again causes the error.
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
