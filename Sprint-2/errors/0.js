// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}` + `${str.slice(1)}`; // I changed the template literal. If "+" is inside the template literal, it’s treated as a regular character, not an operator. To use + as an operator and concatenate strings, put it outside the template literal.”
  return str;
}

let str = capitalise('hello'); //We need to declare a variable globally to use it out of the function.
console.log(str);