// Predict and explain first...
// *** prediction : I predict that the string literal won't work. there should be a "+" between the two $.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// *** interpretation : the str was defined with let before. You cannot redeclare a variable with the name of function scope.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(`The capitalised string is ${capitalise("hello")}`);
