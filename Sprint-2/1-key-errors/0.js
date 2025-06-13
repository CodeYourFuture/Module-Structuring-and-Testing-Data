// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//  =============>
// The function capitalise is trying to declare a variable `str` using `let` inside the function,
// but `str` is already defined as a parameter of the function. This causes a syntax error because you cannot redeclare a parameter as a variable within the same scope.
// To fix this, you can simply remove the `let` keyword and the redeclaration of `str` inside the function.

// =============> write your new code here
// Here is the corrected function:
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
// call the function capitalise with a string input
console.log(capitalise("hello world")); // Output: "Hello world"
