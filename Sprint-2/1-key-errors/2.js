
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// This code will fail because the parameter does not declare the variable 'num'.

function square(3) {
    return num * num;
}

// =============> write the error message here
// 'Uncaught SyntaxError: Unexpected number'

// =============> explain this error message here
// The error message indicates that the parameter value '3' as an identifier, is the problem. 
// This is because variable and parameters cannot start with a number.'num' should instead be defined within the parameter.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

// console.log(square(3));

