
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here: error one, 3 cannot be a parameter name, parameters must be variable names, not values. 
// Error two, num is not defined. There is no variable named num, it would need to match the name inside the function. 

//function square(3) {
//    return num * num;
//}

// =============> write the error message here:

//Uncaught SyntaxError: Unexpected number

//Uncaught SyntaxError: Illegal return statement

// =============> explain this error message here:

// first error message came up because JS found a number instead of a variable for the function.
// second error message came up because in JS return has to be inside of a function. 

// Finally, correct the code to fix the problem

// =============> write your new code here:

function square(num) {
    return num * num;
}


