// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// SyntaxError: Unexpected number

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The function parameter is written as 3, which is a number literal.
// Function parameters must be variable names (identifiers).
// JavaScript does not allow numbers as parameter names,
// so it throws a SyntaxError before running the program.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3));