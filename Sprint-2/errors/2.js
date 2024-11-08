
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(3) {
    return num * num;
}
//Error1:Unexpected number
//The function square is defined with 3 as a parameter name, which is not allowed in JavaScript.
//Error2:Inside the function, return num * num; is supposed to square the input number.
//However, there’s no variable named num defined in this function.
//Fixed code:
function square(num) {
    return num * num;
}

console.log(square(3));  // Output: 9


