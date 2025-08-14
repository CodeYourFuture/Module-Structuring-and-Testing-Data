// Predict and explain first... i predicted it was going to be an error 
//  =============> write your prediction here
// SyntaxError
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//str as a parameter to the function. Then you're trying to redeclare it inside the function with let str = ...,
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//str is already declared with function, trying to redeclare it inside the function with let str is not accepted in javascript
// =============> write your new code here
// function capitalise(str) 
 function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello")); 