// Predict and explain first...

// Predict the output of the following code:
// =============> Num has been declared as 103. The function converts the number to a string and then returns the last number of that string. The return statement specifies the last digit of num which is already declared as 103 - so no matter what number someone puts in the temperate literals within the console.log statements 3 is always going to be returned.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3 / The last digit of 105 is 3 / The last digit of 806 is 3 /

// Explain why the output is the way it is
// =============> As predicted, 3 is always going to be returned as the num was specified as 103 and the parameter within the function was not declared. To fix this const num = 103 needs to be removed and the variable num needs to be placed as a parameter within the function getLastDigit
// Finally, correct the code to fix the problem
// =============>
  function getLastDigit(num) {
return num.toString().slice(-1);
  }

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
