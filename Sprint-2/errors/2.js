
// Predict and explain first...
//* When we execute the code we will have Syntax error because of the number 3 in the function. We can not define a parameter value
// in the function, we are allowed to pass parameter name. Also num inside of the function is not defined and will show reference error

// this function should square any number but instead we're going to get an error
//* To fix this code we need to remove number 3 and pass the parameter name "num". Also we need to call function, we can print it with
// console.log

function square(num) {
    return num * num;
}

console.log(square(3)); // OUTPUT ; 9
