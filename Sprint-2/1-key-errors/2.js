
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
undefined variable num is not declared

function square(3) {
    return num * num;
}

// =============> write the error message here
SyntaxError: Unexpected number
SyntaxError: Unexpected token
// =============> explain this error message here
The compiler expected a parameter name in declaring the function but it found a number instead
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
square(3);
