// Predict and explain first...
//I think the result would be 3 for 42, 105 and 806 because cost num is declared outside the function
// in the global scope. And this means any input would take the result of the global scope.
// Predict the output of the following code:3
// =============> Write your prediction here
// the result would be 3 for 42, 105 and 806. Because cost num =103 is defined outside the function.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here: the last digit of 42, 105 and 806 is 3
// Explain why the output is the way it is. Because when we declared the variable const num =103 it is outside the function(global variable)
// so everytime we call the function, it will use the 103 as a reference.
// =============> write your explanation here
// The use of global variable outside the function doesn't accept any arguments. It always refers back to 103 and
// return the last digit which is 3
// Finally, correct the code to fix the problem
// =============> write your new code here

function getTheLastDigit(number){
  return number.toString().slice(-1);

}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
