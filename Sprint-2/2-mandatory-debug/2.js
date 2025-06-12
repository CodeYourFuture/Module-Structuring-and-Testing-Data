// Predict and explain first...
//the getLastDigit function is hardcoded to use the variable num, which makes it not reusable for other values. A more flexible and reusable approach would be to pass the number as a parameter, allowing the function to work with any input value.

// Predict the output of the following code:
// =============> Write your prediction here
//output will be same for all of the test cases. we will get number 3 as the num value is hardcoded.



// Now run the code and compare the output to your prediction
// =============> write the output here
//The output is the same as we predicted.

// Explain why the output is the way it is
// =============> write your explanation here
//
/*The function getLastDigit does not take any arguments and uses a hardcoded variable num, which is set to 103.
Inside the function, num.toString() converts the number to the string "103", and .slice(-1) takes the last character of that string, which is "3".
Therefore, when getLastDigit() is called, it returns "3", and that's what gets printed to the console.*/
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);