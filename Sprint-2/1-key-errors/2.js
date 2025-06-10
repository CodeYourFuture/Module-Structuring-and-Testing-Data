
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> Prediction:
// The code will throw an error because the function `square` is trying to use a number literal `3` 
// as a parameter, which is not valid in JavaScript.

/*
function square(3) {
    return num * num;
}
*/

// =============> Explanation:
// SyntaxError: Unexpected number
// The error occurs because `3` is not a valid parameter name.
// Function parameters must be valid identifiers (variable names), not literal values.

// Finally, correct the code to fix the problem

// =============> Solution:
// Change the parameter name from `3` to a valid identifier, such as `num`.
// =============> Corrected Code:

function square(num) {
    return num * num;
}

console.log(square(3)); // Output: 9
