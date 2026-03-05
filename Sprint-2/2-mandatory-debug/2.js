// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

/* The function getLastDigit should get the last digit number from any number argument pass into the function, but however it only take 
value from variable num and only give out the value of 3.
*/

/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> write the output here
/*
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
*
/

// Explain why the output is the way it is
// =============> write your explanation here
/* 
Because the function getLastDigit when use, instead of picking last digit number of any random number argument pass into the function
it only pick last digit number from the variable num value of 103. So when the user try to input other random number into 
the function is only print out the number 3 as the result.
*/
// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(digit) {
  return digit.toString().slice(-1);
}
console.log(`The last digit of 103 is ${getLastDigit(num)}`);
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
