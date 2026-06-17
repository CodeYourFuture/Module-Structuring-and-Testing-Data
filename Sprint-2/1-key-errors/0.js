// Predict and explain :
//The code will throw a SyntaxError : SyntaxError: Identifier 'str' has already been declared

//----------------------------------------------------------------------------------------------------------

// Original code :
/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

//----------------------------------------------------------------------------------------------------------

// Corrected code :
function capitalise(str) {
  let capitaliseStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitaliseStr;
}

// call the function capitalise with a string input :
capitalise("javascript");

//----------------------------------------------------------------------------------------------------------

// interpretation of the error message / Why an error is occurring :
//SyntaxError: Identifier 'str' has already been declared.
//str is already declared as a function parameter.
//Parameter is already a variable inside the function.
//Then, try to declare it again using let str as a local parameter.
//JavaScript does NOT allow two variables with the same name in the same function scope.
