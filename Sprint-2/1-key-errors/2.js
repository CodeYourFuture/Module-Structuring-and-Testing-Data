
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// function parameter can not be a number .It should be variable name 

function square(3) {
    return num * num;
}

// =============> write the error message here
/*
function square(3) {
    ^
SyntaxError: Unexpected number. parameter should not be number. It should be variable name like num as we are returning num * num.
// If we try to change num in parameter with something different we will get  reference error saying num is not defined.To call function need to add console.log() statement.
    */
// =============> explain this error message here

// Finally, correct the code to fix the problem

// =============> write your new code here
/*
function square(num) {
    return num * num;
}
console.log(square(3));
*/
