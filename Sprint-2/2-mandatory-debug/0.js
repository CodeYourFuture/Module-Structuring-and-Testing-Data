// Predict and explain first...

// =============> Right now the first console.log inside the function prints 320 - but the function does not have a return statement, so when it is used inside the template literal it will show as undefined. The code should use return a * b instead of console.log(a * b)

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> This code returned "The result of multiplying 10 and 32 is undefined" as predicted because there is no return statement within the function.

// Finally, correct the code to fix the problem
//  =============> 
  function multiply(a, b) {
    return a * b;
  }

  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 21)}`)
