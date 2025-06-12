// Predict and explain first...
//  =============> write your prediction here

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// I can see that there is a semicolon after the function return. This tells JavaScript that the function stops there. Any line of codes after that will be ignored.


// Finally, correct the code to fix the problem

//We need to remove the semicolon so the function can continue to the following line. 



//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
