
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(3) {
    return num * num;
}


// We get SyntaxError: Unexpected number
// We are trying to use 3 as the function parameter, but JavaScript expects a parameter name in the function definition and we cannot pass a value directly into the function definition
// Instead we can use num as parameter, and we can call square(3) without errors like this:

function square(num) {
    return num * num;
}

console.log(square(3));