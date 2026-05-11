// Predict and explain first...

//  =============> write your prediction here
// str is already a declared variable fed into the capitalise function, the function attempts
// to declare the variable again, this may throw an error.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


// Error:

// let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// SyntaxError: Identifier 'str' has already been declared


/* Original Code:

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} 

*/

// =============> write your explanation here
// As predicted, an already declared variable cannot be declared again

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

