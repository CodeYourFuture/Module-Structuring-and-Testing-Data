// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//I think this code will convert given number to string and return the last digit of the value based on index -1

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
//I think the output is this way because toString method is taking the input from global variable namely num instead of the parameter inside a function
//To fix the code, we can remove global variable and instead declare it as a parameter
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
//As expected declaring num as parameter instead of variable has fixed the problem.
//My new output is
//The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
