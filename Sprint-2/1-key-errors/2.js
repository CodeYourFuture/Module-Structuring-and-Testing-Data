
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//SyntaxError: Unexpected number
// =============> explain this error message here
//A SyntaxError will occur because `3` cannot be used as a function parameter name.
//Function parameters must be valid variable names, such as `num`.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));
