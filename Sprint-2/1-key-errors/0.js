// Predict and explain first...
//  =============> write your prediction here
//SS - Predicted the function would capitalise the given string parameter but instead I got an error.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//The error says str has already been declared on line 8
// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// console.log(capitalise("apple"));
// =============> write your explanation here
// Since str has already been declared as parameter, there is no need to redeclare it again.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("apple"));
