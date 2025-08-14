// Predict and explain first...
//  =============> write your prediction here
//  There will be a syntax error because the variable str is declared twice.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// Error is in line 8, because it tries to create a new variable called str, but str is already used as the function input

// =============> write your new code here
function capitalise(str) {
  let currentString = `${str[0].toUpperCase()}${str.slice(1)}`;
  return currentString;
}

const newString = capitalise("hi, how are you?");
console.log(newString);
