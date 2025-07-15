// Predict and explain first...
//  =============> write your prediction here
// The code will throw an error because the variable 'str' is being redeclared with 'let' inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// the error shows that 'str' is already declared in the outer scope, and we cannot redeclare it with 'let' in the inner scope.

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// The code will throw a SyntaxError because the variable 'str' is being redeclared with 'let' inside the function, which is not allowed in JavaScript.
// The function capitalise is trying to declare 'str' again with 'let', which is already declared in the outer scope. This leads to a SyntaxError because 'let' does not allow redeclaration of the same variable in the same scope.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));