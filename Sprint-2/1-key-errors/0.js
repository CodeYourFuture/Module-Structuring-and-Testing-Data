// Predict and explain first...
//  =============> write your prediction here
// I expect the code to possibly throw an error because str is being declared twice. once in the function and again in the function body declared as "let"
// This function looks like its trying to turn the first letter of a string into a capital letter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// after trying to run the code it produced a "SyntaxError: Identifier 'str' has already been declared"

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
// =============> write your explanation here
// this is because the variable str is declared twice, once in the function parameters and again inside the function body with "let str"
// str is declared as a parameter, so we don't need to declare it again with let you can just use it directly.
// to fix the error, we can remove the "let" keyword from the second declaration of str.
// =============> write your new code here

function capitalize(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalize("the first letter should be capitalized"));