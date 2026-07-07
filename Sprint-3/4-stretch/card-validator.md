## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.

Good luck!


function validateCreditCard(cardNumber) {
  // Requirement Rule 1: Must be exactly 16 characters long and contain only numbers
  const is16Digits = /^\d{16}$/.test(cardNumber);
  if (!is16Digits) {
    return false;
  }

  // Convert the string into an array of integers for numerical calculations
  const digits = cardNumber.split("").map(Number);

  // Requirement Rule 2: Must have at least two different digits represented
  // We use a Set because it automatically filters out duplicate values
  const uniqueDigits = new Set(digits);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Requirement Rule 3: The final digit must be even
  const lastDigit = digits[digits.length - 1];
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Requirement Rule 4: The sum of all digits must be greater than 16
  const totalSum = digits.reduce((sum, currentDigit) => sum + currentDigit, 0);
  if (totalSum <= 16) {
    return false;
  }

  // If the number passes every single gatekeeper conditional check above, it's valid!
  return true;
}

module.exports = validateCreditCard;
