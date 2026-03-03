// Predict and explain first...
//  =============> write your prediction here
// I predict that the error will be a SyntaxError because we are trying to declare a variable with the same name as a parameter.  In JavaScript, you cannot declare a variable with the same name as a parameter within the same function scope.  This will cause a SyntaxError because it creates a conflict in variable naming.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The original error happened because we tried to declare a new variable
// named `str` with `let` even though `str` was already a parameter.  That's
// illegal in JavaScript and produces a SyntaxError.  By removing the extra
// declaration (or by returning the string directly) the function works.
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
