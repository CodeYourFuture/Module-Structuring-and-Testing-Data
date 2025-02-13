// Predict and explain first...
//  This function will produce error as it declare a new let variable with same name as the function parameter.

// call the function capitalise with a string input
//1. console.log(capitalise("cyf"));
// interpret the error message and figure out why an error is occurring

/*
let str = `${str[0].toUpperCase()}${str.slice(1)}`;
      ^
SyntaxError: Identifier 'str' has already been declared. it said str variable is already declared.
*/

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// reason is in java script variables name in same scope can not be  declared as new variable with the same name.Here as function parameter(str) and 
// try to declare new variable let (str) which create error.  I will change variable name here and call function.
// =============> write your new code here.
/*
function capitalise(str) {
  let capitalisedWord = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedWord;
}
  console.log(capitalise("cyf"));
  */

