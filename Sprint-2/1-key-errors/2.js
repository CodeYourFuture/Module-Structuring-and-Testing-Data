// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/*
Prediction: I predict that this function will cause a SyntaxError.
The reason is that the function `square` is trying to define its parameter using a literal number `3`,
which is not allowed. In JavaScript, function parameters must be variable names (identifiers), not fixed values.
*/

function square(3) { // <-- This is where the error occurs
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// Explanation:
// The `SyntaxError: Unexpected number` occurs because JavaScript function definitions expect an identifier (a variable name)
// in the parameter list, not a literal value like `3`.
// When you define a function, the items in the parentheses are placeholders (parameters) for values that will be passed in later.
// These placeholders must be valid variable names so that you can refer to the passed-in value within the function's body.
// `function square(3)` is syntactically incorrect because `3` cannot serve as a variable name.

// Finally, correct the code to fix the problem

// =============> write your new code here

// Fixed Code:
function square(num) { // 'num' is a valid parameter name (identifier)
  return num * num;
}

// We can now call the corrected function like this:
console.log(square(3)); // This will now correctly log 9
console.log(square(5)); // This will now correctly log 25