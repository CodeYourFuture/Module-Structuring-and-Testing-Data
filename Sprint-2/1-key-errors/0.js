// Predict and explain first...
//  =============> write your prediction here
/* The function capitalise() is trying to return the first letter of a string capitalised. However our program will
fail because it's declaring a variable inside a function using the same name as the parameter that is passed to the function.
If I attempt to run the program, It will generate a SyntaxError stating that 'str' has already been declared.

*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// - The error is a SyntaxError stating that 'str' has already been declared.

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// To solve the Error, we can either store the string interpolation with a different variable name or we can return the string interpolation if we don't intend to reuse it.

// =============> write your new code here
function capitalise(str) {
  let strCaps = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strCaps;
}
