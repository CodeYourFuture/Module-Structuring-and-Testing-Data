// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here. Answer:  We will get a syntax error

function square(3) {
return num * num;
}

// =============> write the error message here. Answer: SyntaxError: Unexpected number

// =============> explain this error message here Answer: A number cant be a function parameter

// Finally, correct the code to fix the problem

// =============> write your new code here

// Answer: New code

function square(num) {
  return num * num;
}
let result = square(3);
console.log(result);
