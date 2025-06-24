
// Predict and explain first BEFORE you run any code:- its SyntaxError: Unexpected number because its invalid parameter 


function square(3) {
    return num * num;
}

// =============> write the error message :-SyntaxError: Unexpected number

// =============> explain this error message here:- its SyntaxError: Unexpected number because the parameter '3' is a number literal, but function parameters must be valid variable names.
// this function should square any number but instead we're going to get an error


// Finally, correct the code to fix the problem\

function square(num) {
    return num * num;
}

console.log(square(3))
