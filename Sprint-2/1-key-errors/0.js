// Predict and explain first...
//  =============> write your prediction here
It capitalised the first character of the input string.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
The error is : SyntaxError: Identifier 'str' has already been declared
str is defined already as the function parameter and we don't need to declare it again with let.
With using let , str is declaring again and it is the error .we should remove let  
// =============> write your new code here
function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
