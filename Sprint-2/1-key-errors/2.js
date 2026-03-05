
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// "num" has not been defined and the parameter is not used in the function;
// it has a number instead


function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number


// =============> explain this error message here
// The error message is saying that it was not expecting a number in the function
// declaration. This is because the parameter should be a variable name, not a number 

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

