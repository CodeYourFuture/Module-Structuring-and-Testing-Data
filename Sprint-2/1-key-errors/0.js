// Predict and explain first...
//  =============> write your prediction her
/*
 an error will occur when the code runs because the variable str is being declared
 two time, the second declaration  let str =  inside the capitalize function
 is trying to redeclare the same variable 
*/

// call the function capitalise with a string input
/*
  console.log(capitalise("hello"));
  console.log(capitalise("world"));

*/
// interpret the error message and figure out why an error is occurring

/*
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
      ^

SyntaxError: Identifier 'str' has already been declared
*/

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/*
the function capitalise receives string str as an argument then attempt to create
a new string where the first character is capitalized and the other character remain
unchanged 
*/


// =============> write your new code here
/*
function capitalise(str) {
    str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
*/
