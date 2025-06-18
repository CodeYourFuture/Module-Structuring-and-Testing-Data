// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} */

// =============> write your explanation here
//syntax error str we are trying to use str to declare a variable why at the same time using it as the parameter for our function
// =============> write your new code here
function capitalise(str) {
  let capString = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capString;
}
console.log(capitalise("shannon"));
