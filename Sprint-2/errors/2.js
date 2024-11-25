
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(num) {
    return num * num;
}

console.log(square(3))


// It will return syntax error here, because the function parameter is value, which must be variable name instead.
// we can replace "3" as the function parameter with variable "num", and then call the function in the last line and define value for variable "num"