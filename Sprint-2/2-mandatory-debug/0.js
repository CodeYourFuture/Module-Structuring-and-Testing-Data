// Predict and explain first...


// =============> write your prediction here


function multiply(a, b) {
  console.log(a * b);
}


console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// =============> The function is only printing values on the console but not returning the value to the caller. Henceforth, it outputs both 320 and undefined on the console. 320 is the result of the console.log(a * b) inside the function, whereas undefined comes from the outer console.log(...) as it tries to bring forth and print the result of the function multiply(a, b). But the function is not returning any value and hence undefined appears on the console.


// Finally, correct the code to fix the problem
/* =============> function multiply(a, b) {
return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

