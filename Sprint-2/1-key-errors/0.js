// Predict and explain first...
//  =============> Error due to "let str", str already exists due to being created by "capitalise(str)"

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello world"));

// =============> The error spells it out "SyntaxError: Identifier 'str' has already been declared"
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello world"));