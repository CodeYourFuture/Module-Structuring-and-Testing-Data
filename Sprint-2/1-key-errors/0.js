// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// =============> write your explanation here
  // The code will not display anyting since there is no console.log
  // I see that the variable has been named twice so there will be an error

// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
let output = capitalise("welcome")
console.log(output);
