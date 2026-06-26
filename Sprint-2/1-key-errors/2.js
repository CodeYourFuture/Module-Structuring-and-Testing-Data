
// Predict and explain first BEFORE you run any code...
   // num is not defined at all, so when the function is called it will throw a reference error.
    // and inside the function the parameter is not defined correctly, it should be num instead of 3.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// reference error because the parameter is not defined correctly, it should be num instead of 3.
/* below is the original code 
function square(3) {
    return num * num;
}
*/

// =============> write the error message here
    // the error was syntaxError: unexpected number.
// =============> explain this error message here
    // because the parameter is not defined correctly, it should be num instead of 3. so the function is not defined correctly and it will throw a syntax error.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
    
}       
let result = square(3);
console.log(result);

