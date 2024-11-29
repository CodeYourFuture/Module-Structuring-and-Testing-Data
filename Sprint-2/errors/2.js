
// Predict and explain first...

// this function should square any number but instead we're going to get an error

// My prediction:
// This function will cause a SyntaxError because it has an invalid parameter
// JavaScript functions must have valid parameter names (identifiers), not literal values
// Per MDN: "Parameter names must be valid JavaScript identifiers and cannot be reserved words"
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

function square(3) {
    return num * num;
}

// Actual result:
// SyntaxError: Unexpected number
// This matches my prediction about the syntax error, but there's also a second issue:
// Even if we fixed the parameter syntax, the function would still fail because it tries 
// to use 'num' instead of the parameter name

// To fix both issues:
function squareFixed(num) {
    return num * num;
}

console.assert(squareFixed(3) === 9, "3 squared is 9");


