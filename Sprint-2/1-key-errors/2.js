
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error
// We call variable num inside the function,but it is not declared anywhere.

function square(3) {
    return num * num;
}



// =============> write the error message here
// SyntaxError: Unexpected number
// =============> explain this error message here
// There should be parameter or nothing. 
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));

