// Predict and explain first...
//  =============> the function is attempting to add "a" & "b" together 
// but the return is formatted wrong. 

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============>  because of the way line 6 and 7 is written the answer will be undefined.
//remove the semi colon from line 6 and then add line 7 to it.
// Finally, correct the code to fix the problem

function sum(a, b) {
  return (a + b);
}

console.log(sum(10, 32))
