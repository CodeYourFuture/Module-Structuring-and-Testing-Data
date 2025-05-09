// Predict and explain first...

// =============> write your prediction here
//I think the answer will be The result of multiplying 10 and 32 is 320

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//The output didn't return my expectation on line 10 because
//console.log on line 7 doesn't return any value it only prints out the output of parameters.
//console.log on line 7 got the value for a and b from global scope on line 10 $(multiply(10,32))
//My output for this was :
//samuntasunuwar@Samuntas-MacBook-Pro 2-mandatory-debug % node 0.js
// 320
// The result of multiplying 10 and 32 is undefined
//To fix the code we need to make sure our function returns a value before calling it

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//The output now is :
//The result of multiplying 10 and 32 is 320
