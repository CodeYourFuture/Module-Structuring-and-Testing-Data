
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Prediction: The code would likely return a syntax error because the parameter in the () is '3' and not 'num'.
function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here

// A defined function in a () must be variable names, not values.
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;       
}
console.log(square(3));