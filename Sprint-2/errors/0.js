// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The code will throw an error as str has been declared again.First it's been declared as the parameter
// of the function and then declared again in line 7 using let which is wrong. We cannot re-declare a variable
// within the same scope.
// To fix this we can remove the let keyword inside the function and assign a new value to the parameter str
// str = `${str[0].toUpperCase()}${str.slice(1)}`;
// By doing so, the code will return the capitalized version of the first character of the input string.