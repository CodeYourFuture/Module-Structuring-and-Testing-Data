
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// The error occurs because 3 is used as a function parameter.
// Parameters must be variable names, whereas values are passed as arguments when the function is called.

function square(3) {
    return num * num;
}

// Uncaught SyntaxError: Unexpected number

// The parser evaluates the code as a SyntaxError before execution because a value cannot be used as a parameter name in JavaScript.

// Finally, correct the code to fix the problem

// function square(num) {
//    return num * num;
// }
