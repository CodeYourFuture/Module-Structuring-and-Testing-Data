// Predict and explain first...
//  =============> write your prediction here
// The function when called was supposed to capitalise the first letter of a string by calling the first character of the string and then transforming
// to uppercase character and adding it back to the string, but because the variable "str" had already been declared it going to throw a syntaxerror

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// console.log(capitalise("what is your name?"))
// =============> write your explanation here
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//       ^

// SyntaxError: Identifier 'str' has already been declared
// As predicted,when the function is called, it does not compile and throws a syntax error because the identifier "str" had already been declared as a parameter of the function. This violate the rules of JavaScript
// Variable can be re-assigned using the "let" keyword but cannot be redeclared
// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
console.log(capitalise("tell me about yourself"));
