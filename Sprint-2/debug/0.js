// Predict and explain first...
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`)

Prediction: the function is going to print the answer to 10 and 32. 
          It is also going to print "The result of multiplying 10 and 32 is"
The Output of the above code is 320. The result of multiplying 10 and 32 is.

The code above gives us 2 results and that is not what we want, to fix that we have to remove the console log() inside of the function and replace it with a return statement. 
The console log prints out the message we want to the console if we have 2 of them that means we are going to have 2 outputs. 
The return statement will help us by sending the results of our multiplication in the part where we called our function.
 
Fixing the error: 
function multiply(a, b) {
    return (a * b);
  }
  
  let a = 10;
  let b = 32;
 
  let result = multiply(a, b)
  
  console.log(`The result of multiplying ${a} and ${b} is ${result}`);


