// Predict and explain first...
// Predict the output of the following code:
// =============> Write your prediction here

//-I think here is error in function ,in getLastDigit(.......)  should be num in parentheses

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
/*
So, I was almost right ,
the num is stick to this number "103", and actually it it should be in parenthesis.
*/

// Explain why the output is the way it is
// =============> write your explanation here
/*
// =============> write your explanation here
The function `getLastDigit()` does not accept any parameters,
 and always returns the last digit of the constant `num = 103`. 
It completely ignores the numbers passed in (42, 105, 806) because it's not using them. 
That's why the result is always the same — "3".

 The last digit of 42 is 3
VM757:8 The last digit of 105 is 3
VM757:9 The last digit of 806 is 3
*/

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

/*
This program should tell the user the last digit of each number.
Explain why getLastDigit is not working properly - correct the problem

*/
