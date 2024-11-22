// Predict and explain first...

function sum(a, b) {
  //return;
  //a + b;
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


/* 
My prediction:
We should initially get the result as in previous exercise, 
i.e. the value of the sum function should be undefined, 
because in line 4 of our script the return operator does 
not return anything, i.e. an undefined value.
Line 5 of our script will be ignored, because 
in the previous line there is a return from the function.
In my opinion, there should be no system crash.

Let's check if my theory is correct,  and just fix the code. 


Test results:
As expected, testing confirmed my theory, so I just fix the code.
*/