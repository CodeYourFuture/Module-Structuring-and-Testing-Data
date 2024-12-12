function cardValidator(ccNumber) {
  // Ensure the card number is treated as a string
  const ccString = ccNumber.toString();

  // Helper variables
  const ccNumberArray = ccString.split("").map((dig) => Number(dig)); // Array of card number digits.
  const digitsRegex = /^\d+$/; // Regex to check only numeric characters

  // Validation checks
  const isCorrectLength = ccString.length === 16; // Number must be 16 digits
  const hasMultipleDigits = [...new Set(ccNumberArray)].length > 1; // At least two different digits
  const hasValidChars = digitsRegex.test(ccString); // All characters are numeric
  const endsWithEvenDigit = ccNumberArray[ccNumberArray.length - 1] % 2 === 0; // Last digit is even
  const isSumGreaterThan16 = ccNumberArray.reduce((a, c) => a + c, 0) > 16; // Sum of digits greater than 16

  // Return true if all conditions are met, false otherwise
  return (
    isCorrectLength &&
    hasMultipleDigits &&
    hasValidChars &&
    endsWithEvenDigit &&
    isSumGreaterThan16
  );
}

module.exports = cardValidator;
