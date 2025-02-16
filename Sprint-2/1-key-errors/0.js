// Predict and explain first...
//  =============> write your prediction here
// there will be an error with the declaration of the variable str as a parameter and declared on line 9 again.

// call the function capitalize with a string input
// Answer - SyntaxError: Identifier 'str' has already been declared 
// interpret the error message and figure out why an error is occurring
//Answer - the error is occurring because str has been declared twice.


/*function capitalize(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

*/

// =============> write your explanation here
// Answer - the variable str has been declared twice. I have renamed the result of the function as capitalizeStr.
// =============> write your new code here
 
function capitalize(str) {
 let capitalizeStr = `${str[0].toUpperCase()}${str.slice(1)}`;
 return capitalizeStr;
} 
 console.log(capitalize('code'));
 