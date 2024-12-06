// Predict ://always return the last digit of the constant variable num 
//(which is 3, from num = 103), regardless of the argument given in each function call.

//and explain://The issue is that the getLastDigit function is written to use the global variable num instead of the number passed as an argument

 //Fix ://I replaced num with a parameter called number in the getLastDigit function.
//Now, the function takes number as an argument, converts it to a string, and uses slice(-1) to return the last character (last digit).


//const num = 103;

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
