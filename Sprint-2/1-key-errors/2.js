
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> The 'num' variable is not defined in the function scope,
// so when we try to use it, it will throw an error.

function square(3) {
    return num * num;
}

// =============> The error is "SyntaxError: Unexpected number"

// =============> The number '3" is used where it shouldn't be, as a parameter.

// Finally, correct the code to fix the problem

// =============> write your new code here:
function square(num) {
    return num * num;
}


