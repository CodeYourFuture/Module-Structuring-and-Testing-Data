// Predict and explain first...

// Predict the output of the following code:
// =============> The last digit of 42 is 3  
The last digit of 105 is 3  
The last digit of 806 is 3



const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
The last digit of 42 is 3  
The last digit of 105 is 3  
The last digit of 806 is 3


// Explain why the output is the way it is
// =============> write your explanation here
//RESPONSE: The function will always return the last digit of 103, regardless of the number passed in the console.log() calls.

// Finally, correct the code to fix the problem
// =============> function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

//RESPONSE BELWOW
// The function getLastDigit() doesn't accept any arguments. 
//It always uses the value of the constant num, which is 103.
 //Even though the console.log() statements suggest it should work with other numbers (like 42, 105, and 806), 
 //those numbers are never actually passed into the function. 
 //That's why it always returns the last digit of 103, which is '3'.