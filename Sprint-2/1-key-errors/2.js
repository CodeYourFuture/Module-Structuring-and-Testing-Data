
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number.  

// =============> explain this error message here
// The function is trying to use the number 3 as a parameter name, which is not allowed in JavaScript syntax.

// Finally, correct the code to fix the problem
// parameter name updated as a num which is already used in the function. 

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(5));


