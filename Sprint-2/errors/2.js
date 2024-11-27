
// Predict and explain first...

// this function should square any number but instead we're going to get an error

// function square(3) {
//     return num * num;
// }
// there is a value input in the function, thus it throw a SyntaxError, in Javascript a value should not be put in the function definition.
// we need to define a variable name with a value and then put the variable name into a function

let num = 2
function square(num) {
    return num * num;
}
console.log(square(6));
console.log(square(5));
console.log(square(num));

