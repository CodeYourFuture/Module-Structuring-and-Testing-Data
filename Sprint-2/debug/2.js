// Predict and explain first...
//* When we execute the code it will return the last digit of number 103 > 3 for all of number because num variable is defined in global
// scop and anytime we call the function it consider value of 103 for variable num rather than parameters given in template literal.

//* To fix this we can remove fixed num (global variable) and define parameter with a valid name for the getLastDigit function


function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//* Because the fixed variable num, every time we call the function it consider the value 3 that it's fixed and global. So it doesn't
// change when we call the function with different number , all the result (last digit) will be the same (3).