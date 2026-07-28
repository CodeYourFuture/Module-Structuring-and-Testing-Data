// Predict and explain first...

// Predict the output of the following code:
// =============> Our function doesn't take a parameter. So, it is not reusable and will always consider num = 103 . The num.toString() method converts everything into a String. Then the slice(-1) extracts the last figure of the num and give it back to us. 

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The output is the same as my prediction 
// Explain why the output is the way it is
// =============> The function isn't reusable because we didn't add a parameter to the function getLastDigit(). So, it will always take num = 103 because that is what line 9 does. 
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
// Because our function doesn't take a parameter, line 9 is actually calling the global variable which is const num = 103. That is why all out return output will be 3. That is why I allocated a parameter to our function, though I gave it the name 'num'. 
