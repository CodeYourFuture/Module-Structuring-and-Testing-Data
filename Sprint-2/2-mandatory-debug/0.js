// Predict and explain first...

// =============> write your prediction here
// I prediact that the error will occur because the function multiply does not return any value and this will make the console.log function to print undefined instead. 


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// when the program run it give this output:

// 320
// The result of multiplying 10 and 32 is undefined

// 320: the out put for the console.log inside the function 

// while the ouout the out put for the console.log function out of the function returned the string provided in the function and an undefiened because the function multibly doesn't return any value. 
// to fix this error we need to change the console.log function inside the function to return. 


// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
