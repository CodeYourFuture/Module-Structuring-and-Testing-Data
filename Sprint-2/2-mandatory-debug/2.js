// Predict and explain first...
// the variable num is declared outside of the function so it's a global variable 
// and it is constant. It should be a parameter or an argument of the getLastDigit function
// Predict the output of the following code:
// =============> Write your prediction here

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// the output is 3 for everything
// Explain why the output is the way it is
// firstly because num is constant and it is a global variable outside the function. The last digit on 103 remain =s 3. It does not change
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num){
  return num.toString().slice(-1)
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
