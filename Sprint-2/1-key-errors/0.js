// Predict and explain first...
//  =============> str[0].toUpperCase(): converts the string to uppercase
// while str.slice(1) returns the remaining characters from the second character till the last

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

 function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> SyntaxError: Identifier 'str' has already been declared
// The variable str has already been declared and was declared again inside function.
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("chicago"));
