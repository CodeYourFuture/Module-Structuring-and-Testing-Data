
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
    // A number cannot be used as a function argument when the function is declared.
    // The variable num has also not been declared.

function square(3) {
    return num * num;
}

// =============> write the error message here
    // SyntaxError: Unexpected number

// =============> explain this error message here
    // The error indicates that the number 3 has been placed in the wrong place.

// Finally, correct the code to fix the problem

// =============> write your new code here
    function square(num) {
    return num * num;
}

