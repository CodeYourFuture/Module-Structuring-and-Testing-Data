// Predict and explain first...

/*
I predict that this function is going to extract the first character of the string at index 0, then change that character to uppercase, then concatenate that with the rest of the string from the second character onwards (index 1) and return it to the variable str.
*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

/* The error that is returned is a "SyntaxError: Identifier 'str' has already been declared." which points to the str variable declared within the function capitalise.
After researching the error, I found that the variable named str is being decalred more than once in the same scope. Essentially the str variable is already a parameter of the function i.e function capitalise(str), and then it is being redeclared within the function body, which is not allowed in JavaScript. To overcome this error the variable declared within the function body should be renamed to something else, for example capitalisedStr so that there is no conflict with the parameter str.
*/

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("congratulations!")); // Output: Hello
