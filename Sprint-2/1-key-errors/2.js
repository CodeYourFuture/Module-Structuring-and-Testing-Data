
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

/* Function parameters must be identifiers .they cannot be numbers or literal values. 
Therefore, it will cause a syntax error. Also, num is not defined.*/

function square(3) {
    return num * num;
}

// =============> write the error message here
//SyntaxError: Unexpected number this is the error message.

// =============> explain this error message here
//We get this error because we are not using the correct function syntax. square (3) is not correct

// Finally, correct the code to fix the problem

// correct version : 
function square (num){
    return num * num ;
}
const squareYourNumber = square(6);
console.log ("The square of this number is"+ " " + squareYourNumber);


