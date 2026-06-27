// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
    // the console.log statement will print the last digit of the number 103, which is 3. for all 3 cases.
    // since the num variable is declared is global scope, it will always return the last digit of 103.
    // the function loses the feature of reusability because it is not taking any parameter to work with, it is always working with the global variable num.
/* original code
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
    // the output is the same as my prediction, it will print the last digit of the number 103, which is 3. for all 3 cases.
// Explain why the output is the way it is
// =============> write your explanation here
    // like i explained in my prediction, since the num variable is declared is global scope, it will always return the last digit of 103.
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
