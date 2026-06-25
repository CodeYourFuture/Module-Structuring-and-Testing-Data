// Predict and explain first...
//  =============> write your prediction here /* there will be a syntax error because the variable str is being declared twice in the same scope. The first declaration is in the function parameter, and the second declaration is inside the function body. This will cause a conflict and result in an error. */

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
  
}
capitalise("Tobias");

// =============> write your explanation here /* when the function  `capitalise` is called with the argument "Tobias", it tries to declare a new variable `str` inside the function body using `let`. However, `str` is already declared as a parameter of the function. In JavaScript, you cannot declare a variable with the same name in the same scope, which leads to a syntax error  and from the  error message thus /home/tobi/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/0.js:8
  /*let str = `${str[0].toUpperCase()}${str.slice(1)}`;SyntaxError: Identifier 'str' has already been declared  it is pointing at line 8 as where the syntax error occurred so to fix the error the value on line 8 will need to be reassigned and not redeclared  */ 
// =============> write your new code here
