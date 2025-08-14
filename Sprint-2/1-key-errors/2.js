
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//The error will probably be related to the digit 3 in the function because 3 is not considered as a number in javascript. We need to explicitly declare it as a number for the code to run.

function square(3) {
    return num * num;
}

// =============> write the error message here
// The error message is: Uncaught SyntaxError: Unexpected number 

// =============> explain this error message here
//The error message means that we cannot use a digit number as a parameter name in a function. In this case, we need to use a valid variable name that Javascript recognises like num instead of the digit number 3.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));



