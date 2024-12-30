function cardValidator(num) {
  const numStr = num.toString(); // Convert to string for iteration and validation

  // Initial validation conditions:
  if (
    numStr.length !== 16 || // Must be exactly 16 digits long
    !/^[0-9]+$/.test(numStr) || // Must contain only numbers
    numStr[numStr.length - 1] % 2 === 1 || // Last digit must be even
    numStr.split("").map(Number).reduce((acc, val) => acc + val, 0) <= 16 // Sum of digits must be greater than 16
  ) {
    console.log("I stopped because one of my conditions is true");
    return false;
  }

  // Check if all digits are the same:
  const firstDigit = numStr[0];
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] !== firstDigit) {
      return true; // Found at least two different digits
    }
  }

  console.log(`The last digit (${numStr[numStr.length - 1]}) is odd, so the validation fails.`);
  return false; // All digits are the same
}

// Test cases:
console.log(cardValidator(1111111111111111)); // Output: false (all digits are the same)
console.log(cardValidator(1234567890123456)); // Output: true (valid card)
console.log(cardValidator(2222222222222222)); // Output: false (all digits are the same)
console.log(cardValidator(3333333333333334)); // Output: true (valid card)
