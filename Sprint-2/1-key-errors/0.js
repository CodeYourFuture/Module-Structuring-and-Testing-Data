// Predict and explain first...
//  =============> write your prediction here
// It will crash with a SyntaxError. We can't use 'let' to declare 'str' because 'str' is already taken by the function parameter.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/* I commented this out so it doesn't crash:
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> write your explanation here
//The error confirms "str has already been declared". Function parameters act as local variables, creating a naming conflict with `let str`.
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("hello"));