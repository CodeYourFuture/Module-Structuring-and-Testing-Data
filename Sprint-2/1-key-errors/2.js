
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here: There will be an error because we put a value (3) as a function's parameter instead of using variable names. We also don't know where num comes from as we have't defined/ declared that. 

// function square(3) {
//     return num * num;
// }

// =============> write the error message here: SyntaxError: Unexpected number

// =============> explain this error message here: We get an error message saying that there is an unexpected number on line 8 (Syntax Error).

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));


