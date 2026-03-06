
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict an error will happen becouse the function uses 3 as the parameter
// but parameters should be varible names. Also the code uses "num" inside the
// function even though it was never defiend.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error happens becouse 3 is used  as the function parameter  but parameters
// must be varible names. Also the code tries to use "num" inside the function even
// though it was never dec;ared.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}


