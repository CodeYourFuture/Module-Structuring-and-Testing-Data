// Predict and explain first...
//  =============> write your prediction here
// PREDICTION: There will be a SyntaxError because 'str' is declared twice - once as parameter, once as variable

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// 1. Cannot redeclare 'str' with 'let' inside function - it's already the parameter name
// 2. 'explain' is not defined - should be a string literal
console.log(capitalise("hello")); // Test the function
// =============> write your new code here
function capitalise(str) {
let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
return capitalised;
}