// Predict and explain first...
//  =============> This code will give an error message

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> it gave an error because the variable str is being declared twice one with the function and another one with anew variable 
// =============> this can be fixed by changing the variable name inside the function
function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}
console.log(capitalise("sophia")); // Output: "Sophia"