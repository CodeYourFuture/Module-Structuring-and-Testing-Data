// Predict and explain first...
//  =============> write your prediction here
// I predict the code is for capitalising the first letter of a string.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// the error is "The symbol "str" has already been declared."

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> write your explanation here
// Error occurs because the str was mentioned as a parameter in the definition which is already a variable name in the function body.

// =============> write your new code here

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

// to call the function : 

console.log(capitalise("naber?")); // Output: "Naber?"