// Predict and explain first...
//  =============> write your prediction here

// I think the code will not rum properly because let in line 10 should be declared before the function in line 9 is called.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// The error is: Uncaught SyntaxError: Identifier 'str' has already been declared. It means that we cannot declare a variable with the same name as a parameter inside the function. In this case, We don't need the declaration let as str is already declared in the function's parameter.

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello world"));
