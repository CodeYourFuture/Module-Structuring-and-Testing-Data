// Predict and explain first...
//  =============> write your prediction here

//Answer: this will capitalize the first character of the string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// Answer : this was the error SyntaxError: Identifier 'str' has already been declared


// =============> write your explanation here
// variable let was redeclared in the code so it was causing "Identifier 'str' has already been declared" error so will remove the let keyword 
// =============> write your new code here

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
   return str;
 };
console.log(capitalise("welcome"));