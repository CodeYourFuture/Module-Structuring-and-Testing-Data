// Predict and explain first...
//  =============> The code will throw an error because the variable str is a reserved keyword in JavaScript and cannot be used as a variable name.
//                 The error message will likely indicate that there is a syntax error or that the variable name is invalid.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(str);

// =============> write your explanation here

//  C:\Users\alexo\CYF\Module-Structuring-and-Testing-Data\Module-Structuring-and-Testing-Data\Sprint-2\1-key-errors\0.js:8
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//      ^

// SyntaxError: Identifier 'str' has already been declared

// The error message indicates that there is a syntax error in the code because the variable name 'str' has already been declared.

// In the function capitalise, the parameter 'str' is declared as a variable name, and then within the function body, there is another declaration of 'str' using the let keyword.
// This creates a conflict because 'str' is already declared as a parameter, and it cannot be redeclared as a variable within the same scope.

// =============> write your new code here
function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}

console.log(capitalise("alex"));
