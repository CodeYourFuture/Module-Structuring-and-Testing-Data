
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here==> num has not been declared 
// but is being used inside the function.   

/* function square(3) {
    return num * num;
} */

// =============> write the error message here ==> SyntaxError: Unexpected number

// =============> explain this error message here==> It expected a variable as parameter but met a number 
// and it is not allowed to have a variable starting with a number hence the error.

// Finally, correct the code to fix the problem

// =============> write your new code here
let num;
function square(num) {
    return num * num;
}
console.log(square(3))
