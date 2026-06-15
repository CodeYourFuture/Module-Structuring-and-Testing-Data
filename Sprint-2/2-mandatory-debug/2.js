
The const should not be put into the global frame. 
if it is set in the global frame,  this will result in a single result:3, 
no matter which variables you put in later. 

The variable insides should have num to match the function expression. 


My prediction of the result will be all in 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);



yes the output is all in 3, because the reason are above .



... ... ... ... ... ... ... ... ... ... ... ... ... ... ...

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


After we delete the global frame and put in the variable, we see
the result now shows three different digit number.