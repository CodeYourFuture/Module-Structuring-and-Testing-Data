
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> Prediction of the error:
// The function will give an error because '3' is not a valid variable name. 
// Function parameters must have names, not numbers.

function square(3) {
    return num * num;
}

// =============> Error message:
// SyntaxError: Unexpected number

// =============> Explanation of the error:
// 1. You cannot use a number as a parameter name. 
// 2. Also, 'num' is not defined inside the function, so it will cause another error if we fix the parameter first.

// Finally, correct the code to fix the problem

// =============> Corrected Code:
function square(num) {
    return num
}


