// Predict and explain first...
//  we can not declare a variable which has the same name as the parameter, we will get a SyntaxError

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"))

// we are getting an error because of the way the function was wrote, "str" is the part that is causing the issue
// we can not declare a variable which has the same name as the parameter
