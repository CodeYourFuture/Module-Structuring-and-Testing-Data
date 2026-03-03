
// Predict and explain first BEFORE you run any code...
// this function should square any number but instead we're going to get an error
// =============> write your prediction of the error here

/**
 * Prediction:
 * The function parameter is incorrectly defined as a numeric literal 3 instead of a parameter name. This will cause a syntax error because JavaScript function parameters must be valid identifiers (variable names), not numbers.
 */

/** Original function:
 *
 * function square(3) {
 *  return num * num;
 * }
 */


// =============> write the error message here
/** 
 * Error message:
 * Uncaught SyntaxError: Unexpected number
 */

// =============> explain this error message here
/** Explanation:
 * In JavaScript, when defining a function, the parameters must be valid variable names (like num, x, value, etc.). Using a literal number like 3 as a parameter is invalid syntax because:
 * Parameters act as placeholders for values that will be passed when the function is called
 * Numbers can not be used as variable names in JavaScript
 * The parser expects a valid identifier in the parameter declaration, not a numeric literal
 */

// Finally, correct the code to fix the problem
// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));

