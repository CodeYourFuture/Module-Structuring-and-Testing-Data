// Predict and explain first...
//  =============> write your prediction here it will captilase the first and second letter of the string  because the is calling for 0 , 1 slice.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("summer"));
// why will an error occur when this program runs?
// because the variable str is being declared twice, once as a parameter and then again inside the function. 
// =============> write your explanation here
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("summer"));