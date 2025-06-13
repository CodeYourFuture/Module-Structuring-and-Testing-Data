
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// # Prediction: The code will throw a ReferenceError because 'num' is not defined in the function scope.
// # This is because we're trying to use the variable 'num' before it's declared.
// # To fix this, we need to pass the number to be squared as an argument to the function
// # or declare 'num' before using it.

function square(3) {
    return num * num;
}

// =============> write the error message here
// # SyntaxError: Unexpected number

// =============> explain this error message here
// # Explanation: The error occurs because the function parameter is incorrectly defined.
// # Instead of using a variable name, a number is used directly in the function definition.
// # This is not a valid way to define a function parameter in JavaScript.
// # To fix this, we need to replace '3' with a valid parameter name, such as 'num'.


// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
// Test the corrected function
console.log(square(3)); // Output: 9



