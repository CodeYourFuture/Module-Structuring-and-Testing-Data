// Predict and explain first...
//  =============> I predict this code will create a function which can capitalise the first letter of a string and keep the second letters to last one the same. This string is stored and return to the function call.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The error message shows "SyntaxError: Identifier 'str' has already been declared". And it indicated the variable name 'str' at line 8, I think it triggered a syntax error when try to declare 'str' in the function while it is already being defined as a function parameter. So I changed it to 'strStored' in the function and it works.
// =============> function capitalise(str) {
//  let strStored = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return strStored;
//}
