// Predict and explain first...

//*The capitalise function takes a string as input (str parameter here) and then will make the first letter of the string, capital but this
// *code has an error because it declared str inside of the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//*"SyntaxError: Identifier 'str' has already been declared"
//* The reason that we have this error is we declared "str" as a parameter for the function and then inside the function we tried to
//* declare it again that is wrong! For fixing this problem we can remove  let and then reassign the value.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
let test = capitalise("hello")
console.log(test)   // OUTPUT ; "Hello"

