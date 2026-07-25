// Predict and explain first...
// Prediction: The program will throw a SyntaxError because 'str' is declared twice in the same function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));

// Explanation: The function parameter is already called 'str'. Declaring another variable with 'let str' inside the same function is not allowed, so JavaScript throws a SyntaxError.

// Finally, correct the code to fix the problem
// =============> write your new code here
