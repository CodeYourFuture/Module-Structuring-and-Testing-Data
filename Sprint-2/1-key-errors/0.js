// Predict and explain first...
//  =============> 
I predicte that the error will be that the variable str is already declared in the function. 
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


// =============> write your explanation here 
when I run the program it give an error message that the identifier str has already been declared. this is because the variable str is declared twice in the function capitalise and in the variable let str.
to fix this we can change the variable name of the let str to newStr and this will fix the issue. 
// =============> write your new code here
function capitalise(str) { 
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}