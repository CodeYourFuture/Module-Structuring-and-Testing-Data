
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error
// there is nothing con nectimng the 3 to the variable num
// =============> write your prediction of the error here

/*function square(3) {
    return num * num;
}
*/
// =============> write the error message here
//function square(3) {
   //             ^

//SyntaxError: Unexpected number

// =============> explain this error message here
// it was expecting a variable not a number

// Finally, correct the code to fix the problem

// =============> write your new code here


function square(num) {
    num = 3;
    return num * num;
}
console.log(square());
