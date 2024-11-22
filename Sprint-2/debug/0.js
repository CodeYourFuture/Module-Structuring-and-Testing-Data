// Predict and explain first...

function multiply(a, b) {
  //console.log(a * b);
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/* 
Frankly speaking, I did this task in reverse order. 
I first launched it, and then reviewed the code.
If we imagine that I first reviewed it to predict, 
then at first glance everything should work correctly.

But after launching, we see that the result of calling 
the multiply function is not displayed in the console. 
This means that I did not review it carefully. 
Our function does not return any value, but outputs 
information to the console, so we get its value undefined. 
We need to fix the code so that the function returns a value.
 */