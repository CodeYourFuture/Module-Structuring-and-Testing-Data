// Predict and explain first...
//  =============> write your prediction here
// Answer
// If I call the function capitalise with a string input, I predict that it will return an error because the variable str
// has already been declared as a paramter of the function so it can not be re-declared

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
//Answer
// The error message "SyntaxError: Identifier 'str' has already been declared" means that the identifier "str" has been declared and so can not be re-declared.
// This error occured because the same variable name occurs as a function parameter and is then redeclared using a let assignment in a function body again.
// Redeclaring the same variable within the same function or block scope using let is not allowed in JavaScript.

// =============> write your new code here
// Answer
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

let actualOutput = capitalise("welcome");
console.log(actualOutput);
