// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here 
//The code wont work as we cannot reassign values to variables defined with const. It will only allow value to be 103. 

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> write the output here
// After running the code the output is that the reassigned values are ignored by the code and function call three times 
// gives the same answer. My prediction was that it will throw an error but it doesn't. It runs but doesn't give output
//according to updated input.


// Explain why the output is the way it is

// =============> There are no parameters in the function so it ignores the values 42,105,806 passed to it.
//when the function is called. It looks for num variable in scope of function first. 
// It doesnt find it there so it then takes the value of num from outside the functions scope 
//which is 103 and use that same value three times. 

// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);