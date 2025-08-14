// Predict and explain first...
/* =============> in this code, I see that the variable named str is reassigned inside  
 the function , so I expect that we will get an error because of this */

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
const capitaliseString = capitalise("fatma");
console.log(capitaliseString);

/* SyntaxError: Identifier 'str' has already been declared I got this error message.
 To fix it I changed  the variable name and I returned the  new variable */
// new code
function capitalise(str) {
  let yourString = `${str[0].toUpperCase()}${str.slice(1)}`;
  return yourString;
}
const capitaliseString = capitalise("fatma");
console.log(capitaliseString);
