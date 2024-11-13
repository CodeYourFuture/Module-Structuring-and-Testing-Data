
// Predict and explain first...

// this function should square any number but instead we're going to get an error

// function square(3) {
//     return num * num;
// }

// Incorrect Syntax: function square(3) tries to use a number (3) as the parameter name, which is not valid.
// In JavaScript, when defining a function, the parameter name must be a valid identifier,

// So, instead of function square(3), it should be function square(num) (or any valid parameter name). 
function square(num) {
    return num * num;
    }
console.log(square(3)) // This will print: 9