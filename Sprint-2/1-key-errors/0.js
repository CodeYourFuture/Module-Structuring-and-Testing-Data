// Predict and explain first...
//  =============> write your prediction here

// I predict this will throw a SyntaxError because
// the variable 'str' is declared twice inside the function.



// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }


// =============> write your explanation here

// This code throws a SyntaxError: Identifier 'str' has already been declared.
// The function parameter is named 'str', and inside the function
// we try to declare another variable using 'let str'.
// JavaScript does not allow redeclaring a variable
// in the same scope.


// =============> write your new code here
function capitaliseFixed(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}

console.log(capitaliseFixed("hello"));


