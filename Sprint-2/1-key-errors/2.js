
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============>
    //The code will run an error as num is not defined and 3 is set as the parameter for the function square
// this function should square any number but instead we're going to get an error
//num is not defined/declared

function square(3) {
    return num * num;
}

// =============> write the error message here
//SyntaxError: Unexpected number

// =============> explain this error message here
//We get this error because 3 is set as a parameter for the function witch is a syntax error
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}



