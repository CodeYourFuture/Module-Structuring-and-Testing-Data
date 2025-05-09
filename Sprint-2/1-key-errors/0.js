// Predict and explain first...
//  =============> write your prediction here
// prediction:The code will throw a SyntaxError because str is being declared twice in the function scope
//JavaScript does not allow redeclaring function parameters using let or const within the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//The function parameter str is already defined when the function is called.
//Inside the function, the line let str = ... attempts to redeclare str, causing a SyntaxError.
//To fix this, we can either:
//Use a different variable name inside the function.
//Modify str directly without redeclaring it.

// =============> write your new code here
function capitalise(str) {
str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

