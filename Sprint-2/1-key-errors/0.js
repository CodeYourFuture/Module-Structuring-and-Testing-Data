// Predict and explain first...
//  =============> write your prediction here

/** Prediction:
 * The code will throw an error because the parameter str and the variable str inside the function are both declared in the same scope.
 * 
*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/** Original function:
 *
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
*/

// =============> write your explanation here
/** Explanation:
 * The error occurs because:
 *
 * The function parameter str is already declared in the function scope
 * Inside the function, we're trying to redeclare str using let which creates a new variable in the same scope
 * JavaScript doesn't allow redeclaring a variable with let in the same scope
 * The error message would be something like:
 * SyntaxError: Identifier 'str' has already been declared
*/
	
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Test the function
console.log(capitalise("hello")); // "Hello"
console.log(capitalise("world")); // "World"

