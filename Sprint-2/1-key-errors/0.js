// Predict and explain first...
//  =============> given a string as input the function will capitalize the first letter then
// add it to a sliced version of the original string starting at index 0 until the end of the string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/
// =============> the error is due to declaring str inside the function when it has already passed as input for the function
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("person"));
