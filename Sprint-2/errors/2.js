// Predict and explain first...

// this function should square any number but instead we're going to get an error
// The parameter should be a variable name, not a specific value like 3.
// The error will be SyntaxError: Unexpected number.

/*
function square(3) {
    return num * num;
}
*/

// correct
function square(num) {
  return num * num;
}
