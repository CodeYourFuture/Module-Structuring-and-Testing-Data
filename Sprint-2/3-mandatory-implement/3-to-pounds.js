// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// I thought adding "lbs" need to be inside a string .
// i converted the  string back to number

//function toPounds(kg) {
  //const pounds = kg * 2.20462;
  //return Number(pounds.toFixed(2)); 
//}
//console.log(`${toPounds(5)} lbs`);  


// more Test cases 
//console.log(`${toPounds(1)} lbs`); // 2.20 lbs 
//console.log(`${toPounds(5)} lbs`);  // 11.02 lbs
//console.log(`${toPounds(10)} lbs`);  // 22.05 lbs

// I have misunderstood the requirement

// Original code from interpret/to-pounds.js

function toPounds(penceString) {
  // Remove the 'p'
  const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

  // Make sure there are at least 3 digits (e.g. "5" becomes "005")
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Extract pounds (everything except the last two digits)
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Extract pence 
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  // 5️⃣ Return the formatted value
  return `£${pounds}.${pence}`;
}

// ✅ Test the function with examples
console.log(toPounds("399p")); // £3.99
console.log(toPounds("5p"));   // £0.05
console.log(toPounds("50p"));  // £0.50
console.log(toPounds("1234p")); // £12.34
