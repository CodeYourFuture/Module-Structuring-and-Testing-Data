// Predict and explain first...
// Prediction: SyntaxError because `str` is re-declared with `let` inside the function
// where it already exists as a parameter. You cannot use `let` to re-declare a variable
// that already exists in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// Original broken code:
// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// Explanation: The parameter `str` already exists in the function scope.
// Using `let str` tries to re-declare it, which is a SyntaxError.
// Instead of reassigning `str` (which represents the original input),
// we use a new const `capitalisedStr` to make it clear this is a different value.

function capitalise(str) {
  const capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
