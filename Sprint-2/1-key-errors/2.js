
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//SyntaxError: Unexpected number


// =============> explain this error message here
// passing nunber 3 in the function without declarint it as a number to be square 

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    const squareNumber= (num * num);
    return squareNumber ;
}

console.log (square(3));
console.log (square(4));