// Predict and explain first...
//  =============> write your prediction here
// I predict the code will give an error because inside the function we create a variable called str again.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));
// =============> write your explanation here
// The error occurs because we are trying to declare a variable named str inside the function, but it is already declared as a parameter. This creates a conflict and results in a syntax error.
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
