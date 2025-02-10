// Predict and explain first... We are going to use variable num in our function getLastDigit() instead of parameter and because of that we will ignore parameter in call function

// Predict the output of the following code:
// =============>  Write your prediction here The last digit of 42 is 3
//                 Write your prediction here The last digit of 105 is 3
//                 Write your prediction here The last digit of 806 is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here          Write your prediction here The last digit of 42 is 3
//                                               Write your prediction here The last digit of 105 is 3
//                                               Write your prediction here The last digit of 806 is 3

// Explain why the output is the way it is   Because we don t have parameter in our function and we use variable instead
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
