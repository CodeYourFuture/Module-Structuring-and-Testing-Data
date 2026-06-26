// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//I predict the code will output the number '3' for every function call.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

//OUTPUT: '3' was the output for every function call, which is not what I predicted.

// Explain why the output is the way it is
// =============> write your explanation here

// The output is the way it is because the first line of the code a const statement was declared with the value of 103,
// and the function getLastDigit() is using that constant instead of the argument passed.

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

// This function did not work because javascript looks for the variable inside it and as it was not declared in the function '()' it went looking for num in the global code
// and locked onto the declared constant value of num = 103 instead of running the passed arguments individually.
// the code as been corrected by removing the const num = 103 and added num as a parameter to the function getLastDigit(num) so it can now take the arguments individually and return the right output.
