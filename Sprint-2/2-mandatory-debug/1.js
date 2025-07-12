// Predict and explain first...
//  The code is incorrect because there is a semi-colon in line 5 and prevent line 6 from running: return;

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

//The code below ensures that the function is defined. This can be achieved by removing the semi-colon in line 5 of the previous code.

// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
