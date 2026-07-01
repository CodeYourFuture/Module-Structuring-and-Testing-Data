
// Predict and explain first BEFORE you run any code...
// the will be an error when this code runs because the retrun  varaible has not been assigined by a value and there function has not declared a variable.
// this function should square any number but instead we're going to get an error
// =============> write your prediction of the error here
// synch equation 

function square(3) {
    return num * num;
}

// =============> write the error message here
// Uncaught SyntaxError: Unexpected number
// >     return num * num;
   //  return num * num;

//Uncaught SyntaxError: Illegal return statement

// =============> explain this error message here
// the error is simply saying that the return variable has not been assigned by a value.`illegal statement`.
// Finally, correct the code to fix the problem
// =============> write your new code here
function square (num){
    return num * num;
}
console.log (square(3)) // 9