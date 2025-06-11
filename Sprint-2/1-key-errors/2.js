
// Predict and explain first BEFORE you run any code...
/*
The function suppose to elevate a number to the square. However, the parameter of the function, 
the declaration of the variable 'num' and the execution is wrong.
*/

// =============> write your prediction of the error here
// Parameters error line 11, 3.

function square(3) {
    return num * num;
}

// =============> write the error message here
/* 
SyntaxError: Unexpected number 
function square(3)
                ^
*/
// =============> explain this error message here
// The parameter of the function expects a name instead of a number.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num){
    return num * num;
}
//console.log(square(3))
