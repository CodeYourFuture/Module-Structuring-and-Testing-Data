// Predict and explain first...
//  =============> write your prediction here
// the code will throw an error because the variable str is being declared twice within the same scope

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

*/

// =============> write your explanation 
/* the code throws a SyntaxError because the variable 'str' is declared twice in the same scope using 'let'. In JavaScript, 
 you cannot declare a variable with the same name more than once in the same scope. The first declaration of 'str' is as a 
 function parameter, and the second declaration is within the function body. To fix this, you can either rename the second 
 'str' variable or remove the 'let' keyword from the second declaration to reassign the value to the existing parameter variable.*/

 // =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello")); // Output: "Hello"
