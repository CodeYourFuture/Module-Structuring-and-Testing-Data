// Predict and explain first...
// 
// Predict the output of the following code:
// =============> Write your prediction here
// It shows us last digit.
/*const num = 103;
function getLastDigit() {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> write the output here
"The last digit of 42 is 3"
 "The last digit of 105 is 3"
 "The last digit of 806 is 3"
// Explain why the output is the way it is
// =============> write your explanation here
// because const is 103 and when we do to slice always show us last digit 3. 

// Finally, correct the code to fix the problem
// =============> write your new code here
 // we deleted const num = 103;

function getLastDigit(num2) {
  return num2.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
/* because we should do to return new statement in another new place like num2. This program always uses only 103 and slice it. */