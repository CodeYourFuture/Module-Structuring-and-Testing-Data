// Predict and explain first...
//  =============> I predict this code will take the first letter of the string and capitalise it.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// =============> The syntax error happens because variable str is declared twice.
// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
console.log(capitalise("hello"));
console.log(capitalise("how are you?"));
