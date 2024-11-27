// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

//correction 
// the problem is  the capitalise function is that it is re declaring the str parameter inside the function using let.
// we canot do that cause the str is already a defined function.

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("emmanuel"))