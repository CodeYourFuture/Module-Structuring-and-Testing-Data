// Predict and explain first...
//  =============> there are two declarations of the variable str. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> str is declared twice in the function capitalise and using let. 

// =============> we delete the 'let'
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
