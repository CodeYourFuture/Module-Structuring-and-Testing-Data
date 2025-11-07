
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// This code will throw a SyntaxError because function parameters must be valid variable names,
// not literal values like 3.

/**
function square(3) {
    return num * num;
}
*/

// =============> write the error message here
// SyntaxError: Unexpected number
// (or "SyntaxError: Unexpected token '3'" depending on the environment)

// =============> explain this error message here
// The error occurs because JavaScript expects a variable name (like num or x) inside the parentheses 
// of a function definition. You cannot use a number (3) as a parameter name — it’s not a valid identifier.
// Function parameters act as variable placeholders for input values, so they must follow variable naming rules.
//
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3)); // Output: 9

