
// Predict and explain first BEFORE you run any code...
/* 
an error will occur because the function define a parameter using number(3) which is not
valid syntax for function parameter, function parameter must be variable names
*/

// this function should square any number but instead we're going to get an error
// =============> write your prediction of the error here 
// syntax error

function square(3) {
    return num * num;
}

// =============> write the error message here
/*
function square(3) {
                ^

SyntaxError: Unexpected number
*/


// =============> explain this error message here
/*
    the error is because 3 is a literal number and JS doesn't allow define a 
    function using a literal value
*/

// Finally, correct the code to fix the problem

// =============> write your new code here

/*
function square(num) {
    return num * num;
}
    console.log(square(5));
*/