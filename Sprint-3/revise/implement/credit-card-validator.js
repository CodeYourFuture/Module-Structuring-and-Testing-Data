



// Function to validate a credit card number
function creditCardValidator(number) {
  // Step 1: Convert the number to a string so we can work with its digits
  const numStr = number.toString();

  // Step 2: Check if the number has exactly 16 digits
  if (numStr.length !== 16) {
    return false; // Invalid if not 16 digits
  }

  // Step 3: Check if all characters are numbers
  if (isNaN(number)) {
    return false; // Invalid if not a number
  }

  // Step 4: Make sure there are at least two different digits
  let firstDigit = numStr[0]; // Get the first digit
  let allSame = true; // Assume all digits are the same
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] !== firstDigit) {
      allSame = false; // Found a different digit
      break; // Stop checking further
    }
  }
  if (allSame) {
    return false; // Invalid if all digits are the same
  }

  // Step 5: Check if the last digit is even
  let lastDigit = parseInt(numStr[numStr.length - 1]); // Get the last digit as a number
  if (lastDigit % 2 !== 0) {
    return false; // Invalid if the last digit is odd
  }

  // Step 6: Calculate the sum of all digits
  let sum = 0; // Start with a sum of 0
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]); // Add each digit to the sum
  }
  if (sum <= 16) {
    return false; // Invalid if the sum is 16 or less
  }

  // If all checks pass, the credit card is valid
  return true;
}

module.export= creditCardValidator;

console.log(creditCardValidator("9999777788880000"));
console.log(creditCardValidator("6666666666661666"));
console.log (creditCardValidator("298947486556"));
console.log(creditCardValidator("111222345666667890"));
console.log(creditCardValidator("0000000000000000"));
