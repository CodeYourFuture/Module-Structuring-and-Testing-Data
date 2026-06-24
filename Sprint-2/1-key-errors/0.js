// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error occurred because str is declared twice. Instead the expression is returned directly without declaring a new variable 

// =============> write your new code here

function capitalise(str) {
   return `${str[0].toUpperCase()}${str.slice(1)}`;
}
const newName = capitalise("");
console.log(newName);