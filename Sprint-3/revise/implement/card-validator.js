function cardValidator(num) {
  const numStr = num.toString(); // Convert to string for iteration
  if (numStr.length !== 16 || !/^[0-9]+$/.test(numStr) || numStr[numStr.length -1] % 2 === 1) {
    return false; // Check length is 16 numbers long, if it only contains digits and if the last digits is even
  }

  let firstDigit = numStr[0]; // Track the first digit
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] !== firstDigit) {
      return true; // Found at least two different digits
    }
  }

  return false; // All digits are the same
}

console.log(cardValidator(1111111111111111)); // Output: false
console.log(cardValidator(1234567890123456)); // Output: true
console.log(cardValidator(2222222222222222)); // Output: false
console.log(cardValidator(3333333333333334)); // Output: true

