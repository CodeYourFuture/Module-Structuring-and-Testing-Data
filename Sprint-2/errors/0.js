// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
_______________________________SOLUTION__________________________________________
/*
The parameter str and the local variable str share the same name.
When JavaScript executes the let str declaration, it tries to re-declare the str parameter 
as a new local variable. However, this is not allowed because variable names cannot be duplicated in the same scope.


Error Explanation: When the function is executed, JavaScript throws a SyntaxError 
because the variable str is being redeclared in the same scope as the function parameter str. 
This is a violation of JavaScript's scoping rules.
*/
//    Example error message:           SyntaxError: Identifier 'str' has already been declared

// Corrected Code: 

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("hello")); // Output: "Hello"
console.log(capitalise("world")); // Output: "World"