
// Predict and explain first...
//  =============> write your prediction here
/* When I run the code in the terminal it comes back as an error in both location 
let str -- error indicates that 'str' has already been declared. I can see that the'str' 
variable was declared in the function. This cannot be duplicated and it will result in error.
 return -- this function has also resulted in error, 'illegal return statement, as result to the 
 error in the code.*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/* When I added an input string (week) to the function capitalise I got the same error as the string 
is identified in two location with the function and again inside the function, I have looked at the documentation 
in this website https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let  
Its one of the rules in Javascript that doesn't allow function parameters to be redeclared by let or const, this if 
executed will output error syntax Identifier has already been declared. */

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here

function capitalise(str) {
   let strCapital = `${str[0].toUpperCase()}${str.slice(1)}`;
   return strCapital;
}
console.log(capitalise("week"));
/* the ouput for this code is (Week) */