
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// in javaScript function parameters should be variable names, but in line 10 we used a number "3" as parameter,
// so the error will be "SyntaxError"

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// function square(3) {
//                 ^

// SyntaxError: Unexpected number

// =============> explain this error message here

// the problem is in line 10, because we can not use a number as parameter of the function, it should be variable name,
// so the error is "SyntaxError: Unexpected number"

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}


console.log(square(3));
