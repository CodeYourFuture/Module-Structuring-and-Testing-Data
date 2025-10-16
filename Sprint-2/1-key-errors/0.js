// Predict and explain first...
//  =============> my explanation: I see here declaration of str variable, which already exist as an argument. It will cause an error.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//===============>SyntaxError: Identifier 'str' has already been declared, its occured while execution of code.
/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
  */
// =============> write your explanation here. My explanation: We have to change the name of variable and return it in order to fix an error.
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("some string"));