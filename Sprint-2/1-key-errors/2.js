// Predict and explain first BEFORE you run any code...

//predict://This code is supposed to define a function called square that takes a number as input and returns its square.
//However, due to the current structure of the code, an error will occur. In the function definition line, square(3) is mistakenly used as a parameter,
//which will prevent the code from working correctly.

//explain://The main issue is that in the function definition, square(3) is written instead of a parameter name.
//In function definitions, a parameter should be a variable, not a specific value. Additionally, inside the function,
//num is used, but it has not been defined as a parameter.

//Fix://To fix this issue, replace square(3) in line 6 with a parameter (e.g., num) so that the function can accept any number and use it in the calculations.
//Also, make sure to use the parameter num inside the function.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(num) {
  return num * num;
}
console.log(square(3));
console.log(square(5));

// =============> write the error message here : SyntaxError: Unexpected number

// =============> explain this error message here:

// Finally, correct the code to fix the problem

// =============> write your new code here
