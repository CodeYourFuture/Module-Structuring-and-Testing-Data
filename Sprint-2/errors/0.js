// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* 
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
*/

// The function will occur with an error because of variable redeclaration.
// SyntaxError: Identifier 'str' has already been declared
// The variable str is declared twice in the function, once as a parameter and once as a variable
// This is causing the error because the variable str is being redeclared and the value of the
// parameter str is being overwritten. This is causing the function to return the original string

// To fix this error, we need to remove the variable declaration of str inside the function

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
console.log(capitalise("hello"));

//OR
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
