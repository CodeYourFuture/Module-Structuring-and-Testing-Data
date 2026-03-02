// Predict and explain first...
//  =============> write your prediction here: js is a sequential language, as in reads code line by line, so i predict nothing will happen after 'return' is processed and 
//some sort of an error message will appear. 

//function sum(a, b) {
// return;
//  a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here: 'undefined' error appeared. Fixed the code by adding the addition on the same line as return.


// Finally, correct the code to fix the problem
//  =============> write your new code here:

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
