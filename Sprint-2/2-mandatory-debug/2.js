// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here: We are trying to convert the last figure (last index) of a number to a String. We will surely get "2", "5" and "6"

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here: After running our code, we saw that it printed "3" all over. Which comes from our initial declaration of num = 103
// Explain why the output is the way it is
// =============> write your explanation here: We have declared num as a const which makes it unchangeable through out. We cannot redeclare it. The second thing is that we will need to add num inside of the parameter of the function.
// Finally, correct the code to fix the problem
// =============> write your new code here
let num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
