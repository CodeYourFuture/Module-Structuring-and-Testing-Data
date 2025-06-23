// Predict and explain first...
//  =============> write your prediction here
// The instruction wants to define a function with the input (str)

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// the error is in the use of let str. (str) is already an input and you can't use it again.

function capitalise(str) {
  let str= `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//In order to fix the problem we need to declare let with capitalise instead of str. 
// Because if we use the parameter (str), it creates a naming conflict in the same scope.
  

// =============> write your new code here
function capitlise(str) {
  let capitalise =`${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
