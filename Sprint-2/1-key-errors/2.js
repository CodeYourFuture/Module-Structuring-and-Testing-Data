
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// it is syntax error. 3 is a value not a variable name.

function square(3) {
    return num * num;
}

// =============> write the error message here
//function square(3) {
                ^

//SyntaxError: Unexpected number

// =============> explain this error message here
//The error is as I predicted. The function parameter should be a variable name, not a value. 
//In this case, 3 is a value and cannot be used as a parameter name.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
