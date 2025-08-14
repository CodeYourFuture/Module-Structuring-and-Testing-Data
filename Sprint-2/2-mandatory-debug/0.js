// Predict and explain first...

// =============> write your prediction here
//My prediction is that this wont work because the function is not returning anything.
//having two console.log statements doesn't make the code look cleaner to me


/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

// =============> write your explanation here

//When we run the code we get 320 because of the console.log inside the function which prints (a*b)
//However the second console.log prints--The result of multiplying 10 and 32 is undefined because
//there is no return statement within the function


// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);