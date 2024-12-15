// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
 console.log(`${capitalise("pooriya")}`)

// Here we will get syntax error due to redeclaration "str" value. it happens because we declare "str" in the function parameter, and we are not allowed to redeclare it in the function body.
// To solve the error we can just remove the let statement from beginning of the function body behind "str", this way we gonna update "str" variable with new value.