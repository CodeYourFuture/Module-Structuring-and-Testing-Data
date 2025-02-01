// Predict and explain first...
//  =============> write your prediction here
// This function takes str as a parameter and converts it to capital letters then omits the first letter of str but nothing will happen because the function is not called
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation her: str is already declared there's no need to declare it again.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello world"));