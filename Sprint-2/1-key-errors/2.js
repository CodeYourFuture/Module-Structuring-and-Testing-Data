
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Prediction: It will throw a syntax error because 3 is not a valid parameter name.

/* Original Code:
function square(3) {
    return num * num;
}
*/

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// MDN Reference: https://developer.mozilla.org/en-US/docs/Glossary/Identifier

// JavaScript does not allow numbers to be used as variable names or parameter names.
// Function parameters must follow the rules for valid identifiers.
// According to MDN, an identifier may not start with a digit and must follow JavaScript's naming rules.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3)); // 9

// Test cases:

// console.log(square(10)); // 100
// console.log(square(5)); // 25