// Predict and explain first...

// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
//SyntaxError: Identifier 
// First, as the function parameter ==> function capitalise(str){}
// Second, as a let variable inside the function, let str
//to fix this issue :
function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
