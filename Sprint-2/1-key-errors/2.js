
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> will cause a SyntaxError because function parameters must be variable names, not values like 3

function square(3) {
    return num * num;
}

// =============> SyntaxError: Unexpected number

// =============> This error happens because 3 is not a valid parameter name in JavaScript function parameters must be variable names like num, not fixed values num is used inside the function but was never defined, so JavaScript throws an error

// Finally, correct the code to fix the problem

// =============> 
function square(num) {
    return num * num;
}

console.log(square(3));
