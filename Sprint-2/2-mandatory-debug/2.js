// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here./* The output will be 3 because the function getLastDigit is not using the argument passed to it, instead it is using the global variable num which is set to 103. Therefore, the last digit of 103 is 3 and that is what will be printed for all three console.log statements.*/

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here// The out put is 3 for the three console.log calls as predicted 
// Explain why the output is the way it is
// =============> write your explanation here. /* The reason is because the function getLastDigit is not using the argument passed to it, instead it is using the global variable num which is set to 103. Therefore, the last digit of 103 is 3 and that is what will be printed for all three console.log statements.*/
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
