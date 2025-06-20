// Predict and explain first...
//  =============> The function capitalise is trying to take a string input,
// convert the first characater to uppercase and extract characters from
// the second to the end of the string.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

capitalise("hello");

// =============> The error "Identifier 'str' has already been declared" is occuring
// because the variable `str` is being declared twice in the function.

// =============> This is my new code:

function capitalise(str) {
  let name = `${str[0].toUpperCase()}${str.slice(1)}`;
  return name;
}

capitalise("hello");
