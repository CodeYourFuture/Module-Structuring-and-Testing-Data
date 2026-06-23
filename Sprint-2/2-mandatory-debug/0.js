// Predict and explain first...

// =============> write your prediction here
// This function is not returning anything
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// This function is not returning anything. It does multiply the assigned values of a,b but it does not return the String with the 
// as required on line 9
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a,b){
  return(a*b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);