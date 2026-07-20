// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// Prediction: SyntaxError — a function parameter must be a valid identifier, not a number literal.

// Original broken code:
// function square(3) {
//     return num * num;
// }

// Error message: SyntaxError: Unexpected number
// Explanation: `3` is a number literal and cannot be used as a parameter name.
// Parameters must be valid identifiers (variable names).
// Fix: use a named parameter like `num`.

function square(num) {
  return num * num;
}
