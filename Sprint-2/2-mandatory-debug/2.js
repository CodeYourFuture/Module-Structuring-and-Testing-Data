// Predict and explain first...
/* I predict that the code is not going to output the last digits of 42,105 and 806.
I can see that the const is defining the num outside the function, this will not process 
the other numbers with the function. I predict that the code will work, but not for all numbers.*/

// Predict the output of the following code:
// =============> Write your prediction here
/* Since that the const is declaring num outside and before the the function, the const 
will be executed before the function. I predict that the output will use 3 the last digit 
of 103 as the output for the rest of the code.*/

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

/*console.log(`The last digit of 42 is ${getLastDigit(42)}`);
The last digit of 42 is 3
undefined
> console.log(`The last digit of 105 is ${getLastDigit(105)}`);
The last digit of 105 is 3
undefined
> console.log(`The last digit of 806 is ${getLastDigit(806)}`);
The last digit of 806 is 3
undefined*/

// Explain why the output is the way it is
// =============> write your explanation here
/* The code execution goes in order of what comes first in the code, since that the const is 
aligned first the output will force the const line before the code. The getLastDigit is not 
taking the num 42, 105 and 806 and relying on the 103 as it has been declared outside the function
and the function needs (num) a parameter to execute the code. */


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
/* getLastDigit needs a parameter like 42 to pass it to num.tioString() to convert 42 to 
a string then after that the .slice(-1) operation can take the last digit of "42" which 
is 2 and that is the right output.
The getLastDigit is not working properly because there are no parameter passing through in the 
function , so the getLastDigit is relying on the const num=103 to pass it through in the code.*/