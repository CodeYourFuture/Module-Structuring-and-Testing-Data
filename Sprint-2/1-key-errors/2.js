
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(3) {
    return num * num;
}

// =============> write the error message here

Uncaught SyntaxError: Unexpected number     
    return num * num;
    return num * num;
    ^^^^^^

Uncaught SyntaxError: Illegal return statement


// =============> explain this error message here

// The error states that there is an unexpected number. This means the parameter is invalid.
// We cannot use a number as a parameter name. Function parameters must be valid variable names.

// In the return statement, we used 'num', but it was never defined. 
// Since 'num' is not declared as a parameter, this causes a ReferenceError.

// Finally, correct the code to fix the problem

// To fix the code:
// We need to change the parameter from the number 3 to a proper variable name, such as 'num'.
// This allows the function 'square' to define and use 'num' correctly as the input.
// We also need to pass a value (like 3) to the function when calling it inside console.log, 
// so it prints the correct result.


// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(3));  // Output: 9
