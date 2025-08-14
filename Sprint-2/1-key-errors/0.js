// Predict and explain first...
//  =============> write your prediction here
// Prediction: Change the first letter of string to capital letter

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// 'str' is a variable, if I use 'let' for it, 'str' would be re-declaring. 
// I should use another name to replace 'str' in the line 7 & 8, to avoid redefining 'str'

// =============> write your new code here

function capitalise(str) {
  const newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}