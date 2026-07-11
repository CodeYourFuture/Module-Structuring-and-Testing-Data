
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// The input to the function is a number, but the function is trying to use that number as a variable name.

function square(3) {
    return num * num;
}

// =============> /SyntaxError: Unexpected number

// =============> // Function parameter '3' is a literal value, not a parameter. Javascript expects a text name for the parameter.

// Finally, correct the code to fix the problem

 function square(num) {
    return num * num;
}
