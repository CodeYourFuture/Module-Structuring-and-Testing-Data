// Predict and explain first...
/* I predict the code will run the multiplication result of (a * b). 
I run the code in the terminal and the code is just giving the result of the multiplication
but the code has also output this message ( The result of multiplying 10 and 32 is undefined)
it means that the code is not functioning. It means that the console.log(a * b) is the only 
line that is working and therefore the result of (a * b) is appearing in the terminal as 
320.
The console.log(`The result of multiplying 10 and 32 is .....) needs to appear in the terminal*/

// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/* To fix the code the first console.log operation will be replaced by return. The console.log
only works out the value of (a * b) without any connection to the next console.log.
The return operation will return the 320 and send it to the string (The result of multiplying 10 and 32 is 320)*/

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result multiplying 10 and 32 is ${multiply(10, 32)}`);