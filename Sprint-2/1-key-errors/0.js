// Predict and explain first...
//  =============> write your prediction here
// Prediction: The code will throw a SyntaxError because the variable 'str' has already been declared as a parameter of the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// Original code with error:

/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
  */

// =============> write your explanation here
// Explanation: The error occurs because the variable 'str' is being redeclared within the function using 'let', 
// which is not allowed since 'str' is already declared as a parameter of the function. 
// To fix this, we can either rename the inner variable or simply assign the new value to the existing parameter without redeclaring it.

// =============> write your new code here
// Fixed code:
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello")); // Output: "Hello"