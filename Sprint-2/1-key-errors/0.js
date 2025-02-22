// Predict and explain first...
//  =============> write your prediction here
// I don't see any error in this code 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise('cat'))

// =============> write your explanation here
// we cannot use js reserved keywords as a variable name

// =============> write your new code here
// function capitalise(str) {
//   let capitalised_str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return capitalised_str;
// }
// console.log(capitalise('cat'))