// Predict and explain first...
//  =============> The fuction intends to capitalize the first letter of the input string
//  from th left starting with the first character (str[0]).

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> str has already been declared as a parameter function, so it cannot be redeclared within the function body. This will cause a syntax error. To fix this, we should use a different variable name for the new string we are creating.
// =============> 
  function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;