function cardValidator(num) {
  const numStr = num.toString(); // Convert to string for iteration with this we can check the length and individual checks
  if (numStr.length !== 16 || !/^[0-9]+$/.test(numStr) || numStr[numStr.length -1] % 2 === 1) {
    console.log("I stopped because one of my condition is true")
    return false; // Check length is 16 numbers long, if it only contains digits and if the last digits is even
  }

  let firstDigit = numStr[0]; // Track the first digit to compare with the rest digits
  for (let i = 1; i < numStr.length; i++) {
  // console.log(`compare ${numStr[i]} con ${firstDigit} in position ${i}`);

    if (numStr[i] !== firstDigit) {
      // console.log(`diferent digit found: ${numStr[i]}`);
      return true; // Found at least two different digits
    }
  }
    // console.log("all digits are distint to same.");
  console.log(`The last digit (${numStr[numStr.length - 1]}) is odd, so the validation fails.`);
  return false; // All digits are the same
}

console.log(cardValidator(1111111111111111)); // Output: false and stop in the first return.
// console.log(cardValidator(1234567890123456)); // Output: true
// console.log(cardValidator(2222222222222222)); // Output: false
// console.log(cardValidator(3333333333333334)); // Output: true

