
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict that I will get a SyntaxError as a parameter cannot
// be a Number, parameters must be valid variable names.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here: 
// SyntaxError: Unexpected number

// =============> explain this error message here
// Function parameters must be valid variable names, they must 
// follow the same naming rules. a number like 3 is not a valid
// parameter name. 
// TO fix the code, rename the parameter to num (or any valid variable
// name) and use it in the return statement.)

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3)); // This should now work and output 9
