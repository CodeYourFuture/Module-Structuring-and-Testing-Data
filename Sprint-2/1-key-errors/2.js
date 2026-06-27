
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> num is not defined which causes an error.

function square(3) {
    return num * num;
}

// =============> 1. "Uncaught SyntaxError: Unexpected number" Means the "3" is not valid there.
// 2. Uncaught SyntaxError: Illegal return statement. Means "num" has no idea of what it should be 


// Finally, correct the code to fix the problem

// =============> by adding square(num) the function will work when given a number 
function square(num) {
    return num * num;
}
console.log(square(3))


