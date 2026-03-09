// Predict and explain first...
//  =============> the function is not going to work because a variable is declared twice (str)

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> the error message 'Identifier 'str' has already been declared', diplays because the toUpperCase function does not change the value of the varible declared 
// but it creates a new one.
// =============> my new code: 
function capitalise(str) {
<<<<<<< HEAD
  result = `${str[0].toUpperCase()}${str.slice(1)}`;
=======
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
>>>>>>> parent of 3bb9ddf (Update 0.js)
  return resault;
}
