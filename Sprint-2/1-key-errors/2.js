// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// A number is not a valid parameter (Syntax Error)

// function square(3) {
//     return num * num;
// }

// Failed to instrument Sprint-2/1-key-errors/2.js
//    7 |
// >  8 | function square(3) {
//      |                 ^ SyntaxError: Unexpected token (8:16)
//    9 |     return num * num;
//   10 | }
//   11 |
//     at <rootDir>/Sprint-2/1-key-errors/2.js:8:16

// parameter names cannot start with a digit

// Finally, correct the code to fix the problem

function square(num) {
  return num * num;
}

console.log(square(3));
