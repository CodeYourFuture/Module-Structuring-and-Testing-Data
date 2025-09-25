
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/* I predict that the code will throw a SyntaxError because the parameter '3' is not a valid identifier. 
Function parameters must be valid variable names.*/

/*

function square(3) {
    return num * num;
}

*/

// =============> write the error message here
/* Process exited with code 1
Uncaught SyntaxError /home/ads/Desktop/CYF-SEP/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:10
function square(3) {
                ^

SyntaxError: Unexpected number */

// =============> explain this error message here
/* The error message indicates a SyntaxError due to an "Unexpected number". This occurs because the function
parameter '3' is not a valid identifier. In JavaScript, function parameters must be valid variable names, and 
using a number as a parameter name is not allowed. The JavaScript engine expects a valid identifier after the 
opening parenthesis of the function declaration, but it encounters a number instead, leading to the syntax error.*/

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(4)); // Output: 16
