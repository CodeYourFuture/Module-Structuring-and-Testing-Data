// Predict and explain first...

// =============> In line 6 instead of console.log, I would expect retun a*b; the code will result in
                // just printing a*b 

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> After running it returned 320 The result of multiplying 10 and 32 is undefined
// Because the multiply parameters were not taken as paramaters within a retunr. 

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return  (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
