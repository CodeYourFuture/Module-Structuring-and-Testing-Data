// Predict and explain first...
//  =============> write your prediction here
/**
 * 
It use this every time when we will write something in the string.
It is the rule for capital letter. 
 */
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/* As always, you should only use the new name for the new 
string when calling it again. 
We should write every time new name for new "str".*/

// =============> write your new code here
function capitalise(str) {
  let str1 = `${str[0].toUpperCase()}${str.slice(1)}`;
  consol.log(str1)
  return str1;
}
capitalise(baha)

