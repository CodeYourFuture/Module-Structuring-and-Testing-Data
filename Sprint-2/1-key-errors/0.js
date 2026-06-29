// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// the error message details: SyntaxError: Identifier 'str' has already been declared
// In function definition the variable str is already declared, therefore in the function body
// a new declaration of the same variable is redundant.
// when a function call is made, variable str gets the value from the argument of the call.
// In order to fix the issue, we can easily just return the value as it is given in line 8.
// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello, world! tom's here."));
