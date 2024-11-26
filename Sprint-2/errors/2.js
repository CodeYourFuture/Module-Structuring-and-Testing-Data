
// Predict and explain first...

// this function should square any number but instead we're going to get an error

// We get a SyntaxError due the unexpected number 3 passed on the function as a parameter. Instead we should pass num as a parameter, in that way the function will square any number passed into it

function square(num) {
    return num * num;
}

let mySquare = square(5);
console.log(mySquare);


