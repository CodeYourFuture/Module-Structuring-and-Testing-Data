
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// the error will appear, because '3' cannot be a parameter. Also, the argument "num" is not declared inside the function. 
// to fix this, i will declare the 'num' as a parameter

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// As I explained earlier, the problem is the wrong syntax

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3))