// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//the first log will output "The last digit of 42 is 3" this is because the function getLastDigit does not take a parameter and uses a hardcoded value of 103. so it will return the last digit of 103 which is 3.
//the second log will output "The last digit of 105 is 3" this is because the function getLastDigit does not take a parameter and uses a hardcoded value of 103. so it will return the last digit of 103 which is 3.
//the third log will output "The last digit of 806 is 3" this is because the function getLastDigit does not take a parameter and uses a hardcoded value of 103. so it will return the last digit of 103 which is 3.


// Now run the code and compare the output to your prediction
// =============> write the output here
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The output is the way it is because the function getLastDigit does not take any parameters. It always returns the last digit of the hardcoded number 103, which is 3. Regardless of the input provided in the console.log statements, the output will always be 3.
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
