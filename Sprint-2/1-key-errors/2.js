// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//=========Prediction=============
// I think there will not be en error till we call the function.
/*function square(num) {
    return num * num;
}
console.log(square(5))*/
// =============> write the error message here
// Unexpected number
// =============> explain this error message here
// I think it function expects parameter as a variable rather than  a number.
// Finally, correct the code to fix the problem
// ===========correction=========
// to correct the code we need to introduce parameter as a variable, rather than a number.
// that way any number can be passed when function is called.
// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(5));
