// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error occurring


/*  
  - Occur SyntaxError because the var str has been declared in the in the parameter, so to fix this we 
    just need to assign the new value. and remove the let.

  - Then call the function 
*/


// function capitalize(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// console.log(capitalize("alejandra"));



/*================== fixed =======================*/

function capitalize(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalize("alejandra"));


/*
  In this function, we are taking a string parameter, "alejandra", as input.
  Inside the function, we modify the string by capitalizing the first character.
  - First, we access the first character of the string using `str[0]` and use the `toUpperCase()` method
    to convert it to a capital letter.
  - Then, we use `str.slice(1)` to extract the rest of the string, starting from the second character.
  - Finally, we combine the capitalized first letter and the rest of the string using a template literal.

  The result is for the input "alejandra", the output is "Alejandra".
*/
