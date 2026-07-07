// Predict and explain first...
// The issue might be that the input to the function is str but also there is a variable declaration str inside it

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise("hello") {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// Uncaught SyntaxError: Identifier 'str' has already been declared - meaning str should not have been used inside the function or the parameter of the function
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("hello"));
