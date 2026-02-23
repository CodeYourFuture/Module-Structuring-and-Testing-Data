// Predict and explain first...

// =============> there is no return statement, therefore, you cannot use the result of the function in a console log. The function will run but it will return undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> you need to add a return statement in order to use the result and so it can be displayed on the console. 

// Finally, correct the code to fix the problem
//  =============> 
  function multiply(a, b) {
    return a * b;
  }
  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

