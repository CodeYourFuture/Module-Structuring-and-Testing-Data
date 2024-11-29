// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/* The code would not work because the function getLastDigit() has empty parameters 
between the brackets. The following could work:

function getLastDigit(num) {
return num.toString().slice(-1);} 

because num would be the parameter, defined as the const. But there could be problems to use the global variable
in the function if num ever changes.

Another way:

Instead of calling the global const for num, the function could be written as:

function getLastDigit(x) {
return x.toString().slice(-1);
}

where x is the parameter that will be converted to a string and sliced, to be used
in the console.log arguments for the template literals of ${getLastDigit(42)}, ${getLastDigit(105)}
and ${getLastDigit(806)}.

*/