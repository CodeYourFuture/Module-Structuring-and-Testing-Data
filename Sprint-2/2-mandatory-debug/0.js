// Predict and explain first...

// =============> The function will not return any result because it contains console.log and not 'return'

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The function returned '320' and 'The result of multiplying 10 and 32 is undefined'
// This is because the function logs the result with console.log(a * b) and no value was returned 


// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b; 
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

