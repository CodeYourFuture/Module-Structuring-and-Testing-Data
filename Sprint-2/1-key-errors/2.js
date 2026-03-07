
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The error occurs because the parameter name '3' is not a valid identifier in JavaScript. Variable and parameter names cannot start with a number. This will cause a SyntaxError when the code is parsed.

function square(3) {
    return num * num;
}

// =============> write the error message here
// The error message will be: SyntaxError: Unexpected number '3'. This indicates that the parser encountered an unexpected token, which is the number '3' used as a parameter name.

// =============> explain this error message here
// The error message indicates that the parser is expecting a valid identifier for the parameter name, but it encountered a number instead. In JavaScript, variable and parameter names must start with a letter, underscore, or dollar sign, and cannot start with a number. Therefore, using '3' as a parameter name is not allowed and results in a SyntaxError.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

// Now the function should work correctly and return the square of the input number.


