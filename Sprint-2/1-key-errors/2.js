
// Predict and explain first BEFORE you run any code...
// ====> As my understanding this function will throw and error as we have have not called the function with the argument 'num' .

// this function should square any number but instead we're going to get an error.
// ====> it will not square any number but 3 when we call it with the argument 'num' inside.


/*function square(3) {
    return num * num;
}*/

// =============> write the error message here
// the error message is: SyntaxError: Unexpected number.

// =============> explain this error message here
// after running I understood that we can not put a value in function parameter but a variable name. to make it short, in JavaScript we put variable in parameter and value as argument when calling the function.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(9));


