
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
We’re going to get an error because function parameters can’t be literal values like 3 — they need to be variable names.

function square(3){
    return num * num;
}

// =============> write the error message here
SyntaxError: Unexpected number

// =============> explain this error message here
In JavaScript, function parameters must be valid variable names, not actual values.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    const form = num * num;
    return form;
}

console.log(square(5));