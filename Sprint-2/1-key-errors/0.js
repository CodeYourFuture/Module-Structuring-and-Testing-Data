// Predict and explain first...
//  =============> The function is trying to return a string with the only the first character capitalised
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   console.log(str);
//   return str;
// }

// =============> The code is trying to declare a new variable called str, but this name is already in use by the function parameter so it cannot be declared a second time.
// =============> As I am not using the value anywhere else, I chose to not create a new variable

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

capitalise("amaranth");
capitalise("leonardo");
