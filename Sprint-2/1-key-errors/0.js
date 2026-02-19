// Predict and explain first...
//  =============> write your prediction here 
// it will throw an error because we are trying to declare a variable with the same name as the function parameter, which is not allowed in JavaScript. The error message will likely indicate that there is a syntax error or that the variable has already been declared.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

//capitalise("hello world");
//console.log(capitalise("hello world"));
// =============> write your explanation here
// The error occurs because we are trying to declare a variable named 'str' inside the function, which is the same name as the function parameter. In JavaScript, you cannot declare a variable with the same name as a parameter within the same scope. This results in a syntax error, as the JavaScript engine does not know how to handle the duplicate declaration of 'str'. To fix this issue, we can simply remove the 'let' keyword and assign the new value to 'str' directly, since it is already declared as a parameter.


// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello world"));