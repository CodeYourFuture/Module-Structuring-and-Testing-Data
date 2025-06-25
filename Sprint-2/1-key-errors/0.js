// Predict and explain first...
//  =============> write your prediction here

// The code will throw an error because the variable `str` is being declared twice in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("hello,this is a test");

//

// =============> write your explanation here
// =============> write your new code here
//// The error occurs because the variable `str`is declared twice in the same scope,which is not allowed in JavaScript.