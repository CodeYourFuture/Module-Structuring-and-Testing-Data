// Predict and explain first..
// Predict the output of the following code:
// =============> Write your prediction here
// i predict that the output will be 3 for all the numbers passed to the function because the function is not using the parameter
// passed to it instead it is using the variable num which is 103  so it will always return 3 as the last digit of any number passed to it.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3 
// the last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The output is the way it is because the function getlastDigit is not using the parameter passed to it.instead it is using the variable num which is 103.
// Finally, correct the code to fix the problem
// =============> write your new code here
// the function getLastDigit(num){
// return num.string().slice(-1);}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// this is because the function getLastDigit is not using the parameter passed to it.
// instead it is using the variable num which is 103. so it will always return 3 as the last digit of any number passed to it.s