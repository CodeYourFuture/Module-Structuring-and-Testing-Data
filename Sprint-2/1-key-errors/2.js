
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//The program will throw a SyntaxError because 3 is used as a parameter name in the function definition, which is not allowed in JavaScript. Function parameters must be valid variable names, and numbers are not valid identifiers.

function square(3) {
    return num * num;
}   

// =============> write the error message here
//SyntaxError: Unexpected number

// =============> explain this error message here
//The function is declared as function square(3), but 3 is not a valid parameter name since it is a number.
//JavaScript expects an identifier (a valid variable name) but finds a number instead, leading to a SyntaxError.
//Additionally, num is used inside the function but is never declared, which would cause a ReferenceError if the function were corrected but num was still undefined.

// Finally, correct the code to fix the problem

// =============> write your new code here
//function square(num) {
   // return num * num;
//}

//console.log(square(3));


