// Predict and explain first...

// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//the problem is multiply function dose not return anything 
// Finally, correct the code to fix the problem


//  =============> write your new code here
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);