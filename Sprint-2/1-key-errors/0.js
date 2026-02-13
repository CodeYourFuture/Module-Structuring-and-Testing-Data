// Predict and explain first...
//  =============> write your prediction here
//there will be an error because str is alrady declared.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// =============> write your new code here
function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise('hello world')); // should return 'Hello world'