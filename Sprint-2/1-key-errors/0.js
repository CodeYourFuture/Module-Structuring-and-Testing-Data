// Predict and explain first...
//  =============> write your prediction here: We have a SyntaxError bacause  In JavaScript, redeclaring a function parameter
// inside the function body using let is not allowed.
// A function capitalise is declared, which takes a parameter str. Inside the function, there is an attempt to redeclare str using let, which is not allowed in JavaScript. 
// This will result in a SyntaxError because function parameters are already declared variables, and using let to redeclare them within the same scope is invalid



// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here : The parameter str is already defined in the function signature: function capitalise(str)
// Inside the function, the line let str = ... attempts to redeclare str using let, which is not allowed.
//
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
