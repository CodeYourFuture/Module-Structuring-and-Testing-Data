// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring.

function capitalise(str) {
  let capString = `${str[0].toUpperCase()}${str.slice(1)}`;

  return capString;
}
console.log(capitalise("saqib"))

// Identifier 'str' has already been declared, error in terminal because
// The code will throw a SyntaxError due to the re-declaration of the variable str inside the capitalise function.
// remove let variable inside the function