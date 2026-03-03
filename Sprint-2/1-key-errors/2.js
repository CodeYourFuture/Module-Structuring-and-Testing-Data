
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict that the error will be a SyntaxError because we are trying to declare a function with an invalid name.  In JavaScript, function names cannot start with a number.  By trying to declare a function named `square(3)`, we are violating this rule, which will result in a SyntaxError when the code is parsed.


function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError due to an unexpected token or invalid function name.  
// =============> explain this error message here
// This is because `square(3)` is not a valid function declaration in JavaScript, and the parser will not be able to understand it as a function definition.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}   


