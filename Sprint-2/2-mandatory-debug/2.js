// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
  // All the answers will be 3.
  // The variable num is declared as a constant outside of the function. The num variable is within the scope of the function.
  // For every function call, the value of 103 will be used.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
    /* 
    The last digit of 42 is 3
    The last digit of 105 is 3
    The last digit of 806 is 3
    */

// Explain why the output is the way it is
// =============> write your explanation here
  // The variable num is declared as a constant outside of the function. The num variable is within the scope of the function.
  // For every function call, the value of 103 will be used.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
  
  // The problem seems to have been resolved. Here are my outputs:

  /* 
  The last digit of 42 is 2
  The last digit of 105 is 5
  The last digit of 806 is 6
  */