// Predict and explain first...
//  =============> write your prediction here
// I guess the function is trying to capitalise the first letter of the string,
// capture the rest of the string from index 1 to the end of the string,
// and concatenate them together to return the capitalised string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/

// =============> write your explanation here
// After calling the function capitalise with a string input,
// I got a syntax error that "str" has already been declared.
// This is because str has already been declared as a parameter of the function,
// when a new variable named str, it causes a conflict.

// =============> write your new code here
// I renamed the new variable to capitalisedStr to avoid the conflict

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
console.log(capitalise("hello")); // should return "Hello"
