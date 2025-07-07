// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// alright! from the sake of the function name, I can predict that it will successfully get the last digit
// oh hang-on, where is the parameter???? this programmer must be tired or "coding while eating"... careful aye.. holiday is coming.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// nope.. It runs as predicted :) xixixiixi... that way we are in this "debugging" session.
// it runs but no syntax error but the output are not correct.

// Explain why the output is the way it is
// =============> write your explanation here
// the function does not get any "define parameter", like nothing, so it tries to the "num" in global variable
// that is given just before the function that is const num = 103;
// so, every time that function is called, it will use num 103 as parameter

// Finally, correct the code to fix the problem
// =============> write your new code here
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// no syntax error just logic error :) because, sometime we need to manipulate the function just like that. BTW that is not save anyway.
