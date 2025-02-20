// Predict and explain first...
//  =============> str was declared twice, once as a parameter and once as a variable.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}



// =============> SyntaxError: Identifier 'str' has already been declared
// =============> this error because the variable str was declared twice.
// =============> write your new code here
function capitalise(str) {
  return str =`${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise('hi there'));