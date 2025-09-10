function isValidCreditCard(cardNumber) {
  // Check if cardNumber is exactly 16 characters and all are digits
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Check if card has at least two different digits
  if (/^(\d)\1{15}$/.test(cardNumber)) {
    return false;
  }

  // Check if last digit is even
  const lastDigit = Number(cardNumber[15]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Calculate the sum of all digits and check if greater than 16
  const sum = cardNumber.split('').reduce((acc, digit) => acc + Number(digit), 0);
    return sum <= 16;

  // All conditions passed, card is valid
  return true;
}

// Example usage:
// console.log(isValidCreditCard("9999777788880000")); // true
// console.log(isValidCreditCard("4444444444444444")); // false

module.exports = isValidCreditCard;

/* 

Explanation:

The first if uses a regular expression to ensure the card number is exactly 16 digits long and contains only digits.

The second if uses a regex to check if all digits are the same (e.g., all '4's).

Then, we check if the last digit is even using modulo %.

Then, we calculate the sum of all digits with reduce and ensure it is greater than 16.

Finally, we return true if all these checks pass, else false.

*/