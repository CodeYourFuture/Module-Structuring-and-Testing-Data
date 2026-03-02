// Predict and explain first...
//  =============> The error will be that the variable str is being redefined within the function. It was already defined when it was passed as an arguement.

// call the function capitalise with a string input
capitalise("hello world");
// interpret the error message and figure out why an error is occurring
// Error message: SyntaxError: Identifier 'str' has already been declared. The error is because the variable str has already been declared.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> I've given the variable a new name, newStr, to avoid redclaring the variable.
// =============> function capitalise(str) {
//  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return newStr;
//}
