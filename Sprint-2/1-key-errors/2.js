
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Answer | There will be an error as 3 cannot be used as a parameter name in the function square.

/* function square(3) {
    return num * num;
}
*/
// =============> write the error message here
// function square(3) {
// SyntaxError: Unexpected number

// =============> explain this error message here
// 3 can be a value for the function parameter, but not a name for a variable as it does not meet the requirements for variable declaration as a variable name must start with a letter, _ or $.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));
