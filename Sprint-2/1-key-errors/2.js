
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// the code will show an errror because no varible has been declared

// function square(3) {
//     return num * num;
// }
// console.log(square(3));


// =============> write the error message here
// Uncaught SyntaxError: Unexpected number

// =============> explain this error message here
// The error occurs because the function parameter is incorrectly defined as a number (3) instead of a variable name. In JavaScript, function parameters must be variable names, not literal values. This leads to a SyntaxError because the JavaScript engine expects a valid identifier for the parameter.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));

