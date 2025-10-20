
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// The function does not define the parameter correctly
// Instead, the input has been inserted where the parameter name should be 
// Then num is being used in the function body but it is not defined anywhere

// function square(3) {
   // return num * num;
// }

// SyntaxError: Unexpected number
// The number 3 is used directly in the function parameter 
// The function parameter should be num to accept any number as input
// Then the function body can use num to square the input value
//Defining a function should describe the parameters it expects, not specific values

// Finally, correct the code to fix the problem
function square(num) {
    return num * num;
}
console.log(square(5)); 
console.log(square(10));
console.log(square(-3));


