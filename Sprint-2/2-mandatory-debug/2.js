// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// All 3 console.logs will print "3" because the getLastDigit
// function ignores its parameter and always returns the hardcoded
// const num which is 103. 

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function uses a hardcoded variable num = 103 from outside
// the function instead of the num parameter that is passed to the 
// function. Therefore, it always returns the last digit of 103.
// To fix this I can remove the const num = 103 and add num as a 
// parameter to the function  so each call to getLastDigit will use
// the number passed in as an argument (its own input) instead of the
// hardcoded value.

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
