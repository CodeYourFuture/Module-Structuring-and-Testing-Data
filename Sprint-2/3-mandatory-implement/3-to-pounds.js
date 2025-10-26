// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// I thought adding "lbs" need to be inside a string .
// i converted the  string back to number

function toPounds(kg) {
  const pounds = kg * 2.20462;
  return Number(pounds.toFixed(2)); 
}
console.log(`${toPounds(5)} lbs`);  


// more Test cases 
console.log(`${toPounds(1)} lbs`); // 2.20 lbs 
console.log(`${toPounds(5)} lbs`);  // 11.02 lbs
console.log(`${toPounds(10)} lbs`);  // 22.05 lbs