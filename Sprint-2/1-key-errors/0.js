// Predict and explain first...
//  =============> Capatlises the first letter of a string.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The variable 'str' is being declared twice, once as a parameter and again with 'let' resulting in a syntax error.
// =============> function capitalise(str) {
// =============>   let word = `${str[0].toUpperCase()}${str.slice(1)}`;
// =============>   return word;
// =============> }
