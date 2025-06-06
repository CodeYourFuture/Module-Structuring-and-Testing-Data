// Predict and explain first...
//  =============> write your prediction here
// Prediction:
// I think the function is trying to capitalize the first letter of the string,
// but it might produce an error because the variable name is reused.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// Explanation:
// There is a variable name conflict: 'str' is used both as a parameter and as a new variable inside the function.
// JavaScript does not allow redeclaring a variable with 'let' that was already declared as a parameter.


// =============> write your new code here
// Fixed Code:
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
