// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//The function capitalise accepts a parameter named str.

//In JavaScript, we cannot use let to declare a new variable with the same name as an existing parameter within the same scope. 
//This will throw an error.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  // I ommited let
  return str;
}

// Fixed the code.
