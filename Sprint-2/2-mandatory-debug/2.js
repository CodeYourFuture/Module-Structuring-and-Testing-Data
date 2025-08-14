// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
/*
the output of all three number will be 3 because the function getLast Digit 
is using the num = 103 because it a global variable 
*/

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
/*
the function getLastDigit doesn't use the input parameter lik(42,105,806) passed when
calling the function instead in uses the global variable num=103
so no matter what is the argument passed the function will always operate on 103 and the result will always be 3
*/

// Finally, correct the code to fix the problem
// =============> write your new code here
/*
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
/*
the initial code was using the global variable num instead of the parameter passed to the function]
which lead to incorrect result 
the fixed code correctly uses the input argument (num) to calculate the last digit 
*/