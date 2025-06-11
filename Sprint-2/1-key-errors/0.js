// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

//   Looking at the function declaration, it shows that str is already a parameter and has already been declared. 
//   let cannot declare a new variable in the same scope. Therefore, a syntax error occurs. 


// =============> write your new code here

// We need to remove let from the function declaration so we can modify the value of the existing str variable 

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
