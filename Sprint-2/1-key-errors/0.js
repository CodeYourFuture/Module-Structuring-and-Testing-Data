// Predict and explain first...
//  =============> write your prediction here : we'll get an error because a parameter can not be declared as a variable also, inside the function


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here: Identifier 'str' has already been declared
// =============> write your new code here:
function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}


