// Predict and explain first...
//  =============> my prediction is that this code is not functioning because of that it declared parameter in the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here : the error message is indicating that str already declared in the parameter and we can't redeclare it.
/* =============> write your new code here
                  function capitalise(str) {
                   const capitalizeFirstLetter =`${str[0].toUpperCase()}${str.slice(1)}`;
                   return capitalizeFirstLetter;
                  }       */
