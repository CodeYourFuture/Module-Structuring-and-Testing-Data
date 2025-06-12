
// Predict and explain first BEFORE you run any code...
/* there will be an error and the code is not going to run. In the function the variable square should 
not have a number 3 , it should have a parameter.*/


// this function should square any number but instead we're going to get an error
/* function square(3) comes up as an error in the terminal as 3 is unexpected number*/

// =============> write your prediction of the error here

function square(3) {
    return num * num;
}

// =============> write the error message here
/*function square(3) {
 Uncaught SyntaxError: Unexpected number*/

// =============> explain this error message here
/* function need to have parameter name not values , using the 
number 3 as a parameter is wrong.*/

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));
