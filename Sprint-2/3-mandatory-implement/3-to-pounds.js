// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(kg) {
  const pounds = kg * 2.20462; 

    return pounds;
}
console.log(toPounds(1));   
console.log(toPounds(5));   
console.log(toPounds(10));  
  // if I want to round the result to 2 decimal places I can use toFixed(2)
  console.log(toPounds(1).toFixed(2));   
  console.log(toPounds(5).toFixed(2));   
  console.log(toPounds(10).toFixed(2));