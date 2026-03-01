// Predict and explain first...  
//Syntax error
//  =============> write your prediction here
// We pass str as a parameter to the function.
//The parameter becomes a local variable inside the function scope.
//Therefore, we cannot declare another variable with the same name inside the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The parameter str is already a local variable inside the function.
// Previously, redeclaring it using let caused an error because variables cannot be declared twice in the same scope.
// Instead of redeclaring it, I modified the existing str variable and returned it.
// This avoids the redeclaration error and the code runs correctly.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
let str = capitalise("Arun");
console.log(str);


