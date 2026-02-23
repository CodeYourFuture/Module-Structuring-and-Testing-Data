// Predict and explain first...
//  =============> write your prediction here
//  1.*Answer
//  We have declared the "str" twice.It is already declared 
//  in this function's parameter, hence causing the conflict. 
//  Although "let" allows re-assignment of variables, the issue is redeclaration, 
//  not reassignment.


// call the function capitalise with a string input
// 2.*Answer
//  It throws an error detailed below;
//  / home/justice/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/tempCodeRunnerFile.js:2
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//      ^
//  SyntaxError: Identifier 'str' has already been declared.


// interpret the error message and figure out why an error is occurring
//  3.*Answer
//  The SyntaxError - Something is invalid that is not following 
// Javascript rules.
//  The identifier - a name used in the code has a problem and it 
// lets m know which one in this case "str". It also let's me know
// what the problem is in this case "str" has already been declared.

//Fix this code:
// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
//I have re-assigned the "str" variable and it now runs with no errors.
// I also checked with console.log to see the output.

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("justice"));


