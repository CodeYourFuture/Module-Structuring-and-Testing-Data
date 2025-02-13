
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// first we need to declare a function parameter `num` in the function declaration
// then we need to call the function and run it with a given variable `3`

//function square(3) {
//    return num * num;
//}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// function need a variable name as parameter and not number values.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
const square3 = square(3)
console.assert(square3 === 9)

