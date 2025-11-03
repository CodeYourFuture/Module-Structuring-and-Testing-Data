// Predict and explain first...
//  =============> write your prediction here 

// I predict that the code will throw an error when trying to call the function capitalise with a string input
// because the variable 'str' is being declared twice within the same scope, which is not allowed in JavaScript.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// The code will throw a SyntaxError because the variable 'str' is being declared twice within the same scope.
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Example:
console.log(capitalise("hello")); // Output: "Hello"