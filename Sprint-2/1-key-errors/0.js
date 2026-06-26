// Predict and explain first...
  // it will be reference error because the variable str is being declared twice, once as a parameter and once inside the function body.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
  // the error is occurring because the variable str is being declared twice, once as a parameter and once inside the function body. 
  //removing the let keyword would fix this error, for the function to work properly.

// =============> write your new code here
  let firstCapitalised = capitalise("hello");
console.log(firstCapitalised);