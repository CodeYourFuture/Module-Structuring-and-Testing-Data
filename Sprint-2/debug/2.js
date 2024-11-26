const num = 103;  // Global variable num, but it will not be used properly in the function.

function getLastDigit(number) {
  return number.toString().slice(-1);  // This line returns the last digit of the argument passed to the function.
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);  
// Prediction: The function will take 42 as the argument, convert it to string ('42'), and return the last character, which is '2'.
// Expected output: "The last digit of 42 is 2"

console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// Prediction: The function will take 105 as the argument, convert it to string ('105'), and return the last character, which is '5'.
// Expected output: "The last digit of 105 is 5"

console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// Prediction: The function will take 806 as the argument, convert it to string ('806'), and return the last character, which is '6'.
// Expected output: "The last digit of 806 is 6"