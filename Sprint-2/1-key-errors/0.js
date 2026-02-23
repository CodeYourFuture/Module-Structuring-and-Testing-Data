// Predict and explain first...
//  =============> write your prediction here: We'll get an error message because "str" paramater has been declared already,
//using it again inside the function will clash due to redaclaration. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}

// =============> write your explanation here: Identifier 'str' has already been declared, 
//redaclaration in the same scope throws up the error message 
// =============> write your new code here: 
function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}

//Above code works because we have used another variable "newStr", avoiding redeclaration.

