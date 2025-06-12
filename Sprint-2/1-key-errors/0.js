// Predict and explain first...
//  =============> function looks good, this will capitalize first letter of the string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// =============> write your explanation here
  // "str" variable was declared twice in the code we shall have to rename it
// =============> write your new code here

function capitalise(str) {
  let strOne = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strOne;
}

console.log(capitalise("peter"));