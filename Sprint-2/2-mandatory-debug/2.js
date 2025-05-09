// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// this function will output 3 every time because the variable num it uses has been set to 103 globally
//const num = 103;

//function getLastDigit() {
//  return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// output is 3 every time

// Explain why the output is the way it is
// =============> write your explanation here
// the function getLastDigit() doesn't have parameter in its declaration and uses global variable num all the time

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
