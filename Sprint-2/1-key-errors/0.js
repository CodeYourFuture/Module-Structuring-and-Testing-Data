// Predict and explain first...
/// This code will error before it runs. 'str' has already been declared"
//
// This happens because:
// 1. 'str' is already declared as a function parameter
// 2. Inside the function, we try to declare 'str' again using 'let'
 
// original code 
//function capitalise(str) {
 //let str = `${str[0].toUpperCase()}${str.slice(1)}`;  
//return str;
//}

// write your explanation here
 //When you write: function capitalize(str)
// - 'str' is already declared as a parameter
//Then inside the function: let str = ...
// - This tries to declare 'str' again

// new code 
function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}

console.log(capitalise("hello"));  // "Hello" 


