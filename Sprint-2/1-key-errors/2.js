
// Predict and explain first BEFORE you run any code...
//I think we should define number first before returning it.

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here.
//number undefined.


function square(3) {
    return num * num;
}

// =============> write the error message here
//Unexpected number
// =============> explain this error message here
// It is not allowed to use numbers in a variable parameter. 
// Finally, correct the code to fix the problem

// =============> write your new code here


function square(number) {
  const result = number * number;
  return result; // ← semicolon instead of colon
}

console.log(square(3));
