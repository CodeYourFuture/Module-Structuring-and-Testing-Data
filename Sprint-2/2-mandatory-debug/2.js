// Predict and explain first...

it will print 3 for all of them

// Predict the output of the following code:

The last digit of 42 is 3  
The last digit of 105 is 3  
The last digit of 806 is 3

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

The last digit of 42 is 2

The last digit of 105 is 5

The last digit of 806 is 6

// Explain why the output is the way it is
// =============> write your explanation here

It always shows 3 cuz the function just uses the num at the top (103).

It ignores the numbers we put in () like 42, 105, 806.

We need to let the function take a number as input.

// Finally, correct the code to fix the problem

function getLastDigit(num){

  return num.toString().slice(-1)
}

console.log(The last digit of 42 is ${getLastDigit(42)})

console.log(The last digit of 105 is ${getLastDigit(105)})

console.log(The last digit of 806 is ${getLastDigit(806)})

// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
