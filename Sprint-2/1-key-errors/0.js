// Predict and explain first...
//  Capitalise 1st letter of a string.

// call the function capitalise with a string input
capitalise("String input.");

// interpret the error message and figure out why an error is occurring
// The error occurs because you cannot declare a variable with a name that exists in the same scope.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here
