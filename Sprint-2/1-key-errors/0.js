// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// console.log(capitalise("lowercase"));

// =============> write your explanation here
// The error states str has already been declared. This is because str is the parameter and within the
// function it is trying to declare a new variable with the same name using let.

// =============> write your new code here
function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}

console.log(capitalise("lowercase"));
