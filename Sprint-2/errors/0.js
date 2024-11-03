// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// the variable string is already declared within the parameter of the function capitalise.
// SyntaxError: Identifier 'str' has already been declared tells us that variable str is already declared.
// fixed by removing let.