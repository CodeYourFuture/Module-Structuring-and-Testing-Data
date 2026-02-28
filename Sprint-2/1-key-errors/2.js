
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I think this is an obvious one because when defining a function you cant give a direct input like 3,
//  instead you have to give a variable name as a parameter and then use that variable name in the function
//  body to perform the calculation. So I predict that there will be a syntax error because of the way 
// the function is defined with a direct input of 3 instead of a variable name.

// function square(3) {
//     return num * num;
// }



// =============> write the error message here
// /Users/me/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:12
// function square(3) {
//                 ^

// SyntaxError: Unexpected number

// =============> explain this error message here
// This error message is saying that there is an unexpected number in the function definition, which is the number 3.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));


