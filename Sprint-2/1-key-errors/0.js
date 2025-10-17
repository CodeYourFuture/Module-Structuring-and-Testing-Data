// Predict and explain first...
//  =============> Prediction:
// Calling capitalise("hello") will cause an error:
// "Identifier 'str' has already been declared"

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> Explanation:
// The error happens because 'str' is already a parameter.
// We cannot declare another variable with the same name inside the function.

// =============> Corrected Code:
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Example
console.log(capitalise("hello")); // Output: "Hello"
