
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> The function should have a variable name and not a number.
// Also there's no definition of num in the code 

function square(3) {
    return num * num;
}

// =============> SyntaxError: Unexpected number

// =============> In function square(3), the number used as a parameter name is invalid because parameter names must be variable names, not numbers.
// 

// Finally, correct the code to fix the problem

// =============> 
    function square(num) {
    return num * num;
}

console.log(square(3)); 



