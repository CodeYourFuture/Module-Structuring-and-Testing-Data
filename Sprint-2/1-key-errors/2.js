
// Predict and explain first BEFORE you run any code...
//We need to call function to use it, here will be an error!
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(3) {
    return num * num;
}

// =============> write the error message here
//Uncaught SyntaxError: Unexpected number

// =============> explain this error message here

/*We get a syntax error because `3` is a number,
 and function parameters must be valid variable names(x, num etc)*/

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(3));