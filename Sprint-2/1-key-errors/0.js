// Predict and explain first...
//  =============> write your prediction here: 
  // My predict is to convert the first index to uppercase.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
   
// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
  // The error is from str was used twice as a new var and it should be different var in the second time.
// =============> write your new code here
function capitalise(str) {
  let str1 = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str1;
}
console.log(capitalise("abc"))
  
