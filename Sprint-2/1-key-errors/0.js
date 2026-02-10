// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here 
// It leeds to an error declaring the same variable name more than 1 time.
// It also can confuse reassigning the variable str. it is better to remove it or made up a new one.  
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
