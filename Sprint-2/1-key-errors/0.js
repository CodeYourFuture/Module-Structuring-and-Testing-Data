// Predict and explain first...
//  =============> write your prediction here
//
// function to capitalize the first letter of a string passed as a parameter

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//str has been declared as a param befre being declared

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
console.log(capitalise("string"));
// =============> write your explanation here
//it happens because tstr is declared twice

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
