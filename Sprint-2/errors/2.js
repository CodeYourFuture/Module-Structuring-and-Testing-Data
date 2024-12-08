
// Predict and explain first...

// The code will throw a SyntaxError because the parameter name 3 is invalid


// this function should square any number but instead we're going to get an error.
// Function parameters must be valid variable names, and numbers cannot be used as names.

function square(num) {
    return num * num;
}

console.log(square(3))

