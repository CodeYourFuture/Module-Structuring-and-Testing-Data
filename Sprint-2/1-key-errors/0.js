// Predict and explain first...
//  =============> write your prediction here  Name of parameter of our function is the same like a name of variable which we are going to return, so we will get an error

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hanan"));
// =============> write your explanation here we have to change a name of variable or parameter
// =============> write your new code here

function capitalise(str) {
  let modifiedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return modifiedStr;
}

console.log(capitalise("hanan"));
