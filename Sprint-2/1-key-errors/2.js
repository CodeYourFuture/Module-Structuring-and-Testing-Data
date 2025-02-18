
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here: We have a SyntaxError because function parameters must be variable names, not literal values like 3.

// In JavaScript, function parameters act as placeholders for values that will be passed when calling the function. Writing function square(3) is invalid syntax because 3 is a number, not a valid parameter name



// function square(3) {
//     return num * num;
// }
// console.log(square(3))

// =============> write the error message here: SyntaxError: Unexpected number

// =============> explain this error message here : because function parameters cannot be numbers

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3))

