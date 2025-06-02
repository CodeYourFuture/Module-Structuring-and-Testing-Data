// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

/* I predict that this function will throw an error because the number 3 is being passed as an argument to the function square but the function is not set up to accept any arguments correctly. The function is trying to use the variable num, but this hasn't been defined anywhere in the function, therefore it is trying to multiply a variable that doesn't exist.
 */

// function square(3) {
//     return num * num;
// }

// Error Message:
// SyntaxError: Unexpected number

/*
The error points to the input number 3 in the function definition. In Javascript, function parameters cannot be defined with a literal value like 3. Instead, the parameter should be a variable name that can accept an evaluated number when the function is called. in this instance the parameter in thr function declaration should be called num, then the function can be called with a number as an argument, for example 3, which will then be passed to the function and used in the calculation. 
*/

// Finally, correct the code to fix the problem

function square(num) {
  return num * num;
}
console.log(square(3));
