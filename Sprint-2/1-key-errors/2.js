


// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//The error will occur because the function parameter is written as a number(3) instead of a variable name.


// =============> write the error message here 
// SyntaxError: Unexpected number
// =============> explain this error message here
//The error message occurs because the function definition incorrectly uses 3 as a parameter. javascript expects a variable name in that position, not an actual number.

/*
function square(3) {
return num * num;
}
*/

// Finally, correct the code to fix the problem

// =============> write your new code here


function square(num) {
return num * num;
}

console.log(square(3));