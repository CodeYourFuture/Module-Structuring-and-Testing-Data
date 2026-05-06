// Predict and explain first...
//  =============> write your prediction here
// the str variable declaration inside of the function shadows the function parameter
// if an empty string is passed to the function, trying to access element at index 0, and calling
// toUpperCase() on it will cause an error, as that value would be undefined.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// Error message is:
//SyntaxError: Identifier 'str' has already been declared
// it means that JavaScript has already declared a variable name 'str' within the function's scope.
// so when you try to declare it in the body of the function, there's a naming conflict.

// =============> write your new code here
function capitalise2(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
