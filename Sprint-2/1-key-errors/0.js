// Predict and explain first...
// I predict the program will throw a SyntaxError or behave incorrectly because
// the variable `str` is declared twice: once as a function parameter and again inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The function parameter is named `str`, and then inside the function, another variable with the same name `str` is declared using `let`.
// This creates a conflict because you can't declare a variable with the same name as a parameter using `let` inside the same scope.
// Here's a new code
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("Hello world"));