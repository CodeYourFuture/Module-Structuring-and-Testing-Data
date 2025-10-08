// Predict and explain first...
// I predict this code will cause a SyntaxError because of variable redeclaration.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// My explanation; The error occurs because:

// str is declared as a function parameter
// Inside the function, we try to declare another variable with let str = ...
// This creates a naming conflict - you can't have two variables with the same name in the same scope when one is declared with let/const




// My code:

function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}

// This solution uses a different variable name (result) to store the capitalized string, avoiding the naming conflict while keeping the same logic.