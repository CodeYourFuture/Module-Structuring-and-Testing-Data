// Predict and explain first...

// Predict the output of the following code
// =============> Write your prediction here: i think, the console.log will only show '3' because the paramater hasn't been specified in the function. 

//const num = 103;

//function getLastDigit() {
//  return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here: I've run the code and got '3' in each console.log line. 

// Explain why the output is the way it is
// =============> write your explanation here: It's because there is no parameter in the function to differentiate viarable 103 from 42, 105, 806.
 

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// it works now, but since cosnt num = 103 is unused, i have removed it. 

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
