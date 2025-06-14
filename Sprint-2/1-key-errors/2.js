
// Predict and explain first BEFORE you run any code...
// I predict we’ll get a syntax error because `3` is not a valid parameter name in a function definition.

// this function should square any number but instead we're going to get an error
// I predict we’ll get a syntax error because `3` is not a valid parameter name in a function definition.

  function square(3) {
    return num * num;
// SyntaxError: Unexpected number.
// You cannot name a function parameter with a number like `3`.
// Parameters must be valid variable names (e.g., `num`).

// Finally, correct the code to fix the problem
// Here's a new code
function square(num) {
  return num * num;
}

console.log(square(3));

