// Predict and explain first...
//  =============> write your prediction here
// I am unable to predict the error right now.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

output = capitalise("my name is adiyah");
console.log(output);*/

// =============> write your explanation here

/* SyntaxError: Identifier 'str' has already been declared.
    This error occurs because the function parameter name and the variable name declared inside 
    the function is same. This error can be fixed by either changing the parameter name or the variable name.
*/
// =============> write your new code here

function capitalize(str) {
  let inputStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return inputStr;
}

let output = capitalize("my name is Adiyah");
console.log(output);
