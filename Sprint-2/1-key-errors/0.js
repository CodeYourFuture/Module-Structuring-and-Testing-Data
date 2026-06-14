// Predict and explain first...
//  =============> My prediction is the code will not work properly
//due to "str" being a parameter on the first line, then it being declared
//again on the second line as a variable, essentially creating two declarations
// under one name, in the same scope. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> Uncaught SyntaxError: Identifier 'str' has already been declared - VM779:2
//Above is the error message i got, when i ran the code in my chrome console. My prediction 
// was correct, 'str' has been declared twice, and also the error is on line 2. 

// =============> I shall erase 'let' keyword and see what happens.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//function works, called on it by adding 

capitalise("cyf");

//at the end.

















