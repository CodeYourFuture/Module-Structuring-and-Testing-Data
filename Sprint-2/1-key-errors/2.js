
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/* I predict that it will throw a SyntaxError because the function parameter is written as 3, which is not a valid variable
name. Function parameters should be names (like num, x,) or any other valid identifier, not a number. */ 

function square(3) {
    return num * num;
}


// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
/* The function is declared with 3 as its parameter, but JavaScript only allows variable names(identifiers)
in that position. Using a number causes a SyntaxError before the code is run. 
Also, the function tries to t=return num * num, but num is not defined, which would cause a ReferenceError if the first error did not occur.*/

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(25));
