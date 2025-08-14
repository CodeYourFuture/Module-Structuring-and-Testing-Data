// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
 str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
//There is a syntax error
//SyntaxError: Identifier 'str' has already been declared.
//It is imposable to use let redeclare a variable that already exists.
//Testing
console.log(capitalise("amir")); 
console.log(capitalise("world")); 
console.log(capitalise("code Your Future")); 

