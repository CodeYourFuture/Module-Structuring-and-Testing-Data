// Predict and explain first...
//Answer
//  We have declared the "str" twice.It is already declared 
//  in this function parameter, hence causing the conflict. 
//  Although "let" allows re-assignment of variables, the issue is redeclaration, 
//  not reassignment.


// call the function capitalise with a string input
//Answer
/// home/justice/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/tempCodeRunnerFile.js:2
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//      ^

//SyntaxError: Identifier 'str' has already been declared


// interpret the error message and figure out why an error is occurring
//Answer




function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here
