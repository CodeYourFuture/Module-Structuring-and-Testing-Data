
// Prediction: SyntaxError — a function parameter must be a valid identifier, not a literal number.
// Error: SyntaxError: Unexpected number
// Explanation: `3` is a number literal and cannot be used as a parameter name.
// Fix: use a named parameter like `num`.

function square(num) {
  return num * num;
}
