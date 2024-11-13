// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}

// The error in your code occurs because you are declaring the variable str again inside the capitalise function,
//which is causing a SyntaxError. You cannot redeclare a parameter with the same name as the parameter itself in JavaScript.
//In the line let str = ..., we are trying to declare a new variable str with let,
//but str is already the name of the parameter of the capitalise function.
