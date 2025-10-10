// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//the function has no parameter so I am not sure if it get the 42, 105 and 806 as input or it will always use the value of num which is 103,
// but I know it change the number to string and get the last digit using slice method, because of the -1 index that means the last character.
// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
/*The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3*/


// Explain why the output is the way it is
// =============> write your explanation here
// It happens because, as I predicted, the function always considers 103 as its argument

// Finally, correct the code to fix the problem
// =============> write your new code here
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
