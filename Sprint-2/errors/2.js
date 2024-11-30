
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(3) {
    return num * num;
}

// This code will throw a syntax error as the parameter in the function definition 3 is invalid.
// The parameters should be variable names not values.
// Also, line 7 will throw reference error as num never been declared. 
// To fix this we can modify the code as below:

/*function square(num) {
    return num * num;
}

console.log(square(3))*/