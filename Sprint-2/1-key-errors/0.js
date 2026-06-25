// Predict and explain first...
//  =============> write your prediction here /* there will be a syntax error because the variable str is being declared twice in the same scope. The first declaration is in the function parameter, and the second declaration is inside the function body. This will cause a conflict and result in an error. */

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here
