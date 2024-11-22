// Predict and explain first...

const num = 103;

function getLastDigit(parsingNumber) {
  return parsingNumber.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/* 
My prediction:
1. When I made the prediction, I saw only the first 12 lines 
of the script. So I first built an algorithm based on the code. 
And then I put forward a theory that it could be wrong.

In my opinion, the error is that the function always returns 
the last character of our constant, which is defined in line 3:
const num = 103;

and my theory is based by line 6:
return num.toString().slice(-1);

But based on our script, in lines 9 through 11 
we should get the last digit from different numbers 
and output it to the console.


2. Then I scrolled through the script to write 
my research and came across a description of what 
the script should do. This gave me confidence in 
the correctness of my theory. Let's check it out



Test results:
As expected, testing confirmed my theory, so I just fix the code.
 */