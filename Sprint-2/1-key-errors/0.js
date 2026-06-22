// Predict and explain first...
//  =============> An error is likely to occur due to repeat of "str"

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> SyntaxError: Identifier 'str' has already been declared. This error occurs because the variable 'str' is being declared again within the function,
// which is not allowed. To fix this, we can simply remove the 'let' declaration.
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("brother"));
