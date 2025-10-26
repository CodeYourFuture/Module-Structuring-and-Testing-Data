// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(kg) {
  const pounds = kg * 2.20462;
  return `${pounds.toFixed(2)} lbs`; // returns a string
}

// Test cases 
console.log(toPounds(1));   //the output "2.20 lbs"
console.log(toPounds(5));   //the output is  "11.02 lbs"
console.log(toPounds(10)); //the output is  "22.05 lbs"
