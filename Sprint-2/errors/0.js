// Predict and explain first...
// the function capitalise takes a string parameter and then uses [] notation to get the first letter of the string, and it then uses toUpperCase function to changes the letter to an upper case.
// It then uses the same string parameter with the slice method  to grab the rest of the letters and add it the inital letter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// the error is caused due to using the same variable name as the function parameter. So one of the solution will be to only use variable inside the function parameter or to change the name of the let variable.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello"));
