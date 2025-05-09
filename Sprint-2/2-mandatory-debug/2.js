// Predict and explain first...
// The constant variable num is set to = 103 ,and num should be passed as a parameter to getLastDigit function

// Predict the output of the following code:
// =============> Write your prediction here
/* The last digit will be the same for all values that will be passed to it 
since it coming from the constant.*/

/* const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
 */
// Now run the code and compare the output to your prediction
// =============> write the output here
/* The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3 */

// Explain why the output is the way it is
// =============> write your explanation here
//The output is the same because it coming from the execution of =>  num.toString().slice(-1);
//=> 3 over and over again

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
// To correct the code we needed to get rid of => const num = 103
//and pass num as a parameter to the function and now it giving the proper output
/* The last digit of 42 is 2
The last digit of 105 is 5
The last digit of 806 is 6 */