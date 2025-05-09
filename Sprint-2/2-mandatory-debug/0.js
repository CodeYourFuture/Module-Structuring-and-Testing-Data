// Predict and explain first...

// =============> write your prediction here
//the code will console log the results of multiplying 10 and 32 first(this is what the fuction calls for) and then write the string 
//The result of multiplying 10 and 32 is 320

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//the code will console log the results of multiplying 10 and 32 first(this is what the fuction calls for) and then write the string 
//The result of multiplying 10 and 32 is undefined
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

