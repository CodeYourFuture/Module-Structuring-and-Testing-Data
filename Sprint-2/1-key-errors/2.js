
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The code will throw an error because the function is trying to use a number literal (3) as a parameter name,
// which is not allowed in JavaScript. Function parameters must be valid identifiers, and a number

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number in parameter list

// =============> explain this error message here
// The error message indicates that there is a syntax error because the function parameter cannot be a number.
// Function parameters must be valid identifiers, and using a number as a parameter name is not allowed

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3)); // Output: 9


