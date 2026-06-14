
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> it won't work due to num variable not being set, also parameter can't be a number.

function square(3) {
    return num * num;
}

// =============> write the error message here

Uncaught SyntaxError: Unexpected number VM367:1

// =============> explain this error message here
//There is a syntax error on line 1 ie 3 acting as a parameter is wrong

// Finally, correct the code to fix the problem

// =============> 
function square(num) {
    return num * num;
}

console.log(square(3));

