// Predict and explain first...
//  =============> // =============> write your prediction here
//  I predict the code will throw an error because the variable `str` is being declared twice in the same function scope.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============>  write your explanation here
// The function already receives `str` as a parameter. 
// Inside the function, it tries to declare `let str = ...`, 
// which causes a conflict because JavaScript does not 
// allow redeclaring the same variable name in the same scope using `let`. 
// This leads to a `SyntaxError: Identifier 'str' has already been declared`.


// =============> write your new code here
// =============> write your new code here
function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}
