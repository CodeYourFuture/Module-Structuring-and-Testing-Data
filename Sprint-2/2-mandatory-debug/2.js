// Predict and explain first...

// IPredict the output of the following code:
// I am predicting an error because the variable const num = 103 is  outside the function.  =============> Write your prediction here 
// There is no parameters in the function condition



// Now run the code and compare the output to your prediction
// when i ran the output i got 3,3,3.=============> write the output here
// Explain why the output is the way it is
//  the argument for the console.log is ignored because "getlastDigit" does not have a parameter. =============> write your explanation here
// Finally, correct the code to fix the problem
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
