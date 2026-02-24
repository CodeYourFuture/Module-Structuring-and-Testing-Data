// Predict and explain first...
// ===========> write your prediction here
// Prediction: There will be an error because we are trying to declare a variable 'str' using 'let', but 'str' is already declared as the function's parameter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
capitalise("mahmoud");

function capitalise(str) {
  // We fix the error by just updating the existing parameter without using 'let',
  // or by creating a new variable with a DIFFERENT name. Here we use a different name.
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

// ===========> write your explanation here
// Explanation: The original code used 'let str = ...' which throws a SyntaxError because 'str' is already defined in the parameter list.

// ===========> write your new code here
// The fixed code is written above. I changed the variable name inside the function to 'capitalisedStr'.
console.log(capitalise("hello"));
