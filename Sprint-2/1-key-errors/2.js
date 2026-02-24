// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// ===========> write your prediction of the error here
// Prediction: We will get a SyntaxError because a function parameter cannot be a literal number (like 3). It must be a valid variable name (identifier).

function square(num) {
  return num * num;
}

// ===========> write the error message here
// Error message: SyntaxError: Unexpected number

// ===========> explain this error message here
// Explanation: When declaring a function, the parameters must be names (like 'num'), not actual values. We only pass actual values (like 3) when we CALL the function.

// Finally, correct the code to fix the problem

// ===========> write your new code here
// The fixed code is written above where I changed '3' to 'num'.
// Now let's call the function to test it:
console.log(square(3));
