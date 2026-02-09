// Predict and explain first...
//  =============> I think the variable 'str' is repeated twice in string literals.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The error occurs because some parts of the code are not allowed in JS.
//                The variable 'str' is already declared in line 7 as a parameter
// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}
console.log(capitalise("shop"));
