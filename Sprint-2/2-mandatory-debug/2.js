// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//the output of all 3 console logs will be 3 because num is defined as a constant of 3 and the function is assigned to give the last digit of num
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> //the output of all 3 console logs will be 3 because num is defined as a constant of 3 and the function is assigned to give the last digit of num
// Explain why the output is the way it is
// =============> The code is assigned the constant num of 103 thus it will always return 3 as the last digit of the num
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

