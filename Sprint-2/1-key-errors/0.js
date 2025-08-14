// Predict and explain first...
//  =============> write your prediction here

// This will return a reference  error.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// =============> write your explanation here

/*This is because str was already assigned in the function, therefore there is no need to declare it as a variable again
you can re-assign its value but nor declare it again */

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("name"));
