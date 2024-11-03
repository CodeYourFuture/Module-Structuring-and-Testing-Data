
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(num) {
    return num * num;
}

console.log(square(3));

// 3 is a literal number and therefore cannot be a parameter, parameters are placeholder values and can be substituted but literal numbers are fixed values and cannot be a parameter as a result.
// variable num is not defined.
// SyntaxError: Unexpected number
// Variable num error won't show up as it is a reference error.
