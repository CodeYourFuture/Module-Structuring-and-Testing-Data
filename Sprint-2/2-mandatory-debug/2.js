// Predict and explain first...

// Predict the output of the following code:
/*
I predict that the output of this code will not be as expected because the variable num has been declared with a value and it cannot be changed because it is a constant variable. There is also no parameter in the getLastDigit function. So even though the console.log statements are trying to call the getLastDigit function with different arguments, the function will not return any of the sliced version of these values.
*/

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
/* 
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
*/

// Explain why the output is the way it is
/*
The fact that 3 is the result of each console.log statement is because the getLastDigit function is not actually using the arguments of 42, 105, and 806. Instead, because the num variable was assigned with 103 as a constant at the top of the script, the function will always evaluate num as 103 regardless of what is in the expression it is returning. In this case the return of the expression in the function is always the last digit of 103, which is 3. Therefore, the output will always be 3 for each console.log statement regardless of the arguments of the getLastDigit function.
*/

// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
/*
Originally the getLastDigit function didn't have a parameter to accept an argument, so it will always use the constant num variable defined at the top of the script to evaluate the last digit. By adding the variable num as the argument of the function, we can now pass in any number to the function and it will return the last digit of that number. 
*/
