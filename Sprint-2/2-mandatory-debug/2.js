// Predict and explain first...

// Predict the output of the following code:
// =============> the function has no parameter so will use the 
// global value of num for num.toString which means it will always 
// return 3 which is the last digit of 103


const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3


// Explain why the output is the way it is
// =============> the function has no parameter so will use the 
// global value of num for num.toString

// Finally, correct the code to fix the problem
// =============> 
// function getLastDigit(num) {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// removed  const num = 103; and then added num as a parameter to the function 
// getLastDigit so that it can take in the value of num when the function is 
// called and return the last digit of that number instead of always using 
// the global value of num which was 103.

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// num was not declared within the function so the global value of num in the 
// the const declaraton was used for each number
//I corrected this by putting num as a parmaeter for the function so that it can take 
//in the value of num when the function is run for any number and return the last digit 
//of the number instead of always using the fixed value of num which was 103.
//I also removed the const declaration of num because it was not needed and was causing 
//confusion as to which value of num was being used in the function.

