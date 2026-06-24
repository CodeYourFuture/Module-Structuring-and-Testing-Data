// Predict and explain first...
//  =============> write your prediction here
// Well, I think the variable "str" is being declared twice, so the code will
//  through an error message.
//
//call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//The variable "str" has been used as a parameter for the capitalise function
//and also been declared again inside the function. I think if "let" is removed
//the code will work.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("sorted"));
