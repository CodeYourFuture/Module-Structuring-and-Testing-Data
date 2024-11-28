// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//We get syntax error, because the variable str is being declared twice

// First, as the function parameter ==> function capitalise(str){}
// Second, as a let variable inside the function, let str.

//To fix this, we remove the let keyword from inside the function!
