
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The code will return a syntax error because the parameter is not a valid variable name as it is a number.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
     //SyntaxError: Unexpected number
// =============> explain this error message here
   //Javascript identifiers cannot start with a number.
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num ** 2;
}

console.log(square(3));

