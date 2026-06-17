// Predict and explain first...
//  =============> write your prediction here
// Martin response - I predict that if I call this function with a spring parameter, it will return the string with the first letter capitalised

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// Martin response - this error is because str is name of the parameter for this function, and it is re-declared again inside the function

// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("martin"));
