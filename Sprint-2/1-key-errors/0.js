// Predict and explain first...
// =============>  ANSWER
// It takes a string and change its first letter to capitial letter aida -----> Aida

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// // =============> ANSWER
// SyntaxError: Identifier 'str' has already been declared
// It is not allow to  redeclare the parameter str inside the function

// // =============> write your new code here
let name = "aida";

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("aida"));
