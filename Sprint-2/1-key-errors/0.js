// Predict and explain first...
//  =============> write your prediction here

//When this function is called (e.g. capitalise("hello")), it will throw an error.



// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here

/*The error occurs because of variable shadowing:
SyntaxError: Identifier 'str' has already been declared
The parameter is named str.
Inside the function, you try to declare a new variable also named str using let str = ....
JavaScript does not allow re-declaring a variable with the same name in the same scope using let.
*/

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"))
