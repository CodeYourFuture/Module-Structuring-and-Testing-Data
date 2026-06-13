// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I think it wont run because there's nothing passed into the function
// also it is using the value of num outside of the function wich isn't correct

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> it just returned 3

// Explain why the output is the way it is
// =============> Because value is mistakenly defined outside of the function

// Finally, correct the code to fix the problem
// =============> pass num into the function and remove the constant 103 outside

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
