// Predict and explain first...
//  =============> write your prediction here
 //this function capitalises the first letter of a given string and returns it

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}
//const word = capitalise("darius");
//console.assert(word === "Darius")

// =============> write your explanation here
 // we get a syntax error because `str` is already declared a function parameter, so we need a different name for our variable.

// =============> write your new code here
function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}
const word = capitalise("darius");
console.assert(word === "Darius");