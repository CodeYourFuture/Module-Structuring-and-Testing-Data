// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// Prediction:
// An error will occur because `3` is not a valid parameter name.
// Function parameters must be variable names, not numbers.
// JavaScript will throw a SyntaxError before running the program.

function square(3) {
    return num * num;
}

// =============> write the error message here

// Error message:
// SyntaxError: Unexpected number

// =============> explain this error message here

// Explanation:
// The error occurs because `3` is used as the function parameter.
// In JavaScript, function parameters must be identifiers (variable names).
// A number cannot be used as a parameter name.
// Because of this invalid syntax, JavaScript throws a SyntaxError
// before the program can run.
// Additionally, the variable `num` is used inside the function
// but is not defined, which would cause another error
// if the syntax error did not occur first.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3)); // 9





