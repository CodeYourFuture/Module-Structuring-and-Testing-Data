// Predict and explain first...

// Predict the output of the following code:
// =============> The output will be undefined
// num is declared as a constant but not in the function, 'getLaseDigit()'

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> The function cannot extract the last digit of any number passed to it
// because num was declared as const
// getLastDigit() cannot accept any argument due to how it is written
// So when the function is called, it will always return the last digit of num which is declared as const

// Finally, correct the code to fix the problem
// =============> 
  function getLastDigit(num) { 
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);  
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); 


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
