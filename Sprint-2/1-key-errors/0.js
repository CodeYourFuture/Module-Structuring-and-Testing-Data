// Predict and explain first...
//  I guess that the error could be due to the having the same variable in parameter and in the function body.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// So, the error sounds "SyntaxError: Identifier 'str' has already been declared", it means that we can't declare the sane variable name twice
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("greetings")); // Output: "Greetings"
