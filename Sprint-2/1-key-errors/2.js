
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/* There is a problem in the function parameter. we can not use number in parameter.
even though line 12 by it self has no coding problem but the num is not declared before.*/

/*
function square(3) {
    return num * num;
}
*/

// =============> write the error message here
/* unexpected number
// =============> explain this error message here
we can not use number in a parameter so 3 is not used as identifier  */

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square("3"))


