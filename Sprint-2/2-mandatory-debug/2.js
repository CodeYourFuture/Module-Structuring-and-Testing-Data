// Predict and explain first...: the function is supposed to return the last digit of a number, 
// but it won't because it's using a fixed number instead of a variable to get the last digit from.

// Predict the output of the following code:
// =============> Write your prediction here : it will give the same last digits of the same number (3).

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here : It gave the same last digit for all the numbers, which is 3.
// Explain why the output is the way it is : because the function is using a fixed number (103) .
// =============> write your explanation here: because the function is using a fixed number (103) .
// Finally, correct the code to fix the problem
// =============> write your new code here 
 function getLastDigit(num) {
 return num.toString().slice(-1);}
 console.log(`The last digit of 42 is ${getLastDigit(42)}`);
 console.log(`The last digit of 105 is ${getLastDigit(105)}`);
 console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
