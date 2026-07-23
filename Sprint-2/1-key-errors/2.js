
// Predict and explain first BEFORE you run any code...

// I think the code will give an error because 3 cannot be used
// as a function parameter name. Parameters must be variable names.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(3) {
    return num * num;
}

// =============> write the error message here

// SyntaxError: Unexpected number

// =============> explain this error message here
// The error means JavaScript found a number where it was
// expecting a parameter name. Function parameters must be
// identifiers like 'num', not values like 3.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));

