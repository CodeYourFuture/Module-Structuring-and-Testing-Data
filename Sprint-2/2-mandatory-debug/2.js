// Predict and explain first...

// Predict the output of the following code:
// =============> The const num variable is assigned in the global scope and returned in the getLastDigit function.
// The console logs lines 14-16 call the getLastDigit function due to this; the console will log "The last digit of 42 is 3",
// "The last digit of 105 is 3", and
// "The last digit of 806 is 3".

//const num = 103;

//function getLastDigit() {
//return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The code performed as expected due to the declaration of num in the global and called in the function
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
