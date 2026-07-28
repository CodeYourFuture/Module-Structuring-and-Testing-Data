
// Predict and explain first BEFORE you run any code...
// THere will be an error on line 8 because we used a value (number 3) instead of a parameter. Functions are designed to be reusable. 
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here: We will get an error because we used a value (3) instead of a parameter. 

// function square(3) {
//     return num * num;
// }

// =============> write the error message here: The error says that "unexpected number ". And it comes from line 8.

// =============> explain this error message here: We are suppose to use a parameter instead of a hard value. 

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));
console.log(square(12));

