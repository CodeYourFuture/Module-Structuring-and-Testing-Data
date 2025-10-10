// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here

// Error at line 8 
//SyntaxError: Identifier 'str' has already been declared
// the function has alreayd a parameter called "str"and 
// we are trying decare a new variable with the same name 

// =============> write your new code here

function capitalise(str) {
  let newCap = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newCap;
}
console.log(capitalise("hello"));
console.log(capitalise("apple"));