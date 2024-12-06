// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
Error from node:  Uncaught SyntaxError

The error is occuring becuase when we called our function, out input was "str". 
and then when we declared the varibale inside our function we gave it the same 
value as our function input and that messed up our syntax. 


  