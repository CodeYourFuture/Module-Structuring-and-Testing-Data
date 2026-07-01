// Predict and explain first...
//  =============> write your prediction here
//  when running the code there will be a syntax error because the `str` being a function name has already been declared 
// so it cant be returned .so the return variable should have another name

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//Uncaught SyntaxError: Identifier 'str' has already been declared


function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// there is an error in the code because the `str` is declared twice and there are unexpected token '}'.

// =============> write your new code here
function capitalise (str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

