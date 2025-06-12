// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

/*
The last digit of 42 is 3  
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
The last digit of 806 is 3 */

// Explain why the output is the way it is
// =============> write your explanation here
/*
The function getLastDigit() does not accept any parameters, so even though it is called like getLastDigit(42), the 42 is ignored.

The function only uses the globally defined const num = 103.

It always returns the last digit of 103, which is "3" — this is why all 3 outputs are the same
*/
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
 //getLastDigit is not working properly because it uses the globally defined const num = 103
 
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
