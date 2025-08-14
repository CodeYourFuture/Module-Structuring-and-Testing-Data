
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(3) {
   return num * num;
}

// =============> write the error message here

///Users/nahom/Module Structuring And Testing Data New/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:8
//function square(3) {
  //              ^

//SyntaxError: Unexpected number
  //  at wrapSafe (node:internal/modules/cjs/loader:1469:18)
    //at Module._compile (node:internal/modules/cjs/loader:1491:20)
    //at Object..js (node:internal/modules/cjs/loader:1689:10)

// =============> explain this error message here

// the program doesn't expect a number to be passed into a function as a parameter.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
   return num * num;
}
let number=5;
console.log(square(number)); 


