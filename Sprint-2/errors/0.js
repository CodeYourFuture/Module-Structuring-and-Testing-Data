// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

/* In line 7, there is a declaration of the variable str but it is also in the scope of itself.
Either a new variable must be declared or the existing variable should be modified by removing
let.
*/