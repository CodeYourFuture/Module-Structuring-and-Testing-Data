// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// I expect the function to return the last digits of the number in console.log, which are 2,5 and .

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// Now run the code and compare the output to your prediction
// =============> write the output here


// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3



// Explain why the output is the way it is
// =============> write your explanation here


/* 
The getLastDigit() function always returns the last digit of 103 because it doesn't take any parameters. 
This means it will ignore the numbers passed into it and only works with the fixed value of num.
*/


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

/* The getLastDigit function wasn't working properly because it only used the fixed value 103.
 The updated code allows it to take any number as input and use it instead of the fixed num variable.
 */