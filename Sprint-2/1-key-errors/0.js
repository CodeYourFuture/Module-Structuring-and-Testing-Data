// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// str is already a function parameter, so it's already available inside the function.
// But inside the function,wrote let str = ..., which tries to declare str again.
// JavaScript doesn’t allow redeclaring a variable that already exists in the same scope, so it throws an error.
// =============> write your new code here

console.log(capitalise("hello"));
