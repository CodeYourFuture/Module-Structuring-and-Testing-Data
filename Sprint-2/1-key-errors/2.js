
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> an error will pop up because you have a value of 3 (integer) passed into the function as a parameter. 

// function square(3) {
//     return num * num;
// }

// =============> write the error message here: SyntaxError: Unexpected number

// =============> explain this error message here: the JS engine didn't expect this parameter name - in this case a number.

// Finally, correct the code to fix the problem

function square(num=3) {
    return num * num;
}




