
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> right function declare should have a variable parameter instead of number

function square(3) {
    return num * num;
}

// =============> write the error message here SyntaxError: Unexpected number

// =============> explain this error message here a number instead of a variable was declared as a parameter

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
let num = 3;
console.log(square(num))