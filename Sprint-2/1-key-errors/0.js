// Predict and explain first...
//  =============> write your prediction here
// The program will give an error.The error happens because `str`is written twice inside the function.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The function already has an input called `str`
// Inside the function, the code tries to create another variable called `str`using `let`
//JavaScript does not allow the same varible name to be created again in same place.
//Because of this, the program throwns an error.

// =============> write your new code here

function captialise(str){
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
