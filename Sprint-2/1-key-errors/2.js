
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//we cannot pass a value to a function that is not defined as a parameter. The function `square` is trying to use the variable `num` which is not defined anywhere in the code. This will result in a ReferenceError. 

function square(3) {
    return num * num;
}

// =============> write the error message here
//syntax error: Unexpected number

// =============> explain this error message here
//the error occurs because the function was defined with a number instead of a parameter name. In JavaScript, function parameters must be valid variable names. a number cannot be used as a parameter name.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

