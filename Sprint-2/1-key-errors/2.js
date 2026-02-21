// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> the code will throw a syntax error because the parameter name '3' is not a valid identifier in JavaScript.
//                  The error message will likely indicate that there is an unexpected number or that the parameter name is invalid.

//function square(3) {
//    return num * num;
//}

// =============> C:\Users\alexo\CYF\Module-Structuring-and-Testing-Data\Module-Structuring-and-Testing-Data\Sprint-2\
//                1-key-errors\2.js:9 function square(3) {SyntaxError: Unexpected number

// =============> We get an unexpected number error because the parameter name '3' is not a valid identifier in JavaScript.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(4));
