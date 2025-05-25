// Predict and explain first...
//  =============> write your prediction here
// it return an error

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> SyntaxError: Identifier 'str' has already been declared
// =============> write your new code here
function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result
 
}
console.log(capitalise("nhreef"))