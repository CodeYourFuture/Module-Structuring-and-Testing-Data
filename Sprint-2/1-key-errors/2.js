
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// I predict this will throw a SyntaxError because
// a number (3) is used as a function parameter,
// which is not allowed in JavaScript.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here

// SyntaxError: Unexpected number

// =============> explain this error message here

// This throws a SyntaxError: Unexpected number.
// Function parameters must be valid variable names.
// The number 3 is not a valid identifier, so JavaScript
// cannot parse the function definition.

// Also, the function uses 'num' inside the body,
// but 'num' is not defined anywhere.


// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));



