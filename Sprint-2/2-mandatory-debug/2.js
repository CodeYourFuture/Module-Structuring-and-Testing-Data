// Predict and explain first...

// Predict the output of the following code:
// Prediction:
// The program will print 3 for all three lines because the function always uses the constant 'num', which is 103.

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// Output:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6

// Explain why the output is the way it is
// Explanation:
// The original function always used the constant 'num' (103), so it always returned 3. By giving the function a parameter called 'num', it now uses the value passed into the function each time it is called.

// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem.
