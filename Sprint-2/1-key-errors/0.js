// Predict and explain first...
//  =============> write your prediction here
    // What I think is that there will be an error states 'str' in not define 
    // as 'str' need to be defined out of the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// capitalise("Hello, this is Abdullah")

// =============> write your explanation here
    // When I run the code I got this error
    // SyntaxError: Identifier 'str' has already been declared
    // means that I this code need to declare two variable with the same name.

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
let str = capitalise("hello, this is Abdullah");
console.log(str);