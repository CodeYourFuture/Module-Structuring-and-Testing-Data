
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//we dont have num defined here.
//we need a valid parameter name here
//The error will be related to the fact that we don't have a valid  parameter name while defining the function.
//The code is returning num*num but num is not defined .
//Instead of the Number 3 we should have num as a parameter of the function.
/*function square(3) {
    return num * num;
}*/

// =============> write the error message here
//SyntaxError: Unexpected number
// =============> explain this error message here
// //The error will be related to the fact that we don't have a valid  parameter name while defining the function.
//we cannot have number as the name of a parameter

// Finally, correct the code to fix the problem

// =============> write your new code here


function square(num) {
    return num * num;
}
let num = 7
result = square(num)
console.log(result)