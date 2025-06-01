// Predict and explain first...
//  =============> write your prediction here

  // In the function, str is used as an argument and therefore already declared. 
  // Inside the function, str is being re-declared. It is also not good practice to mutate the argument variable.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

  // The error message received is "SyntaxError: Identifier 'str' has already been declared"
  // This confirms my predication.

// =============> write your new code here

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
