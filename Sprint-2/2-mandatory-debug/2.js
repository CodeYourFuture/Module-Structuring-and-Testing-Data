// Predict and explain first...

// Predict the output of the following code:
// =============> The code will return 3 as a string first, but after calling the getLastDigit function,
// it will not return anything because every number based will be converted to string.

//const num = 103;

//function getLastDigit() {
// return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3 three times.
// the prediction was close but not accurate, the case is that the parameter num needs to be 
//the function instead of const num = 103.
// =============> 
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
// parameter num needs to be with the getLastDigit function instead of const num=103.
