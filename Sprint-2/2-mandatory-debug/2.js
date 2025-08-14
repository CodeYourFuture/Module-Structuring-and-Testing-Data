// Predict and explain first...

// Predict the output of the following code:
// =============> get rid of const num = 103 as it is defined in global scope. the output will be always 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// 

// Explain why the output is the way it is
//num is always 103 inside the function (from the global variable).
//So, every call to getLastDigit() returns "3" (the last digit of 103).
//The arguments you pass (like 42, 105) are ignored because the function doesn't take parameters.


// Finally, correct the code to fix the problem
// =============> my new code:
function getLastDigit(num) {return num.toString().slice(-1);};

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// The output will be: The last digit of 42 is 2
//                     The last digit of 105 is 5
//                     The last digit of 806 is 6
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
