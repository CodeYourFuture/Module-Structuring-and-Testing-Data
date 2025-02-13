// Predict and explain first...
// I thought it  was going to show undefined. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//The error message was that str is already declare in the parameter. 
//so we either had to change the parameter or the variable's name in the function 
//or just return the expression without saving it into a variable.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here

let string = "millena mesfin"
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise(string));