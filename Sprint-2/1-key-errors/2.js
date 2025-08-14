
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(3) {
    return num * num;
}

// =============> write the error message here

// SyntaxError: Unexpected number

// =============> explain this error message here

/*SyntaxError: Unexpected number means that JavaScript encountered a number where 
it expected an identifier (the name of a variable, parameter, or other valid expression).*/

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(5)); //25


