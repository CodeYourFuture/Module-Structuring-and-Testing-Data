
// Predict and explain first BEFORE you run any code...

// I predict that the code will throw a ReferenceError because the variable 'num' is not defined within the function scope.

// this function should square any number but instead we're going to get an error

//

// =============> write your prediction of the error here

// I predict that the code will throw a ReferenceError because the variable 'num' is not defined within the function scope.

/

function square(3) {
    return num * num;
}

// =============> write the error message here

// ReferenceError: num is not defined

// =============> explain this error message here

// This error message indicates that the variable 'num' is being used before it has been declared or defined.
// In the function 'square', the parameter is incorrectly defined as a literal value (3) instead of a variable name.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
// Example:
console.log(square(3)); // Output: 9    
