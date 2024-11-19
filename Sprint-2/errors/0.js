// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
// when I run in node it gives a syntaxerror, as the variable str has been declared twice
// removed the let keyword from inside the function 