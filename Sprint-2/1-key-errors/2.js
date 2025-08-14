
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here: 3 can't be a parameter. it should be passed as an argument.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here: Uncaught SyntaxError: Illegal return statement

// =============> explain this error message here: trying to use 3 directly as a parameter in the function definition.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(3));