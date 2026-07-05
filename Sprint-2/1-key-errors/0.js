// Predict: SyntaxError or ReferenceError because `str` is re-declared with `let` inside the function
// where it already exists as a parameter.
// Explanation: You cannot use `let` to re-declare a variable that already exists in the same scope.
// Fix: remove the `let` keyword — just reassign str.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
