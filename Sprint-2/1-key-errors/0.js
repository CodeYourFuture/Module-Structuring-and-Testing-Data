// Predict and explain first...
//  =============> write your prediction here
// I don't see any error in this code 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// console.log(capitalise('cat'))

// =============> write your explanation here
// since 'str' variable is already declared as a parameter we cannot declare it again in the same function. To fix this we need to rename the "str" varibable inside the function 

// =============> write your new code here
function capitalise(str) {
  let capitalised_str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised_str;
}
console.log(capitalise('cat'))