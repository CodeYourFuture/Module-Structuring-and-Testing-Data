// Predict and explain first...
//  =============> write your prediction here

// This function crated in order to capitalize first character of input string 
// that given to function as parameter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> write your explanation here

// An error message tells us that variable 'str' already exists,
// it is because this variable given as parameter in line 10

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//Check function output:
console.log(capitalise("string"));