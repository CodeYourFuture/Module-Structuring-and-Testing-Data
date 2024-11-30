// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// This code will throw an error (Identifier 'str' has already been declared) because the let keyword is used to declare a new variable with the same name as an existing parameter
// In JavaScript, when you pass a parameter to a function, it already acts as a variable within the function's scope. Attempting to redeclare it with let causes an error.
// To fix this, we can simply assign a new value to str directly without redeclaring it.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;

  return str;
}

console.log(capitalise("hello"));
