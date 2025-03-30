// Predict and explain first...
//  =============> write your prediction here
// The function will select first letter of the string and make it capital letter.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here

module.exports = capitalise;

// Example usage of the capitalise function
const exampleString = "hello";
console.log(capitalise(exampleString));

//Functio is not woking because of redeclaration of the string variable.
//