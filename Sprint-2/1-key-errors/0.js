// Predict and explain first...
//  =============> write your prediction here
// I think that there will be a SyntaxError because str is already
// declared as a parameter, and I am trying to re-declare it as
// a variable with let inside the function. This is not allowed in
// Javascript.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
// }

// =============> write your explanation here
// You can't use let to declare a variable with the same name
// as a parameter in the same function. The parameter str is 
// already declared, so when you try to declare it again with let,
// it causes a SyntaxError. To fix this, you can either remove
// let and just assign a new value to str, or you can use a different
// variable name for the capitalised string.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello")); 