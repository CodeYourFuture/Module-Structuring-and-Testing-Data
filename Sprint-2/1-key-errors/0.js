// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

////////  error code /////

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// fix code //
function capitalise(str) {
  let string = `${str[0].toUpperCase()}${str.slice(1)}`;
  return string;
}
console.log(capitalise("hello js error"));

// =============> write your explanation here
// =============> write your new code here

// The Error was syntax error as "str" has already been declared and we can't declare it again as variable name. Now I declare a new variable name  and assign value.
