// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


//There is a syntax error.
//SyntaxError: Identifier 'str' has already been declared.
//It ls impossible to use let redeclare a variable that already exists.

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  str = '${str[0].toUpperCase()}${str.slice(1)};'
   return str;
}

// Example usage:
console.log(capitalise("loveth")); 
console.log(capitalise("world"));
console.log(capitalise("Code Your Future"));
