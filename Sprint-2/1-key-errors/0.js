// Predict and explain first...
//  =============> the code gives an error because there is a variable declaration with the same name as the parameter of the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}


// =============> write your explanation here: The error is occurring because the variable newStr is declared inside the function capitalise, 
// but it is being accessed outside the function.

// =============> write your new code here: 
  function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
  }
   let newStr = capitalise("hello");
   console.log(newStr);
