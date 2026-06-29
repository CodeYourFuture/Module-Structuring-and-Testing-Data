
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// Variable and parameter names must be identifiers (like words, e.g., num, x, myNumber).
//They cannot be literal values or specific numbers like 3.

function square(3) {
    //return num * num;
}

// the error message is: SyntaxError: Unexpected number. 

// The error message SyntaxError: Unexpected number means that JavaScript encountered a raw number,
// where it was strictly expecting to see a variable name.

// Finally, correct the code to fix the problem
// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));
