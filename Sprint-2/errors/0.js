// Predict and explain first...
// displays error since str is already declared

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// error occurs because of str redeclaration since it already exist within the function parameter