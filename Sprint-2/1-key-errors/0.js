// Predict and explain first...
//  =============> write your prediction here
// i thought it going to show undefined, because the parameter in the function was the same which was empty so the code can't evaluate because it is an empty string.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str){
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// }

// console.log(capitalise("hello world"));
// =============> write your explanation here
// Answer: The error message was that str is already declare in the parameter. so we either had to change the parameter or the variable's name in the function or just return the expression without saving it into a variable

// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello world"));
