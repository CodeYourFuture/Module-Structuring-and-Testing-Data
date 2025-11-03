// Predict and explain first...
//  =============> write your prediction here
// I gives us a syntax error as str declared before.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// return str;
// }

// =============> write your explanation here :
// as the variable in side the function has the same name as the function variable.
// =============> write your new code here
function capitalise(str) {
  let str1 = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str1;
}
console.log(capitalise("abcd"));
