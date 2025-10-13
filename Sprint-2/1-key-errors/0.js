// Predict and explain first...
//  =============> write your prediction here : There will be an error.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//return str;

// =============> write your explanation here : Because str has been used(declared) twice. As an input(parameter) to the function(capitalise) and with let. We should used a different variable.

// =============> write your new code here :

function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}
console.log(capitalise("fares"));
