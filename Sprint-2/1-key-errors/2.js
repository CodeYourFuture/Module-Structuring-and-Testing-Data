
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The number three was passed straight to the function witch is why it's throwing an error

/* function square(3) {
    return num * num;
}
 */
// =============> write the error message here
// Error message => SyntaxError: Unexpected number

// =============> explain this error message here
//The function was expecting a parameter and got a number instead and a number 
// can not be a valid parameter name
//We pass 3 as an argument when calling square(3), and the function returns 9 (since 3 squared is 9).

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(3))
