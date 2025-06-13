
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The function is defined incorrectly using a number as a parameter name so it will throw an error when called because looking for an identifier but finds a number instead.

/* function square(3) {
    return num * num;
}
*/

// =============> write the error message here
/* function square(3) {
                   ^

SyntaxError: Unexpected number
*/
// =============> explain this error message here
// SyntaxError: This means there is something wrong with the way the code is written, so JavaScript cannot understand it.
// unexpected number: This means that the code is trying to use a number where it expects an identifier (like a variable name). In this case, the function parameter is incorrectly named as a number (3) instead of a valid identifier.

// Finally, correct the code to fix the problem
// to fix the problem, we need to change the parameter name to a valid identifier, like "num" or "number".

// =============> write your new code here

function square(num){
    return num * num;
}
console.log(square(3));
console.log(square(10));