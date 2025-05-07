// Predict and explain first...
//  =============> write your prediction here: The code will not run because "let" should not be use in a function.

// call the function capitalise with a string input: done
// interpret the error message and figure out why an error is occurring: says string has already been declared. As said earlier "let" should be eliminated

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


// =============> write your explanation here:
// Let is not needed to declare a variable inside a function.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
