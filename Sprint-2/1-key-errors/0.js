// Predict and explain first...
//  =============> write your prediction here
//There will be a syntax error when the function   `capitalise` is called 
//because the variable `str` is being declared twice in the same scope. 
//The first declaration is in the function parameter, and the second declaration 
//is inside the function body. This will cause a "SyntaxError: Identifier 'str' has 
//already been declared" error.



// interpret the error message and figure out why an error is occurring
//The error occurs because the variable `str` is being declared twice in the same 
//scope. The first declaration is in the function parameter, and the second 
//declaration is inside the function body. This causes a "SyntaxError: Identifier 'str' 
//has already been declared" error.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
