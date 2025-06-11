// Predict and explain first...
//  =============> write your prediction here: "str" is already used as a parameter , i don't know if we gonna get an error or undefined

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("hello");
// =============> write your explanation here: the error occurs because "str" has already been declared when was used as a parameter

/* =============> write your new code here:
function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("hello");*/
