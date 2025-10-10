// Predict and explain first...
//  =============> this function get the argument and as string then first letter in capital and the rest of string in lower case;

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// the problem is in line 8, because we can not use the "str" twice, currently once we used as parameter and again as variable,
// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
   
}
console.log(capitalise("hello world"));