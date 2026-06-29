
// Predict and explain first BEFORE you run any code...

// this function should square any number, but instead we're going to get an error

// =============> write your prediction of the error here
/*The parameter shouldn't be a number, a parameter is a variable and should be able to hold a value for example num
can hold the variable 3.
we are also returning num * num but didn't declare num anywhere in our script.
this function will throw a syntax error
*/

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
/*
function square(3) {
                ^

SyntaxError: Unexpected number

*/
// =============> explain this error message here
/* The error message is telling us that the number 3 used has the parameter is not syntactically correct, JavaScript
does not allow a literal number used as a parameter
* */
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num){
    return num * num
}
console.log(square(3))