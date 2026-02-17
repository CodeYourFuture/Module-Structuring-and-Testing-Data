// Predict and explain first...

// =============> write your prediction here

// Prediction:
// The program will print 320,
// but it will also print "undefined" in the sentence.
// This happens because the function uses console.log()
// instead of returning a value.
// If a function does not return anything,
// JavaScript automatically returns undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// =============> write your explanation here

// Explanation:
// The function multiply(a, b) prints the result using console.log(),
// but it does not return the result.
// When multiply(10, 32) is used inside the template string,
// JavaScript expects a returned value.
// Because nothing is returned, the value becomes undefined.
// That is why the output shows:
//
// 320
// The result of multiplying 10 and 32 is undefined


// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);//320

