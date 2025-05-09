// Predict and explain first...
//=======
// Predict the output of the following code:
// =============> Write your prediction here

//const num = 103;
//>>>>>>> main:Sprint-2/2-mandatory-debug/2.js

function getLastDigit(num) {
  const result = num.toString().slice(-1);
  return Number(result);

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
}

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//It shows 3 as a result for all of them because the variable non is set on 103.
//We need to update the function getLastDigit to accept an argument, so it can calculate the last digit for any number.
