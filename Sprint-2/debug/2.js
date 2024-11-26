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
//because in line 3, a const variable was assigned to num with the value of 103, so whenever the getlastgigit function is callin
//it calculate the answer with num=103, but not with other numbers.
//also we needed to put an argument for the function in line 5
