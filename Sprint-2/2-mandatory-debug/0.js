// Predict and explain first...

// =============> write your prediction here
// we will have a normal function  that does a mathematical  operation  but it does not have a value because there isn't a return 
function multiply(a, b) {
  console.log(a * b);

}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// A return was added to the function as its value so when we call it or reuse it as a value it will be defined. 

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  console.log(a * b);
  return a*b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);