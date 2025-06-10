// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
/*
My expectation is:
num is declared and assigned at outside of the function, 
so all console.log functions produce same result.
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
*/
// Explain why the output is the way it is
// =============> write your explanation here
// As expected the results are same
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
/*
When the code run, outputs are expected so there is no issue.
The last digit of 42 is 2
The last digit of 105 is 5
The last digit of 806 is 6
*//
