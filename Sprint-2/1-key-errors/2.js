
// Predict and explain first BEFORE you run any code...
// The program will give a SyntazError because a number (3) is used as peramter name in the function.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// My perdiction is that program will not run and show a SyntaxError because 3 is not a valid variable name.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// Funtion parameters must be variable names.
// You cannot use a number like 3 as name of parameter.
//Javascript required a valid varible name inside the parentheses.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3));
