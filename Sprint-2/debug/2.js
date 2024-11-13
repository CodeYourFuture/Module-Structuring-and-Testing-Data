// Predict and explain first...



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// It wasn't working because of the global variable num that acted as a default value. Thus no matter what value was passed to the function it always returned the global variables' value. To fix the problem I got rid of the global variable and only pass num as a function argument. 
