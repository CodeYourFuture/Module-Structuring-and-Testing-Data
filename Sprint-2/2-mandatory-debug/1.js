// Predict and explain first...
//  =============> write your prediction here
// Here we are returning but putting equation in next line . so basically we are returning nothing here. so in output we get undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
/*
The sum of 10 and 32 is undefined getting this output. as in return statement we are not returning anything. so if we put 7th line in 6 line we will get our output.
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here
/*
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
