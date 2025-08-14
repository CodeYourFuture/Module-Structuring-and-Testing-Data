// Predict and explain first...

// Predict the output of the following code:
/*All the outputs will be same because we have defined a constant variable num, and our function always uses that value. 
 Even though we call the function with different numbers, the function doesn't take any parameters, so it always works with the value 103.*/

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
/* The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3 */
// Explain why the output is the way it is
// Because we defined  a variable   ==> const num = 103;

// CORRECT VERSION :
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 46 is ${getLastDigit(46)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// We didn’t provide a parameter when defining the function, but we tried to call it with a value, so it didn’t work properly.
