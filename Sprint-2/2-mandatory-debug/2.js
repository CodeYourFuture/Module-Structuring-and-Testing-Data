// Predict and explain first...
// The function does not take in any parameters, therefore it 
// refers to the global const variable = 103 
// So every console.log will print 3 every time. This function is not 
// re-useable as it stands.

// Predict the output of the following code:
// =============> Write your prediction here
//output is 3 for every console.log.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// "/home/justice/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-2/2-mandatory-debug/2.js"
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The function refers to the global const variable = 103 
// So every console.log returns 3 every time.

// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); 
// prints: The last digit of 42 is 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//prints: The last digit of 105 is 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
//prints: The last digit of 806 is 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// now the code works correctly

// I declared "num" as a parameter of the function,
// so the function now uses the value passed into it
// instead of the global variable "num".
