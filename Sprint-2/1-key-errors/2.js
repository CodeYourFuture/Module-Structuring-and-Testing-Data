
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// My predict is this code will cause a SyntaxError because of an invalid function parameter.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// My explanation;

// The error occurs because:
// Function parameters must be variable names (identifiers), not literal values
// 3 is a number literal, not a valid parameter name
// The function is trying to use num in the calculation, but num was never declared as a parameter

// Finally, correct the code to fix the problem

// My new code:

function square(num) {
    return num * num;
}

// I replaced the invalid parameter 3 with a valid parameter name num
// This allows the function to accept a number input and correctly calculate its square