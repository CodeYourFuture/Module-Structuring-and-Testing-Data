// Predict and explain first...
//  =============> write your prediction here
//I think the code will throw an error because the variable `str` is being declared twice using `let`, which is not allowed in JavaScript. The first declaration is in the function parameter, and the second one is inside the function body.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//the funct

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

capitalise("hello");

// =============> write your explanation here
// The error occurs because the variable `str` is declared twice using `let` in the same scope. In JavaScript, you cannot redeclare a variable with `let` in the same block scope. The first declaration is as a function parameter, and the second one is inside the function body, which causes a syntax error.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
