// Predict and explain first...
//  =============> write your prediction here
// code will throw error as the parameter is being redeclared 
// in the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here

//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//       ^

// SyntaxError: Identifier 'str' has already been declared indicates
// str is being redeclared in the function as it was already declared
// as a parameter of the function capitalise.

// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

capitalise("hello") // 'Hello' 