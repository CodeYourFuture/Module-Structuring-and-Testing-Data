
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// the error would be the "num" is not declared

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// C:\Users\Hatef Eidi\Desktop\CYF\Module-Structuring-and-Testing-Data\Sprint-2\1-key-errors\2.js:9
// function square(3) {
//                 ^

// SyntaxError: Unexpected number

// =============> explain this error message here
// the program doesn't expect a number to be passed into a function as a parameter.

// Finally, correct the code to fix the problem


// =============> write your new code here


function square(num) {
    return num * num;
}
let number=5;
console.log(square(number));