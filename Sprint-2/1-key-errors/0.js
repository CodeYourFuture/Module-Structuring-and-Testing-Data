// Predict and explain first...
//  =============> write your prediction here
// The function will capitalize the first letter of the string 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// An error was returned after running the code ,
// There is a variable name 'str' is used both as a parameter and as a new variable inside the function.
//  You cannot redeclare a function parameter using 'Var' or 'Let'
// =============> write your new code here

function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}