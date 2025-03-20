// Predict and explain first...
//  =============> write your prediction here

//Answer: this will capitalize the first character of the string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// Answer : this was the error SyntaxError: Identifier 'str' has already been declared

function capitalise(str) {
 let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
};


// =============> write your explanation here
// variable let was declared twice in the code so it was 
// =============> write your new code here

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
   return str;
 };
console.log(capitalise("welcome"));