// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// Prediction:
// The function will always return "3".
// Even though we pass 42, 105, and 806 into the function,
// it will ignore those values and use the global variable `num = 103`.
// Therefore, every line will print 3 as the last digit.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// Now run the code and compare the output to your prediction
// =============> write the output here

// Output:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3


// Explain why the output is the way it is
// =============> write your explanation here

// Explanation:
// The function getLastDigit does not accept a parameter.
// Because of that, it ignores the values passed inside the parentheses.
// Instead, it always uses the global constant `num`, which is 103.
// The function converts 103 to a string and takes the last character,
// which is "3". That is why every output is 3.


// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);//2
console.log(`The last digit of 105 is ${getLastDigit(105)}`);//5
console.log(`The last digit of 806 is ${getLastDigit(806)}`);//6


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function was not working properly because it did not use a parameter.
// It was hard-coded to use the global variable `num` instead of the value
// passed into the function. By adding a parameter (number),
// the function now works correctly for any input.
