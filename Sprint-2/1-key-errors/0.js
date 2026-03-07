// Predict and explain first...
//  =============> write your prediction here
// I predict there will be a syntax error but not sure what the error is yet. I think it has something to do with the variable declaration of str.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello world"));
// =============> write your explanation here
// it showed SyntaxError: Identifier 'str' has already been declared, this is because we have declared the variable str twice,
//  once as a parameter and once as a variable inside the function. To fix this error, we can either change the name of the
//  variable inside the function to something else like newStr.
// =============> write your new code here
function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}

console.log(capitalise("hello world"));
