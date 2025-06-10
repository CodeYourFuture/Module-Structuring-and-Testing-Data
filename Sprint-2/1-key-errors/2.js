
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(3) {
    return num * num;
}

// =============> write the error message here
// The error occurs because the function parameter is incorrectly defined as a number (3) instead of a variable name.


// =============> explain this error message here
// The error message indicates that the function parameter is not defined correctly. In JavaScript, function parameters should be variable names, not literal values. The number `3` is being used as a parameter name, which is invalid syntax.


// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}   
// Now, you can call the function with a number to get the square
console.log(square(3)); // This will output 9, which is the square of 3.

