
// Predict and explain first BEFORE you run any code...
// i predict that the code will fail because js expects a variable name ,not a number and 3 is a number.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Uncaught SyntaxError: Unexpected number

function square(3) {
    return num * num;
}

// =============> write the error message here
//Uncaught SyntaxError: Unexpected number

// =============> explain this error message here
// function parameters must be identifiers (variable names) such num ,x numbers can not be used like variable names 
// and so the engine will be unable to  read the code and cause synx errorS

// Finall correct the code to fix the problem

// =============> write your new code here
function square (num){
    return num*null;
}

