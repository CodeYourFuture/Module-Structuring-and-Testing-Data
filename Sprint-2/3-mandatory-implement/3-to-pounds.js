// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(amount) { 
  const parameterString = String(amount);
  let penceStringWithoutTrailingP;
  
  if (parameterString.endsWith('p')) {
    penceStringWithoutTrailingP = parameterString.substring(0, parameterString.length - 1);
  } else {
    penceStringWithoutTrailingP = parameterString;
  }
  const penceValue = parseInt(penceStringWithoutTrailingP, 10);

  if (isNaN(penceValue)) {
      return "Please enter a valid number."
  }
  const pound = Math.floor(penceValue / 100);
  const pence = penceValue % 100;
  const formattedPence = String(pence).padStart(2, "0");

  return `£${pound}.${formattedPence}`;
}

console.log(toPounds("0p")); 
console.log(toPounds("5643p")); 
console.log(toPounds("20p")); 
console.log(toPounds("10000p")); 
console.log(toPounds("1p")); 
console.log(toPounds(5));
console.log(toPounds(100));
