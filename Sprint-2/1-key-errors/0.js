// Predict and explain first...
//  =============> write your prediction here
// I think this function will capitalise a string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// the variable has already been declared when it was passed to the function
//
// =============> write your new code here

const my_string = "hello world";
console.log(capitalise(my_string));
