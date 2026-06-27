// Predict and explain first...
//  =============> write your prediction here
// The variable inside the function str has already declared as function parameter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
// Repeatative variable declaration prediction matches with the error message. Then I changed the old variable into new inside the 
// function. Then affter running the code it won't return anything cause no function call has been made yet.
// =============> write your new code here
// This is my code:
function capitalise(str) {
  let newstr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newstr;
} 
console.log(capitalise("dipa"));
