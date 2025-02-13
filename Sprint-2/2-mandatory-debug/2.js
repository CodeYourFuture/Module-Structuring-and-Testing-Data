// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// parameter is not passed to the function. 
// so in return statement num is given which take const num value =103 and perform all function and return the value.
// so for all 3 log statement 3 will be the answer .

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
after running code i got 3 output for all 3 log statement.
*/
// Explain why the output is the way it is
// as we are not passing any parameter to function and directly returning  num value from line 12 after performing operation,and num was already declared in line 9
// so output will be same which is 3 and it will not perform function on all 3 input in line 15, 16,17
// Finally, correct the code to fix the problem
// =============> write your new code here

/*
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);//2
console.log(`The last digit of 105 is ${getLastDigit(105)}`);//5
console.log(`The last digit of 806 is ${getLastDigit(806)}`);//6
*/


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
/*
num is declared in line 9 and as we are not passing any parameter to function and directly returning  num value from line 12 after performing operation,and num was already declared in line 9
// so output will be same which is 3 and it will not perform function on all 3 input in line 15, 16,17
*/
