// Predict and explain first...
//  =============> This will not run because the variable str has already been used
// as a parameter. This will cause a syntax error 


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
 let str = `${str[0].toUpperCase()}${str.slice(1)}`;
 return str;
 }

// =============> The first mistake this renders is indeed in line 14 that 
// "Identifier 'str' has already been declared" 
// =============> 
// 
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
