// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//Error1:Identifier 'str' has already been declared
//trying to declare a new variable named str with let str = ... so do not need to defined it as a variable.
//Or we can use a different variable name (e.g., capitalizedStr)
//Fixed code:
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`; // no 'let' here
  return str;
}
