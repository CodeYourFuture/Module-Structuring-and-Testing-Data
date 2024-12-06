// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

Prediction: there's something wrong with the syntax of our code, one of the rules of the return statement is that it 
  forbids line terminators between the return keyword and the expression to be returned.
  If we put in a line terminator before the value we have to return we will get an error and our value will not be read.


Fixing the error: 

function sum(a, b) {
   return  a + b;
}
 
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

 The sum of 10 and 32 is 42
