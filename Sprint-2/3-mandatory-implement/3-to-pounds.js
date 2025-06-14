// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(kilograms) {
  if (typeof kilograms !== 'number' || kilograms <= 0 ) {
    throw new Error("Input must be a number greater than zero");
  }
  const pounds = kilograms * 2.20462;
  return pounds;
}

console.log(toPounds(50)); 
console.log(toPounds(50)); 
console.log(toPounds(100)); 








