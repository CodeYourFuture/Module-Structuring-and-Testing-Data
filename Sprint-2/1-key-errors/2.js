
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> there is no assign value for num variable

function square(num) {
    return num * num;
}

let result = square(3);
console.log (`The result is ${result}`);

// =============> SyntaxError: Unexpected number

// =============> This error cause because there was a number in the place where it is not expected by parser.

// Finally, correct the code to fix the problem

// =============> function square(num) {
    // return num * num;
    //  }

// let result = square(3);
// console.log (`The result is ${result}`);


