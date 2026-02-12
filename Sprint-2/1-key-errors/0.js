// Predict and explain first...
//  =============> write your prediction here
// I predict that the code will throw an error due to the fact that the function redeclares the
// the str using let str. This is not allowed as it is already defined as a parameter. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//console.log(capitalise("hello"));
// =============> write your explanation here 
// The error occures due to the fact that str is already declared as a function parameter.
// Using let str inside the function tries to redeclare the same variable, which is causing a syntaxError for Javascript.

// =============> write your new code here
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello"));
