// Predict and explain first...

// Predict the output of the following code:
// =============> output would be undefined because getLastDigit uses global variable num.

/* const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> Program is returning 3 for all console.log's.
// Explain why the output is the way it is
// =============> Num is defined to 103 which is global so anytime program calls getLastDigit it returns 3.
// Finally, correct the code to fix the problem
// =============> 

  function getLastDigit(num) 
  {
    return num.toString().slice(-1);
  }

  console.log(`The last digit of 41 is ${getLastDigit(41)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
