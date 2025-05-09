// Predict and explain first...

// =============> write your prediction here
// the function will not work as a and b is already define as a parameter
// because the console.log is within the local scope it will only print to the console in the global scope

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// the console has already used the parameters in the gloabal scope, removing the console.log and changing it
// to 'return' it will not print until the it is called
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
