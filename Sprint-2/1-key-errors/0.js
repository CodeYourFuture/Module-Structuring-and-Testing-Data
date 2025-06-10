// Predict and explain first...
//  =============> write your prediction here
// The code will throw an error because the variable 'str' is being redeclared with 'let' inside the function,
// which is not allowed since 'str' is already defined as a parameter of the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// =============> write your interpretation here
// The error message indicates that 'str' has already been declared, which is true because 'str' is 
// both a parameter of the function and being redeclared with 'let' inside the function. As predicted, above.
// To fix this, we can simply remove the 'let' keyword inside the function since 'str' is already defined as a parameter.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// call the function capitalise with a string input
console.log(capitalise("hello world"));
// =============> write your explanation here
// =============> write your new code here
