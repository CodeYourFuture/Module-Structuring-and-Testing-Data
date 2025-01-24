// Predict and explain first...
//  =============> write your prediction here

// Inside the function, we already have a parameter named str. When we write let str .. we're trying to declare another variable with the same name,its incorrect.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// I deleted creation a new variable.
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
