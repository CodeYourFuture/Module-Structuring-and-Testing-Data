
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict that error will occur because the parameter 'num' is not defined in the function.

function square(3) {

    return num * num;
}

// =============> write the error message here
// Uncaught SyntaxError: Unexpected number
// =============> explain this error message here
// The error occurs because we are trying to use a number '3' as a parameter in the function declaration, which is not valid syntax in JavaScript.
//  Parameters should be variable names, not literal values. To fix this error, we can replace '3' with a valid variable name like 'num'.
// =============> explain this error message here
// To fix this error, we can change the parameter from '3' to a valid variable name like 'num'. This way, we can pass any number as an argument when calling the function, and it will correctly return the square of that number.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

