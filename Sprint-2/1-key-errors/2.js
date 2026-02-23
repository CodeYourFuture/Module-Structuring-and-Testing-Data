
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> the error message will be about 'num' not being declared. 

function square(3) {
    return num * num;
}

// =============> Uncaught SyntaxError: Illegal return statement. 

// =============> The error message is because this num is not a valid variable as it has been undeclared. 

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}


