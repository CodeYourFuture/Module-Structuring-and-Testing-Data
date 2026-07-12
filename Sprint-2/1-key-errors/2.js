
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//We cannot use number as a parameter. It should be any variable.

/*function square(3) {
    return num * num;
}*/
// =============> write the error message here
//The error message is, 'Unexpected number'. 
// =============> explain this error message here
// it says unexpected in terms, javaScript doesn't expect number/value as a parameter.
// Finally, correct the code to fix the problem

// =============> write your new code here


function square(num){
    return num*num;
}

const result = square(3);
console.log(result);