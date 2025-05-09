

// Predict and explain first...
//  The code will result in an error because we are redeclaring the str variable inside the function.
//The error occurs because the str variable is being declared twice

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*
 function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> write your explanation here
/*In my exercise, there was an error that occurred when I was redeclaring the variable str inside the function, even though it was already declared as a parameter of the function. To fix the problem, I simply removed the redeclaration of str inside the function and used the parameter str directly. This way, the capitalise function correctly returns a string with the first letter capitalized.*/

// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello"));