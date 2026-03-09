
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> identifier not declared (unknown)

function square(3) {
    return num * num;
}

// =============> Unexpected number

// =============> the parameter shouldn't be given an argument in the function definition

// Finally, correct the code to fix the problem

// =============> my new code
function square(num) {
    return num * num;
}
console.log(square(3));


