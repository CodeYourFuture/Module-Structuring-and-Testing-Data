// Predict and explain first...

// =============> write your prediction here
// is going to have undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/*
its going to have undefined for the ${multiply(10, 32) as in teh function it has console.log.
It needs to have "return" in order for it to keep teh vaule for the function as it is only displying it right now.
*?
// Finally, correct the code to fix the problem
//  =============> write your new code here
/*
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

*/
