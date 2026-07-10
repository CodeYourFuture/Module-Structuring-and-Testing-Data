
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//There will be a syntax error.

function square(3) {
    return num * num;
}

// =============> write the error message here
// "SyntaxError: Unexpected number"

// =============> explain this error message here
// The error occurs because the function parameter is defined as a number (3) 
// instead of a variable name. In JavaScript, function parameters must be variable 
// names, not values.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}


