// Predict and explain first...
// The code will throw a Syntax error: Identifier > write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} 

// The error occurs because the variable str is declared twice within the same scope, in this function we used the variable as a function parameter,
//  then trying to redeclare it again as a variable, JavaScript does not allow it, and will throw error.> write your explanation here
// =============> write your new code here

function capitalise(str) {
  let correctStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return correctStr;
}

console.log(capitalise("jamal")); // Output: Hell