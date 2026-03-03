// Predict and explain first...
//  =============> write your prediction here
//Will error because we are trying to declare a variable with the same name as the parameter of the function. The error message will likely indicate that there is a syntax error or that the variable 'str' has already been declared.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
// The error is occurring because we are trying to declare a variable 'str' inside the function that has the same name as the parameter 'str'.To fix this problem,  create an variable with a new name Newstr . So we would change the line to: Newstr = `${str[0].toUpperCase()}${str.slice(1)}`; 
// =============> write your new code here
 function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`; //change the variable name to newStr to conform with camelCase name convention.
  return newStr;
} 
console.log(capitalise("hello world")); 
