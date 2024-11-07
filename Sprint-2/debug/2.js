// Predict and explain first...

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/*
We have to make a dynamic instead of makining static that means we have to decare a  varibale inside the getLastDigit function then every thing that we pass a value through this fuctnion will be 
excuted and generate an appropriate output.
*/
