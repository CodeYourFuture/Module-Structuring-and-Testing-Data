// Predict and explain first...
//  =============> write your prediction here
//The variable str has been declared twice the first one as the function
//  and the second time inside the function =>   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} */

// =============> write your explanation here
// An error occured => SyntaxError: Identifier 'str' has already been declared
//because in javascript we cant declare a variable more than once within scope .

// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
   return str;
 }
 
 console.log(capitalise("cool"))