// Predict and explain first...
//   I thought it was going to work, however my prediction was wrong. =============> write your prediction here

// call the function capitalise with a string input

//SyntaxError: Identifier 'str' has already been declared


// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}




// The identifier "str" has already been declared as a parameter in the function and cannot be redeclared withing a block scope.// =============> write your explanation here


  function capitalise(str) {
   return `${str[0].toUpperCase()}${str.slice(1)}`;
  }
  //  =============> write your new code here
