// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// This function will return always "3" 


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
// The function it is going to call always the num 103 declared with const in line 7.
// Because the function doesn't have a parameter variable and when we pas the value it calls the num variable in line 7.



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
// Because the slice() method is always taking the number 103
