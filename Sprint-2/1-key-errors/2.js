
// Predict and explain first BEFORE you run any code...
/*3 is not a variable.it cause SyntaxError
*/ 
// this function should square any number but instead we're going to
//  get an error

// =============> write your prediction of the error here
/*SyntaxError */ 
function square(3) {
    return num * num;
}

// =============> write the error message here
/*SyntaxError: Unexpected number*/
// =============> explain this error message here
/* When defining a function, the parameters are placeholders for values 
that will be passed into the function when it's called. These placeholders 
must be valid variable names so that the function can refer to 
them internally. */
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

let result = square(3); 
console.log(result); 

