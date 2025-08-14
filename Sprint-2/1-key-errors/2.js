// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> Instead of parameter (num) in our function we have a number

function square(num) {
  return num * num;
}

// =============> write the error message here SyntaxError: Unexpected number

// =============> explain this error message here we can t use number there, when we call the function we will use number instead of num

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(3));
